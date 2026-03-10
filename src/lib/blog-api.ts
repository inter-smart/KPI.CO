const BASE_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";


export const USE_MOCK = false;

import { MOCK_CATEGORIES, MOCK_POSTS, MOCK_TAGS, MOCK_MEDIA } from "./blog-mock-data";


export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  count: number;
  description: string;
};

export type WPTag = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

export type WPMedia = {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
};

export type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  sticky: boolean;
  link: string;
  status: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function fetchWP<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR-friendly; safe to call from server components
    ...options,
  });

  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText} — ${url}`);
  }

  return res.json() as Promise<T>;
}

// ─── Categories ───────────────────────────────────────────────────────────────

/** All blog & client-story categories (flat list, up to 100). */
export async function getAllCategories(): Promise<WPCategory[]> {
  if (USE_MOCK) return MOCK_CATEGORIES;
  return fetchWP<WPCategory[]>("/categories?taxonomy=category&per_page=100");
}

/** All categories with paginated support (for blog-detail initialization). */
export async function getAllCategoriesPaged(page = 1): Promise<WPCategory[]> {
  if (USE_MOCK) {
    const perPage = 100;
    const start = (page - 1) * perPage;
    return MOCK_CATEGORIES.slice(start, start + perPage);
  }
  return fetchWP<WPCategory[]>(`/categories?taxonomy=category&per_page=100&page=${page}`);
}

/** Top-level categories (Products, Business Size, Industries…). */
export async function getMainCategories(): Promise<WPCategory[]> {
  if (USE_MOCK) return MOCK_CATEGORIES.filter((c) => c.parent === 0);
  return fetchWP<WPCategory[]>("/categories?parent=0&taxonomy=category&per_page=100");
}

/** Subcategories under a given parent category. */
export async function getSubcategories(parentId: number): Promise<WPCategory[]> {
  if (USE_MOCK) return MOCK_CATEGORIES.filter((c) => c.parent === parentId);
  return fetchWP<WPCategory[]>(`/categories?parent=${parentId}`);
}

type SubCategory = { id: number; name: string; slug: string };

export type CategoryTree = { name: string; slug: string; id: number; children: SubCategory[] };

/** Fetch parent categories and their subcategories, returns the tree format used by BlogFilter. */
export async function getCategoryTree(): Promise<CategoryTree[]> {
  const parents = await getMainCategories();
  const childrenLists = await Promise.all(parents.map((p) => getSubcategories(p.id)));
  return parents
    .map((parent, i) => ({
      id: parent?.id,
      slug: parent?.slug,
      name: parent?.name,
      children: childrenLists[i].map((c) => ({
        id: c.id,
        slug: c.slug,
        name: c.name,
      })),
    }))
    .filter((category) => category.children.length > 0);
}

// ─── Posts ────────────────────────────────────────────────────────────────────

export type GetPostsOptions = {
  categoryId?: number;
  page?: number;
  perPage?: number;
  search?: string;
  sticky?: boolean;
  exclude?: number[];
};

/** Get blog posts with optional category filter, search, and pagination. */
export async function getPosts(options: GetPostsOptions = {}): Promise<WPPost[]> {
  if (USE_MOCK) {
    const { categoryId, page = 1, perPage = 12, search, sticky, exclude } = options;
    let filtered = [...MOCK_POSTS];

    console.log("categoryId", categoryId);

    if (categoryId !== undefined) {
      filtered = filtered.filter((p) => p.categories.includes(categoryId));
    }
    if (exclude && exclude.length > 0) {
      filtered = filtered.filter((p) => !exclude.includes(p.id));
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.rendered.toLowerCase().includes(q) ||
          p.excerpt.rendered.toLowerCase().includes(q),
      );
    }
    if (sticky !== undefined) {
      filtered = filtered.filter((p) => p.sticky === sticky);
    }

    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }

  const { categoryId, page = 1, perPage = 12, search, sticky, exclude } = options;

  const params = new URLSearchParams();
  params.set("per_page", String(perPage));
  params.set("page", String(page));
  if (categoryId !== undefined) params.set("categories", String(categoryId));
  if (search) params.set("search", search);
  if (sticky !== undefined) params.set("sticky", String(sticky));
  if (exclude && exclude.length > 0) params.set("exclude", exclude.join(","));

  return fetchWP<WPPost[]>(`/posts?${params.toString()}`);
}

/** Get featured (sticky) posts for a category. */
export async function getFeaturedPosts(categoryId: number, perPage = 100): Promise<WPPost[]> {
  return getPosts({ categoryId, sticky: true, perPage });
}

/** Get a single post by slug. */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (USE_MOCK) {
    return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
  }
  const posts = await fetchWP<WPPost[]>(`/posts?slug=${encodeURIComponent(slug)}`);
  return posts[0] ?? null;
}

/** Get related posts by category. */
export async function getRelatedPosts(categoryId: number, perPage = 6, exclude?: number[]): Promise<WPPost[]> {
  return getPosts({ categoryId, perPage, exclude });
}

// ─── Tags ─────────────────────────────────────────────────────────────────────

/** All tags (supports optional pagination). */
export async function getTags(page = 1): Promise<WPTag[]> {
  if (USE_MOCK) {
    const perPage = 100;
    const start = (page - 1) * perPage;
    return MOCK_TAGS.slice(start, start + perPage);
  }
  return fetchWP<WPTag[]>(`/tags?per_page=100&page=${page}`);
}

// ─── Media ────────────────────────────────────────────────────────────────────

/** Fetch a batch of media items (up to 100). */
export async function getMediaList(perPage = 100): Promise<WPMedia[]> {
  if (USE_MOCK) return MOCK_MEDIA.slice(0, perPage);
  return fetchWP<WPMedia[]>(`/media?per_page=${perPage}`);
}

/** Fetch a single media item by ID. */
export async function getMediaById(mediaId: number): Promise<WPMedia> {
  if (USE_MOCK) {
    const item = MOCK_MEDIA.find((m) => m.id === mediaId);
    if (!item) throw new Error(`Mock media not found: ${mediaId}`);
    return item;
  }
  return fetchWP<WPMedia>(`/media/${mediaId}`);
}
