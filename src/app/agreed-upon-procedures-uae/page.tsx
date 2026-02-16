import InnerHero from '@/components/common/InnerHero'
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import HomeCounter from "@/components/features/home/HomeCounter";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
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

export type WhyRiskData = {
    title: string;
    highlightsTitle: string;
    highlights: string[];
    footerDescription: string;
    image: {
        path: string;
        alt: string;
    };
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

export type ProcessStep = {
    id: number;
    title: string;
    sub_title: string;
    description: string;
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

export type WhyBuildItem = {
    id: number;
    media: MediaItem;
    title: string;
    description: string;
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

export type CounterItem = {
    id: number;
    value: number;
    symbol?: string;
    label: string;
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
    category?: string;
};

const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/agreed-banner-desk.png",
            mobilePath: "/images/agreed-banner-mob.png",
            alt: "Company Formation in DMCC Free Zone, UAE",
        },
        title: "Focused Reviews. Factual Findings. No Opinions.",
        description:
            "<p>Agreed-Upon Procedures (AUP) engagements provide targeted verification on specific matters when stakeholders need factual findings without the full scope of an audit. KPI delivers AUP engagements in strict accordance with ISRS 4400, providing objective, factual findings that satisfy stakeholder requirements and regulatory expectations across the UAE, DIFC, and ADGM.</p>",
    } satisfies HeroData,

    whyRisk: {
        title: "<p>What Are <span>Agreed-Upon Procedures (AUP)?</span></p>",
        highlightsTitle:
            "<p>Agreed-Upon Procedures are targeted reviews performed on specific financial or non-financial information, based on procedures agreed in advance with management and stakeholders. These <br> engagements are conducted in accordance with <span>ISRS 4400 (IAASB)</span></p>",
        highlights: [
            "No audit or review opinion is expressed",
            "No assurance is provided",
            "Findings are reported factually, without interpretation",
            "Findings allow stakeholders to form their own conclusions",
        ],
        footerDescription: "",
        image: {
            path: "/images/difc-audit.jpg",
            alt: "Risk advisory discussion",
        },
    } satisfies WhyRiskData,

    keyBenefits: {
        title: "Where AUP Engagements Are Commonly Used",
        slides: [
            {
                id: 1,
                title: "Regulatory & Authority-Led Requirements",
                items: [
                    "DFSA / FSRA regulated entities",
                    "PIB / Regulatory Return Auditor’s Reports",
                    "Client Money Auditor’s Reports",
                    "Safe Custody Auditor’s Reports",
                    "Insurance Monies Auditor’s Reports",
                    "Money Services Auditor’s Reports",
                ],
                media: {
                    path: "/images/aup-img1.jpg",
                    alt: "Business-Friendly Structure",
                },
            },
            {
                id: 2,
                title: "Financial & Operational Verifications",
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
                title: "Transaction & Compliance Support",
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

        ],
    } satisfies MeydanKeyBenefitsData,

    formationProcess: {
        title: "Our Approach to AUP Engagements",
        sub_title: null,
        description: "Audit systems are used to support documentation and evidence handling, ensuring consistency and completeness.",
        steps: [
            {
                id: 1,
                title: "Clear Scoping",
                sub_title: "",
                description:
                    "<p>Procedures are agreed upfront to ensure clarity and alignment.</p>",
            },
            {
                id: 2,
                title: "Precise Execution",
                sub_title: "",
                description:
                    "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
            },
            {
                id: 3,
                title: "Structured Reporting",
                sub_title: "",
                description:
                    "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
            },
            {
                id: 4,
                title: "Timely Delivery",
                sub_title: "",
                description:
                    "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
            },

        ] satisfies ProcessStep[],
    },

    document_required_data: {
        title: "Scope of an AUP Engagement",
        description:
            "<p>An Agreed-Upon Procedures engagement focuses on specific areas identified upfront, based on what stakeholders need verified.</p> <p>Depending on the requirement, an AUP engagement may involve:</p>",
        items: [
            { id: 1, text: "Reviewing selected financial or operational information " },
            { id: 2, text: "Verifying balances, transactions, or records" },
            { id: 3, text: "Performing agreed checks or confirmations" },
            { id: 4, text: "Testing compliance with specific requirements or thresholds" },
            {
                id: 5, text: "Initial approval from the Department of Economic Development (DED)",
            },


        ],

        media: {
            path: "/images/document-required-img.jpg",
            alt: "Required documents",
        },
        ftr_description:
            "<p>The outcome is a clear record of procedures performed and findings observed, allowing stakeholders to draw their own conclusions based on the results.</p>",
    } satisfies DocumentRequiredData,

    whyChoose: {
        title: "Why Organisations Choose KPI for AUP",
        description:
            "",
        items: [
            {
                id: 1,
                title: "Independent and objective execution",
                description:
                    "<p>Procedures performed independently, with findings reported factually and without interpretation, bias, or advocacy. </p>",
            },
            {
                id: 2,
                title: "Regulatory familiarity",
                description:
                    "<p>Extensive experience delivering AUP engagements aligned with regulatory and stakeholder needs across UAE, DIFC, and ADGM.</p>",
            },
            {
                id: 3,
                title: "Scope discipline",
                description:
                    "<p>Procedures executed strictly as agreed, with no deviation, scope creep, or ambiguity in delivery or reporting.</p>",
            },
            {
                id: 4,
                title: "Quality and accountability",
                description:
                    "<p>Engagements delivered in line with professional standards, documentation requirements, and stakeholder expectations.</p>",
            },

        ] satisfies WhyChooseItem[],
    },

    counterList: [
        {
            id: 1,
            value: 460,
            symbol: "+",
            label: "Years of Combined <br> Experience",
        },
        {
            id: 2,
            value: 700,
            symbol: "+",
            label: "Active Client <br> Relationships",
        },
        {
            id: 3,
            value: 95,
            symbol: "%",
            label: "Client Retention <br> Rate",
        },
        {
            id: 4,
            value: 11000,
            symbol: "+",
            label: "Engagements Successfully <br> Delivered ",
        },
    ] satisfies CounterItem[],

    cta: {
        title: "Discuss an Agreed-Upon Procedures Engagement",
        description:
            "<p>If you require verification on specific matters for regulatory, banking, or stakeholder purposes, our team can help define and execute an AUP engagement with clarity.</p>",
        button: {
            label: "Get in Touch",
            link: "/",
        },
        images: {
            overlay: "/images/aupCta-desk.png",
            overlayMobile: "/images/aupCta-desk.png",
        },
    } satisfies CtaData,

    corporate_faq_data: {
        title: "FAQs",
        faq_list: [
            {
                id: 1,
                title: "What's the difference between an AUP and an audit?",
                description: `
                        <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
            },
            {
                id: 2,
                title: "Who decides what procedures are performed?",
                description: `
                        <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                        `,
            },
            {
                id: 3,
                title: "Can I rely on an AUP report for decisio",
                description: `
                        <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
            },
            {
                id: 4,
                title: "WIs an AUP report suitable for regulatory submissions?",
                description: `
                        <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
            },
            {
                id: 5,
                title: "How much does an AUP engagement cost?",
                description: `
                        <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                        `,
            },
            {
                id: 6,
                title: "How long does an AUP engagement take?",
                description: `
                        <p>Typical engagements are completed within 2-4 weeks, though timelines vary based on scope and information availability. </p>
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
    title: "AUP Audit Services in UAE | DFSA & Regulatory Compliance | KPI   ",
    description:
        "Expert Agreed-Upon Procedures (AUP) engagements for UAE  businesses. Factual findings, scope-aligned reporting for stakeholders and authorities.. ",
};

export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <WhyRiskManagement data={localData.whyRisk} />
            <MeydanKeyBenefits data={localData.keyBenefits} />
            <CorporateServicesUaeFormationProcess variant="aup"
                data={localData.formationProcess}
            />
            <DocumentRequired data={localData.document_required_data} variant="aup" />
            <CorporateServicesUaeWhyChoose
                data={localData.whyChoose}
                variant="mainland"
            />
            <HomeCounter data={localData.counterList} />
            <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
            <HomeOurInsights data={localData.insights} />
        </>
    );
}