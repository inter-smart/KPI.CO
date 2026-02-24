import InnerHero from '@/components/common/InnerHero'
import DocumentRequired from "@/components/features/services/DocumentRequired";
import AdvisorySerice, { AdvisoryData } from "@/components/features/advisory/AdvisorySerice";
import AdvisoryProservice, { ProserviceItem } from '@/components/features/advisory/AdvisoryProservice';
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import { Metadata } from "next";
import { blogData } from "@/data/blogData";


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

export type MediaItem = {
    path: string;
    alt: string;
};


export type WhyChooseItem = {
    id: number;
    title: string;
    description: string;
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

export type RiskAdvisoryDta = {
    title: string;
    description: string;
    highlightsText: string;
    advisoryItems: {
        id: number;
        slNo: number;
        description: string;
    }[];
};

const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/advisoryBanner-desk.svg",
            mobilePath: "/images/advisoryBanner-mob.svg",
            alt: "VAT Advisory & Compliance That Works for Your Business",
        },
        title: "VAT Advisory & Compliance That Works for Your Business",
        description:
            "<p>Business decisions today are shaped by regulation, tax, governance, and risk, not just commercial intent. Poor structuring or delayed advice can create exposure that is difficult and expensive to unwind. KPI Group provides independent advisory services across risk, tax, compliance, and corporate structuring, helping organisations make informed decisions with clarity, control, and regulatory confidence.</p>",
    } satisfies HeroData,

    document_required_data: {
        title: "Advisory Support Built Around Business Reality ",
        description: "<p>Advisory is not a one-time decision. It evolves as organisations grow, restructure, expand into new jurisdictions, or face changing regulatory requirements. Our advisory services are designed to support organisations at different stages, including:  </p>",
        items: [
            { id: 1, text: "Market entry and entity setup " },
            { id: 2, text: "Ownership and group structuring " },
            { id: 3, text: "Regulatory and compliance readiness  " },
            { id: 4, text: "Tax registration, compliance, and reporting  " },
            { id: 5, text: "Ongoing governance and operational support " },
        ],

        media: {
            path: "/images/advisory_img.jpg",
            alt: "Required documents",
        },
        ftr_description:
            "<p>We focus on practical outcomes, structures and processes that work in practice, not just on paper. </p>",
    } satisfies DocumentRequiredData,

    advisory_data: {
        cards: [
            {
                id: 1,
                title: "Corporate Services & Business Structuring",
                description: "Under our Corporate Services practice, KPI supports businesses with entity formation and structuring across key UAE jurisdictions.",
                sections: [
                    {
                        title: "This includes advisory and execution support for:",
                        items: [
                            "Mainland company formation",
                            "Free zone company formation across major UAE free zones",
                            "Offshore structures for ownership and holding purposes",
                            "ADGM and DIFC company formation for regulated and professional entities"
                        ]
                    },
                    {
                        title: "Within ADGM, we also advise on advanced structuring solutions, including:",
                        items: [
                            "Special Purpose Vehicles (SPVs)",
                            "SPV Foundations",
                            "Holding company structures"
                        ]
                    }
                ],
                footer: "Our role goes beyond incorporation. We help clients select the right jurisdiction, structure ownership appropriately, and design governance frameworks aligned with regulatory expectations and long-term objectives.",
                button: {
                    label: "Explore Services",
                    link: "/corporate-services-uae"
                },
                theme: {
                    border: "border-[#1C5396]",
                    bg: "bg-[#F4F9FF]",
                    iconBg: "bg-[#1C5396]",
                    buttonBg: "bg-[#1C5396]",
                    titleColor: "text-[#1C5396]",
                    svgColor: "#5280CA"
                }
            },
            {
                id: 2,
                title: "Tax Advisory & Compliance Support",
                description: "The UAE tax landscape now requires active management. Corporate tax, VAT, and e-invoicing obligations demand accuracy, consistency, and timely compliance.",
                sections: [
                    {
                        title: "KPI provides tax advisory support covering:",
                        items: [
                            "UAE Corporate Tax advisory and compliance",
                            "VAT registration, advisory, and filing support",
                            "E-Invoicing advisory and implementation support",
                            "Documentation and record-keeping improvements"
                        ]
                    }
                ],
                footer: "Our tax advisory services are designed to help organisations understand their obligations, implement compliant processes, and manage tax matters with confidence — without unnecessary complexity.",
                button: {
                    label: "Explore Services",
                    link: "/advisory-services-uae"
                },
                theme: {
                    border: "border-[#FFC916]",
                    bg: "bg-[#FFFDF2]",
                    iconBg: "bg-[#FFC916]",
                    buttonBg: "bg-[#FFC916]",
                    titleColor: "text-[#1C5396]",
                    svgColor: "#FFCB18"
                }
            }
        ]
    } satisfies AdvisoryData,

    riskAdvisory: {
        title: "Relocation & Set-Up Support ",
        description:
            " <p>For founders, executives, and international teams relocating to the UAE, KPI provides practical relocation support to simplify the transition. This includes assistance with</p>",
        highlightsText: "Relocation support is delivered as part of a wider advisory engagement, ensuring personal and business requirements are addressed cohesively. ",
        advisoryItems: [
            {
                id: 1,
                slNo: 1,
                description:
                    "Residence and dependent visas ",
            },
            {
                id: 2,
                slNo: 2,
                description:
                    "Education and school-related guidance ",
            },
            {
                id: 3,
                slNo: 3,
                description:
                    "Banking introductions and account support ",
            },
            {
                id: 4,
                slNo: 4,
                description:
                    "Coordination of essential documentation  ",
            },
        ],

    } satisfies RiskAdvisoryDta,

    Proservice: {
        title: "PRO Services & Ongoing Administrative Support ",
        description:
            "<p>Efficient business operations rely on timely approvals, documentation, and government processes. KPI provides PRO services to support day-to-day regulatory and administrative requirements, including: </p>",

        footer_description: "<p> Our PRO support is integrated with our advisory services, ensuring operational requirements remain aligned with regulatory and structural considerations.</p> ",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/pro-1.svg",
                    alt: "Trade license renewals and amendments",
                },
                title: "Trade License Renewals <br className='hidden sm:block' /> And Amendments",
            },
            {
                id: 2,
                media: {
                    path: "/images/pro-2.svg",
                    alt: "Immigration and visa processing",
                },
                title: "Immigration And Visa <br className='hidden sm:block' /> Processing",
            },
            {
                id: 3,
                media: {
                    path: "/images/pro-3.svg",
                    alt: "Company Formation",
                },
                title: "Labour And Establishment <br className='hidden sm:block' /> Card Services",
            },
            {
                id: 4,
                media: {
                    path: "/images/pro-4.svg",
                    alt: "Government approvals and submissions",
                },
                title: "Government Approvals And <br className='hidden sm:block' /> Submissions",
            },


        ] satisfies ProserviceItem[],
    },

    whyChoose: {
        title: "Why Organisations Choose KPI ",
        description: "Choosing the right business setup consultants in the UAE can save you time, reduce costs, and prevent unnecessary restructuring. KPI supports founders and businesses with clear advice, practical execution, and ongoing guidance every step of the way.",
       sub_title: "",
        items: [
            {
                id: 1,
                title: "Integrated advisory approach",
                description:
                    "<p>Corporate structuring, tax, compliance, and operational support under one advisory framework. </p>",
            },
            {
                id: 2,
                title: "Regulatory awareness",
                description:
                    "<p>We take the time to understand your goals and recommend solutions that fit how you want to operate and grow. </p>",
            },
            {
                id: 3,
                title: "Clear, disciplined execution",
                description:
                    "<p>Advice that is practical, proportionate, and aligned with real regulatory expectations. </p>",
            },
            {
                id: 4,
                title: "Long-term partnership mindset",
                description:
                    "<p>Support that evolves as your business grows, restructures, or expands.  </p>",
            },
        ] satisfies WhyChooseItem[],
    },
    cta: {
        title: "Discuss Your Advisory Requirements ",
        description:
            "<p>Whether you are setting up a new entity, restructuring an existing group, managing tax obligations, or relocating operations to the UAE, KPI can support you with clarity and confidence. .</p>",
        button: {
            label: "Get in Touch",
            link: "/contact",
        },
        images: {
            overlay: "/images/corporate-cta-overlay.svg",
            overlayMobile: "/images/corporate-cta-overlay-mobile.svg",
        },
    } satisfies CtaData,

    corporate_faq_data: {
        title: "FAQs",
        faq_list: [
            {
                id: 1,
                title: "How do I start a business in the UAE?",
                description: `
                        <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                        `,
            },
            {
                id: 2,
                title: "What does it cost to set up a business in the UAE?",
                description: `
                        <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                        `,
            },
            {
                id: 3,
                title: "How long does it take to set up a company in the UAE",
                description: `
                        <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                        `,
            },
            {
                id: 4,
                title: "What are the requirements for obtaining a UAE business visa?",
                description: `
                        <p>Business visas are available for founders, partners, employees, and dependents. Requirements typically include a valid passport, trade license, and relevant approvals. KPI manages the process end-to-end to save time and ensure compliance.</p>
                        `,
            },
            {
                id: 5,
                title: "Do I need to have a physical office in the UAE?",
                description: `
                        <p>Some jurisdictions and business activities require a physical office or flexi-desk. KPI Group helps you select compliant office solutions that meet licensing and visa requirements.</p>
                        `,
            },
        ] satisfies FaqItem[],
    },

    insights: {
        title: "Our Insights",
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
};

export const metadata: Metadata = {
    title: "Advisory Services in the UAE | Corporate, Tax & Regulatory Support | KPI Group",
    description:
        "KPI offers integrated advisory services across corporate structuring, tax advisory, PRO services, and relocation support in the UAE. Delivered with regulatory clarity and long-term focus. ",
};


export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} variant="advisory" />
            <DocumentRequired data={localData.document_required_data}  variant="advisory"/>
            <AdvisorySerice data={localData.advisory_data} />
            <AdvisoryProservice data={localData.Proservice} />
            <RiskAdvisory data={localData.riskAdvisory} />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} titleClassName="text-[#1C5396]" variant="advisory" />
            <CorporateServicesUaeCta data={localData.cta} />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
            <HomeOurInsights data={localData.insights} />

        </>
    );
}
