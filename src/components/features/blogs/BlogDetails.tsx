// BlogDetails.tsx (Server Component)

import BlogDetail from "./BlogDetail";
import BlogInternalAudit from "./BlogInternalAudit";
import { transformWpPostToBlogItem } from "@/lib/utils";
import { USE_MOCK, getMediaById } from "@/lib/blog-api";
import { MOCK_POSTS, MOCK_CATEGORIES } from "@/lib/blog-mock-data";
import type { Metadata } from "next";
import { generatePostSEO, getSchemaScript } from "@/lib/meta-api";

const BASE_WP_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";

type BlogDetailsProps = {
  slug: string;
};

export async function fetchPost(slug: string) {
  if (USE_MOCK) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const rawPost = MOCK_POSTS.find((p) => p.slug === slug) ?? null;
    if (!rawPost) return { rawPost: null, transformed: null };

    const mediaFetcher = (id: number) => Promise.resolve(null);
    const categoryFetcher = (id: number) => {
      const cat = MOCK_CATEGORIES.find((c) => c.id === id);
      return Promise.resolve(cat?.name || "");
    };

    const transformed = await transformWpPostToBlogItem(rawPost, mediaFetcher, categoryFetcher);
    return { rawPost, transformed };
  }

  try {
    const res = await fetch(
      `${BASE_WP_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 3600 } } // ISR: revalidate every hour
    );
    const posts = await res.json();
    if (!posts.length) return { rawPost: null, transformed: null };

    const rawPost = posts[0];

    const mediaFetcher = (id: number) => {
      const embedded = rawPost._embedded?.["wp:featuredmedia"];
      if (embedded) {
        const media = embedded.find((m: any) => m.id === id);
        if (media) return Promise.resolve(media);
      }
      return getMediaById(id);
    };

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

    const transformed = await transformWpPostToBlogItem(rawPost, mediaFetcher, categoryFetcher);
    return { rawPost, transformed };
  } catch (err) {
    console.error("Failed to fetch blog post:", err);
    return { rawPost: null, transformed: null };
  }
}

// ── Exported for use in page.tsx generateMetadata ──────────────────────────
export async function generateBlogMetadata(slug: string): Promise<Metadata> {
  const { rawPost } = await fetchPost(slug);
  if (!rawPost?.yoast_head_json) return {};

  return generatePostSEO(rawPost, { siteUrl: "https://kpi.co" });
}

// ── Server Component ────────────────────────────────────────────────────────
export default async function BlogDetails({ slug }: BlogDetailsProps) {
  const { rawPost, transformed: post } = await fetchPost(slug);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-500">Blog post not found.</div>
    );
  }


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
      {/* JSON-LD structured data */}
      {rawPost?.yoast_head_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getSchemaScript(rawPost) }}
        />
      )}
      <BlogInternalAudit data={auditData} />
      <BlogDetail data={detailData} />
    </>
  );
}