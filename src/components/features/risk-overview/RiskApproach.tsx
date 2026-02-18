"use client";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { ProcessStep } from "@/app/risk-overview/page";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type RiskApproachProps = {
  variant?: "mainland" | "risk" | "default";
  data: {
    title: string;
    description?: string | null;
    sub_title?: string | null;
    steps: ProcessStep[];
  };
};

export default function RiskApproach({ data, variant }: RiskApproachProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full block py-8 sm:py-10 xl:py-[50px_70px] 2xl:py-[60px_80px] bg-white overflow-hidden">
      <div className="container">
        <div
          className={cn(
            "w-full mb-6 xl:mb-10 2xl:mb-12",
            variant === "mainland"
              ? "text-start "
              : "sm:text-center sm:max-w-[576px] xl:max-w-[1020px] 2xl:max-w-[1200px] 3xl:max-w-[1360px] mx-auto",
          )}
        >
          <Heading
            as="h3"
            size="h3"
            className="text-[#1C5396] mb-3 sm:mb-5 2xl:mb-7"
          >
            {parse(data.title)}
          </Heading>
          {data?.description && (
            <Text as="div" size="p5" className="text-[#4e4e4e]">
              {parse(data?.description)}
            </Text>
          )}
        </div>

        {data.sub_title && (
          <Heading
            as="h3"
            size="h4"
            className="font-semibold text-black mb-6 xl:mb-8 2xl:mb-10"
          >
            {data.sub_title}
          </Heading>
        )}

        <div
          className={cn(
            "flex flex-col lg:flex-row 2xl:gap-14",
            variant === "risk" && "items-center",
          )}
        >
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row lg:flex-col overflow-auto max-sm:-mr-4">
              {data.steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "min-w-[200px] sm:min-w-[240px] lg:min-w-full lg:w-full relative z-0 pt-6 lg:pt-0 lg:pl-10 xl:pl-[80px] 2xl:pl-[90px] 3xl:pl-[100px] cursor-pointer transition-all duration-300 max-lg:pr-4",
                    index <= activeStep
                      ? "opacity-100"
                      : "opacity-90 hover:opacity-100",
                  )}
                  onClick={() => setActiveStep(index)}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={cn(
                      "w-[100%] lg:w-[1px] h-[1px] lg:h-[100%] absolute -z-1 top-2.5 lg:top-4 2xl:top-6 left-0 lg:left-6 xl:left-8.5 2xl:left-10.5 3xl:left-11",
                      index <= activeStep
                        ? "bg-linear-to-b from-[#053269] to-[#6a9fe0]"
                        : "bg-[#dcdcdc]",
                      data.steps.length === index + 1 && "lg:hidden",
                    )}
                    // initial={{ height: 0 }}
                    // animate={{
                    //   height: "160%",
                    // }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: index * 0.15,
                    }}
                  />

                  <div
                    className={cn(
                      "w-5 lg:w-4 xl:w-5 2xl:w-6 aspect-square rounded-full absolute z-0 left-0 lg:left-4 xl:left-6 2xl:left-8 top-0 lg:top-1 2xl:top-3 transition-all duration-300",
                      "bg-linear-to-b from-[#053269] to-[#6a9fe0]",
                    )}
                  >
                    {index > activeStep && (
                      <motion.div
                        className="w-full h-full rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  <Heading
                    as="div"
                    size="h6"
                    className={cn(
                      "font-semibold capitalize transition-colors duration-300 lg:pb-[30px] xl:pb-[40px] 2xl:pb-[60px] 3xl:pb-[70px]",
                      index <= activeStep ? "text-[#1c5396]" : "text-[#a7a7a7]",
                    )}
                  >
                   {parse(step.title)}
                  </Heading>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <div className="w-full h-full bg-white rounded-[12px] 2xl:rounded-[14px] p-6 xl:p-10 2xl:p-12 border border-[#E2E2E2] shadow-[0_4px_20px_rgba(28,83,150,0.1)] relative z-0 overflow-hidden flex items-center">
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
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    ></motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Heading
                        as="h4"
                        size="h6"
                        className="font-semibold text-[#212121] capitalize mb-3 lg:mb-4 xl:mb-6 2xl:mb-7"
                      >
                        {parse(data.steps[activeStep].title)}
                      </Heading>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Text as="div" size="p3" className="text-black">
                        {parse(data.steps[activeStep].description)}
                      </Text>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
