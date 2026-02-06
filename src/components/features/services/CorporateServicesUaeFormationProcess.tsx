import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { ProcessStep } from "@/app/corporate-services-uae/page";
import Image from "next/image";

type CorporateServicesUaeFormationProcessProps = {
  data: {
    title: string;
    sub_title: string;
    description: string;
    steps: ProcessStep[];
  };
};

export default function CorporateServicesUaeFormationProcess({
  data,
}: CorporateServicesUaeFormationProcessProps) {
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

        <Heading
          as="div"
          size="h4"
          className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px] font-semibold text-black mb-4 xl:mb-6 2xl:mb-8"
        >
          {data.sub_title}
        </Heading>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2">
            {data?.steps?.map((item) => (
              <div key={item.id}>
                <div className="w-full pl-4 xl:pl-12.5 2xl:pl-15 relative z-0">
                  <div className="w-3 xl:w-4 2xl:w-6 aspect-square rounded-full bg-linear-to-t from-[#3eb0ea] to-[#1c5396] absolute z-0 top-0 left-0">
                    <span className="w-full h-full rounded-full bg-white" />
                  </div>
                  <Heading
                    as="div"
                    size="h5"
                    className="font-normal text-[#3eb0ea] mb-0.1"
                  >
                    Step one
                  </Heading>
                  <Heading
                    as="div"
                    size="h4"
                    className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px] font-semibold text-[#1c5396]"
                  >
                    {item.title}
                  </Heading>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-1/2">
            {data?.steps?.map((step) => (
              <div key={step.id}>
                <div className="w-full bg-white rounded-[15px] flex items-center p-8 xl:p-12 2xl:p-15 shadow-[0_2px_5px_0_rgba(0,0,0,0.15)] relative z-0">
                  <Image
                    src={"/images/corporate-services-formationProcess-bg.png"}
                    alt={"corporate-services-formationProcess-bg"}
                    width={400}
                    height={740}
                    className="w-[200px] xl:w-[240px] 2xl:w-[300px] object-contain absolute -z-1 top-0 right-0 bottom-0"
                  />
                  <div>
                    <Heading as="h3" size="h3" className="text-[#1C5396] mb-4">
                      {step.step}
                    </Heading>
                    <Text as="p" size="p1" className="text-[#4e4e4e] mb-4">
                      {parse(step.description)}
                    </Text>
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
