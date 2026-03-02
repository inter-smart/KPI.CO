"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Text } from "@/components/utils/typography";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export type LocationItem = {
  id: number;
  title: string;
  type: "image" | "content";
  image?: string;
  description?: string;
  link?: string;
};

export type BusinessLocationData = {
  title: string;
  description: string;
  items: LocationItem[];
};

type BusinessLocationProps = {
  data: BusinessLocationData;
  variant?: "dsoa" | "default";
};

export default function BusinessLocation({
  data,
  variant = "default",
}: BusinessLocationProps) {
  return (
    <section className="w-full py-[35px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[110px] bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="w-full">
          <Heading
            as="h2"
            size="h2"
            className="lg:text-[27px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px]"
          >
            {data.title}
          </Heading>
          <div className="text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[25px]">
            {data.description}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="group relative min-h-[210px] 2xl:min-h-[260px] 3xl:min-h-[310px] rounded-[10px] shadow-[0px_4px_6px_rgba(0,0,0,0.1)] overflow-hidden shadow-md"
            >
              <div className="absolute top-0 left-0 h-full w-full group-hover:opacity-0 aspect-[500/312]">
                <Image
                  src={item.image || "/images/placeholder.png"}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-[40px_30px]">
                  <Heading
                    as="h3"
                    className="text-white text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[32px] font-medium leading-tight"
                  >
                    {parse(item.title)}
                  </Heading>
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-0 w-full h-full bg-[#E2F5FF] flex items-start p-[20px] sm:p-[30px] 3xl:p-[35px] opacity-0 group-hover:opacity-100 group-hover:scale-100 origin-center pointer-events-none group-hover:pointer-events-auto duration-300 z-10",
                  variant === "dsoa" && "flex items-center",
                )}
              >
                <div className="w-full h-auto m-auto">
                  <div className="flex justify-between gap-4 mb-2 2xl:mb-3 3xl:mb-4">
                    <Heading
                      as="h3"
                      className="text-[#1C5396] !text-[18px] sm:!text-[16px] lg:!text-[17px] xl:!text-[18px] 2xl:!text-[20px] 3xl:!text-[24px] font-medium leading-tight"
                    >
                      {parse(item.title)}
                    </Heading>
                    <div className="w-[20px] h-[20px] 3xl:w-[35px] 3xl:h-[35px] flex items-center justify-center">
                      <svg
                        viewBox="0 0 27 27"
                        fill="none"
                        className="w-full h-full object-cover"
                      >
                        <path
                          d="M18.28 14.28C18.4014 14.1532 18.4965 14.0037 18.56 13.84C18.6934 13.5154 18.6934 13.1513 18.56 12.8267C18.4965 12.663 18.4014 12.5135 18.28 12.3867L14.28 8.38667C14.0289 8.1356 13.6884 7.99455 13.3333 7.99455C12.9783 7.99455 12.6377 8.1356 12.3867 8.38667C12.1356 8.63774 11.9946 8.97827 11.9946 9.33334C11.9946 9.68841 12.1356 10.0289 12.3867 10.28L14.12 12H9.33334C8.97972 12 8.64058 12.1405 8.39053 12.3905C8.14048 12.6406 8.00001 12.9797 8.00001 13.3333C8.00001 13.687 8.14048 14.0261 8.39053 14.2761C8.64058 14.5262 8.97972 14.6667 9.33334 14.6667H14.12L12.3867 16.3867C12.2617 16.5106 12.1625 16.6581 12.0948 16.8206C12.0271 16.983 11.9923 17.1573 11.9923 17.3333C11.9923 17.5094 12.0271 17.6836 12.0948 17.8461C12.1625 18.0086 12.2617 18.1561 12.3867 18.28C12.5106 18.405 12.6581 18.5042 12.8206 18.5719C12.9831 18.6396 13.1573 18.6744 13.3333 18.6744C13.5094 18.6744 13.6836 18.6396 13.8461 18.5719C14.0086 18.5042 14.1561 18.405 14.28 18.28L18.28 14.28ZM26.6667 13.3333C26.6667 10.6963 25.8847 8.11839 24.4196 5.92574C22.9545 3.73308 20.8721 2.02411 18.4358 1.01495C15.9994 0.00577712 13.3185 -0.258267 10.7321 0.256202C8.14572 0.770672 5.76995 2.04055 3.90525 3.90525C2.04055 5.76995 0.770672 8.14572 0.256202 10.7321C-0.258267 13.3185 0.00577712 15.9994 1.01495 18.4358C2.02411 20.8721 3.73308 22.9545 5.92574 24.4196C8.11839 25.8847 10.6963 26.6667 13.3333 26.6667C16.8696 26.6667 20.2609 25.2619 22.7614 22.7614C25.2619 20.2609 26.6667 16.8696 26.6667 13.3333ZM2.66667 13.3333C2.66667 11.2237 3.29226 9.16138 4.46433 7.40726C5.6364 5.65313 7.3023 4.28596 9.25138 3.47862C11.2005 2.67129 13.3452 2.46005 15.4143 2.87163C17.4834 3.28321 19.3841 4.29911 20.8758 5.79087C22.3676 7.28263 23.3835 9.18325 23.795 11.2524C24.2066 13.3215 23.9954 15.4662 23.1881 17.4153C22.3807 19.3644 21.0135 21.0303 19.2594 22.2023C17.5053 23.3744 15.443 24 13.3333 24C10.5044 24 7.79125 22.8762 5.79087 20.8758C3.79048 18.8754 2.66667 16.1623 2.66667 13.3333Z"
                          fill="#3EB0EA"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="group-hover:translate-y-0 duration-300">
                    <Text className="text-[#1C5396] text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.6] font-normal">
                      {item.description}
                    </Text>
                  </div>

                  {item.link && (
                    <Link href={item.link} className="absolute inset-0 z-20">
                      <span className="sr-only">View {item.title} details</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
