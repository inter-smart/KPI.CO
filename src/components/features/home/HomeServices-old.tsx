import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import type { ServicesData } from "@/app/page";

type HomeServicesProps = {
  data: ServicesData;
};

export default function HomeServices({ data }: HomeServicesProps) {
  return (
    <section className="w-full h-auto py-[50px_100px] block">
      <div className="container">
        <div className="w-full h-auto mb-17.5">
          <Heading as="h2" size="h2" className="text-[#1C5396] mb-10">
            {data.title}
          </Heading>
          <div className="text-[24px] leading-normal font-normal text-[#4E4E4E]">
            {data.description}
          </div>
        </div>
        <div className="w-full h-auto -mx-6.25 flex flex-wrap">
          {data.serviceList.map((item) => (
            <div key={item.id} className="w-1/3 h-auto p-6.25">
              <div className="w-full h-full p-[30px_25px] rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.1)] overflow-hidden block">
                <div className="w-18 h-auto aspect-square p-4.5 mb-5 bg-linear-to-t from-[#5280CA] to-[#003268] rounded-[8px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.media.path || "/images/placeholder.png"}
                    alt={item.media.alt || "Service icon"}
                    width={50}
                    height={50}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[26px] leading-normal font-semibold text-black mb-3.75">
                  {item.title}
                </div>
                <div className="text-[22px] leading-normal font-normal text-[#4E4E4E] mb-6.5">
                  {item.description}
                </div>
                <Link
                  href={item.button.link || "#"}
                  target={item.button.target ? "_self" : "_blank"}
                  className="text-[22px] leading-normal font-semibold text-[#3570B8] transition-opacity duration-200 hover:opacity-70"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
