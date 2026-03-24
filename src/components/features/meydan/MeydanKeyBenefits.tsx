"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Thumbs } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Heading, Text } from "@/components/utils/typography";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import parse from "html-react-parser";

export type MeydanKeyBenefitsData = {
  title: string;
  description?: string;
  slides: {
    id: number;
    title: string;
    data_description?: string;
    items: (string | { title?: string; description?: string })[];
    media: {
      path: string;
      alt: string;
    };
  }[];
};

export type MeydanKeyBenefitsProps = {
  data: MeydanKeyBenefitsData;
  variant?:
    | "default"
    | "Vat-Services"
    | "technology"
    | "RAK-Offshore"
    | "JAFZA-Freezone";
};

export default function MeydanKeyBenefits({
  data,
  variant = "default",
}: MeydanKeyBenefitsProps) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={cn(
        "w-full h-auto py-[45px_60px] sm:py-[35px_50px] xl:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_90px] block",
        variant === "technology" && "max-sm:py-[46px_5px]",
        variant === "JAFZA-Freezone" && "max-sm:pb-0",
        variant === "Vat-Services" && "py-[45px] xl:py-[94px_56px]",
      )}
    >
      <div className="container">
        <div className="typography">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-[30px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]"
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              size="p5"
              className="font-normal text-[#4E4E4E] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[55px]"
            >
              {data?.description}
            </Text>
          )}
        </div>
      </div>
      <div className="container max-sm:bg-[#f2fafe] max-sm:rounded-[12px]">
        <div
          className={cn(
            "w-full h-auto py-[20px_50px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px] sm:bg-[#f5fbfe] sm:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[15px] overflow-hidden block",
            variant === "RAK-Offshore" &&
              "max-sm:bg-linear-to-t from-[#f5fbfe] via-white to-white  xl:!py-[65px]",
            variant === "JAFZA-Freezone" &&
              "max-sm:bg-linear-to-t from-[#f5fbfe] via-white to-white  xl:!py-[38.5px] xl:min-h-[477px]",
          )}
        >
          <div
            className={cn(
              "w-full h-auto sm:pl-[25px] xl:pl-[42px] 3xl:px-[40px] mb-[30px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]",
              variant === "RAK-Offshore" && "xl:pl-[40px] xl:mb-[40px]",
            )}
          >
            <Swiper
              slidesPerView="auto"
              spaceBetween={40}
              slidesOffsetAfter={20}
              freeMode={true}
              slideToClickedSlide={true}
              centeredSlides={false}
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              breakpoints={{
                640: {
                  spaceBetween: 25,
                  slidesOffsetAfter: 25,
                },
                1280: {
                  spaceBetween: 35,
                  slidesOffsetAfter: 30,
                },
                1536: {
                  spaceBetween: 40,
                  slidesOffsetAfter: 40,
                },
                1920: {
                  spaceBetween: 40,
                },
              }}
              className="ThumbSlider !overflow-visible"
            >
              {data?.slides?.map((item, index) => (
                <SwiperSlide
                  key={item?.id}
                  className="!w-auto !h-auto"
                  onClick={() => {
                    mainSwiper?.slideTo(index);
                    thumbsSwiper?.slideTo(index);
                  }}
                >
                  <div
                    className={cn(
                      "text-[16px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] leading-normal font-normal text-[#4E4E4E] pb-[5px] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#1C5396]/80 relative z-0 before:content-[''] before:w-full before:h-[2px] 2xl:before:h-[3px] before:bg-[#FFC916] before:opacity-0 before:absolute before:z-[1] before:inset-[auto_0_0_0]",
                      variant === "technology" && "font-medium",
                      activeIndex === index &&
                        "font-semibold !text-[#1C5396] before:opacity-100",
                    )}
                  >
                    {item?.title}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className={cn(
              "w-full h-auto sm:px-[25px] xl:px-[40px] 3xl:px-[40px]",
              variant === "RAK-Offshore" && "xl:px-[40px]",
            )}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              effect="fade"
              modules={[Thumbs, EffectFade]}
              fadeEffect={{ crossFade: true }}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="MainSlider"
            >
              {data?.slides?.map((item, index) => (
                <SwiperSlide
                  key={item?.id}
                  className={cn(
                    "h-0",
                    activeIndex === index ? "!h-auto" : "!h-0",
                  )}
                >
                  <div
                    className={cn(
                      "md:gap-[15px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[35px] flex flex-col-reverse md:flex-row ",
                      variant === "Vat-Services" &&
                        "md:gap-[20px] xl:gap-[50px] 2xl:gap-[60px] 3xl:gap-[75px]",
                      variant === "RAK-Offshore" && "xl:gap-[0px]",
                      variant === "JAFZA-Freezone" && "xl:gap-[0px]",
                    )}
                  >
                    <div
                      className={cn(
                        "w-full lg:w-1/2 xl:pt-[16px]",
                        variant === "technology" && "lg:pr-[40px]",
                        variant === "RAK-Offshore" && "xl:w-[40%]",
                        variant === "JAFZA-Freezone" && "xl:w-[calc(100%-579px)]",
                      )}
                    >
                      {variant === "technology" && (
                        <div className="text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mb-[28px]">
                          {item?.data_description}
                        </div>
                      )}
                      <ul
                        className={cn(
                          "space-y-[20px] sm:space-y-[15px] xl:space-y-[20px] 2xl:space-y-[25px] 3xl:space-y-[30px]",
                          variant === "technology" && "xl:space-y-[15px]",
                        )}
                      >
                        {item?.items?.map((item, index) => (
                          <li
                            key={index}
                            className={cn(
                              "w-full h-auto pl-[30px] sm:pl-[25px] xl:pl-[33px] 2xl:pl-[35px] 3xl:pl-[40px] relative z-0 before:content-[''] before:w-[20px] sm:before:w-[18px] xl:before:w-[20px] 3xl:before:w-[25px] before:h-auto before:aspect-square before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3328%2024.4444C19.4693%2024.4444%2024.4439%2019.4698%2024.4439%2013.3333C24.4439%207.19678%2019.4693%202.22217%2013.3328%202.22217C7.19629%202.22217%202.22168%207.19678%202.22168%2013.3333C2.22168%2019.4698%207.19629%2024.4444%2013.3328%2024.4444Z%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] before:bg-no-repeat before:bg-contain before:absolute before:inset-[0_auto_0_0] before:translate-y-[2px] sm:before:translate-y-[4px]",
                              variant === "Vat-Services" &&
                                "pb-[10px] sm:pb-[15px] 2xl:pb-[20px] 3xl:pb-[25px] my-[10px] sm:my-[15px] 2xl:my-[20px] 3xl:my-[25px] border-b-1 border-[#DEDEDE] last:pb-0 last:mb-0 last:border-0",
                            )}
                          >
                            {typeof item === "string" ? (
                              <span
                                className={cn(
                                  "text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-medium text-black max-md:[&_br]:hidden",
                                  variant === "technology" &&
                                    "max-sm:text-[14px] text-[#4E4E4E] font-normal",
                                )}
                              >
                                {parse(item)}
                              </span>
                            ) : (
                              <div
                                className={cn(
                                  "[&_span]:text-[16px] xl:[&_span]:text-[18px] 2xl:[&_span]:text-[20px] 3xl:[&_span]:text-[24px] [&_span]:leading-normal [&_span]:font-medium [&_span]:text-black w-full h-auto gap-[5px] flex flex-col",
                                  variant === "technology" &&
                                    "[&_span]:!text-[#4E4E4E] [&_span]:!font-normal",
                                )}
                              >
                                {item?.title && <span>{item?.title}</span>}
                                {item?.description && (
                                  <span className="!leading-[1.7] !font-normal !text-[#4E4E4E]">
                                    {item?.description}
                                  </span>
                                )}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={cn("w-full lg:w-1/2",variant === "RAK-Offshore" && "xl:w-[60%]", variant === "JAFZA-Freezone" && "xl:w-[579px]" )}>
                      <div
                        className={cn(
                          "w-full max-sm:h-[216px] sm:h-full max-sm:aspect-[340/316] aspect-[580/315] max-md:mb-[35px] rounded-[12px] xl:rounded-[12px] 2xl:rounded-[15px] overflow-hidden block",
                          variant === "technology" && "xl:aspect-[550/335]",
                          variant === "RAK-Offshore" &&
                            "max-sm:h-[316px] xl:h-[286px] xl:max-w-[579px] xl:ml-auto",
                          variant === "JAFZA-Freezone" &&
                            "max-w-full xl:min-h-[315px]",
                        )}
                      >
                        <Image
                          src={item?.media?.path}
                          alt={item?.media?.alt}
                          width={770}
                          height={variant === "technology" ? 450 : 380}
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
