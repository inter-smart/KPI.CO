'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SlideData {
    id: number
    title: string
    description: string
    buttonText: string
    buttonLink: string
    type: 'image' | 'video'
    mediaUrl: string
    posterUrl?: string
}

const slides: SlideData[] = [

    {
        id: 1,
        title: "A Leading Accounting, Risk & Advisory Firm in the UAE ",
        description: "For over 30 years, KPI has supported businesses across the UAE with audit, risk, tax, corporate, and technology advisory services. We work with organisations at every stage, from establishment to expansion, helping strengthen governance, manage risk, and support long-term, sustainable growth.",
        buttonText: "Get in Touch",
        buttonLink: "/",
        type: 'video',
        mediaUrl: "/videos/banner.mp4",
        posterUrl: "/images/hero-bg-2.jpg"
    }
]

export default function MainSlider() {
    return (
        <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50 !w-3 !h-3',
                    bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100 !bg-[#FFC107]',
                }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                        {/* Background Media */}
                        <div className="absolute inset-0 w-full h-full">
                            {slide.type === 'video' ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={slide.posterUrl}
                                    className="w-full h-full object-cover"
                                >
                                    <source src={slide.mediaUrl} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                    src={slide.mediaUrl}
                                    alt={slide.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#053269]/80  to-[#3869A4]/70 to-[#6A9FE0]/30" />
                        </div>

                        {/* Content Container */}
                        <div className="container relative z-10 h-full flex flex-col justify-center">
                            <div className="max-w-full">
                                <h1 className="text-[28px] lg:text-[32px] lg:text-[34px] xl:text-[45px] 2xl:text-[52px] 3xl:text-[65px] font-bold text-white mb-[30px] animate-in fade-in slide-in-from-left-10 duration-1000 sm:max-w-[75%]">
                                    {slide.title}
                                </h1>
                                <p className="text-[16px] lg:text-[18px] 2xl:text-[21px] 3xl:text-[26px] text-white/90 sm:max-w-[95%] xl:max-w-[79%] 3xl:max-w-[83%] font-normalmb-10 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 mb-[30px]">
                                    {slide.description}
                                </p>
                                <Link
                                    href={slide.buttonLink}
                                    className="text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-black font-medium sm:font-semibold inline-flex items-center justify-center px-5 sm:px-10 h-[35px] sm:h-[45px] 2xl:h-[48px] 3xl:h-[60px] bg-base2 hover:bg-[#FFD54F] rounded-[8px] 
                                    transition-all transform hover:scale-105 active:scale-95 shadow-lg animate-in fade-in slide-in-from-left-10 duration-1000 delay-400"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for Swiper Pagination */}
            <style jsx global>{`
                .swiper-pagination {
                bottom: 40px !important;
                text-align: left !important;
                padding-left: 20px;
                }
                @media (min-width: 1024px) {
                .swiper-pagination {
                    padding-left: calc((100vw - 1280px) / 2 + 1rem);
                }
                }
            `}</style>
        </section>
    )
}
