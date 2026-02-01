'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Menu as MenuIcon } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', subItems: [] },
  {
    label: 'Services', href: '/services', subItems: [
      { name: 'Strategy', href: '/services/strategy' },
      { name: 'Operations', href: '/services/operations' },
      { name: 'Digital Transformation', href: '/services/digital' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
    ]
  },
  {
    label: 'Resources', href: '/resources', subItems: [
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
    ]
  },
  {
    label: 'About', href: '/about', subItems: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
    ]
  },
]

const site_settings = {
  header_logo_value: "/images/logo.svg",
  header_logo_alt_text_value: "KPI Logo"
};

export default function Header() {
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-[80px] lg:h-[90px]">
          {/* Logo Section */}
          <div className="w-[120px] 2xl:w-[140px]">
            <Link href="/" className="flex items-center w-full">
              <Image
                src={site_settings.header_logo_value}
                alt={site_settings.header_logo_alt_text_value}
                width={140}
                height={40}
                className="w-full h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex items-center justify-end lg:justify-between lg:w-[calc(100%-130px)] 3xl:w-[calc(100%-140px)] lg:pl-[110px]">
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-[15px] xl:text-[16px] font-medium text-gray-800 hover:text-[#0067B1] transition-colors py-4"
                  >
                    {item.label}
                    {item.subItems.length > 0 && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.subItems.length > 0 && (
                    <div className="absolute top-full left-0 w-[220px] bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto p-2">
                      <ul className="flex flex-col">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-[14px] text-gray-600 hover:text-[#0067B1] hover:bg-blue-50/50 rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Button & Mobile Menu Trigger */}
            <div className="flex items-center gap-4">
              {/* Desktop Contact Button */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="bg-[#FFC221] text-[#1E1E1E] font-bold px-6 py-3 rounded-xl text-[15px] hover:bg-[#efb61b] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <Sheet open={menuSheetOpen} onOpenChange={setMenuSheetOpen}>
                <SheetTrigger className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                  <MenuIcon className="w-6 h-6 text-gray-700" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-gray-100">
                  <SheetHeader className="p-6 border-b border-gray-100">
                    <SheetTitle className="text-left">
                      <Link href="/" className="block w-[100px]" onClick={() => setMenuSheetOpen(false)}>
                        <Image
                          src={site_settings.header_logo_value}
                          alt={site_settings.header_logo_alt_text_value}
                          width={100}
                          height={30}
                          className="w-full h-auto object-contain"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
                  <div className="h-[calc(100vh-100px)] overflow-y-auto p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {navItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                          {item.subItems.length > 0 ? (
                            <>
                              <AccordionTrigger className="text-[15px] font-medium text-gray-800 hover:text-[#0067B1] py-4 hover:no-underline">
                                {item.label}
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="flex flex-col gap-1 pb-4 pl-2">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                        className="block px-4 py-2.5 text-[14px] text-gray-500 hover:text-[#0067B1] hover:bg-blue-50/50 rounded-lg transition-colors"
                                        onClick={() => setMenuSheetOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className="flex items-center text-[15px] font-medium text-gray-800 hover:text-[#0067B1] py-4 border-b border-gray-100 last:border-0"
                              onClick={() => setMenuSheetOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="block w-full bg-[#FFC221] text-[#1E1E1E] font-bold text-center px-6 py-3 rounded-xl text-[15px] hover:bg-[#efb61b] transition-all"
                        onClick={() => setMenuSheetOpen(false)}
                      >
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
