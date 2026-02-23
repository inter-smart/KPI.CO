import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import DocumentRequired from "@/components/features/services/DocumentRequired";
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

export type ServiceItem = {
    id: number;
    media: MediaItem;
    title: string;
    description: string;
};

export type ProcessStep = {
    id: number;
    title: string;
    inner_title?: string;
    description: string;
};



export type WhyChooseItem = {
    id: number;
    title: string;
    description: string;
};

export type CounterItem = {
    id: number;
    value: number;
    symbol?: string;
    label: string;
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
};

export type MediaItem = {
    path: string;
    alt: string;
};

export type BusinessLocationData = {
    title: string;
    description: string;
    items: LocationItem[];
};

export type MeydanFreeZoneItem = {
    id: number;
    title: string;
    zone_list: string[];
};

export type MeydanStructureItem = {
    id: number;
    title: string;
    description: string;
};

export type MeydanFreeZoneData = {
    title: string;
    main_description?: string;
    description?: string;
    free_zone_list: MeydanFreeZoneItem[];
    structure_list: MeydanStructureItem[];
};
export type LocationItem = {
    id: number;
    title: string;
    type: "image" | "content";
    image?: string;
    description?: string;
    link?: string;
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

export type FaqItem = {
  id: number;
  title: string;
  description: string;
};

const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/company-formation-rakez-free-zone-banner.svg",
            mobilePath: "/images/company-formation-rakez-free-zone-banner-mob.svg",
            alt: "Company Formation in Ras Al Khaimah Economic Zone",
        },
        title: "Company Formation in Ras Al Khaimah Economic Zone",
        description:
            "<p>Set up your business in Ras Al Khaimah Economic Zone (RAKEZ) — a cost-efficient free zone offering flexible licences, practical facilities, and a setup model built for real businesses.</p>",
    } satisfies HeroData,


    mainlandBusiness: {
        title: "Start a Business in Ras Al Khaimah Economic Zone ",
        description:
            "<p>Ras Al Khaimah Economic Zone (RAKEZ) is a dynamic business hub in the northern emirate of Ras Al Khaimah, UAE. It provides a strategic base for companies to access regional markets and streamline operations. With well-developed infrastructure and a supportive regulatory environment, RAKEZ enables entrepreneurs and business owners to turn ideas into long-term success.</p>",
        highlightsTitle: "Why Founders Choose RAKEZ:",
        highlights: [
            "Access to hubs supporting trade, manufacturing, and services",
            "Scalable facilities including industrial zones, warehouses, and offices",
            "Supportive environment to expand regionally and internationally",
            "Networking opportunities with investors, peers, and business partners"
        ],
        footerDescription: "RAKEZ empowers business owners to focus on growth, offering a strong foundation for sustainable success in the UAE and across the Middle East.",
        image: {
            path: "/images/RAKEZ-img.jpg",
            alt: "RAKEZ-img",
        },
    } satisfies MainlandBusinessData,



    whyBuild: {
        title: "Key Benefits of RAKEZ Free Zone",
        description:
            "",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/RAKEZ-icon1.svg",
                    alt: "Cost Efficiency",
                },
                title: "Cost Efficiency",
                description:
                    "<p>Competitive licence packages and setup fees to lower initial entry costs.</p>",
            },
            {
                id: 2,
                media: {
                    path: "/images/RAKEZ-icon2.svg",
                    alt: "Full Ownership",
                },
                title: "Full Ownership",
                description:
                    "<p>Retain 100% equity with complete repatriation of capital and profits.</p>",
            },
            {
                id: 3,
                media: {
                    path: "/images/RAKEZ-icon3.svg",
                    alt: "Visa OptionTax Incentives",
                },
                title: "Tax Incentives",
                description:
                    "<p>Zero personal income tax and corporate tax for qualifying businesses. </p>",
            },
            {
                id: 4,
                media: {
                    path: "/images/RAKEZ-icon4.svg",
                    alt: "Simplified Setup",
                },
                title: "Simplified Setup",
                description:
                    "<p>Streamlined licensing and administrative support for faster company formation.</p>",
            },
            {
                id: 5,
                media: {
                    path: "/images/RAKEZ-icon5.svg",
                    alt: "Strategic Location",
                },
                title: "Strategic Location",
                description:
                    "<p>Access to UAE ports, airports, and regional markets for global reach.</p>",
            },
            {
                id: 6,
                media: {
                    path: "/images/RAKEZ-icon6.svg",
                    alt: "Flexible Facilities",
                },
                title: "Flexible Facilities",
                description:
                    "<p>Offices, warehouses, industrial plots, and flexi-desks for scalable operations.</p>",
            },
            {
                id: 7,
                media: {
                    path: "/images/RAKEZ-icon7.svg",
                    alt: "Visa Solutions",
                },
                title: "Visa Solutions",
                description:
                    "<p>Flexible employee visa packages for startups, SMEs, and expanding teams.</p>",
            },
            {
                id: 8,
                media: {
                    path: "/images/RAKEZ-icon8.svg",
                    alt: "Business Ecosystem",
                },
                title: "Business Ecosystem",
                description:
                    "<p>Network of companies, investors, and regional partners to support growth.</p>",
            },
        ] satisfies WhyBuildItem[],
    },

    services: {
        title: "Types of Licenses in RAKEZ",
        description:
            "RAKEZ offers a wide range of licences to suit different business models. We help you select the right licence and activity combination to match your business goals.",
        items: [
            {
                id: 1,
                media: {
                    path: "/images/license_icon1.svg",
                    alt: "Industrial License",
                },
                title: "Commercial License",
                description:
                    "For companies engaged in trading, distribution, and import/export of goods across UAE and regional markets.",
            },
            {
                id: 2,
                media: {
                    path: "/images/license_icon2.svg",
                    alt: "General Trading License",
                },
                title: "General Trading License",
                description:
                    "General Trading License",
            },
            {
                id: 3,
                media: {
                    path: "/images/license_icon3.svg",
                    alt: "Industrial License",
                },
                title: "Industrial License",
                description:
                    "Grants permission for manufacturing, processing, assembling, and packaging activities within RAKEZ zones.",
            },
            {
                id: 4,
                media: {
                    path: "/images/license_icon4.svg",
                    alt: "Service License",
                },
                title: "Service License",
                description:
                    "For consultancy, professional services, and specialized operational businesses in the UAE.",
            },
            {
                id: 5,
                media: {
                    path: "/images/license_icon5.svg",
                    alt: "Professional License",
                },
                title: "Professional License",
                description:
                    "Designed for individual entrepreneurs providing expert services in their field.",
            },
            {
                id: 6,
                media: {
                    path: "/images/license_icon6.svg",
                    alt: "Educational License",
                },
                title: "Educational License",
                description:
                    "Permits teachers, trainers, and educational institutions to operate on a consultancy or institutional basis.",
            },
            {
                id: 7,
                media: {
                    path: "/images/license_icon7.svg",
                    alt: "E-commerce License",
                },
                title: "E-commerce License",
                description:
                    "Allows companies to sell products and services through online platforms across local and international markets",
            },
            {
                id: 8,
                media: {
                    path: "/images/license_icon8.svg",
                    alt: "Media License",
                },
                title: "Media License",
                description:
                    "For companies involved in content production, marketing, media, and related creative industries.",
            },
        ] satisfies ServiceItem[],
    },

    businessLocation: {
        title: "Types of Companies in RAKEZ",
        description:
            "RAKEZ supports multiple company structures to fit different business needs. We help you choose the right type and structure to align with your growth plans.",
        items: [
            {
                id: 1,
                title: "FZE",
                type: "image",
                image: "/images/dsoa_location1.jpg",
                description:
                    "Dubai is a global business hub with a vibrant commercial ecosystem, advanced infrastructure, and access to international markets. It's ideal for companies that want a high-profile presence and exposure to global clients.",
                link: "#",
            },
            {
                id: 2,
                title: "Branch of Foreign Company",
                type: "image",
                image: "/images/dsoa_location4.jpg",
                description:
                    "Abu Dhabi combines strong government support with strategic industry clusters. Its focus on energy, technology, and innovation provides a solid base for businesses working on large-scale or specialized projects.",
                link: "#",
            },
            {
                id: 3,
                title: "Branch of a UAE Company",
                type: "image",
                image: "/images/dsoa_location3.jpg",
                description:
                    "Ajman provides an affordable setup experience with fast approvals and a central location near key ports. Ideal for smaller companies and service providers looking for simplicity and convenience.",
                link: "#",
            },
        ],
    } satisfies BusinessLocationData,

    meydanFreeZone: {
        title: "Documents Required for RAKEZ Company Setup",
        main_description:
            "Our team guides you through every document and approval, making the business setup process simple and ensuring your company is fully compliant with RAKEZ regulations.",
        free_zone_list: [
            {
                id: 1,
                title: "Individual Shareholder(s)",
                zone_list: [
                    "Quick incorporation process (typically a few days)",
                    "No minimum office or UAE residency requirements",
                    "Flexible shareholding and directorship options",
                    "Suitable for holding, investment, and intellectual property structures",
                ],
            },
            {
                id: 2,
                title: "Individual Shareholder(s)",
                zone_list: [
                    "Quick incorporation process (typically a few days)",
                    "No minimum office or UAE residency requirements",
                    "Flexible shareholding and directorship options",
                    "Suitable for holding, investment, and intellectual property structures",
                ],
            },
        ],
        structure_list: [
            {
                id: 1,
                title: "Choosing the Right Structure",
                description:
                    "Additional documents may be required depending on the business activity, company type, or number of shareholders, as per RAKEZ regulations.",
            },
        ],
    } satisfies MeydanFreeZoneData,

      document_required_data: {
        title: "Why Work with KPI ",
        description:
          "<p>KPI Group is more than a company formation agent. We’re your partner in business growth, providing end-to-end support across corporate, regulatory, and business advisory services. We help RAKEZ businesses with </p>",
        items: [
          { id: 1, text: "Strategic company structuring for long-term growth" },
          { id: 2, text: "Regulatory and compliance guidance tailored to RAKEZ requirements" },
          { id: 3, text: "Corporate governance support to streamline operations" },
          { id: 4, text: "Risk assessment and advisory for secure expansion Ongoing post‑setup services including licences, visas, and approvals" },
        
        ],
    
        media: {
          path: "/images/whyrakez.jpg",
          alt: "Required documents",
        },
        ftr_description:
          "<p>Our approach ensures that your RAKEZ company is structured for growth, fully compliant, and aligned with your business strategy, giving you the freedom to focus on building and scaling your business.</p>",
      } satisfies DocumentRequiredData,

    cta: {
        title: "Launch Your RAKEZ Business Today",
        description:
            "<p>Get expert guidance to select the right company type, licence, and <br/> setup for your goals. Start your UAE journey with confidence and speed - <br/> our team handles the process from start to finish.</p>",
        button: {
            label: "Get in Touch",
            link: "/contact",
        },
        images: {
            overlay: "/images/cta-invoing.svg",
            overlayMobile: "/images/spv-banner-mobile.jpg",
        },
    } satisfies CtaData,

     corporate_faq_data: {
        title: "FAQs",
        faq_list: [
          {
            id: 1,
            title: "What types of companies can I register in RAKEZ?",
            description: `
                            <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                            `,
          },
          {
            id: 2,
            title: "What types of companies can I register in RAKEZ?",
            description: `
                            <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                            `,
          },
          {
            id: 3,
            title: "Can I have 100% foreign ownership?",
            description: `
                            <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                            `,
          },
          {
            id: 4,
            title: "How long does it take to set up a business in RAKEZ?",
            description: `
                            <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                            `,
          },
          {
            id: 5,
            title: "Are there minimum capital requirements?",
            description: `
                            <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                            `,
          },
          
        ] satisfies FaqItem[],
      },
    

    insights: {
        title: "Our Insights",
        items: blogData.slice(0, 7).map((blog) => ({
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
    title: "Start Your Business in UAE | RAK Economic Zone Business Setup",
    description:
        "Set up your business in Ras Al Khaimah Economic Zone (RAKEZ), UAE. Cost-effective licenses, fast approvals & full company setup support. Get in touch! ",
};

export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <MainlandBusiness data={localData.mainlandBusiness} variant="rakez" />

            <CorporateServicesUaeWhyBuild
                variant="rakez"
                data={localData.whyBuild}
            />

            <CorporateServicesUaeServices
                data={localData?.services}
                variant="rakez"
            />
            <BusinessLocation data={localData.businessLocation} />
            <MeydanFreeZone data={localData.meydanFreeZone} variant="ifza" />
            <DocumentRequired data={localData.document_required_data} variant="dmcc" />
            <CorporateServicesUaeCta data={localData.cta} variant="rakez" />
             <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
            <HomeOurInsights data={localData.insights} />
        </>
    );
}
