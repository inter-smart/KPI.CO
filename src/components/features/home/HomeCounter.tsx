"use client";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import type { CounterItem } from "@/app/page";

type HomeCounterProps = {
  data: CounterItem[];
  variant?:
    | "default"
    | "risk"
    | "tax-advisory"
    | "technology"
    | "internal-audit"
    | "Financial-Statement-Audit"
    | "aup"
    | "Agreed-Procedure"
    | "AuditServicesUae"
    | "e-invoice"
    | "regulatory"
    | "erm";
};

export default function HomeCounter({
  data,
  variant = "default",
}: HomeCounterProps) {
  return (
    <section
      className={cn(
        "w-full py-12 lg:py-[60px] xl:py-[37px]",
        variant === "default" && "bg-white shadow-[0_2px_21px_rgba(0,0,0,0.1)]",
        variant === "risk" && "bg-[rgba(143,216,254,0.1)]",
        variant === "tax-advisory" && "shadow-[0_-26px_50px_#00000008]",
        variant === "technology" &&
          "max-sm:shadow-none shadow-[0_12px_15px_-8px_rgba(0,0,0,0.05)] xl:pt-[35px]",
        variant === "aup" && "shadow-none",
        variant === "Financial-Statement-Audit" &&
          "sm:shadow-[0_2px_21px_rgba(0,0,0,0.1)]",
        variant === "Agreed-Procedure" &&
          "sm:shadow-[0_2px_21px_rgba(0,0,0,0.1)]",
        variant === "e-invoice" && "sm:shadow-[0_-15px_25px_rgba(0,0,0,0.05)]",
        variant === "erm" && "sm:shadow-[0_-15px_25px_rgba(0,0,0,0.05)]",
        variant === "regulatory" && "max-sm:shadow-none",
        variant === "internal-audit" && "max-sm:shadow-none",
        variant === "AuditServicesUae" &&
          "bg-white sm:shadow-[0_2px_16px_rgba(0,0,0,0.1)]",
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 xl:gap-x-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={cn(
                  "text-[32px] md:text-[40px] lg:text-[45px] xl:text-[61.04px] 2xl:text-[65px] 3xl:text-[80px] font-medium sm:font-semibold leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1C5396] to-[#3EB0EA] transition-transform duration-500   select-none",
                  variant === "internal-audit" &&
                    "xl:text-[61px] 2xl:text-[65px] 3xl:text-[80px]",
                  variant === "e-invoice" && "font-semibold",
                  variant === "regulatory" && "font-semibold",
                  variant === "internal-audit" && "font-semibold",
                  variant === "erm" && "font-semibold",
                )}
              >
                <CountUp
                  end={item.value}
                  duration={2.5}
                  separator=","
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                {item.symbol || "+"}
              </div>
              <div
                className={cn(
                  "text-[14px] sm:text-[15px] md:text-[14px] xl:text-[20px] 2xl:text-[21px] 3xl:text-[26px]  text-[#4E4E4E] leading-relaxed mx-auto max-sm:max-w-[100px]",
                  variant === "erm" && "max-sm:max-w-[100px]",
                )}
              >
                {parse(item.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
