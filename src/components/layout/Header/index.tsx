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
  header_logo_value: "/images/KPI-logo.svg",
  header_logo_alt_text_value: "KPI Logo"
};

export default function Header() {
  const [menuSheetOpen, setMenuSheetOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-[70px] lg:h-[80px]">
          {/* Logo Section */}
          <div className="w-[120px] lg:w-[130px] 3xl:w-[140px]">
            <Link href="/" className="flex items-center w-full">
              <Image
                src={site_settings.header_logo_value}
                alt={site_settings.header_logo_alt_text_value}
                width={140}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex items-center justify-end lg:justify-between w-[calc(100%-120px)] lg:w-[calc(100%-130px)] 3xl:w-[calc(100%-140px)] lg:pl-[110px]">
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
                  className="bg-[#FFC916] text-[#1E1E1E] font-semibold px-6 py-3 rounded-[8px] text-[16px] hover:bg-[#efb61b] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
                  aria-label="contact_link"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <Sheet open={menuSheetOpen} onOpenChange={setMenuSheetOpen}>
                <SheetTrigger className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                  <div className="w-[30px] h-[25px]">
                    <svg viewBox="0 0 26 17" fill="none" className='w-full h-full object-cover'>
                      <path d="M12.4957 1.88674L1.31954 1.88674C1.14043 1.89842 0.960653 1.89452 0.782225 1.8751C0.567692 1.85609 0.368353 1.75642 0.224424 1.59621C0.0804939 1.43599 0.00268745 1.22715 0.00670242 1.01181C-0.0214348 0.784527 0.0402031 0.555231 0.178511 0.37269C0.316818 0.190148 0.52088 0.068763 0.747299 0.0343493C0.946793 0.00229883 1.14925 -0.00731337 1.35088 0.00569248C8.80193 0.0068866 16.2528 0.00897634 23.7036 0.0119613C24.6434 0.0119613 25.0433 0.286887 25.0545 0.932558C25.0657 1.6042 24.6595 1.88898 23.6722 1.88942C19.9469 1.89151 16.2213 1.89166 12.4957 1.88987V1.88674Z" fill="black" />
                      <path d="M12.5228 14.8732L23.6963 14.8732C23.8979 14.8615 24.1002 14.8655 24.3012 14.8853C24.5163 14.9052 24.7152 15.0085 24.8552 15.1731C24.9953 15.3376 25.0654 15.5504 25.0507 15.766C25.0765 15.9811 25.0173 16.1978 24.8858 16.37C24.7543 16.5422 24.5607 16.6563 24.3464 16.688C24.1688 16.7149 23.989 16.7241 23.8095 16.7153C16.3385 16.7132 8.8673 16.7105 1.39596 16.7072C0.382227 16.7072 -0.00463867 16.4484 0.00297356 15.7794C0.0105839 15.1194 0.38715 14.8741 1.417 14.8732C5.11909 14.8717 8.82103 14.8717 12.5228 14.8732Z" fill="black" />
                      <path d="M17.674 7.46301C19.7386 7.46301 21.8032 7.45809 23.8683 7.46301C24.6586 7.46704 25.0446 7.76928 25.0526 8.35764C25.0607 8.946 24.6635 9.27689 23.8943 9.27734C19.691 9.28092 15.4878 9.28092 11.2849 9.27734C10.5944 9.27734 10.1686 8.92719 10.1587 8.3863C10.1489 7.8454 10.5819 7.46928 11.2584 7.46615C13.3969 7.45809 15.5354 7.46346 17.674 7.46301Z" fill="black" />
                    </svg>
                  </div>

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
                  <div className="h-[calc(100vh-100px)] overflow-y-auto ">
                    <Accordion type="single" collapsible className="w-full">
                      {navItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0 ">
                          {item.subItems.length > 0 ? (
                            <>
                              <AccordionTrigger className="text-[15px] font-medium text-gray-800 hover:text-[#0067B1] p-4 hover:no-underline">
                                {item.label}
                              </AccordionTrigger>
                              <AccordionContent className='bg-[#ededed]'>
                                <ul className="flex flex-col gap-1">
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
                            <div className="p-4">
                              <Link
                                href={item.href}
                                className="flex items-center text-[15px] font-medium text-gray-800 hover:text-[#0067B1] border-b border-gray-100 last:border-0"
                                onClick={() => setMenuSheetOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </div>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-8 p-4">
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
