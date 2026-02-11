"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import parse, { type DOMNode } from "html-react-parser";
import { Element } from "domhandler";
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
  const [activeId, setActiveId] = useState<string>("");

  const { toc, htmlWithIds } = useMemo(() => {
    if (!data?.description) return { toc: [] as TocItem[], htmlWithIds: "" };

    const doc = new DOMParser().parseFromString(data.description, "text/html");
    const headings = Array.from(
      doc.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    ) as HTMLHeadingElement[];

    const tocList = headings.map((heading, idx) => {
      if (!heading.id) heading.id = `toc-heading-${idx}`;
      return { id: heading.id, text: heading.textContent?.trim() || "" };
    });

    return { toc: tocList, htmlWithIds: doc.body.innerHTML };
  }, [data?.description]);

  const scrollToHeading = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset =
      parseFloat(
        getComputedStyle(document.body).getPropertyValue("--header-y") || "0",
      ) + 40;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  // Highlight active TOC item on scroll
  useEffect(() => {
    if (!toc.length) return;

    const handleScroll = () => {
      const headings = toc
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      if (!headings.length) return;

      // Activate the next section once the current heading scrolls past
      // the trigger line near the top of the viewport.
      const triggerTop = 120;
      const nextVisibleHeading = headings.find(
        (el) => el.getBoundingClientRect().top > triggerTop,
      );

      if (nextVisibleHeading) {
        setActiveId(nextVisibleHeading.id);
        return;
      }

      setActiveId(headings[headings.length - 1].id);
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
  const activeIndex = tocItems.findIndex((i) => i.id === activeId);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-[25px] md:pt-[30px] pb-[30px] lg:pb-[50px] bg-white !overflow-visible"
    >
      <div className="container">
        <div className="flex md:gap-[30px] xl:gap-[40px] items-start">
          {/* Sidebar */}
          <div
            className="md:w-[30%] lg:w-[25%] 2xl:w-[24%] shrink-0 sticky h-full top-[100px] hidden md:block"
            ref={sidebarColumnRef}
          >
            <div
              ref={sidebarRef}
              style={sidebarStyle}
              className="overflow-visible"
            >
              {data?.sidebar_title && (
                <Heading
                  as="h4"
                  size="h4"
                  className="font-semibold text-[#1C5396] mb-[15px] lg:mb-[20px] xl:mb-[25px]"
                >
                  {data.sidebar_title}
                </Heading>
              )}

              <ul className="space-y-[18px]">
                {tocItems.map((item, index) => {
                  const isActive = index === activeIndex;
                  const isCompleted = index < activeIndex;

                  return (
                    <li key={item.id} className="relative pl-[36px]">
                      {/* Vertical Line */}
                      {index < tocItems.length - 1 && (
                        <div className="absolute left-[7px] top-[15px] w-[1px] h-[120%] bg-[#D6D6D6]" />
                      )}

                      {/* Filled Progress Line */}
                      {isCompleted && (
                        <div className="absolute left-[7px] top-[15px] w-[1px] h-[120%] bg-gradient-to-b from-[#053269] to-[#6A9FE0]" />
                      )}

                      {/* Bullet */}
                      <div
                        className={`absolute left-0 top-[2px] h-[15px] w-[15px] rounded-full flex items-center justify-center
                        ${
                          isActive || isCompleted
                            ? "bg-gradient-to-b from-[#053269] to-[#6A9FE0]"
                            : "border border-[#9fb4d4] bg-white"
                        }`}
                      />

                      {/* Title */}
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToHeading(item.id);
                        }}
                        className={`block text-[12px] lg:text-[13px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.4] transition-colors
                    ${
                      isActive || isCompleted
                        ? "text-[#1C5396] font-semibold"
                        : "text-[#A0A0A0] hover:text-[#1C5396]"
                    }`}>
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
          <div className="md:w-[70%] lg:w-[75%] 2xl:w-[76%]">
            <div className="typography [&_p]:text-[#4E4E4E] [&_p]:mb-[16px] [&_li]:text-[#4E4E4E] [&_a]:text-[#4E4E4E] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-[#1C5396] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-semibold [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:my-[30px_12px] xl:[&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:my-[35px_16px] [&_h1:first-child,&_h2:first-child,&_h3:first-child,&_h4:first-child,&_h5:first-child,&_h6:first-child]:mt-0 [&_img]:w-full [&_img]:h-auto">
              {htmlWithIds &&
                parse(htmlWithIds, {
                  replace: (node: DOMNode) =>
                    node instanceof Element && node.name === "img" ? (
                      <span className="image-overlay my-[25px] md:my-[30px] xl:my-[38px]">
                        <img {...node.attribs} alt={node.attribs?.alt || ""} />
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
