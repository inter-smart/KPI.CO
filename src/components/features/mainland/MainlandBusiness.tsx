"use client";

import Image from "next/image";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import { Check } from "lucide-react";
import type { MainlandBusinessData } from "@/app/mainland-company-formation-uae/page";
import { cn } from "@/lib/utils";

type Variant =
  | "Mainland"
  | "AuditServicesUae"
  | "CorporateTaxUae"
  | "Formation-ADGM"
  | "RAK-Offshore"
  | "Offshore"
  | "SAIFZ"
  | "spv"
  | "hamriya"
  | "ADGM-SPV-Formation"
  | "dsoa"
  | "dafza"
  | "rakez"
  | "ifza"
  | "dwtc"
  | "Formation-JAFZA"
  | "JAFZA-Freezone"
  | "e-invoicing"
  | "company-freezone"
  | "ADGM-Foundations";

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
    <section
      className={cn(
        "w-full py-[25px] sm:py-[45px] lg:py-20 2xl:py-24 bg-white overflow-hidden",
        variant === "dafza" && "max-2xl:!pb-[20px]",
        variant === "dwtc" && "xl:!pb-[70px]",
        variant === "Formation-ADGM" && "pb-[10px] xl:pb-[70px]",
        variant === "ADGM-Foundations" && "max-sm:pb-[10px]  ",
        variant === "CorporateTaxUae" && "bg-[#F9FAFB] xl:py-[70px_50px]",
        variant === "Offshore" && "xl:py-[70px]",
        variant === "RAK-Offshore" && "xl:py-[90px_70px]",
        variant === "rakez" && "xl:py-[90px_30px]",
        variant === "e-invoicing" && "bg-linear-to-t from-[#f5fbfe] via-white to-white ",
      )}
    >
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-[28px] lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] capitalize !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] max-w-[340px] lg:hidden"
        >
          {parse(data.title)}
        </Heading>

        <div
          className={cn(
            "text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px] hidden [&_p]:leading-relaxed [&_p]:mb-[20px] xl:[&_p]:mb-[30px] 2xl:[&_p]:mb-[45px] [&_p:last-child]:mb-0 [&_br]:hidden",
            hasVariant(variant, "CorporateTaxUae") && "max-sm:!block", 
          )}
        >
          {parse(data.description)}
        </div>

        <div className="flex flex-col-reverse lg:flex-row  max-lg:gap-6">
          {/* Left Content */}
          <div
            className={cn(
              "w-full lg:w-[calc(100%-365px)] md:pr-[45px]",
              hasVariant(variant, "spv") ||
                hasVariant(variant, "dwtc") ||
                hasVariant(variant, "rakez") ||
                hasVariant(variant, "ifza")
                ? "xl:w-[calc(100%-517px)] 2xl:w-[calc(100%-550px)] 3xl:w-[calc(100%-690px)]"
                : "xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-660px)]",
              hasVariant(variant, "ADGM-Foundations") &&
              "xl:w-[calc(100%-520px)] xl:pr-[40px]",
              hasVariant(variant, "ifza") &&
              "xl:w-[calc(100%-520px)] xl:pr-[40px]",
              hasVariant(variant, "Mainland") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "dsoa") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "SAIFZ") &&
              "xl:w-[calc(100%-520px)] xl:!pr-[20px]",
              hasVariant(variant, "dafza") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "AuditServicesUae") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "JAFZA-Freezone") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "Formation-JAFZA") &&
              "xl:w-[calc(100%-520px)] xl:pr-[50px]",
              hasVariant(variant, "company-freezone") &&
              "xl:w-[calc(100%-520px)] xl:!pr-[45px]",
              hasVariant(variant, "rakez") &&
              "xl:w-[calc(100%-520px)] xl:!pr-[48px]",
              hasVariant(variant, "ADGM-SPV-Formation") &&
              "xl:w-[calc(100%-520px)] xl:!pr-[42px]",
              hasVariant(variant, "dwtc") &&
              "xl:pr-[40px]",
              "xl:w-[calc(100%-520px)] xl:pr-[41px]",
            )}
          >
            <div
              className={cn(
                "w-full",
                hasVariant(variant, "ADGM-Foundations") && "!max-w-full",
                hasVariant(variant, "Mainland") && "!max-w-full",
                hasVariant(variant, "SAIFZ") && "!max-w-full",
                hasVariant(variant, "dafza") && "!max-w-full",
                hasVariant(variant, "spv") || hasVariant(variant, "rakez") || hasVariant(variant, "ADGM-SPV-Formation")
                  ? "max-w-[93%] 3xl:max-w-[100%]"
                  : "lg:max-w-[100%] xl:max-w-full 2xl:max-w-[670px] 3xl:max-w-[850px]",
                hasVariant(variant, "ADGM-Foundations") && "!max-w-full",
                hasVariant(variant, "ifza") && "!max-w-full",
                hasVariant(variant, "dsoa") && "!max-w-full",
                hasVariant(variant, "SAIFZ") && "!max-w-full",
                hasVariant(variant, "dwtc") && "!max-w-full",
                hasVariant(variant, "AuditServicesUae") && "!max-w-full",
              )}
            >
              <Heading
                as="h2"
                size="h2"
                className={cn(
                  "lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[48px]  text-[#1C5396] capitalize !mb-[20px] xl:!mb-[20px] 2xl:!mb-[30px] 3xl:!mb-[35px] max-lg:hidden",
                  variant === "ADGM-Foundations" && "xl:!mb-[30px]",
                  variant === "SAIFZ" && "xl:max-w-[590px]",
                  variant === "dafza" && "xl:max-w-full",
                  variant === "dwtc" && "xl:max-w-full",
                  variant === "dsoa" && "xl:max-w-[80%]",
                  variant === "company-freezone" && "xl:max-w-[90%]",
                )}
              >
                {parse(data.title)}
              </Heading>
              <div
                className={cn(
                  "text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px] [&_p]:leading-relaxed [&_p]:mb-[20px] xl:[&_p]:mb-[30px] 2xl:[&_p]:mb-[45px] [&_p:last-child]:mb-0 [&_br]:hidden",
                  hasVariant(variant, "hamriya") && "mb-0",
                  hasVariant(variant, "CorporateTaxUae") && "max-sm:hidden", 
                  hasVariant(variant, "AuditServicesUae") &&
                  "[&_b]:text-[16px] sm:[&_b]:text-[18px] lg:[&_b]:text-[20px] xl:[&_b]:text-[24px] [&_b]:font-semibold",
                )}
              >
                {parse(data.description)}
              </div>
              {(data.highlightsTitle || data.highlights.length > 0) && (
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
                      className={cn(
                        "max-xl:[&_p]:!text-[16px] text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[15px]",
                        variant === "ADGM-Foundations" &&
                        "mb-[20px] sm:mb-[25px]",
                      )}
                    >
                      {data.highlightsTitle}
                    </Text>
                  )}
                  <div
                    className={cn(
                      "flex flex-col mb-[25px]",
                      variant === "Mainland" && "mb-[25px]",
                      variant === "dafza" && "mb-0",
                      variant === "Formation-ADGM" && "mb-0",
                    )}
                  >
                    {data.highlights.map((item, index) => (
                      <div
                        key={index}
                        className="flex mb-[15px] last-of-type:mb-0"
                      >
                        <div className="max-sm:w-full flex sm:items-center gap-2 px-[15px] py-[5px]  bg-[#E2F5FF] rounded-[12px]">
                          <div
                            className={cn(
                              "w-[16px] xl:w-[16px] 3xl:w-[22px] h-[20px] xl:h-[16px] 3xl:h-[22px] rounded-full max-sm:mt-[2px]  flex items-center",
                              hasVariant(variant, "dsoa") &&
                              "max-sm:min-h-[378px]",
                              hasVariant(variant, "ADGM-Foundations") &&
                              "xl:w-[16px]",
                              hasVariant(variant, "Mainland") && "xl:w-[16px]",
                              hasVariant(variant, "ifza") && "xl:w-[16px]",
                              hasVariant(variant, "SAIFZ") && "xl:w-[16px]",
                              hasVariant(variant, "dafza") && "xl:w-[16px]",
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
                          <span className="text-[14px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] leading-normal font-normal text-[#1C5396] w-[calc(100%-16px)] 3xl:w-[calc(100%-22px)]">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="text-[16px] lg:text-[12px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] leading-relaxed">
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
              "w-full lg:w-[365px] xl:w-[500px] 2xl:w-[520px] 3xl:w-[660px]",
              variant === "spv" && "xl:w-[517px] 2xl:w-[550px] 3xl:w-[690px]",
              variant === "ADGM-SPV-Formation" && "xl:w-[520px]",
              variant === "ADGM-Foundations" && "xl:w-[520px]",
              variant === "Mainland" && "xl:w-[520px]",
              variant === "dsoa" && "xl:w-[520px]",
              variant === "SAIFZ" && "xl:w-[520px]",
              variant === "dafza" && "xl:w-[520px]",
              variant === "ifza" && "xl:w-[520px]",
              variant === "AuditServicesUae" && "xl:w-[520px]",
              variant === "Formation-JAFZA" && "xl:w-[520px]",
              variant === "company-freezone" && "xl:w-[520px]",
              variant === "JAFZA-Freezone" && "xl:w-[520px]",
              variant === "rakez" && "xl:w-[520px]",
            )}
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[380px] xs:min-h-[420px] lg:min-h-[300px] rounded-[12px] overflow-hidden">
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
