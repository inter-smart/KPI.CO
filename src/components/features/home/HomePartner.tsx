'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { PartnerItem } from '@/app/page'

type HomePartnerProps = {
  data: PartnerItem[]
}

export default function HomePartner({ data }: HomePartnerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1.3, // Velocity (roughly equivalent to Swiper speed: 5000)
        stopOnInteraction: false,
        stopOnMouseEnter: false, // Handle manually for instant root-level response
      }),
    ],
  )

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const emblaNode = emblaApi.rootNode()

    // These handle the "instant pause" regardless of where the mouse is in the slider section
    const onMouseEnter = () => autoScroll.stop()
    const onMouseLeave = () => autoScroll.play()

    emblaNode.addEventListener('mouseenter', onMouseEnter)
    emblaNode.addEventListener('mouseleave', onMouseLeave)

    return () => {
      emblaNode.removeEventListener('mouseenter', onMouseEnter)
      emblaNode.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [emblaApi])

  // Duplication for seamless fill and loop
  const duplicatedData = [...data, ...data, ...data, ...data]

  return (
    <section id="clients" className="bg-white py-[40px] lg:py-[60px] 2xl:py-[50px_90px] relative overflow-hidden">
      <div className="container">
        <div ref={emblaRef} className="w-full !overflow-visible select-none">
          <div className="flex bg-transparent">
            {duplicatedData.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex-[0_0_150px] sm:flex-[0_0_200px] lg:flex-[0_0_250px] xl:flex-[0_0_300px] 3xl:flex-[0_0_400px] min-w-0 px-[10px] sm:px-[10px] lg:px-[15px] xl:px-[20px] 3xl:px-[35px]"
              >
                <div
                  className="partner-card bg-white rounded-[10px] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center p-4 h-[60px] sm:h-[100px] xl:h-[120px] xl:min-h-[150px] 3xl:min-h-[200px]
                             transition-transform duration-300 border border-gray-50 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="relative w-[90%] xl:w-[80%] h-full ">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain w-full h-full"
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
