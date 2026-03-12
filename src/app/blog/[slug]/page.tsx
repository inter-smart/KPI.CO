import { notFound } from "next/navigation";
import BlogGetInTouch from "@/components/features/blogs/BlogGetInTouch";
import BlogRelated from "@/components/features/blogs/BlogRelated";
import BlogTrustedLeader from "@/components/features/blogs/BlogTrustedLeader";
import BlogReadingProgress from "@/components/features/blogs/BlogReadingProgress";
import BlogDetails, { generateBlogMetadata, fetchPost } from "@/components/features/blogs/BlogDetails";
import { Metadata } from "next";
import { getRelatedPosts, USE_MOCK } from "@/lib/blog-api";
import { transformWpPostToBlogItem } from "@/lib/utils";
import { MOCK_CATEGORIES } from "@/lib/blog-mock-data";

const BASE_WP_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";

type Props = {
  params: Promise<{ slug: string }>;
}; 

export type GetInTouch = {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
  images?: {
    overlay: string;
    overlayMobile: string;
  };
};

export type TrustedLeader = {
  id: number;
  media: {
    path: string;
    alt: string;
  };
};

const staticSections: {
  BlogTrustedLeaders: {
    title: string;
    description: string;
    partners: TrustedLeader[];
  };
  GetInTouch: GetInTouch;
} = {
  BlogTrustedLeaders: {
    title: "Trusted by Industry Leaders",
    description: "",
    partners: [
      { id: 1, media: { path: "/images/trusted-leader-1.svg", alt: "Emirates NBD" } },
      { id: 2, media: { path: "/images/trusted-leader-2.svg", alt: "Emirates NBD" } },
      { id: 3, media: { path: "/images/trusted-leader-3.svg", alt: "Emirates NBD" } },
      { id: 4, media: { path: "/images/trusted-leader-4.svg", alt: "Emirates NBD" } },
      { id: 5, media: { path: "/images/trusted-leader-2.svg", alt: "Emirates NBD" } },
      { id: 6, media: { path: "/images/banking-partner-3.svg", alt: "Emirates NBD" } },
    ],
  },
  GetInTouch: {
    title: "Stay Ahead of the Curve",
    description: "<p>Subscribe for Expert Audit and Financial Insights Directly to Your Inbox.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/blogCtaBanner.png",
      overlayMobile: "/images/blogCtaBanner-mob.svg",
    },
  },
};

export async function generateMetadata({ params }:  { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return generateBlogMetadata(slug);
}


export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  
  const { rawPost } = await fetchPost(slug);
  
  if (!rawPost) {
    notFound();
  }

  const primaryCategory = rawPost.categories?.[0];
  let relatedPosts: any[] = [];
  
  if (primaryCategory) {
    relatedPosts = await getRelatedPosts(primaryCategory, 6, [rawPost.id]);
  }

  const transformedRelated = await Promise.all(
    relatedPosts.map((post) => {
      const mediaFetcher = (id: number) => {
        const embedded = post._embedded?.["wp:featuredmedia"];
        if (embedded) {
          const media = embedded.find((m: any) => m.id === id);
          if (media) return Promise.resolve(media);
        }
        return Promise.resolve(null);
      };

      const categoryFetcher = (id: number) => {
        if (USE_MOCK) {
          const cat = MOCK_CATEGORIES.find((c) => c.id === id);
          return Promise.resolve(cat?.name || "");
        }
        const terms = post._embedded?.["wp:term"];
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

      return transformWpPostToBlogItem(post, mediaFetcher, categoryFetcher);
    })
  );

  const pageData = {
    related_blog: {
      title: "Related Blogs",
      items: transformedRelated as any,
    },
  };

  return (
    <>
      <article style={{ width: "100%"}}>
        <BlogReadingProgress >
         <BlogDetails slug={slug} />
        </BlogReadingProgress>
        
        {transformedRelated.length > 0 && (
          <BlogRelated data={pageData.related_blog} />
        )}
        
        <BlogTrustedLeader data={staticSections.BlogTrustedLeaders} />
        <BlogGetInTouch data={staticSections.GetInTouch} />
      </article>
    </>
  );
}