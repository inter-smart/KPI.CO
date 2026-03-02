"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { BusinessItem } from "@/app/mainland-company-formation-uae/page";

type BusinessSetupProps = {
  data: {
    title: string;
    description: string;
    items: BusinessItem[];
  };
};

export default function BusinessSetup({ data }: BusinessSetupProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 250000000, stopOnInteraction: true })],
  );
  return (
    <section className="w-full h-auto py-[45px_40px] sm:py-[35px_50px] xl:py-[45px_70px] 2xl:py-[55px_80px] 3xl:py-[70px_100px] block">
      <div className="container">
        <div className="w-full h-auto mb-[25px] sm:mb-[20px] xl:mb-[25px] 3xl:mb-[35px]">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-[30px] lg:mb-[20px] xl:mb-[30px] 3xl:mb-[40px]"
          >
            {data?.title}
          </Heading>
          <div className="text-[16px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]">
            {parse(data?.description)}
          </div>
        </div>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.items.map((item) => (
              <div
                key={item?.id}
                className={cn(
                  "flex-[0_0_100%] sm:flex-[0_0_45%] xl:flex-[0_0_28%] mr-[20px] xl:mr-[25px] 2xl:mr-[30px] 3xl:mr-[40px] min-w-0 select-none",
                )}
              >
                <div className="w-full h-full rounded-[18px] border border-black/10 overflow-hidden flex flex-col">
                  <div className="w-full h-auto aspect-[450/340] block relative z-0 before:content-[''] before:w-full before:h-full before:absolute before:z-2 before:inset-0 before:bg-linear-to-b before:from-transparent before:to-[#0F4C81]/80">
                    <Image
                      src={item?.media?.path || "/images/placeholder.png"}
                      alt={item?.media?.alt}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      fill
                      className="w-full h-full object-cover z-1"
                    />
                    <div className="text-[24px] sm:text-[18px] xl:text-[24px] 2xl:text-[25px] 3xl:text-[32px] leading-normal font-medium text-white m-[30px_25px] sm:m-[20px_15px] xl:m-[25px_20px] 2xl:m-[30px_25px] 3xl:m-[35px_30px] absolute z-2 inset-[auto_auto_0_0]">
                      {item?.name}
                    </div>
                  </div>
                  <div className="w-full h-full p-[25px] sm:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px] flex flex-col justify-between">
                    <div className="text-[16px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E] mb-[20px]">
                      {item?.description}
                    </div>
                    <Link
                      href={item?.button?.link || "#"}
                      target={item?.button?.target ? "_self" : "_blank"}
                      className="text-[16px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-semibold text-[#3570B8] transition-opacity duration-200 hover:opacity-70"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
