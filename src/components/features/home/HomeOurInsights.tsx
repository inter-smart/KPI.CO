"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";

interface Media {
  path: string;
  alt: string;
}

interface InsightItem {
  id: number;
  title?: string;
  description?: string;
  date?: string;
  read_time?: string;
  media: Media;
  slug?: string;
}

interface localData {
  title?: string;
  items: InsightItem[];
}

interface OurInsightsProps {
  data?: localData;
}

interface InsightCardProps {
  data: InsightItem;
}

const local_data: localData = {
  title: "Our Insights",
  items: [
    {
      id: 1,
      media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
      title: "A Guide to Choosing the Best Audit Firm in 2025",
      description:
        "<p>What to look for when choosing an audit firm in 2025 – from expertise and independence to technology and trust that support better business decisions.</p>",
      date: "14 NOV 2024",
      read_time: "2 MIN READ",
      slug: "#",
    },
    {
      id: 2,
      media: {
        path: "/images/home-insights-2.jpg",
        alt: "Top Audit Firms UAE",
      },
      title: "Top 10 Audit firms in UAE",
      description:
        "State helps you see how many more days you need to work to reach.",
      date: "13 NOV 2024",
      read_time: "2 MIN READ",
      slug: "#",
    },
    {
      id: 3,
      media: {
        path: "/images/home-insights-3.jpg",
        alt: "Audit Firm Selection",
      },
      title: "A Guide to Choosing the Best Audit Firm in 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut a days you need to work to reach.",
      date: "12 NOV 2024",
      read_time: "2 MIN READ",
      slug: "#",
    },
    {
      id: 4,
      media: { path: "/images/home-insights-1.jpg", alt: "VAT Guide UAE" },
      title:
        "VAT in the United Arab Emirates: A Complete Guide for Companies in 2025",
      description:
        "State helps you see how many more days you need to work to reach.",
      date: "12 NOV 2024",
      read_time: "2 MIN READ",
      slug: "#",
    },
  ],
};

export default function OurInsights({ data = local_data }: OurInsightsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    // [Autoplay({ delay: 6000, stopOnInteraction: true }), ClassNames()],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", () => onInit(emblaApi));
    emblaApi.on("reInit", () => onSelect(emblaApi));
    emblaApi.on("select", () => onSelect(emblaApi));
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section className="w-full py-8 xl:py-[70px_100px] 2xl:py-[80px_110px] overflow-hidden">
      <div className="container">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {data.title}
        </h2>

        <div ref={emblaRef} className="w-full max-w-full ">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3.5 2xl:-mx-5 [&>*]:p-2 lg:[&>*]:p-3.5 2xl:[&>*]:p-5">
            {data.items.map((item, index) => (
              <div
                key={"our-sights" + index}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_268px] lg:flex-[0_0_300px] 2xl:flex-[0_0_360px] 3xl:flex-[0_0_440px] min-w-0 select-none",
                )}
              >
                <InsightCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1 xl:gap-2 mt-4 xl:mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 xl:w-3 aspect-square rounded-full transition",
                index === selectedIndex ? "bg-[#ffc916]" : "bg-[#dedede]",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CARD */
/* ------------------------------------------------------------------ */
function InsightCard({ data }: InsightCardProps) {
  return (
    <div className="group w-full h-full flex flex-col bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="w-full aspect-440/268 overflow-hidden rounded-t-[8px]">
        <Image
          src={data.media.path || "/images/placeholder-image.png"}
          alt={data.media.alt || "Insight Image"}
          width={440}
          height={268}
          className="object-cover hover:scale-120 transition"
        />
      </div>

      <div className="w-full p-3 xl:p-5 2xl:p-6 flex-1 flex flex-col">
        <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] leading-none font-medium text-[#5280ca] mb-2 xl:mb-3 2xl:mb-4">
          {data.date} • {data.read_time}
        </div>

        <div className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[21px] leading-normal font-semibold line-clamp-2 text-black mb-1.5 xl:mb-2.5 2xl:mb-3.5">
          {parse(data.title ?? "title")}
        </div>

        <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] leading-tight font-normal line-clamp-5 text-[#4e4e4e] mb-2 xl:mb-3 2xl:mb-4">
          {parse(data.description ?? "<p>no content</p>")}
        </div>

        <Link
          href={data.slug ?? "#"}
          className="text-[12px] xl:text-[14px] 2xl:text-[17px] leading-tight font-medium text-[#1c5396] inline-flex items-center gap-2 mt-auto hover:[&_img]:translate-x-1 hover:text-[#ffc916] transition-colors duration-300"
        >
          Read More
          <Image
            src="/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={12}
            height={5}
            className="w-2.5 block mt-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
