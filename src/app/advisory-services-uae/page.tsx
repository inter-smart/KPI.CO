import InnerHero from '@/components/common/InnerHero'
import DocumentRequired from "@/components/features/services/DocumentRequired";
import AdvisorySerice, { AdvisoryData } from "@/components/features/advisory/AdvisorySerice";

export type HeroData = {
    id: number;
    title: string;
    description: string;
    media?: {
        path: string;
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

const localData = {
    hero: {
        id: 1,
        media: {
            path: "/images/mainland-company-formation-uae-hero-bg.png",
            alt: "VAT Advisory & Compliance That Works for Your Business",
        },
        title: "VAT Advisory & Compliance That Works for Your Business",
        description:
            "<p>Business decisions today are shaped by regulation, tax, governance, and risk, not just commercial intent. Poor structuring or delayed advice can create exposure that is difficult and expensive to unwind. KPI Group provides independent advisory services across risk, tax, compliance, and corporate structuring, helping organisations make informed decisions with clarity, control, and regulatory confidence.</p>",
    } satisfies HeroData,

    document_required_data: {
        title: "Advisory Support Built Around Business Reality",
        description: "<p>Advisory is not a one-time decision. It evolves as organisations grow, restructure, expand into new jurisdictions, or face changing regulatory requirements. Our advisory services are designed to support organisations at different stages, including: </p>",
        items: [
            { id: 1, text: "Market entry and entity setup" },
            { id: 2, text: "Ownership and group structuring" },
            { id: 3, text: "Regulatory and compliance readiness " },
            { id: 4, text: "Tax registration, compliance, and reporting " },
            { id: 5, text: "Ongoing governance and operational support" },
        ],

        media: {
            path: "/images/advisory_img.jpg",
            alt: "Required documents",
        },
        ftr_description:
            "<p>We focus on practical outcomes, structures and processes that work in practice, not just on paper.</p>",
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
                    titleColor: "text-[#1C5396]"
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
                    titleColor: "text-[#1C5396]"
                }
            }
        ]
    } satisfies AdvisoryData
}

export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <DocumentRequired data={localData.document_required_data} />
            <AdvisorySerice data={localData.advisory_data} />
        </>
    )
}
