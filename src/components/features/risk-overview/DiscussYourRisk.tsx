"use client";

import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import { DiscussYourRiskData } from "@/app/risk-overview/page";
import { cn } from "@/lib/utils";

export type DiscussYourRiskProps = {
  data: {
    title: string;
    description: string;
    button: {
      label: string;
      link: string;
    };
    images: {
      overlay: string;
      overlayMobile: string;
    };
  };
};
type PageData = {
  discussYourRisk: DiscussYourRiskData;
};

export default function DiscussYourRisk({ data }: DiscussYourRiskProps) {
  return (
    <section className="relative w-full py-[95px] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={data?.images?.overlay || ""}
          alt="overlay"
          width={500}
          height={500}
          className="w-full h-full object-cover max-md:hidden block"
        />
        <Image
          src={data?.images?.overlayMobile || ""}
          alt="overlay"
          width={500}
          height={500}
          className={cn("w-full h-full object-cover max-md:block hidden")}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="w-[83%] lg:w-[70%]">
            <Heading
              as="h2"
              size="h2"
              className="max-sm:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-white mb-3.75 lg:mb-2.5"
            >
              {data?.title}
            </Heading>

            <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] font-medium max-sm:font-normal text-white [&_p]:leading-[1.6] md:max-w-[80%]">
              {parse(data?.description)}
            </div>
          </div>

          <div className="w-full lg:w-[30%] flex lg:justify-end">
            <Button
              asChild
              className="bg-[#FFC916] text-black !font-medium leading-none text-[13px] sm:text-[14px] lg:text-[17px] 2xl:text-[20px] 3xl:text-[26px] min-w-[160px] xl:min-w-[178px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px]"
            >
              <Link href={data?.button?.link || "#"}>
                {data?.button?.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
