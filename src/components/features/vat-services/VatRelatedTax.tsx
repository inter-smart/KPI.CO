"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/utils/typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export type VatRelatedTaxData = {
  title: string;
  tax_list: {
    id: number;
    title: string;
    link: {
      url: string;
      target?: boolean;
    };
    media: {
      path: string;
      alt: string;
    };
  }[];
};

interface VatRelatedTaxProps {
  data: VatRelatedTaxData;
  variant?: "sop" | "default";
}

export default function VatRelatedTax({
  data,
  variant = "default",
}: VatRelatedTaxProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
  );
  return (
    <section className="w-full h-auto py-[45px] sm:py-[30px_50px] xl:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_100px] bg-[#F9FAFB] block">
      <div className="container">
        <div className="w-full h-auto mb-[25px] sm:mb-[30px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]">
          <Heading as="h2" size="h2" className="text-[#1C5396]">
            {data?.title}
          </Heading>
        </div>
        <div ref={emblaRef} className="w-full max-w-full sm:overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.tax_list?.map((item) => (
              <div
                key={`tax-${item?.id}`}
                className={cn(
                  "mr-[30px] mr-[25px] sm:mr-[15px] xl:mr-[20px] 2xl:mr-[25px] 3xl:mr-[30px] flex-[0_0_80%] sm:flex-[0_0_40%] xl:flex-[0_0_32.1%] 2xl:flex-[0_0_32%] min-w-0 select-none",
                  variant === "sop" && "lg:!flex-[0_0_23.5%]",
                )}
              >
                <Link
                  href={item?.link?.url || "#"}
                  target={item?.link?.target ? "_blank" : "_self"}
                  className="w-full h-auto aspect-[510/640] p-[25px_30px] sm:p-[35px_20px] xl:p-[40px_30px] 2xl:p-[50px_35px] 3xl:p-[60px_40px] sm:pr-[20px] rounded-[10px] 2xl:rounded-[15px] overflow-hidden block relative z-0 before:content-[''] before:w-[30px] sm:before:w-[25px] xl:before:w-[30px] 2xl:before:w-[35px] 3xl:before:w-[40px] before:h-auto before:aspect-square before:m-[25px_30px] sm:before:m-[35px_20px] xl:before:m-[40px_30px] 2xl:before:m-[50px_35px] 3xl:before:m-[60px_40px] before:bg-[url(data:image/svg+xml,%3Csvg%20width%3D%2243%22%20height%3D%2243%22%20viewBox%3D%220%200%2043%2043%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M32.0001%2019.2357C31.5286%2019.2357%2031.0764%2019.423%2030.743%2019.7564C30.4096%2020.0898%2030.2223%2020.5419%2030.2223%2021.0134V33.7779C30.2223%2034.2494%2030.035%2034.7016%2029.7016%2035.035C29.3682%2035.3684%2028.916%2035.5557%2028.4446%2035.5557H8.889C8.4175%2035.5557%207.96532%2035.3684%207.63192%2035.035C7.29852%2034.7016%207.11122%2034.2494%207.11122%2033.7779V14.2223C7.11122%2013.7508%207.29852%2013.2986%207.63192%2012.9653C7.96532%2012.6319%208.4175%2012.4446%208.889%2012.4446H21.6534C22.1249%2012.4446%2022.5771%2012.2573%2022.9105%2011.9239C23.2439%2011.5905%2023.4312%2011.1383%2023.4312%2010.6668C23.4312%2010.1953%2023.2439%209.74309%2022.9105%209.4097C22.5771%209.0763%2022.1249%208.889%2021.6534%208.889H8.889C7.47451%208.889%206.11796%209.4509%205.11776%2010.4511C4.11757%2011.4513%203.55566%2012.8078%203.55566%2014.2223V33.7779C3.55566%2035.1924%204.11757%2036.5489%205.11776%2037.5491C6.11796%2038.5493%207.47451%2039.1112%208.889%2039.1112H28.4446C29.859%2039.1112%2031.2156%2038.5493%2032.2158%2037.5491C33.216%2036.5489%2033.7779%2035.1924%2033.7779%2033.7779V21.0134C33.7779%2020.5419%2033.5906%2020.0898%2033.2572%2019.7564C32.9238%2019.423%2032.4716%2019.2357%2032.0001%2019.2357ZM38.969%204.65789C38.7886%204.22349%2038.4434%203.87829%2038.009%203.69789C37.7953%203.60679%2037.5658%203.55847%2037.3334%203.55566H26.6668C26.1953%203.55566%2025.7431%203.74297%2025.4097%204.07636C25.0763%204.40976%2024.889%204.86195%2024.889%205.33344C24.889%205.80494%2025.0763%206.25712%2025.4097%206.59052C25.7431%206.92392%2026.1953%207.11122%2026.6668%207.11122H33.049L14.7379%2025.4046C14.5713%2025.5698%2014.439%2025.7664%2014.3487%2025.9831C14.2585%2026.1997%2014.212%2026.4321%2014.212%2026.6668C14.212%2026.9015%2014.2585%2027.1338%2014.3487%2027.3505C14.439%2027.5671%2014.5713%2027.7637%2014.7379%2027.929C14.9032%2028.0956%2015.0998%2028.2279%2015.3164%2028.3181C15.5331%2028.4084%2015.7654%2028.4549%2016.0001%2028.4549C16.2348%2028.4549%2016.4672%2028.4084%2016.6838%2028.3181C16.9004%2028.2279%2017.0971%2028.0956%2017.2623%2027.929L35.5557%209.61789V16.0001C35.5557%2016.4716%2035.743%2016.9238%2036.0764%2017.2572C36.4098%2017.5906%2036.8619%2017.7779%2037.3334%2017.7779C37.8049%2017.7779%2038.2571%2017.5906%2038.5905%2017.2572C38.9239%2016.9238%2039.1112%2016.4716%2039.1112%2016.0001V5.33344C39.1084%205.10113%2039.0601%204.87161%2038.969%204.65789Z%22%20fill%3D%22white%22/%3E%3C/svg%3E)] before:no-repeat before:bg-contain before:absolute before:z-2 before:inset-[0_0_auto_auto] after:content-[''] after:w-full after:h-full after:bg-linear-to-t after:from-[#1C5396] after:to-transparent after:absolute after:z-1 after:inset-0"
                >
                  <Image
                    src={item?.media?.path || "/images/placeholder.png"}
                    alt={item?.media?.alt || "Related Tax Image"}
                    width={510}
                    height={630}
                    className="w-full h-full object-cover absolute -z-1 inset-0"
                  />
                  <div className="text-[24px] sm:text-[18px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[32px] leading-normal font-medium text-white w-full h-full relative z-2 flex items-end">
                    {item?.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
