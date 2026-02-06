import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import { GetInTouchItem } from "@/app/blog/[slug]/page";

type BlogGetInTouchProps = {
  data: GetInTouchItem;
};
export default function BlogGetInTouch({ data }: BlogGetInTouchProps) {
  return (
    <section className="w-full h-auto py-10 lg:py-13 2xl:py-17 3xl:py-22 block">
      <div className="container">
        <div className="w-full lg:max-w-237.5 2xl:max-w-285 3xl:max-w-356.25 h-auto p-[40px_25px] md:p-[50px_30px] lg:p-[60px_45px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] mx-auto bg-gradient-to-b from-[#3EB0EA] via-[#389FDB] to-[#1C5396] rounded-[20px] lg:rounded-[17px] 2xl:rounded-[25px] relative z-0 flex flex-wrap items-center">
          <div className="w-[160px] md:w-[82%] h-[150px] md:h-auto aspect-square max-md:mt-auto pointer-events-none absolute -z-1 inset-[0_0_0_auto]">
            <Image
              src="/images/get-touch-overlay.svg"
              alt="overlay"
              width={500}
              height={500}
              className="w-full h-full object-cover max-md:hidden block"
            />
            <Image
              src="/images/corporate-cta-overlay-mobile.svg"
              alt="overlay"
              width={500}
              height={500}
              className="w-full h-full object-cover scale-[1.2] max-md:block hidden"
            />
          </div>
          <div className="w-full lg:w-[60%] max-lg:mb-3.75">
            <Heading
              as="h2"
              size="h2"
              className="max-sm:text-[20px] text-white text-center sm:text-left mb-3.75 lg:mb-2.5"
            >
              {data?.title}
            </Heading>
            <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal font-medium text-white text-center sm:text-left md:max-w-[80%]">
              {parse(data?.description)}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <Button
              className="text-[13px] sm:text-[14px] lg:text-[17px] 2xl:text-[20px] 3xl:text-[26px] leading-none !font-medium text-black min-w-[160px] xl:min-w-[178px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px] bg-[#FFC916] max-sm:mx-auto"
              asChild
            >
              <Link href={data.button.link}>{data.button.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
