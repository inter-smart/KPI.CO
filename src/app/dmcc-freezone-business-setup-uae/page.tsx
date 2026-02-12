import InnerHero from '@/components/common/InnerHero'
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";

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
        items: [
            {
                id: 1,
                media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
                title: "A Guide to Choosing the Best Audit Firm in 2025",
                description:
                    "<p>What to look for when choosing an audit firm in 2025 – from expertise and independence to technology and trust that support better business decisions.</p>",
                date: "14 NOV 2024",
                readTime: "2 MIN READ",
                slug: "#",
            },
            {
                id: 2,
                media: {
                    path: "/images/home-insights-2.jpg",
                    alt: "Top Audit Firms UAE",
                },
                title: "Top 10 Audit firms in UAE",
                description:
                    "State helps you see how many more days you need to work to reach.",
                date: "13 NOV 2024",
                readTime: "2 MIN READ",
                slug: "#",
            },
            {
                id: 3,
                media: {
                    path: "/images/home-insights-3.jpg",
                    alt: "Audit Firm Selection",
                },
                title: "A Guide to Choosing the Best Audit Firm in 2025",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut a days you need to work to reach.",
                date: "12 NOV 2024",
                readTime: "2 MIN READ",
                slug: "#",
            },
            {
                id: 4,
                media: { path: "/images/home-insights-1.jpg", alt: "VAT Guide UAE" },
                title:
                    "VAT in the United Arab Emirates: A Complete Guide for Companies in 2025",
                description:
                    "State helps you see how many more days you need to work to reach.",
                date: "12 NOV 2024",
                readTime: "2 MIN READ",
                slug: "#",
            },
        ],
    },

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
