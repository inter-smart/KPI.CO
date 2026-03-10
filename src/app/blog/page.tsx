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
  description: "Expert insights on audit, risk and business advisory, delivered by trusted advisors with over 30 years of experience in the UAE. ",
};

export default async function BlogPage() {
  const categories = await getCategoryTree();

  return (
    <>
      <BlogHero data={localData.hero} />
      <BlogList data={localData.blogs} categories={categories} />
    </>
  );
}
