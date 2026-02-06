"use client";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import type { ProcessStep } from "@/app/corporate-services-uae/page";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CorporateServicesUaeFormationProcessProps = {
  data: {
    title: string;
    description: string;
    sub_title: string;
    steps: ProcessStep[];
  };
};

export default function CorporateServicesUaeFormationProcess({
  data,
}: CorporateServicesUaeFormationProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full block py-8 sm:py-10 xl:py-[70px_50px] 2xl:py-[85px_65px] bg-white">
      <div className="container">
        <div className="text-center w-full max-w-[576px] xl:max-w-[840px] 2xl:max-w-[1080px] 3xl:max-w-[1280px] mx-auto mb-6 xl:mb-10 2xl:mb-12">
          <Heading as="h2" size="h2" className="text-[#1C5396] mb-4">
            {data.title}
          </Heading>
          <Text as="p" size="p1" className="text-[#4e4e4e]">
            {parse(data?.description)}
          </Text>
        </div>

        <Heading
          as="h3"
          size="h4"
          className="font-semibold text-black mb-6 xl:mb-8 2xl:mb-10"
        >
          {data.sub_title}
        </Heading>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-14">
          {/* Left Side - Step Thumbnails with Timeline */}
          <div className="relative">
            {/* Steps List */}
            <div className="space-y-4 xl:space-y-12 2xl:space-y-16">
              {data.steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "w-full relative z-0 pl-10 xl:pl-[80px] 2xl:pl-[100px] cursor-pointer transition-all duration-300",
                    activeStep === index
                      ? "opacity-100"
                      : "opacity-90 hover:opacity-100",
                  )}
                  onClick={() => setActiveStep(index)}
                  //   whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={cn(
                      "w-[1px] h-[130%] absolute -z-1 top-3.5 left-4 xl:left-8.5 2xl:left-8",
                      activeStep === index
                        ? "bg-linear-to-b from-[#053269] to-[#6a9fe0] bg-red-500"
                        : "bg-[#dcdcdc]",
                      data.steps.length === index + 1 && "hidden",
                    )}
                  />
                  <div
                    className={cn(
                      "w-4 xl:w-5 2xl:w-6 aspect-square rounded-full absolute z-0 left-4 xl:left-6 2xl:left-8 top-0.5 transition-all duration-300",
                      activeStep === index
                        ? "bg-linear-to-b from-[#053269] to-[#6a9fe0]"
                        : "bg-linear-to-b from-[#053269] to-[#6a9fe0]",
                    )}
                  >
                    {activeStep !== index && (
                      <motion.div
                        className="w-full h-full rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  <Text
                    as="div"
                    size="p3"
                    className={cn(
                      "font-normal transition-colors duration-300",
                      activeStep === index
                        ? "text-[#3eb0ea]"
                        : "text-[#a7a7a7]",
                    )}
                  >
                    Step {step.step}
                  </Text>

                  <Heading
                    as="div"
                    size="h6"
                    className={cn(
                      "font-semibold line-clamp-1 transition-colors duration-300",
                      activeStep === index
                        ? "text-[#1c5396]"
                        : "text-[#a7a7a7]",
                    )}
                  >
                    {step.title}
                  </Heading>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Content Box */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full bg-white rounded-[16px] xl:rounded-[20px] p-6 xl:p-10 2xl:p-12 shadow-[0_4px_20px_rgba(28,83,150,0.1)] relative z-0 overflow-hidden min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px] flex items-center"
              >
                {/* Background Decorative Image */}
                <Image
                  src="/images/corporate-services-formationProcess-bg.png"
                  alt="background decoration"
                  width={400}
                  height={740}
                  className="absolute -z-1 top-0 right-0 bottom-0 w-[180px] xl:w-[240px] 2xl:w-[300px] object-contain opacity-20 pointer-events-none"
                />

                {/* Content */}
                <div className="relative z-10 w-full">
                  {/* Step Label */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Heading
                      as="h4"
                      size="h6"
                      className="font-normal text-[#3eb0ea] mb-0.5"
                    >
                      Step {data.steps[activeStep].step}
                    </Heading>
                  </motion.div>

                  {/* Step Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Heading
                      as="h4"
                      size="h6"
                      className="font-semibold text-[#212121] mb-4 xl:mb-6 2xl:mb-8"
                    >
                      {data.steps[activeStep].title}
                    </Heading>
                  </motion.div>

                  {/* Step Description */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Text as="div" size="p3" className="text-black">
                      {parse(data.steps[activeStep].description)}
                    </Text>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
