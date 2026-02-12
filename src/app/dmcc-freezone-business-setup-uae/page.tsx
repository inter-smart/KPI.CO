import InnerHero from '@/components/common/InnerHero'
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import { blogData } from "@/data/blogData";

import { Metadata } from "next";


export type HeroData = {
    id: number;
    title: string;
    description: string;
    media?: {
        desktopPath: string;
        mobilePath: string;
        alt: string;
    };
    additionalContent?: string[];
};


export type MainlandBusinessData = {
    title: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
    footerDescription?: string;
    image: {
        path: string;
        alt: string;
    };
};

export type LocationItem = {
    id: number;
    title: string;
    type: "image" | "content";
    image?: string;
    description?: string;
    link?: string;
};

export type BusinessLocationData = {
    title: string;
    description: string;
    items: LocationItem[];
};

export type DocumentRequiredData = {
    id?: number;
    title?: string;
    description?: string;
    items?: { id: number; text: string }[];
    media?: {
        path?: string;
        alt?: string;
    };
    ftr_description?: string;
};

export type CtaData = {
    title: string;
    description: string;
    button: {
        label: string;
        link: string;
    };
    images: {
        overlay: string;
        overlayMobile: string;
    };
};

export type FaqItem = {
    id: number;
    title: string;
    description: string;
};

export type InsightItem = {
    id: number;
    title: string;
    description: string;
    date: string;
    readTime: string;
    media: MediaItem;
    slug: string;
};
export type MediaItem = {
    path: string;
    alt: string;
};

export type BankingPartner = {
    id: number;
    media: {
        path: string;
        alt: string;
    };
};

export type MeydanFreeZoneItem = {
    id: number;
    title: string;
    zone_list: string[];
};

export type MeydanStructureItem = {
    id: number;
    title: string;
    description: string;
};

export type MeydanFreeZoneData = {
    title: string;
    description?: string;
    free_zone_list: MeydanFreeZoneItem[];
    structure_list: MeydanStructureItem[];
};

export type MeydanKeyBenefitsData = {
    title: string;
    slides: {
        id: number;
        title: string;
        items: string[];
        media: {
            path: string;
            alt: string;
        };
    }[];
};

const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/audit-banner.png",
            mobilePath: "/images/audit-mobile.png",
            alt: "Company Formation in DMCC Free Zone, UAE",
        },
        title: "Company Formation in DMCC Free Zone, UAE",
        description:
            "<p>Establish your company in DMCC Free Zone with full ownership, quick licensing, and flexible office solutions. Perfect for startups, SMEs, and international companies looking to operate in Dubai.</p>",
    } satisfies HeroData,

    mainlandBusiness: {
        title: "Start a Business in DMCC, UAE",
        description:
            "<p>The Dubai Multi Commodities Centre (DMCC) is a government-backed free zone and one of Dubai’s most respected business hubs. It offers a transparent regulatory framework, flexible licenses, and dedicated support, making it easy for you to start and scale your business. Whether you’re launching a startup, providing professional services, trading, or managing a regional office, DMCC gives you the freedom and tools to grow successfully in Dubai.</p>",
        highlightsTitle:
            "Key Features Include:",
        highlights: [
            "Fast, digital company registration",
            "Flexible license covering multiple business activities",
            "Optional physical office or flexi-desk solutions",
            "Support with visas, banking, and compliance",
        ],
        footerDescription:
            "<p>Our team manages the setup process end-to-end, ensuring your DMCC company is fully compliant, operational, and ready for growth.</p>",
        image: {
            path: "/images/dmcc-img.jpg",
            alt: "Mainland Business Setup UAE",
        },
    } satisfies MainlandBusinessData,

    businessLocation: {
        title: "Explore Other Business Setup Options",
        description:
            "If DMCC Free Zone isn’t the perfect fit for your business plan, you can explore other UAE company structures. Each option offers different benefits, market access, and licensing flexibility to help you find the best setup for your growth goals.",
        items: [
            {
                id: 1,
                title: "Mainland",
                type: "image",
                image: "/images/dmcc-location-1.jpg",
                description:
                    "Operate anywhere in the UAE with access to the local market and government contracts.",
                link: "#",
            },
            {
                id: 2,
                title: "Other Freezones",
                type: "image",
                image: "/images/dmcc-location-2.jpg",
                description:
                    "The UAE has many free zones, each offering tax benefits, flexibility, and industry-specific support. Explore your options.",
                link: "#",
            },
            {
                id: 3,
                title: "ADGM",
                type: "image",
                image: "/images/dmcc-location-3.jpg",
                description:
                    "A globally recognized financial center with a strong common law framework, ideal for financial services and investment firms.",
                link: "#",
            },
            {
                id: 4,
                title: "DIFC",
                type: "image",
                image: "/images/dmcc-location-4.jpg",
                description:
                    "A premium jurisdiction for finance and professional services with an independent legal and regulatory environment.",
                link: "#",
            },

        ],
    } satisfies BusinessLocationData,
    document_required_data: {
        title: "Why Work with KPI ",
        description:
            "<p>KPI is more than a company formation agent - we’re your partner in business growth. From setup to ongoing operations, we provide end-to-end support across corporate, audit, and risk services. We help businesses with: </p>",
        items: [
            { id: 1, text: "Strategic business structuring" },
            { id: 2, text: "Regulatory and compliance guidance" },
            { id: 3, text: "Corporate governance support" },
            { id: 4, text: "Risk assessment and advisory" },
            { id: 5, text: "Ongoing post‑setup service", },
        ],

        media: {
            path: "/images/dmcc-why.jpg",
            alt: "Required documents",
        },
        ftr_description:
            "<p>Our approach ensures that your DMCC Free Zone company is structured for success, fully compliant, and ready to achieve your growth objectives.</p>",
    } satisfies DocumentRequiredData,
    banking: {
        title: "Banking Support for Your UAE Business   ",
        description:
            "<p>We help founders and businesses open bank accounts with trusted UAE and international banking partners, ensuring smooth financial operations for your company.</p>",
        partners: [
            {
                id: 1,
                media: {
                    path: "/images/banking-partner-1.svg",
                    alt: "Emirates NBD",
                },
            },
            {
                id: 2,
                media: {
                    path: "/images/banking-partner-2.svg",
                    alt: "Emirates NBD",
                },
            },
            {
                id: 3,
                media: {
                    path: "/images/banking-partner-3.svg",
                    alt: "Emirates NBD",
                },
            },
            {
                id: 4,
                media: {
                    path: "/images/banking-partner-4.svg",
                    alt: "Emirates NBD",
                },
            },
            {
                id: 5,
                media: {
                    path: "/images/banking-partner-2.svg",
                    alt: "Emirates NBD",
                },
            },
            {
                id: 6,
                media: {
                    path: "/images/banking-partner-3.svg",
                    alt: "Emirates NBD",
                },
            },
        ] satisfies BankingPartner[],
    },
    cta: {
        title: "Ready to Start Your New Business in the UAE? ",
        description:
            "<p>Our team will help you choose the right setup, license type, and structure based on your goals, risk profile, and growth plans. Talk to our experts today!</p>",
        button: {
            label: "Get in Touch",
            link: "/contact",
        },
        images: {
            overlay: "/images/audit-banner.png",
            overlayMobile: "/images/dmcc-cta-mob.png",
        },
    } satisfies CtaData,


    corporate_faq_data: {
        title: "FAQs",
        faq_list: [
            {
                id: 1,
                title: "What is a DMCC Free Zone company?",
                description: `
                        <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
            },
            {
                id: 2,
                title: "Can I set up remotely from outside the UAE?",
                description: `
                        <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                        `,
            },
            {
                id: 3,
                title: "Is 100% foreign ownership allowed?",
                description: `
                        <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
            },
            {
                id: 4,
                title: "How long does DMCC business setup take?",
                description: `
                        <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
            },
            {
                id: 5,
                title: "How long does mainland company setup take? ",
                description: `
                        <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                        `,
            },
            {
                id: 6,
                title: "How long does DMCC business setup take?",
                description: `
                        <p>Costs depend on the business activity, license type, office requirements, and visas needed. Our team provides a clear breakdown before starting. </p>
                        `,
            },
        ] satisfies FaqItem[],
    },

    insights: {
        title: "Related Blogs",
        items: blogData.slice(0, 4).map((blog) => ({
            id: blog.id,
            media: blog.media,
            title: blog.title,
            description: blog.description,
            date: blog.date,
            readTime: blog.readTime,
            slug: `/blog/${blog.slug}`,
        })),
    },

    keyBenefits: {
        title: "Key Benefits of Company Formation in DMCC",
        slides: [
            {
                id: 1,
                title: "Business-Friendly Structure",
                items: [
                    "100% foreign ownership",
                    "No local sponsor required",
                    "Wide range of business activities available",
                    "Combine multiple activity groups under one license",
                    "Flexible company structures for startups and SMEs",
                ],
                media: {
                    path: "/images/mayden-benefit-1.jpg",
                    alt: "Business-Friendly Structure",
                },
            },
            {
                id: 2,
                title: "Cost-Effective Setup",
                items: [
                    "One of the most competitive license costs in Dubai",
                    "No paid-up share capital required",
                    "Reasonable visa allocation costs",
                    "Zero personal income tax",
                    "Zero corporate tax for qualifying companies",
                ],
                media: {
                    path: "/images/mayden-benefit-1.jpg",
                    alt: "Business-Friendly Structure",
                },
            },
            {
                id: 3,
                title: "Flexible Visa Options",
                items: [
                    "Choose 0 to 6 visa allocations",
                    "Visas for owners, employees, and dependents",
                    "Efficient visa processing through digital portal",
                    "Option to upgrade visa package as you grow",
                ],
                media: {
                    path: "/images/mayden-benefit-1.jpg",
                    alt: "Business-Friendly Structure",
                },
            },
            {
                id: 4,
                title: "Tax & Banking Advantages",
                items: [
                    "100% repatriation of capital and profits",
                    "No customs duties on import/export",
                    "Assistance with corporate bank account opening",
                    "Access to global trade networks",
                ],
                media: {
                    path: "/images/mayden-benefit-1.jpg",
                    alt: "Business-Friendly Structure",
                },
            },
        ],
    } satisfies MeydanKeyBenefitsData,    

    meydanFreeZone: {
        title: "Is DMCC Free Zone Right for You?",
        free_zone_list: [
            {
                id: 1,
                title: "DMCC Free Zone is suitable if you:",
                zone_list: [
                    "Want 100% foreign ownership",
                    "Prefer a quick, fully digital setup process",
                    "Need a license covering multiple business activities",
                    "Wish to expand regionally or globally easily",
                    "Value access to a large business community",
                ],
            },
            {
                id: 2,
                title: "DMCC Free Zone may not be suitable if you:",
                zone_list: [
                    "Wish to expand regionally or globally easily",
                    "Require heavy industrial facilities or warehousing",
                    "Plan activities outside DMCC free zone rules",
                    "Need a physical office for all staff",
                    "Require services outside free zone framework",
                ],
            },
        ],
        structure_list: [
            {
                id: 1,
                title: "Choosing the Right Structure",
                description:
                    "If your business requires Mainland or other Free Zone options, our expert team will guide you to the best setup for your goals.",
            },
        ],
    } satisfies MeydanFreeZoneData,

}

export const metadata: Metadata = {
    title: "DMCC Free Zone Company Setup | Start Your Business in Dubai  ",
    description:
        "Launch your business in DMCC Free Zone, Dubai. Compare company setup costs, license types, and UAE visa options. 100% company ownership. No hidden fees.",
};

export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <MainlandBusiness data={localData.mainlandBusiness} />
            <MeydanFreeZone data={localData.meydanFreeZone} />
            <MeydanKeyBenefits data={localData.keyBenefits} />

            <BusinessLocation data={localData.businessLocation} />
            <DocumentRequired data={localData.document_required_data} />
            <CorporateServicesUaeBanking
                data={localData.banking}
                variant="mainland"
            />
            <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
            <HomeOurInsights data={localData.insights} variant="saifz" />

        </>
    )
}
