import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { WhyChooseItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeWhyChooseProps = {
  variant?: "default" | "mainland" | "advisory";
  titleClassName?: string | "risk";
  data: {
    title: string;
    description: string;
    items: WhyChooseItem[];
  };
};

export default function CorporateServicesUaeWhyChoose({
  data,
  variant = "default",
  titleClassName,
}: CorporateServicesUaeWhyChooseProps) {
  return (
    <section className="w-full h-auto py-[40px_50px] sm:py-[40px_60px] lg:py-[40px_80px] 2xl:py-[50px_100px] 3xl:py-[65px_125px] block">
      <div className="container">
        <div
          className={cn(
            "w-full h-auto mb-6 sm:mb-8 lg:mb-10 2xl:mb-12.5 3xl:mb-16",
            variant === "mainland" || variant === "advisory" ? "text-left" : "sm:text-center",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className={cn(
              "text-[#1C5396] mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10",
              variant === "default" && "text-center",
              titleClassName === "risk" && "text-left",
            )}
          >
            {data?.title}
          </Heading>
          <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]">
            {parse(data?.description)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] lg:gap-[25px_40px] 2xl:gap-[30px_50px] 3xl:gap-[65px_40px]">
          {data?.items.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <div
                className={cn(
                  "w-full h-full p-6 lg:p-5 2xl:p-6.25 3xl:p-7.5 rounded-[10px] 3xl:rounded-[14px] overflow-hidden block relative z-0 before:content-[''] before:w-[15px] before:h-full before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px] after:3xl:translate-x-[5px] hover:scale-102 duration-300",
                  variant === "mainland" &&
                  "before:bg-[#FFC916] after:bg-[#f9fafb]",

                  variant === "default" &&
                  "before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] after:bg-[#f3f7fd]",

                  titleClassName === "risk" &&
                  "before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] after:bg-[#F9FAFB]",
                )}
              >
                <div
                  className={cn(
                    "text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium mb-2 lg:mb-1.25 2xl:mb-2.5",
                    variant === "mainland" && "text-[#1C5396]",
                    titleClassName === "risk" && "text-[#1C5396]",
                    variant === "default" && "text-black",
                    titleClassName
                  )}
                >
                  {item?.title}
                </div>
                <div className="text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-normal font-normal text-[#4E4E4E]">
                  {parse(item?.description)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
