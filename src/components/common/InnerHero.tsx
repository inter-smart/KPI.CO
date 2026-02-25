import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import { Button } from "../ui/button";
import Link from "next/link";

export type InnerHeroMedia = {
  path?: string;
  desktopPath?: string;
  mobilePath?: string;
  alt?: string;
};

export type InnerHeroData = {
  id: number;
  title: string;
  description?: string;
  additionalContent?: string[];
  media?: InnerHeroMedia;
};

export type InnerHeroProps = {
  data: InnerHeroData;
  variant?:
    | "default"
    | "saifz"
    | "advisory"
    | "dwtc"
    | "erm"
    | "ifza"
    | "e-invoicing"
    | "ADGM-Foundations"
    | "meydan";
};

export default function InnerHero({
  data,
  variant = "default",
}: InnerHeroProps) {
  const mediaSrc =
    data?.media?.path ?? data?.media?.desktopPath ?? data?.media?.mobilePath;
  const mediaAlt = data?.media?.alt || "Hero background";

  return (
    <section
      className={cn(
        "w-full h-[600px] sm:h-[500px] xl:h-[640px] 3xl:h-[800px] lg:max-h-[calc(100vh-var(--header-y))] sm:py-[50px] lg:py-[75px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[140px] overflow-hidden flex items-center relative z-0",
        variant === "saifz"
          ? "bg-linear-to-b from-[#1C5396] from-[0%] via-[#2D81C0] via-[50%] to-[#3EB0EA] to-[61%]"
          : "",
        variant === "advisory" ? "max-sm:h-[715px]" : "",
        variant === "dwtc" || variant === "e-invoicing"
          ? "h-[540px] sm:h-[500px] xl:h-[640px] 3xl:h-[800px]"
          : "h-[600px] sm:h-[500px] xl:h-[640px] 3xl:h-[800px]",
        variant === "e-invoicing"
          ? "min-h-[640px] xl:h-[720px] 2xl:h-[770px] 3xl:h-[950px]"
          : "",
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
        <div
          className={cn(
            "w-full",
            variant === "ADGM-Foundations" &&
              "md:max-w-[500px] xl:max-w-[750px] 2xl:max-w-[900px] 3xl:max-w-[1085px]",
          )}
        >
          <Heading
            as="h1"
            size="h1"
            className="leading-normal font-bold text-white mb-[15px] xl:mb-[20px] 2xl:mb-[25px] max-md:[&_br]:hidden"
          >
            {parse(data?.title)}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              size="p3"
              className={cn(
                "text-white lg:max-w-[70%] mb-[35px] xl:mb-[40px] 2xl:mb-[50px]max-md:[&_br]:hidden",
                variant === "dwtc" && "xl:max-w-[100%] 3xl:max-w-[100%]",
                variant === "ADGM-Foundations" &&
                  "leading-[1.6] lg:max-w-full xl:mb-[40px] 2xl:mb-[50px]",
              )}
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
            className="text-[13px] sm:text-[16px] xl:text-[16px] 2xl:text-[17px] text-[#212121] min-w-[150px] xl:min-w-[150px] 2xl:min-w-[160px] 3xl:min-w-[200px] h-11! xl:h-[40px]! 2xl:h-12! 3xl:h-15! !scale-100 hover:bg-base2 max-sm:mt-3"
            asChild
          >
            <Link href={"/"}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
