"use client";

import { Heading } from "@/components/utils/typography";
import Image from "next/image";
import parse from "html-react-parser";
import { RiskOrganisationData } from "@/app/risk-overview/page";


export type RiskOrganisationProps = {
  data: RiskOrganisationData;
};

export default function RiskOrganisation({ data }: RiskOrganisationProps) {
  const items = data?.items ?? [];

  return (
    <section className="w-full bg-gradient-to-b from-[#fff] via-[#fff] to-[rgba(62,176,234,0.2)] pt-[125px] pb-[105px]">
      <div className="container">
        <div className="flex max-md:flex-col-reverse md:gap-[30px] lg:gap-[40px] xl:gap-[45px] 2xl:gap-[57px] 3xl:gap-[75px]">
          
          <div className="w-full md:w-[57%] xl:w-[60%]">
            {(data?.title || data?.description) && (
              <div className="mb-6.25 lg:mb-4 2xl:mb-9 3xl:mb-10">
                {data?.title && (
                  <Heading
                    as="h2"
                    size="h2"
                    className="hidden md:block text-[#1C5396] mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]"
                  >
                    {data.title}
                  </Heading>
                )}

                {data?.description && (
                  <div className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] leading-normal text-[#4E4E4E] [&_p]:mb-[10px] xl:[&_p]:mb-[15px] 3xl:[&_p]:mb-[24px]">
                    {parse(data.description)}
                  </div>
                )}
              </div>
            )}

            {items.length > 0 && (
              <ul className="space-y-4 lg:space-y-5 2xl:space-y-6">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="relative pl-[25px] 3xl:pl-[35px] text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E]"
                  >
                    <span className="absolute left-0 top-[6px] w-[16px] h-[16px] 3xl:w-[23px] 3xl:h-[23px]">
                      <svg viewBox="0 0 23 23" fill="none">
                        <path
                          d="M14.1333 7.54444L9.36667 12.3222L7.53334 10.4889C7.43373 10.3726 7.31115 10.2781 7.17331 10.2114C7.03546 10.1447 6.88531 10.1072 6.73229 10.1013C6.57927 10.0954 6.42667 10.1212 6.28409 10.1771C6.14151 10.2329 6.01201 10.3177 5.90373 10.4259C5.79544 10.5342 5.71071 10.6637 5.65485 10.8063C5.59899 10.9489 5.57321 11.1015 5.57912 11.2545C5.58503 11.4075 5.62251 11.5577 5.6892 11.6955C5.75589 11.8334 5.85036 11.9559 5.96667 12.0556L8.57778 14.6778C8.68161 14.7808 8.80473 14.8622 8.94011 14.9175C9.07548 14.9728 9.22044 15.0008 9.36667 15C9.65816 14.9988 9.93749 14.883 10.1445 14.6778L15.7 9.12222C15.8041 9.01893 15.8868 8.89604 15.9432 8.76064C15.9996 8.62524 16.0287 8.48001 16.0287 8.33333C16.0287 8.18665 15.9996 8.04143 15.9432 7.90603C15.8868 7.77063 15.8041 7.64774 15.7 7.54444C15.4918 7.3375 15.2102 7.22134 14.9167 7.22134C14.6231 7.22134 14.3415 7.3375 14.1333 7.54444Z"
                          fill="#5280CA"
                        />
                      </svg>
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            )}

            {data?.ftr_description && (
              <div className="mt-6 lg:mt-7 2xl:mt-8 text-[16px] 2xl:text-[19px] 3xl:text-[24px] leading-normal text-[#4E4E4E]">
                {parse(data.ftr_description)}
              </div>
            )}
          </div>

          {data?.media?.path && (
            <div className="w-full md:w-[43%] xl:w-[40%]">
              <div className="block md:hidden mb-6.25 lg:mb-4 2xl:mb-9 3xl:mb-10">
                {data?.title && (
                  <Heading
                    as="h2"
                    size="h2"
                    className="text-[#1C5396] mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]"
                  >
                    {data.title}
                  </Heading>
                )}
              </div>

              <div className="w-full h-full rounded-[12px] overflow-hidden max-md:mb-6">
                <Image
                  src={data.media.path}
                  alt={data.media.alt || data?.title || "image"}
                  width={615}
                  height={636}
                  className="w-full h-full object-fill"
                  priority={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
