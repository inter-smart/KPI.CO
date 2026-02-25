"use client";

import Image from "next/image";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import { Check } from "lucide-react";
import type { MainlandBusinessData } from "@/app/mainland-company-formation-uae/page";
import { cn } from "@/lib/utils";

type Variant = "spv" | "hamriya" | "dsoa" | "dafza" | "rakez";

type MainlandBusinessProps = {
  data: MainlandBusinessData;
  variant?: Variant | Variant[];
};

export default function MainlandBusiness({
  data,
  variant,
}: MainlandBusinessProps) {
  const hasVariant = (
    variant: Variant | Variant[] | undefined,
    target: Variant,
  ) => {
    if (Array.isArray(variant)) return variant.includes(target);
    return variant === target;
  };

  return (
    <section className={cn("w-full py-[25px] sm:py-[45px] lg:py-20 2xl:py-24 bg-white overflow-hidden", variant === "dafza" && "max-2xl:!pb-[20px]")}>
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-[28px] lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] max-w-[340px] lg:hidden"
        >
          {parse(data.title)}
        </Heading>
        <div className="flex flex-col-reverse lg:flex-row  max-lg:gap-5 2xl:gap-4">
          {/* Left Content */}
          <div
            className={cn(
              "w-full lg:w-[calc(100%-365px)]",
              hasVariant(variant, "spv") ||  hasVariant(variant, "rakez")
                ? "xl:w-[calc(100%-517px)] 2xl:w-[calc(100%-550px)] 3xl:w-[calc(100%-690px)]"
                : "xl:w-[calc(100%-460px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-660px)]",
            )}
          >
            <div
              className={cn(
                "w-full",
                hasVariant(variant, "spv") ||  hasVariant(variant, "rakez")
                  ? "max-w-[93%] 3xl:max-w-[100%]"
                  : "lg:max-w-[425px] xl:max-w-[575px] 2xl:max-w-[670px] 3xl:max-w-[850px]",
              )}
            >
              <Heading
                as="h2"
                size="h2"
                className="lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:!text-[48px] text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] max-w-[435px] xl:max-w-[625px] 2xl:max-w-[650px] 3xl:max-w-[820px] max-lg:hidden"
              >
                {parse(data.title)}
              </Heading>

              <div
                className={cn(
                  "text-[16px] lg:text-[12px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[25px] [&_p]:mb-[20px] xl:[&_p]:mb-[30px] 2xl:[&_p]:mb-[45px] [&_p:last-child]:mb-0",
                  hasVariant(variant, "hamriya") && "mb-0",
                )}
              >
                {parse(data.description)}
              </div>

              <div
                className={cn(
                  "w-full max-md:mb-[30px]",
                  hasVariant(variant, "hamriya") && "mb-0",
                  hasVariant(variant, "dafza") && "mb-0",
                )}
              >
                {data.highlightsTitle && (
                  <Text
                    size="p2"
                    className="lg:text-[12px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px]"
                  >
                    {data.highlightsTitle}
                  </Text>
                )}
                <div className="flex flex-col">
                  {data.highlights.map((item, index) => (
                    <div key={index} className="flex mb-[15px] last-of-type:mb-0">
                      <div className="flex sm:items-center gap-2 px-[13px] 2xl:px-3 3xl:px-5 py-[8px]  bg-[#E2F5FF] rounded-[12px] md:rounded-[16px]">
                        <div
                          className={cn(
                            "w-[22px] 2xl:w-[17px] 3xl:w-[22px] h-[20px] 2xl:w-[17px] 3xl:h-[22px] rounded-full max-sm:mt-[2px]  flex items-center",
                            hasVariant(variant, "dsoa") &&
                            "max-sm:min-h-[378px]",
                          )}
                        >
                          <Image
                            src="/images/tickMark.svg"
                            width="22"
                            height="22"
                            className="w-full h-full object-contain"
                            alt="tickMark"
                          />
                        </div>
                        <span className="text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] font-normal text-[#1C5396] max-sm:w-[calc(100%-17px)]">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] leading-relaxed">
                {data.footerDescription && parse(data.footerDescription)}
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div
            className={cn(
              "w-full lg:w-[365px]",
              hasVariant(variant, "spv")
                ? "xl:w-[510px] 2xl:w-[550px] 3xl:w-[690px]"
                : "xl:w-[460px] 2xl:w-[520px] 3xl:w-[660px]",
            )}
          > */}
          <div
            className={cn(
              "w-full lg:w-[365px] xl:w-[460px] 2xl:w-[520px] 3xl:w-[660px]",
              variant === "spv" && "xl:w-[517px] 2xl:w-[550px] 3xl:w-[690px]",
            )}
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] lg:min-h-[300px] rounded-[12px] overflow-hidden">
              <Image
                src={data.image.path}
                alt={data.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
