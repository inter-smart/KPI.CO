import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
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
    additionalContent: string[];
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
    slug: string;
};

export type ProcessStep = {
    id: number;
    step: string;
    title: string;
    sub_title: string;
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
        additionalContent: [
            "30+ years of experience",
            "No hidden costs",
            "Free banking consultation",
        ],
    } satisfies HeroData,

    whyBuild: {
        title: "Why Build Your Business in The UAE?",
        description:
            "<p>The UAE’s appeal goes beyond world-class infrastructure and a vibrant lifestyle. Here’s why it’s the perfect place to start and scale your company: </p>",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/corporate-services-uae-service-1.svg",
                    alt: "Strategic Location",
                },
                title: "Strategic Location",
                description:
                    "<p>Connect easily to Europe, Asia, and Africa from the UAE, giving your business fast access to global markets.</p>",
            },
            {
                id: 2,
                media: {
                    path: "/images/corporate-services-uae-service-2.svg",
                    alt: "Tax Benefits",
                },
                title: "Tax Benefits",
                description:
                    "<p>Benefit from zero personal income tax and a competitive corporate tax framework for predictable long-term planning.</p>",
            },
            {
                id: 3,
                media: {
                    path: "/images/corporate-services-uae-service-3.svg",
                    alt: "100% Ownership",
                },
                title: "100% Ownership",
                description:
                    "<p>Operate in a secure, pro-business environment backed by government policies that support growth.</p>",
            },
            {
                id: 4,
                media: {
                    path: "/images/corporate-services-uae-service-4.svg",
                    alt: "Business-Friendly",
                },
                title: "Business-Friendly",
                description:
                    "<p>Access trusted banks, investor networks, and financial infrastructure to run your operations smoothly.</p>",
            },
            {
                id: 5,
                media: {
                    path: "/images/corporate-services-uae-service-5.svg",
                    alt: "Visa Support",
                },
                title: "Visa Support",
                description:
                    "<p>Get your company operational fast with streamlined licensing, visas, and government approvals. </p>",
            },
            {
                id: 6,
                media: {
                    path: "/images/corporate-services-uae-service-6.svg",
                    alt: "World-Class Infrastructure",
                },
                title: "World-Class Infrastructure",
                description:
                    "<p>Access a dynamic ecosystem of startups, accelerators, and tech hubs to scale your business ideas faster.</p>",
            },
        ] satisfies WhyBuildItem[],
    },

    setupOptions: {
        title: "Business Setup Options in The UAE",
        description:
            "<p>The UAE offers several ways to establish a company; each suited to different business goals and operating models. We help you select the right structure from day one, ensuring it aligns with your business activity, growth plans, and long-term objectives.</p>",
        items: [
            {
                id: 1,
                title: "Mainland",
                description:
                    "<p>Mainland companies allow you to operate anywhere in the UAE and engage directly with local clients and government entities. This structure offers maximum operational flexibility and is suitable for businesses that need a strong presence in the local market.</p>",
                media: {
                    path: "/images/corporate-services-uae-setup-1.jpg",
                    alt: "Mainland Business Setup",
                },
                slug: "/corporate-services-uae/mainland",
            },
            {
                id: 2,
                title: "Freezone",
                description:
                    "<p>Free Zone setups are ideal for startups, SMEs, and international companies focused on specific industries. They provide a business-friendly environment with simplified registration, regulatory support, and easy access to sector-specific infrastructure.</p>",
                media: {
                    path: "/images/corporate-services-uae-setup-2.jpg",
                    alt: "Freezone Business Setup",
                },
                slug: "/corporate-services-uae/freezone",
            },
            {
                id: 3,
                title: "Offshore",
                description:
                    "<p>Offshore companies are designed for international operations, holding structures, or cross-border investments. They do not trade within the UAE but offer a streamlined, efficient setup with confidentiality and access to UAE professional services.</p>",
                media: {
                    path: "/images/corporate-services-uae-setup-3.jpg",
                    alt: "Offshore Business Setup",
                },
                slug: "/corporate-services-uae/offshore",
            },
        ] satisfies SetupOptionItem[],
    },

    formationProcess: {
        title: "Company Formation Process",
        sub_title: "Steps to Start Your Business in the UAE",
        description:
            "<p>Starting a business in the UAE does not need to feel complicated. Our role is to guide you through each step clearly, handle the paperwork, and make sure your setup is right from the start.</p>",
        steps: [
            {
                id: 1,
                step: "01",
                title: "Speak to a Consultant",
                sub_title: "Define Scope & Objectives",
                description:
                    "<p>It begins with a conversation. We take the time to understand your business idea, goals, and where you want to operate. Based on this, we recommend the most suitable setup option across the UAE.</p>",
            },
            {
                id: 2,
                step: "02",
                title: "Choose the Right Jurisdiction",
                sub_title: "Choose the Right Jurisdiction",
                description:
                    "<p>Mainland, free zone, or offshore - each serve a different purpose. We help you choose the structure that fits your business activity, budget, and future goals.</p>",
            },
            {
                id: 3,
                step: "03",
                title: "Secure Your Trade License",
                sub_title: "Secure Your Trade License",
                description:
                    "<p>Once the structure is confirmed, we manage the license application from end to end. Our team prepares the documents, submits them to the relevant authorities, and keeps you informed until approval is complete.</p>",
            },
            {
                id: 4,
                step: "04",
                title: "Apply For UAE Residency",
                sub_title: "Apply For UAE Residency",
                description:
                    "<p>If your setup requires visas, we handle the full process for business owners, partners, employees, and family members. This includes applications, medicals, Emirates ID, and final approvals.</p>",
            },
            {
                id: 5,
                step: "05",
                title: "Open Your Business Bank Account",
                sub_title: "Open Your Business Bank Account",
                description:
                    "<p>To complete your setup, we support you with opening a corporate bank account. From bank selection to compliance preparation, we help streamline a process that can otherwise be time-consuming.</p>",
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
            <InnerHero data={localData.hero} />
            <CorporateServicesUaeWhyBuild data={localData.whyBuild} />
            <CorporateServicesUaeSetupOptions data={localData.setupOptions} />
            <CorporateServicesUaeFormationProcess data={localData.formationProcess} />
            <CorporateServicesUaeBanking data={localData.banking} />
            <CorporateServicesUaeServices data={localData.services} />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} />
            <CorporateServicesUaeCta data={localData.cta} />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
        </>
    );
}
