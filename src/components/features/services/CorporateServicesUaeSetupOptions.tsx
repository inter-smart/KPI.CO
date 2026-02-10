"use client";
import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { SetupOptionItem } from "@/app/corporate-services-uae/page";

import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type CorporateServicesUaeSetupOptionsProps = {
  data: {
    title: string;
    description: string;
    items: SetupOptionItem[];
  };
  variant?: "hamriyah" | "default";
};

function SetupOptionCard({ item }: { item: SetupOptionItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%] min-w-0 select-none",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="group w-full aspect-square sm:aspect-53/56 relative z-0 overflow-hidden"
        initial={false}
      >
        <motion.div
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-full pt-2 px-4"
          animate={{
            y: isHovered ? "-120%" : "-50%",
            opacity: isHovered ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Heading
            as="div"
            className="text-[24px] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[42px] text-center font-semibold text-white"
          >
            {item.title}
            <span className="w-12 xl:w-10 2xl:w-12 h-[2px] bg-base2 block mx-auto mt-2" />
          </Heading>
        </motion.div>

        <div className="bg-linear-to-t from-black to-transparent opacity-30 absolute -z-1 inset-0" />

        <Image
          src={item.media.path}
          alt={item.media.alt}
          fill
          sizes="540px"
          className="-z-2 object-cover"
        />

        <motion.div
          className="w-full h-full bg-linear-to-t from-[#6a9fe0] to-[#053269] p-6 xl:p-9 2xl:p-11 flex items-center justify-center absolute z-20 inset-0"
          initial={{ y: "0%", opacity: 0, visibility: "hidden" }}
          animate={{
            y: isHovered ? "0%" : "0%",
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? "visible" : "hidden",
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 1.2 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 60,
                scale: isHovered ? 1 : 1.2,
              }}
              transition={{
                duration: 0.4,
                delay: isHovered ? 0.2 : 0,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Heading
                as="div"
                size="h4"
                className="max-sm:text-[22px] text-center font-semibold text-white mb-2 2xl:mb-2.5"
              >
                {item.title}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{
                duration: 0.4,
                delay: isHovered ? 0.3 : 0,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Text
                as="div"
                size="p1"
                className="max-sm:text-[14px] line-clamp-8 font-light text-center text-white mb-5 2xl:mb-6"
              >
                {parse(item?.description)}
              </Text>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{
                duration: 0.4,
                delay: isHovered ? 0.4 : 0,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <Button
                variant="yellow"
                size="lg"
                className="text-[12px] xl:text-[14px] 2xl:text-[17px] min-w-[120px] xl:min-w-[120px] 2xl:min-w-[145px] 3xl:min-w-[180px] h-8.5! 2xl:h-10.5! 3xl:h-12!"
                asChild
              >
                <Link href={item?.slug}>Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CorporateServicesUaeSetupOptions({
  data,
  variant = "default",
}: CorporateServicesUaeSetupOptionsProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  return (
    <section className="w-full block py-11.5 sm:py-10 xl:py-[50px_70px] 2xl:py-[65px_80px]">
      <div className="container">
        <div
          className={cn(
            "sm:text-center w-full sm:max-w-[576px] xl:max-w-[840px] 2xl:max-w-[1000px] 3xl:max-w-[1280px] mx-auto mb-6 xl:mb-10 2xl:mb-12",
            variant === "hamriyah" && "sm:text-left !max-w-full",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-3 sm:mb-5 2xl:mb-7"
          >
            {data.title}
          </Heading>
          <Text
            as="div"
            size="p5"
            className="text-[#4e4e4e] mb-4 xl:mb-6 2xl:mb-8"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden rounded-[16px]"
        >
          <div className="flex touch-pan-y touch-pinch-zoom max-sm:flex-col">
            {data.items.map((item) => (
              <SetupOptionCard key={`setup-option-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
