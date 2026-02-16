import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/utils/typography";

export type VatHealthData = {
  title: string;
  description: string;
  health_list: string[];
  button: {
    label: string;
    link: string;
  };
  media: {
    path: string;
    alt: string;
  };
};

interface VatHealthProps {
  data: VatHealthData;
}

export default function VatHealth({ data }: VatHealthProps) {
  return (
    <section className="w-full h-auto py-[45px_40px] sm:py-[35px_50px] xl:py-[40px_60px] 2xl:py-[50px_70px] 3xl:py-[70px_100px] block">
      <div className="container">
        <div className="[--image-size:100%] lg:[--image-size:360px] xl:[--image-size:450px] 2xl:[--image-size:550px] 3xl:[--image-size:680px] p-[30px_15px_50px_15px] sm:p-[15px_35px_15px_25px] xl:p-[20px_50px_20px_35px] 3xl:p-[30px_70px_30px_40px] bg-gradient-to-tl from-[#fefdf1] to-white rounded-[15px] sm:rounded-[10px] xl:rounded-[15px] 2xl:rounded-[20px] border-2 border-[#FFCB18] overflow-hidden flex flex-wrap">
          <div className="w-[var(--image-size)] lg:w-[calc(100%-var(--image-size))] lg:pr-[20px] xl:pr-[120px] 2xl:pr-[140px] 3xl:pr-[175px] max-lg:mb-[30px]">
            <div className="w-full h-auto mb-[15px] sm:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
              <Heading
                as="h2"
                size="h2"
                className="text-[#1C5396] mb-[15px] 3xl:mb-[20px]"
              >
                {data?.title}
              </Heading>
              <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal font-normal text-[#364153] [&_b]:font-medium [&_p]:mb-[10px] xl:[&_p]:mb-[15px] 3xl:[&_p]:mb-[20px]">
                {data?.description}
              </div>
            </div>
            <ul className="space-y-3.75 lg:space-y-4.5 2xl:space-y-5 mb-[25px] sm:mb-[20px] xl:mb-[35px] 2xl:mb-[50px]">
              {data?.health_list.map((item, index) => (
                <li
                  key={index}
                  className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[21px] text-[#364153] pl-[25px] 2xl:pl-[30px] 3xl:pl-[35px] mb-[10px] xl:mb-[13px] 3xl:mb-[23px] relative"
                >
                  <span className="absolute inset-0 w-[16px] 2xl:w-[20px] 3xl:w-[23px] h-[16px] 2xl:h-[20px] 3xl:h-[23px] right-auto top-[3px] 2xl:top-[4px]">
                    <Image
                      src="/images/icon-check-yellow.svg"
                      alt="check icon"
                      width={25}
                      height={25}
                      className="w-full h-full object-contain"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="yellow"
              size="lg"
              className="text-[16px] xl:text-[14px] 2xl:text-[17px] min-w-[150px] xl:min-w-[132px] 2xl:min-w-[160px] 3xl:min-w-[200px] h-11! xl:h-10! 2xl:h-12! 3xl:h-15! px-[30px] sm:px-[20px] xl:px-[30px] 2xl:px-[35px] 3xl:px-[40px] lg:mb-[15px] 2xl:mb-[25px] max-sm:mt-3"
              asChild
            >
              <Link
                href={data?.button?.link || "/"}
                target={data?.button?.link ? "_blank" : "_self"}
              >
                {data?.button?.label}
              </Link>
            </Button>
          </div>
          <div className="w-[var(--image-size)]">
            <div className="w-full h-auto lg:h-full max-lg:aspect-[310/420] rounded-[10px] 2xl:rounded-[15px] overflow-hidden block">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt || "VAT Health Image"}
                width={680}
                height={560}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
