"use client";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ProcessStep = {
  id: number;
  step?: string;
  title: string;
  inner_title?: string;
  sub_title?: string;
  description: string;
};

export type CorporateServicesUaeFormationProcessData = {
  title: string;
  inner_title?: string;
  description?: string | null;
  sub_title?: string | null;
  steps: ProcessStep[];
  process_list?: ProcessListItem[];
};

export type ProcessListItem = {
  id: number | string;
  title: string;
  description?: string;
};

export type CorporateServicesUaeFormationProcessProps = {
  variant?:
    | "Vat-Services"
    | "mainland"
    | "aup"
    | "default"
    | "tax-advisory"
    | "CorporateServicesUae";
  data: CorporateServicesUaeFormationProcessData;
};

export default function CorporateServicesUaeFormationProcess({
  data,
  variant,
}: CorporateServicesUaeFormationProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop (lg breakpoint = 1024px)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // GSAP ScrollTrigger for desktop pinning + step progression
  useEffect(() => {
    if (!isDesktop || !triggerRef.current || !sectionRef.current) return;

    const totalSteps = data.steps.length;
    const scrollPerStep = 300; // pixels of scroll per step
    const totalScrollDistance = scrollPerStep * (totalSteps - 1);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 80px",
        end: `+=${totalScrollDistance}`,
        pin: sectionRef.current,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            Math.floor(progress * totalSteps),
            totalSteps - 1,
          );
          setActiveStep(stepIndex);
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [isDesktop, data.steps.length]);

  return (
    <div ref={triggerRef}>
      <section
        ref={sectionRef}
        className={cn(
          "w-full block py-8 sm:py-10 xl:py-[50px_70px] 2xl:py-[60px_80px] bg-white",
          "overflow-hidden",
        )}
      >
        <div className="container">
          <div
            className={cn(
              "w-full mb-6 xl:mb-10 2xl:mb-12",
              variant === "mainland" || variant === "aup" || "tax-advisory"
                ? "text-start "
                : "sm:text-center sm:max-w-[576px] xl:max-w-[1020px] 2xl:max-w-[1200px] 3xl:max-w-[1360px] mx-auto",
              variant === "Vat-Services" && "sm:text-start !max-w-[100%]",
              variant === "CorporateServicesUae" &&
                "sm:text-center xl:mb-[30px]",
            )}
          >
            <Heading
              as="div"
              size="h2"
              className="text-[#1C5396] mb-3 sm:mb-5 2xl:mb-7"
            >
              {data.title}
            </Heading>
            {data?.description && (
              <Text
                as="div"
                size="p5"
                className="text-[#4e4e4e] [&_b]:text-[18px] xl:[&_b]:text-[18px] 2xl:[&_b]:text-[25px] 3xl:[&_b]:text-[32px] [&_b]:text-black gap-[25px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[50px] flex flex-col"
              >
                {parse(data?.description)}
              </Text>
            )}
          </div>
          {data.sub_title && (
            <Heading
              as="div"
              size="h4"
              className="xl:text-[24px] font-semibold text-black mb-6 xl:mb-8 2xl:mb-10"
            >
              {data.sub_title}
            </Heading>
          )}
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-12 2xl:gap-14",
              variant === "Vat-Services" && "items-center",
            )}
          >
            <div className="flex items-center">
              <div className="flex flex-row lg:flex-col overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:space-y-7 xl:space-y-11 2xl:space-y-13 3xl:space-y-16 max-sm:-mr-4">
                {data.steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={cn(
                      "min-w-[200px] sm:min-w-[240px] lg:min-w-full lg:w-full relative z-0 pt-6 lg:pt-0 lg:pl-[55px] xl:pl-[80px] 2xl:pl-[90px] 3xl:pl-[100px] transition-all duration-300 max-lg:pr-4",
                      variant === "tax-advisory" && "min-w-[330px]",
                      isDesktop ? "cursor-default" : "cursor-pointer",
                      index <= activeStep
                        ? "opacity-100"
                        : "opacity-90 hover:opacity-100",
                    )}
                    onClick={() => !isDesktop && setActiveStep(index)}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={cn(
                        "w-[100%] lg:w-[1px] h-[1px] lg:h-[200%] xl::h-[250%] absolute -z-1 top-2.5 lg:top-3.5 2xl:top-4 left-0 lg:left-6 xl:left-8.5 2xl:left-10.5 3xl:left-11",
                        variant === "Vat-Services" && "lg:h-[250%]",
                        variant === "mainland" && "lg:h-[190%]",
                        index <= activeStep
                          ? "bg-linear-to-b from-[#053269] to-[#6a9fe0]"
                          : "bg-[#dcdcdc]",
                        data.steps.length === index + 1 && "lg:hidden",
                      )}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: index * 0.15,
                      }}
                    />

                    <div
                      className={cn(
                        "w-5 lg:w-4 xl:w-5 2xl:w-6 aspect-square rounded-full absolute z-0 left-0 lg:left-4 xl:left-6 2xl:left-8 top-0 lg:top-0.5 2xl:top-1 transition-all duration-300",
                        "bg-linear-to-b from-[#053269] to-[#6a9fe0]",
                      )}
                    >
                      {index > activeStep && (
                        <motion.div
                          className="w-full h-full rounded-full bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    {step.step && (
                      <Text
                        as="div"
                        size="p3"
                        className={cn(
                          "text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-normal transition-colors duration-300",
                          index <= activeStep
                            ? "text-[#3eb0ea]"
                            : "text-[#a7a7a7]",
                        )}
                      >
                        {step.step}
                      </Text>
                    )}
                    <Heading
                      as="div"
                      size="h6"
                      className={cn(
                        "max-sm:text-[16px] xl:text-[24px] font-semibold  transition-colors duration-300 capitalize",
                        index <= activeStep
                          ? "text-[#1c5396]"
                          : "text-[#a7a7a7]",
                        variant == "tax-advisory" && "text-nowrap",
                      )}
                    >
                      {parse(step.title)}
                    </Heading>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full min-h-[320px] lg:min-h-[380px] xl:min-h-[480px]   bg-white rounded-[12px] 2xl:rounded-[14px] border border-[#E2E2E2] p-6 xl:p-10 2xl:p-12 shadow-[0_2px_4px_rgba(0,0,0,0.15)] relative z-0 overflow-hidden flex items-center">
                <Image
                  src="/images/corporate-services-formationProcess-bg.png"
                  alt="background decoration"
                  width={400}
                  height={740}
                  className="absolute -z-1 top-0 right-0 bottom-0 w-[180px] xl:w-[270px] 2xl:w-[320px] 3xl:w-[380px] object-contain pointer-events-none"
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="relative z-10 w-full"
                  >
                    {variant !== "aup" && (
                      <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Heading
                          as="h4"
                          size="h6"
                          className="font-normal text-[#3eb0ea] capitalize mb-0.5"
                        >
                          {data.steps[activeStep].step}
                        </Heading>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {/* <Heading
                        as="h4"
                        size="h6"
                        className="font-semibold text-[#212121] mb-3 lg:mb-4 xl:mb-6 2xl:mb-7"
                      >
                        {data.steps[activeStep].title}
                      </Heading> */}
                      {data.steps[activeStep].inner_title && (
                        <Heading
                          as="h4"
                          size="h6"
                          className="xl:text-[24px]  font-semibold text-[#212121] mb-3 lg:mb-4 xl:mb-[20px] 2xl:mb-7 capitalize max-md:[&_br]:hidden"
                        >
                          {parse(data.steps[activeStep].inner_title)}
                        </Heading>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Text
                        as="div"
                        size="p3"
                        className="text-black max-md:[&_br]:hidden xl:text-[18px] "
                      >
                        {parse(data.steps[activeStep].description)}
                      </Text>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          {data?.process_list && (
            <>
              {data?.process_list?.map((item) => (
                <div
                  key={item?.id}
                  className="w-full h-auto mt-[20px] xl:mt-[30px] 2xl:mt-[35px] 3xl:mt-[40px]"
                >
                  <div className="w-full h-full p-6 lg:p-5 2xl:p-6.25 3xl:p-7.5 rounded-[10px] 3xl:rounded-[14px] overflow-hidden block relative z-0 min-h-[95px] xl:min-h-[135px] 2xl:min-h-[145px] 3xl:min-h-[180px] before:content-[''] before:w-[15px] before:h-full before:bg-gradient-to-t before:from-[#1C5396] before:to-[#389FDB] after:bg-[#f8f8f8] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px] after:3xl:translate-x-[5px]">
                    <div className="text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-normal capitalize font-medium text-[#1C5396] mb-2 lg:mb-1.25 2xl:mb-2.5">
                      {item?.title}
                    </div>
                    {item?.description && (
                      <div className="text-[14px] lg:text-[16px] xl:text-[18px]  2xl:text-[18px] 3xl:text-[21px] leading-normal font-normal text-[#4E4E4E] max-md:[&_br]:hidden">
                        {parse(item?.description)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
