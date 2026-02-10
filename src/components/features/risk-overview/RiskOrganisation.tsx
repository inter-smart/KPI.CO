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
    <section className="w-full bg-gradient-to-b from-[#fff] via-[#fff] to-[rgba(62,176,234,0.05)] md:to-[rgba(62,176,234,0.1)] pt-[45px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[100px] 3xl:pt-[125px] pb-[25px] lg:pb-[60px] xl:pb-[70px] 2xl:pb-[85px] 3xl:pb-[105px]">
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
                     <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1333 7.54444L9.36667 12.3222L7.53334 10.4889C7.43373 10.3726 7.31115 10.2781 7.17331 10.2114C7.03546 10.1447 6.88531 10.1072 6.73229 10.1013C6.57927 10.0954 6.42667 10.1212 6.28409 10.1771C6.14151 10.2329 6.01201 10.3177 5.90373 10.4259C5.79544 10.5342 5.71071 10.6637 5.65485 10.8063C5.59899 10.9489 5.57321 11.1015 5.57912 11.2545C5.58503 11.4075 5.62251 11.5577 5.6892 11.6955C5.75589 11.8334 5.85036 11.9559 5.96667 12.0556L8.57778 14.6778C8.68161 14.7808 8.80473 14.8622 8.94011 14.9175C9.07548 14.9728 9.22044 15.0008 9.36667 15C9.65816 14.9988 9.93749 14.883 10.1445 14.6778L15.7 9.12222C15.8041 9.01893 15.8868 8.89604 15.9432 8.76064C15.9996 8.62524 16.0287 8.48001 16.0287 8.33333C16.0287 8.18665 15.9996 8.04143 15.9432 7.90603C15.8868 7.77063 15.8041 7.64774 15.7 7.54444C15.4918 7.3375 15.2102 7.22134 14.9167 7.22134C14.6231 7.22134 14.3415 7.3375 14.1333 7.54444ZM11.1111 0C8.91355 0 6.76533 0.651655 4.93811 1.87256C3.1109 3.09346 1.68676 4.82878 0.845788 6.85907C0.00481427 8.88936 -0.215223 11.1234 0.213502 13.2788C0.642227 15.4341 1.70046 17.4139 3.25437 18.9679C4.80829 20.5218 6.7881 21.58 8.94345 22.0087C11.0988 22.4375 13.3329 22.2174 15.3632 21.3764C17.3934 20.5355 19.1288 19.1113 20.3497 17.2841C21.5706 15.4569 22.2222 13.3087 22.2222 11.1111C22.2222 9.65198 21.9348 8.20714 21.3764 6.85907C20.8181 5.51101 19.9996 4.28613 18.9679 3.25437C17.9361 2.22261 16.7112 1.40417 15.3632 0.845783C14.0151 0.287397 12.5702 0 11.1111 0ZM11.1111 20C9.35306 20 7.63448 19.4787 6.17271 18.502C4.71094 17.5252 3.57163 16.137 2.89885 14.5127C2.22607 12.8885 2.05005 11.1013 2.39303 9.37698C2.736 7.6527 3.58259 6.06885 4.82572 4.82572C6.06886 3.58258 7.65271 2.736 9.37698 2.39302C11.1013 2.05004 12.8885 2.22607 14.5127 2.89885C16.137 3.57163 17.5252 4.71094 18.502 6.17271C19.4787 7.63448 20 9.35306 20 11.1111C20 13.4686 19.0635 15.7295 17.3965 17.3965C15.7295 19.0635 13.4686 20 11.1111 20Z"
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
