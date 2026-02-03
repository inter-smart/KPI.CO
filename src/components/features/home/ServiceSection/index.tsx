"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
}

// Services data based on the image
const services: Service[] = [
  {
    id: 1,
    title: "Audit & Assurance",
    description:
      "Independent, high-quality audits that strengthen stakeholder confidence and meet UAE statutory and regulatory requirements.",
    link: "/audit-assurance",
    icon: "/images/service_icon1.svg",
  },
  {
    id: 2,
    title: "Risk Advisory",
    description:
      "Governance-led risk advisory that helps organisations identify, manage, and control risk across operations and compliance.",
    link: "/risk-advisory",
    icon: "/images/service_icon2.svg",
  },
  {
    id: 3,
    title: "Tax Advisory",
    description:
      "Practical advice on UAE corporate tax and VAT, focused on clarity, supporting compliance and effective financial planning.",
    link: "/tax-advisory",
    icon: "/images/service_icon3.svg",
  },
  {
    id: 4,
    title: "Corporate Services",
    description:
      "End-to-end corporate services to start a business in the UAE, including licensing, banking, PRO, and ongoing support.",
    link: "/corporate-services",
    icon: "/images/service_icon4.svg",
  },
  {
    id: 5,
    title: "DIFC & ADGM",
    description:
      "Advisory and audit support for DIFC and ADGM entities, including regulatory, audit, and compliance needs.",
    link: "/difc-adgm",
    icon: "/images/service_icon5.svg",
  },
  {
    id: 6,
    title: "Digital Transformation",
    description:
      "Oracle NetSuite consulting, supported by proprietary digital solutions developed across the KPI Group.",
    link: "/digital-transformation",
    icon: "/images/service_icon6.svg",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-white py-[20px_70px] lg:py-[40px_70px] 3xl:py-[40px_100px]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-[40px] md:mb-[50px]">
          <h2 className="text-[32px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[50px] font-semibold text-[#1C5396] mb-4">
            Our Services
          </h2>

          <div className="text-[12px] xl:text-[14px] 2xl:text-[19px] leading-normal font-normal line-clamp-5 text-[#4e4e4e] mb-2 xl:mb-3 2xl:mb-4">
            <p>
              Navigating the UAE business landscape can be challenging. KPI
              brings practical experience, clear insight, and trusted guidance
              to help you move forward. Explore how we can support your
              business, from compliance through to growth.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[10px]  xl:rounded-[12px] p-[30px] border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-[70px] h-[70px] bg-gradient-to-b from-[#003268] to-[#5280CA] rounded-[8px] flex items-center justify-center mb-[20px] transition-transform group-hover:scale-105">
                <Image
                  src={service.icon}
                  width="32"
                  height="32"
                  alt="serviceicons"
                />
              </div>

              {/* Content */}
              <h3 className="text-[17px] 2xl:text-[20px] 3xl:text-[26px] font-semibold text-gray-900 mb-[15px]">
                {service.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-[25px] flex-grow">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className="text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-[#3570B8] inline-flex items-center font-semibold  group-hover:text-base2 transition-all transition-colors mt-auto   duration-500"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
