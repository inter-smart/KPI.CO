"use client";

import CountUp from "react-countup";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import type { CounterItem } from "@/app/page";

type HomeCounterProps = {
  data: CounterItem[];
  variant?: "default" | "risk";
};

export default function HomeCounter({ data, variant = "default", }: HomeCounterProps) {
  return (
    <section
      className={cn(
        "w-full py-12 lg:py-[40px] shadow-[0_2px_21px_rgba(0,0,0,0.1)]",
        variant === "default" && "bg-white",
        variant === "risk" && "bg-[rgba(143,216,254,0.1)]",
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 xl:gap-x-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[32px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[65px] 3xl:text-[80px] font-medium sm:font-semibold leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1C5396] to-[#3EB0EA] transition-transform duration-500   select-none">
                {item.value.toLocaleString()}
                {item.symbol || "+"}
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[14px] xl:text-[17px] 2xl:text-[21px] 3xl:text-[26px] font-normal text-[#4E4E4E] leading-relaxed mx-auto max-sm:max-w-[110px]">
                {parse(item.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
