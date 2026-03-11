// ─── Mock Data for Blog API ───────────────────────────────────────────────────
// This file contains dummy data used when USE_MOCK is true in blog-api.ts.
// All shapes mirror the WordPress REST API v2 response format.

import type { WPCategory, WPPost, WPTag, WPMedia } from "./blog-api";

// ─── Categories ───────────────────────────────────────────────────────────────

export const MOCK_CATEGORIES: WPCategory[] = [
  // Parent categories (parent: 0)
  { id: 1, name: "Services", slug: "services", parent: 0, count: 8, description: "Our core services" },
  { id: 2, name: "Industries", slug: "industries", parent: 0, count: 6, description: "Industry verticals" },
  { id: 3, name: "Insights", slug: "insights", parent: 0, count: 4, description: "Expert insights" },

  // Children of "Services" (parent: 1)
  { id: 10, name: "Audit & Assurance", slug: "audit-assurance", parent: 1, count: 3, description: "" },
  { id: 11, name: "Tax Advisory", slug: "tax-advisory", parent: 1, count: 2, description: "" },
  { id: 12, name: "Risk & Compliance", slug: "risk-compliance", parent: 1, count: 3, description: "" },

  // Children of "Industries" (parent: 2)
  { id: 20, name: "Banking & Finance", slug: "banking-finance", parent: 2, count: 2, description: "" },
  { id: 21, name: "Real Estate", slug: "real-estate", parent: 2, count: 2, description: "" },
  { id: 22, name: "Healthcare", slug: "healthcare", parent: 2, count: 2, description: "" },

  // Children of "Insights" (parent: 3)
  { id: 30, name: "Regulatory Updates", slug: "regulatory-updates", parent: 3, count: 2, description: "" },
  { id: 31, name: "Market Trends", slug: "market-trends", parent: 3, count: 2, description: "" },
];

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const MOCK_TAGS: WPTag[] = [
  { id: 100, name: "UAE", slug: "uae", count: 5 },
  { id: 101, name: "VAT", slug: "vat", count: 3 },
  { id: 102, name: "Corporate Tax", slug: "corporate-tax", count: 4 },
  { id: 103, name: "IFRS", slug: "ifrs", count: 2 },
  { id: 104, name: "ESR", slug: "esr", count: 2 },
];

// ─── Media ────────────────────────────────────────────────────────────────────

export const MOCK_MEDIA: WPMedia[] = [
  {
    id: 201,
    source_url: "/images/placeholder-image.png",
    alt_text: "Blog placeholder 1",
    media_details: { width: 1200, height: 630, sizes: {} },
  },
  {
    id: 202,
    source_url: "/images/placeholder-image.png",
    alt_text: "Blog placeholder 2",
    media_details: { width: 1200, height: 630, sizes: {} },
  },
];

// ─── Posts ─────────────────────────────────────────────────────────────────────

const sampleContent = `
<h2>Overview</h2>
<p>In the rapidly evolving business landscape of the UAE, maintaining robust audit and compliance practices is essential for sustainable growth. This article explores the key aspects that businesses need to consider.</p>

<h2>Key Considerations</h2>
<p>Organizations operating in the UAE must stay abreast of the latest regulatory requirements. From VAT compliance to Economic Substance Regulations (ESR), the scope of compliance has expanded significantly in recent years.</p>

<h2>Best Practices</h2>
<p>Implementing a proactive approach to audit and compliance can help businesses avoid costly penalties and reputational damage. Regular internal audits, robust documentation, and staying updated with regulatory changes are crucial steps.</p>

<h2>Conclusion</h2>
<p>As the UAE continues to strengthen its regulatory framework, businesses that invest in sound audit and compliance practices will be better positioned for long-term success.</p>
`;

export const MOCK_POSTS: WPPost[] = [
  {
    id: 1001,
    slug: "understanding-uae-corporate-tax",
    title: { rendered: "Understanding UAE Corporate Tax: A Complete Guide for Businesses" },
    excerpt: { rendered: "<p>A comprehensive guide to understanding the UAE's corporate tax framework and how it impacts your business operations.</p>" },
    content: { rendered: sampleContent },
    date: "2025-12-15T10:00:00",
    modified: "2025-12-16T08:30:00",
    featured_media: 201,
    categories: [10, 30],
    tags: [100, 102],
    sticky: false,
    link: "https://blogadmin.kpi.co/understanding-uae-corporate-tax",
    status: "publish",
  },
  {
    id: 1002,
    slug: "vat-compliance-best-practices",
    title: { rendered: "VAT Compliance Best Practices for UAE Companies" },
    excerpt: { rendered: "<p>Essential VAT compliance strategies to help UAE businesses stay compliant and avoid common pitfalls.</p>" },
    content: { rendered: sampleContent },
    date: "2025-11-20T09:00:00",
    modified: "2025-11-21T14:00:00",
    featured_media: 202,
    categories: [11],
    tags: [100, 101],
    sticky: false,
    link: "https://blogadmin.kpi.co/vat-compliance-best-practices",
    status: "publish",
  },
  {
    id: 1003,
    slug: "internal-audit-framework",
    title: { rendered: "Building an Effective Internal Audit Framework" },
    excerpt: { rendered: "<p>Learn how to establish a robust internal audit framework that strengthens governance and risk management.</p>" },
    content: { rendered: sampleContent },
    date: "2025-10-10T11:00:00",
    modified: "2025-10-11T09:00:00",
    featured_media: 201,
    categories: [10],
    tags: [100],
    sticky: true,
    link: "https://blogadmin.kpi.co/internal-audit-framework",
    status: "publish",
  },
  {
    id: 1004,
    slug: "real-estate-regulatory-changes",
    title: { rendered: "Navigating Real Estate Regulatory Changes in the UAE" },
    excerpt: { rendered: "<p>Key regulatory changes impacting the UAE real estate sector and what developers and investors need to know.</p>" },
    content: { rendered: sampleContent },
    date: "2025-09-05T08:00:00",
    modified: "2025-09-06T10:00:00",
    featured_media: 202,
    categories: [21, 30],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/real-estate-regulatory-changes",
    status: "publish",
  },
  {
    id: 1005,
    slug: "healthcare-compliance-uae",
    title: { rendered: "Healthcare Compliance in the UAE: What You Need to Know" },
    excerpt: { rendered: "<p>An overview of compliance requirements for healthcare providers operating in the UAE.</p>" },
    content: { rendered: sampleContent },
    date: "2025-08-22T10:30:00",
    modified: "2025-08-23T12:00:00",
    featured_media: 201,
    categories: [22, 12],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/healthcare-compliance-uae",
    status: "publish",
  },
  {
    id: 1006,
    slug: "banking-aml-compliance",
    title: { rendered: "AML Compliance for Banking & Finance Sector in the UAE" },
    excerpt: { rendered: "<p>Understanding Anti-Money Laundering compliance requirements for financial institutions in the UAE.</p>" },
    content: { rendered: sampleContent },
    date: "2025-07-18T09:15:00",
    modified: "2025-07-19T11:00:00",
    featured_media: 202,
    categories: [20, 12],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/banking-aml-compliance",
    status: "publish",
  },
  {
    id: 1007,
    slug: "ifrs-adoption-guide",
    title: { rendered: "IFRS Adoption Guide for UAE Businesses" },
    excerpt: { rendered: "<p>A practical guide to adopting International Financial Reporting Standards for businesses in the UAE.</p>" },
    content: { rendered: sampleContent },
    date: "2025-06-12T14:00:00",
    modified: "2025-06-13T09:00:00",
    featured_media: 201,
    categories: [10],
    tags: [100, 103],
    sticky: false,
    link: "https://blogadmin.kpi.co/ifrs-adoption-guide",
    status: "publish",
  },
  {
    id: 1008,
    slug: "esr-reporting-requirements",
    title: { rendered: "Economic Substance Regulations: Reporting Requirements Explained" },
    excerpt: { rendered: "<p>A detailed breakdown of ESR reporting requirements and how to ensure your business remains compliant.</p>" },
    content: { rendered: sampleContent },
    date: "2025-05-08T10:00:00",
    modified: "2025-05-09T08:00:00",
    featured_media: 202,
    categories: [12, 30],
    tags: [100, 104],
    sticky: false,
    link: "https://blogadmin.kpi.co/esr-reporting-requirements",
    status: "publish",
  },
  {
    id: 1009,
    slug: "market-trends-gcc-2025",
    title: { rendered: "Top Market Trends Shaping the GCC Business Landscape in 2025" },
    excerpt: { rendered: "<p>An analysis of the key market trends that are redefining business strategies across the GCC region.</p>" },
    content: { rendered: sampleContent },
    date: "2025-04-15T11:30:00",
    modified: "2025-04-16T09:00:00",
    featured_media: 201,
    categories: [31],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/market-trends-gcc-2025",
    status: "publish",
  },
  {
    id: 1010,
    slug: "tax-planning-strategies-uae",
    title: { rendered: "Effective Tax Planning Strategies for UAE Enterprises" },
    excerpt: { rendered: "<p>Strategic tax planning approaches to optimise your business's tax position under the UAE corporate tax regime.</p>" },
    content: { rendered: sampleContent },
    date: "2025-03-20T09:00:00",
    modified: "2025-03-21T10:00:00",
    featured_media: 202,
    categories: [11],
    tags: [100, 102],
    sticky: false,
    link: "https://blogadmin.kpi.co/tax-planning-strategies-uae",
    status: "publish",
  },
  {
    id: 1011,
    slug: "risk-management-framework",
    title: { rendered: "Developing a Risk Management Framework for Growing Businesses" },
    excerpt: { rendered: "<p>How to build and implement a risk management framework that scales with your business growth.</p>" },
    content: { rendered: sampleContent },
    date: "2025-02-10T08:45:00",
    modified: "2025-02-11T10:00:00",
    featured_media: 201,
    categories: [12],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/risk-management-framework",
    status: "publish",
  },
  {
    id: 1012,
    slug: "digital-transformation-finance",
    title: { rendered: "Digital Transformation in Finance: A Roadmap for UAE Firms" },
    excerpt: { rendered: "<p>Exploring how digital transformation is reshaping finance functions and what firms need to do to stay ahead.</p>" },
    content: { rendered: sampleContent },
    date: "2025-01-25T13:00:00",
    modified: "2025-01-26T09:00:00",
    featured_media: 202,
    categories: [20, 31],
    tags: [100],
    sticky: false,
    link: "https://blogadmin.kpi.co/digital-transformation-finance",
    status: "publish",
  },
];
