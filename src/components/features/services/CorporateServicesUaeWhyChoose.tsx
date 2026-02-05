import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { WhyChooseItem } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeWhyChooseProps = {
    data: {
        title: string;
        items: WhyChooseItem[];
    };
};

export default function CorporateServicesUaeWhyChoose({
    data,
}: CorporateServicesUaeWhyChooseProps) {
    return (
        <section className="w-full py-[40px] lg:py-[60px] xl:py-[75px] 2xl:py-[90px] 3xl:py-[120px] bg-gradient-to-t from-[#6a9fe0] to-[#053269] overflow-hidden relative z-0">
            <Image
                src="/images/home-apart-delmt.png"
                alt="background decoration"
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
                    <div className="w-[1px] h-full bg-white/30 absolute inset-y-0 left-1/2 max-lg:hidden" />
                    {data.items.map((item) => (
                        <div
                            key={item.id}
                            className="w-full md:w-1/2 lg:w-[350px] xl:w-[468px] 2xl:w-[520px] 3xl:w-[660px] p-2 sm:p-3 xl:p-4 2xl:p-5 max-sm:border-b max-sm:border-white/20"
                        >
                            <div className="w-full h-auto block max-sm:py-[20px]">
                                <div className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[21px] leading-normal font-semibold text-white mb-2.5 xl:mb-2.5 2xl:mb-3.5 flex gap-2">
                                    <Image
                                        src={item.media.path}
                                        alt={item.media.alt}
                                        width={34}
                                        height={34}
                                        className="w-6 xl:w-7 2xl:w-8 hover:scale-120 transition"
                                    />
                                    {item.title}
                                </div>
                                <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] leading-normal font-normal text-[#d3dde8]">
                                    {parse(item.description)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
