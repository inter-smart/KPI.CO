"use client";
import { Heading } from "@/components/utils/typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export type VatAdvisoryData = {
  title: string;
  description: string;
  service_list: {
    id: number;
    title: string;
    description: string;
  }[];
};

interface VatAdvisoryProps {
  data: VatAdvisoryData;
}

export default function VatAdvisory({ data }: VatAdvisoryProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2500, stopOnInteraction: true })],
  );
  return (
    <section className="w-full h-auto py-[45px_20px] sm:py-[35px_50px] xl:py-[40px_60px] 2xl:py-[50px_70px] 3xl:py-[60px_90px] bg-[#F9FAFB] max-sm:rounded-[20px] overflow-hidden block">
      <div className="container">
        <div className="w-full h-auto mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]"
          >
            {data?.title}
          </Heading>
          <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-[1.8] font-normal text-[#4E4E4E]">
            {data?.description}
          </div>
        </div>
        <div
          ref={emblaRef}
          className="w-full max-w-full"
          style={{ clipPath: "inset(-100vw -100vw -100vw 0px)" }}
        >
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.service_list?.map((item) => (
              <div
                key={`advisory-${item?.id}`}
                className="mr-[30px] sm:mr-[20px] xl:mr-[25px] 2xl:mr-[30px] 3xl:mr-[40px] flex-[0_0_90%] sm:flex-[0_0_35%] xl:flex-[0_0_28%] 2xl:flex-[0_0_30%] min-w-0 select-none"
              >
                <div className="w-full h-full gap-[25px] sm:gap-[20px] 2xl:gap-[25px] 3xl:gap-[40px] p-[30px_20px] sm:p-[25px_20px] xl:p-[30px_20px] 2xl:p-[35px_25px] 3xl:p-[40px_30px] bg-white rounded-[14px] xl:rounded-[12px] 2xl:rounded-[20px] border-1 border-black/10 overflow-hidden flex flex-col">
                  <div className="text-[16px] sm:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px] leading-normal font-medium text-[#1C5396]">
                    {item?.title}
                  </div>
                  <div className="text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#4E4E4E]">
                    {item?.description}
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
