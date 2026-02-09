import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import BusinessSetup from "@/components/features/services/BusinessSetup";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";


export type MainlandBusinessData = {
    title: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
    footerDescription: string;
    image: {
        path: string;
        alt: string;
    };
};

export type LocationItem = {
    id: number;
    title: string;
    type: "image" | "content";
    image?: string;
    description?: string;
    link?: string;
};

export type BusinessLocationData = {
    title: string;
    description: string;
    items: LocationItem[];
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
    button?: {
        link: string;
        target: boolean;
    };
};

export type MediaItem = {
    path: string;
    alt: string;
};

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

export type WhyBuildItem = {
    id: number;
    media: MediaItem;
    title: string;
    description: string;
};

export type ProcessStep = {
    id: number;
    step: string;
    title: string;
    sub_title: string;
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
        media: {
            path: "/images/mainland-company-formation-uae-hero-bg.png",
            alt: "Mainland Company Formation & Licensing in the UAE",
        },
        title: "Mainland Company Formation & Licensing in the UAE ",
        description:
            "<p>Set up your mainland company in the UAE and operate freely across all Emirates. Ideal for businesses that need local market access, onshore operations, and long term flexibility.</p>",
    } satisfies HeroData,
    
    mainlandBusiness: {
        title: "Start A Mainland Business In The UAE",
        description: "<p>A mainland company lets you do business anywhere in the UAE, without being limited to a specific free zone. It is licensed by the Department of Economic Development (DED) in the Emirate where your company is registered and is commonly used by businesses that want direct access to the local market.</p>",
        highlightsTitle: "Mainland company formation is suitable for businesses such as:",
        highlights: [
            "Trading companies",
            "Service-based businesses",
            "Consultants and professionals",
            "Companies working with UAE clients",
        ],
        footerDescription: "<p>For most business activities, 100% foreign ownership is allowed, making mainland setup a flexible option for both local and international investors.</p>",
        image: {
            path: "/images/corporate-services-uae-setup-1.jpg",
            alt: "Mainland Business Setup UAE",
        },
    } satisfies MainlandBusinessData,

    businessLocation: {
        title: "Mainland Business Locations In The UAE",
        description: "Each of the UAE's seven Emirates offers unique opportunities for mainland business setup. Choosing the right location depends on your sector, scale, and long-term goals.",
        items: [
            {
                id: 1,
                title: "Dubai Mainland",
                type: "image",
                image: "/images/mainlandBusiness-1.jpg",
                description: "Dubai offers world-class infrastructure and a global trade hub environment, perfect for ambitious international businesses.",
                link: "#",
            },
            {
                id: 2,
                title: "Abu Dhabi Mainland",
                type: "image",
                image: "/images/mainlandBusiness-2.jpg",
                description: "Abu Dhabi combines strong government support with strategic industry clusters. Its focus on energy, technology, and innovation provides a solid base for businesses working on large-scale or specialized projects.",
                link: "#",
            },
            {
                id: 3,
                title: "Ajman Mainland",
                type: "image",
                image: "/images/mainlandBusiness-3.jpg",
                description: "Ajman provides a cost-effective mainland setup with a fast-growing industrial base and strategic port access.",
                link: "#",
            },
            {
                id: 4,
                title: "Sharjah Mainland",
                type: "image",
                image: "/images/mainlandBusiness-4.jpg",
                description: "Sharjah is the cultural and educational hub of the UAE, offering unique opportunities in logistics and creative industries.",
                link: "#",
            },
            {
                id: 5,
                title: "Ras Al Khaimah (RAK) Mainland",
                type: "image",
                image: "/images/mainlandBusiness-5.jpg",
                description: "RAK is known for its diverse economy and strong manufacturing sector, offering a high quality of life and business-friendly regulations.",
                link: "#",
            },
            {
                id: 6,
                title: "Fujairah Mainland",
                type: "image",
                image: "/images/mainlandBusiness-6.jpg",
                description: "Fujairah is a strategic maritime and oil hub with the only UAE access to the Indian Ocean.",
                link: "#",
            },
            {
                id: 7,
                title: "Umm Al Quwain Mainland",
                type: "image",
                image: "/images/mainlandBusiness-7.jpg",
                description: "UAQ offers a stable business environment with a focus on tourism and trade, providing great potential for sustainable growth.",
                link: "#",
            },
        ]
    } satisfies BusinessLocationData,
    whyBuild: {
        title: "Why Choose a Mainland Company Setup?",
        description:
            "<p>The UAE offers several ways to establish a company; each suited to different business goals and operating models. We help you select the right structure from day one, ensuring it aligns with your business activity, growth plans, and long-term objectives.</p>",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/mainland-company-formation-service-1.svg",
                    alt: "Market Access",
                },
                title: "Market Access",
                description:
                    "<p>Operate anywhere in the UAE without geographic limits. Trade directly with local and international clients without needing agents or distributors.</p>",
            },
            {
                id: 2,
                media: {
                    path: "/images/mainland-company-formation-service-2.svg",
                    alt: "Full Ownership",
                },
                title: "Full Ownership",
                description:
                    "<p>Most business activities under a Mainland license allow 100% foreign ownership. Retain complete control without a local sponsor or partner. </p>",
            },
            {
                id: 3,
                media: {
                    path: "/images/mainland-company-formation-service-3.svg",
                    alt: "Visa Options",
                },
                title: "Visa Options",
                description:
                    "<p>Benefit from flexible visas for employees and dependents. Visa eligibility scales with office size and business growth. </p>",
            },
            {
                id: 4,
                media: {
                    path: "/images/mainland-company-formation-service-4.svg",
                    alt: "Flexible Offices",
                },
                title: "Flexible Offices",
                description:
                    "<p>Choose an office location anywhere in the UAE. Office size can grow as your business expands and visa needs increase.</p>",
            },
            {
                id: 5,
                media: {
                    path: "/images/mainland-company-formation-service-5.svg",
                    alt: "Government Contracts ",
                },
                title: "Government Contracts ",
                description:
                    "<p>Mainland companies can bid for government and semi-government projects, giving access to opportunities not available to free zone entities.</p>",
            },
            {
                id: 6,
                media: {
                    path: "/images/mainland-company-formation-service-6.svg",
                    alt: "Banking Credibility",
                },
                title: "Banking Credibility",
                description:
                    "<p>Mainland companies are seen as more established by banks and local partners, simplifying banking, leasing, and commercial relationships.</p>",
            },
            {
                id: 7,
                media: {
                    path: "/images/mainland-company-formation-service-7.svg",
                    alt: "Easy Expansion",
                },
                title: "Easy Expansion",
                description:
                    "<p>Open multiple branches or expand operations across multiple Emirates without changing your core company license or structure.</p>",
            },
            {
                id: 8,
                media: {
                    path: "/images/mainland-company-formation-service-8.svg",
                    alt: "Regulatory Stability",
                },
                title: "Regulatory Stability",
                description:
                    "<p>Operate within a clear and stable legal framework. Mainland companies benefit from consistent regulations that support long-term growth and compliance.</p>",
            },
        ] satisfies WhyBuildItem[],
    },
    formationProcess: {
        title: "Steps to Get a Mainland License",
        sub_title: null,
        description: null,
        steps: [
            {
                id: 1,
                step: "Step One",
                title: "Free Consultation with Our Experts",
                sub_title: "Free Consultation with Our Experts",
                description:
                    "<p>Share your business details with our team. We’ll guide you on the best mainland setup for your goals.</p>",
            },
            {
                id: 2,
                step: "Step Two",
                title: "Choose Your Business Activity & Structure",
                sub_title: "Choose Your Business Activity & Structure",
                description:
                    "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
            },
            {
                id: 3,
                step: "Step Three",
                title: "Reserve Your Company Name & Apply for License",
                sub_title: "Reserve Your Company Name & Apply for License",
                description:
                    "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
            },
            {
                id: 4,
                step: "Step Four",
                title: "Office & Workspace Setup",
                sub_title: "Office & Workspace Setup",
                description:
                    "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
            },
            {
                id: 5,
                step: "Step Five",
                title: "UAE Residency & Visas",
                sub_title: "UAE Residency & Visas",
                description:
                    "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
            },
            {
                id: 6,
                step: "Step Six",
                title: "Open Your Business Bank Account",
                sub_title: "Open Your Business Bank Account",
                description:
                    "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
            },
        ] satisfies ProcessStep[],
    },
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
        hero: {
            id: 1,
            media: {
                path: "/images/mainland-company-formation-uae-hero-bg.png",
                alt: "Mainland Company Formation & Licensing in the UAE",
            },
            title: "Mainland Company Formation & Licensing in the UAE ",
            description:
                "<p>Set up your mainland company in the UAE and operate freely across all Emirates. Ideal for businesses that need local market access, onshore operations, and long term flexibility.</p>",
        } satisfies HeroData,

        whyBuild: {
            title: "Why Choose a Mainland Company Setup?",
            description:
                "<p>The UAE offers several ways to establish a company; each suited to different business goals and operating models. We help you select the right structure from day one, ensuring it aligns with your business activity, growth plans, and long-term objectives.</p>",
            items: [
                {
                    id: 1,
                    media: {
                        path: "/images/mainland-company-formation-service-1.svg",
                        alt: "Market Access",
                    },
                    title: "Market Access",
                    description:
                        "<p>Operate anywhere in the UAE without geographic limits. Trade directly with local and international clients without needing agents or distributors.</p>",
                },
                {
                    id: 2,
                    media: {
                        path: "/images/mainland-company-formation-service-2.svg",
                        alt: "Full Ownership",
                    },
                    title: "Full Ownership",
                    description:
                        "<p>Most business activities under a Mainland license allow 100% foreign ownership. Retain complete control without a local sponsor or partner. </p>",
                },
                {
                    id: 3,
                    media: {
                        path: "/images/mainland-company-formation-service-3.svg",
                        alt: "Visa Options",
                    },
                    title: "Visa Options",
                    description:
                        "<p>Benefit from flexible visas for employees and dependents. Visa eligibility scales with office size and business growth. </p>",
                },
                {
                    id: 4,
                    media: {
                        path: "/images/mainland-company-formation-service-4.svg",
                        alt: "Flexible Offices",
                    },
                    title: "Flexible Offices",
                    description:
                        "<p>Choose an office location anywhere in the UAE. Office size can grow as your business expands and visa needs increase.</p>",
                },
                {
                    id: 5,
                    media: {
                        path: "/images/mainland-company-formation-service-5.svg",
                        alt: "Government Contracts ",
                    },
                    title: "Government Contracts ",
                    description:
                        "<p>Mainland companies can bid for government and semi-government projects, giving access to opportunities not available to free zone entities.</p>",
                },
                {
                    id: 6,
                    media: {
                        path: "/images/mainland-company-formation-service-6.svg",
                        alt: "Banking Credibility",
                    },
                    title: "Banking Credibility",
                    description:
                        "<p>Mainland companies are seen as more established by banks and local partners, simplifying banking, leasing, and commercial relationships.</p>",
                },
                {
                    id: 7,
                    media: {
                        path: "/images/mainland-company-formation-service-7.svg",
                        alt: "Easy Expansion",
                    },
                    title: "Easy Expansion",
                    description:
                        "<p>Open multiple branches or expand operations across multiple Emirates without changing your core company license or structure.</p>",
                },
                {
                    id: 8,
                    media: {
                        path: "/images/mainland-company-formation-service-8.svg",
                        alt: "Regulatory Stability",
                    },
                    title: "Regulatory Stability",
                    description:
                        "<p>Operate within a clear and stable legal framework. Mainland companies benefit from consistent regulations that support long-term growth and compliance.</p>",
                },
            ] satisfies WhyBuildItem[],
        },

        formationProcess: {
            title: "Steps to Get a Mainland License",
            sub_title: null,
            description: null,
            steps: [
                {
                    id: 1,
                    step: "Step One",
                    title: "Free Consultation with Our Experts",
                    sub_title: "Free Consultation with Our Experts",
                    description:
                        "<p>Share your business details with our team. We’ll guide you on the best mainland setup for your goals.</p>",
                },
                {
                    id: 2,
                    step: "Step Two",
                    title: "Choose Your Business Activity & Structure",
                    sub_title: "Choose Your Business Activity & Structure",
                    description:
                        "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
                },
                {
                    id: 3,
                    step: "Step Three",
                    title: "Reserve Your Company Name & Apply for License",
                    sub_title: "Reserve Your Company Name & Apply for License",
                    description:
                        "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
                },
                {
                    id: 4,
                    step: "Step Four",
                    title: "Office & Workspace Setup",
                    sub_title: "Office & Workspace Setup",
                    description:
                        "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
                },
                {
                    id: 5,
                    step: "Step Five",
                    title: "UAE Residency & Visas",
                    sub_title: "UAE Residency & Visas",
                    description:
                        "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
                },
                {
                    id: 6,
                    step: "Step Six",
                    title: "Open Your Business Bank Account",
                    sub_title: "Open Your Business Bank Account",
                    description:
                        "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
                },
            ] satisfies ProcessStep[],
        },

        whyChoose: {
            title: "Why choose KPI?",
            description:
                "Choosing the right business setup consultants in the UAE can save you time, reduce costs, and prevent unnecessary restructuring. KPI supports founders and businesses with clear advice, practical execution, and ongoing guidance every step of the way.",
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
    document_required_data: {
        title: "Documents Required",
        description: "<p>To complete your Mainland company registration, you will typically need: </p>",
        items: [
            { id: 1, text: "Passport copies of all shareholders " },
            { id: 2, text: "UAE entry stamp or residence visa copy " },
            { id: 3, text: "Emirates ID (if applicable) " },
            { id: 4, text: "Trade name reservation " },
            { id: 5, text: "Initial approval from the Department of Economic Development (DED)" },
            { id: 6, text: "Tenancy contract (Ejari)" },
            { id: 7, text: "Memorandum of Association (MOA) or Local Service Agent agreement " },
        ],

        media: {
            path: "/images/document-required-img.jpg", // <-- your image path
            alt: "Required documents",
        },
        ftr_description:
            "<p>KPI handles the full process, from reviewing your documents to final submission, ensuring everything is compliant and your mainland company setup is handled professionally.</p>",
    } satisfies DocumentRequiredData,
};

export default function MainlandCompanyFormationUaePage() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <MainlandBusiness data={localData.mainlandBusiness} />
            <CorporateServicesUaeWhyBuild
                variant="mainland"
                data={localData.whyBuild}
            />
            <BusinessLocation data={localData.businessLocation} />
            <CorporateServicesUaeFormationProcess
                variant="mainland"
                data={localData.formationProcess}
            />
            <DocumentRequired data={localData.document_required_data} />
            <CorporateServicesUaeBanking data={localData.banking} variant="mainland" />
            <BusinessSetup data={localData.business} />
            <CorporateServicesUaeWhyChoose data={localData.whyChoose} variant="mainland" />
            <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
            <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
        </>
    );
}
