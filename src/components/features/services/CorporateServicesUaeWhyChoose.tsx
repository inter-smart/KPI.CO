"use client";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "@/components/utils/embla-carousel-dot-button";

export type WhyChooseItem = {
  id: number;
  title: string;
  description?: string;
};

export type CorporateServicesUaeWhyChooseData = {
  title: string;
  sub_title: string;
  description?: string;
  items: WhyChooseItem[];
};

export type CorporateServicesUaeWhyChooseProps = {
  variant?:
  | "default"
  | "mainland"
  | "advisory"
  | "freezone-business"
  | "risk"
    | "ADGM-Foundation"
  | "tax-advisory"
  | "sop"
  | "regulatory"
  | "spv";
  titleClassName?: string;
  data: CorporateServicesUaeWhyChooseData;
};

type ServiceCardProps = {
  item: WhyChooseItem;
  variant?:
  | "default"
  | "mainland"
  | "advisory"
  | "risk"
    | "ADGM-Foundation"
  | "freezone-business"
  | "tax-advisory"
  | "sop"
  | "regulatory"
  | "spv";
};

export default function CorporateServicesUaeWhyChoose({
  data,
  variant = "default",
  titleClassName,
}: CorporateServicesUaeWhyChooseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <section
      className={cn(
        "w-full h-auto py-[40px_50px] sm:py-[40px_60px] lg:py-[40px_80px] 2xl:py-[50px_100px] 3xl:py-[65px_125px] block",
        variant === "ADGM-Foundation" &&
          "max-sm:py-[45px_15px] xl:py-[55px_75px]",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "w-full h-auto ",
            variant === "mainland" ||
              variant === "advisory" ||
              variant === "risk" ||
              variant === "spv" ||
              variant === "sop" ||
              variant === "freezone-business" ||
              variant === "regulatory" ||
              variant === "tax-advisory"
              ? "text-left"
              : "sm:text-center",
            variant === "regulatory" &&
            "",
            variant === "ADGM-Foundation" && "max-xl:!mb-[25px] xl:mb-[30px]",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className={cn(
              "text-[#1C5396] mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10",
              variant === "default" && "text-center",
              variant === "risk" && "text-left",
              variant === "ADGM-Foundation" && "text-left",
              variant === "freezone-business" && "text-left",
              variant === "spv" && "text-left",
              variant === "tax-advisory" && "text-left",
              titleClassName,
            )}
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] max-sm:[&_br]:hidden [&_b]:font-semibold [&_b]:text-black [&_b]:block [&_b]:mt-[20px] sm:[&_b]:mt-[30px]">
              {parse(data?.description)}
            </div>
          )}

          <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[32px] leading-normal capitalize font-semibold text-black mt-2 lg:mt-2 2xl:mytt-3">
            {data?.sub_title}
          </div>
        </div>
        {variant === "mainland" && (
          <div ref={emblaRef} className="w-full max-w-full block sm:hidden">
            <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5">
              {data?.items?.map((item) => (
                <div
                  key={`service-${item.id}`}
                  className="flex-[0_0_100%] min-w-0 select-none px-2.5"
                >
                  <ServiceCard item={item} variant={variant} />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-6 gap-[30px] sm:hidden">
              {scrollSnaps.map((_, index) => {
                const distance = Math.abs(index - selectedIndex);
                return (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      distance === 0
                        ? "w-3 h-3 bg-[#FFC916]"
                        : distance === 1
                          ? "w-2.5 h-2.5 bg-[#D9D9D9]"
                          : distance === 2
                            ? "w-2 h-2 bg-[#D9D9D9]"
                            : "w-1.5 h-1.5 bg-[#D9D9D9]",
                    )}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:gap-[30px] lg:gap-[25px_40px] 2xl:gap-[30px_50px] 3xl:gap-[65px_40px]",
            variant === "mainland" && "hidden sm:grid", 
            variant === "ADGM-Foundation" &&
              "max-sm:!gap-[15px] sm:!gap-[20px_25px] xl:!gap-[25px_30px]",
          )}
        >
          {data?.items?.map((item) => (
            <div key={item?.id} className="w-full h-auto ">
              <ServiceCard key={item.id} item={item} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item, variant = "default" }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "w-full h-full p-[20px_24px] lg:p-5 2xl:p-6.25 3xl:p-7.5 rounded-[10px] 3xl:rounded-[14px] bg-[#f9fafb] overflow-hidden block relative z-0 min-h-[120px] xl:min-h-[135px] 2xl:min-h-[145px] 3xl:min-h-[180px] before:content-[''] before:w-[15px] before:h-full before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px] after:3xl:translate-x-[5px]  ",
        variant === "mainland" && "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "freezone-business" &&
        "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "sop" ||
        (variant === "regulatory" &&
          "before:bg-gradient-to-t before:from-[#1C5396] before:to-[#389FDB] after:bg-[#f9fafb]"),
        (variant === "default" || variant === "advisory") &&
        "before:bg-gradient-to-t before:from-[#6A9FE0] before:to-[#053269] after:bg-[#f3f7fd]",
        (variant === "risk" ||
          variant === "tax-advisory" ||
          variant === "ADGM-Foundation") &&
        "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] after:bg-[#f3f7fd] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%]",
        variant === "spv" &&
        "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] after:bg-[#F9FAFB]",
      )}
    >
      <div className="w-full h-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:bg-[#f9fafb] before:-z-1">
        <div
          className={cn(
            "text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] leading-normal capitalize font-medium mb-1 lg:mb-1.25 2xl:mb-2.5 re ",
            variant === "mainland" && "text-[#1C5396]",
            variant === "risk" && "text-[#1C5396]",
            variant === "ADGM-Foundation" && "text-[#1C5396]",
          variant === "advisory" && "text-[#1C5396]",
            variant === "freezone-business" && "text-[#1C5396]",
            variant === "spv" && "text-[#1C5396]",
            variant === "tax-advisory" && "text-[#1C5396] capitalize",
            variant === "sop" || (variant === "regulatory" && "text-[#1C5396]"),
            variant === "default" && "text-black",
          )}
        >
          {item?.title}
        </div>
        {item?.description && (
          <div
          className={cn(
            "text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] leading-[1.6] font-normal text-[#4E4E4E] max-md:[&_br]:hidden",
            variant === "ADGM-Foundation" &&
              "text-[14px] sm:!text-[15px] xl:text-[16px] [&_P]:leading-[1.6]",
          )}
        >
            {parse(item?.description)}
          </div>
        )}
      </div>
    </div>
  );
}
