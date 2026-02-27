import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: number;
  title: string;
  description: string;
};

export type CorporateServicesUaeFaqData = {
  title: string;
  button?: {
    label: string;
    link: string;
    target: string;
  };
  faq_list: FaqItem[];
};

export type CorporateServicesUaeFaqProps = {
  data: CorporateServicesUaeFaqData;
  variant?: "side-arrow" | "holding";
};

export default function CorporateServicesUaeFaq({
  data,
  variant,
}: CorporateServicesUaeFaqProps) {
  return (
    <section
      className={cn(
        "w-full h-auto py-[40px_70px] xl:py-[20px_60px] 2xl:py-[30px_70px] 3xl:py-[40px_85px] block",
        variant === "holding" &&
          "py-[40px_70px] xl:py-[50px_60px] 2xl:py-[30px_70px] 3xl:py-[40px_85px]",
      )}
    >
      <div className="container">
        <div className="typography">
          <Heading
            as="h2"
            size="h2"
            className="text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[52px] 3xl:text-[65px] text-center text-[#1C5396] xl:mb-6 2xl:mb-8 3xl:mb-10"
          >
            {data?.title}
          </Heading>
        </div>

        <div className="w-full lg:max-w-178 xl:w-[70%] 2xl:max-w-210 3xl:max-w-264 h-auto mx-auto">
          <Accordion type="single" collapsible>
            {data?.faq_list?.map((item) => (
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className={cn(
                  "w-full h-auto bg-transparent border-b border-[#DEDEDE] overflow-hidden relative z-0",
                  variant === "holding" && "last:border-b-0",
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "py-[35px_10px] sm:py-5 lg:py-7 xl:py-7 2xl:py-8.75 3xl:py-10 [&>svg]:text-[#1C5396] [&>svg]:w-5 xl:[&>svg]:w-[25px] [&>svg]:h-5 xl:[&>svg]:h-[25px] [&>svg]:rotate-[269deg] [&[data-state=open]>svg]:rotate-0 [&>svg]:transform",
                    variant === "side-arrow" &&
                      "[&>svg]:rotate-0 [&[data-state=open]>svg]:!rotate-[180deg]",
                  )}
                >
                  <div className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[26px] leading-[1.4] font-medium text-[#212121] max-w-[92%]">
                    {parse(item?.title)}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3.75 sm:pb-6.25">
                  <div className="typography [&_p]:text-[14px] xl:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] 3xl:[&_p]:text-[21px] [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-black [&_p]:my-1 mb-0 max-w-[90%]">
                    {parse(item?.description || "")}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {data?.button && (
          <Button
            variant="yellow"
            size="lg"
            className="text-[16px] xl:text-[14px] 2xl:text-[17px] w-fit min-w-[150px] xl:min-w-[132px] 2xl:min-w-[160px] 3xl:min-w-[200px] h-11! xl:h-10! 2xl:h-12! 3xl:h-15! mt-[15px] mx-auto flex relative z-2"
            asChild
          >
            <Link
              href={data?.button?.link}
              target={data?.button?.target ? "_blank" : "_self"}
            >
              {data?.button?.label || "Get in Touch"}
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
