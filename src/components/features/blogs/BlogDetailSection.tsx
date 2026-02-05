"use client";
import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

type BlogMedia = {
  path: string;
  alt: string;
};

type BlogDetail = {
  media: BlogMedia;
  date: string;
  category: string;
  title: string;
  highlight_title?: string | string[];
  sub_title?: string;
  description?: string;
  button?: {
    label: string;
    url: string;
  };
};

type BlogListItem = {
  key: string;
  date: string;
  category: string;
  media: BlogMedia;
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
};

type BlogDetailData = {
  blog_detail: BlogDetail;
  blog_list: BlogListItem[];
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const blogData: BlogDetailData = {
  blog_detail: {
    media: {
      path: "/images/blogLst.webp",
      alt: "blogLst",
    },
    date: "May 29, 2025",
    category: "Healthcare, Pharmacy",
    title:
      "Essential Facts to Know Before Starting a Career as a Pharmacy Technician",
    highlight_title: "Starting a Career as a Pharmacy Technician",
    sub_title:
      "Designed to connect providers and healthcare professionals, Xpress Health is the Nursing agency platform you can rely on.",
    description:
      "<p>Starting a career as a pharmacy technician in Ireland could be a perfect choice, If you are considering a future in healthcare but prefer a part that is further behind- the- scenes. Whether you are aiming to support cases directly or play a vital part in ensuring medications are allocated safely and rightly, pharmacy technician jobs in Ireland offer a satisfying path with growing demand. A pharmacy technician in Ireland works nearly with druggists to manage conventions, stock specifics, and maintain a high standard of care in both retail and sanitarium settings. However, that is what you need to know before diving into this in- demand career, this blog takes you to the core If you are ready to explore a meaningful healthcare profession that combines specialized chops with patient commerce.</p><h5>What Does a drugstore Technician Do?</h5><p>A career as a drugstore technician involves supporting druggists in their diurnal liabilities. This can include</p><ul><li>Preparing and allocating specifics.</li><li>Communicating with cases about conventions.</li><li>Managing force and storehouse.</li><li>Aiding with executive tasks in a drugstore.</li></ul><p>Pharmacy technicians must be detail- acquainted, organized, and comfortable working with both technology and people. In Ireland, drugstore technicians are essential members of the healthcare platoon, ensuring that cases admit the right drug at the right time.</p><h5>Educational Conditions and Qualifications</h5>",
    button: {
      label: "Read now",
      url: "/blog/blog-detail",
    },
  },
  blog_list: [
    {
      key: "post-1",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-2",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-3",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-4",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-5",
      date: "May 29, 2025",
      category: "Blogs, HCA",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-6",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-7",
      date: "May 29, 2025",
      category: "Nursing, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-8",
      date: "May 29, 2025",
      category: "Blogs, Pharmacy",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-9",
      date: "May 29, 2025",
      category: "Blogs, multi task",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-10",
      date: "May 29, 2025",
      category: "social care",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
    {
      key: "post-11",
      date: "May 29, 2025",
      category: "more",
      media: {
        path: "/images/blog-01.jpg",
        alt: "icon",
      },
      title: "Salaries and Benefits for Pharm",
      description:
        "Pharmacy jobs in Ireland are evolving fleetly, offering more than just clinical places.",
      button: {
        label: "Read now",
        url: "/blog/blog-detail",
      },
    },
  ],
};

export default function BlogDetailSection({
  data = blogData,
}: {
  data?: BlogDetailData;
}) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [htmlWithIds, setHtmlWithIds] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("");

  const handleHighlight = (
    highlight: string | string[] | undefined,
    title: string
  ) => {
    const escapeRegExp = (value: string) =>
      value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special regex chars
    if (!highlight) return title;

    const highlightArray = Array.isArray(highlight) ? highlight : [highlight];
    const renderedTitle = highlightArray.reduce(
      (acc, phrase) => {
        const escapedPhrase = escapeRegExp(phrase); // Escape phrase before regex
        const regex = new RegExp(`(${escapedPhrase})`, "gi");
        return acc.flatMap((part, i) =>
          typeof part === "string"
            ? part
                .split(regex)
                .filter(Boolean)
                .map((text, j) =>
                  text.toLowerCase() === phrase.toLowerCase() ? (
                    <span key={`${i}-${j}`}>{text}</span>
                  ) : (
                    text
                  )
                )
            : [part]
        );
      },
      [title]
    );
    return renderedTitle;
  };

  useEffect(() => {
    if (!data?.blog_detail?.description) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      data.blog_detail.description,
      "text/html"
    );
    const headings = Array.from(
      doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ) as HTMLHeadingElement[];
    const tocList: TocItem[] = [];
    headings.forEach((heading, idx) => {
      let id = heading.id;
      if (!id) {
        id = `toc-heading-${idx}`;
        heading.id = id;
      }
      tocList.push({
        id,
        text: heading.innerText || heading.textContent || `Section ${idx + 1}`,
        level: parseInt(heading.tagName.replace("H", ""), 10),
      });
    });
    setToc(tocList);
    setHtmlWithIds(doc.body.innerHTML);
  }, [data?.blog_detail?.description]);

  useEffect(() => {
    if (!toc.length) return;
    const handleScroll = () => {
      // Get all heading elements
      const headingElements = toc
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      if (!headingElements.length) return;
      // Find the heading closest to the top (but not below the top)
      let currentId = toc[0]?.id;
      for (let i = 0; i < headingElements.length; i++) {
        const rect = headingElements[i].getBoundingClientRect();
        if (rect.top <= 100) {
          currentId = headingElements[i].id;
        }
      }
      setActiveId(currentId);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc, htmlWithIds]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 640px)",
  });

  return (
    <section className="w-full h-auto block py-[20px_10px] sm:py-[60px_15px] xl:py-[80px_20px] 2xl:py-[100px_20px] 3xl:py-[100px_20px]">
      <div className="container container-sm max-sm:!px-0">
        <div className="flex flex-wrap mx-0 sm:mx-[-5px] lg:mx-[-10px] 2xl:mx-[-15px] [&>*]:p-[25px_0] sm:[&>*]:p-[25px_5px] lg:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
          <div className="w-full xl:max-w-[768px] 2xl:max-w-[940px] 3xl:max-w-[992px] max-sm:!px-[25px]">
            {isDesktop && (
              <div className="flex flex-wrap mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                <div className="3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[12px] leading-none font-normal text-center text-black h-auto bg-[#f0f7f8] cursor-pointer rounded-full transition-all 3xl:p-[20px_40px] xl:p-[15px_30px] md:p-[8px_15px] sm:p-[6px_10px] p-[10px_25px] hover:bg-base1/10">
                  {data?.blog_detail?.category}
                </div>
                <div className="3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[12px] leading-none font-normal text-center text-[#999] h-auto bg-white cursor-pointer rounded-full transition-all 3xl:p-[20px_40px] xl:p-[15px_30px] md:p-[8px_15px] sm:p-[6px_10px] p-[10px_25px] hover:text-black">
                  {data?.blog_detail?.date}
                </div>
              </div>
            )}
            <Heading
              as="h2"
              size="h7"
              className="text-center sm:text-start text-black mb-[15px] sm:mb-[20px] xl:mb-[30px] [&>span]:text-transparent [&>span]:bg-clip-text [&>span]:bg-gradient-to-r [&>span]:from-[#15965E] [&>span]:to-[#38CC8C]"
            >
              {handleHighlight(
                data?.blog_detail?.highlight_title,
                data?.blog_detail?.title
              )}
            </Heading>
            <Heading
              as="h6"
              size="h6"
              className="text-center sm:text-start leading-normal font-normal text-[#656565] max-w-[80%] sm:max-w-[70%] mb-[20px] sm:mb-[15px] xl:mb-[20px] max-sm:mx-auto"
            >
              {data?.blog_detail?.sub_title}
            </Heading>
            {!isDesktop && (
              <div className="flex flex-col items-center gap-[10px]">
                <div className="text-[12px] leading-none font-normal text-center text-black h-auto bg-[#f0f7f8] cursor-pointer rounded-full transition-all p-[8px_15px] hover:bg-base1/10">
                  {data?.blog_detail?.category}
                </div>
                <div className="text-[12px] leading-none font-normal text-center text-[#999] h-auto bg-white cursor-pointer rounded-full transition-all p-[8px_15px] hover:text-black">
                  {data?.blog_detail?.date}
                </div>
              </div>
            )}
          </div>
          <div className="w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-320px)] lg:w-[calc(100%-376px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-468px)] 3xl:w-[calc(100%-476px)]">
            <div className="w-full h-auto rounded-[50px] sm:bg-[#f0f7f8] overflow-hidden pb-[10px] sm:pb-[15px] xl:pb-[20px]">
              <Image
                src="/images/blog_detail-1.jpg"
                alt="Blog Icon"
                width={686}
                height={379}
                className="w-full h-auto aspect-[686/379] object-cover"
              />
              <div
                className="w-full h-auto p-[20px_30px] 3xs:p-[20px_50px] sm:p-[30px_20px] xl:p-[40px_45px] sm:border-b border-[#d4e0e1] typography text-center sm:text-start [&>_p,_h1,_h2,_h3,_h4,_h5,_h6,_li]:text-[#8b8b8b] [&>_p,_h1,_h2,_h3,_h4,_h5,_h6,_li]:font-normal [&>_h1,_h2,_h3,_h4,_h5,_h6]:scroll-m-[50px] max-sm:[&_ul>li]:list-inside"
                dangerouslySetInnerHTML={{ __html: htmlWithIds }}
              />
              <div className="w-full h-auto block">
                <div className="w-full p-[20px_15px_0] sm:p-[30px_20px_0] xl:p-[50px_45px_0]">
                  <Heading
                    as="h5"
                    size="h5"
                    className="text-center sm:text-start font-semibold text-black mb-[5px] sm:mb-[10px] xl:mb-[20px] 2xl:mb-[20px]"
                  >
                    Recent Blogs
                  </Heading>
                </div>
                <div className="flex flex-wrap [&>*]:p-[6px_5px] sm:[&>*]:p-0">
                  {isDesktop
                    ? data?.blog_list?.slice(0, 3)?.map((item, index) => (
                        <div
                          key={item.key}
                          className="w-full not-last:border-b-[1px] border-[#d4e0e1]"
                        >
                          <Link
                            href={item?.button?.url}
                            className="w-full h-auto flex p-[20px_20px] xl:p-[30px_45px]"
                          >
                            <div className="w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] aspect-[24/16] rounded-[35px] overflow-hidden relative z-0">
                              <Image
                                src={item.media.path}
                                alt={item.media.alt}
                                fill
                                sizes="335px"
                                className="object-cover transition-transform hover:scale-110"
                              />
                            </div>
                            <div className="w-[calc(100%-180px)] lg:w-[calc(100%-200px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-240px)] p-[5px_0_5px_15px] xl:p-[5px_0_5px_25px] 3xl:p-[5px_0_5px_30px]">
                              <Heading
                                as="h5"
                                size="h5"
                                className="!font-bold truncate text-black mb-[2px] xl:mb-[4px]"
                              >
                                {item.title}
                              </Heading>
                              <Text
                                as="p"
                                size="p3"
                                className="capitalize truncate text-[#3d3d3d] mb-[5px] xl:mb-[15px]"
                              >
                                {item.category}
                              </Text>
                              <Text
                                as="p"
                                size="p1"
                                className="!tracking-normal line-clamp-3 text-[#9d9d9d] mb-[5px] xl:mb-[10px]"
                              >
                                {item.description}
                              </Text>
                              <Text
                                as="p"
                                size="p1"
                                className="truncate text-[#999]"
                              >
                                {data?.blog_detail?.date}
                              </Text>
                            </div>
                          </Link>
                        </div>
                      ))
                    : data?.blog_list?.slice(0, 2)?.map((item, index) => (
                        <div key={item.key}>
                          <Link
                            href={item?.button?.url}
                            className="w-full h-auto block bg-[#f0f7f8] rounded-[50px] p-[15px] hover:bg-base1/6 transition-all"
                          >
                            <div className="w-full aspect-[33/20] rounded-[35px] overflow-hidden relative z-0">
                              <Image
                                src={item.media.path}
                                alt={item.media.alt}
                                fill
                                sizes="335px"
                                className="object-cover w-full h-full transition-transform hover:scale-110"
                              />
                            </div>
                            <div className="w-full p-[15px_20px_10px] 3xs:p-[25px_40px_20px]">
                              <Heading
                                as="h3"
                                size="h3"
                                className="!font-bold line-clamp-2 text-black mb-[5px]"
                              >
                                {item.title}
                              </Heading>
                              <Text
                                as="p"
                                size="p3"
                                className="capitalize truncate text-[#3d3d3d] mb-[5px]"
                              >
                                {item.category}
                              </Text>
                              <Text
                                as="p"
                                size="p1"
                                className="line-clamp-2 text-[#9d9d9d]"
                              >
                                {item.description}
                              </Text>
                            </div>
                          </Link>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
          {isDesktop && (
            <div className="w-full sm:w-[220px] md:w-[320px] lg:w-[376px] xl:w-[420px] 2xl:w-[468px] 3xl:w-[476px] ">
              <div className="w-full h-auto rounded-[50px] bg-[#f0f7f8] p-[20px_15px] sm:p-[30px_20px] xl:p-[55px_40px] sticky top-[-40px] left-0">
                <div>
                  <Text
                    as="p"
                    size="p3"
                    className="text-[#8f9d9f] flex mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"
                  >
                    <Image
                      src="/images/blog_detail-icon-1.svg"
                      alt="Blog Icon"
                      width={15}
                      height={10}
                      className="mr-[6px] inline-block"
                    />
                    On this page
                  </Text>
                  <nav className="w-full h-auto mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[50px]">
                    <ul>
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const el = document.getElementById(item.id);
                              if (el) {
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }}
                            className={`3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-normal w-full h-auto block p-[4px_10px] sm:p-[8px_15px] xl:p-[10px_15px] 2xl:p-[15px_20px] relative z-0 border-l-[3px] hover:border-black hover:text-black transition duration-400 ${
                              activeId === item.id
                                ? "text-black border-black"
                                : "text-[#b3bebf] border-[#b3bebf]"
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div>
                  <Text
                    as="p"
                    size="p3"
                    className="text-[#8f9d9f] flex mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]"
                  >
                    Post topics
                  </Text>
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
