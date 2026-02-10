import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { FaqItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeFaqProps = {
  data: {
    title: string;
    faq_list: FaqItem[];
  };
};

export default function CorporateServicesUaeFaq({
  data,
}: CorporateServicesUaeFaqProps) {
  return (
    <section className="w-full h-auto py-[40px_70px] lg:py-[20px_60px] 2xl:py-[30px_70px] 3xl:py-[40px_85px] block">
      <div className="container">
        <div className="typography">
          <Heading
            as="h2"
            size="h2"
            className="text-center text-[#1C5396] lg:mb-8.75 2xl:mb-10 3xl:mb-13"
          >
            {data?.title}
          </Heading>
        </div>
        <div className="w-full lg:max-w-178 2xl:max-w-210 3xl:max-w-264 h-auto mx-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue={`item-${data?.faq_list?.[1]?.id}`}
          >
            {data?.faq_list?.map((item) => (
              <AccordionItem
                value={`item-${item.id}`}
                key={item.id}
                className="w-full h-auto bg-transparent border-b border-[#DEDEDE] last:border-b overflow-hidden relative z-0"
              >
                <AccordionTrigger className="py-4 sm:py-5 lg:py-7 2xl:py-8.75 3xl:py-10 [&>svg]:text-[#1C5396] [&>svg]:w-5 2xl:[&>svg]:w-7.5 [&>svg]:h-5 2xl:[&>svg]:h-7.5">
                  <div className="text-[16px] lg:text-[18px] 2xl:text-[21px] 3xl:text-[26px] leading-[1.4] font-medium text-black max-w-[90%]">
                    {item?.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3.75 sm:pb-6.25">
                  <div className="typography [&_p]:text-[14px] 2xl:[&_p]:text-[18px] 3xl:[&_p]:text-[21px] [&_p]:leading-[1.8] [&_p]:font-normal [&_p]:text-black [&_p]:last:my-0 mb-0 max-w-[90%]">
                    {parse(item?.description || "")}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
