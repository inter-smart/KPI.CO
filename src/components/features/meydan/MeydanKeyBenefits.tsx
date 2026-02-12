"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Heading } from "@/components/utils/typography";
import type { MeydanKeyBenefitsData } from "@/app/meydan-freezone-business-setup-uae/page";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

type MeydanKeyBenefitsProps = {
  data: MeydanKeyBenefitsData;
};

export default function MeydanKeyBenefits({ data }: MeydanKeyBenefitsProps) {
  
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-auto py-[45px_60px] sm:py-[35px_50px] xl:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_90px] block">
      <div className="container max-sm:bg-gradient-to-t max-sm:from-[#9ED7F5]/15 max-sm:via-white max-sm:to-white max-sm:rounded-[12px]">
        <div className="typography">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-[30px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]"
          >
            {data?.title}
          </Heading>
        </div>
        <div className="w-full h-auto py-[20px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px] sm:bg-[#f5fbfe] sm:rounded-[10px] 2xl:rounded-[15px] overflow-hidden block">
          <div className="w-full h-auto sm:pl-[25px] xl:pl-[30px] 3xl:pl-[40px] mb-[30px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]">
            <Swiper
              slidesPerView="auto"
              spaceBetween={40}
              freeMode={true}
              slideToClickedSlide={true}
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              breakpoints={{
                640: {
                  spaceBetween: 25,
                },
                1280: {
                  spaceBetween: 35,
                },
                1536: {
                  spaceBetween: 40,
                },
                1920: {
                  spaceBetween: 55,
                },
              }}
              className="meydanThumbSlider !overflow-visible"
            >
              {data?.slides?.map((item, index) => (
                <SwiperSlide key={item?.id} className="!w-auto !h-auto">
                  <div
                    className={`text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-normal text-[#4E4E4E] pb-[5px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#1C5396]/80 relative z-0 before:content-[''] before:w-full before:h-[2px] 2xl:before:h-[3px] before:bg-[#FFC916] before:opacity-0 before:absolute before:z-1 before:inset-[auto_0_0_0] ${
                      activeIndex === index &&
                      "font-semibold !text-[#1C5396] before:opacity-100"
                    }`}
                  >
                    {item?.title}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full h-auto sm:px-[25px] xl:px-[30px] 3xl:px-[40px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              effect="fade"
              modules={[Thumbs, EffectFade]}
              fadeEffect={{ crossFade: true }}
              thumbs={{ swiper: thumbsSwiper }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="meydanMainSlider"
            >
              {data?.slides?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="md:gap-[15px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[35px] flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                      <ul className="space-y-[20px] sm:space-y-[15px] xl:space-y-[20px] 2xl:space-y-[25px] 3xl:space-y-[30px]">
                        {item?.items?.map((item, index) => (
                          <li
                            key={index}
                            className="w-full h-auto pl-[30px] sm:pl-[25px] xl:pl-[27px] 2xl:pl-[35px] 3xl:pl-[40px] relative z-0 before:content-[''] before:w-[20px] sm:before:w-[18px] 2xl:before:w-[20px] 3xl:before:w-[25px] before:h-auto before:aspect-square before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3328%2024.4444C19.4693%2024.4444%2024.4439%2019.4698%2024.4439%2013.3333C24.4439%207.19678%2019.4693%202.22217%2013.3328%202.22217C7.19629%202.22217%202.22168%207.19678%202.22168%2013.3333C2.22168%2019.4698%207.19629%2024.4444%2013.3328%2024.4444Z%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] before:bg-no-repeat before:bg-contain before:absolute before:inset-[0_auto_0_0] before:translate-y-[2px] sm:before:translate-y-[3px] 2xl:before:translate-y-[5px]"
                          >
                            <span className="text-[14px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-medium text-black">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="w-full max-sm:h-auto sm:h-full max-sm:aspect-[340/315] max-md:mb-[35px] rounded-[12px] xl:rounded-[10px] 2xl:rounded-[15px] overflow-hidden block">
                        <Image
                          src={item?.media?.path}
                          alt={item?.media?.alt}
                          width={770}
                          height={380}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
