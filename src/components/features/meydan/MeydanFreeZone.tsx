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
  variant:
    | "difc"
    | "holding"
    | "RAK-Offshore"
    | "ADGM-Foundation"
    | "MeydanFreeZone"
    | "DMCC-Freezone"
    | "Tax-Advisory"
    | "default"
    | "ifza"
    | "JAFZA-Freezone"
    | "e-invoice"
    | "regulatory"
    | "difc-regulated"
    | "audit";
}

export default function MeydanFreeZone({
  data,
  variant = "default",
}: MeydanFreeZoneProps) {
  if (!data) return null;

  return (
    <section
      className={cn(
        "w-full h-auto py-[10px_15px] sm:py-[35px_50px] xl:py-[48px_30px] 2xl:py-[50px_75px] 3xl:py-[65px_90px] block",
        variant === "audit" && "!pt-0 !pb-4",
        variant === "ADGM-Foundation" && "max-sm:!pt-0 max-sm:!pb-4",
        variant === "MeydanFreeZone" && "xl:py-[48px_70px]",
      )}
    >
      <div className="container">
        <div className="typography">
          <Heading
            as="div"
            size="h2"
            className={cn(
              "text-[#1C5396] capitalize text-[28px] xl:!text-[38px] mb-[20px] leading-tight lg:mb-[25px] xl:mb-[25px] 3xl:mb-[40px]",
              variant === "RAK-Offshore" && "xl:!text-[30px] xl:mb-[25px]",
              variant === "MeydanFreeZone" && "max-sm:mb-[22px] xl:mb-[28px]",
              variant === "DMCC-Freezone" && "xl:mb-[28px]",
            )}
          >
            {data?.title}
          </Heading>
          <p className="text-[16px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#364153]  mb-[25px]">
            {data?.main_description}
          </p>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 xl:grid-cols-2 gap-[30px] sm:gap-[25px] lg:gap-[40px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-[80px] mb-[30px] sm:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]",

            [
              "difc",
              "holding",
              "Tax-Advisory",
              "difc-regulated",
              "regulatory",
            ].includes(variant) && "md:grid-cols-1 xl:grid-cols-1",

            variant === "ADGM-Foundation" &&
              "sm:gap-[15px] lg:gap-[20px] xl:gap-[32px] 2xl:gap-[35px] 3xl:gap-[40px] md:grid-cols-2 xl:grid-cols-2",
            variant === "JAFZA-Freezone" && "mb-0",

            variant === "ifza" &&
              "sm:gap-[15px] lg:gap-[20px] xl:gap-[32px] 2xl:gap-[35px] 3xl:gap-[40px]",
            variant === "JAFZA-Freezone" &&
              "sm:gap-[15px] lg:gap-[20px] xl:gap-[32px] 2xl:gap-[35px] 3xl:gap-[40px]",

            variant === "MeydanFreeZone" &&
              "sm:gap-[15px] lg:gap-[20px] xl:gap-[32px]",
            variant === "DMCC-Freezone" &&
              "max-sm:gap-[32px] sm:gap-[15px] lg:gap-[20px] xl:gap-[32px] xl:mb-[28px]",
            variant === "default" &&
              "sm:gap-[15px] lg:gap-[20px] xl:gap-[32px]",

            variant === "RAK-Offshore" && "xl:gap-[30px]",
          )}
        >
          {data?.free_zone_list?.map((item, index) => (
            <div key={item?.id} className="w-full h-auto">
              <div
                className={cn(
                  "w-full h-full p-[30px_15px_35px] sm:p-[35px_25px] xl:p-[35px_34px_30px] 2xl:p-[50px_35px] 3xl:p-[65px_45px] bg-gradient-to-br from-white border-[2px] lg:border-2 rounded-[16px] sm:rounded-[10px] xl:rounded-[16px] 2xl:rounded-[20px] overflow-hidden",
                  variant === "holding" && "to-[#EFF6FF] border-[#1C5396]",
                  variant === "difc-regulated" && "xl:pr-[15px]",
                  // variant === "difc-regulated" && "xl:pr-[15px]",
                  variant === "ifza" &&
                    "to-[#EFF6FF] border-[#1C5396] border-[1.5px] sm:border-1 lg:border-2",
                  variant === "RAK-Offshore" && "xl:p-[80px_35px]",
                  variant === "MeydanFreeZone" &&
                    "max-sm:min-h-[355px] max-sm:p-[31px_12px_30px_12px] xl:p-[48px_44px_45px_34px]",
                  variant === "DMCC-Freezone" &&
                    "max-sm:min-h-[355px] max-sm:p-[31px_12px_30px_12px] xl:p-[48px_44px_34px_34px]",
                  variant === "ifza" &&
                    "to-[#EFF6FF] border-[#1C5396] border-[1px] sm:border-1 lg:border-2",
                  variant === "JAFZA-Freezone" &&
                    "max-sm:p-[48px_34px_20px] to-[#EFF6FF] border-[#1C5396] border-[1.5px] sm:border-1 lg:border-2",

                  index % 2 !== 0
                    ? "to-[#FEFCE8] border-[#FFCB18]"
                    : "to-[#EFF6FF] border-[#5280CA]",
                )}
              >
                <div
                  className={cn(
                    "mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] !leading-tight text-[28px] sm:text-[20px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[40px]  font-medium text-[#1C5396] sm:text-[#053269] xl:max-w-[480px] mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px]",
                    variant === "difc" &&
                      "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] !text-[#1C5396] font-semibold !max-w-full",
                    variant === "difc-regulated" &&
                      "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] !text-[#1C5396] font-semibold !max-w-full",
                    variant === "holding" &&
                      "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] !text-[#1C5396] !max-w-full font-medium",
                    variant === "RAK-Offshore" &&
                      "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] !text-[#1C5396] font-medium xl:mb-[25px] max-sm:max-w-[240px]",
                    variant === "ADGM-Foundation" &&
                      "text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[40px] !text-[#053269] font-medium",
                    variant === "regulatory" &&
                      "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[40px] !text-[#1C5396] font-semibold  !max-w-full",
                    variant === "JAFZA-Freezone" && "max-sm:text-[24px]",
                    variant === "difc-regulated" && "sm:!text-[#1C5396]",
                    variant === "MeydanFreeZone" && "xl:mb-[19px]",
                  )}
                >
                  {parse(item?.title)}
                </div>
                {item?.description && (
                  <div
                    className={cn(
                      "text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[24px] leading-[1.6] font-normal text-[#4E4E4E] mb-[16px] max-sm:!mb-[20px]",
                      variant === "ADGM-Foundation" && "xl:mb-[25px]",
                      variant === "ifza" && "hidden",
                      variant === "JAFZA-Freezone" && "hidden",
                    )}
                  >
                    {parse(item?.description ?? "")}
                  </div>
                )}
                {item?.highlightsText && (
                  <div
                    className={cn(
                      "text-[16px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] leading-normal font-medium text-[#053269] mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[20px]",
                      variant === "ADGM-Foundation" && "xl:mb-[20px]",
                      variant === "RAK-Offshore" && "xl:mb-[15px]",
                      variant === "regulatory" && "max-sm:text-[14px]",
                      variant === "difc" && "max-sm:text-[14px]",
                    )}
                  >
                    {item?.highlightsText}
                  </div>
                )}
                <ul
                  className={cn(
                    "sm:mb-[20px]",
                    variant === "ifza" && "mb-0",
                    variant === "JAFZA-Freezone" && "mb-0",
                    variant === "DMCC-Freezone" && "xl:mb-0",
                  )}
                >
                  {item?.zone_list?.map((zone, i) => (
                    <li
                      key={i}
                      className={cn(
                        "w-full h-auto pl-[25px] sm:pl-[25px] xl:pl-[32px] 2xl:pl-[35px] 3xl:pl-[40px] mb-[10px] xl:mb-[13px] last-of-type:!mb-0 relative z-0 tracking-[-0.5px] before:content-[''] before:w-[16.67px] sm:before:w-[18px] xl:before:w-[20px] 3xl:before:w-[25px] before:aspect-square before:bg-no-repeat before:bg-contain before:absolute before:left-0 before:top-[4px] xl:before:top-[3px]",
                        variant === "JAFZA-Freezone" &&
                          "max-sm:before:top-[2px]",
                        variant === "MeydanFreeZone" &&
                          "xl:mb-[16px] xl:pl-[30px]",
                        variant === "DMCC-Freezone" &&
                          "xl:mb-[16px] xl:pl-[30px]",
                        index % 2 !== 0
                          ? "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3333%2024.4444C19.4698%2024.4444%2024.4444%2019.4698%2024.4444%2013.3333C24.4444%207.19678%2019.4698%202.22217%2013.3333%202.22217C7.19678%202.22217%202.22217%207.19678%202.22217%2013.3333C2.22217%2019.4698%207.19678%2024.4444%2013.3333%2024.4444Z%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%23FFCB18%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]"
                          : "before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M13.3328%2024.4444C19.4693%2024.4444%2024.4439%2019.4698%2024.4439%2013.3333C24.4439%207.19678%2019.4693%202.22217%2013.3328%202.22217C7.19629%202.22217%202.22168%207.19678%202.22168%2013.3333C2.22168%2019.4698%207.19629%2024.4444%2013.3328%2024.4444Z%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3Cpath%20d%3D%22M10%2013.3333L12.2222%2015.5555L16.6667%2011.1111%22%20stroke%3D%22%235280CA%22%20stroke-width%3D%222.22222%22/%3E%3C/svg%3E')]",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[#364153]",
                          variant === "ADGM-Foundation" &&
                            "text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.6]",
                          variant === "difc" && "text-[14px] xl:text-[16px] ",
                        )}
                      >
                        {parse(zone)}
                      </span>
                    </li>
                  ))}
                </ul>
                {item?.footer_description && (
                  <div className={cn("mt-[20px] sm:mt-[10px] xl:mt-[25px] 2xl:mt-[20px] text-[16px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[24px] leading-normal font-normal text-[#4E4E4E]",  variant === "difc" && "text-[14px] xl:text-[16px] ",)}>
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
                <div
                  className={cn(
                    "w-full h-full rounded-[15px]   overflow-hidden block relative z-0 before:content-[''] before:w-[15px] before:h-full before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:bg-[#F8F8F8] after:rounded-[15px] after:absolute after:-z-1 after:inset-0 after:translate-x-[2px]",
                    variant === "ifza" && "after:xl:translate-x-[3px]",
                    variant === "JAFZA-Freezone" &&
                      "after:xl:translate-x-[3px]",
                    variant === "MeydanFreeZone" && "max-sm:min-h-[212px]",
                    variant === "DMCC-Freezone" &&
                      "max-sm:min-h-[212px] xl:min-h-[160px] after:xl:translate-x-[3px]",
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full h-full p-[23px_35px] sm:p-[25px] xl:p-[32px_36px_28px] 2xl:p-[35px_40px] 3xl:p-[40px_50px] overflow-hidden rounded-[15px] after:absolute after:content-[''] after:rounded-[15px] after:top-0 after:right-0 after:w-[calc(100%-3px)] after:h-full after:bg-[#F8F8F8] after:-z-1 z-0",
                      variant === "difc" && " xl:p-[37px_36px_32px]",
                      variant === "ifza" && " xl:p-[32px_36px_33px]",
                      variant === "DMCC-Freezone" &&
                        " xl:p-[32px_49px_30px_36px] xl:after:hidden",
                    )}
                  >
                    <div
                      className={cn(
                        " font-medium text-[#003268] mb-[8px] sm:mb-[15px] text-[24px] leading-[150%] sm:text-[18px] xl:text-[24px] 2xl:text-[25px] 3xl:text-[32px] z-[99]",
                        variant === "difc" &&
                          "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] leading-[150%] text-[#003268] md:text-[#1C5396] font-semibold xl:mb-[24px]",
                        variant === "difc-regulated" &&
                          "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-semibold",
                        variant === "regulatory" &&
                          "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-semibold",

                        variant === "audit" && " text-[#1C5396]",
                        variant === "RAK-Offshore" &&
                          " text-[#1C5396] mb-[10px]",
                        variant === "ifza" && " text-[#1C5396] xl:mb-[8px]",
                        variant === "MeydanFreeZone" &&
                          "max-sm:mb-[5px] xl:mb-[8px]",
                        variant === "DMCC-Freezone" && "max-sm:mb-[2px]",
                        variant === "difc-regulated" &&
                          "max-sm:text-[#003268] sm:!text-[#1C5396]",
                      )}
                    >
                      {item.title}
                    </div>
                    <div
                      className={cn(
                        "text-[14px] xl:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] z-10 sm:leading-tight font-normal text-[#364153] sm:max-w-[90%] [&_p]:mb-[20px] xl:[&_p]:mb-[20px] 3xl:[&_p]:mb-[40px]",
                        variant === "Tax-Advisory" && "sm:max-w-[97%]",
                        variant === "RAK-Offshore" && "sm:max-w-full",
                        variant === "difc" &&
                          "!leading-[150%] sm:max-w-full [&_p]:last-of-type:mb-0",
                        variant === "ifza" && "xl:leading-[150%]",
                      )}
                    >
                      {/* {item.description} */}
                      {parse(item?.description)}
                    </div>
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
