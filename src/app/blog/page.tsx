import { Suspense } from "react";
import { Metadata } from "next";
import BlogHero, { BlogHeroData } from "@/components/features/blogs/BlogHero";
import BlogList from "@/components/features/blogs/BlogList";
import { getCategoryTree } from "@/lib/blog-api";

type BlogPageData = {
  hero: BlogHeroData;
  blogs: {
    title: string;
  };
};

const localData: BlogPageData = {
  hero: {
    title: "Our Blogs",
    description: "Stay informed with expert insights and the latest trends in audit, accounting and compliance in the UAE.",
  },
  blogs: {
    title: "Latest Reads",
  },
};

export const metadata: Metadata = {
  title: "Blogs | Audit, Risk & Business Advisory Insights | KPI",
  description:
    "Expert insights on audit, risk and business advisory, delivered by trusted advisors with over 30 years of experience in the UAE.",

  openGraph: {
    title: "Blogs | Audit, Risk & Business Advisory Insights | KPI",
    description:
      "Expert insights on audit, risk and business advisory, delivered by trusted advisors with over 30 years of experience in the UAE.",
    url: "https://kpi.co/blog",
    siteName: "KPI.CO",
    type: "website",
    images: ["/images/KPI-logo-og.png"],
  },
};

export default async function BlogPage() {
  const categories = await getCategoryTree();

  return (
    <>
      <BlogHero data={localData.hero} />
      <Suspense fallback={
        <div className="container py-20 text-center text-gray-400">
          Loading Insights...
        </div>
      }>
        <BlogList data={localData.blogs} categories={categories} />
      </Suspense>
    </>
  );
}