import React from 'react';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Heading, Text } from "@/components/utils/typography";
export interface AdvisorySection {
    title: string;
    items: string[];
}

export interface AdvisoryCardData {
    id: number;
    title: string;
    description: string;
    sections: AdvisorySection[];
    footer: string;
    button: {
        label: string;
        link: string;
    };
    theme: {
        border: string;
        bg: string;
        iconBg: string;
        buttonBg: string;
        titleColor: string;
        svgColor: string;
    };
}

export interface AdvisoryData {
    cards: AdvisoryCardData[];
}

interface AdvisorySericeProps {
    data: AdvisoryData;
}

export default function AdvisorySerice({ data }: AdvisorySericeProps) {
    if (!data || !data.cards) return null;

    return (
        <section className="py-12 lg:py-20 2xl:py-24 3xl:py-32 bg-white">
            <div className="container">
                <div className="flex flex-col gap-8 lg:gap-12">
                    {data.cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={cn(
                                "w-full rounded-[25px] border-2 p-[30px_20px] lg:p-12 2xl:p-16 3xl:p-[45px] transition-all duration-300 relative overflow-hidden group ",
                                card.theme.border,
                                card.theme.bg
                            )}
                        >
                            <Heading
                                as="h2"
                                size="h2" className={cn(
                                    "text-[28px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-medium !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px]",
                                    card.theme.titleColor
                                )}>
                                {card.title}
                            </Heading>


                            <p className="text-[#4E4E4E] text-[16px] lg:text-[14px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px] mb-10 mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px] leading-relaxed font-normal">
                                {card.description}
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                                {card.sections.map((section, idx) => (
                                    <div key={idx} className="flex flex-col max-lg:border-t lg:border-l border-[#DEDEDE] max-lg:pt-[15px] lg:pl-[95px] first-of-type:lg:border-none lg:first-of-type:p-0">
                                        <h3 className="text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-[#053269] font-medium mb-[20px]">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3 lg:space-y-6">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start gap-2 2xl:gap-4">
                                                    <div className="w-[20px] 2xl:w-[21px] 3xl:w-[26px] h-[20px] 2xl:h-[21px] 3xl:h-[26px]">
                                                        <svg viewBox="0 0 27 27" fill="none" >
                                                            <path d="M13.3335 24.4446C19.47 24.4446 24.4446 19.47 24.4446 13.3335C24.4446 7.19703 19.47 2.22241 13.3335 2.22241C7.19703 2.22241 2.22241 7.19703 2.22241 13.3335C2.22241 19.47 7.19703 24.4446 13.3335 24.4446Z" stroke={card.theme.svgColor} strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 13.3333L12.2222 15.5555L16.6667 11.1111" stroke={card.theme.svgColor} strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <span className="text-[#4E4E4E] text-[14px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] block w-[calc(100%-20px)] 2xl:w-[calc(100%-21px)] 3xl:w-[calc(100%-26px)] leading-snug">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[#4E4E4E] text-base lg:text-lg 2xl:text-xl 3xl:text-2xl mb-10 lg:mb-14 leading-relaxed font-normal">
                                {card.footer}
                            </p>

                            <Link
                                href={card.button.link}
                                className={cn(
                                    "text-[16px] 2xl:text-[17px] 3xl:text-[21px] inline-flex items-center justify-center px-12 py-3 xl:py-4 rounded-[10px] 2xl:rounded-[13px] font-medium transition-all hover:opacity-90 active:scale-95",
                                    index % 2 !== 0 ? "text-black" : "text-white",
                                    card.theme.buttonBg
                                )}
                            >
                                {card.button.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
