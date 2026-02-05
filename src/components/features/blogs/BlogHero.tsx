"use client";

import { Heading } from "@/components/utils/typography";

export type BlogHeroData = {
    title: string;
    description: string;
};

type BlogHeroProps = {
    data: BlogHeroData;
};

export default function BlogHero({ data }: BlogHeroProps) {
    return (
        <section className="relative min-h-[310px]   w-full flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-[#053269] to-[#6A9FE0]" 
            />  

            <div className="container relative z-20 px-4 md:px-6">
                <div className="max-w-[770px] max-sm:text-center">
                    <Heading
                        as="h1"
                        size="h1"
                        className="text-white font-bold mb-6 !leading-[1.1] animate-in fade-in slide-in-from-bottom-12 duration-1000"
                    >
                        {data.title}
                    </Heading>
                    <p className="text-white/95 text-[17px] md:text-[19px] xl:text-[22px] 2xl:text-[24px] font-normal leading-[1.4] md:leading-[1.5] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
