import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* -------------------------------- */
/* Helpers */
/* -------------------------------- */

async function getMedia(url: string) {
  const res = await fetch(url);
  return res.json();
}

async function getCategoryName(id: number) {
  const res = await fetch(`/wp-json/wp/v2/categories/${id}`);
  const data = await res.json();
  return data.name;
}

type WPPost = any;

const categoryCache = new Map<number, string>();

export async function transformWpPostToBlogItem(
  post: WPPost,
  getMedia: (url: string) => Promise<any>,
  getCategoryName: (id: number) => Promise<string>,
) {
  const mediaUrl = post._links?.["wp:featuredmedia"]?.[0]?.href;

  let media = { path: "", alt: "" };

  if (mediaUrl) {
    try {
      const mediaData = await getMedia(mediaUrl);

      media = {
        path: mediaData?.source_url || "",
        alt: mediaData?.alt_text || post.title?.rendered || "",
      };
    } catch {
      media = { path: "", alt: "" };
    }
  }

 let categoryName = "";

if (post.categories?.length) {
  const names: string[] = [];

  for (const cat of post.categories) {
    if (categoryCache.has(cat)) {
      names.push(categoryCache.get(cat)!);
    } else {
      const name = await getCategoryName(cat);
      categoryCache.set(cat, name);
      names.push(name);
    }
  }

  categoryName = names.join(", ");
}

  const dateObj = new Date(post.date);

  const date = dateObj
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  const date_full = dateObj
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();

  const readTime = post?.yoast_head_json?.twitter_misc?.["Est. reading time"]?.toUpperCase() || "";

  const description = post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]*>?/gm, "").trim() : "";

  const content = post.content?.rendered || "";

  const sidebarItems = extractHeadings(content);

  return {
    id: post.id,
    slug: post.slug,

    media,

    title: post.title?.rendered || "",
    sub_title: categoryName,

    description,

    category: categoryName,

    date,
    date_full,

    readTime,

    content,

    sidebarItems,
  };
}

/* -------------------------------- */
/* Extract <h2> headings for sidebar */
/* -------------------------------- */

function extractHeadings(html: string) {
  const regex = /<h2[^>]*>(.*?)<\/h2>/g;

  const headings: { id: number; text: string }[] = [];
  let match;
  let index = 1;

  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>?/gm, "").trim();

    headings.push({
      id: index++,
      text,
    });
  }

  return headings;
}
