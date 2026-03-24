import Image from "next/image";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { ServiceItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeServicesProps = {
  data: {
    title: string;
    description?: string;
    items: ServiceItem[];
    footer_description?: string;
  };
  variant?:
    | "default"
    | "saifz"
    | "AuditServicesUae"
    | "CorporateTaxUae"
    | "SOP"
    | "advisory"
    | "dafza"
    | "rakez"
    | "dwtc"
    | "ifza"
    | "regulatory"
    | "dsoa"
    | "technology"
    | "difc-formation"
    | "CorporateServicesUae";
};

export default function CorporateServicesUaeServices({
  data,
  variant = "default",
}: CorporateServicesUaeServicesProps) {
  return (
    <section
      className={cn(
        "w-full h-auto py-[40px_60px] xl:py-[70px_48px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB] block",
        variant === "dwtc" && "xl:py-[48px_66px]",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "sm:text-center w-full h-auto mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5",
            variant === "regulatory" && "sm:text-left",
            variant === "saifz" && "sm:text-left",
            variant === "AuditServicesUae" &&
              "sm:text-left lg:mb-[34px] xl:mb-[40.82px]",
            variant === "dsoa" && "sm:text-left",
            variant === "CorporateTaxUae" && "sm:text-left",
            variant === "difc-formation" && "sm:text-left",
            variant === "SOP" && "sm:text-left",
            variant === "ifza" && "sm:text-left",
            variant === "dafza" && "sm:text-left",
            variant === "dwtc" && "sm:text-left",
            variant === "rakez" && "sm:text-left",
            variant === "CorporateServicesUae" && "xl:mb-[40px]",
            variant === "dafza" && "sm:text-left xl:mb-[35px]",
            variant === "technology" && "sm:text-left",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className={cn(
              "text-[#1C5396] mb-5 sm:mb-6.25 xl:mb-[25px] 2xl:mb-7.5 3xl:mb-10",
              variant === "CorporateServicesUae" && "xl:mb-[25px]",
              variant === "dafza" && "xl:mb-[30px]",
              variant === "SOP" && "xl:!mb-[20px]",
            )}
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <div className="text-[18px] xl:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] xl:mb-[25px] leading-normal font-normal text-[#4E4E4E]">
              {parse(data?.description)}
            </div>
          )}
        </div>
        <div
          className={cn(
            "xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[22px] lg:gap-6.25 xl:gap-[29px] 3xl:gap-10 xl:max-w-[1124px]",
            variant === "saifz" && "!max-w-full xl:gap-[28px]",
            variant === "AuditServicesUae" && "!max-w-full xl:gap-[15px]",
            variant === "dsoa" && "!max-w-full xl:gap-[28px]",
            variant === "CorporateTaxUae" && "!max-w-full",
            variant === "difc-formation" && "!max-w-full",
            variant === "SOP" && "!max-w-full xl:gap-[40px]",
            variant === "dafza" && "!max-w-full",
            variant === "dwtc" && "xl:max-w-full",
            variant === "ifza" && "xl:max-w-full",
            variant === "technology" && "xl:max-w-full",
            variant === "rakez" && "xl:max-w-full",
            variant === "regulatory" && "!max-w-full xl:gap-[40px]",
          )}
        >
          {data.items.map((item) => (
            <div key={item?.id} className="w-full h-auto block">
              <div
                className={cn(
                  "[--icon-size:45px] lg:[--icon-size:40px] xl:[--icon-size:44px] 3xl:[--icon-size:60px] w-full h-full p-[20px] lg:p-5 xl:p-[22px_10px_19px_24px] bg-white rounded-[10px]  border-[1.6px] border-[#E2E2E2] flex transition-all duration-500",
                  variant === "dafza" && "max-sm:min-h-[150px]",
                  variant === "ifza" && "max-sm:min-h-[160px] xl:min-h-[153px]",
                  variant === "rakez" && "min-h-[130px]",
                  variant === "saifz" && "min-h-[150px]",
                  variant === "AuditServicesUae" &&
                    "min-h-[150px] xl:py-[24px_26px]",
                  variant === "regulatory" &&
                    "min-h-[180px] sm:min-h-[130px] xl:min-h-[160px] 2xl:min-h-[190px] 3xl:min-h-[240px]",
                  variant === "dsoa" && "max-sm:min-h-[130px] border-[#E2E2E2]",
                  variant === "saifz" &&
                    "max-sm:min-h-[140px] border-[#E2E2E2]",
                  variant === "CorporateTaxUae" &&
                    "min-h-[130px] xl:min-h-[130px] border-[#E2E2E2]",
                  variant === "difc-formation" &&
                    "max-sm:min-h-[140px] border-[#E2E2E2]",
                  variant === "SOP" && "min-h-[180px]",
                  variant === "dwtc" && "max-sm:min-h-[162px]",
                  variant === "technology" && "max-sm:min-h-[129px] xl:min-h-[150px]",
                )}
              >
                <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-[12px] lg:p-2 xl:p-[10px] 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain max-w-[20px] xl:max-w-[20px] xl:max-h-[20px]"
                  />
                </div>
                <div className="w-[calc(100%-var(--icon-size))] pl-[15px] lg:pl-3 xl:pl-[15px] 3xl:pl-5">
                  <div
                    className={cn(
                      "text-[18px] lg:text-[20px] xl:text-[22px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] leading-[150%] font-medium text-[#1C5396] mb-1.5 lg:mb-[5px]",
                      variant === "technology" && "mb-0",
                      variant === "CorporateTaxUae" &&
                        "!mb-0 xl:max-w-[400px] tracking-[-0.5px]",
                      variant === "regulatory" && "capitalize",
                    )}
                  >
                    {parse(item?.title)}
                  </div>
                  {item?.description && (
                    <p
                      className={cn(
                        "text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[150%] font-normal text-[#4E4E4E] max-w-full xl:max-w-[450px] 2xl:max-w-full",
                        variant === "regulatory" &&
                          "leading-relaxed xl:max-w-[92%]",
                        variant === "saifz" && "xl:max-w-full",
                        variant === "rakez" && "xl:max-w-full",
                        variant === "SOP" && "xl:max-w-full",
                        variant === "AuditServicesUae" && "xl:max-w-full",
                      )}
                    >
                      {parse(item?.description)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {data?.footer_description && (
          <div
            className={cn(
              "text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mt-[25px] sm:mt-[30px] xl:mt-[40px]",
              variant === "CorporateTaxUae" && "max-sm:text-[18px]",
            )}
          >
            {data?.footer_description}
          </div>
        )}
      </div>
    </section>
  );
}
