'use client'

import { useEffect } from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Heading } from '@/components/utils/typography'
import type { AffiliationItem } from '@/app/page'

type HomeProfessionalAffiliationsProps = {
  data: {
    title: string
    items: AffiliationItem[]
  }
}

export default function HomeProfessionalAffiliations({ data }: HomeProfessionalAffiliationsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 1.5,
        stopOnInteraction: false,
        stopOnMouseEnter: false, // Handle manually for instant response
      }),
    ],
  )

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const emblaNode = emblaApi.rootNode()

    const onMouseEnter = () => autoScroll.stop()
    const onMouseLeave = () => autoScroll.play()

    emblaNode.addEventListener('mouseenter', onMouseEnter)
    emblaNode.addEventListener('mouseleave', onMouseLeave)

    return () => {
      emblaNode.removeEventListener('mouseenter', onMouseEnter)
      emblaNode.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [emblaApi])

  return (
    <section className="w-full py-8 xl:py-[90px] 2xl:py-[100px] overflow-hidden">
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-[#1c5396] mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>

        <div ref={emblaRef} className="w-full max-w-full">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3.5 2xl:-mx-5 [&>*]:p-2 lg:[&>*]:p-3.5 2xl:[&>*]:p-5">
            {data.items.map((item) => (
              <div
                key={`affiliation-${item.id}`}
                className={cn(
                  'flex-[0_0_113px] sm:flex-[0_0_200px] lg:flex-[0_0_240px] 2xl:flex-[0_0_300px] 3xl:flex-[0_0_360px] min-w-0 select-none',
                )}
              >
                <div className="w-full h-[64px] md:h-[100px] xl:h-[130px] 2xl:h-[160px] rounded-lg flex items-center justify-center bg-white shadow-[0_5px_7px_0_rgba(0,0,0,0.07)] md:shadow-[0_12px_25px_0_rgba(0,0,0,0.1)] hover:shadow-xl transition">
                  <div className="w-[65px] md:w-[120px] xl:w-[150px] 2xl:w-[180px] ">
                    <Image
                      src={item.media.path || '/images/placeholder-image.png'}
                      alt={item.media.alt || 'Professional Affiliations'}
                      width={230}
                      height={95}
                      className="w-full aspect-2/1 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
