"use client";

import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading, Text } from "@/components/utils/typography";
import { Check } from "lucide-react";
import type { MainlandBusinessData } from "@/app/mainland-company-formation-uae/page";

type MainlandBusinessProps = {
  data: MainlandBusinessData;
};

export default function MainlandBusiness({ data }: MainlandBusinessProps) {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row  ">
          {/* Left Content */}
          <div className="w-full lg:w-[calc(100%-365px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-660px)]">
            <div className="w-full lg:max-w-[425px] xl:max-w-[565px] 2xl:max-w-[670px] 3xl:max-w-[850px]">
              <Heading
                as="h2"
                size="h2"
                className="lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px] max-[435px] xl:max-w-[520px] 2xl:max-w-[650px] 3xl:max-w-[820px]"
              >
                {data.title}
              </Heading>

              <div className="text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[25px]">
                {parse(data.description)}
              </div>


              <div className="w-full mb-[30px]">
                <Text size="p2" className="lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px]">
                  {data.highlightsTitle}
                </Text>

                <div className="flex flex-col gap-3.5">
                  {data.highlights.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex items-center gap-2 px-2.5 2xl:px-3 3xl:px-5 py-2  bg-[#E2F5FF] rounded-[16px]">
                        <div className="w-[14px] 2xl:w-[17px] h-[14px] 3xl:w-[22px] 2xl:w-[17px] 3xl:h-[22px] rounded-full  flex items-center  ">
                          <Image src="/images/tickMark.svg" width="22" height="22" className="w-full h-full object-cover" alt="tickMark" />
                        </div>
                        <span className="text-[11px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[20px] font-normal text-[#1C5396]">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] leading-relaxed">
                {parse(data.footerDescription)}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[365px] xl:w-[420px] 2xl:w-[520px] 3xl:w-[660px]">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-[10px] overflow-hidden">
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
