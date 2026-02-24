import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
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

export type MainlandBusinessData = {
    title: string;
    description: string;
    highlightsTitle: string;
    highlights: string[];
    footerDescription?: string;
    image: {
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

export type MediaItem = {
    path: string;
    alt: string;
};

export type RiskAssuranceData = {
    id: number;
    title: string;
    description: string;
    media: MediaItem;
};

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  inner_title?: string;
  sub_title: string;
  description: string;
};


const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/freezoneBannerDesk.svg",
            mobilePath: "/images/freezoneBannerMob.svg",
            alt: "Free Zone Company Formation in the UAE",
        },
        title: "Free Zone Company Formation <br/> in the UAE",
        description:
            "<p>Set up your free zone company in the UAE with a streamlined registration process and flexible <br/> business options. Ideal for businesses seeking a cost-effective setup, simplified compliance and <br/> access to purpose-built commercial zones across the Emirates. </p>",
    } satisfies HeroData,

    mainlandBusiness: {
        title: "Start a Free Zone Business in the UAE",
        description:
            "<p>Starting a free zone business in the UAE offers a fast and practical way to enter the market with clarity and control. Designed to support efficient company setup and long-term growth, free zones provide structured environments, simplified registration, and a wide choice of business activities. Whether you are launching a new venture, expanding an existing business, or establishing a regional base, free zone company formation allows you to operate within a regulated and business-friendly framework aligned with your commercial goals.</p>",
        highlightsTitle:
            "Free zone company formation is suitable for businesses such as:",
        highlights: [
            "Trading and distribution companies",
            "Service providers and consultancies",
            "E-commerce and digital businesses",
            "Regional or international operations",
        ],
        footerDescription:
            "<p>With multiple free zones across the UAE, businesses can choose the location, license type, and operational model that best supports their growth strategy.</p>",
        image: {
            path: "/images/freezone_Img.jpg",
            alt: "Mainland Business Setup UAE",
        },
    } satisfies MainlandBusinessData,


    whyBuild: {
        title: "Why Choose a Free Zone Company Setup?",
        description:
            "",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/free_icon1.svg",
                    alt: "Fast Setup",
                },
                title: "Fast Setup",
                description:
                    "<p>Set up your business fast with simple registration and faster approvals compared to traditional setups.</p>",
            },
            {
                id: 2,
                media: {
                    path: "/images/free_icon2.svg",
                    alt: "Industry Focus",
                },
                title: "Industry Focus",
                description:
                    "<p>Pick a free zone that matches your industry and business type for the best environment to grow.</p>",
            },
            {
                id: 3,
                media: {
                    path: "/images/free_icon3.svg",
                    alt: "Setup Options",
                },
                title: "Setup Options",
                description:
                    "<p>Choose how your company is structured - new business, branch, or subsidiary - with options that grow as your business expands.</p>",
            },
            {
                id: 4,
                media: {
                    path: "/images/free_icon4.svg",
                    alt: "Clear Costs",
                },
                title: "Clear Costs",
                description:
                    "<p>Know your setup costs upfront with flexible packages designed for startups, SMEs, and international businesses.</p>",
            },
            {
                id: 5,
                media: {
                    path: "/images/free_icon5.svg",
                    alt: "Visa Options",
                },
                title: "Visa Options",
                description:
                    "<p>Get visas based on your business license and office space, so you can add employees as your business expands.</p>",
            },
            {
                id: 6,
                media: {
                    path: "/images/free_icon6.svg",
                    alt: "Global Reach",
                },
                title: "Global Reach",
                description:
                    "<p>Operate across regional or international markets easily, with free zones designed for cross-border business.</p>",
            },
            {
                id: 7,
                media: {
                    path: "/images/free_icon7.svg",
                    alt: "Easy Compliance",
                },
                title: "Easy Compliance",
                description:
                    "<p>Handle licensing, visas, and paperwork through one authority, reducing administrative hassle and saving time.</p>",
            },
            {
                id: 8,
                media: {
                    path: "/images/free_icon8.svg",
                    alt: "Modern Facilities",
                },
                title: "Modern Facilities",
                description:
                    "<p>Work from modern offices, warehouses, or shared facilities built for smooth daily operations in the UAE.</p>",
            },
        ] satisfies WhyBuildItem[],
    },

    riskAssurance: {
        title: "Types of Free Zone Licenses ",
        description: "Each license supports specific business activities. KPI Group helps you choose the right type based on your goals and ensures compliance with Free Zone rules.",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/freeLice_icon1.svg",
                    alt: "Commercial License",
                },
                title: "Commercial License",
                description:
                    "For companies buying, selling, or trading goods.",
            },
            {
                id: 2,
                media: {
                    path: "/images/freeLice_icon2.svg",
                    alt: "Service License",
                },
                title: "Service License",
                description:
                    "For professional, consulting, and service-based businesses.",
            },
            {
                id: 3,
                media: {
                    path: "/images/freeLice_icon3.svg",
                    alt: "Industrial License",
                },
                title: "Industrial License",
                description:
                    "For businesses involved in production or manufacturing.",
            },
            {
                id: 4,
                media: {
                    path: "/images/freeLice_icon4.svg",
                    alt: "E-Commerce License",
                },
                title: "E-Commerce License",
                description:
                    "For digital businesses, online shops, and marketplaces.",
            },
            {
                id: 5,
                media: {
                    path: "/images/freeLice_icon5.svg",
                    alt: "Media License",
                },
                title: "Media License",
                description:
                    "For creative, media, marketing, and advertising businesses.",
            },
            {
                id: 6,
                media: {
                    path: "/images/freeLice_icon6.svg",
                    alt: "Other Licenses",
                },
                title: "Other Licenses",
                description:
                    "For niche activities or licenses offered by specific free zones.",
            },

        ] satisfies RiskAssuranceData[],
    },

    
      formationProcess: {
        title: "Steps to Get a Free Zone License",
        sub_title: "",
        description: "",
        steps: [
          {
            id: 1,
            step: "Step One",
            title: "Free Consultation with Our Experts",
            sub_title: "Free Consultation with Our Experts",
            inner_title: "Free Consultation with Our Experts",
            description:
              "<p>Share your business idea and requirements with our team. We’ll recommend the best free zone and license type based on your goals and activity.</p>",
          },
          {
            id: 2,
            step: "Step Two",
            title: "Choose Free Zone & Business Activity",
            sub_title: "Choose Free Zone & Business Activity",
            inner_title: "Choose Free Zone & Business Activity",
            description:
              "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
          },
          {
            id: 3,
            step: "Step Three",
            title: "Reserve Company Name & Initial Approval",
            sub_title: "Reserve Company Name & Initial Approval",
            inner_title: "Reserve Company Name & Initial Approval",
            description:
              "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
          },
          {
            id: 4,
            step: "Step Four",
            title: "Document Submission & Final License Application",
            sub_title: "Document Submission & Final License Application",
            inner_title: "Document Submission & Final License Application",
            description:
              "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
          },
          {
            id: 5,
            step: "Step Five",
            title: "Office or Flexi‑Desk Setup",
            sub_title: "Office or Flexi‑Desk Setup",
            inner_title: "Office or Flexi‑Desk Setup",
            description:
              "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
          },
          {
            id: 6,
            step: "Step Six",
            title: "UAE Residency & Visas",
            sub_title: "UAE Residency & Visas",
            inner_title: "UAE Residency & Visas",
            description:
              "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
          },
          {
            id: 7,
            step: "Step Seven",
            title: "Open Your Business Bank Account",
            sub_title: "Open Your Business Bank Account",
            inner_title: "Open Your Business Bank Account",
            description:
              "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
          },
          {
            id: 8,
            step: "Step Eight",
            title: "Start Operations",
            sub_title: "Start Operations",
            inner_title: "Start Operations",
            description:
              "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
          },
        ] satisfies ProcessStep[],
      },


}
export const metadata: Metadata = {
    title: "Free Zone Company Setup in UAE | Company Formation | KPI",
    description:
        "Set up a free zone company in the UAE with expert support. Compare free zones, license types, setup costs, and visa options. Fast process. Clear pricing.",
};


export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} variant="erm" />
            <MainlandBusiness data={localData.mainlandBusiness} />
            <CorporateServicesUaeWhyBuild variant="freeZone" data={localData.whyBuild} />
            <RiskAssuranceServices data={localData.riskAssurance} />
            <CorporateServicesUaeFormationProcess variant="mainland" data={localData.formationProcess} />
        </>
    )
}
