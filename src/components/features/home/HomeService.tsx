import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import type { ServicesData } from "@/app/page";

type HomeServiceProps = {
  data: ServicesData;
};

export default function HomeService({ data }: HomeServiceProps) {
  return (
    <section className="bg-white py-[20px_70px] lg:py-[40px_70px] 3xl:py-[40px_100px]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-[40px] md:mb-[50px]">
          <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
            {data.title}
          </Heading>

          <div className="text-[12px] xl:text-[18px] 2xl:text-[19px] leading-normal font-normal line-clamp-5 text-[#4e4e4e] mb-2 xl:mb-3 2xl:mb-4">
            {data.description}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] xl:gap-[42px]">
          {data.serviceList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[10px]  xl:rounded-[12px] p-[23px_18px] xl:p-[23px_20px_25px] border border-gray-100 shadow-[0px_0px_5px_rgba(0,0,0,0.1)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-[52.48px] xl:w-[52px] 2xl:w-[55px] 3xl:w-[70px] h-[52.48px] xl:h-[52px] 2xl:h-[55px] 3xl:h-[70px] bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-[8px] flex items-center justify-center mb-[16px] transition-transform ">
                <Image
                  src={service.media.path}
                  width={32}
                  height={32}
                  alt={service.media.alt}
                  className="max-w-[24px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[32px]"
                />
              </div>

              {/* Content */}
              <h3 className="text-[18px] xl:text-[20px] font-semibold text-gray-900 mb-[12px] xl:mb-[15px]">
                {service.title}
              </h3>
              <p className="text-[14px] xl:text-[16px] text-gray-600 leading-normal mb-[25px] xl:mb-[18px] flex-grow">
                {service.description}
              </p>
              <div>
                <Button
                  className="text-[16px] xl:text-[16px] 3xl:text-[21px] text-[#3570B8] font-semibold transition-all duration-500  !p-0 !h-auto !bg-transparent !scale-none "
                  asChild
                >
                  <Link href={service.button.link}>
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
