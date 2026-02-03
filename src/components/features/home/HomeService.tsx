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

          <div className="text-[12px] xl:text-[14px] 2xl:text-[19px] leading-normal font-normal line-clamp-5 text-[#4e4e4e] mb-2 xl:mb-3 2xl:mb-4">
            {data.description}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {data.serviceList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[10px]  xl:rounded-[12px] p-[30px] border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-[70px] h-[70px] bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-[8px] flex items-center justify-center mb-[20px] transition-transform group-hover:scale-105">
                <Image
                  src={service.media.path}
                  width={32}
                  height={32}
                  alt={service.media.alt}
                />
              </div>

              {/* Content */}
              <h3 className="text-[17px] 2xl:text-[20px] 3xl:text-[26px] font-semibold text-gray-900 mb-[15px]">
                {service.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-[25px] flex-grow">
                {service.description}
              </p>
              <div>
                <Button
                  className="text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-[#3570B8] font-semibold transition-all duration-500 mt-auto p-0 h-auto bg-transparent hover:bg-transparent"
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
