import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { WhyBuildItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeWhyBuildProps = {
  data: {
    title: string;
    description: string;
    items: WhyBuildItem[];
  };
};

export default function CorporateServicesUaeWhyBuild({
  data,
}: CorporateServicesUaeWhyBuildProps) {
  return (
    <section className="w-full block py-8 sm:py-10 xl:py-[70px_50px] 2xl:py-[85px_65px] bg-linear-to-t from-[#f1fafe] via-white to-white">
      <div className="container">
        <div className="text-center w-full max-w-[576px] xl:max-w-[840px] 2xl:max-w-[1080px] 3xl:max-w-[1280px] mx-auto mb-6 xl:mb-10 2xl:mb-12">
          <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
            {data.title}
          </Heading>
          <Text
            as="p"
            size="p1"
            className="text-[#4e4e4e] mb-4 xl:mb-6 2xl:mb-8"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 2xl:gap-10">
          {data.items.map((item) => (
            <div key={item.id}>
              <div className="group w-full h-full bg-white rounded-[10px] p-2 xl:p-5 2xl:p-4 shadow-[0px_0px_5px_0_rgba(28,83,150,0.1)] hover:shadow-[0px_10px_30px_rgba(28,83,150,0.1)] transition-all duration-300">
                <div className="w-[56px] 2xl:w-[55px] aspect-square mb-2.5 2xl:mb-3 transition-transform group-hover:scale-105">
                  <Image
                    src={item.media.path}
                    alt={item.media.alt}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <Heading
                  as="div"
                  size="h5"
                  className="text-black mb-2 2xl:mb-2.5"
                >
                  {item.title}
                </Heading>
                <Text as="div" size="p1" className="text-[#2e2e2e]">
                  {parse(item?.description)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
