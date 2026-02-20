import InnerHero from '@/components/common/InnerHero'
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import HomeCounter from "@/components/features/home/HomeCounter";
import type { CounterItem } from "@/app/page";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import TaxDecision from '@/components/features/taxAdvisory/TaxDecision';
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";
import { Metadata } from "next";
import MeydanFreeZone from '@/components/features/meydan/MeydanFreeZone';

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

export type MeydanFreeZoneItem = {
    id: number;
    title: string;
    description: string;
    highlightsText: string;
    zone_list: string[];
    footer_description: string;
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


export type ProcessStep = {
    id: number;
    title: string;
    inner_title: string;
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

export type ServiceItem = {
    id: number;
    media: MediaItem;
    title: string;
    slug: string;
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
            desktopPath: "/images/tax_advisory-banner-desk.png",
            mobilePath: "/images/tax-banner-mob.png",
            alt: "Practical Tax Advisory for UAE Businesses",
        },
        title: "Practical Tax Advisory for UAE Businesses",
        description:
            "<p>In the UAE, tax is no longer just a number, its about interpretation and application. Corporate tax, VAT, cross-border transaction require practical judgement aligned with both regulation and business reality. KPI provides clear, practical tax advice that help UAE businesses to make appropriate tax decisions, manage risk, and remail compliant without compromising commercial objectives.</p>",
    } satisfies HeroData,



    whyRisk: {
        title: "<p>What Makes Tax Decisions <br/> Hard Today </p>",
        highlightsTitle:
            "<p>Tax risk rarely arises from numbers. It arises from ambiguity. In <br/> these circumstances, the challenge is not compliance, it is making <br/> tax choices without structure. Most organisations struggle when:</p>",
        highlights: [
            "Regulations allow multiple interpretations",
            "Transactions don't align with existing guidance",
            "Commercial intent diverge from legal or contractual form",
            "Business teams move faster than tax review",
            "Decisions are made without a clearly documented rationale",
        ],
        footerDescription: "",
        image: {
            path: "/images/difc-audit.jpg",
            alt: "Risk advisory discussion",
        },
    } satisfies WhyRiskData,


    meydanFreeZone: {
        title: "",
        free_zone_list: [
            {
                id: 1,
                title: "Our Tax Advisory Services",
                description: "Our tax advisory support is modular and engagement-led, designed to support informed decision making at both management and board level.",
                highlightsText:
                    "Our work typically covers:",
                zone_list: [
                    "Corporate tax interpretation and position setting",
                    "VAT advisory for transactions, contracts, and operating models",
                    "Tax impact assessment for restructurings, acquisitions and group or ownership changes",
                    "Independent review of tax positions ahead of audits or authority review",
                    "Alignment of tax treatment with accounting and governance",
                    "Clear documentation of tax positions, assumptions and decision rationale",
                ],
                footer_description:
                    "Each engagement starts with commercial and organizational context but not templates.",
            },
        ],
        structure_list: [
            {
                id: 1,
                title: "What Tax Advisory Means at KPI ",
                description:
                    "<p>We help you choose a position, and stand behind it.</p> <p>KPI’s tax advisory work focuses on governing tax outcomes before they crystallise into financial, regulatory or reputational exposure. We work with senior management to interpret regulations, assess viable alternatives, and ensure that the basis for each tax position is clearly articulated, documented and and capable of withstanding scrutiny.</p><p>This is not optimisation-driven advice. It is decision support for real transactions and operating models.</p>",
            },
        ],
    } satisfies MeydanFreeZoneData,


    formationProcess: {
        title: "How We Work Through Tax Questions ",
        sub_title: null,
        description: null,
        steps: [
            {
                id: 1,
                title: "Establish the commercial reality",
                sub_title: "",
                inner_title: "Establish the commercial reality",
                description:
                    "<p>We begin by understanding what is actually happening commercially and not just legally.</p>",
            },
            {
                id: 2,
                title: "Interpret the applicable tax framewrok",
                inner_title: "Interpret the applicable tax framewrok",
                sub_title: "",
                description:
                    "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
            },
            {
                id: 3,
                title: "Evaluate viable tax positions",
                inner_title: "Evaluate viable tax positions",
                sub_title: "",
                description:
                    "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
            },
            {
                id: 4,
                title: "Document and support the rationale",
                inner_title: "Document and support the rationale",
                sub_title: "",
                description:
                    "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
            },

        ] satisfies ProcessStep[],
    },

    document_required_data: {
        title: "When Organisations Engage Tax Advisory Experts ",
        description:
            "<p>Tax advisory is usually triggered by strategic action, not by error or non-compliance. It typically arises at decision point where judgement, oversight, and defensibility matter.</p> <p>Common engagement triggers include: </p>",
        items: [
            { id: 1, text: "Entering the scope of UAE corporate tax or reassessing tax positions " },
            { id: 2, text: "Launching new revenue streams or business lines " },
            { id: 3, text: "Group restructurings, acquisitions or ownership changes " },
            { id: 4, text: "Cross-border payments or intercompany arrangements " },
            { id: 5, text: "Board or investor scrutiny on tax exposure ", },
            { id: 6, text: "Preparing for audit, due diligence, or regulatory review  ", },


        ],

        media: {
            path: "/images/tax-img.jpg",
            alt: "Tax Advisory ",
        },
        ftr_description:
            "<p>The earlier tax is considered, the more options remain available.</p>",
    } satisfies DocumentRequiredData,

    explore_service: {
        title: "Related Advisory Services ",
        items: [
            {
                id: 1,
                media: { path: "/images/explore-01.jpg", alt: "Tax Advisory" },
                title: "Corporate Tax Advisory <br/> UAE",
                slug: "#",
            },
            {
                id: 2,
                media: { path: "/images/explore-01.jpg", alt: "VAT Services" },
                title: "VAT Services",
                slug: "#",
            },
            {
                id: 3,
                media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
                title: "eInvoicing <br/> Solution",
                slug: "#",
            },
        ] satisfies ServiceItem[],
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

    whyChoose: {
        title: "Why Organisations Choose KPI for Tax Advisory ",
        description:
            "",
        items: [
            {
                id: 1,
                title: "Interpretation-led judgement",
                description:
                    "<p>We focus on how tax law is applied in practice, not just quoted. </p>",
            },
            {
                id: 2,
                title: "Commercial awareness",
                description:
                    "<p>Advice is rooted in how businesses actually operate.</p>",
            },
            {
                id: 3,
                title: "Controlled risk exposure",
                description:
                    "<p>Clear articulation of exposure and trade-offs - no unintended surprises!</p>",
            },
            {
                id: 4,
                title: "Integrated advisory perspective",
                description:
                    "<p>Tax advice aligned with audit, risk, and regulatory realities.</p>",
            },

        ] satisfies WhyChooseItem[],
    },

    cta: {
        title: "Make Tax Decisions Before They <br/>Make Themselves ",
        description:
            "<p>If tax questions are being deferred, assumed, or handled piecemeal, KPI Group can help you frame clear positions before uncertainty turns into exposure.</p>",
        button: {
            label: "Get in Touch",
            link: "/",
        },
        images: {
            overlay: "/images/taxDecisionBanner-desk.jpg",
            overlayMobile: "/images/taxDecisionBanner-mob.png",
        },
    } satisfies CtaData,

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


}

export const metadata: Metadata = {
    title: "UAE Tax Advisory & Structuring Services | KPI Group  ",
    description:
        "KPI provides independent tax advisory services for UAE businesses. Get practical guidance on corporate tax, structuring, and compliance delivered with regulatory clarity. ",
};

export default function page() {
    return (
        <>

            <InnerHero data={localData.hero} />
            <WhyRiskManagement data={localData.whyRisk} />
            <MeydanFreeZone variant="difc" data={localData.meydanFreeZone} />
            <CorporateServicesUaeFormationProcess variant="aup" data={localData.formationProcess} />
            <DocumentRequired data={localData.document_required_data} variant="tax-advisory" />
            <RiskExploreService variant="difc" data={localData.explore_service} />
            <HomeCounter data={localData.counterList} variant="tax-advisory" />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} variant="tax-advisory" />
            <TaxDecision data={localData.cta} />
            <HomeOurInsights data={localData.insights} />

        </>
    )
}
