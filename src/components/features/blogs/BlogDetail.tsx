"use client";

import { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import BlogSponsoredCard from "./BlogSponsoredCard";

type TocItem = { id: string; text: string };

export type BlogDetailData = {
  sidebar_title?: string;
  title?: string;
  description?: string;
  date?: string;
  item?: { id: number | string; text: string }[];
  sponsored?: {
    label?: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
    duration?: string;
    media?: {
      desktop_path?: string;
      media_alt?: string;
    };
  };
};

type BlogDetailProps = {
  data: BlogDetailData;
};

export default function BlogDetail({ data }: BlogDetailProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const sidebarColumnRef = useRef<HTMLDivElement | null>(null);

  const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({});
  const [toc, setToc] = useState<TocItem[]>([]);
  const [htmlWithIds, setHtmlWithIds] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");

  // Generate TOC from headings
  useEffect(() => {
    if (!data?.description) return;

    const doc = new DOMParser().parseFromString(data.description, "text/html");
    const headings = Array.from(
      doc.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    ) as HTMLHeadingElement[];

    const tocList = headings.map((heading, idx) => {
      if (!heading.id) heading.id = `toc-heading-${idx}`;
      return { id: heading.id, text: heading.textContent?.trim() || "" };
    });

    setToc(tocList);
    setHtmlWithIds(doc.body.innerHTML);
  }, [data?.description]);

  // Highlight active TOC item on scroll
  useEffect(() => {
    if (!toc.length) return;

    const handleScroll = () => {
      const headings = toc
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      if (!headings.length) return;

      let currentId = toc[0].id;
      for (const el of headings)
        if (el.getBoundingClientRect().top <= 120) currentId = el.id;
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  // Sidebar sticky behavior
  useEffect(() => {
    const section = sectionRef.current;
    const sidebar = sidebarRef.current;
    const column = sidebarColumnRef.current;
    if (!section || !sidebar || !column) return;

    let rafId = 0;
    const headerOffset = () =>
      parseFloat(
        getComputedStyle(document.body).getPropertyValue("--header-y") || "0",
      );

    const updateSidebar = () => {
      const fixedTop = headerOffset() + 24;
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top - fixedTop > 0) setSidebarStyle({});
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateSidebar);
    };

    updateSidebar();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const tocItems = toc.length
    ? toc
    : (data?.item || []).map((item) => ({
        id: String(item.id),
        text: item.text,
      }));

  return (
    <section ref={sectionRef} className="w-full pt-[30px] pb-[50px] bg-white !overflow-visible">
      <div className="container">
        <div className="flex gap-[40px] items-start">
          {/* Sidebar */}
          <div className="w-[27%] shrink-0 sticky h-full top-[100px]" ref={sidebarColumnRef}>
            <div
              ref={sidebarRef}
              style={sidebarStyle}
              className="overflow-visible"
            >
              {data?.sidebar_title && (
                <Heading
                  as="h5"
                  size="h5"
                  className="font-semibold text-[#1C5396] mb-[25px]"
                >
                  {data.sidebar_title}
                </Heading>
              )}

              <ul className="space-y-[16px]">
                {tocItems.map((item, index) => {
                  const isActive = activeId
                    ? activeId === item.id
                    : index === 0;
                  return (
                    <li key={item.id} className="relative pl-[28px] pb-8 mb-0">
                      {/* Bullet */}
                      <div className="absolute left-[2px] top-[3px] h-[14px] w-[14px] p-[1px] rounded-full border border-[#9fb4d4] bg-gradient-to-b from-[#053269] to-[#6A9FE0]">
                        <div className="h-full w-full rounded-full border bg-white" />
                      </div>

                      {isActive && (
                        <div className="absolute left-[2px] top-[3px] h-[14px] w-[14px] rounded-full bg-gradient-to-b from-[#053269] to-[#6A9FE0]" />
                      )}

                      {index < tocItems.length - 1 && (
                        <div className="absolute left-[8px] top-[18px] h-full w-[1px] overflow-hidden">
                          {/* Base line */}
                          <div className="absolute inset-0 bg-[#4E4E4E50]" />

                          {/* Animated fill */}
                          <div
                            className={`absolute top-0 left-0 w-full bg-[#5285c4] transition-all duration-[3000ms] ease-out ${
                              isActive ? "h-full" : "h-0"
                            }`}
                          />
                        </div>
                      )}

                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}
                        aria-current={isActive ? "true" : undefined}
                        className={`block text-[14px] font-medium leading-[1.4] transition-colors ${
                          isActive
                            ? "text-[#1C5396] font-semibold"
                            : "text-[#4E4E4E50] hover:text-[#1C5396]"
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Sponsored Card */}
              {data?.sponsored && (
                <div className="mt-[24px]">
                  <BlogSponsoredCard data={data.sponsored} />
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-[73%]">
            <div className="typography [&_p]:text-[#4E4E4E] [&_p]:mb-[16px] [&_li]:text-[#4E4E4E] [&_a]:text-[#4E4E4E] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-[#1C5396] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-semibold [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:my-[35px_16px] [&_img]:w-full [&_img]:h-auto">
              {htmlWithIds &&
                parse(htmlWithIds, {
                  replace: (node: any) =>
                    node.name === "img" ? (
                      <span className="image-overlay my-[38px]">
                        <img {...node.attribs} />
                      </span>
                    ) : undefined,
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
