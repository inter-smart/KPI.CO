import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";
import type { ApartItem } from "@/app/page";

type HomeApartProps = {
  data: {
    title: string;
    items: ApartItem[];
  };
};

export default function HomeApart({ data }: HomeApartProps) {
  return (
    <section className="w-full py-8 xl:py-[90px] 2xl:py-[100px] bg-linear-to-t from-[#6a9fe0] to-[#053269] overflow-hidden relative z-0">
      <Image
        src="/images/home-apart-delmt.png"
        alt="home-apart-delmt"
        width={368}
        height={868}
        className="h-full absolute -z-1 inset-y-0 right-0 left-auto pointer-events-none"
      />
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-white mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>
        <div className="flex flex-wrap justify-between -mx-2 xl:-mx-4 2xl:-mx-5 relative z-0">
          <div className="w-[1px] h-full bg-white/30 absolute inset-y-0 left-1/2" />
          {data.items.map((item) => (
            <div
              key={`apart-item-${item.id}`}
              className="w-full sm:w-1/2 xl:w-[468px] 2xl:w-[520px] 3xl:w-[660px] p-2 xl:p-4 2xl:p-5"
            >
              <div className="w-full h-auto block">
                <div className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[21px] leading-normal font-semibold text-white mb-1.5 xl:mb-2.5 2xl:mb-3.5 flex gap-2">
                  <Image
                    src={item.media.path || "/images/placeholder-image.png"}
                    alt={item.media.alt || "Home Apart"}
                    width={34}
                    height={34}
                    className="w-6 xl:w-7 2xl:w-8 hover:scale-120 transition"
                  />
                  {parse(item.title ?? "title")}
                </div>
                <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:2xl:text-[21px] leading-normal font-normal text-[#d3dde8]">
                  {parse(item.description ?? "description")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
