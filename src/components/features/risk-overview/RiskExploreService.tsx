"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import type { ServiceItem } from "@/app/risk-assurance/risk-services-uae/page";

type RiskExploreServiceProps = {
  data: {
    title: string;
    items: ServiceItem[];
  };
  variant?:
    | "difc"
    | "default"
    | "ADGM-Foundations"
    | "risk"
    | "holding"
    | "difc-regulated"
    | "adgm-regulated" | "internal-audit"
    | "erm";
};

type ServiceProps = {
  data: ServiceItem;
  variant?:
    | "difc"
    | "default"
    | "ADGM-Foundations"
    | "risk"
    | "holding"
    | "difc-regulated"
    | "adgm-regulated" | "internal-audit"
    | "erm";
};

export default function RiskExploreService({
  data,
  variant = "default",
}: RiskExploreServiceProps) {
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
    <section className="w-full py-8 xl:py-[50px_90px] 2xl:py-[80px_110px] bg-[#F9F9F9] overflow-hidden">
      <div className="container max-sm:pr-0">
        <Heading
          as="h2"
          size="h2"
          className={cn(
            "text-[#1c5396] mb-[15px] xl:!mb-[25px] 2xl:!mb-[30px] animate-in fade-in slide-in-from-bottom-10 duration-1000 max-sm:[&>span]:hidden",
            variant === "holding" && "max-sm:text-[26px]",
                 
              variant === "internal-audit" &&  "max-sm:text-[26px]",
            variant === "erm" && "max-sm:text-[26px]",
          )}
        >
          {parse(data.title)}
        </Heading>
        <div className="-mx-[10px]">
          <div
            ref={emblaRef}
            className="w-full max-w-full overflow-hidden px-[10px]"
          >
            <div
              className={cn(
                "flex touch-pan-y touch-pinch-zoom -mx-[12px] lg:-mx-[10px] 2xl:-mx-[15px] [&>*]:p-[12px] lg:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]",
                variant === "ADGM-Foundations" &&
                  "max-sm:!-mx-[13px] max-sm:[&>*]:!p-[13px] xl:-mx-[10px] xl:[&>*]:p-[10px]",
              )}
            >
              {data.items.map((item) => (
                <div
                  key={`insight-${item.id}`}
                  className={cn(
                    "min-w-0 select-none flex-[0_0_75%] sm:flex-[0_0_408px] lg:flex-[0_0_25%]",
                    variant === "difc" &&
                      "flex-[0_0_306px] sm:flex-[0_0_50%] lg:flex-[0_0_414px]",
                    variant === "erm" &&
                      "flex-[0_0_75%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    variant === "holding" &&
                      "flex-[0_0_82%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    variant === "ADGM-Foundations" &&
                      "flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    variant === "difc-regulated" &&
                      "flex-[0_0_296px] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    variant === "adgm-regulated" &&
                      "flex-[0_0_306px] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    variant === "internal-audit" &&
                      "flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]",
                    variant === "erm" &&
                      "flex-[0_0_306px] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                  )}
                >
                  <Service data={item} variant="risk" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {data.items.length > 4 && (
          <div className="flex justify-center gap-[10px] xl:gap-[20px] 3xl:gap-[30px] mt-4 xl:mt-6">
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
/* Service CARD                                                               */
/* ------------------------------------------------------------------ */

function Service({ data, variant }: ServiceProps) {
  return (
    <Link
      href={data?.slug ?? "#"}
      className="group w-full h-[348px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[635px] flex flex-col bg-white rounded-[10px] overflow-hidden relative"
    >
      <div className="w-full h-full aspect-375/635 overflow-hidden rounded-t-[8px]">
        <Image
          src={data?.media?.path || "/images/placeholder-image.png"}
          alt={data?.media?.alt || "Insight Image"}
          width={440}
          height={268}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-120"
        />
      </div>

      <div
        className={cn(
          "w-full p-[20px_32px_20px] lg:p-[30px_25px_20px] xl:p-[30px_35px_25px] 3xl:p-[50px_40px_25px] bg-gradient-to-b from-[rgba(28,83,150,0)] from-[-21.74%] via-[#1C5396] via-[112.61%] to-[#000000] to-[112.61%] absolute inset-0 flex flex-col justify-between",

          (variant === "ADGM-Foundations" ||
            variant === "difc-regulated" ||
            variant === "difc" || variant === "internal-audit" ||
            variant === "erm") &&
            "xl:p-[50px_30px_85px]",
        )}
      >
        <div className="w-[28px] xl:w-[32px] h-[28px] xl:h-[32px] ml-auto">
          <Image
            src="/images/linkIcon.svg"
            alt="link icon"
            width={32}
            height={32}
            className="w-full h-full block mt-1 transition-transform duration-300"
          />
        </div>

        <div
          className={cn(
            "text-[24px] sm:text-[17px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] max-w-[218px] leading-normal font-medium  text-white min-h-[52px] sm:min-h-[78px] xl:min-h-[100px] 2xl:min-h-[126px] 3xl:min-h-[144px] [&>br]:!block",
            variant === "risk" && "min-h-fit",
          )}
        >
          {parse(data?.title ?? "title")}
        </div>
      </div>
    </Link>
  );
}
