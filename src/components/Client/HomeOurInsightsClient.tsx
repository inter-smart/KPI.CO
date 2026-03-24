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
    titles: string;
    items: InsightItem[];
  };
  variant?:
    | "default"
    | "saifz"
    | "ADGM-Foundations"
    | "Our-Insights"
    | "Our-Related"
    | "holding"
    | "ADGM-SPV-Formation"
    | "home"
    | "erm";
};

type InsightCardProps = {
  data: InsightItem;
  variant?:
    | "default"
    | "saifz"
    | "ADGM-Foundations"
    | "Our-Insights"
    | "Our-Related"
    | "ADGM-SPV-Formation"
    | "holding"
    | "home"
    | "erm";
};

export default function HomeOurInsightsClient({
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
        "w-full py-[46px_45px] xl:py-[74px_102px] overflow-hidden",
        variant === "default" && "bg-[#F9F9F9]",
        variant === "ADGM-SPV-Formation" && "bg-white",
        variant === "Our-Related" &&
          "bg-[#F9F9F9] max-sm:py-[24px_46px] xl:py-[73px_94px]",
      )}
    >
      <div className="container overflow-hidden">
        <Heading
          as="h2"
          size="h2"
          className={cn(
            "text-[#1c5396] mb-4 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 max-sm:!text-[24px]",
            variant === "holding" &&
              "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px]",
            variant === "erm" &&
              "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px]",
            variant === "Our-Insights" &&
              "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[38px] max-sm:!mb-[9px] xl:!mb-[9px]",
            variant === "Our-Related" &&
              "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] max-sm:!mb-[2px] xl:!mb-[5px]",
          )}
        >
          {variant === "default" ? data.titles : data.title}
        </Heading>

        <div ref={emblaRef} className="w-full max-w-full">
          <div
            className={cn(
              "flex touch-pan-y touch-pinch-zoom -mx-[12.805px] lg:-mx-[15px] xl:-mx-[20px] 3xl:-mx-[25px] [&>*]:p-[12.805px] lg:[&>*]:p-[15px] xl:[&>*]:p-[20px]",
              variant === "ADGM-Foundations" &&
                "xl:-mx-[20px] xl:[&>*]:p-[20px]",
              variant === "home" && "xl:-mx-[19px] xl:[&>*]:p-[19px]",
              variant === "Our-Insights" && "xl:-mx-[19px] xl:[&>*]:p-[19px]",
              variant === "Our-Related" && "xl:-mx-[19px] xl:[&>*]:p-[19px]",
            )}
          >
            {data.items.map((item) => (
              <div
                key={`insight-${item.id}`}
                className={cn(
                  "flex-[0_0_248.6px] sm:flex-[0_0_40%] xl:flex-[0_0_30%] min-w-0 select-none",
                  variant === "saifz" &&
                    "flex-[0_0_90%] sm:flex-[0_0_40%] xl:flex-[0_0_33.5%]",
                  variant === "default" &&
                    "flex-[0_0_67.445%] sm:flex-[0_0_40%] xl:flex-[0_0_33%]",
                  variant === "Our-Insights" &&
                    "flex-[0_0_67.445%] sm:flex-[0_0_40%] xl:flex-[0_0_29.807%]",
                  variant === "Our-Related" &&
                    "flex-[0_0_91.05%] sm:flex-[0_0_40%] xl:flex-[0_0_33.28%]",
                )}
              >
                <InsightCard data={item} variant={variant} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            "flex justify-center gap-1 xl:gap-[18px] mt-6 xl:mt-6 hidden",
            variant === "default" && "show",
          )}
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 xl:w-[18px] aspect-square rounded-full transition",
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

function InsightCard({ data, variant }: InsightCardProps) {
  return (
    <div className="group flex flex-col  w-full h-full bg-white rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="relative aspect-[375/202] max-sm:h-[136.13px] overflow-hidden">
        <Image
          src={data.media.path || "/images/placeholder-image.png"}
          alt={data.media.alt || "Insight Image"}
          unoptimized={true}
          width={440}
          height={268}
          className="w-full h-full object-cover transition scale-110 transition-all duration-200 group-hover:translate-y-2"
        />
      </div>
      <div
        className={cn(
          "w-full h-full p-[19.54px_16.13_19.33_18.87px] md:p-[18px] xl:p-[26px_25px] 2xl:p-[27px] 3xl:p-[35px] flex-1 flex flex-col",
          variant === "home" && "xl:p-[26px_25px]",
        )}
      >
        <Text
          size="p1"
          className="text-[14px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] leading-none font-medium text-[#5280CA] mb-[14px] xl:mb-[12px] 3xl:mb-[15px]"
        >
          {data.date} • {data.readTime}
        </Text>

        <div className="text-[16px] sm:text-[15px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[26px] leading-normal font-semibold text-black mb-[10px] xl:mb-[12px] 2xl:mb-[15px]">
          {parse(data.title ?? "title")}
        </div>

        <Text
          as="div"
          size="p1"
          className="text-[14px] sm:text-[15px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] leading-[150%] line-clamp-5 text-[#4e4e4e] mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
        >
          {parse(data.description ?? "<p>no content</p>")}
        </Text>

        <Link
          href={data.slug ? `/blog/${data.slug}` : "#"}
          className={cn(
            "text-[16px] xl:text-[16px] 2xl:text-[17px]  3xl:text-[21px] leading-relaxed font-semibold text-[#1c5396] inline-flex items-center gap-1 mt-auto  transition-colors duration-300",
            variant === "home" && "sm:font-medium",
          )}
        >
          Read More<span className="text-[11px] font-semibold">→</span>
        </Link>
      </div>
    </div>
  );
}
