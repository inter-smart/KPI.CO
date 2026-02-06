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
      <div className="container">
        <div className="md:[--width:260px] xl:[--width:320px] 2xl:[--width:390px] 3xl:[--width:480px] flex flex-wrap max-lg:gap-4 max-sm:flex-col-reverse">
          <div className="w-full xl:w-[calc(100%-var(--width))] xl:pr-25 2xl:pr-30 3xl:pr-30">
            <div className="typography">
              <Heading
                as="h2"
                size="h2"
                className="text-[#1C5396] xl:mb-6.25 2xl:mb-7.5 max-sm:hidden"
              >
                {data.title}
              </Heading>
              <div className="lg:[&_p]:text-[16px] 2xl:[&_p]:text-[19px] 3xl:[&_p]:text-[24px] [&_p]:leading-[1.7] [&_p]:font-normal text-[#4E4E4E] 3xl:max-w-[85%] lg:[&_p]:mb-6.25 2xl:[&_p]:mb-7.5">
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
            <div className="text-center w-full h-auto p-[40px] lg:p-[40px_30px] 2xl:p-[50px_35px] 3xl:p-[60px_50px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="w-[70px] h-[70px] lg:w-17.5 2xl:w-22 3xl:w-25 h-auto aspect-square mx-auto mb-[20px] lg:mb-5 3xl:mb-6.25 overflow-hidden block">
                <Image
                  src={data.isoInfo.media.url || '/images/placeholder.png'}
                  alt={data.isoInfo.media.alt || 'ISO certification'}
                  width={70}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="lg:text-[22px] 2xl:text-[26px] 3xl:text-[34px] leading-normal font-bold text-[#1C5396] mb-2.5">
                {data.isoInfo.label}
              </div>
              <div className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-normal font-semibold text-[#4E4E4E] w-auto h-auto pb-1.25 2xl:pb-2 mb-0 2xl:mb-3.75 relative z-0 inline-flex before:content-[''] before:w-full before:h-[2px] before:bg-linear-to-t before:from-[#3EB0EA] before:to-[#1C5396] before:absolute before:z-1 before:inset-[auto_0_0_0]">
                Certified
              </div>
              <div className="text-[11px] lg:text-[12px] 2xl:text-[15px] 3xl:text-[18px] leading-normal font-medium text-[#4E4E4E] max-sm:max-w-[87%] max-sm:m-auto p-[20px_15px] lg:p-[15px_25px] 2xl:p-[20px_30px] 3xl:p-[25px_35px] bg-[#F8F9FB] rounded-[10px] overflow-hidden">
                {data.isoInfo.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
