import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Heading } from "@/components/utils/typography"

export default function CorporateServicesUaeFaq({ data }) {
    return (
        <section className="w-full h-auto py-[25px_70px] block">
            <div className="container">
                <div className="typography">
                    <Heading
                        as="h2"
                        size="h2"
                        className="text-[#1C5396] xl:mb-6.25 2xl:mb-7.5 max-sm:hidden"
                    >
                        {data.title}
                    </Heading>
                    <div className="lg:[&_p]:text-[16px] 2xl:[&_p]:text-[19px] 3xl:[&_p]:text-[24px] [&_p]:leading-[1.7] [&_p]:font-normal text-[#4E4E4E] xl:max-w-[80%] lg:[&_p]:mb-6.25 2xl:[&_p]:mb-7.5">
                        {parse(data.description || '')}
                    </div>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="max-w-lg"
                >
                    <AccordionItem value="shipping">
                        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                        <AccordionContent>
                            We offer standard (5-7 days), express (2-3 days), and overnight
                            shipping. Free shipping on international orders.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="returns">
                        <AccordionTrigger>What is your return policy?</AccordionTrigger>
                        <AccordionContent>
                            Returns accepted within 30 days. Items must be unused and in original
                            packaging. Refunds processed within 5-7 business days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="support">
                        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                        <AccordionContent>
                            Reach us via email, live chat, or phone. We respond within 24 hours
                            during business days.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
