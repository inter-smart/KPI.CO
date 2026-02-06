"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading, Text } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";

type SponsoredCardProps = {
  data: {
    label?: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
    duration?: string;
    media?: {
      desktop_path?: string;
      media_alt?: string;
    };
  };
};

export default function BlogSponsoredCard({ data }: SponsoredCardProps) {
  return (
    <div className="w-full rounded-[16px] bg-white  border border-[#e6edf5] shadow-[0_12px_30px_rgba(16,24,40,0.12)] overflow-hidden">
      <div className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-white uppercase px-[16px] lg:px-[20px] 2xl:px-[25px] 3xl:px-[30px] py-[7px] 2xl:py-[10px] bg-gradient-to-r from-[#3EB0EA] to-[#1768AB] ">
        {data?.label || "Sponsored"}
      </div>

      <div className="p-[15px] lg:p-[15px] 2xl:p-[25px] 3xl:p-[30px]">
        <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden bg-[#0b1220]">
          <Image
            src={data?.media?.desktop_path || "/images/icon-placeholder.svg"}
            alt={data?.media?.media_alt || "Sponsored media"}
            fill
            sizes="360px"
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-[45px] xl:h-[55px] 2xl:h-[75px] 3xl:h-[85px] w-[45px] xl:w-[55px] 2xl:w-[75px] 3xl:w-[85px] rounded-full bg-white flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.25)]">
              <Image
                src="/images/playicon.svg"
                alt="about-delemt"
                width={24}
                height={25}
                className="w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[24px] h-auto object-contain ml-[2px]"
              />
            </span>
          </div>

          {data?.duration && (
            <span className="absolute bottom-[10px] right-[10px] text-[11px] text-white bg-black/70 px-[8px] py-[4px] rounded-[8px]">
              {data.duration}
            </span>
          )}
        </div>
        <div className="pt-[10px] lg:pt-[15px]">
          <Heading
            as="h6"
            size="h8"
            className="text-[#0f172a] font-semibold mt-[14px] mb-[8px]"
          >
            {data?.title}
          </Heading>

          <Text as="p" size="p4" className="text-[#45556C] leading-relaxed">
            {data?.description}
          </Text>

          <Button
            className="text-[14px] xl:text-[16px] 2xl:text-[20px] leading-none font-medium text-[#212121] w-full h-[35px] xl:h-[42px] 2xl:h-[50px] bg-[#ffc916] rounded-[10px] mt-[20px]"
            asChild
          >
            <Link href={data?.ctaHref || "#"}>
              {data?.ctaText || "Learn More"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
