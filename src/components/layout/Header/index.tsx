'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, FileText, Users, ShieldCheck, Cpu, BookOpen, Briefcase, Globe, Info } from 'lucide-react';
import NavDropdown, { MegaCategory } from './NavDropdown';

const navItems = [
  { label: 'Home', href: '/', subItems: [] },
  {
    label: 'Services',
    href: '/services',
    isMega: true,
    megaCategories: [
      {
        id: 'audit',
        label: 'Audit & Assurance',
        icon: "/images/audit_icon.svg",
        href: '/',
        subItems: [
          { name: 'Financial Statement Audit', href: '/services/audit/financial' },
          { name: 'Agreed Upon Procedures', href: '/services/audit/agreed' },
          { name: 'ADGM Regulated Audit', href: '/services/audit/adgm' },
          { name: 'DIFC & DFSA Regulated Audit', href: '/services/audit/difc' },
        ]
      },
      {
        id: 'advisory',
        label: 'Advisory Services',
        icon: "/images/advisory_icon.svg",
        href: '/advisory-services-uae',
        subItems: [
          { name: 'Corporate Services', href: '/corporate-services-uae' },
          { name: 'Advisory Services', href: '/advisory-services-uae' },
          { name: 'Mainland Company Formation', href: '/mainland-company-formation-uae' },
          { name: 'Dubai Silicon Oasis', href: '/company-formation-dubai-silicon-oasis' },
          { name: 'Sharjah Airport Free Zone', href: '/business-setup-sharjah-airport-international-free-zone' },
        ]
      },
      {
        id: 'compliance',
        label: 'Risk & Compliance',
        icon: "/images/risk_icon.svg",
        href: '/risk-overview',
        subItems: [
          { name: 'Enterprise Risk Management', href: '/risk-overview' },
          { name: 'Internal Audit Services', href: '/risk-overview' },
          { name: 'Standard Operating Procedures', href: '/risk-overview' },
          { name: 'Regulatory & Compliance Advisory', href: '/risk-overview' },
        ]
      },
      {
        id: 'digital',
        label: 'Digital Transformation',
        icon: "/images/digital_icon.svg",
        href: '/',
        subItems: [
        ]
      }
    ] as MegaCategory[]
  },
  {
    label: 'Resources',
    href: '/resources',
    isMega: true,
    megaCategories: [
      {
        id: 'blogs',
        label: 'Blogs',
        href: '/blog',
        subItems: []
      },
      {
        id: 'glossary',
        label: 'Glossary',
        href: '/',
        subItems: []
      },
      {
        id: 'newsroom',
        label: 'Newsroom',
        href: '/',
        subItems: [
        ]
      }
    ] as MegaCategory[]
  },
  {
    label: 'About',
    href: '/about',
    isMega: true,
    megaCategories: [
      {
        id: 'about-us',
        label: 'About us',
        href: '/about',
        subItems: []
      },
      {
        id: 'clients',
        label: 'Our Clients',
        href: '/',
        subItems: []
      },
      {
        id: 'contact',
        label: 'Contact Us',
        href: '/contact',
        subItems: []
      }
    ] as MegaCategory[]
  },
]

const site_settings = {
  header_logo_value: "/images/logo-2.svg",
  header_logo_alt_text_value: "KPI Logo"
};

export default function Header() {
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <header className="w-full h-[var(--header-y)] bg-white sticky top-0 z-50 shadow-sm flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Logo Section */}
          <div className="w-[120px] lg:w-[100px] xl:w-[130px] 2xl:w-[150px] 3xl:w-[180px]">
            <Link href="/" className="flex items-center w-full">
              <Image
                src={site_settings.header_logo_value}
                alt={site_settings.header_logo_alt_text_value}
                width={140}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex items-center justify-end lg:justify-between lg:pl-[60px] xl:pl-[80px] 2xl:pl-[100px]">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {/* Home Link (No Dropdown) */}
              <Link
                href={navItems[0].href}
                className="text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] font-medium text-[#1C5396] whitespace-nowrap"
              >
                {navItems[0].label}
              </Link>

              {/* Mega Menu Container - Fixed Alignment Point */}
              <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10 relative h-full group/nav">
                {navItems.slice(1).map((item, index) => (
                  <div
                    key={index}
                    className="group"
                    onMouseEnter={() => item.isMega && setActiveMegaMenu(item.label)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] font-medium flex items-center gap-1.5 text-[#1C5396] py-6"
                    >
                      {item.label}
                      {item.isMega && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === item.label ? 'rotate-180' : ''}`} />
                      )}
                    </Link>

                    {/* Desktop Dropdown - Anchored to the start of the 'Services' link container */}
                    {item.isMega && item.megaCategories && (
                      <NavDropdown
                        categories={item.megaCategories}
                        isVisible={activeMegaMenu === item.label}
                      />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Action Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-[#1E1E1E] bg-[#FFC916]  flex items-center
                   justify-center font-semibold px-7 py-2.5 rounded-[8px] transition-all duration-300 shadow-none  hover:scale-105 active:scale-95 "
                >
                  Get in Touch
                </Link>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden">
                <Sheet open={menuSheetOpen} onOpenChange={setMenuSheetOpen}>
                  <SheetTrigger className="p-2">
                    <div className="w-[26px] h-[17px] flex flex-col justify-around">
                      <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4957 1.88666L1.31954 1.88666C1.14043 1.89834 0.960653 1.89445 0.782225 1.87502C0.567692 1.85601 0.368353 1.75635 0.224424 1.59613C0.0804939 1.43591 0.00268745 1.22707 0.00670242 1.01174C-0.0214348 0.784451 0.0402031 0.555155 0.178511 0.372614C0.316818 0.190072 0.52088 0.0686867 0.747299 0.034273C0.946793 0.00222254 1.14925 -0.00738966 1.35088 0.00561619C8.80193 0.00681031 16.2528 0.00890005 23.7036 0.011885C24.6434 0.011885 25.0433 0.28681 25.0545 0.932482C25.0657 1.60412 24.6595 1.8889 23.6722 1.88935C19.9469 1.89144 16.2213 1.89159 12.4957 1.8898V1.88666Z" fill="black" />
                        <path d="M12.5228 14.8731L23.6963 14.8731C23.8979 14.8614 24.1002 14.8654 24.3012 14.8852C24.5163 14.9051 24.7152 15.0084 24.8552 15.173C24.9953 15.3376 25.0654 15.5504 25.0507 15.7659C25.0765 15.9811 25.0173 16.1978 24.8858 16.3699C24.7543 16.5421 24.5607 16.6562 24.3464 16.6879C24.1688 16.7148 23.989 16.724 23.8095 16.7152C16.3385 16.7131 8.8673 16.7104 1.39596 16.7071C0.382227 16.7071 -0.00463867 16.4483 0.00297356 15.7794C0.0105839 15.1194 0.38715 14.874 1.417 14.8731C5.11909 14.8716 8.82103 14.8716 12.5228 14.8731Z" fill="black" />
                        <path d="M17.674 7.46294C19.7386 7.46294 21.8032 7.45801 23.8683 7.46294C24.6586 7.46697 25.0446 7.76921 25.0526 8.35756C25.0607 8.94592 24.6635 9.27682 23.8943 9.27727C19.691 9.28085 15.4878 9.28085 11.2849 9.27727C10.5944 9.27727 10.1686 8.92712 10.1587 8.38622C10.1489 7.84533 10.5819 7.46921 11.2584 7.46607C13.3969 7.45801 15.5354 7.46339 17.674 7.46294Z" fill="black" />
                      </svg>

                    </div>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[350px] p-0 overflow-y-auto">
                    <SheetHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <SheetTitle className="text-left">
                          <Image
                            src={site_settings.header_logo_value}
                            alt={site_settings.header_logo_alt_text_value}
                            width={100}
                            height={30}
                            className="w-auto h-8"
                          />
                        </SheetTitle>
                      </div>
                    </SheetHeader>

                    <div className="flex flex-col h-full bg-white">
                      <nav className="flex-1 px-4 py-0 overflow-y-auto pb-24">
                        <div className="flex flex-col space-y-2">
                          {/* Home Link */}
                          <Link
                            href={navItems[0].href}
                            className="text-[16px] font-semibold text-[#1C5396] px-0 py-3 border-b border-[#DDDCDE]"
                            onClick={() => setMenuSheetOpen(false)}
                          >
                            {navItems[0].label}
                          </Link>

                          {/* Nested Accordions */}
                          <Accordion type="single" collapsible className="w-full">
                            {navItems.slice(1).map((item, idx) => (
                              <AccordionItem key={idx} value={`item-${idx}`} className="border-0 shadow-none border-b border-[#DDDCDE]">
                                <AccordionTrigger className="text-[16px] font-semibold text-[#1C5396] hover:no-underline px-0 py-4">
                                  {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pl-0">
                                  {item.isMega && item.megaCategories ? (
                                    <Accordion type="single" collapsible className="w-full space-y-2">
                                      {item.megaCategories.map((mega, mIdx) => (
                                        <AccordionItem key={mIdx} value={`mega-${idx}-${mIdx}`} className="border-none">
                                          <AccordionTrigger
                                            className="hover:no-underline py-2"
                                            hideIcon={mega.subItems.length === 0}
                                          >
                                            <div className="flex items-center gap-3">
                                              {mega.icon && (
                                                <div className="w-8 h-8 rounded-[6px] flex items-center justify-center bg-gradient-to-b from-[#6A9FE0] to-[#053269]">
                                                  {typeof mega.icon === 'string' ? (
                                                    <div className="relative w-5 h-5">
                                                      <Image
                                                        src={mega.icon.endsWith('.svg') || mega.icon.includes('.') ? mega.icon : `${mega.icon}.svg`}
                                                        alt={mega.label}
                                                        fill
                                                        className="object-contain brightness-0 invert"
                                                      />
                                                    </div>
                                                  ) : (
                                                    mega.icon
                                                  )}
                                                </div>
                                              )}
                                              <span className="text-[15px] font-normal text-[#1C5396]">{mega.label}</span>
                                            </div>
                                          </AccordionTrigger>
                                          <AccordionContent className="pl-11 pt-1">
                                            <div className="flex flex-col space-y-1">
                                              {mega.subItems.map((sub, sIdx) => (
                                                <Link
                                                  key={sIdx}
                                                  href={sub.href}
                                                  className="text-[12px] sm:text-[14px] font-normal text-[#1C5396] py-2 px-1 rounded-md hover:bg-[rgba(143,216,254,0.15)]"
                                                  onClick={() => setMenuSheetOpen(false)}
                                                >
                                                  {sub.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </AccordionContent>
                                        </AccordionItem>
                                      ))}
                                    </Accordion>
                                  ) : null}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>

                          {/* Mobile Action Button - Now Under About */}
                          <div className="pt-8">
                            <Link
                              href="/contact"
                              className="text-[16px] w-full h-12 bg-[#FFC916] text-black font-semibold flex items-center justify-center rounded-[8px]"
                              onClick={() => setMenuSheetOpen(false)}
                            >
                              Get in Touch
                            </Link>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

