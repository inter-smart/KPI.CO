import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { SetupOptionItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeSetupOptionsProps = {
    data: {
        title: string;
        description: string;
        items: SetupOptionItem[];
    };
};

export default function CorporateServicesUaeSetupOptions({
    data,
}: CorporateServicesUaeSetupOptionsProps) {
    return (
        <section className="bg-gray-50 py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-[30px] md:mb-[40px] xl:mb-[50px]">
                    <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
                        {data.title}
                    </Heading>
                    <div className="text-[12px] xl:text-[14px] 2xl:text-[19px] leading-normal font-normal text-[#4e4e4e]">
                        {parse(data.description)}
                    </div>
                </div>

                {/* Setup Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] xl:gap-[30px]">
                    {data.items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[12px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative w-full h-[200px] xl:h-[240px] overflow-hidden">
                                <Image
                                    src={item.media.path}
                                    alt={item.media.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-[25px] xl:p-[30px]">
                                <h3 className="text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-semibold text-gray-900 mb-[15px]">
                                    {item.title}
                                </h3>
                                <div className="text-[15px] text-gray-600 leading-relaxed mb-[20px]">
                                    {parse(item.description)}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2">
                                    {item.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-[14px] text-gray-700"
                                        >
                                            <span className="text-[#3570B8] mt-1">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
