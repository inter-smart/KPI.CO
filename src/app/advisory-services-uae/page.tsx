import InnerHero from '@/components/common/InnerHero'
import DocumentRequired from "@/components/features/services/DocumentRequired";

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
  document_required_data: {
        title: "Advisory Support Built Around Business Reality ",
        description: "<p>Advisory is not a one-time decision. It evolves as organisations grow, restructure, expand into new jurisdictions, or face changing regulatory requirements. Our advisory services are designed to support organisations at different stages, including:  </p>",
        items: [
            { id: 1, text: "Market entry and entity setup " },
            { id: 2, text: "Ownership and group structuring " },
            { id: 3, text: "Emirates ID (if applicable) " },
            { id: 4, text: "Trade name reservation " },
            { id: 5, text: "Initial approval from the Department of Economic Development (DED)" },
            { id: 6, text: "Tenancy contract (Ejari)" },
            { id: 7, text: "Memorandum of Association (MOA) or Local Service Agent agreement " },
        ],

        media: {
            path: "/images/advisory_img.jpg",  
            alt: "Required documents",
        },
        ftr_description:
            "<p>KPI handles the full process, from reviewing your documents to final submission, ensuring everything is compliant and your mainland company setup is handled professionally.</p>",
    } satisfies DocumentRequiredData,

    hero: {
        id: 1,
        media: {
            path: "/images/mainland-company-formation-uae-hero-bg.png",
            alt: "VAT Advisory & Compliance That Works for Your Business ",
        },
        title: "VAT Advisory & Compliance That Works for Your Business  ",
        description:
            "<p>Business decisions today are shaped by regulation, tax, governance, and  risk, not just commercial intent. Poor structuring or delayed advice can create exposure that is difficult and expensive to unwind. KPI Group provides independent advisory services across risk, tax, compliance, and corporate structuring, helping organisations make informed decisions with clarity, control, and regulatory confidence. </p>",
    } satisfies HeroData,

}
export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <DocumentRequired data={localData.document_required_data} />
        </>
    )
}
