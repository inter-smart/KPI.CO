// lib/seo.ts

import type { Metadata } from "next";

interface YoastPost {
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  modified: string;
  yoast_head_json: {
    title: string;
    description: string;
    robots: {
      index: string;
      follow: string;
      "max-snippet"?: string;
      "max-image-preview"?: string;
      "max-video-preview"?: string;
    };
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    og_image?: { url: string; width: number; height: number; type: string }[];
    author: string;
    twitter_card: string;
    twitter_creator: string;
    twitter_site: string;
    twitter_misc?: Record<string, string>;
    schema: Record<string, unknown>;
  };
}

interface SEOOptions {
  /** Your Next.js site base URL e.g. "https://kpi.co" */
  siteUrl: string;
  /** Override the canonical URL if different from og_url */
  canonicalUrl?: string;
}

export function generatePostSEO(post: YoastPost, options: SEOOptions): Metadata {
  const { siteUrl, canonicalUrl } = options;
  const yoast = post.yoast_head_json;

  const ogImages = yoast.og_image?.map((img) => ({
    url: img.url,
    width: img.width,
    height: img.height,
    type: img.type,
  })) ?? [];

  const robotsIndex = yoast.robots.index === "index" ? "index" : "noindex";
  const robotsFollow = yoast.robots.follow === "follow" ? "follow" : "nofollow";

  return {
    title: yoast.title,
    description: yoast.description,

    robots: {
      index: robotsIndex === "index",
      follow: robotsFollow === "follow",
      googleBot: {
        index: robotsIndex === "index",
        follow: robotsFollow === "follow",
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: canonicalUrl ?? yoast.og_url,
    },

    authors: [{ name: yoast.author }],

    openGraph: {
      type: yoast.og_type as "article" | "website",
      locale: yoast.og_locale,
      url: yoast.og_url,
      siteName: yoast.og_site_name,
      title: yoast.og_title,
      description: yoast.og_description,
      images: ogImages,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [yoast.author],
    },

    twitter: {
      card: yoast.twitter_card as "summary_large_image" | "summary",
      site: yoast.twitter_site,
      creator: yoast.twitter_creator,
      title: yoast.og_title,
      description: yoast.og_description,
      images: ogImages.map((img) => img.url),
    },

    other: {
      // Inject JSON-LD schema as a string for use in <script> tag
      "schema:json-ld": JSON.stringify(yoast.schema),
    },
  };
}

/** Helper to inject JSON-LD schema into <head> via Next.js Script or dangerouslySetInnerHTML */
export function getSchemaScript(post: YoastPost): string {
  return JSON.stringify(post.yoast_head_json.schema);
}