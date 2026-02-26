"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import type { SlideItem } from "@/app/page";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type HomeHeroProps = {
  data: {
    slides: SlideItem[];
  };
};

export default function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[450px] xl:h-[530px] 2xl:h-[600px] 3xl:h-[800px] overflow-hidden">
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
          bulletClass:
            "swiper-pagination-bullet !bg-white !opacity-50 !w-3 !h-3",
          bulletActiveClass:
            "swiper-pagination-bullet-active !opacity-100 !bg-[#FFC107]",
        }}
        loop={true}
        className="w-full h-full"
      >
        {data.slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative w-full h-full overflow-hidden"
          >
           
            <div className="absolute inset-0 w-full h-full">
              {slide.type === "video" ? (
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
              
              <div className="absolute inset-0 bg-gradient-to-b from-[#053269]/80  to-[#3869A4]/70 to-[#6A9FE0]/30" />
            </div>
 
            <div className="container relative z-10 h-full flex flex-col justify-center">
              <div className="max-w-full">
                <Heading
                  as="h1"
                  size="h1"
                  className="font-bold text-white mb-[30px] lg:max-w-[740px] xl:max-w-[920px] 2xl:max-w-[1110px] 3xl:max-w-[1360px]"
                >
                  {slide.title}
                </Heading>
                <p className="text-[16px] lg:text-[14px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[26px] text-white/90  lg:max-w-[1000px] 2xl:max-w-[1230px] 3xl:max-w-[1530px] font-normal  mb-[30px]">
                  {slide.description}
                </p>
                <Button
                  className="text-[15px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-black font-medium sm:font-semibold px-5 sm:px-10 
                  h-[35px] sm:h-[45px] 2xl:h-[48px] 3xl:h-[60px] bg-base2 hover:bg-base2 rounded-[8px] transition-all transform !scale-100 "
                  asChild
                >
                  <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

 
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
  );
}
