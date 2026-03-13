"use client";

import { useState, useRef, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Heading } from "@/components/utils/typography";
import { cn } from "@/lib/utils";
import type { InsightItem } from "@/app/page";
import parse from "html-react-parser";
import BlogFilter from "./BlogFilter";
import type { CategoryTree } from "@/lib/blog-api";
import { useQueryState } from "nuqs";
import { transformWpPostToBlogItem } from "@/lib/utils";
import { USE_MOCK } from "@/lib/blog-api";
import { MOCK_POSTS } from "@/lib/blog-mock-data";

const BASE_WP_URL = "https://blogadmin.kpi.co/wp-json/wp/v2";
const ITEMS_PER_PAGE = 8;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type BlogListProps = {
  data: {
    title: string;
  };
  categories: CategoryTree[];
};

export type FilterItem = {
  id: number;
  name: string;
  slug: string;
};

type BlogCardProps = {
  data: InsightItem;
};

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

// ── Helpers: extract media/category from _embedded data ──────────────────────
function getMediaFromEmbedded(post: any): Promise<any> {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  return Promise.resolve(featuredMedia || null);
}

function getCategoryNameFromEmbedded(post: any): (id: number) => Promise<string> {
  return (id: number) => {
    const terms = post._embedded?.["wp:term"];
    if (terms) {
      for (const group of terms) {
        for (const term of group) {
          if (term.id === id) return Promise.resolve(term.name);
        }
      }
    }
    // Fallback: fetch from API
    return fetch(`${BASE_WP_URL}/categories/${id}`)
      .then((r) => r.json())
      .then((data) => data.name || "")
      .catch(() => "");
  };
}

export default function BlogList({ data, categories }: BlogListProps) {
  // nuqs — URL state for search query and active filter IDs
  const [urlSearch, setUrlSearch] = useQueryState("search", { defaultValue: "" });
  const [urlCategories, setUrlCategories] = useQueryState("categories", {
    defaultValue: "",
    // store as comma-separated slugs, e.g. "audit,tax"
  });

  // Local input state (not yet committed to URL)
  const [searchInput, setSearchInput] = useState(urlSearch);

  // Derive activeFilters from urlCategories (slugs) + categories tree
  const slugToCategory = useMemo(() => {
    const map = new Map<string, { id: number; name: string; slug: string }>();
    categories.forEach((cat) =>
      cat.children.forEach((child) => map.set(child.slug, { id: child.id, name: child.name, slug: child.slug })),
    );
    return map;
  }, [categories]);

  const categoryMap = useMemo(() => {
    const map = new Map<number, string>();
    categories.forEach((cat) => cat.children.forEach((child) => map.set(child.id, child.name)));
    return map;
  }, [categories]);

  const activeFilters: FilterItem[] = useMemo(() => {
    if (!urlCategories) return [];
    return urlCategories
      .split(",")
      .map((slug) => {
        const cat = slugToCategory.get(slug);
        return cat ? { id: cat.id, name: cat.name, slug: cat.slug } : null;
      })
      .filter(Boolean) as FilterItem[];
  }, [urlCategories, slugToCategory]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("Newest to Oldest");
  const [items, setItems] = useState<InsightItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const topRef = useRef<HTMLElement>(null);

  // ── Build fetch URL ────────────────────────────────────────────────────────
  const buildFetchUrl = useCallback(
    (page: number, search: string, filters: FilterItem[], sort: string) => {
      const hasSearch = search.trim().length > 0;
      const hasFilters = filters.length > 0;

      // If no search/filter, fetch without params (only _embed & per_page & page)
      if (!hasSearch && !hasFilters) {
        const params = new URLSearchParams();
        params.set("_embed", "1");
        params.set("per_page", String(ITEMS_PER_PAGE));
        params.set("page", String(page));
        params.set("orderby", "date");
        params.set("order", sort === "Oldest to Newest" ? "asc" : "desc");
        return `${BASE_WP_URL}/posts?${params}`;
      }

      // With search/filter params
      const params = new URLSearchParams();
      params.set("_embed", "1");
      params.set("per_page", String(ITEMS_PER_PAGE));
      params.set("page", String(page));
      params.set("orderby", "date");
      params.set("order", sort === "Oldest to Newest" ? "asc" : "desc");
      if (hasSearch) params.set("search", search.trim());
      if (hasFilters) params.set("categories", filters.map((f) => f.id).join(","));

      return `${BASE_WP_URL}/posts?${params}`;
    },
    [],
  );

  // ── Fetch from WP API ──────────────────────────────────────────────────────
  const fetchPosts = useCallback(
    async (page: number, search: string, filters: FilterItem[], sort: string) => {
      setIsLoading(true);

      if (USE_MOCK) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        let filtered = [...MOCK_POSTS];
        const searchTrimmed = search.trim().toLowerCase();

        if (searchTrimmed) {
          filtered = filtered.filter(
            (p) =>
              p.title.rendered.toLowerCase().includes(searchTrimmed) ||
              p.excerpt.rendered.toLowerCase().includes(searchTrimmed),
          );
        }

        if (filters.length > 0) {
          const filterIds = filters.map((f) => f.id);
          filtered = filtered.filter((p) => p.categories.some((catId) => filterIds.includes(catId)));
        }

        // Sort
        filtered.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sort === "Oldest to Newest" ? dateA - dateB : dateB - dateA;
        });

        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
        const start = (page - 1) * ITEMS_PER_PAGE;
        const pagePosts = filtered.slice(start, start + ITEMS_PER_PAGE);

        setTotalItems(totalItems);
        setTotalPages(totalPages);

        const transformed = await Promise.all(
          pagePosts.map((post) => {
            const mediaFetcher = (id: number) => Promise.resolve(null);
            const categoryFetcher = (id: number) => {
              const cat = categories.flatMap((c) => c.children).find((c) => c.id === id);
              return Promise.resolve(cat?.name || "");
            };
            return transformWpPostToBlogItem(post, mediaFetcher, categoryFetcher);
          }),
        );

        setItems(transformed as InsightItem[]);
        setIsLoading(false);
        return;
      }

      try {
        const url = buildFetchUrl(page, search, filters, sort);
        const res = await fetch(url);

        // Read pagination from WP headers
        const wpTotal = parseInt(res.headers.get("X-WP-Total") || "0", 10);
        const wpTotalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

        setTotalItems(wpTotal);
        setTotalPages(wpTotalPages);

        const posts: any[] = await res.json();

        // Use the response formatter from utils
        const transformed = await Promise.all(
          posts.map((post) => {
            const mediaFetcher = (id: number) => {
              // Prefer _embedded data to avoid extra requests
              const embedded = post._embedded?.["wp:featuredmedia"];
              if (embedded) {
                const media = embedded.find((m: any) => m.id === id);
                if (media) return Promise.resolve(media);
              }
              return fetch(`${BASE_WP_URL}/media/${id}`).then((r) => r.json());
            };

            const categoryFetcher = getCategoryNameFromEmbedded(post);


            return transformWpPostToBlogItem(post, mediaFetcher, categoryFetcher);
          }),
        );



        setItems(transformed as InsightItem[]);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setItems([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        setIsLoading(false);
      }
    },
    [buildFetchUrl, categories],
  );

  // ── Initial fetch on mount ─────────────────────────────────────────────────
  useEffect(() => {
    fetchPosts(currentPage, urlSearch, activeFilters, selectedSort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Search: only on icon click / Enter ─────────────────────────────────────
  // ── Debounced Search ───────────────────────────────────────────────────────
  useEffect(() => {
    // Skip if the input matches the current URL search (initial load or redundant change)
    if (searchInput === urlSearch) return;

    const timer = setTimeout(() => {
      setUrlSearch(searchInput || null);
      setCurrentPage(1);
      fetchPosts(1, searchInput, activeFilters, selectedSort);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput, urlSearch, setUrlSearch, activeFilters, selectedSort, fetchPosts]);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setUrlSearch(searchInput || null);
      setCurrentPage(1);
      fetchPosts(1, searchInput, activeFilters, selectedSort);
    }
  };

  // ── Apply changes (Filters & Sort) ─────────────────────────────────────────
  const handleApplySelection = (filters: FilterItem[], sort?: string) => {
    const slugs = filters.map((f) => f.slug).join(",");
    setUrlCategories(slugs || null);
    if (sort) setSelectedSort(sort);
    setCurrentPage(1);
    fetchPosts(1, urlSearch, filters, sort || selectedSort);
  };

  const removeFilter = (filterId: number) => {
    const updated = activeFilters.filter((f) => f.id !== filterId);
    handleApplySelection(updated);
  };

  const clearAll = () => {
    setUrlCategories(null);
    setCurrentPage(1);
    fetchPosts(1, urlSearch, [], selectedSort);
  };

  // ── Page change ────────────────────────────────────────────────────────────
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      fetchPosts(page, urlSearch, activeFilters, selectedSort);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ── Note: Sort change is now handled exclusively by handleApplySelection via BlogFilter callback

  // ── Form ───────────────────────────────────────────────────────────────────
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
  }

  // ── Pagination helper: generate page numbers with ellipsis ─────────────────
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [1];

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <section ref={topRef} className="w-full py-[30px] md:py-[40px] xl:py-[64px] 2xl:py-[75px] 3xl:py-[85px] bg-white">
      <div className="container">
        {/* Section Header */}
        <Heading as="h1" size="h1" className="xl:text-[40px] text-[#1C5396] mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px] font-semibold">
          {data.title}
        </Heading>

        {/* Filter and Search Bar */}
        <div className="flex flex-row gap-2 xl:gap-[10px] mb-6 max-w-[500px] xl:max-w-[700px] 2xl:max-w-[745px] 3xl:max-w-[940px] h-[38px] xl:h-[50px] 3xl:h-[65px]">
          <BlogFilter
            categories={categories}
            activeFilters={activeFilters}
            onFilterChange={handleApplySelection}
            onApply={() => {}}
            onClear={() => {
              setUrlCategories(null);
              fetchPosts(1, urlSearch, [], selectedSort);
            }}
            selectedSort={selectedSort}
          />
          <div className="relative flex-1 h-full rounded-[8px] xl:rounded-[10px] 3xl:rounded-[13px] shadow-[0_0_26px_rgba(0,0,0,0.05)]">
            <input
              type="text"
              placeholder="Search Blogs"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] w-full h-full px-[20px] 2xl:px-[25px] 3xl:px-[35px] rounded-[8px] xl:rounded-[10px]
                        3xl:rounded-[13px] focus:outline-none focus:ring-2 focus:ring-[#C7C5CE]/20 transition-all placeholder:text-[#C7C5CE]
                        placeholder:text-[14px] md:placeholder:text-[12px] xl:placeholder:text-[16px] 2xl:placeholder:text-[17px] 3xl:placeholder:text-[21px]"
            />
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              aria-label="Search"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.7293 14.9599L16.8893 13.0755C16.4935 12.6993 15.9943 12.45 15.4557 12.3597C14.9172 12.2694 14.3639 12.3423 13.8671 12.5688L13.0671 11.7688C14.0098 10.5092 14.4403 8.93922 14.272 7.37491C14.1037 5.81061 13.349 4.36815 12.1599 3.3379C10.9708 2.30766 9.43557 1.76613 7.86324 1.82233C6.29091 1.87854 4.79825 2.52829 3.68573 3.64081C2.57322 4.75332 1.92346 6.24599 1.86726 7.81832C1.81105 9.39065 2.35258 10.9259 3.38283 12.115C4.41307 13.3041 5.85553 14.0588 7.41984 14.2271C8.98414 14.3954 10.5541 13.9649 11.8138 13.0222L12.6049 13.8133C12.3516 14.3107 12.2609 14.8751 12.3454 15.4269C12.4299 15.9787 12.6854 16.49 13.076 16.8888L14.9604 18.7733C15.4604 19.2727 16.1382 19.5532 16.8449 19.5532C17.5515 19.5532 18.2293 19.2727 18.7293 18.7733C18.9833 18.5249 19.1851 18.2283 19.3229 17.9009C19.4607 17.5735 19.5317 17.2218 19.5317 16.8666C19.5317 16.5114 19.4607 16.1597 19.3229 15.8323C19.1851 15.5049 18.9833 15.2083 18.7293 14.9599V14.9599ZM11.1915 11.1911C10.5695 11.8115 9.77758 12.2337 8.91575 12.4043C8.05392 12.5748 7.16087 12.4862 6.34941 12.1494C5.53794 11.8127 4.84448 11.2431 4.35661 10.5124C3.86875 9.78178 3.60837 8.92294 3.60837 8.04439C3.60837 7.16584 3.86875 6.307 4.35661 5.57636C4.84448 4.84572 5.53794 4.27606 6.34941 3.93934C7.16087 3.60262 8.05392 3.51395 8.91575 3.68453C9.77758 3.85511 10.5695 4.27728 11.1915 4.89773C11.6054 5.31058 11.9338 5.80103 12.1579 6.34098C12.3819 6.88094 12.4973 7.45979 12.4973 8.04439C12.4973 8.62899 12.3819 9.20785 12.1579 9.7478C11.9338 10.2878 11.6054 10.7782 11.1915 11.1911V11.1911ZM17.476 17.4755C17.3933 17.5588 17.295 17.6249 17.1867 17.6701C17.0784 17.7152 16.9622 17.7384 16.8449 17.7384C16.7275 17.7384 16.6113 17.7152 16.503 17.6701C16.3947 17.6249 16.2964 17.5588 16.2138 17.4755L14.3293 15.5911C14.246 15.5084 14.1799 15.4101 14.1347 15.3018C14.0896 15.1935 14.0664 15.0773 14.0664 14.9599C14.0664 14.8426 14.0896 14.7264 14.1347 14.6181C14.1799 14.5098 14.246 14.4115 14.3293 14.3288C14.412 14.2455 14.5103 14.1794 14.6186 14.1343C14.7269 14.0891 14.8431 14.0659 14.9604 14.0659C15.0778 14.0659 15.194 14.0891 15.3023 14.1343C15.4106 14.1794 15.5089 14.2455 15.5915 14.3288L17.476 16.2133C17.5593 16.2959 17.6254 16.3942 17.6706 16.5025C17.7157 16.6109 17.7389 16.727 17.7389 16.8444C17.7389 16.9617 17.7157 17.0779 17.6706 17.1862C17.6254 17.2946 17.5593 17.3929 17.476 17.4755V17.4755Z"
                  fill="#4E4E4E"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {activeFilters.map((filter) => (
            <div
              key={filter?.id}
              className={cn(
                "text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] flex items-center gap-1 sm:gap-2 px-3 py-1.5 bg-[rgba(143,216,254,0.15)] border border-[#d6e5f5] rounded-md text-[#4E4E4E] text-sm font-medium",
                activeFilters.includes(filter) ? "border-transparent" : "border-[#d6e5f5]",
              )}
            >
              {filter?.name}
              <button onClick={() => removeFilter(filter?.id)} className="transition-colors cursor-pointer hover:scale-115">
                <X size={14} />
              </button>
            </div>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={clearAll}
              className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-[#212121] text-sm font-medium rounded-[8px] xl:rounded-[10px] 3xl:rounded-[13px] border border-[#DDDCDE] px-3 py-1.5 cursor-pointer hover:scale-105 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="text-center py-20 text-gray-400">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No blogs found matching your search.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] xl:gap-[32px_38px] 3xl:gap-8">
            {items.slice(0, 5).map((item) => (
              <BlogCard key={item.id} data={item} />
            ))}

            {/* Special CTA Card (Position 6) */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1c5396] to-[#4a84c4] z-0 max-md:min-h-[477px] p-[30px] xl:p-[40px] 2xl:p-[50px] 3xl:p-[60px] flex flex-col justify-center text-white shadow-lg">
              <div className="position absolute top-0 left-0 w-full h-full">
                <Image src="/images/blogBanner.svg" className="w-full h-full object-cover" width="375" height="235" alt="bannerBg" />
              </div>

              <div className="relative z-10 max-sm:max-w-[262px]">
                <h3 className="text-[16px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[26px] font-semibold mb-4 xl:mb-[15px] max-sm:max-w-[202px]">
                  Strong Decisions Start <br /> with Clear Insight
                </h3>
                <p className="text-[14px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-white mb-8">
                  Our audit and business advisory services help you identify risks, improve performance, and plan for sustainable growth at every
                  stage of your business.
                </p>

                <div className="relative">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="relative group">
                      <div className="bg-white rounded-[10px] p-[5_10px] 3xl:p-[5px_15px] overflow-hidden flex items-center w-full h-[42px] xl:h-[45px] 3xl:h-[55px] shadow-sm focus-within:ring-1 focus-within:ring-white/20 transition-all">
                        <div className="flex-1 overflow-hidden">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="space-y-0">
                                <FormControl>
                                  <Input
                                    placeholder="Subscribe Today"
                                    className="text-[17px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[21px] text-[rgba(0,0,0)] font-medium px-[5px] w-full h-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 !bg-transparent shadow-none placeholder:text-[14px] xl:placeholder:text-[16px] 2xl:placeholder:text-[19px] 3xl:placeholder:text-[21px] placeholder:leading-[1.6] placeholder:text-black placeholder:translate-y-[-2px]"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button
                          type="submit"
                          variant="ghost"
                          className="!w-[32px] !h-[32px] xl:rounded-[10px] bg-gradient-to-b from-[#6A9FE0] to-[#053269] flex items-center justify-center !p-1.5 cursor-pointer hover:opacity-90 transition-all active:scale-95"
                        >
                          <svg viewBox="0 0 23 19" fill="none">
                            <path d="M1.11119 9.43131L19.9983 9.17188" stroke="white" strokeWidth="2.22222" strokeLinecap="round" />
                            <path
                              d="M12.8395 1.11109L21.1099 9.15732L13.0959 17.3945"
                              stroke="white"
                              strokeWidth="2.22222"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="absolute left-0 -bottom-6">
                        <FormField control={form.control} name="email" render={() => <FormMessage className="text-red-500 text-xs font-medium" />} />
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>

            {/* Remaining items */}
            {items.slice(5).map((item) => (
              <BlogCard key={item.id} data={item} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-[12px] mt-16 h-[32px] [&>button]:h-full [&>button]:w-[32px] [&>button]:rounded-[4px] [&>button]:flex [&>button]:items-center [&>button]:justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border rounded-md hover:bg-gray-50 transition whitespace-nowrap disabled:opacity-50 disabled:bg-[#E5E5E5] disabled:cursor-not-allowed"
            >
              <div className="w-[10px] h-[16px]">
                <svg viewBox="0 0 10 16" fill="none" className="w-full h-full object-cover">
                  <path d="M9.87988 1.88L3.77322 8L9.87988 14.12L7.99988 16L-0.000117278 8L7.99988 0L9.87988 1.88Z" fill="#C4CDD5" />
                </svg>
              </div>
            </button>
            {getPageNumbers().map((page, idx) =>
              page === "..." ? (
                <span key={`ellipsis-${idx}`} className="px-1 text-gray-400">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "w-10 h-10 rounded-md font-medium transition",
                    currentPage === page
                      ? "border border-[#1C5396] text-[#1c5396] bg-white font-semibold"
                      : "border border-transparent hover:border-gray-200 text-black hover:bg-gray-50",
                  )}
                >
                  {page}
                </button>
              ),
            )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border rounded-md hover:bg-gray-50 transition whitespace-nowrap disabled:opacity-50 disabled:bg-[#E5E5E5] disabled:cursor-not-allowed"
            >
              <div className="w-[10px] h-[16px]">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.88L6.10667 8L0 14.12L1.88 16L9.88 8L1.88 0L0 1.88Z" fill="#C4CDD5" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogCard({ data }: BlogCardProps) {
  return (
    <div className="group flex flex-col w-full h-full max-sm:min-h-[477px] bg-white rounded-[13px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-50">
      <div className="relative aspect-[440/268] overflow-hidden">
        <Image
          src={data.media.path || "/images/placeholder-image.png"}
          alt={data.media.alt || data.title}
          unoptimized={true}
          fill
          className="object-cover scale-110 group-hover:translate-y-2 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-7 xl:p-[25px_48px] 2xl:p-[25px_40px] 3xl:p-[34px_60px] flex flex-col flex-1">
        <div className="text-[14px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[20px] font-medium text-[#5280ca] mb-[15px] xl:mb-[12px] uppercase tracking-wide">
          {data.date} • {data.readTime}
        </div>
        {data.date_full && (
          <div className="text-[14px] xl:text-[16px] font-medium text-[#5280ca] mb-[15px] xl:mb-[12px] uppercase tracking-wide hidden">
            {data.date_full} • {data.readTime}
          </div>
        )}
        <h3 className="text-[16px] md:text-[20px] xl:text-[20px] 3xl:text-[26px] font-semibold text-black mb-[15px] xl:mb-[12px] leading-relaxed transition-colors">
          {parse(data.title)}
        </h3>
        <div className="text-[14px] md:text-[15px] xl:text-[16px] 3xl:text-[21px] text-[#4e4e4e] leading-relaxed mb-[23px]">
          {parse(data.description)}
        </div>
        <Link
          href={data.slug ? `/blog/${data.slug}` : "#"}
          className="text-[14px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] leading-relaxed font-semibold text-[#1c5396] inline-flex items-center gap-[3px] mt-auto transition-colors duration-300"
        >
          Read More<span className="text-[11px] font-semibold">→</span>
        </Link>
      </div>
    </div>
  );
}