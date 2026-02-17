import InnerHero from '@/components/common/InnerHero'
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import DocumentRequired from "@/components/features/services/DocumentRequired";

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

}

export default function page() {
    return (
        <>

            <InnerHero data={localData.hero} />
            <WhyRiskManagement data={localData.whyRisk} />

            <CorporateServicesUaeFormationProcess variant="aup"
                data={localData.formationProcess}
            />
              <DocumentRequired data={localData.document_required_data} variant="aup" />

        </>
    )
}
