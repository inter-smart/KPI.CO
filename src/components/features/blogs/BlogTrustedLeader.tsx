"use client";
import Image from "next/image";
import { cn } from '@/lib/utils'
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import type { BankingPartner } from "@/app/corporate-services-uae/page";
import type { TrustedLeader } from "@/app/blog/[slug]/page";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type BlogTrustedLeaderProps = {
    data: {
        title: string;
        description: string;
        partners: TrustedLeader[];
    };
};

export default function BlogTrustedLeader({ data }: BlogTrustedLeaderProps) {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
        },
        [Autoplay({ delay: 2500, stopOnInteraction: true })],
    )
    return (
        <section className="w-full h-auto py-[40px] lg:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px]">
            <div className="container">
                <div className="w-full h-auto mb-[35px] sm:mb-8 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5">
                    <Heading
                        as="h2"
                        size="h2"
                        className="text-[#1C5396]"
                    >
                        {data?.title}
                    </Heading>

                </div>
                <div ref={emblaRef} className="w-full max-w-full">
                    <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5 lg:-mx-6.25 2xl:-mx-5.5 3xl:-mx-8.75 [&>*]:px-2.5 lg:[&>*]:px-6.25 2xl:[&>*]:px-5.5 3xl:[&>*]:px-8.75">
                        {data.partners.map((item) => (
                            <div
                                key={`affiliation-${item?.id}`}
                                className={cn(
                                    'flex-[0_0_33.3333%] sm:flex-[0_0_30%] lg:flex-[0_0_27%] min-w-0 select-none',
                                )}
                            >
                                <div className="w-full h-[60px] md:h-[100px] xl:h-[130px] 2xl:h-[160px] rounded-[5px] sm:rounded-[8px] 2xl:rounded-[13px] flex items-center justify-center bg-white shadow-[0_12px_25px_0_rgba(0,0,0,0.09)] hover:shadow-xl transition">
                                    <div className="w-[65px] sm:w-[120px] xl:w-[150px] 2xl:w-[180px] ">
                                        <Image
                                            src={item?.media?.path || '/images/placeholder-image.png'}
                                            alt={item?.media?.alt || 'Professional Affiliations'}
                                            width={230}
                                            height={95}
                                            className="w-full aspect-2/1 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

