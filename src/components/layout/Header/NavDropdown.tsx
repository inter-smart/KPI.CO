'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type SubItem = {
    name: string
    href: string
    subItems?: SubItem[]
}

export type MegaCategory = {
    id: string
    label: string
    icon?: React.ReactNode | string
    href?: string
    subItems: SubItem[]
}

type NavDropdownProps = {
    categories: MegaCategory[]
    isVisible: boolean
}

const LINK_STYLES = "text-[16px] md:text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-[#1C5396] font-medium hover:text-[#1C5396] transition-colors"

export default function NavDropdown({ categories, isVisible }: NavDropdownProps) {
    const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0]?.id || '')

    const activeCategory = categories.find((cat) => cat.id === activeCategoryId) || categories[0]

    // Determine if we should show a CTA card based on the category
    const isResource = activeCategoryId === 'glossary';
    const isAbout = activeCategoryId === 'clients';
    const showCTACard = activeCategoryId === 'digital' || isResource || isAbout;

    // Check if the current category has any right-side content (CTA card or sub-items)
    const hasSubItems = activeCategory?.subItems && activeCategory.subItems.length > 0;
    const hasNestedItems = activeCategory?.subItems?.some(item => item.subItems && item.subItems.length > 0);
    const hasRightContent = showCTACard || hasSubItems || hasNestedItems;

    return (
        <div
            className={cn(
                "absolute top-[calc(100%-1px)] left-0 bg-white shadow-[0_6px_6px_rgba(0,0,0,0.25)] p-[20px_0] 2xl:p-[25px_0] 3xl:p-[30px_0] rounded-b-3xl overflow-hidden  origin-top",
                // Dynamic width: only full width if there's right content
                hasRightContent
                    ? "w-[590px] xl:w-[730px] 2xl:w-[750px] 3xl:w-[1000px]"
                    : "w-[300px] xl:w-[330px] 2xl:w-[350px] 3xl:w-[410px]",
                isVisible ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-3 scale-[0.98] pointer-events-none"
            )}
        >
            <div className="flex">
                {/* Left Column: Categories */}
                <div className={cn(
                    "w-[300px] xl:w-[330px] 2xl:w-[350px] 3xl:w-[410px] bg-white  ",
                    hasRightContent ? "border-r border-black/10" : "border-r-0"
                )}>
                    <div className="flex flex-col p-[0_15px] xl:p-[0_20px] 2xl:p-[0_25px] 3xl:p-[0_30px]">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={category.href || '#'}
                                onMouseEnter={() => setActiveCategoryId(category.id)}
                                className={cn(
                                    "group flex items-center justify-between px-[10px] 2xl:px-4 py-[9px] xl:py-[10px] rounded-[8px] xl:rounded-[10px] transition-all cursor-pointer mb-[8px] 2xl:mb-[15px]",
                                    activeCategoryId === category.id
                                        ? "bg-[rgba(143,216,254,0.15)] text-[#1C5396]"
                                        : "hover:bg-gray-50 text-[#4E4E4E]"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    {category.icon && (
                                        <div className={cn(
                                            "w-[30px] xl:w-[34px] 3xl:w-[42px] h-[30px] xl:h-[34px] 3xl:h-[42px] rounded-[8px] xl:rounded-[10px] flex items-center justify-center transition-all bg-gradient-to-b from-[#053269] to-[#6A9FE0] ",
                                            activeCategoryId === category.id
                                                ? "text-white shadow-md shadow-blue-200"
                                                : "group-hover:bg-[#E9ECEF] text-[#1C5396]"
                                        )}>
                                            {typeof category.icon === 'string' ? (
                                                <div className="relative w-[13px] xl:w-[18px] h-[13px] xl:h-[18px] 3xl:w-[22px] 3xl:h-[22px]">
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
                                    )}
                                    <span className={`${LINK_STYLES} whitespace-nowrap`}>{category.label}</span>
                                </div>
                                {activeCategoryId === category.id && hasRightContent && (
                                    <div className="w-[7px] h-[12px]">
                                        <svg viewBox="0 0 7 12" fill="none" className='w-full h-full object-contain'>
                                            <path d="M6.34751 4.83818L1.82485 0.315518C1.72569 0.215541 1.60771 0.136187 1.47773 0.0820338C1.34774 0.0278805 1.20832 0 1.06751 0C0.926699 0 0.78728 0.0278805 0.657297 0.0820338C0.527314 0.136187 0.409339 0.215541 0.310179 0.315518C0.111511 0.515372 0 0.78572 0 1.06752C0 1.34932 0.111511 1.61966 0.310179 1.81952L4.08618 5.59552L0.310179 9.37152C0.111511 9.57137 0 9.84172 0 10.1235C0 10.4053 0.111511 10.6757 0.310179 10.8755C0.409848 10.9744 0.528052 11.0526 0.658012 11.1057C0.787972 11.1588 0.927132 11.1857 1.06751 11.1849C1.20789 11.1857 1.34705 11.1588 1.47701 11.1057C1.60697 11.0526 1.72518 10.9744 1.82485 10.8755L6.34751 6.35285C6.44749 6.25369 6.52684 6.13572 6.581 6.00573C6.63515 5.87575 6.66303 5.73633 6.66303 5.59552C6.66303 5.45471 6.63515 5.31529 6.581 5.1853C6.52684 5.05532 6.44749 4.93735 6.34751 4.83818Z" fill="#1C5396" />
                                        </svg>
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sub-items or CTA Card */}
                {hasRightContent && (
                    <div className="flex-1 bg-white relative p-[0_15px] xl:p-[0_20px]  2xl:p-[0_25px] 3xl:p-[0_30px] overflow-y-auto">
                        {!showCTACard ? (
                            <div className={cn(
                                "grid gap-1 xl:gap-2",
                                hasNestedItems ? "grid-cols-2" : "grid-cols-1"
                            )}>
                                {activeCategory?.subItems.map((item, index) => (
                                    <div key={`${activeCategory.id}-${index}`} className="flex flex-col gap-1">
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "group flex items-center w-full px-[15px] py-3 2xl:py-[11px] rounded-[10px] transition-all",
                                                item.subItems ? "hover:bg-transparent px-0" : "hover:bg-[rgba(143,216,254,0.15)]"
                                            )}
                                        >
                                            <span className={cn(
                                                "text-[13px] 2xl:text-[14px] 3xl:text-[18px] font-bold transition-colors",
                                                "text-[#1C5396] group-hover:text-[#1C5396]",
                                                !item.subItems && "font-medium"
                                            )}>
                                                {item.name}
                                            </span>
                                        </Link>

                                        {item.subItems && item.subItems.length > 0 && (
                                            <div className="flex flex-col gap-1 pl-4">
                                                {item.subItems.map((sub, subIdx) => (
                                                    <Link
                                                        key={`${activeCategory.id}-${index}-${subIdx}`}
                                                        href={sub.href}
                                                        className="text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[#4E4E4E] hover:text-[#1C5396] py-1 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-full w-full flex flex-col justify-start">
                                <div className={cn(
                                    "relative w-full h-full lg:h-[90%] min-h-[150px] rounded-[6px] overflow-hidden p-[20px] 2xl:p-[20px] 3xl:p-[25px_35px] text-white group cursor-pointer shadow-lg",
                                    activeCategoryId === 'digital' ? "bg-[linear-gradient(360deg,#3EB0EA_0%,#389FDB_18%,#1C5396_100%)]" :
                                        isResource ? "bg-[linear-gradient(360deg,#6A9FE0_0%,#5589CB_35%,#3570B8_100%)]" :
                                            "bg-[linear-gradient(360deg,#4A7DBF_0%,#2D5B94_40%,#1C5396_100%)]"
                                )}>
                                    {activeCategoryId === 'digital' && (
                                        <div className="absolute top-0 left-0 w-full h-full ">
                                            <Image src="/images/dropBg.png" fill className='object-cover' alt="backgroundd_img" />
                                        </div>
                                    )}
                                    {isResource && (
                                        <div className="absolute top-0 left-0 w-full h-full ">
                                            <Image src="/images/glsaaryBg.png" fill className='object-cover' alt="backgroundd_img" />
                                        </div>
                                    )}

                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                        <h4 className="text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[21px]  font-semibold text-white mb-[20px] 2xl:mb-[25px] leading-relaxed line-clamp-3 ">
                                            {activeCategoryId === 'digital' ? 'Empowering Businesses with Innovative Technology Solutions' :
                                                isResource ? 'Practical Insights for Your Business Success' :
                                                    '30+ Years of Expertise That Drives Real Results'}
                                        </h4>
                                        <Link href={activeCategory?.href || '/'} className="flex items-center text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[21px] font-semibold" aria-label="learn_more">
                                            Learn more <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
