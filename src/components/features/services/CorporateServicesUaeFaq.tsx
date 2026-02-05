"use client";

import { Heading } from "@/components/utils/typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeFaqProps = {
    data: {
        title: string;
        items: FaqItem[];
    };
};

export default function CorporateServicesUaeFaq({
    data,
}: CorporateServicesUaeFaqProps) {
    return (
        <section className="bg-white py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-[30px] md:mb-[40px] xl:mb-[50px]">
                    <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
                        {data.title}
                    </Heading>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {data.items.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={`item-${faq.id}`}
                                className="border border-gray-200 rounded-[10px] px-[20px] xl:px-[25px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300"
                            >
                                <AccordionTrigger className="text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold text-gray-900 hover:text-[#3570B8] py-[20px] xl:py-[25px] hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[14px] xl:text-[15px] 2xl:text-[17px] text-gray-600 leading-relaxed pb-[20px] xl:pb-[25px]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
