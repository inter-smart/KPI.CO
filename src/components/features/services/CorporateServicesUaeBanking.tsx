import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { BankingPartner } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeBankingProps = {
    data: {
        title: string;
        description: string;
        partners: BankingPartner[];
    };
};

export default function CorporateServicesUaeBanking({
    data,
}: CorporateServicesUaeBankingProps) {
    return (
        <section className="bg-gray-50 py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-[30px] md:mb-[40px] xl:mb-[50px] text-center">
                    <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
                        {data.title}
                    </Heading>
                    <div className="text-[12px] xl:text-[14px] 2xl:text-[19px] leading-normal font-normal text-[#4e4e4e] max-w-3xl mx-auto">
                        {parse(data.description)}
                    </div>
                </div>

                {/* Banking Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] xl:gap-[25px]">
                    {data.partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-white rounded-[10px] p-[20px] xl:p-[25px] border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center group"
                        >
                            <div className="relative w-full h-[60px] xl:h-[70px] transition-transform group-hover:scale-105">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
