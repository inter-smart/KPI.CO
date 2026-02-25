
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

type TaxDecisionProps = {
  data: CtaData;
};

export default function TaxDecision({ data }: TaxDecisionProps) {
  return (
    <section className="relative max-sm:px-[30px] py-[85px] lg:py-[55px] xl:py-[70px] 2xl:py-[85px] 3xl:py-[110px]  ">
      <div
        className={cn(
          "w-full h-full aspect-square pointer-events-none absolute -z-1 inset-0",
        )} >
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
          className="w-full h-full object-cover max-md:block hidden"
        />
      </div>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-[65%] max-lg:mb-3.75">
            <Heading
              as="h2"
              size="h2"
              className="max-sm:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-white mb-3.75 lg:mb-2.5"
            >             
                 {parse(data?.title ?? "")}
            </Heading>
            <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal [&_p]:font-normal text-white max-md:[&_br]:hidden">
              {parse(data?.description ?? "")}
            </div>
          </div>
          <div className="w-full lg:w-[35%] flex lg:justify-end">
            <Button
              className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px] leading-none !font-medium text-black min-w-[150px] xl:min-w-[160px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px] bg-[#FFC916]"
              asChild
            >
              <Link href={data?.button?.link ?? "/"}>{data?.button?.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
