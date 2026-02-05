import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { ProcessStep } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeFormationProcessProps = {
    data: {
        title: string;
        description: string;
        steps: ProcessStep[];
    };
};

export default function CorporateServicesUaeFormationProcess({
    data,
}: CorporateServicesUaeFormationProcessProps) {
    return (
        <section className="bg-white py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px]">
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

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[20px] xl:gap-[25px]">
                    {data.steps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Step Card */}
                            <div className="bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-[12px] p-[25px] xl:p-[30px] h-full flex flex-col">
                                {/* Step Number */}
                                <div className="text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold text-white/20 mb-[10px]">
                                    {step.step}
                                </div>

                                {/* Step Title */}
                                <h3 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold text-white mb-[12px]">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-[14px] xl:text-[15px] text-white/90 leading-relaxed flex-grow">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow Connector (hidden on mobile and last item) */}
                            {index < data.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-[12px] transform -translate-y-1/2 z-10">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 18L15 12L9 6"
                                            stroke="#3570B8"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
