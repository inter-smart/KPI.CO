"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { BankingPartner } from "@/app/corporate-services-uae/page";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CorporateServicesUaeBankingProps = {
  data: {
    title: string;
    description: string;
    partners: BankingPartner[];
  };
  variant?:
    | "default"
    | "mainland"
    | "freezone"
    | "dsoa"
    | "saifz"
    | "dmcc"
    | "ifza"
    | "company"
    | "audit";
};

export default function CorporateServicesUaeBanking({
  data,
  variant = "default",
}: CorporateServicesUaeBankingProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2500, stopOnInteraction: true })],
  );
  return (
    <section
      className={cn(
        "w-full h-auto py-[40px] lg:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] overflow-visible relative z-0 block ",
        variant === "dsoa" || variant === "dmcc"
          ? "shadow-none"
          : "shadow-[0_-6px_12px_-4px_rgba(0,0,0,0.12),0_8px_16px_-6px_rgba(0,0,0,0.15)]",

        variant === "audit" && "!pt-1 shadow-none",
        variant === "company" && "!pt-1 shadow-none",
        variant === "ifza" && "!pt-5 shadow-none",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "w-full h-auto mb-7.5 sm:mb-8 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5",
            variant === "mainland" ||
              variant === "freezone" ||
              variant === "dsoa" ||
              variant === "dmcc" ||
              variant === "company" ||
              variant === "ifza" ||
              variant === "audit"
              ? "text-left"
              : "sm:text-center",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-7.5 sm:mb-4 2xl:mb-5 3xl:mb-6.25"
          >
            {data?.title}
          </Heading>
          <div
            className={cn(
              "text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]",
              variant === "mainland"
                ? ""
                : variant === "freezone" ||
                    variant === "dsoa" ||
                    variant === "dmcc"
                  ? "text-left"
                  : "lg:max-w-195 2xl:max-w-295 mx-auto",
              variant === "saifz" && "text-left !max-w-full",
              variant === "company" && "text-left !max-w-full ",
              variant === "ifza" && "text-left !max-w-full ",
            )}
          >
            {parse(data?.description)}
          </div>
        </div>
        <div ref={emblaRef} className="w-full max-w-full">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5 lg:-mx-6.25 2xl:-mx-5.5 3xl:-mx-8.75 [&>*]:p-2.5 lg:[&>*]:p-6.25 2xl:[&>*]:p-5.5 3xl:[&>*]:p-8.75">
            {data?.partners?.map((item) => (
              <div
                key={`affiliation-${item?.id}`}
                className={cn(
                  "flex-[0_0_115px] sm:flex-[0_0_30%] lg:flex-[0_0_27%] min-w-0 select-none",
                )}
              >
                <div className="w-full h-[60px] md:h-[100px] xl:h-[130px] 2xl:h-[160px] rounded-[5px] sm:rounded-[8px] 2xl:rounded-[13px] flex items-center justify-center bg-white shadow-[0_12px_25px_0_rgba(0,0,0,0.09)] hover:shadow-xl transition">
                  <div className="w-[65px] sm:w-[120px] xl:w-[150px] 2xl:w-[180px] ">
                    <Image
                      src={item?.media?.path || "/images/placeholder-image.png"}
                      alt={item?.media?.alt || "Professional Affiliations"}
                      width={230}
                      height={95}
                      className="w-full aspect-2/1 object-contain"
                    />
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
