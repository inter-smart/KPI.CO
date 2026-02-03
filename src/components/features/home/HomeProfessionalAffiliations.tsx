"use client";

import { cn } from "@/lib/utils";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Media {
  path: string;
  alt: string;
}

interface localData {
  title?: string;
  items: {
    id: number;
    media: Media;
    slug: string;
  }[];
}

interface HomeProfessionalAffiliationsProps {
  data?: localData;
}

const local_data: localData = {
  title: "Professional Affiliations ",
  items: [
    {
      id: 1,
      media: {
        path: "/images/home-professionalAffiliations-1.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
    {
      id: 2,
      media: {
        path: "/images/home-professionalAffiliations-2.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
    {
      id: 3,
      media: {
        path: "/images/home-professionalAffiliations-3.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
    {
      id: 4,
      media: {
        path: "/images/home-professionalAffiliations-4.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
    {
      id: 5,
      media: {
        path: "/images/home-professionalAffiliations-5.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
    {
      id: 6,
      media: {
        path: "/images/home-professionalAffiliations-6.png",
        alt: "professionalAffiliations",
      },
      slug: "#",
    },
  ],
};

export default function HomeProfessionalAffiliations({
  data = local_data,
}: HomeProfessionalAffiliationsProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })],
  );

  return (
    <section className="w-full py-8 xl:py-[90px] 2xl:py-[100px] overflow-hidden">
      <div className="container">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {data.title}
        </h2>

        <div ref={emblaRef} className="w-full max-w-full">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3.5 2xl:-mx-5 [&>*]:p-2 lg:[&>*]:p-3.5 2xl:[&>*]:p-5">
            {data.items.map((item, index) => (
              <div
                key={"our-sights" + index}
                className={cn(
                  "flex-[0_0_168px] sm:flex-[0_0_200px] lg:flex-[0_0_240px] 2xl:flex-[0_0_300px] 3xl:flex-[0_0_360px] min-w-0 select-none",
                )}
              >
                <div className="w-full h-[100px] xl:h-[130px] 2xl:h-[160px] rounded-lg flex items-center justify-center bg-white shadow-[0_12px_25px_0_rgba(0,0,0,0.1)] hover:shadow-xl transition">
                  <div className="w-[120px] xl:w-[150px] 2xl:w-[180px] ">
                    <Image
                      src={item?.media?.path || "/images/placeholder-image.png"}
                      alt={item?.media?.alt || "Professional Affiliations"}
                      width={230}
                      height={95}
                      className="w-full aspect-2/1 object-contain"
                    />
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
