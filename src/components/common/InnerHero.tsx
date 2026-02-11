import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { HeroData } from "@/app/corporate-services-uae/page";
import { Button } from "../ui/button";
import Link from "next/link";

type InnerHeroProps = {
  data: HeroData;
  variant?: "default" | "saifz";
};

export default function InnerHero({
  data,
  variant = "default",
}: InnerHeroProps) {
  return (
    <section
      className={cn(
        "w-full h-[690px] sm:h-[500px] xl:h-[530px] 2xl:h-[640px] 3xl:h-[800px] lg:max-h-[calc(100vh-var(--header-y))] sm:py-[50px] lg:py-[75px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[140px] overflow-hidden flex items-center relative z-0",
        variant === "saifz"
          ? "bg-linear-to-b from-[#1C5396] from-[0%] via-[#2D81C0] via-[50%] to-[#3EB0EA] to-[61%]"
          : "bg-linear-to-t from-[#4578b5] to-[#053269]",
      )}
    >
      {data?.media?.desktopPath && data?.media?.mobilePath && (
        <picture className="w-full h-full absolute -z-2 inset-0">
          <source media="(max-width: 640px)" srcSet={data?.media?.mobilePath} />
          <Image
            src={data?.media?.desktopPath}
            alt={data?.media?.alt || "Hero background"}
            width={1920}
            height={800}
            className="w-full h-full object-cover absolute -z-1 inset-0 pointer-events-none"
          />
        </picture>
      )}
      <div className="container">
        <div className="w-full max-w-[576px] xl:max-w-[720px] 2xl:max-w-[870px] 3xl:max-w-[1070px]">
          <Heading
            as="h1"
            size="h1"
            className="leading-normal text-white mb-4 xl:mb-6 2xl:mb-8"
          >
            {parse(data?.title)}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              size="p3"
              className="text-white xl:max-w-[88%] mb-4 xl:mb-6 2xl:mb-8"
            >
              {parse(data?.description)}
            </Text>
          )}
          {data?.additionalContent && (
            <div className="flex flex-wrap gap-x-6 xl:gap-x-10 2xl:gap-x-12.5 max-sm:flex-col">
              {data?.additionalContent.map((item, index) => (
                <Text
                  key={index}
                  as="div"
                  size="p1"
                  className="font-semibold text-white mb-2 sm:mb-4 xl:mb-6 2xl:mb-8"
                >
                  <Image
                    src="/images/icon-list.svg"
                    alt="icon-list"
                    width={24}
                    height={24}
                    className="w-4 xl:w-4 2xl:w-4.5 inline-block mr-2"
                  />
                  {parse(item)}
                </Text>
              ))}
            </div>
          )}
          <Button
            variant="yellow"
            size="lg"
            className="text-[16px] xl:text-[14px] 2xl:text-[17px] min-w-[150px] xl:min-w-[132px] 2xl:min-w-[160px] 3xl:min-w-[200px] h-11! xl:h-10! 2xl:h-12! 3xl:h-15! max-sm:mt-3"
            asChild
          >
            <Link href={"/"}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
