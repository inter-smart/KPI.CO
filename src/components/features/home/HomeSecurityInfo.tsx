import Image from 'next/image'
import parse from 'html-react-parser'
import { Heading } from '@/components/utils/typography'
import type { SecurityInfoData } from '@/app/page'

type HomeSecurityInfoProps = {
  data: SecurityInfoData
}

export default function HomeSecurityInfo({ data }: HomeSecurityInfoProps) {
  return (
    <section className="w-full h-auto py-[40px] lg:py-17 2xl:py-20 3xl:py-25">
      <div className="container max-sm:px-[16.2px_17px]">
        <div className="sm:[--width:260px] xl:[--width:363px]  flex flex-wrap max-lg:gap-4 max-sm:flex-col-reverse">
          <div className="w-full xl:w-[calc(100%-var(--width))] xl:pr-25 2xl:pr-30 3xl:pr-30">
            <div className="typography">
              <Heading
                as="h2"
                size="h2"
                className="text-[#1C5396] xl:mb-6.25 2xl:mb-7.5 max-sm:hidden"
              >
                {data.title}
              </Heading>
              <div className="lg:[&_p]:text-[16px] xl:text-[18px] xl:[&_p]:text-[18px] 3xl:[&_p]:text-[24px] [&_p]:leading-[1.7] [&_p]:font-normal !text-[#4E4E4E] 3xl:max-w-[85%] lg:[&_p]:mb-6.25 2xl:[&_p]:mb-7.5">
                {parse(data.description || '')}
              </div>
            </div>
          </div>
          <div className="w-full max-sm:max-w-full max-xl:max-w-[50%] max-xl:m-auto xl:w-[var(--width)]">
            <Heading
              as="h2"
              size="h2"
              className="text-[#1C5396] mb-6.25 2xl:mb-7.5 sm:hidden"
            >
              {data.title}
            </Heading>
            <div className="text-center w-full max-sm:h-[301px] h-[342px] p-[40.55px_42.74px_39.18px_42.74px] lg:p-[40px_30px] xl:p-[46px_36px_45px_34px]  rounded-[9.35px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="w-[68.68px] h-[68.68px] lg:w-17.5 xl:w-[77.9px] h-auto aspect-square mx-auto mb-[17.17px] xl:mb-[19.48px]  overflow-hidden block">
                <Image
                  src={data.isoInfo.media.url || '/images/placeholder.png'}
                  alt={data.isoInfo.media.alt || 'ISO certification'}
                  width={70}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[21.98px] lg:text-[22px] xl:text-[24.93px]  leading-[26.37px] xl:leading-[29.92px] font-bold text-[#1C5396] mb-[5px] xl:mb-[6.23px]">
                {data.isoInfo.label}
              </div>
              <div className="text-[10.99px] xl:text-[12.46px] leading-[16.48px] xl:leading-[18.7px] font-semibold text-[#4E4E4E] w-auto h-auto pb-[6.23px]  mb-[9.02px] xl:mb-[10.23px]  relative z-0 inline-flex before:content-[''] before:w-full before:h-[2px] before:bg-linear-to-t before:from-[#3EB0EA] before:to-[#1C5396] before:absolute before:z-1 before:inset-[auto_0_0_0]">
                Certified
              </div>
              <div className="text-[11.91px] lg:text-[12px] xl:text-[13.51px]  leading-[20.27px] font-medium text-[#4E4E4E] max-sm:max-w-[256.57px] max-sm:m-auto p-[16.04px_24.58px_13.02px_24.09px] lg:p-[15px_25px] xl:p-[16.63px_24.95px]   bg-[#F8F9FB] rounded-[8.32px] overflow-hidden">
                 {parse(data.isoInfo.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
