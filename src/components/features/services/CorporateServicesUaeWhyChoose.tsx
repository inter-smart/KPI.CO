import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { WhyChooseItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeWhyChooseProps = {
    data: {
        title: string;
        description: string;
        items: WhyChooseItem[];
    };
};

export default function CorporateServicesUaeWhyChoose({
    data,
}: CorporateServicesUaeWhyChooseProps) {
    return (
        <section className="w-full h-auto py-[40px_50px] sm:py-[40px_60px] lg:py-[40px_80px] 2xl:py-[50px_100px] 3xl:py-[65px_125px] block">
            <div className="container">
                <div className="sm:text-center w-full h-auto mb-6 sm:mb-8 lg:mb-10 2xl:mb-12.5 3xl:mb-16">
                    <Heading
                        as="h2"
                        size="h2"
                        className="text-[#1C5396] mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10"
                    >
                        {data?.title}
                    </Heading>
                    <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]">
                        {parse(data?.description)}
                    </div>
                </div>
                <div className="md:-mx-3 2xl:-mx-3.75 3xl:-mx-5 flex flex-wrap">
                    {data?.items.map((item) => (
                        <div
                            key={item?.id}
                            className="w-full md:w-1/2 h-auto p-[15px_0] md:p-[20px_12px] 2xl:p-[25px_15px] 3xl:p-[30px_20px]"
                        >
                            <div className="w-full h-full p-6 lg:p-5 2xl:p-6.25 3xl:p-7.5 bg-[#6A9FE0]/8 rounded-[10px] sm:rounded-[8px] 2xl:rounded-[14px] overflow-hidden block relative z-0 before:content-[''] before:w-[3px] 2xl:before:w-[4px] before:h-full before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] before:absolute before:z-1 before:inset-[0_auto_0_0] hover:scale-102 duration-300">
                                <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-black mb-2 lg:mb-1.25 2xl:mb-2.5">
                                    {item?.title}
                                </div>
                                <div className="text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-normal font-normal text-[#4E4E4E]">
                                    {parse(item?.description)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
