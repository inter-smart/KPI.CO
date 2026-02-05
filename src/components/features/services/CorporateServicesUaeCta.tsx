import Link from "next/link";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";
import type { CtaData } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeCtaProps = {
    data: CtaData;
};

export default function CorporateServicesUaeCta({
    data,
}: CorporateServicesUaeCtaProps) {
    return (
        <section className="bg-gradient-to-r from-[#003268] to-[#5280CA] py-[50px] lg:py-[70px] xl:py-[90px] 2xl:py-[100px]">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto">
                    <Heading
                        as="h2"
                        size="h2"
                        className="text-white mb-4 xl:mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000"
                    >
                        {data.title}
                    </Heading>
                    <div className="text-[16px] lg:text-[18px] 2xl:text-[21px] 3xl:text-[26px] text-white/90 font-normal mb-[30px] xl:mb-[40px] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        {parse(data.description)}
                    </div>
                    <Button
                        className="text-[15px] lg:text-[11px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-black font-medium sm:font-semibold px-5 sm:px-10 
            h-[35px] sm:h-[45px] 2xl:h-[48px] 3xl:h-[60px] bg-base2 hover:bg-[#FFD54F] rounded-[8px] transition-all transform hover:scale-105 active:scale-95 duration-100"
                        asChild
                    >
                        <Link href={data.button.link}>{data.button.label}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
