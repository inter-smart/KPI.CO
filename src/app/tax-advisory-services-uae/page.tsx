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
            desktopPath: "/images/tax-banner-desk.png",
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

    formationProcess: {
        title: "How We Work Through Tax Questions ",
        sub_title: null,
        description: null,
        steps: [
            {
                id: 1,
                title: "Establish the commercial reality",
                sub_title: "",
                description:
                    "<p>We begin by understanding what is actually happening commercially and not just legally.</p>",
            },
            {
                id: 2,
                title: "Interpret the applicable tax framewrok",
                sub_title: "",
                description:
                    "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
            },
            {
                id: 3,
                title: "Evaluate viable tax positions",
                sub_title: "",
                description:
                    "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
            },
            {
                id: 4,
                title: "Document and support the rationale",
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
            overlay: "/images/taxDecisionBanner-desk.png",
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
    title: "AUP Audit Services in UAE | DFSA & Regulatory Compliance | KPI   ",
    description:
        "Expert Agreed-Upon Procedures (AUP) engagements for UAE  businesses. Factual findings, scope-aligned reporting for stakeholders and authorities.. ",
};

export default function page() {
    return (
        <>

            <InnerHero data={localData.hero} />
            <WhyRiskManagement data={localData.whyRisk} />
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
