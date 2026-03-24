import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
export type CtaData = {
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

export type CorporateServicesUaeCtaProps = {
  data: CtaData;
  variant?:
  | "default"
  | "CorporateServicesUae"
  | "Financial-Statement-Audit"
  | "AuditServicesUae"
  | "VatServicesUae"
  | "Formation-JAFZA"
  | "mainland"
  | "saifz"
  | "sop"
  | "Offshore"
  | "blogdetail"
  | "company-freezone"
  | "DMCC-Freezone"
  | "rakez"
  | "ADGM-Foundations"
  | "holding"
  | "ADGM-SPV-Formation"
  | "ifza"
  | "dwtc"
  | "regulatory"
  | "e-invoicing"
  | "adgm-regulated"
  | "CorporateTaxUae"
  | "difc-regulated"
  | "Formation-ADGM"
  | "erm"
  | "internal-audit";
};

export default function CorporateServicesUaeCta({
  data,
  variant = "default",
}: CorporateServicesUaeCtaProps) {
  return (
    <section
      className={cn(
        "w-full h-auto block",
        variant === "mainland"
          ? "py-[45px] lg:py-[65px_45px] xl:py-[65px] 2xl:py-[100px_70px] 3xl:py-[125px_85px]"
          : "py-[40px] lg:py-13 xl:py-[50px] 2xl:py-17 3xl:py-22",
        variant === "e-invoicing"
          ? "py-[45px] lg:py-[65px_45px] xl:py-[65px] 2xl:py-[100px_70px] 3xl:py-[125px_85px]"
          : "py-[40px] lg:py-13 xl:py-[50px] 2xl:py-17 3xl:py-22",
        variant === "CorporateTaxUae"
          ? "py-[45px] lg:py-[65px_45px] xl:py-[65px] 2xl:py-[100px_70px] 3xl:py-[125px_85px]"
          : "py-[40px] lg:py-13 xl:py-[50px] 2xl:py-17 3xl:py-22",
      )}
    >
      <div className="container max-sm:px-[16.1px]">
        <div
          className={cn(
            "w-full md:max-w-[1069px] h-auto mx-auto rounded-[20px] 2xl:rounded-[25px] overflow-hidden relative z-0 flex flex-wrap items-center",
            variant === "mainland"
              ? " p-[50px_30px]  sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA] xl:min-h-[289px]"
              : "p-[50px_30px] lg:p-[60px_45px] xl:p-[54.9px_52px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
            variant === "e-invoicing"
              ? "max-sm:!p-[40px_21px_37px_31px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA]"
              : "p-[50px_30px] lg:p-[60px_45px] xl:p-[54.9px_52px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
            variant === "CorporateTaxUae"
              ? "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA] max-sm:min-h-[354px]"
              : "p-[50px_30px] lg:p-[60px_45px] xl:p-[54.9px_52px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
            variant === "saifz" &&
            "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-b from-[#053269] via-[#5596CA]/50% to-[#3EB0EA]",
            variant === "ADGM-Foundations" &&
            "max-sm:p-[35px_30px] sm:p-[40px] xl:p-[50px] xl:max-w-267.5 2xl:max-w-285 3xl:max-w-356.25 h-auto mx-auto rounded-[20px]",
            variant === "Financial-Statement-Audit" &&
            "max-sm:p-[35px_30px] sm:p-[40px] xl:p-[50px]",
            variant === "Formation-JAFZA" &&
            "max-sm:p-[45.96px_21px_27.05px_28px] xl:p-[42.92px_50px]",
            variant === "Offshore" && "xl:p-[45px_50px] xl:min-h-[289px]",
            variant === "Formation-ADGM" && "px-[31px_21px] xl:p-[45px_52px] min-h-[265px] xl:min-h-[289px] max-sm:max-w-[343px]",
            variant === "dwtc" &&
            "max-sm:p-[28px_20px_22px_31px] xl:min-h-[289px]",
            variant === "company-freezone" && "xl:p-[55px_50px]",
            variant === "internal-audit" && "xl:min-h-[289px]",
            variant === "ifza" && "xl:min-h-[289px] xl:p-[67px_52px_67px]",
            variant === "AuditServicesUae" && "max-sm:py-[38px_40px]",

            variant === "erm" &&
            "p-[30px_15px_35px_30px] sm:p-[35px] xl:p-[80px_52px]   bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA] xl:min-h-[289px]",
          )}
        >
          <div
            className={cn(
              "w-full h-full aspect-square pointer-events-none absolute -z-1 inset-0",
            )}
          >
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
              className={cn(
                "w-full h-full object-cover object-right max-md:block hidden",
              )}
            />
          </div>
          <div
            className={cn(
              "w-full max-lg:mb-3.75",
              variant === "mainland" ? "lg:w-[65%]" : "lg:w-[70%]",
              variant === "e-invoicing" ? "lg:w-[65%]" : "lg:w-[70%]",
              variant === "CorporateTaxUae" ? "lg:w-[65%]" : "lg:w-[70%]",
              variant === "rakez" ? "lg:w-[70%]" : "",
              variant === "dwtc" ? "lg:w-[64%]" : "",
              variant === "CorporateServicesUae" && "xl:w-[63%]",
              variant === "saifz" && "xl:w-[55%]",
              variant === "ifza" ? "lg:w-[65%]" : "",
              variant === "Financial-Statement-Audit" && "lg:w-[60%]",
              variant === "VatServicesUae" && "lg:w-[62%]",
              variant === "Formation-JAFZA" && "lg:w-[58%]",
              variant === "DMCC-Freezone" && "lg:w-[65%]",
              variant === "ADGM-SPV-Formation" && "lg:w-[60%]",
              variant === "AuditServicesUae" && "lg:w-[75%]",
            )}
          >
            <Heading
              as="h2"
              size="h2"
              className={cn(
                "max-sm:text-[20px] lg:text-[25px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[48px] font-bold leading-[135%] text-white mb-3.75 lg:mb-2.5 max-w-[650px]",
                variant === "holding" && "font-bold leading-relaxed",
                variant === "blogdetail" && "max-sm:text-[22px]",
                variant === "ifza" && "font-bold xl:mb-[8px]",
                variant === "rakez" && "xl:max-w-full ",

                variant === "dwtc" && "max-sm:max-w-[80%]",
              )}
            >
              {parse(data?.title)}
            </Heading>
            <div
              className={cn(
                "text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]   max-sm:font-normal [&_p]:font-normal text-white max-md:[&_br]:hidden",
                variant === "blogdetail" && "font-medium [&_p]:font-medium",
                variant === "AuditServicesUae" && "xl:max-w-[75%]",
                variant === "DMCC-Freezone" && "xl:max-w-[92%]",
                variant === "regulatory" && "xl:max-w-[92%] leading-[150%]",
                variant === "ifza" && "xl:max-w-[583px]",
                variant === "erm" && "xl:max-w-[573px]",
                variant === "mainland" && "xl:max-w-[583px]",
              )}
            >
              {parse(data?.description)}
            </div>
          </div>
          <div
            className={cn(
              "w-full lg:w-[33%] flex lg:justify-end",
              variant === "mainland" ? "lg:w-[35%]" : "lg:w-[30%]",
              variant === "e-invoicing" ? "lg:w-[35%]" : "lg:w-[30%]",
              variant === "CorporateTaxUae" ? "lg:w-[35%]" : "lg:w-[30%]",
              variant === "rakez" ? "lg:w-[30%]" : "",
              variant === "dwtc" ? "lg:w-[36%]" : "",
              variant === "CorporateServicesUae" && "xl:w-[37%]",
              variant === "saifz" && "xl:w-[45%]",
              variant === "ifza" ? "lg:w-[35%]" : "",
              variant === "Financial-Statement-Audit" && "lg:w-[40%]",
              variant === "Formation-JAFZA" && "lg:w-[42%]",
              variant === "VatServicesUae" && "lg:w-[38%]",
              variant === "DMCC-Freezone" && "lg:w-[35%]",
              variant === "ADGM-SPV-Formation" && "lg:w-[40%]",
              variant === "AuditServicesUae" && "lg:w-[25%]",
            )}
          >
            <Button
              className={cn(
                "text-[12.58px] sm:text-[14px] lg:text-[16px] xl:text-[19.2px] 2xl:text-[20px] 3xl:text-[26px] leading-none max-sm:rounded-[6px] !font-medium text-black !px-[5px] min-w-[118px] xl:min-w-[178.6px] 2xl:min-w-[190px] !px-[5px] h-[30px] sm:h-[45px] xl:h-[48.2px] 3xl:h-[60px] max-sm:rounded-[6px] bg-[#FFC916]",
                variant === "mainland" &&
                "px-[20px] xl:px-[30px] 3xl:px-[35px]",
                variant === "e-invoicing" &&
                "px-[20px] xl:px-[30px] 3xl:px-[35px]",
                variant === "CorporateTaxUae" &&
                "px-[20px] xl:px-[30px] 3xl:px-[35px]",
                variant === "rakez" && "xl:min-w-[178px] xl:h-[48px] !px-[2px]",
                variant === "sop" && "xl:min-w-[178px] xl:h-[48px] !px-[4px]",
                variant === "holding" &&
                "max-3xl:!font-medium max-sm:h-[30px] xl:h-[48px] xl:min-w-[170px] xl:px-[28px] 2xl:px-10",
                variant === "Formation-JAFZA" && "xl:h-[48.02px]",
                variant === "ADGM-Foundations" && "xl:min-w-[178.07px] xl:h-[48.02px]",

                variant === "ifza" &&
                "max-3xl:!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] md:h-[40px] xl:h-[48.2px] xl:min-w-[178.6px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",

                variant === "dwtc" &&
                "max-3xl:!font-medium max-sm:!min-w-[118px] max-sm:h-[30px] md:h-[40px] xl:h-[48px] xl:min-w-[165px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
                variant === "Financial-Statement-Audit" &&
                "max-sm:!min-w-[120px]",
                variant === "regulatory" && "max-sm:!min-w-[118px]",
                variant === "CorporateServicesUae" &&
                "!min-w-[118px] xl:!min-w-[233.6px] h-[30px] sm:h-[48.2px]",
                variant === "difc-regulated" &&
                "!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] md:h-[40px] xl:h-[48.2px] xl:min-w-[178.6px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
                variant === "adgm-regulated" &&
                "max-3xl:!font-medium max-sm:!min-w-[118px] max-sm:h-[30px] md:h-[40px] xl:h-[48.2px] xl:min-w-[178.6px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
              )}
              asChild
            >
              <Link href={data.button.link}>{data.button.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
