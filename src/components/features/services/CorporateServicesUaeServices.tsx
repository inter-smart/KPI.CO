import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { ServiceItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeServicesProps = {
    data: {
        title: string;
        description: string;
        items: ServiceItem[];
    };
};

export default function CorporateServicesUaeServices({ data }: CorporateServicesUaeServicesProps) {
    return (
        <section className="w-full h-auto py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB] block">
            <div className="container">
                <div className="sm:text-center w-full h-auto mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5.5 lg:gap-6.25 2xl:gap-7.5 3xl:gap-10">
                    {data.items.map((item) => (
                        <div
                            key={item?.id}
                            className="w-full h-auto block"
                        >
                            <div className="group [--icon-size:45px] lg:[--icon-size:40px] 2xl:[--icon-size:45px] 3xl:[--icon-size:60px] w-full h-full p-6.25 lg:p-5 2xl:p-6.25 3xl:p-7.5 max-sm:pr-[10px] bg-white rounded-[10px] sm:rounded-[8px] 2xl:rounded-[14px] border-1 border-[#E2E2E2] flex">
                                <div className="w-[var(--icon-size)] h-[var(--icon-size)] aspect-square p-2.25 lg:p-2 2xl:p-2.25 3xl:p-3 bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                                    <Image
                                        src={item?.media?.path}
                                        alt={item?.media?.alt}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-[calc(100%-var(--icon-size))] pl-3.75 lg:pl-3 2xl:pl-3.75 3xl:pl-5">
                                    <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-medium text-[#1C5396] mb-1.5 lg:mb-1.75 3xl:mb-3">
                                        {item?.title}
                                    </div>
                                    <p className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E]">
                                        {item?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
