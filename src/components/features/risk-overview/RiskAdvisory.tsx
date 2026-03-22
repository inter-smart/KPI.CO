"use client";

import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "difc"
  | "center"
  | "AuditServicesUae"
  | "CorporateTaxUae"
  | "CorporateTaxUae"
  | "difc-regulated"
  | "adgm-regulated"
  | "Financial-Statement-Audit"
  | "regulatory";

export type RiskAdvisoryProps = {
  variant?: Variant | Variant[];
  data: {
    title: string;
    description: string;
    highlightsText: string;
    advisoryItems: {
      id: number;
      slNo: number;
      description: string;
    }[];
    structure_list?: MeydanStructureItem[];
  };
};

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

const hasVariant = (
  variant: Variant | Variant[] | undefined,
  target: Variant,
) => {
  if (Array.isArray(variant)) {
    return variant.includes(target);
  }
  return variant === target;
};

export default function RiskAdvisory({ data, variant }: RiskAdvisoryProps) {
  const formatNo = (num: number) => String(num).padStart(2, "0");
  const advisoryItems = (data.advisoryItems ?? [])
    .filter((item) => item && item.description?.trim())
    .filter(
      (item, index, items) =>
        items.findIndex((other) => other.id === item.id) === index,
    );

  return (
    <section
      className={cn(
        "w-full bg-white py-[40px_30px] md:py-[40px_60px] xl:py-[70px] 2xl:py-[80px_100px] 3xl:py-[100px_150px]",
        variant === "regulatory" && "xl:!py-[95px_60px]",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] xl:gap-[20px] 2xl:gap-[80px] 3xl:gap-[80px]",
            hasVariant(variant, "center") && "items-center",
            hasVariant(variant, "difc-regulated") && "items-center",
          )}
        >
          <div
            className={cn(
              "w-full lg:w-[49%] xl:w-[calc(100%-590px)] xl:pr-[50px]",
              variant === "regulatory" && "xl:pr-0",
            )}
          >
            <Heading
              as="h3"
              size="h3"
              className={cn(
                "text-[28px] lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] font-semibold text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px]",
                variant === "regulatory" && "max-w-[98%]",
              )}
            >
              {parse(data.title)}
            </Heading>
            <div
              className={cn(
                "text-[16px] lg:text-[12px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-relaxed text-[#4E4E4E] mb-[20px] max-md:[&_br]:hidden [&_p]:mb-3 xl:[&_p]:mb-5 max-sm:[&_p]:last-of-type:hidden",
                variant === "CorporateTaxUae" &&
                  "[&_span]:font-bold [&_span]:text-[#5280CA]",
                variant === "CorporateTaxUae" &&
                  "[&_span]:font-bold [&_span]:text-[#5280CA]",
                variant === "regulatory" &&
                  "xl:pr-[70px] [&_p]:mb-3 xl:[&_p]:mb-[30px] max-sm:[&_p]:last-of-type:!block",
                variant === "AuditServicesUae" &&
                  "xl:pr-[70px] [&_p]:mb-3 xl:[&_p]:mb-[30px] [&_p]:last-of-type:!block",
                variant === "Financial-Statement-Audit" &&
                  "xl:pr-[70px] [&_p]:mb-3 xl:[&_p]:mb-[30px] max-sm:[&_p]:last-of-type:!block",
              )}
            >
              {parse(
                data?.description?.replace(
                  /<\/p>\s*$/,
                  ' <span class="!text-[#5280CA] text-[13px] font-bold top-[-3px] xl:top-[-4px] relative z-0">→</span></p>',
                ) || "",
              )}
            </div>
            <div
              className={cn(
                "flex flex-row gap-3 max-sm:hidden",
                variant === "AuditServicesUae" && "!block",
              )}
            >
              <div
                className={cn(
                  "text-[16px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-normal text-[#4E4E4E] mb-[20px]",
                  variant === "difc-regulated" &&
                    "max-sm:hidden md:max-w-[90%]",
                  variant === "adgm-regulated" && "max-sm:hidden",
                  variant === "regulatory" && "md:max-w-[82%]",
                )}
              >
                {parse(data.highlightsText)}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[51%] xl:w-[615px]">
            <div className="w-full">
              <div
                className={cn(
                  "h-full flex items-center justify-center bg-[rgb(143,216,254,.1)] rounded-[15px] 2xl:rounded-[20px] p-[30px_15px] md:p-[30px_20px] xl:p-[37px_20px] 2xl:p-[40px_20px] 3xl:p-[60px_30px]",
                  // variant === "regulatory" && "bg-[rgba(143,216,254,10%)]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap m-[-11px_-11px_-11px_-21px] md:m-[-11px_-11px_-11px_-31px] xl:m-[-11px_-11px_-21px_-41px] 3xl:m-[-11px_-11px_-31px_-41px]">
                    {advisoryItems.map((item, index) => (
                      <div
                        key={`item-${item.id ?? index}`}
                        className={cn(
                          "p-[10px_10px_10px_20px] md:p-[10px_10px_15px_30px] xl:p-[20px_25px_25px_40px] 3xl:p-[10px_20px_30px_40px]",
                          hasVariant(variant, "difc") ||
                            hasVariant(variant, "regulatory") ||
                            hasVariant(variant, "adgm-regulated")
                            ? cn(
                                "border-[#DEDEDE]",
                                index === advisoryItems.length - 1
                                  ? "w-full border-b-0 border-r-0" // last item full
                                  : cn(
                                      "w-1/2 border-b",
                                      index % 2 === 0
                                        ? "border-r"
                                        : "border-r-0",
                                    ),
                              )
                            : "w-1/2 border-b border-r border-[#DEDEDE]",
                          hasVariant(variant, "difc-regulated") &&
                            "last:w-full xl:p-[20px_25px_25px_39px]",
                          (hasVariant(variant, "adgm-regulated") &&
                            "") ||
                            (index === 1 && "xl:p-[20px_25px_25px_15px]"),
                        )}
                      >
                        <div
                          className={cn(
                            "w-full text-[16px] md:text-[18px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[34px] font-bold mb-[10px]",
                            hasVariant(variant, "difc")
                              ? "text-[#5280CA]"
                              : "text-[#5280CA]",
                            hasVariant(variant, "adgm-regulated")
                              ? "text-[#5280CA]"
                              : "text-[#5280CA]",
                            hasVariant(variant, "difc-regulated")
                              ? "text-[#5280CA]"
                              : "text-[#5280CA]",
                            hasVariant(variant, "regulatory")
                              ? "text-[#5280CA]"
                              : "text-[#5280CA]",
                          )}
                        >
                          {`${formatNo(item.slNo ?? index + 1)}.`}
                        </div>
                        <div className="text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[21px] font-normal leading-relaxed text-[#4E4E4E] max-md:[&_br]:hidden">
                          {parse(item.description)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div
                className={cn(
                  "hidden",
                  variant === "difc-regulated" &&
                    "text-[16px] font-normal text-[#4E4E4E] mt-[20px] max-sm:!block sm:hidden",
                  variant === "adgm-regulated" &&
                    "text-[16px] font-normal text-[#4E4E4E] mt-[20px] max-sm:!block sm:hidden",
                  variant === "CorporateTaxUae" &&
                    "text-[16px] font-normal text-[#4E4E4E] mt-[20px] max-sm:!block sm:hidden",
                  variant === "regulatory" &&
                    "text-[16px] font-normal text-[#4E4E4E] mt-[20px] max-sm:!block sm:hidden ",
                  variant === "Financial-Statement-Audit" &&
                    "text-[16px] font-normal text-[#4E4E4E] mt-[20px] max-sm:!block sm:hidden ",
                )}
              >
                {parse(data.highlightsText)}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "text-[16px] lg:text-[12px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-relaxed text-[#4E4E4E] mb-[20px] max-md:[&_br]:hidden [&_p]:mb-3 xl:[&_p]:mb-5 max-sm:[&_p]:first-of-type:hidden sm:hidden",
              variant === "CorporateTaxUae" &&
                "[&_span]:font-bold [&_span]:text-[#5280CA]",
              variant === "CorporateTaxUae" &&
                "[&_span]:font-bold [&_span]:text-[#5280CA]",
              variant === "regulatory" &&
                "xl:pr-[70px] [&_p]:mb-3 xl:[&_p]:mb-[30px] hidden",
              variant === "AuditServicesUae" &&
                "xl:pr-[70px] [&_p]:mb-3 xl:[&_p]:mb-[30px] hidden",
            )}
          >
            {parse(
              data?.description?.replace(
                /<\/p>\s*$/,
                ' <span class="!text-[#5280CA] text-[13px] font-bold top-[-3px] xl:top-[-4px] relative z-0"></span></p>',
              ) || "",
            )}
          </div>
        </div>
        {data?.structure_list && (
          <div className="w-full h-auto xl:space-y-[15px] 2xl:space-y-[25px] mt-[30px]">
            {data.structure_list.map((item) => (
              <div key={item.id} className="w-full h-auto">
                <div className="w-full h-full p-[20px_8px_22px_24px] sm:p-[25px] xl:p-[30px] 2xl:p-[35px_40px] 3xl:p-[40px_50px] rounded-[15px] sm:rounded-[10px] 3xl:rounded-[14px] overflow-hidden block relative z-0 before:content-[''] before:w-[15px] before:h-full before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:bg-[#F8F8F8] after:rounded-[13px] sm:after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px]">
                  <div
                    className={cn(
                      "leading-normal font-medium text-[#003268] mb-[10px] text-[24px] sm:text-[18px] xl:text-[24px] 2xl:text-[25px] 3xl:text-[32px]",
                      variant === "AuditServicesUae" && " text-[#1C5396]",
                    )}
                  >
                    {item.title}
                  </div>
                  <div className="text-[14px] xl:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#364153] [&_p]:mb-[20px] xl:[&_p]:mb-[20px] 3xl:[&_p]:mb-[40px]">
                    {/* {item.description} */}
                    {parse(item?.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
