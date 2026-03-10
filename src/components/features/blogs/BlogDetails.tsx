"use client";

import { useEffect, useState } from "react";
import BlogDetail from "./BlogDetail";
import BlogInternalAudit from "./BlogInternalAudit";
import { transformWpPostToBlogItem } from "@/lib/utils";

const BASE_WP_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";

type BlogDetailsProps = {
  slug: string;
};

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${BASE_WP_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=1`
        );
        const posts = await res.json();

        if (!posts.length) {
          setPost(null);
          return;
        }

        const rawPost = posts[0];

        // Use _embedded data for media to avoid extra requests
        const mediaFetcher = (mediaUrl: string) => {
          const embedded = rawPost._embedded?.["wp:featuredmedia"]?.[0];
          if (embedded) return Promise.resolve(embedded);
          return fetch(mediaUrl).then((r) => r.json());
        };

        // Use _embedded term data for category names
        const categoryFetcher = (id: number) => {
          const terms = rawPost._embedded?.["wp:term"];
          if (terms) {
            for (const group of terms) {
              for (const term of group) {
                if (term.id === id) return Promise.resolve(term.name);
              }
            }
          }
          return fetch(`${BASE_WP_URL}/categories/${id}`)
            .then((r) => r.json())
            .then((data) => data.name || "")
            .catch(() => "");
        };

        const transformed = await transformWpPostToBlogItem(
          rawPost,
          mediaFetcher,
          categoryFetcher
        );

        setPost(transformed);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-gray-400">Loading...</div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-500">Blog post not found.</div>
    );
  }

  // Shape data for BlogInternalAudit
  const auditData = {
    media: {
      media_type: "image",
      mobile_path: post.media?.path || "",
      desktop_path: post.media?.path || "",
      media_alt: post.media?.alt || post.title || "",
    },
    sub_title: post.sub_title || post.category || "",
    title: post.title || "",
    date: post.date || "",
    readTime: post.readTime || "",
    date_full: post.date_full || "",
  };

  // Shape data for BlogDetail
  const detailData = {
    media: {
      media_type: "image",
      mobile_path: post.media?.path || "",
      desktop_path: post.media?.path || "",
      media_alt: post.media?.alt || post.title || "",
    },
    sidebar_title: "Table Of Contents",
    item: post.sidebarItems || [],
    sponsored: {
      label: "Sponsored",
      title: "Master Web Development in 30 Days",
      description:
        "Learn the skills you need to become a professional web developer with our comprehensive course.",
      ctaText: "Learn More",
      ctaHref: "/course",
      duration: "2:34",
      media: {
        desktop_path: "/images/sponsor01.jpg",
        media_alt: "Course preview",
      },
    },
    description: post.content || post.description || "",
  };

  return (
    <>
      <BlogInternalAudit data={auditData} />
      <BlogDetail data={detailData} />
    </>
  );
}
