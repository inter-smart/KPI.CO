
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeHero from "@/components/features/services/CorporateServicesUaeHero";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import { Metadata } from "next";
import path from "path";

export type MediaItem = {
    path: string;
    alt: string;
};

export type HeroData = {
    id: number;
    title: string;
    description: string;
    media: {
        type: "image" | "video";
        path: string;
        alt: string;
    };
};

export type WhyBuildItem = {
    id: number;
    media: MediaItem;
    title: string;
    description: string;
};

export type SetupOptionItem = {
    id: number;
    title: string;
    description: string;
    media: MediaItem;
    features: string[];
};

export type ProcessStep = {
    id: number;
    step: string;
    title: string;
    description: string;
};

export type BankingPartner = {
    id: number;
    media: {
        path: string;
        alt: string;
    }
};

export type ServiceItem = {
    id: number;
    media: MediaItem;
    title: string;
    description: string;
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
    hero: {
        id: 1,
        title: "Business Setup Experts - Start Your Business in the UAE",
        description:
            "<p>The United Arab Emirates is built for founders with ambition. Whether you are launching your first company or expanding internationally, KPI helps you set up in the UAE with the right structure, clear guidance, and full support beyond incorporation. From choosing the best jurisdiction to managing banking, tax, and visas, we make the process simple, transparent, and stress-free.</p>",
        media: {
            type: "image" as const,
            path: "/images/corporate-services-uae-hero-1.jpg",
            alt: "Business Setup Experts - Start Your Business in the UAE",
        },
    } satisfies HeroData,

    whyBuild: {
        title: "Why Build Your Business in The UAE?",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/why-build-icon-1.svg",
                    alt: "Strategic Location",
                },
                title: "Strategic Location",
                description:
                    "<p>Gateway to Middle East, Africa, and Asia markets with world-class infrastructure and connectivity.</p>",
            },
            {
                id: 2,
                media: {
                    path: "/images/why-build-icon-2.svg",
                    alt: "Tax Benefits",
                },
                title: "Tax Benefits",
                description:
                    "<p>0% corporate tax for qualifying businesses, no personal income tax, and full repatriation of profits.</p>",
            },
            {
                id: 3,
                media: {
                    path: "/images/why-build-icon-3.svg",
                    alt: "100% Ownership",
                },
                title: "100% Ownership",
                description:
                    "<p>Full foreign ownership allowed in most sectors with no local sponsor requirement in free zones.</p>",
            },
            {
                id: 4,
                media: {
                    path: "/images/why-build-icon-4.svg",
                    alt: "Business-Friendly",
                },
                title: "Business-Friendly",
                description:
                    "<p>Streamlined processes, modern regulations, and strong legal framework supporting business growth.</p>",
            },
            {
                id: 5,
                media: {
                    path: "/images/why-build-icon-5.svg",
                    alt: "Visa Support",
                },
                title: "Visa Support",
                description:
                    "<p>Easy visa processing for owners, employees, and families with long-term residency options.</p>",
            },
            {
                id: 6,
                media: {
                    path: "/images/why-build-icon-6.svg",
                    alt: "World-Class Infrastructure",
                },
                title: "World-Class Infrastructure",
                description:
                    "<p>State-of-the-art facilities, reliable utilities, and advanced digital infrastructure.</p>",
            },
        ] satisfies WhyBuildItem[],
    },

    setupOptions: {
        title: "Business Setup Options in The UAE",
        description:
            "<p>Choose the right jurisdiction for your business based on your activities, ownership requirements, and market access needs.</p>",
        items: [
            {
                id: 1,
                title: "Mainland",
                description:
                    "<p>Full access to UAE market and ability to trade directly with government entities and local businesses.</p>",
                media: {
                    path: "/images/setup-option-mainland.jpg",
                    alt: "Mainland Business Setup",
                },
                features: [
                    "Trade anywhere in UAE",
                    "Government contracts",
                    "No office space restrictions",
                    "Multiple visa options",
                ],
            },
            {
                id: 2,
                title: "Freezone",
                description:
                    "<p>100% foreign ownership with tax benefits and streamlined setup process in designated free zones.</p>",
                media: {
                    path: "/images/setup-option-freezone.jpg",
                    alt: "Freezone Business Setup",
                },
                features: [
                    "100% ownership",
                    "0% corporate tax",
                    "Full profit repatriation",
                    "Fast setup process",
                ],
            },
            {
                id: 3,
                title: "Offshore",
                description:
                    "<p>Ideal for holding companies, asset protection, and international business operations.</p>",
                media: {
                    path: "/images/setup-option-offshore.jpg",
                    alt: "Offshore Business Setup",
                },
                features: [
                    "Asset protection",
                    "Privacy benefits",
                    "No physical office needed",
                    "International operations",
                ],
            },
        ] satisfies SetupOptionItem[],
    },

    formationProcess: {
        title: "Company Formation Process",
        description:
            "<p>Our streamlined process ensures your business is set up correctly from day one.</p>",
        steps: [
            {
                id: 1,
                step: "01",
                title: "Consultation",
                description:
                    "We discuss your business goals, activities, and recommend the best jurisdiction and license type.",
            },
            {
                id: 2,
                step: "02",
                title: "Documentation",
                description:
                    "We prepare all required documents, applications, and handle the submission process.",
            },
            {
                id: 3,
                step: "03",
                title: "Approval",
                description:
                    "We liaise with authorities to obtain approvals and ensure compliance with all requirements.",
            },
            {
                id: 4,
                step: "04",
                title: "License Issuance",
                description:
                    "Your trade license is issued and your company is officially registered.",
            },
            {
                id: 5,
                step: "05",
                title: "Post-Setup Support",
                description:
                    "We assist with banking, visas, office setup, and ongoing compliance requirements.",
            },
        ] satisfies ProcessStep[],
    },

    banking: {
        title: "Corporate Banking Support  ",
        description:
            "<p>We work with trusted UAE and international banks to help our clients open compliant business bank accounts efficiently and with confidence. </p>",
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

    services: {
        title: "Related Corporate Services",
        description:
            "<p>Setting up a company is only the starting point. What follows is often time-consuming, process-heavy, and spread across multiple authorities. Without the right support, these requirements can slow founders down and distract from building the business. KPI acts as your single point of contact, managing essential corporate services so you can stay focused on growth.  </p>",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/corporate-servive-1.svg",
                    alt: "Company Formation",
                },
                title: "PRO Services",
                description:
                    "Government approvals, renewals, and official documentation managed end to end.",
            },
            {
                id: 2,
                media: {
                    path: "/images/corporate-servive-2.svg",
                    alt: "Company Formation",
                },
                title: "Banking Assistance",
                description:
                    "Support with corporate bank account opening and compliance preparation. ",
            },
            {
                id: 3,
                media: {
                    path: "/images/corporate-servive-3.svg",
                    alt: "Company Formation",
                },
                title: "UAE Corporate Tax",
                description:
                    "Clear guidance from registration to filings to stay compliant as your business grows.  ",
            },
            {
                id: 4,
                media: {
                    path: "/images/corporate-servive-4.svg",
                    alt: "Company Formation",
                },
                title: "Bookkeeping Services",
                description:
                    "Ongoing support to keep your records organized and ready for tax and regulatory requirements. ",
            },
            {
                id: 5,
                media: {
                    path: "/images/corporate-servive-5.svg",
                    alt: "Company Formation",
                },
                title: "UAE Visas",
                description:
                    "Assistance WITH Residence visas for founders, employees, and family members. ",
            },
            {
                id: 6,
                media: {
                    path: "/images/corporate-servive-6.svg",
                    alt: "Company Formation",
                },
                title: "Office Solutions",
                description:
                    "Assistance with compliant offices, co-working, or flexi-desks for licensing and visas.",
            },
        ] satisfies ServiceItem[],
    },

    whyChoose: {
        title: "Why choose KPI?",
        description: "Choosing the right business setup consultants in the UAE can save you time, reduce costs, and prevent unnecessary restructuring. KPI supports founders and businesses with clear advice, practical execution, and ongoing guidance every step of the way.",
        items: [
            {
                id: 1,
                title: "Experienced Guidance",
                description:
                    "<p>Decades of hands-on experience supporting businesses across multiple industries, structures, and UAE jurisdictions. </p>",
            },
            {
                id: 2,
                title: "Founder-led Approach ",
                description:
                    "<p>We take the time to understand your goals and recommend solutions that fit how you want to operate and grow. </p>",
            },
            {
                id: 3,
                title: "Transparent Processes",
                description:
                    "<p>No hidden costs or surprises. You know what to expect at every stage, from setup through ongoing compliance. </p>",
            },
            {
                id: 4,
                title: "End-to-End Support",
                description:
                    "<p>From UAE company formation to banking, visas, and compliance, we stay involved as your business evolves. </p>",
            },
        ] satisfies WhyChooseItem[],
    },

    cta: {
        title: "Build Your Business in the UAE with Confidence",
        description:
            "<p>From the first conversation to full setup and beyond, KPI supports you at every stage of your business journey.</p>",
        button: {
            label: "Get Started Today",
            link: "/contact",
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
};

export const metadata: Metadata = {
    title: "#1 UAE Business Setup Consultants | Start Your Business in UAE",
    description:
        "Set up a mainland company in the UAE with full market access. Compare license types, setup steps and visa options. Clear process. No hidden fees.",
};


export default function CorporateServicesUaePage() {
    return (
        <>
            <CorporateServicesUaeHero data={localData.hero} />
            <CorporateServicesUaeWhyBuild data={localData.whyBuild} />
            <CorporateServicesUaeSetupOptions data={localData.setupOptions} />
            <CorporateServicesUaeFormationProcess data={localData.formationProcess} />
            <CorporateServicesUaeBanking data={localData.banking} />
            <CorporateServicesUaeServices data={localData.services} />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} />
            <CorporateServicesUaeCta data={localData.cta} />
            <CorporateServicesUaeFaq data={localData?.corporate_faq_data} />
        </>
    );
}
