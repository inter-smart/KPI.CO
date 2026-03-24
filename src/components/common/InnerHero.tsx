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
    | "Mainland"
    | "Financial-Statement-Audit"
    | "CorporateTaxUae"
    | "VatServicesUae"
    | "CorporateServicesUae"
    | "AuditServicesUae"
    | "JAFZA-Freezone"
    | "Formation-ADGM"
    | "SOP"
    | "rakez"
    | "saifz"
    | "DMCC-Freezone"
    | "advisory"
    | "dwtc"
    | "erm"
    | "ifza"
    | "e-invoicing"
    | "ADGM-Foundations"
    | "Formation-JAFZA"
    | "technology"
    | "internal-audit"
    | "regulatory"
    | "ADGM-SPV-Formation"
    | "RAK-Offshore"
    | "ADGM-Regulated-Audit"
    | "Offshore"
    | "company-freezone"
    | "Tax-Advisory"
    | "Agreed-Procedure"
    | "difc-regulated"
    | "difc"
    | "meydan"
    | "dsoa";
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
        "w-full min-h-[600px] sm:min-h-[500px] xl:min-h-[600px]  lg:max-h-[calc(100vh-var(--header-y))] py-[50px] sm:py-[50px] lg:py-[75px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[140px] overflow-hidden flex items-center relative z-0",
        variant === "saifz"
          ? "bg-linear-to-b from-[#1C5396] from-[0%] via-[#2D81C0] via-[50%] to-[#3EB0EA] to-[61%]"
          : "",
        variant === "regulatory"
          ? "bg-linear-to-b from-[#1C5396] from-[0%] via-[#2D81C0] via-[50%] to-[#3EB0EA] to-[61%]"
          : "",
        variant === "advisory" ? "max-sm:h-[715px]" : "",
        variant === "dwtc" || variant === "e-invoicing"
          ? "min-h-[546px] sm:min-h-[650px] xl:min-h-[600px] "
          : "!min-h-[600px] sm:min-h-[500px] xl:min-h-[640px] ",
        variant === "e-invoicing" ? "min-h-[640px] xl:min-h-[720px]" : "",
        variant === "company-freezone" && "max-sm:min-h-[630px]",
        variant === "technology" &&
          "!min-h-[728px] sm:!min-h-[640px] xl:!min-h-[800px] 2xl:!min-h-[800px] 3xl:!min-h-[800px] ",
        variant === "erm" && "max-sm:!min-h-[715px] lg:!min-h-[630px]",
        variant === "CorporateTaxUae" && "max-sm:!min-h-[650px] xl:!min-h-[630px]",
        variant === "ADGM-SPV-Formation" && "max-sm:!min-h-[619px] xl:!min-h-[651px] max-sm:pt-[119.55px] xl:!pt-[120px]",
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
            className="w-full h-full object-cover object-right absolute -z-1 inset-0 pointer-events-none"
          />
        </picture>
      )}
      <div className="container">
        <div
          className={cn(
            "w-full max-w-[850px]",
            variant === "ADGM-Foundations" &&
              "md:max-w-[500px] xl:max-w-[750px]",
            variant === "saifz" &&
              "md:max-w-[500px] xl:max-w-[760px] 2xl:max-w-[900px] 3xl:max-w-[1085px]",
            variant === "dwtc" &&
              "md:max-w-[600px] xl:max-w-[760px] 2xl:max-w-[950px] 3xl:max-w-[1115px]",
            variant === "AuditServicesUae" && "max-w-[500px] xl:max-w-[770px]",
            variant === "ifza" &&
              "md:max-w-[600px] xl:max-w-[770px] 2xl:max-w-[950px] 3xl:max-w-[1115px]",
            variant === "technology" && "!max-w-full",
            variant === "internal-audit" &&
              "max-sm:max-w-[330px] xl:max-w-[790px] ",
            variant === "Formation-ADGM" && "xl:max-w-[790px]",
            variant === "CorporateTaxUae" && "xl:max-w-[770px]",
            variant === "regulatory" && "xl:max-w-[845px]",
            variant === "Financial-Statement-Audit" && "xl:max-w-[770px]",
            variant === "VatServicesUae" && "xl:max-w-[790px]",
            variant === "Offshore" && "xl:max-w-[780px]",
            variant === "RAK-Offshore" && "xl:max-w-[775px]",
            variant === "Formation-JAFZA" && "xl:max-w-[780px]",
            variant === "JAFZA-Freezone" &&
              "xl:max-w-[810px] max-sm:mt-[-80px]",
            variant === "rakez" && "xl:max-w-[780px]",
            variant === "DMCC-Freezone" && "xl:max-w-[780px]",
            variant === "Agreed-Procedure" && "xl:max-w-[780px]",
            variant === "ADGM-Regulated-Audit" && "xl:max-w-[845px]",
            variant === "ADGM-SPV-Formation" && "xl:max-w-[790px]",
            variant === "Tax-Advisory" && "xl:max-w-[785px]",
            variant === "difc" && "xl:max-w-[785px]",
            variant === "RAK-Offshore" && "max-sm:max-w-[330px]",
          )}
        >
          <Heading
            as="h1"
            size="h1"
            className={cn(
              "font-bold text-white mb-[15px] xl:mb-[22px] capitalize max-md:[&_br]:hidden",

              variant === "technology" && "max-w-[850px] xl:mb-[30px]",
              variant === "internal-audit" && "max-w-[850px]",
              variant === "regulatory" && "xl:mb-[28.5px]",
              variant === "JAFZA-Freezone" && "max-sm:mb-[22px]",
              variant === "Offshore" && "normal-case",
              variant === "Formation-JAFZA" && "normal-case",
              variant === "dwtc" && "normal-case",
              variant === "Mainland" && "mb-[22px] xl:mb-[29.5px]",
              variant === "VatServicesUae" && "mb-[22px] xl:mb-[22px]",
              variant === "dsoa" && "mb-[22px] xl:leading-[150%]",
              variant === "ifza" && "mb-[22px] xl:leading-[150%]",
              variant === "meydan" && "mb-[22px] xl:leading-[150%]",
            )}
          >
            {parse(data?.title)}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              size="p3"
              className={cn(
                "xl:text-[16px] leading-[1.6] text-white  mb-[30px] xl:mb-[45px] 2xl:mb-[50px] max-md:[&_br]:hidden",
                variant === "technology" && "xl:!text-[20px] xl:mb-[30px]",
                variant === "dwtc" &&
                  "xl:max-w-[100%] 3xl:max-w-[100%] !leading-relaxed [&_p]:!leading-relaxed",
                variant === "ADGM-Foundations" &&
                  "leading-[1.6] lg:max-w-full xl:mb-[40px] 2xl:mb-[50px]",
                variant === "CorporateServicesUae" &&
                  "xl:text-[16px] lg:max-w-[83%]",
                variant === "CorporateTaxUae" &&
                  "xl:text-[20px] xl:mb-[41px] leading-[150%]",
                variant === "saifz" && "!max-w-full",
                variant === "Mainland" &&
                  "lg:max-w-[770px] xl:text-[20px] xl:leading-[150%] xl:mb-[37.5px]",
                variant === "SOP" &&
                  "lg:max-w-[90%] xl:mb-[30px] xl:text-[20px]",
                variant === "ifza" && "lg:max-w-[100%] xl:mb-[39px]",
                variant === "internal-audit" && "xl:text-[20px]",
                variant === "Formation-ADGM" && "xl:text-[20px]",
                variant === "Offshore" && "xl:text-[20px]",
                variant === "CorporateTaxUae" && "xl:text-[20px]",
                variant === "regulatory" &&
                  "lg:max-w-[772px] text-[16px] xl:!text-[20px] [&_p]:text-[16px] xl:[&_p]:!text-[20px] leading-[150%] xl:mb-[32.5px]",
                variant === "Financial-Statement-Audit" &&
                  "xl:text-[20px] mb-[21px] xl:mb-[41px]",
                variant === "VatServicesUae" &&
                  "mb-[19px] xl:text-[20px] xl:mb-[40px]",
                variant === "ADGM-Foundations" && "xl:text-[20px]",
                variant === "AuditServicesUae" && "xl:text-[20px]",
                variant === "Agreed-Procedure" && "xl:text-[20px] xl:mb-[41px]",
                variant === "ADGM-Regulated-Audit" &&
                  "xl:text-[20px] xl:mb-[33px]",
                variant === "ADGM-SPV-Formation" && "xl:text-[20px]",
                variant === "Tax-Advisory" && "xl:text-[20px]",
                variant === "e-invoicing" && "xl:text-[20px]",
                variant === "erm" && "xl:max-w-[90%] max-sm:mb-[25px]",
                variant === "meydan" && "mb-[20px] sm:!mb-[40px]",
                variant === "difc" && "xl:text-[20px] xl:max-w-[750px]",
                variant === "DMCC-Freezone" && "mb-[22px] xl:mb-[32px]",
                variant === "ADGM-Regulated-Audit" && "xl:max-w-[772px]",
                variant === "dsoa" && "!max-w-[775px] xl:mb-[35px]",
                variant === "dwtc" && "!max-w-[775px] xl:mb-[35px]",
                variant === "VatServicesUae" &&
                  "xl:mb-[40.5px] xl:leading-[150%]",
                variant === "difc-regulated" &&
                  "xl:max-w-[775px] xl:leading-[150%] xl:text-[20px] xl:mb-[41px]",
                variant === "internal-audit" &&
                  "xl:max-w-[772px] xl:leading-[150%] xl:text-[20px] xl:mb-[40.5px]",
                variant === "Formation-ADGM" &&
                  "xl:max-w-[772px] xl:leading-[150%] xl:text-[20px] xl:mb-[34px]",
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
                  className={cn(
                    "font-semibold text-white mb-2 sm:mb-4 xl:mb-6 2xl:mb-8",
                    variant === "CorporateServicesUae" &&
                      "text-[14px] xl:text-[16px]",
                  )}
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
            className={cn(
              "text-[12.58px] sm:text-[16px] xl:text-[16px] 2xl:text-[17px] text-[#212121] min-w-[118px] xl:min-w-[150px] 2xl:min-w-[160px] 3xl:min-w-[200px] h-[30px]! xl:h-[45px]!  max-sm:rounded-[6.29px] !scale-100 hover:bg-base2 max-sm:mt-1",
              variant === "difc-regulated" &&
                "min-w-[125px] xl:min-w-[150px] max-sm:!h-[35px]",
              variant === "erm" && "max-sm:min-w-[118px] max-sm:h-[30px]",
            )}
            asChild
          >
            <Link href={"/"}>Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
