import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import { blogData } from "@/data/blogData";

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

export type InsightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  media: MediaItem;
  slug: string;
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
    desktopPath: string;
    mobilePath: string;
    alt: string;
  };
  additionalContent?: string[];
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

export type FaqItem = {
  id: number;
  title: string;
  description: string;
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
  description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list: MeydanStructureItem[];
};

export type MeydanKeyBenefitsData = {
  title: string;
  description?: string;
  slides: {
    id: number;
    title: string;
    items: (string | { title?: string; description?: string })[];
    media: {
      path: string;
      alt: string;
    };
  }[];
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/meydan-inner-hero-desktop.svg",
      mobilePath: "/images/meydan-inner-hero-mobile.svg",
      alt: "Meydan Free Zone Company Formation",
    },
    title: "Meydan Free Zone Company Formation",
    description:
      "<p>Set up your business in Meydan Free Zone, Dubai, with 100% foreign ownership and fast digital licensing. A strategic location for startups, SMEs, and international businesses.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start a Business in Meydan Free Zone, UAE",
    description:
      "<p>The Meydan Free Zone (MFZ) is a dynamic business hub in Dubai, designed to help founders start, grow, and scale their companies. With a strategic location, a vibrant business community, and easy access to regional and international markets, Meydan gives you the support and connections to expand your business with confidence.</p>",
    highlightsTitle: "Common uses include:",
    highlights: [
      "Trading and ecommerce",
      "Consultancy and professional services",
      "Startups and tech ventures",
      "Creative and digital businesses",
      "SMEs scaling regionally",
    ],
    footerDescription:
      "Set up entirely online with no physical presence required. Our team handles your registration, documentation, and ongoing support so you can focus on growing your business.",
    image: {
      path: "/images/meydan-business.jpg",
      alt: "Meydan",
    },
  } satisfies MainlandBusinessData,

  meydanFreeZone: {
    title: "Is Meydan the Free Zone Right For You?",
    free_zone_list: [
      {
        id: 1,
        title: "Meydan Free Zone is suitable if you:",
        zone_list: [
          "Want 100% foreign ownership",
          "Prefer a fast, digital setup process",
          "Need flexible visa allocation (0–6 visas)",
          "Want a range of business activity options",
          "Wish to expand regional or global operations",
        ],
      },
      {
        id: 2,
        title: "Meydan Free Zone may not be suitable if you:",
        zone_list: [
          "Need direct UAE mainland market access (no branch conversion)",
          "Require heavy industrial facilities or large warehousing",
          "Plan business operations outside free zone permissions",
        ],
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "If your business requires Mainland or other Free Zone options, our expert team will guide you to the best setup for your goals.",
      },
    ],
  } satisfies MeydanFreeZoneData,
  businessLocation: {
    title: "Explore Other Business Setup Options",
    description:
      "Explore additional UAE company structures if Meydan Free Zone isn’t the perfect fit for your business plan.",
    items: [
      {
        id: 1,
        title: "Mainland",
        type: "image",
        image: "/images/meydan-business-1.jpg",
        description:
          "Operate anywhere in the UAE with access to the local market and government contracts.",
        link: "#",
      },
      {
        id: 2,
        title: "Other Freezones",
        type: "image",
        image: "/images/meydan-business-2.jpg",
        description:
          "The UAE has many free zones, each offering tax benefits, flexibility, and industry-specific support. Explore your options.",
        link: "#",
      },
      {
        id: 3,
        title: "ADGM",
        type: "image",
        image: "/images/meydan-business-3.jpg",
        description:
          "A globally recognized financial center with a strong common law framework, ideal for financial services and investment firms.",
        link: "#",
      },
      {
        id: 4,
        title: "DIFC",
        type: "image",
        image: "/images/meydan-business-4.jpg",
        description:
          "A premium jurisdiction for finance and professional services with an independent legal and regulatory environment.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  banking: {
    title: "Banking Support for Your UAE Business",
    description:
      "<p>We support clients with bank account opening through trusted UAE and international banking partners.</p>",
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
          path: "/images/banking-partner-5.svg",
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
  cta: {
    title: "Ready to Start Your Business in the UAE?",
    description:
      "<p>Our team will help you choose the right setup, jurisdiction, and structure based on your goals, risk profile, and budget. Talk to our experts today!</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/meydan-cta-overlay.svg",
      overlayMobile: "/images/meydan-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a Meydan Free Zone company?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title: "Can I set up remotely from outside the UAE?",
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
        title: "How long does setup take?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title: "How much does a Meydan Free Zone license cost?",
        description: `
                    <p>Packages start from approximately AED 12,500; costs vary by visa package and services required.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI is more than a company formation agent. We’re your partner in business growth, providing end-to-end support across audit, risk, and corporate services. We help businesses with:</p>",
    items: [
      {
        id: 1,
        text: "Strategic business structuring",
      },
      {
        id: 2,
        text: "Regulatory and compliance guidance",
      },
      {
        id: 3,
        text: "Corporate governance support",
      },
      {
        id: 4,
        text: "Risk assessment and advisory",
      },
      {
        id: 5,
        text: "Ongoing post‑setup service",
      },
    ],
    ftr_description:
      "<p>Our approach ensures that your Meydan Free Zone company is structured for growth, compliant, and aligned with your business strategy.</p>",
    media: {
      path: "/images/meydan-document.jpg",
      alt: "Meydan Document",
    },
  } satisfies DocumentRequiredData,
  insights: {
    title: "Related Blogs",
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
  keyBenefits: {
    title: "Key Benefits of Business Setup in Meydan",
    slides: [
      {
        id: 1,
        title: "Business-Friendly Structure",
        items: [
          "100% foreign ownership",
          "No local sponsor required",
          "No minimum share capital requirement",
          "Over 2,500+ business activities available",
          "Combine multiple activity groups under one license",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "Cost-Effective Setup",
        items: [
          "One of the most competitive license costs in Dubai",
          "No paid-up share capital required",
          "Reasonable visa allocation costs",
          "Zero personal income tax",
          "Zero corporate tax for qualifying companies",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 3,
        title: "Flexible Visa Options",
        items: [
          "Choose 0 to 6 visa allocations",
          "Visas for owners, employees, and dependents",
          "Efficient visa processing through digital portal",
          "Option to upgrade visa package as you grow",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 4,
        title: "Tax & Banking Advantages",
        items: [
          "100% repatriation of capital and profits",
          "No customs duties on import/export",
          "Assistance with corporate bank account opening",
          "Access to global trade networks",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <MeydanFreeZone data={localData.meydanFreeZone} variant="default"/>
      <MeydanKeyBenefits data={localData.keyBenefits} />
      <BusinessLocation data={localData.businessLocation} />
      <DocumentRequired data={localData.document_required_data} />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="saifz" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} variant="saifz" />
    </>
  );
}
