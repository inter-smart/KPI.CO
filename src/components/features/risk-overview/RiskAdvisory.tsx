"use client";

import { Heading, Text } from "@/components/utils/typography";
import { RiskAdvisoryDta } from "@/app/risk-overview/page";
import parse from "html-react-parser";
export type RiskAdvisoryProps = {
  data: RiskAdvisoryDta;
};

export default function RiskAdvisory({ data }: RiskAdvisoryProps) {
  const formatNo = (num: number) => String(num).padStart(2, "0");
  const advisoryItems = (data.advisoryItems ?? [])
    .filter((item) => item && item.description?.trim())
    .filter(
      (item, index, items) =>
        items.findIndex((other) => other.id === item.id) === index,
    );

  return (
    <section className="w-full bg-white py-[40px_60px] 2xl:py-[80px_100px] 3xl:py-[100px_150px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] xl:gap-[60px] 2xl:gap-[80px] 3xl:gap-[100px]">
          <div className="w-full lg:w-[49%] 2xl:w-[45%]">
            <Heading
              as="h3"
              size="h3"
              className="lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] font-semibold text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px]"
            >
              {data.title}
            </Heading>
            <div className="text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px]">
              {parse(
                data?.description?.replace(
                  /<\/p>\s*$/,
                  ' <span class="text-[#5280CA]">→</span></p>'
                ) || ""
              )}
            </div>

            <div className="flex flex-row gap-3">
              <div className="text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] font-normal text-[#4E4E4E] mb-[20px]">
                {data.highlightsText}

              </div>
            </div>
          </div>

          <div className="w-full lg:w-[51%] 2xl:w-[55%]">
            <div className="h-full flex items-center justify-center bg-[rgba(143,216,254,10%)] rounded-[20px] p-[30px_15px] md:p-[30px_20px] xl:p-[35px_20px] 2xl:p-[40px_20px] 3xl:p-[60px_30px]">
              <div className="overflow-hidden">
                <div className="flex flex-wrap m-[-11px_-11px_-11px_-21px] md:m-[-11px_-11px_-11px_-31px] xl:m-[-11px_-11px_-21px_-41px] 3xl:m-[-11px_-11px_-31px_-41px]">
                  {advisoryItems.map((item, index) => (
                    <div
                      key={`item-${item.id ?? index}`}
                      className="w-1/2 border-b border-r border-[#DEDEDE] p-[10px_10px_10px_20px] md:p-[10px_10px_15px_30px] xl:p-[10px_20px_20px_40px] 3xl:p-[10px_20px_30px_40px]"
                    >
                      <div className="w-full text-[16px] md:text-[18px] xl:text-[23px] 2xl:text-[28px] 3xl:text-[34px] font-bold text-[#5280CA] mb-[10px]">
                        {`${formatNo(item.slNo ?? index + 1)}.`}
                      </div>
                      <div className="text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[21px] text-[#4E4E4E] mb-[20px]">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
