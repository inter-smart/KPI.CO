"use client";
import CountUp from "react-countup";
import parse from "html-react-parser";

type CounterItem = {
  id: number;
  value: number;
  symbol?: string;
  label: string;
};

type CounterInfoProps = {
  data?: {
    counter_list?: CounterItem[];
  };
};

export default function CounterInfo({ data }: CounterInfoProps) {
  return (
    <section className="w-full h-full py-7 lg:py-8 3xl:py-11 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.1)] block">
      <div className="container">
        <div className="flex flex-wrap items-center">
          {data?.counter_list?.map((item) => (
            <div key={item.id} className="w-1/4 px-5">
              <div className="w-full h-auto block text-center">
                <div className="text-[38px] lg:text-[55px] 2xl:text-[65px] 3xl:text-[80px] leading-normal font-semibold text-transparent mb-2 bg-clip-text bg-[linear-gradient(82.71deg,#1C5396_0%,#3EB0EA_100%)]">
                  {item?.value && (
                    <CountUp
                      start={0}
                      end={item?.value ?? 0}
                      duration={2.5}
                      separator=","
                      suffix={item?.symbol || "+"}
                      enableScrollSpy={true}
                    />
                  )}
                </div>
                <div className="text-[14px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[26px] leading-normal font-normal text-[#4E4E4E]">
                  {parse(item?.label)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
