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

type HomeOurInsightsProps = {
  data: {
    title: string;
    items: InsightItem[];
  };
  variant?: "default" | "saifz";
};

type InsightCardProps = {
  data: InsightItem;
};

export default function HomeOurInsights({
  data,
  variant = "default",
}: HomeOurInsightsProps) {
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
    <section
      className={cn(
        "w-full py-[45px] xl:py-[70px_100px] 2xl:py-[80px_110px] overflow-hidden",
        variant === "saifz" && "bg-[#F9F9F9]",
      )}
    >
      <div className="container overflow-hidden">
        <Heading
          as="h2"
          size="h2"
          className="text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>

        <div ref={emblaRef} className="w-full max-w-full">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-[15px] 2xl:-mx-[20px] 3xl:-mx-[25px] [&>*]:p-2 lg:[&>*]:p-[15px] 2xl:[&>*]:p-[20px] 3xl:[&>*]:p-[25px]">
            {data.items.map((item) => (
              <div
                key={`insight-${item.id}`}
                className={cn(
                  "flex-[0_0_75%] sm:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 select-none",
                  variant === "saifz" &&
                    "flex-[0_0_90%] sm:flex-[0_0_40%] lg:flex-[0_0_33.5%]",
                )}
              >
                <InsightCard data={item} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            "flex justify-center gap-1 xl:gap-2 mt-4 xl:mt-6 ",
            variant === "saifz" && "hidden",
          )}
        >
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
/* CARD                                                               */
/* ------------------------------------------------------------------ */

function InsightCard({ data }: InsightCardProps) {
  return (
    <div className="group flex flex-col  w-full h-full bg-white rounded-[13px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border  border-gray-50">
      <div className="relative aspect-[440/268] overflow-hidden">
        <Image
          src={data.media.path || "/images/placeholder-image.png"}
          alt={data.media.alt || "Insight Image"}
          width={440}
          height={268}
          className="w-full h-full object-cover transition"
        />
      </div>

      <div className="w-full h-full p-[22px_18px] md:p-[18px] xl:p-[25px] 2xl:p-[27px] 3xl:p-[35px] flex-1 flex flex-col">
        <Text
          size="p1"
          className=" lg:text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px]  leading-none font-medium text-[#5280CA] mb-[14px] 2xl:mb-[12px] 3xl:mb-[15px]"
        >
          {data.date} • {data.readTime}
        </Text>

        <div className="text-[16px] sm:text-[15px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[26px] leading-normal font-semibold line-clamp-2 text-black mb-[10px] xl:mb-[12px] 2xl:mb-[15px]">
          {parse(data.title ?? "title")}
        </div>

        <Text
          as="div"
          size="p1"
          className="text-[16px] sm:text-[15px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] leading-relaxed   text-[#4e4e4e] mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
        >
          {parse(data.description ?? "<p>no content</p>")}
        </Text>

        <Link
          href={data.slug ?? "#"}
          className="text-[16px] xl:text-[16px] 2xl:text-[17px]  3xl:text-[21px] leading-relaxed font-semibold text-[#1c5396] inline-flex items-center gap-2 mt-auto  transition-colors duration-300"
        >
          Read More <span>→</span>
        </Link>
      </div>
    </div>
  );
}
