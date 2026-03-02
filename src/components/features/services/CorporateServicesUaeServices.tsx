import { cn } from "@/lib/utils";
import Image from "next/image";
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
  variant?: "default" | "saifz" | "advisory" | "dafza" | "rakez" | "regulatory" | "dsoa";
};

export default function CorporateServicesUaeServices({
  data,
  variant = "default",
}: CorporateServicesUaeServicesProps) {
  return (
    <section className="w-full h-auto py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB] block">
      <div className="container">
        <div
          className={cn(
            "sm:text-center w-full h-auto mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5",
            variant === "regulatory" && "sm:text-left",
            variant === "saifz" && "sm:text-left",
            variant === "dafza" && "sm:text-left",
            variant === "rakez" && "sm:text-left",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-5 sm:mb-6.25 xl:mb-[30px] 2xl:mb-7.5 3xl:mb-10"
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] xl:mb-[35px] leading-normal font-normal text-[#4E4E4E]">
              {parse(data?.description)}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5.5 lg:gap-6.25 2xl:gap-7.5 3xl:gap-10">
          {data.items.map((item) => (
            <div key={item?.id} className="w-full h-auto block">
              <div
                className={cn(
                  "[--icon-size:45px] lg:[--icon-size:40px] xl:[--icon-size:44px] 3xl:[--icon-size:60px] w-full h-full max-sm:min-h-[200px] p-6.25 lg:p-5 xl:p-[24px] 3xl:p-7.5 max-sm:pr-[10px] bg-white rounded-[10px] sm:rounded-[8px] 2xl:rounded-[14px] border-1 border-[#E2E2E2] flex transition-all duration-500 hover:border-[#1C5396]",
                  variant === "dafza" && "max-sm:min-h-[150px]",
                  variant === "regulatory" && "min-h-[180px] sm:min-h-[130px] xl:min-h-[160px] 2xl:min-h-[190px] 3xl:min-h-[240px]",
                )}
              >
                <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-[12px] lg:p-2 2xl:p-2.25 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain max-w-[20px] xl:max-w-[26px]"
                  />
                </div>
                <div className="w-[calc(100%-var(--icon-size))] pl-[15px] lg:pl-3 2xl:pl-3.75 3xl:pl-5">
                  <div className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-[#1C5396] mb-1.5 lg:mb-1.75 3xl:mb-3">
                    {item?.title}
                  </div>
                  {item?.description && (
                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E] max-w-full xl:max-w-[400px] 2xl:max-w-full">
                      {parse(item?.description)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {data?.footer_description && (
          <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mt-[25px] sm:mt-[30px] 2xl:mt-[40px]">
            {data?.footer_description}
          </div>
        )}
      </div>
    </section>
  );
}
