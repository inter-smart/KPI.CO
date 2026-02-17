"use client";

import Image from "next/image";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import type { WhyRiskData } from "@/app/risk-overview/page";

type WhyRiskProps = {
  data: WhyRiskData;
};

export default function WhyRiskManagement({ data }: WhyRiskProps) {
  return (
    <section className="w-full py-[45px_55px] xl:py-[100px_85px] 3xl:py-[125px_50px] bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row max-sm:flex-col-reverse gap-[25px] 2xl:gap-[30px] mb-[20px] xl:mb-[25px] 3xl:mb-[35px]">
          {/* Left Content */}
          <div className="w-full lg:w-[calc(100%-365px)] xl:w-[calc(100%-510px)] 3xl:w-[calc(100%-680px)]">
            <div className="w-full">
              <Heading
                as="h3"
                size="h3"
                className="lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] font-semibold text-[#1C5396] capitalize max-w-[90%] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] hidden sm:block max-md:[&_br]:hidden"
              >
                {parse(data.title)}
              </Heading>

              <div className="w-full">
                <Text
                  size="p2"
                  className="text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px]"
                >
                  {data.highlightsTitle}
                </Text>

                <div className="flex flex-col">
                  {data.highlights?.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-full flex gap-4 2xl:gap-6 py-3 lg:py-4 2xl:py-5 3xl:py-6 border-0 border-b border-[#DEDEDE]">
                        <div className="w-[25px] h-[25px] 2xl:w-[34px] 2xl:h-[34px] 3xl:w-[42px] 3xl:h-[42px] rounded-full flex items-center">
                          <Image
                            src="/images/arrowMark.svg"
                            width="22"
                            height="22"
                            className="w-full h-full object-cover"
                            alt="arrow mark"
                          />
                        </div>
                        <span className="text-[16px] lg:text-[14px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] font-medium text-black">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[365px] xl:w-[510px] 3xl:w-[680px]">
            <Heading
              as="h3"
              size="h3"
              className="font-semibold text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] sm:hidden"
            >
              {data.title}
            </Heading>
            <div className="relative w-full lg:h-full min-h-[300px] rounded-[12px] 3xl:rounded-[16px] overflow-hidden">
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
        <div className="text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] leading-relaxed">
          {parse(data.footerDescription)}
        </div>
      </div>
    </section>
  );
}
