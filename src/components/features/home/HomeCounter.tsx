"use client";

import CountUp from "react-countup";
import parse from "html-react-parser";
import type { CounterItem } from "@/app/page";

type HomeCounterProps = {
  data: CounterItem[];
};

export default function HomeCounter({ data }: HomeCounterProps) {
  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[30px] sm:text-[32px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[65px] 3xl:text-[80px] font-bold leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1C5396] to-[#3EB0EA] transition-transform duration-500 group-hover:scale-105 select-none">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                  suffix={item.symbol || "+"}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </div>
              <div className="text-[14px] sm:text-[15px] md:text-[17px] xl:text-[17px] 2xl:text-[21px] 3xl:text-[26px] font-medium text-[#4E4E4E] leading-relaxed max-w-[180px] mx-auto">
                {parse(item.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

