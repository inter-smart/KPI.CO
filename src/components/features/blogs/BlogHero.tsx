"use client";
import { Heading } from "@/components/utils/typography";
import Image from "next/image";

export type BlogHeroData = {
  title: string;
  description: string;
};

type BlogHeroProps = {
  data: BlogHeroData;
};

export default function BlogHero({ data }: BlogHeroProps) {
  return (
    <section className="relative h-[375px]  sm:h-[230px] xl:h-[340px] 2xl:h-[350px] 3xl:h-[440px]   w-full flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#053269] to-[#6A9FE0]" />
      <div className="absolute bottom-0 right-0 w-full md:h-full max-w-[160px] md:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[420px] 3xl:max-w-[530px] ">
        <Image
          src="/images/blogborder.png"
          width="280"
          height="280"
          className="w-full h-full object-cover"
          alt="border"
        />
      </div>
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-[630px] xl:max-w-[770px] max-sm:text-center">
          <Heading
            as="h1"
            size="h1"
            className="text-white font-bold mb-6 !leading-[1.1] "
          >
            {data.title}
          </Heading>
          <p className="text-white/95 text-[16px] font-normal leading-[1.4] md:leading-[1.5] xl:max-w-[560px] 2xl:max-w-[570px] 3xl:max-w-[700px] duration-1000 delay-300">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
