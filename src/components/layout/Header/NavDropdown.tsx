'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type SubItem = {
    name: string
    href: string
}

export type MegaCategory = {
    id: string
    label: string
    icon: React.ReactNode | string
    subItems: SubItem[]
}

type NavDropdownProps = {
    categories: MegaCategory[]
    isVisible: boolean
}

export default function NavDropdown({ categories, isVisible }: NavDropdownProps) {
    const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0]?.id || '')

    const activeCategory = categories.find((cat) => cat.id === activeCategoryId) || categories[0]

    // Determine if we should show a CTA card based on the category
    const showCTACard = activeCategoryId === 'digital' || activeCategoryId === 'insights' || activeCategoryId === 'materials' || activeCategoryId === 'company' || activeCategoryId === 'people';

    return (
        <div
            className={cn(
                "absolute top-[calc(100%-1px)] left-0 w-[550px] xl:w-[610px] 2xl:w-[750px] 3xl:w-[1000px] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-b-3xl border border-gray-100 overflow-hidden transition-all duration-350 ease-out z-50 origin-top",
                isVisible ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-3 scale-[0.98] pointer-events-none"
            )}
        >
            <div className="flex min-h-[360px]">
                {/* Left Column: Categories */}
                <div className="w-[280px] border-r border-gray-50 p-6 bg-white">
                    <div className="flex flex-col gap-1.5">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                onMouseEnter={() => setActiveCategoryId(category.id)}
                                className={cn(
                                    "group flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer",
                                    activeCategoryId === category.id
                                        ? "bg-[#F3F9FF] text-[#1C5396]"
                                        : "hover:bg-gray-50 text-[#4E4E4E]"
                                )}
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className={cn(
                                        "w-[34px] 3xl:w-[42px] h-[34px] 3xl:h-[42px] rounded-lg flex items-center justify-center transition-all bg-gradient-to-b from-[#6A9FE0] to-[#053269]",
                                        activeCategoryId === category.id
                                            ? "text-white shadow-md shadow-blue-200"
                                            : "group-hover:bg-[#E9ECEF] text-[#1C5396]"
                                    )}>
                                        {typeof category.icon === 'string' ? (
                                            <div className="relative w-[18px] h-[18px] 3xl:w-[22px] 3xl:h-[22px]">
                                                <Image
                                                    src={category.icon.endsWith('.svg') || category.icon.includes('.') ? category.icon : `${category.icon}.svg`}
                                                    alt={category.label}
                                                    fill
                                                    className="object-contain brightness-0 invert"
                                                />
                                            </div>
                                        ) : (
                                            category.icon
                                        )}
                                    </div>
                                    <span className="font-semibold text-[14.5px] whitespace-nowrap">{category.label}</span>
                                </div>
                                {activeCategoryId === category.id && (
                                    <ChevronRight className="w-4 h-4 text-[#1C5396]/60" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sub-items or CTA Card */}
                <div className="flex-1 p-8 bg-white relative">
                    {!showCTACard ? (
                        <div className="grid grid-cols-1 gap-2">
                            {activeCategory?.subItems.map((item, index) => (
                                <Link
                                    key={`${activeCategory.id}-${index}`}
                                    href={item.href}
                                    className="group flex items-center px-4 py-3 rounded-xl hover:bg-[#F3F9FF] transition-all"
                                >
                                    <span className={cn(
                                        "text-[15px] font-medium transition-colors",
                                        "text-[#4E4E4E] group-hover:text-[#1C5396]"
                                    )}>
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center">
                            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C5396] to-[#3EB0EA] p-8 text-white group cursor-pointer shadow-lg">
                                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 bg-[url('/images/dropdown-cta-bg.png')] bg-cover bg-no-repeat transition-transform group-hover:scale-110 duration-700"></div>

                                <div className="relative z-10 flex flex-col h-full justify-center">
                                    <h4 className="text-[18px] font-bold mb-3 leading-tight max-w-[220px]">
                                        {activeCategoryId === 'digital' ? 'Empowering Businesses with Innovative Technology Solutions' :
                                            activeCategoryId === 'insights' || activeCategoryId === 'materials' ? 'Practical Insights for Your Business Success' :
                                                '30+ Years of Expertise That Drives Real Results'}
                                    </h4>
                                    <div className="flex items-center text-[14px] font-semibold mt-auto">
                                        Learn more <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
