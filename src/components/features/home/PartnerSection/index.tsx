'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'

const partners = [
    { id: 1, name: 'Bharathre', logo: '/images/Bharathre.png' },
    { id: 2, name: 'Hiranandani', logo: '/images/hiranandani.png' },
    { id: 3, name: 'Edelweiss', logo: '/images/Edleweiss.png' },
    { id: 4, name: 'Sharaf Group', logo: '/images/Sharaf.png' },
    { id: 5, name: 'Gorica Group', logo: '/images/Gorica.png' },
    { id: 6, name: 'logwin', logo: '/images/logwin.png' },
]

export default function PartnerSection() {
    return (
        <section className="bg-white py-[40px] lg:py-[60px] 2xl:py-[60px_90px] relative overflow-hidden">
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={15}
                    slidesPerView={2.8}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        480: {
                            spaceBetween: 10,
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1441: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1551: {
                            slidesPerView: 4,
                            spaceBetween: 70,
                        },
                    }}
                    className="w-full !p-[10px] !overflow-visible"
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id} className="!h-auto">
                            <div className="bg-white rounded-[4px] 2xl:rounded-[10px] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex items-center justify-center p-4 h-[60px] sm:h-[100px] xl:h-[120px] 2xl:min-h-[150px] 3xl:min-h-[200px] 
                            transition-all hover:-translate-y-1 hover:shadow-lg duration-300 border border-gray-50">
                                <div className="relative w-[90%] xl:w-[80%] h-full ">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
