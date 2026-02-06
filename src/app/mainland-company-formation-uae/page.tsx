import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import BusinessSetup from "@/components/features/services/BusinessSetup";


export type BankingPartner = {
    id: number;
    media: {
        path: string;
        alt: string;
    }
};
export type BusinessItem = {
    id: number;
    name: string;
    description: string;
    media: {
        path: string;
        alt: string;
    };
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
};

export type FaqItem = {
    id: number;
    title: string;
    description: string;
};

const localData = {
    business: {
        title: "Other Business Setup Options",
        description:
            "If a mainland company isn’t the right fit for your business, KPI can help you explore other UAE company structures.",
        items: [
            {
                id: 1,
                name: "Freezone",
                description:
                    "Best suited for businesses focused on international trade, digital services, or startups seeking tax efficiency and simplified setup. Freezone companies often enjoy 100% foreign ownership and flexible visa options.",
                media: {
                    path: "",
                    alt: "Business Structuring",
                },
            },
            {
                id: 2,
                name: "Offshore",
                description:
                "Ideal for holding companies, asset protection, or businesses that operate internationally without a local UAE presence. Offshore companies cannot trade directly within the UAE and do not require an office or UAE visas. ",
                media: {
                    path: "",
                    alt: "Business Structuring",
                },
            },
            {
                id: 3,
                name: "ADGM",
                description:
                "A globally recognized financial centre in Abu Dhabi with a strong legal framework and common law structure. Ideal for financial services, investment firms and profesional advisory businesses",
                media: {
                    path: "",
                    alt: "Business Structuring",
                },
            },
            {
                id: 4,
                name: "DIFC",
                description:
                "A premium Dubai- based jurisdiction for finance, investment, and professional services. Operates under an independent legal and regulatory framework with international standards",
                media: {
                    path: "",
                    alt: "Business Structuring",
                },
            },
        ] satisfies BusinessItem[],
    },
    banking: {
        title: "Banking Support for Mainland Companies  ",
        description:
            "<p>We assist clients with corporate bank account opening through trusted UAE and international banking partners, helping you choose the right bank based on your business activity and structure. </p>",
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
    whyChoose: {
        title: "Why choose KPI?",
        description: "KPI is more than a company setup service. We guide businesses through every step of mainland formation and beyond, helping you build a compliant, growth-ready company in the UAE. Our team supports you with: ",
        items: [
            {
                id: 1,
                title: "Business Structuring ",
                description:
                    "<p>We help you choose the right activity, license, and legal structure to align with your goals and long-term growth. </p>",
            },
            {
                id: 2,
                title: "Regulatory Guidance",
                description:
                    "<p>Stay fully compliant with UAE laws and regulations. We ensure approvals, documentation, and licenses are handled correctly. </p>",
            },
            {
                id: 3,
                title: "Office & Visa Support",
                description:
                    "<p>We handle your UAE office setup and visa processing for owners, employees, and dependents during the formation process.</p>",
            },
            {
                id: 4,
                title: "Banking & Operations",
                description:
                    "<p>We assist with corporate bank accounts, operational setup, and admin tasks to give your mainland company a solid foundation.</p>",
            },
            {
                id: 5,
                title: "Ongoing Advisory",
                description:
                    "<p>After formation, we provide continuous guidance and support, helping your business scale, adapt, and operate across the UAE.</p>",
            },
            {
                id: 6,
                title: "Accounting Services",
                description:
                    "<p>We manage bookkeeping, accounting, and reporting, helping your business maintain clarity for informed decision-making.</p>",
            },
        ] satisfies WhyChooseItem[],
    },
    cta: {
        title: "Ready to Start Your Dream Business in the UAE? ",
        description:
            "<p>Our team will help you choose the right structure, license, and setup based on your goals, risk profile, and budget. Speak to our expert business setup consultants today!</p>",
        button: {
            label: "Get in Touch",
            link: "/contact",
        },
    } satisfies CtaData,
    corporate_faq_data: {
        title: "FAQs",
        faq_list: [
            {
                id: 1,
                title: "What is a mainland company in the UAE?",
                description: `
                    <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                    `,
            },
            {
                id: 2,
                title: "Is mainland company formation available across the UAE",
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
                title: "What does it cost to set up a business in the UAE?",
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
                title: "How much does a mainland license cost?",
                description: `
                    <p>Costs depend on the business activity, license type, office requirements, and visas needed. Our team provides a clear breakdown before starting. </p>
                    `,
            },
        ] satisfies FaqItem[],
    },
}

export default function MainlandCompanyFormationUaePage() {
    return (
        <>
            <CorporateServicesUaeBanking data={localData.banking} variant="mainland" />
            <BusinessSetup data={localData.business} />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} variant="mainland" />
            <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
        </>
    )
}
