import { notFound } from "next/navigation";
import BlogDetail from "@/components/features/blogs/BlogDetail";
import BlogGetInTouch from "@/components/features/blogs/BlogGetInTouch";
import BlogInternalAudit from "@/components/features/blogs/BlogInternalAudit";
import BlogRelated from "@/components/features/blogs/BlogRelated";
import BlogTrustedLeader from "@/components/features/blogs/BlogTrustedLeader";
import { blogData } from "@/data/blogData";
import { ScrollLinked } from "@/components/features/blogs/ScrollLinked";

type Props = {
  params: Promise<{ slug: string }>;
};

// Static data for sections that are not yet dynamic in the data model
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
  },
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blogPost = blogData.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }

  const relatedBlogs = blogData
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map(post => ({
      ...post,
      slug: `/blog/${post.slug}`
    }));

  const pageData = {
    audit_data: {
      media: {
        media_type: "image",
        mobile_path: blogPost.media.path,
        desktop_path: blogPost.media.path,
        media_alt: blogPost.media.alt,
      },
      sub_title: blogPost.sub_title || blogPost.category,
      title: blogPost.title,
      date: blogPost.date,
      readTime: blogPost.readTime,
    },
    blog_detail: {
      media: {
        media_type: "image",
        mobile_path: blogPost.media.path,
        desktop_path: blogPost.media.path,
        media_alt: blogPost.media.alt,
      },
      sidebar_title: "Table Of Contents",
      item: blogPost.sidebarItems || [],
      sponsored: {
        label: "Sponsored",
        title: "Master Web Development in 30 Days",
        description: "Learn the skills you need to become a professional web developer with our comprehensive course.",
        ctaText: "Learn More",
        ctaHref: "/course",
        duration: "2:34",
        media: {
          desktop_path: "/images/sponsor01.jpg",
          media_alt: "Course preview",
        },
      },
      description: blogPost.content || blogPost.description,

    },
    related_blog: {
      title: "Related Blogs",
      items: relatedBlogs,
    },
  };

  return (
    <>
      <ScrollLinked />
      <article style={{ width: "100%" }}>
        <BlogInternalAudit data={pageData.audit_data} />
        <BlogDetail data={pageData.blog_detail} />
        <BlogRelated data={pageData.related_blog} />
        <BlogTrustedLeader data={staticSections.BlogTrustedLeaders} />
        <BlogGetInTouch data={staticSections.GetInTouch} />
      </article>
    </>
  );
}