import { cn } from "@/lib/utils";
import { Heading } from "@/components/utils/typography";
import parse from "html-react-parser";

export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  description?: string;
  highlightsText?: string;
  footer_description?: string;
  zone_list: string[];
};

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

export type MeydanFreeZoneData = {
  title: string;
  main_description?: string;
  description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list?: MeydanStructureItem[];
};

interface MeydanFreeZoneProps {
  data: MeydanFreeZoneData;
  variant: "difc" | "holding" | "adgm" | "default" | "ifza";
}

export default function MeydanFreeZone({
  data,
  variant = "default",
}: MeydanFreeZoneProps) {
  if (!data) return null;

  return (
    <section className="w-full h-auto py-[45px] sm:py-[35px_50px] xl:py-[40px_60px] 2xl:py-[50px_75px] 3xl:py-[65px_90px] block">
      <div className="container">
        <div className="typography">
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-[20px] lg:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]"
          >
            {data?.title}
          </Heading>
          <p className="text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#364153] mb-[40px]">
            {data?.main_description}
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-[30px] sm:gap-[25px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px] 3xl:gap-[80px] mb-[30px] sm:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]",
            (variant === "difc" || variant === "holding") && "md:grid-cols-1",
            variant === "adgm" &&
            "sm:gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[35px] 3xl:gap-[40px]",
            variant === "ifza" &&
            "sm:gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[35px] 3xl:gap-[40px]",
          )}
        >
          {data?.free_zone_list?.map((item, index) => (
            <div key={item?.id} className="w-full h-auto">
              <div
                className={cn(
                  "w-full h-full p-[30px_15px] sm:p-[35px_25px] xl:p-[40px_30px] 2xl:p-[50px_35px] 3xl:p-[65px_45px] bg-gradient-to-br from-white border-2 rounded-[15px] sm:rounded-[10px] xl:rounded-[15px] 2xl:rounded-[20px] overflow-hidden",
                  index % 2 !== 0
                    ? "to-[#FEFCE8] border-[#FFCB18]"
                    : "to-[#EFF6FF] border-[#5280CA]",
                )}
              >
                <div
                  className={cn(
                    "mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] leading-normal text-[24px] sm:text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-normal font-medium text-[#053269] mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px]",
                    variant === "difc" &&
                    "text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-semibold",
                    variant === "holding" &&
                    "text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-medium",
                    variant === "adgm" &&
                    "text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[40px] text-[#053269] font-medium",
                  )}
                >
                  {parse(item?.title)}
                </div>
                <div className="text-[16px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E] mb-[15px]">
                  {parse(item?.description ?? "")}
                </div>
                <div className="text-[16px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] leading-normal font-medium text-[#053269] mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                  {item?.highlightsText}
                </div>
                <ul className="space-y-[10px] xl:space-y-[15px] 3xl:space-y-[25px]">
                  {item?.zone_list?.map((zone, i) => (
                    <li
                      key={i}
                      className={cn(
                        "w-full h-auto pl-[30px] sm:pl-[25px] xl:pl-[27px] 2xl:pl-[35px] 3xl:pl-[40px] relative z-0 before:content-[''] before:w-[20px] sm:before:w-[18px] 2xl:before:w-[20px] 3xl:before:w-[25px] before:aspect-square before:bg-no-repeat before:bg-contain before:absolute before:left-0 before:top-[8px]",
                        index % 2 !== 0
                          ? "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3333%2024.4444C19.4698%2024.4444%2024.4444%2019.4698%2024.4444%2013.3333C24.4444%207.19678%2019.4698%202.22217%2013.3333%202.22217C7.19678%202.22217%202.22217%207.19678%202.22217%2013.3333C2.22217%2019.4698%207.19678%2024.4444%2013.3333%2024.4444Z%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]"
                          : "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3328%2024.4444C19.4693%2024.4444%2024.4439%2019.4698%2024.4439%2013.3333C24.4439%207.19678%2019.4693%202.22217%2013.3328%202.22217C7.19629%202.22217%202.22168%207.19678%202.22168%2013.3333C2.22168%2019.4698%207.19629%2024.4444%2013.3328%2024.4444Z%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[14px] 2xl:text-[20px] 3xl:text-[24px] text-[#364153]",
                          variant === "adgm" &&
                          "text-[15px] 2xl:text-[18px] 3xl:text-[20px]",
                        )}
                      >
                        {parse(zone)}
                      </span>
                    </li>
                  ))}
                </ul>
                {item?.footer_description && (
                  <div className="mt-[20px] sm:mt-[10px] xl:mt-[15px] 2xl:mt-[20px] text-[16px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]">
                    {parse(item?.footer_description)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {data?.structure_list && (
          <div className="w-full h-auto xl:space-y-[15px] 2xl:space-y-[25px]">
            {data.structure_list.map((item) => (
              <div key={item.id} className="w-full h-auto">
                <div className="w-full h-full p-[20px_35px] sm:p-[25px] xl:p-[30px] 2xl:p-[35px_40px] 3xl:p-[40px_50px] rounded-[15px] sm:rounded-[10px] 3xl:rounded-[14px] overflow-hidden block relative z-0 before:content-[''] before:w-[15px] before:h-full before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:bg-[#F8F8F8] after:rounded-[13px] sm:after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px] after:3xl:translate-x-[5px]">
                  <div
                    className={cn(
                      "leading-normal font-medium text-[#003268] mb-[30px] text-[24px] sm:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px]",
                      variant === "difc" &&
                      "text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-semibold",
                    )}
                  >
                    {item.title}
                  </div>
                  <div className="text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#364153] [&_p]:mb-[20px]  lg:[&_p]:mb-[30px] 3xl:[&_p]:mb-[40px]">
                    {/* {item.description} */}
                    {parse(item?.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
