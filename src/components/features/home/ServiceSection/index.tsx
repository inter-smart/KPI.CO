'use client'

import React from 'react'
import Link from 'next/link'
import { FileText, Shield, Banknote, Briefcase, Landmark, UserCog } from 'lucide-react'

// Define the service type
interface Service {
    id: number
    title: string
    description: string
    link: string
    icon: React.ElementType
}

// Services data based on the image
const services: Service[] = [
    {
        id: 1,
        title: "Audit & Assurance",
        description: "Independent, high-quality audits that strengthen stakeholder confidence and meet UAE statutory and regulatory requirements.",
        link: "/audit-assurance",
        icon: FileText
    },
    {
        id: 2,
        title: "Risk Advisory",
        description: "Governance-led risk advisory that helps organisations identify, manage, and control risk across operations and compliance.",
        link: "/risk-advisory",
        icon: Shield
    },
    {
        id: 3,
        title: "Tax Advisory",
        description: "Practical advice on UAE corporate tax and VAT, focused on clarity, supporting compliance and effective financial planning.",
        link: "/tax-advisory",
        icon: Banknote
    },
    {
        id: 4,
        title: "Corporate Services",
        description: "End-to-end corporate services to start a business in the UAE, including licensing, banking, PRO, and ongoing support.",
        link: "/corporate-services",
        icon: Briefcase
    },
    {
        id: 5,
        title: "DIFC & ADGM",
        description: "Advisory and audit support for DIFC and ADGM entities, including regulatory, audit, and compliance needs.",
        link: "/difc-adgm",
        icon: Landmark
    },
    {
        id: 6,
        title: "Digital Transformation",
        description: "Oracle NetSuite consulting, supported by proprietary digital solutions developed across the KPI Group.",
        link: "/digital-transformation",
        icon: UserCog
    }
]

export default function ServiceSection() {
    return (
        <section className="bg-white py-[60px] lg:py-[80px]">
            <div className="container">
                {/* Section Header */}
                <div className="mb-[40px] md:mb-[50px]">
                    <h2 className="text-[28px] md:text-[36px] font-bold text-[#1C5396] mb-4">
                        Our Services
                    </h2>
                    <p className="text-[16px] text-gray-600 max-w-4xl leading-relaxed">
                        Navigating the UAE business landscape can be challenging. KPI brings practical experience, clear insight, and trusted guidance to help you move forward. Explore how we can support your business, from compliance through to growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-[12px] p-[30px] border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
                        >
                            {/* Icon Container */}
                            <div className="w-[48px] h-[48px] bg-[#1C5396] rounded-[8px] flex items-center justify-center mb-[20px] transition-transform group-hover:scale-105">
                                <service.icon className="w-[24px] h-[24px] text-white" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-[20px] font-bold text-gray-900 mb-[15px]">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed mb-[25px] flex-grow">
                                {service.description}
                            </p>

                            {/* Link */}
                            <Link
                                href={service.link}
                                className="inline-flex items-center text-[15px] font-semibold text-[#1C5396] hover:text-[#14427b] transition-colors mt-auto group-hover:translate-x-1 duration-300"
                            >
                                Learn more <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
