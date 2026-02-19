"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { RiskAssuranceData } from "@/app/risk-overview/page";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";

type RiskAssuranceProps = {
  data: {
    title: string;
    description: string;
    items: RiskAssuranceData[];
  };
};
export default function RiskAssuranceServices({ data }: RiskAssuranceProps) {
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
    <section className="w-full py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB]">
      <div className="container">
        <div className="w-full mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10"
          >
            {data?.title}
          </Heading>
          <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]">
            {parse(data?.description)}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5.5 lg:gap-6.25 2xl:gap-7.5 3xl:gap-10">
          {data.items.map((item) => (
            <div key={item?.id} className="w-full h-auto block">
              <div className="group [--icon-size:45px] lg:[--icon-size:40px] 2xl:[--icon-size:45px] 3xl:[--icon-size:60px] w-full h-full p-6.25 lg:p-5 2xl:p-6.25 3xl:p-7.5 max-sm:pr-[10px] bg-white rounded-[10px] sm:rounded-[8px] 2xl:rounded-[14px] border-1 border-[#E2E2E2] flex">
                <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-2.25 lg:p-2 2xl:p-2.25 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[calc(100%-var(--icon-size))] pl-3.75 lg:pl-3 2xl:pl-3.75 3xl:pl-5">
                  <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-[#1C5396] mb-1.5 lg:mb-1.75 3xl:mb-3">
                    {item?.title}
                  </div>
                  <p className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E] max-w-[93%]">
                    {parse(item?.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full block sm:hidden">
          <div
            ref={emblaRef}
            className="w-full max-w-full overflow-hidden px-[10px]"
          >
            <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-[10px] 2xl:-mx-[15px] [&>*]:p-2 lg:[&>*]:p-[10px] 2xl:[&>*]:p-[15px]">
              {data.items.map((item) => (
                <div
                  key={`insight-${item.id}`}
                  className="flex-[0_0_100%] min-w-0 select-none">
                  <div key={item?.id} className="w-full h-auto block">
                    <div className="group [--icon-size:45px] lg:[--icon-size:40px] 2xl:[--icon-size:45px] 3xl:[--icon-size:60px] w-full h-full p-6.25 lg:p-5 2xl:p-6.25 3xl:p-7.5 max-sm:pr-[10px] bg-white rounded-[10px] sm:rounded-[8px] 2xl:rounded-[14px] border-1 border-[#E2E2E2] flex">
                      <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-2.25 lg:p-2 2xl:p-2.25 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                        <Image
                          src={item?.media?.path}
                          alt={item?.media?.alt}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="w-[calc(100%-var(--icon-size))] pl-3.75 lg:pl-3 2xl:pl-3.75 3xl:pl-5">
                        <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-[#1C5396] mb-1.5 lg:mb-1.75 3xl:mb-3">
                          {item?.title}
                        </div>
                        <p className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E]">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
