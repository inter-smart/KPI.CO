"use client";
import parse from "html-react-parser";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/utils/typography";
import { cn } from "@/lib/utils";

export type VatAdvisoryData = {
  title: string;
  description: string;
  service_list: {
    id: number;
    title: string;
    description: string;
  }[];
};

type VatAdvisoryVariant = "default" | "difc-formation" | "VatServicesUae";

interface VatAdvisoryProps {
  data: VatAdvisoryData;
  variant?: VatAdvisoryVariant;
}

export default function VatAdvisory({ data, variant="default" }: VatAdvisoryProps) {
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
    <section className={cn("w-full h-auto py-[45px_40px] sm:py-[35px_50px] xl:py-[40px_70px] 2xl:py-[50px_70px] 3xl:py-[60px_90px] bg-[#F9FAFB] max-sm:rounded-[20px] overflow-hidden block" , 
         variant === "VatServicesUae" && "py-[45px] xl:py-[48px]"
    )}>
      <div className="container">
        <div className="w-full h-auto mb-[30px] xl:mb-[40px] 3xl:mb-[50px]">
          <Heading
            as="div"
            size="h2"
            className="text-[#1C5396] mb-[20px] xl:mb-[28px] 2xl:mb-[30px] 3xl:mb-[40px]"
          >
            {data?.title}
          </Heading>
          <div className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-[150%] font-normal text-[#4E4E4E]">
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
                className="mr-[30px] sm:mr-[20px] xl:mr-[25px] 2xl:mr-[30px] 3xl:mr-[40px] flex-[0_0_303px] sm:flex-[0_0_35%] xl:flex-[0_0_338px] min-w-0 select-none"
              >
                <div className={cn("w-full h-[300px] sm:h-full xl:h-full  p-[30px_20px] sm:p-[25px_20px] xl:p-[30px_20px] 2xl:p-[35px_25px] 3xl:p-[40px_30px] bg-white rounded-[14px] xl:rounded-[12px] 2xl:rounded-[20px] border-1 border-black/10 overflow-hidden flex flex-col",
                   variant === "VatServicesUae" && "xl:p-[31px_22px_30px]",
                   variant === "difc-formation" && "xl:min-h-[250px] ",
                   )}>
                  <div className={cn("text-[16px] sm:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px] leading-normal font-medium text-[#1C5396]",
                    variant === "difc-formation" && "xl:text-[24px] xl:mb-[32px] ",
                    variant === "VatServicesUae" && "xl:text-[24px] xl:leading-[32px] mb-[24px] xl:mb-[40px]"
                  )}>
                    {parse(item?.title)}
                  </div>
                  <div className={cn("text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[150%] font-normal text-[#4E4E4E]",
                    variant === "difc-formation" && "leading-relaxed",
                  )}>
                    {parse(item?.description)}
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
