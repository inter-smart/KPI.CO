"use client";

import { useEffect, useState } from "react";
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
  const [toc, setToc] = useState<TocItem[]>([]);
  const [htmlWithIds, setHtmlWithIds] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");
  const [isSidebarSticky, setIsSidebarSticky] = useState<boolean>(true);

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

      // Check if we're near the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;

      // Check if the last heading has reached the top (with offset for header)
      const lastHeading = headings[headings.length - 1];
      const lastHeadingTop = lastHeading.getBoundingClientRect().top;
      const headerOffset = 120; // Same as the sticky top offset

      // Disable sticky when last section reaches the top
      if (lastHeadingTop <= headerOffset) {
        setIsSidebarSticky(false);
      } else {
        setIsSidebarSticky(true);
      }

      let currentId = toc[0].id;

      // If near bottom, activate the last item
      if (isNearBottom) {
        currentId = toc[toc.length - 1].id;
      } else {
        // Otherwise, find the heading that's currently in view
        for (const el of headings) {
          if (el.getBoundingClientRect().top <= 120) currentId = el.id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);



  const tocItems = toc.length
    ? toc
    : (data?.item || []).map((item) => ({
      id: String(item.id),
      text: item.text,
    }));

  return (
    <section
      className="w-full pt-[25px] md:pt-[30px] pb-[30px] lg:pb-[50px] bg-white !overflow-visible">
      <div className="container">
        <div className="flex md:gap-[30px] xl:gap-[40px] items-start">
          {/* Sidebar */}
          <div className={`md:w-[30%] lg:w-[25%] 2xl:w-[24%] shrink-0 h-full hidden md:block ${isSidebarSticky ? 'sticky top-[100px]' : ''}`}
          >
            <div
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

              <ul className="space-y-[16px]">
                {tocItems.map((item, index) => {
                  const isActive = activeId
                    ? activeId === item.id
                    : index === 0;
                  return (
                    <li key={item.id} className="relative pl-[35px] pb-6 xl:pb-8 mb-0">
                      {/* Bullet */}
                      <div className="absolute left-[0px] top-[3px] h-[15px] w-[15px] p-[1px] rounded-full border border-[#9fb4d4] bg-gradient-to-b from-[#053269] to-[#6A9FE0]">
                        <div className="h-full w-full rounded-full border bg-white" />
                      </div>

                      {isActive && (
                        <div className="absolute left-[0px] top-[4px] h-[14px] w-[14px] rounded-full bg-gradient-to-b from-[#053269] to-[#6A9FE0]" />
                      )}

                      {index < tocItems.length - 1 && (
                        <div className="absolute left-[6px] top-[18px] h-full w-[1px] overflow-hidden">
                          {/* Base line */}
                          <div className="absolute inset-0 bg-[#4E4E4E50]" />

                          {/* Animated fill */}
                          <div
                            className={`absolute top-0 left-0 w-full bg-[#5285c4] transition-all duration-[3000ms] ease-out ${isActive ? "h-full" : "h-0"
                              }`}
                          />
                        </div>
                      )}

                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}

                        aria-current={isActive ? "true" : undefined}
                        className={`text-[12px] lg:text-[13px] 2xl:text-[16px] 3xl:text-[18px] font-medium leading-[1.4] block transition-colors ${isActive
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
          <div className="md:w-[70%] lg:w-[75%] 2xl:w-[76%]">
            <div className="typography [&_p]:text-[#4E4E4E] [&_p]:mb-[16px] [&_li]:text-[#4E4E4E] [&_a]:text-[#4E4E4E] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-[#1C5396] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-semibold [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:my-[30px_12px] xl:[&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:my-[35px_16px] [&_h1:first-child,&_h2:first-child,&_h3:first-child,&_h4:first-child,&_h5:first-child,&_h6:first-child]:mt-0 [&_img]:w-full [&_img]:h-auto">
              {htmlWithIds &&
                parse(htmlWithIds, {
                  replace: (domNode: any) => {
                    if (domNode.name === 'img') {
                      return (
                        <span className="image-overlay my-[25px] md:my-[30px] xl:my-[38px] block w-full relative">
                          <img {...domNode.attribs} className="w-full h-auto object-cover rounded-lg" />
                        </span>
                      );
                    }
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}