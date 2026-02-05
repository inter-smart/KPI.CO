import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { WhyBuildItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeWhyBuildProps = {
    data: {
        title: string;
        items: WhyBuildItem[];
    };
};

export default function CorporateServicesUaeWhyBuild({
    data,
}: CorporateServicesUaeWhyBuildProps) {
    return (
        <section className="bg-white py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-[30px] md:mb-[40px] xl:mb-[50px]">
                    <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
                        {data.title}
                    </Heading>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] xl:gap-[25px]">
                    {data.items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[10px] xl:rounded-[12px] p-[25px] xl:p-[30px] border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            {/* Icon Container */}
                            <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-[8px] flex items-center justify-center mb-[20px] transition-transform group-hover:scale-105">
                                <Image
                                    src={item.media.path}
                                    width={32}
                                    height={32}
                                    alt={item.media.alt}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-[17px] 2xl:text-[20px] 3xl:text-[26px] font-semibold text-gray-900 mb-[12px] xl:mb-[15px]">
                                {item.title}
                            </h3>
                            <div className="text-[15px] text-gray-600 leading-relaxed">
                                {parse(item.description)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
