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
        subItems: [
          { name: 'Corporate Services', href: '/services/advisory/strategy' },
          { name: 'Tax Advisory', href: '/services/advisory/financial' },
          { name: 'e-invoicing Services', href: '/services/advisory/deals' },
        ]
      },
      {
        id: 'compliance',
        label: 'Risk & Compliance',
        icon: "/images/risk_icon.svg",
        subItems: [
          { name: 'Enterprise Risk Management', href: '/services/compliance/internal-audit' },
          { name: 'Internal Audit Services', href: '/services/compliance/risk' },
          { name: 'Standard Operating Procedures', href: '/services/compliance/regulatory' },
          { name: 'Regulatory & Compliance Advisory', href: '/services/compliance/regulatory' },
        ]
      },
      {
        id: 'digital',
        label: 'Digital Transformation',
        icon: "/images/digital_icon.svg",
        subItems: [
          { name: 'IT Strategy', href: '/services/digital/strategy' },
          { name: 'Cybersecurity', href: '/services/digital/cyber' },
          { name: 'Data & Analytics', href: '/services/digital/data' },
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
        id: 'insights',
        label: 'Latest Insights',
        icon: "/images/service-icon-4.svg",
        subItems: [
          { name: 'Blog', href: '/resources/blog' },
          { name: 'News & Updates', href: '/resources/news' },
        ]
      },
      {
        id: 'materials',
        label: 'Knowledge Hub',
        icon: "/images/service-icon-5.svg",
        subItems: [
          { name: 'Case Studies', href: '/resources/case-studies' },
          { name: 'Whitepapers', href: '/resources/whitepapers' },
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
        id: 'company',
        label: 'Company',
        icon: "/images/service-icon-1.svg",
        subItems: [
          { name: 'Our Story', href: '/about/story' },
          { name: 'Mission & Values', href: '/about/mission' },
        ]
      },
      {
        id: 'people',
        label: 'Our People',
        icon: "/images/service-icon-2.svg",
        subItems: [
          { name: 'Team', href: '/about/team' },
          { name: 'Careers', href: '/about/careers' },
        ]
      }
    ] as MegaCategory[]
  },
]

const site_settings = {
  header_logo_value: "/images/KPI-logo.svg",
  header_logo_alt_text_value: "KPI Logo"
};

export default function Header() {
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-[70px] xl:h-[80px] 3xl:h-[88px]">
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
                  className="text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-[#1E1E1E] bg-[#FFC916] hover:bg-[#FFC916]/90 flex items-center
                   justify-center font-semibold px-7 py-2.5 rounded-[8px] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 "
                >
                  Get in Touch
                </Link>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden">
                <Sheet open={menuSheetOpen} onOpenChange={setMenuSheetOpen}>
                  <SheetTrigger className="p-2">
                    <div className="w-6 h-6 flex flex-col justify-around">
                      <span className="w-full h-0.5 bg-black"></span>
                      <span className="w-full h-0.5 bg-black"></span>
                      <span className="w-full h-0.5 bg-black"></span>
                    </div>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[350px] p-0 overflow-y-auto">
                    <SheetHeader className="p-4 border-b">
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
                      <nav className="flex-1 px-4 py-6 overflow-y-auto pb-24">
                        <div className="flex flex-col space-y-2">
                          {/* Home Link */}
                          <Link
                            href={navItems[0].href}
                            className="text-[16px] font-bold text-[#1C5396] px-2 py-3"
                            onClick={() => setMenuSheetOpen(false)}
                          >
                            {navItems[0].label}
                          </Link>

                          {/* Nested Accordions */}
                          <Accordion type="single" collapsible className="w-full">
                            {navItems.slice(1).map((item, idx) => (
                              <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
                                <AccordionTrigger className="text-[16px] font-bold text-[#1C5396] hover:no-underline px-2 py-4">
                                  {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pl-2">
                                  {item.isMega && item.megaCategories ? (
                                    <Accordion type="single" collapsible className="w-full space-y-2">
                                      {item.megaCategories.map((mega, mIdx) => (
                                        <AccordionItem key={mIdx} value={`mega-${idx}-${mIdx}`} className="border-none">
                                          <AccordionTrigger className="hover:no-underline py-2">
                                            <div className="flex items-center gap-3">
                                              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-b from-[#6A9FE0] to-[#053269]">
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
                                              <span className="text-[15px] font-semibold text-[#1C5396]">{mega.label}</span>
                                            </div>
                                          </AccordionTrigger>
                                          <AccordionContent className="pl-11 pt-1">
                                            <div className="flex flex-col space-y-1">
                                              {mega.subItems.map((sub, sIdx) => (
                                                <Link
                                                  key={sIdx}
                                                  href={sub.href}
                                                  className="text-[14px] font-medium text-gray-500 hover:text-[#1C5396] py-2 px-2 rounded-md hover:bg-blue-50/50"
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
                          <div className="pt-8 px-2">
                            <Link
                              href="/contact"
                              className="w-full h-12 bg-[#FFC916] text-[#1C5396] font-bold flex items-center justify-center rounded-xl shadow-lg border border-[#e5ae1d]"
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

