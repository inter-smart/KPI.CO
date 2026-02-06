import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { HeroData } from "@/app/corporate-services-uae/page";
import { Button } from "../ui/button";
import Link from "next/link";

type InnerHeroProps = {
  data: HeroData;
  children?: React.ReactNode;
};

export default function InnerHero({ data, children }: InnerHeroProps) {
  return (
    <section className="w-full h-auto lg:h-[calc(100vh-var(--header-y))] sm:py-[50px] lg:py-[75px] xl:py-[90px] 2xl:py-[100px]  3xl:py-[140px] bg-linear-to-t from-[#6a9fe0] to-[#053269] overflow-hidden flex items-center relative z-0">
      <Image
        src="/images/corporate-services-uae-hero-bg.png"
        alt="corporate-services-uae-hero-bg"
        width={768}
        height={620}
        className="w-[376px] sm:w-[520px] xl:w-[600px] 2xl:w-[768px] absolute -z-1 bottom-0 right-0 left-auto pointer-events-none"
      />
      <div className="container">
        <div className="w-full max-w-[576px] xl:max-w-[720px] 2xl:max-w-[870px] 3xl:max-w-[1080px]">
          <Heading
            as="h1"
            size="h1"
            className="leading-tight text-white mb-4 xl:mb-6 2xl:mb-8"
          >
            {parse(data?.title)}
          </Heading>
          {data?.description && (
            <Text as="p" size="p1" className="text-white mb-4 xl:mb-6 2xl:mb-8">
              {parse(data?.description)}
            </Text>
          )}
          {data?.additionalContent && (
            <div className="flex flex-wrap gap-x-6 xl:gap-x-10 2xl:gap-x-12.5">
              {data?.additionalContent.map((item, index) => (
                <Text
                  key={index}
                  as="div"
                  size="p1"
                  className="font-semibold text-white mb-4 xl:mb-6 2xl:mb-8"
                >
                  <Image
                    src="/images/icon-list.svg"
                    alt="icon-list"
                    width={24}
                    height={24}
                    className="w-2.5 xl:w-4 2xl:w-4.5 inline-block mr-2"
                  />
                  {parse(item)}
                </Text>
              ))}
            </div>
          )}
          <Button
            className="text-[15px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-black font-medium sm:font-semibold px-5 sm:px-10 
                  h-[35px] sm:h-[45px] 2xl:h-[48px] 3xl:h-[60px] bg-base2 hover:bg-[#FFD54F] rounded-[8px] transition-all transform hover:scale-105 active:scale-95 duration-100 "
            asChild
          >
            <Link href={"/"}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
