'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Heading, Text } from '@/components/utils/typography'
import type { InsightItem } from '@/app/page'

type HomeOurInsightsProps = {
  data: {
    title: string
    items: InsightItem[]
  }
}

type InsightCardProps = {
  data: InsightItem
}

export default function HomeOurInsights({ data }: HomeOurInsightsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', () => onInit(emblaApi))
    emblaApi.on('reInit', () => onSelect(emblaApi))
    emblaApi.on('select', () => onSelect(emblaApi))
  }, [emblaApi, onInit, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )

  return (
    <section className="w-full py-8 xl:py-[70px_100px] 2xl:py-[80px_110px] overflow-hidden">
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>

        <div ref={emblaRef} className="w-full max-w-full ">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3.5 2xl:-mx-5 [&>*]:p-2 lg:[&>*]:p-3.5 2xl:[&>*]:p-5">
            {data.items.map((item) => (
              <div
                key={`insight-${item.id}`}
                className={cn(
                  'flex-[0_0_220px] sm:flex-[0_0_268px] lg:flex-[0_0_300px] 2xl:flex-[0_0_360px] 3xl:flex-[0_0_440px] min-w-0 select-none',
                )}
              >
                <InsightCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1 xl:gap-2 mt-4 xl:mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'w-2 xl:w-3 aspect-square rounded-full transition',
                index === selectedIndex ? 'bg-[#ffc916]' : 'bg-[#dedede]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* CARD                                                               */
/* ------------------------------------------------------------------ */

function InsightCard({ data }: InsightCardProps) {
  return (
    <div className="group w-full h-full flex flex-col bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="w-full aspect-440/268 overflow-hidden rounded-t-[8px]">
        <Image
          src={data.media.path || '/images/placeholder-image.png'}
          alt={data.media.alt || 'Insight Image'}
          width={440}
          height={268}
          className="object-cover hover:scale-120 transition"
        />
      </div>

      <div className="w-full p-3 xl:p-5 2xl:p-6 flex-1 flex flex-col">
        <Text size="p1" className="leading-none font-medium text-[#5280ca] mb-2 xl:mb-3 2xl:mb-4">
          {data.date} • {data.readTime}
        </Text>

        <div className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[21px] leading-normal font-semibold line-clamp-2 text-black mb-1.5 xl:mb-2.5 2xl:mb-3.5">
          {parse(data.title ?? 'title')}
        </div>

        <Text as="div" size="p1" className="leading-tight line-clamp-5 text-[#4e4e4e] mb-2 xl:mb-3 2xl:mb-4">
          {parse(data.description ?? '<p>no content</p>')}
        </Text>

        <Link
          href={data.slug ?? '#'}
          className="text-[12px] xl:text-[14px] 2xl:text-[17px] leading-tight font-medium text-[#1c5396] inline-flex items-center gap-2 mt-auto hover:[&_img]:translate-x-1 hover:text-[#ffc916] transition-colors duration-300"
        >
          Read More
          <Image
            src="/images/icon-arrow-right.svg"
            alt="Arrow Right"
            width={12}
            height={5}
            className="w-2.5 block mt-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  )
}
