'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import type { PartnerItem } from '@/app/page'

import 'swiper/css'

type HomePartnerProps = {
  data: PartnerItem[]
}

export default function HomePartner({ data }: HomePartnerProps) {
  const [swiper, setSwiper] = useState<any>(null);

  React.useEffect(() => {
    if (swiper && swiper.el) {
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isOverCard = target.closest('.partner-card');

        if (isOverCard) {
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }
        } else {
          if (!swiper.autoplay.running) {
            swiper.autoplay.start();
          }
        }
      };

      const handleMouseLeave = () => {
        if (!swiper.autoplay.running) {
          swiper.autoplay.start();
        }
      };

      const swiperEl = swiper.el;
      swiperEl.addEventListener('mouseover', handleMouseOver);
      swiperEl.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        swiperEl.removeEventListener('mouseover', handleMouseOver);
        swiperEl.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [swiper]);

  // Manual duplication to ensure seamless loop without glitches
  const duplicatedData = [...data, ...data, ...data, ...data];

  return (
    <section id="clients" className="bg-white py-[40px] lg:py-[60px] 2xl:py-[50px_90px] relative overflow-hidden">
      <div
        className="container"
      >
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiper}
          spaceBetween={15}
          slidesPerView={2.8}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 5,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false}
          breakpoints={{
            480: {
              spaceBetween: 10,
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1441: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1551: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
          className="w-full !p-[10px] !overflow-visible [&>.swiper-wrapper]:!ease-linear [&>.swiper-wrapper]:!transition-timing-function-linear"
        >
          {duplicatedData.map((partner, index) => (
            <SwiperSlide key={`${partner.id}-${index}`} className="!h-auto">
              <div
                className="partner-card bg-white rounded-[10px] 2xl:rounded-[10px] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center p-4 h-[60px] sm:h-[100px] xl:h-[120px] 2xl:min-h-[150px] 3xl:min-h-[200px]
                            transition-all  duration-300 border border-gray-50"
              >
                <div className="relative w-[90%] xl:w-[80%] h-full ">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
