import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export type CorporateTaxUaeData = {
  title: string;
  tax_list: {
    title: string;
    description?: string;
    items?: string[];
  }[];
};

interface CorporateTaxUaeProps {
  data: CorporateTaxUaeData;
  variant?: "blue" | "yellow";
}

export default function CorporateTaxUae({
  data,
  variant = "blue",
}: CorporateTaxUaeProps) {
  return (
    <section className="w-full h-auto py-[40px] sm:py-[40px_50px] 2xl:py-[50px_60px] 3xl:py-[60px_80px] block">
      <div className="container">
        <div
          className={cn(
            "w-full h-auto p-[30px_15px] sm:p-[35px_25px] xl:p-[40px_30px] 2xl:p-[50px_40px] 3xl:p-[70px_50px] border-2 rounded-[15px] 2xl:rounded-[20px] overflow-hidden block",
            variant === "blue"
              ? "bg-gradient-to-br from-white to-[#EFF6FF] border-[#1C5396]"
              : "bg-gradient-to-br from-white to-[#FFFBEB] border-[#F0C21A]",
          )}
        >
          <div className="text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-[#1C5396] mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[50px]">
            {data?.title}
          </div>
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-[25px] sm:gap-[50px] lg:gap-[100px] xl:gap-[120px] 2xl:gap-[150px] 3xl:gap-[180px]">
            {data?.tax_list?.map((item, index) => (
              <div
                key={index}
                className="w-full h-full relative z-0 before:content-[''] before:h-[1px] lg:before:h-full before:w-full lg:before:w-[1px] before:bg-[#E5E7EB] before:absolute before:z-1 lg:before:right-[-13%] max-sm:before:bottom-[-5%] max-lg:before:bottom-[-15%] lg:before:top-0 last:before:hidden"
              >
                <div className="w-full h-full">
                  <div className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-normal font-medium text-[#053269] mb-[15px] xl:mb-[20px]">
                    {item?.title}
                  </div>
                  {item?.description && (
                    <div className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] leading-relaxed font-normal text-[#4E4E4E]">
                      {parse(item?.description)}
                    </div>
                  )}
                  {item?.items && (
                    <ul className="space-y-[10px] xl:space-y-[15px] 3xl:space-y-[25px]">
                      {item?.items.map((item, index) => (
                        <li
                          key={index}
                          className={cn(
                            "w-full h-auto pl-[30px] sm:pl-[25px] xl:pl-[27px] 2xl:pl-[35px] 3xl:pl-[40px] relative z-0 before:content-[''] before:w-[20px] sm:before:w-[18px] 2xl:before:w-[20px] 3xl:before:w-[25px] before:aspect-square before:bg-no-repeat before:bg-contain before:absolute before:left-0 before:top-[2px]",
                            variant === "blue"
                              ? "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3328%2024.4444C19.4693%2024.4444%2024.4439%2019.4698%2024.4439%2013.3333C24.4439%207.19678%2019.4693%202.22217%2013.3328%202.22217C7.19629%202.22217%202.22168%207.19678%202.22168%2013.3333C2.22168%2019.4698%207.19629%2024.4444%2013.3328%2024.4444Z%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]"
                              : "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3333%2024.4444C19.4698%2024.4444%2024.4444%2019.4698%2024.4444%2013.3333C24.4444%207.19678%2019.4698%202.22217%2013.3333%202.22217C7.19678%202.22217%202.22217%207.19678%202.22217%2013.3333C2.22217%2019.4698%207.19678%2024.4444%2013.3333%2024.4444Z%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]",
                          )}
                        >
                          <span className="text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[20px] leading-normal font-normal text-[#4E4E4E]">
                            {parse(item)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
