"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import type { InsightItem } from "@/app/page";

type BlogrelatedProps = {
  data: {
    title: string;
    items: InsightItem[];
  };
};

type InsightCardProps = {
  data: InsightItem;
};

export default function BlogRelated({ data }: BlogrelatedProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

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
    <section className="w-full py-8 xl:py-[70px_90px] 2xl:py-[80px_110px] bg-[#F9F9F9] overflow-hidden">
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>
        <div className="-mx-[10px]">
          <div
            ref={emblaRef}
            className="w-full max-w-full overflow-hidden px-[10px]"
          >
            <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3.5 2xl:-mx-5 [&>*]:p-2 lg:[&>*]:p-4 2xl:[&>*]:p-5">
              {data.items.map((item) => (
                <div
                  key={`insight-${item.id}`}
                  className={cn(
                    "flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0 select-none",
                  )}
                >
                  <InsightCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {data.items.length > 3 && (
          <div className="flex justify-center gap-1 xl:gap-2 mt-4 xl:mt-6 ">
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
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CARD                                                               */
/* ------------------------------------------------------------------ */

function InsightCard({ data }: InsightCardProps) {
  return (
   <div className="group flex flex-col w-full h-full max-sm:min-h-[477px] xl:min-h-[527px] bg-white rounded-[13px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border  border-gray-50">
      <div className="relative aspect-[375/202] overflow-hidden">
        <Image
          src={data.media.path || "/images/placeholder-image.png"}
          alt={data.media.alt || data.title}
          fill
          className="object-cover scale-110 group-hover:translate-y-2 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-7 xl:p-[25px_48px] 2xl:p-[25px_40px] 3xl:p-[34px_60px] flex flex-col flex-1 ">
        <div className="text-[14px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[20px] font-medium text-[#5280ca] mb-[15px] xl:mb-[12px] uppercase tracking-wide">
          {data.date} • {data.readTime}
        </div>
        {data.date_full && (
          <div className="text-[14px] xl:text-[16px] font-medium text-[#5280ca] mb-[15px] xl:mb-[12px] uppercase tracking-wide hidden">
            {data.date_full} • {data.readTime}
          </div>
        )}
        <h3 className="text-[16px] md:text-[20px] xl:text-[20px] 3xl:text-[26px] font-semibold text-black  mb-[15px] xl:mb-[12px] leading-relaxed transition-colors">
          {parse(data.title)}
        </h3>
        <div className="text-[14px] md:text-[15px] xl:text-[16px] 3xl:text-[21px] text-[#4e4e4e] leading-normal mb-[23px]">
          {parse(data.description)}
        </div>
        <Link
          href={data.slug ?? "#"}
          className="text-[14px] xl:text-[16px] 2xl:text-[17px]  3xl:text-[21px] leading-relaxed font-semibold text-[#1c5396] inline-flex items-center gap-2 mt-auto   transition-colors duration-300"
        >
          Read More<span className="text-[11px] font-semibold">→</span>
        </Link>
      </div>
    </div>
  );
}
