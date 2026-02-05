import Image from "next/image";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { HeroData } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeHeroProps = {
    data: HeroData;
};

export default function CorporateServicesUaeHero({
    data,
}: CorporateServicesUaeHeroProps) {
    return (
        <section className="relative w-full h-[500px] md:h-[400px] xl:h-[480px] 2xl:h-[550px] 3xl:h-[700px] overflow-hidden">
            {/* Background Media */}
            <div className="absolute inset-0 w-full h-full">
                {data.media.type === "video" ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={data.media.path} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={data.media.path}
                        alt={data.media.alt}
                        fill
                        priority
                        className="object-cover"
                    />
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#053269]/80 to-[#3869A4]/70 to-[#6A9FE0]/30" />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-full">
                    <Heading
                        as="h1"
                        size="h1"
                        className="font-bold text-white mb-[20px] xl:mb-[30px] animate-in fade-in slide-in-from-left-10 duration-1000 sm:max-w-[75%]"
                    >
                        {data.title}
                    </Heading>
                    <div className="text-[16px] lg:text-[18px] 2xl:text-[21px] 3xl:text-[26px] text-white/90 sm:max-w-[95%] xl:max-w-[79%] 3xl:max-w-[83%] font-normal animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                        {parse(data.description)}
                    </div>
                </div>
            </div>
        </section>
    );
}
