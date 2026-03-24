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
    | "CorporateServicesUae"
    | "Financial-Statement-Audit"
    | "VatServicesUae"
    | "Formation-DIFC"
    | "AuditServicesUae"
    | "Formation-ADGM"
    | "mainland"
    | "CorporateTaxUae"
    | "offshore"
    | "advisory"
    | "freezone-business"
    | "risk"
    | "internal-audit"
    | "ADGM-Foundation"
    | "tax-advisory"
    | "e-invoicing"
    | "SOP"
    | "erm"
    | "holding"
    | "regulatory"
    | "aup"
    | "difc-regulated"
    | "adgm-regulated"
    | "spv";
  titleClassName?: string;
  data: CorporateServicesUaeWhyChooseData;
};

type ServiceCardProps = {
  item: WhyChooseItem;
  variant?:
    | "default"
    | "CorporateServicesUae"
    | "Financial-Statement-Audit"
    | "AuditServicesUae"
    | "VatServicesUae"
    | "Formation-ADGM"
    | "mainland"
    | "CorporateTaxUae"
    | "offshore"
    | "advisory"
    | "risk"
    | "ADGM-Foundation"
    | "freezone-business"
    | "tax-advisory"
    | "Formation-DIFC"
    | "SOP"
    | "erm"
    | "holding"
    | "internal-audit"
    | "e-invoicing"
    | "regulatory"
    | "aup"
    | "difc-regulated"
    | "CorporateTaxUae"
    | "adgm-regulated"
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
        "w-full h-auto py-[40px_50px] sm:py-[40px_60px] lg:py-[40px_70px] xl:py-[50px_80px] 2xl:py-[50px_100px] 3xl:py-[65px_125px] block",
        variant === "ADGM-Foundation" &&
          "max-sm:py-[46px_42px] xl:py-[55px_75px]",
        variant === "CorporateServicesUae" && "xl:py-[50px_90px]",
        variant === "Formation-ADGM" && "xl:py-[60px_80px]",
        variant === "Formation-DIFC" && "xl:py-[50px_70px]",
        variant === "erm" && "xl:py-[50px_80px]",
        variant === "regulatory" && "max-sm:py-[20px_40px]",
        variant === "spv" && "xl:py-[47.5px_69.5px]",
        variant === "e-invoicing" && "max-sm:py-[10px_69.5px]",
      )}
    >
      <div className="container max-sm:px-[16.1px]">
        <div
          className={cn(
            "w-full h-auto mb-[25px]",
            variant === "mainland" ||
              variant === "CorporateTaxUae" ||
              variant === "e-invoicing" ||
              variant === "advisory" ||
              variant === "adgm-regulated" ||
              variant === "offshore" ||
              variant === "risk" ||
              variant === "difc-regulated" ||
              variant === "Financial-Statement-Audit" ||
              variant === "VatServicesUae" ||
              variant === "holding" ||
              variant === "internal-audit" ||
              variant === "spv" ||
              variant === "SOP" ||
              variant === "erm" ||
              variant === "Formation-DIFC" ||
              variant === "AuditServicesUae" ||
              variant === "aup" ||
              variant === "freezone-business" ||
              variant === "regulatory" ||
              variant === "Formation-ADGM" ||
              variant === "tax-advisory"
              ? "text-left"
              : "sm:text-center",
            variant === "regulatory" && "",
            variant === "ADGM-Foundation" && "max-xl:!mb-[25px] xl:mb-[30px]",
            variant === "CorporateServicesUae" &&
              "max-xl:!mb-[25px] xl:mb-[50px]",
            variant === "offshore" && "xl:mb-[25px]",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className={cn(
              "text-[#1C5396] mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10",
              variant === "default" && "text-center",
              variant === "risk" && "text-left",
              variant === "internal-audit" && "text-left ",
              variant === "holding" && "text-left",
              variant === "ADGM-Foundation" && "text-left",
              variant === "freezone-business" && "text-left",
              variant === "spv" && "text-left",
              variant === "tax-advisory" && "text-left",
              variant === "CorporateServicesUae" &&
                "max-xl:!mb-[20px] xl:mb-[30px]",
              variant === "Formation-DIFC" && "max-xl:!mb-[20px] xl:mb-[30px]",
              variant === "Formation-ADGM" && "xl:mb-[30px]",
              variant === "offshore" && "xl:mb-[30px]",
              variant === "mainland" && "max-sm:text-[28px]",
              variant === "CorporateTaxUae" && "max-sm:text-[28px]",
              variant === "e-invoicing" && "max-sm:text-[28px]",
              titleClassName,
            )}
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <div
              className={cn(
                "text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-[1.6] font-normal text-[#4E4E4E] max-sm:[&_br]:hidden [&_b]:font-semibold [&_b]:text-black [&_b]:block [&_b]:mt-[20px] sm:[&_b]:mt-[30px]",
                variant === "SOP" &&
                  "[&_b]:text-[20px] lg:[&_b]:text-[20px] xl:[&_b]:text-[24px]",
                variant === "internal-audit" &&
                  "xl:leading-relaxed xl:max-w-[90%] xl:mb-[28px] ",
                variant === "regulatory" && "xl:leading-relaxed xl:mb-[28px] ",
              )}
            >
              {parse(data?.description)}
            </div>
          )}
          <div className="text-[20px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[32px] leading-normal capitalize font-semibold text-black mt-[20px] max-sm:mb-[25px] lg:mt-2 2xl:mytt-3">
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
            <div className="flex justify-center items-center mt-6 gap-[20px] md:gap-[5px] xl:gap-[30px] sm:hidden">
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
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[18px] sm:gap-[20px] xl:gap-[30px] xl:gap-[25px_40px] 2xl:gap-[30px_50px] 3xl:gap-[65px_40px]",
            variant === "mainland" && "hidden sm:grid",
            variant === "adgm-regulated" && "hidden sm:grid",
            variant === "difc-regulated" && "hidden sm:grid",
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:gap-[25px_30px] lg:gap-[25px_40px] 2xl:gap-[30px_50px] 3xl:gap-[65px_40px]",
            variant === "mainland" && "hidden sm:grid",
            variant === "ADGM-Foundation" &&
              "max-sm:!gap-[15px] sm:!gap-[20px_25px] xl:!gap-[25px_40px]",
            variant === "holding" &&
              "max-sm:!gap-[18px] sm:!gap-[20px_25px] xl:!gap-[25px_30px]",
            variant === "SOP" && "max-sm:gap-[18px] xl:!gap-[25px_30px]",
            variant === "Formation-DIFC" && "xl:!gap-[25px_30px]",
            variant === "Formation-ADGM" && "xl:gap-[25px_40px]",
            variant === "regulatory" && "xl:!gap-[24px_30px] xl:mr-[10px]",
            variant === "Financial-Statement-Audit" && "xl:gap-[25px_30px]",
            variant === "VatServicesUae" && "xl:!gap-[25px_40px]",
            variant === "offshore" && "xl:gap-[25px_30px]",
            variant === "AuditServicesUae" && "xl:gap-[30px_39px]",
          )}
        >
          {data?.items?.map((item) => (
            <div
              key={item?.id}
              className={cn(
                "w-full h-auto  ",
                variant === "ADGM-Foundation" && "max-sm:mb-0",
              )}
            >
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
        "w-full h-full rounded-[10px] bg-[#f9fafb] overflow-hidden block relative z-0 min-h-[120px] xl:min-h-[120px] 2xl:min-h-[145px] 3xl:min-h-[180px] before:content-[''] before:w-[10px] before:h-full before:bg-gradient-to-b before:from-[#1C5396] before:to-[#389FDB] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:bg-[#f3f7fd] after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px]",
        variant === "mainland" && "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "CorporateTaxUae" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb] xl:min-h-[160px]",
        variant === "e-invoicing" && "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "Financial-Statement-Audit" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "adgm-regulated" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "difc-regulated" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "VatServicesUae" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "freezone-business" &&
          "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "aup" && "before:bg-[#FFC916] after:bg-[#f9fafb]",
        variant === "regulatory" &&
          "before:bg-gradient-to-t before:from-[#1C5396] before:to-[#389FDB] after:bg-[#f9fafb] max-sm:bg-[#6A9FE014]",
        (variant === "default" || variant === "advisory") &&
          "before:bg-gradient-to-t before:to-[#3EB0EA] before:from-[#053269] after:bg-[#f3f7fd]",
        (variant === "risk" ||
          variant === "tax-advisory" ||
          variant === "internal-audit" ||
          variant === "ADGM-Foundation") &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] after:bg-[#f3f7fd] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%] xl:min-h-[156px] max-sm:min-h-[135px]",
        variant === "spv" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] after:bg-[#F9FAFB]",
        variant === "holding" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f3f7fd] before:to-[110%]",
        variant === "AuditServicesUae" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f3f7fd] before:to-[110%] xl:min-h-[160px]",
        variant === "SOP" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%]",
        variant === "Formation-DIFC" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%]",
        variant === "Formation-ADGM" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%]",
        variant === "offshore" &&
          "before:bg-gradient-to-b before:from-[#3EB0EA] before:to-[#1756a3] xl:rounded-[10px] after:bg-[#f9fafb] before:to-[110%] xl:pr-[40px]",
        variant === "erm" && "after:bg-[#f3f7fd] max-sm:min-h-[150px]",
        variant === "AuditServicesUae" &&
          "after:bg-[#f3f7fd] max-sm:min-h-[153px]",
        variant === "risk" && "xl:!h-[120px]",
        variant === "SOP" && "max-sm:min-h-[150px] max-sm:mr-[0.2px]"
      )}
    >
      <div
        className={cn(
          "relative rounded-[10px] overflow-hidden p-[20px_24px] lg:p-5 xl:p-[23px_24px] 2xl:p-6.25 3xl:p-7.5  after:absolute after:top-0 after:right-[0px] after:rounded-[10px] after:w-[calc(100%-3px)] after:h-full after:bg-[#f9fafb] after:content-[''] ",
          variant === "CorporateServicesUae" &&
            "after:bg-[rgba(106,159,224,0.08)]",
          variant === "AuditServicesUae" && "h-full xl:pr-[42px]",
          variant === "erm" && "after:bg-[#f3f7fd]",
          variant=== "risk" && "xl:!py-[10px]" ,
          variant=== "regulatory" && "p-[19px_24px] xl:p-[24px]" ,
          variant=== "Formation-ADGM" && "p-[19px_24px] xl:p-[25px]"
        )}
      >
        <div
          className={cn(
            "text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] relative z-1 leading-normal capitalize font-medium mb-1 lg:mb-1.25 2xl:mb-2.5 ",
            variant === "difc-regulated" && "text-[#1C5396]",
            variant === "mainland" && "text-[#1C5396]",
            variant === "CorporateTaxUae" && "text-[#1C5396] xl:mb-[5px]",
            variant === "e-invoicing" && "text-[#1C5396]",
            variant === "aup" && "text-[#1C5396]",
            variant === "adgm-regulated" && "text-[#1C5396]",
            variant === "risk" && "text-[#1C5396]",
            variant === "holding" && "text-[#1C5396]",
            variant === "ADGM-Foundation" && "text-[#1C5396]",
            variant === "advisory" && "text-[#1C5396]",
            variant === "freezone-business" && "text-[#1C5396]",
            variant === "spv" && "text-[#1C5396]",
            variant === "AuditServicesUae" && "text-[#1C5396]",
            variant === "tax-advisory" && "text-[#1C5396] capitalize",
            variant === "regulatory" && "text-[#1C5396] leading-[150%] xl:mb-[7px]",
            variant === "default" && "text-black",
            variant === "SOP" && "text-[#1C5396]",
            variant === "Formation-DIFC" && "text-[#1C5396] !font-medium",
            variant === "Formation-ADGM" && "text-[#1C5396]",
            variant === "VatServicesUae" && "text-[#1C5396]",
            variant === "offshore" && "text-[#1C5396]",
            variant === "Financial-Statement-Audit" && "text-[#1C5396]",
            variant === "erm" && "text-[#1C5396]",
            variant === "internal-audit" && "text-[#1C5396] leading-relaxed",
          )}
        >
          {item?.title}
        </div>

        {item?.description && (
          <>
            <div
              className={cn(
                "text-[14px] lg:text-[16px] xl:!text-[16px] 2xl:text-[18px] 3xl:text-[21px] relative z-1   font-normal text-[#4E4E4E] max-md:[&_br]:hidden",
                variant === "ADGM-Foundation" &&
                  "text-[14px] sm:!text-[15px] xl:text-[16px] [&_P]:leading-[1.6]",
                variant === "CorporateServicesUae" && "xl:text-[14px]",
                variant === "erm" && "lg:text-[14px] xl:text-[14px]",
                variant === "internal-audit" &&
                  "leading-relaxed xl:max-w-[92%]",
                variant === "regulatory" && "leading-[150%] xl:max-w-[92%]", 
              )}
            >
              {parse(item?.description)}
            </div>
            {/* <div className="text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] leading-relaxed font-normal text-[#4E4E4E] max-md:[&_br]:hidden">
            {parse(item?.description)}
          </div> */}
          </>
        )}
      </div>
    </div>
  );
}