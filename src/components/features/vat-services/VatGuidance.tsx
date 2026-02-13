import Image from "next/image";
import { Heading } from "@/components/utils/typography";

export type VatGuidanceData = {
  title: string;
  description: string;
  highlighted_text: string;
  service_list: string[];
  media: {
    path: string;
    alt: string;
  };
};

interface VatGuidanceProps {
  data: VatGuidanceData;
}

export default function VatGuidance({ data }: VatGuidanceProps) {
  return (
    <section className="w-full h-auto py-[40px_50px] sm:py-[70px_50px] xl:py-[80px_60px] 2xl:py-[100px_70px] 3xl:py-[120px_80px] block">
      <div className="container">
        <div className="[--image-size:100%] md:[--image-size:320px] lg:[--image-size:370px] xl:[--image-size:450px] 2xl:[--image-size:550px] 3xl:[--image-size:680px] flex flex-wrap">
          <div className="w-full md:w-[calc(100%-var(--image-size))] md:pr-[20px] xl:pr-[25px] 2xl:pr-[30px] 3xl:pr-[40px]">
            <div className="w-full h-auto block">
              <Heading
                as="h2"
                size="h2"
                className="text-[#1C5396] mb-[30px] sm:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px] xl:pr-[70px]"
              >
                {data?.title}
              </Heading>
              <div className="w-full h-auto aspect-[330/375] mb-[25px] rounded-[10px] overflow-hidden block md:hidden">
                <Image
                  src={data?.media?.path || "images/placeholder.png"}
                  alt={data?.media?.alt || "Vat Guidance"}
                  width={680}
                  height={1070}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-[1.8] font-normal text-[#4E4E4E] xl:pr-[40px] mb-[25px] sm:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                {data?.description}
              </div>
              <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mb-[25px] sm:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                {data?.highlighted_text}
              </div>
              <ul className="w-full h-auto">
                {data?.service_list?.map((item, index) => (
                  <li
                    key={index}
                    className="w-full h-auto p-[15px_15px_15px_40px] xl:p-[20px_20px_20px_40px] 2xl:p-[25px_25px_25px_50px] 3xl:p-[30px_30px_30px_50px] mb-0 border-b-1 border-[#DEDEDE] sm:last:border-b-0 relative z-0 before:content-[''] before:w-[25px] xl:before:w-[25px] 2xl:before:w-[30px] 3xl:before:w-[35px] before:h-auto before:aspect-square before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2243%22%20height%3D%2243%22%20viewBox%3D%220%200%2043%2043%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M37.1909%2022.4355C37.1063%2022.2173%2036.9794%2022.0179%2036.8176%2021.8488L31.4842%2016.5155C31.1495%2016.1808%2030.6954%2015.9927%2030.222%2015.9927C29.7486%2015.9927%2029.2945%2016.1808%2028.9598%2016.5155C28.625%2016.8503%2028.437%2017.3043%2028.437%2017.7777C28.437%2018.2512%2028.625%2018.7052%2028.9598%2019.04L31.2709%2021.3333H14.222C13.7505%2021.3333%2013.2983%2021.146%2012.9649%2020.8126C12.6315%2020.4792%2012.4442%2020.027%2012.4442%2019.5555V12.4444C12.4442%2011.9729%2012.2569%2011.5207%2011.9235%2011.1873C11.5901%2010.8539%2011.1379%2010.6666%2010.6664%2010.6666C10.195%2010.6666%209.74277%2010.8539%209.40937%2011.1873C9.07597%2011.5207%208.88867%2011.9729%208.88867%2012.4444V19.5555C8.88867%2020.97%209.45058%2022.3266%2010.4508%2023.3268C11.451%2024.3269%2012.8075%2024.8888%2014.222%2024.8888H31.2709L28.9598%2027.1822C28.7932%2027.3475%2028.6609%2027.5441%2028.5706%2027.7607C28.4804%2027.9774%2028.4339%2028.2097%2028.4339%2028.4444C28.4339%2028.6791%2028.4804%2028.9115%2028.5706%2029.1281C28.6609%2029.3447%2028.7932%2029.5414%2028.9598%2029.7066C29.1251%2029.8733%2029.3217%2030.0055%2029.5383%2030.0958C29.755%2030.186%2029.9873%2030.2325%2030.222%2030.2325C30.4567%2030.2325%2030.6891%2030.186%2030.9057%2030.0958C31.1223%2030.0055%2031.319%2029.8733%2031.4842%2029.7066L36.8176%2024.3733C36.9794%2024.2042%2037.1063%2024.0049%2037.1909%2023.7866C37.3687%2023.3538%2037.3687%2022.8683%2037.1909%2022.4355Z%22%20fill%3D%22%235280CA%22/%3E%3C/svg%3E')] before:bg-no-repeat before:bg-contain before:absolute before:inset-[0_auto_0_0] before:translate-y-[15px] xl:before:translate-y-[20px] 2xl:before:translate-y-[25px] 3xl:before:translate-y-[30px]"
                  >
                    <span className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-medium text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[var(--image-size)] max-md:hidden">
            <div className="w-full h-full sm:rounded-[10px] 2xl:rounded-[15px] overflow-hidden block">
              <Image
                src={data?.media?.path || "images/placeholder.png"}
                alt={data?.media?.alt || "Vat Guidance"}
                width={680}
                height={1070}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
