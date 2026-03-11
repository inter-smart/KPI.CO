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
    <section className="w-full h-auto py-[40px_60px] xl:py-[60px_70px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB] block">
      <div className="container">
        <div
          className={cn(
            "sm:text-center w-full h-auto mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5",
            variant === "regulatory" && "sm:text-left",
            variant === "saifz" && "sm:text-left",
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
              "text-[#1C5396] mb-5 sm:mb-6.25 xl:mb-[30px] 2xl:mb-7.5 3xl:mb-10",
              variant === "CorporateServicesUae" && "xl:mb-[30px]",
              variant === "dafza" && "xl:mb-[30px]",
            )}
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <div className="text-[16px] xl:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] xl:mb-[35px] leading-normal font-normal text-[#4E4E4E]">
              {parse(data?.description)}
            </div>
          )}
        </div>
        <div
          className={cn(
            "xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[22px] lg:gap-6.25 xl:gap-[30px] 3xl:gap-10 xl:max-w-[1124px]",
            variant === "saifz" && "!max-w-full xl:gap-[28px]",
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
                  "[--icon-size:45px] lg:[--icon-size:40px] xl:[--icon-size:45px] 3xl:[--icon-size:60px] w-full h-full max-sm:min-h-[200px] p-6.25 lg:p-5 xl:p-[22px_24px_19px] bg-white rounded-[10px]  border-[1.6px] border-[#E2E2E2] flex transition-all duration-500",
                  variant === "dafza" && "max-sm:min-h-[150px]",
                  variant === "ifza" && "max-sm:min-h-[160px]",
                  variant === "rakez" && "min-h-[130px]",
                  variant === "saifz" && "min-h-[150px]",
                  variant === "regulatory" &&
                  "min-h-[180px] sm:min-h-[130px] xl:min-h-[160px] 2xl:min-h-[190px] 3xl:min-h-[240px]",
                  variant === "dsoa" && "max-sm:min-h-[130px] border-[#E2E2E2]",
                  variant === "saifz" && "max-sm:min-h-[140px] border-[#E2E2E2]",
                  variant === "CorporateTaxUae" && "max-sm:min-h-[140px] border-[#E2E2E2]",
                  variant === "difc-formation" && "max-sm:min-h-[140px] border-[#E2E2E2]",
                  variant === "SOP" && "max-sm:min-h-[140px]",
                )}
              >
                <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-[12px] lg:p-2 xl:p-[10px] 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain max-w-[20px] xl:max-w-[26px]"
                  />
                </div>
                <div className="w-[calc(100%-var(--icon-size))] pl-[15px] lg:pl-3 xl:pl-[15px] 3xl:pl-5">
                  <div className={cn("text-[18px] lg:text-[20px] xl:text-[22px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-[#1C5396] mb-1.5 lg:mb-[5px]",
                    variant === "technology" && "mb-0",
                    variant === "CorporateTaxUae" && "!mb-0",
                    variant === "regulatory" && "capitalize"
                  )}>
                    {item?.title}
                  </div>
                  {item?.description && (
                    <p className={cn("text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E] max-w-full xl:max-w-[450px] 2xl:max-w-full",
                      variant === "regulatory" && "leading-relaxed xl:max-w-[92%]" ,
                      variant === "saifz" && "xl:max-w-full" ,
                      variant === "rakez" && "xl:max-w-full"
                    )}>
                      {parse(item?.description)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {data?.footer_description && (
          <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mt-[25px] sm:mt-[30px] xl:mt-[40px]">
            {data?.footer_description}
          </div>
        )}
      </div>
    </section>
  );
}
