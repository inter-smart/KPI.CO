import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import type { GetInTouch } from "@/app/blog/[slug]/page";


type BlogGetInTouchProps = {
  data: GetInTouch;
};

export default function BlogGetInTouch({ data }: BlogGetInTouchProps) {
  return (
    <section className="w-full h-auto block py-10 lg:py-13 2xl:py-17 3xl:py-22">
      <div className="container">
        <div className="w-full lg:max-w-237.5 2xl:max-w-285 3xl:max-w-356.25 h-auto mx-auto rounded-[20px] lg:rounded-[17px] 2xl:rounded-[25px] overflow-hidden relative z-0 flex flex-wrap items-center p-[50px_30px] lg:p-[60px_45px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]">
          <div className="w-full h-full aspect-square pointer-events-none absolute -z-1 inset-0">
            <Image
              src={data?.images?.overlay || ""}
              alt="overlay"
              width={500}
              height={500}
              className="w-full h-full object-cover max-md:hidden block"
            />
            <Image
              src={data?.images?.overlayMobile || ""}
              alt="overlay"
              width={500}
              height={500}
              className="w-full h-full object-cover max-md:block hidden"
            />
          </div>
          <div className="w-full max-lg:mb-3.75 lg:w-[65%]">
            <Heading
              as="h2"
              size="h2"
              className="max-sm:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-white text-center sm:text-left mb-3.75 lg:mb-2.5"
            >
              {data?.title}
            </Heading>
            <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal [&_p]:font-notmal text-white text-center sm:text-left md:max-w-[65%]">
              {parse(data?.description)}
            </div>
          </div>
          <div className="w-full lg:w-[35%] flex lg:justify-end">
            <Button
              className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px] leading-none !font-medium text-black min-w-[150px] xl:min-w-[160px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px] bg-[#FFC916] m-auto sm:m-0"
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
