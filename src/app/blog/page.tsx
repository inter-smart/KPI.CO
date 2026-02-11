import BlogHero, { BlogHeroData } from "@/components/features/blogs/BlogHero";
import BlogList from "@/components/features/blogs/BlogList";
import React from "react";
import type { InsightItem } from "@/app/page";
import { Metadata } from "next";

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
    items: [
      {
        id: 1,
        media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Audit",
      },
      {
        id: 2,
        media: { path: "/images/home-insights-2.jpg", alt: "Top Audit Firms UAE" },
        title: "Top 10 Audit firms in UAE",
        description: "Slate helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Advisory",
      },
      {
        id: 3,
        media: { path: "/images/home-insights-3.jpg", alt: "Audit Firm Selection" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt e days you need to work to reach",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Audit",
      },
      {
        id: 4,
        media: { path: "/images/home-insights-1.jpg", alt: "Business License" },
        title: "Choosing the Right Business License",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Corporate Services",
      },
      {
        id: 5,
        media: { path: "/images/home-insights-2.jpg", alt: "AI in Auditing" },
        title: "How Artificial Intelligence Will Change the Auditing Function",
        description: "Slate helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Risk",
      },
      {
        id: 6,
        media: { path: "/images/home-insights-3.jpg", alt: "Company Formation" },
        title: "FAQs about Company Formation in UAE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Corporate Services",
      },
      {
        id: 7,
        media: { path: "/images/home-insights-1.jpg", alt: "Bookkeeping Guide" },
        title: "Essential Guide for Bookkeeping and Auditing in the UAE",
        description: "Slate helps you see how many more days you need to work.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Advisory",
      },
      {
        id: 8,
        media: { path: "/images/home-insights-2.jpg", alt: "VAT Registration" },
        title: "When Value Added Tax (VAT) Registration is Mandatory in the UAE",
        description: "Slate helps you see how many more days you need to work to  reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Tax",
      },
      {
        id: 1,
        media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Audit",
      },
      {
        id: 2,
        media: { path: "/images/home-insights-2.jpg", alt: "Top Audit Firms UAE" },
        title: "Top 10 Audit firms in UAE",
        description: "Slate helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Advisory",
      },
      {
        id: 3,
        media: { path: "/images/home-insights-3.jpg", alt: "Audit Firm Selection" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt e days you need to work to reach",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Audit",
      },
      {
        id: 4,
        media: { path: "/images/home-insights-1.jpg", alt: "Business License" },
        title: "Choosing the Right Business License",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Corporate Services",
      },
      {
        id: 5,
        media: { path: "/images/home-insights-2.jpg", alt: "AI in Auditing" },
        title: "How Artificial Intelligence Will Change the Auditing Function",
        description: "Slate helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Risk",
      },
      {
        id: 6,
        media: { path: "/images/home-insights-3.jpg", alt: "Company Formation" },
        title: "FAQs about Company Formation in UAE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed insights.",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Corporate Services",
      },
      {
        id: 7,
        media: { path: "/images/home-insights-1.jpg", alt: "Bookkeeping Guide" },
        title: "Essential Guide for Bookkeeping and Auditing in the UAE",
        description: "Slate helps you see how many more days you need to work.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Advisory",
      },
      {
        id: 8,
        media: { path: "/images/home-insights-2.jpg", alt: "VAT Registration" },
        title: "When Value Added Tax (VAT) Registration is Mandatory in the UAE",
        description: "Slate helps you see how many more days you need to work to  reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
        category: "Tax",
      },
    ],
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
