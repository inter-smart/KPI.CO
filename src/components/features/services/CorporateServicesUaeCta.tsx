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
    | "blogdetail"
    | "company-freezone"
    | "DMCC-Freezone"
    | "rakez"
    | "ADGM-Foundations"
    | "holding"
    | "ADGM-SPV-Formation"
    | "ifza"
    | "dwtc"
    | "adgm-regulated"
    | "difc-regulated";
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
      )}
    >
      <div className="container">
        <div
          className={cn(
            "w-full md:max-w-[1070px] h-auto mx-auto rounded-[20px] 2xl:rounded-[25px] overflow-hidden relative z-0 flex flex-wrap items-center",
            variant === "mainland"
              ? "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA]"
              : "p-[50px_30px] lg:p-[60px_45px] xl:p-[55px_52px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
            variant === "saifz" &&
              "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-b from-[#053269] via-[#5596CA]/50% to-[#3EB0EA]",
            variant === "ADGM-Foundations" &&
              "max-sm:p-[35px_30px] sm:p-[40px] xl:p-[50px] xl:max-w-267.5 2xl:max-w-285 3xl:max-w-356.25 h-auto mx-auto rounded-[20px]",
            variant === "Financial-Statement-Audit" &&
              "max-sm:p-[35px_30px] sm:p-[40px] xl:p-[50px]",
            variant === "Formation-JAFZA" && "xl:p-[45px_50px]",
            variant === "company-freezone" && "xl:p-[55px_50px]",
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
              className={cn("w-full h-full object-cover max-md:block hidden")}
            />
          </div>
          <div
            className={cn(
              "w-full max-lg:mb-3.75",
              variant === "mainland" ? "lg:w-[65%]" : "lg:w-[70%]",
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
                variant === "ifza" && "font-bold",
                variant === "rakez" && "xl:max-w-full",
              )}
            >
              {parse(data?.title)}
            </Heading>
            <div
              className={cn(
                "text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal [&_p]:font-normal text-white max-md:[&_br]:hidden",
                variant === "blogdetail" && "font-medium [&_p]:font-medium",
                variant === "AuditServicesUae" && "xl:max-w-[75%]",
                variant === "DMCC-Freezone" && "xl:max-w-[92%]",
              )}
            >
              {parse(data?.description)}
            </div>
          </div>
          <div
            className={cn(
              "w-full lg:w-[33%] flex lg:justify-end",
              variant === "mainland" ? "lg:w-[35%]" : "lg:w-[30%]",
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
                "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[19px] 2xl:text-[20px] 3xl:text-[26px] leading-none max-sm:rounded-[6px] !font-medium text-black min-w-[120px] xl:min-w-[178px] 2xl:min-w-[190px] h-[30px] sm:h-[45px] xl:h-[48px] 3xl:h-[60px] max-sm:rounded-[6px] bg-[#FFC916]",
                variant === "mainland" &&
                  "px-[20px] xl:px-[30px] 3xl:px-[35px]",
                variant === "rakez" && "xl:min-w-[178px] xl:h-[48px] !px-[2px]",

                variant === "ADGM-Foundations" &&
                  "max-3xl:!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] xl:h-[50px]",

                variant === "holding" &&
                  "max-3xl:!font-medium max-sm:h-[30px] xl:h-[48px] xl:min-w-[170px] xl:px-[28px] 2xl:px-10",

                variant === "ifza" &&
                  "max-3xl:!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] md:h-[40px] xl:h-[48px] xl:min-w-[165px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",

                variant === "dwtc" &&
                  "max-3xl:!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] md:h-[40px] xl:h-[48px] xl:min-w-[165px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
                variant === "Financial-Statement-Audit" &&
                  "max-sm:!min-w-[120px]",
                variant === "difc-regulated" &&
                  "max-3xl:!font-medium max-sm:!min-w-[120px] max-sm:h-[30px] md:h-[40px] xl:h-[48px] xl:min-w-[178px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
                variant === "adgm-regulated" &&
                  "max-3xl:!font-medium max-sm:!min-w-[118px] max-sm:h-[30px] md:h-[40px] xl:h-[48px] xl:min-w-[178px] rounded-[7px] xl:rounded-[10px] xl:px-[28px] 2xl:px-10",
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
