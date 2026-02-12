import BlogHero, { BlogHeroData } from "@/components/features/blogs/BlogHero";
import BlogList from "@/components/features/blogs/BlogList";
import React from "react";
import type { InsightItem } from "@/app/page";
import { Metadata } from "next";
import { blogData } from "@/data/blogData";

type BlogPageData = {
  hero: BlogHeroData;
  blogs: {
    title: string;
    items: InsightItem[];
  };
};

const localData: BlogPageData = {
  hero: {
    title: "Our Blogs",
    description: "Stay informed with expert insights and the latest trends in audit, accounting and compliance in the UAE.",
  },
  blogs: {
    title: "Latest Reads",
    items: blogData.map((blog) => ({
      ...blog,
      id: blog.id,
      media: blog.media,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
      category: blog.category,
    })),
  },
};


export const metadata: Metadata = {
  title: "Blogs | Audit, Risk & Business Advisory Insights | KPI",
  description:
    "Expert insights on audit, risk and business advisory, delivered by trusted advisors with over 30 years of experience in the UAE. ",
};


export default function BlogPage() {
  return (
    <>
      <BlogHero data={localData.hero} />
      <BlogList data={localData.blogs} />
    </>
  );
}
