import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";

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

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
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
    desktopPath: string;
    mobilePath: string;
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

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/dafza-inner-hero-desktop.svg",
      mobilePath: "/images/dafza-inner-hero-mobile.svg",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "Company Formation in Dubai Airport Free Zone, UAE",
    description:
      "<p>Establish your business in Dubai Airport Free Zone Authority (DAFZA) - strategically located next to Dubai International Airport. Benefit from fast registration, flexible licenses, and modern office and warehouse facilities designed for international operations.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Business Setup in Dubai Airport Free Zone",
    description:
      "<p>DAFZA offers a strategic base in one of the UAE’s most dynamic business hubs. Companies can scale efficiently, access regional and international markets, and benefit from an ecosystem designed to support long-term growth. The free zone provides a platform for businesses to expand operations, attract partners, and reach new opportunities with confidence.</p>",
    highlightsTitle: "DAFZA Free Zone Is Well Suited For:",
    highlights: [
      "Import-export and general trading companies",
      "Logistics and supply chain operators",
      "Aviation and airport-related services",
      "Technology and professional services",
      "Regional offices for multinational companies",
    ],
    footerDescription: "",
    image: {
      path: "/images/dafza-business.jpg",
      alt: "Hamriyah",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Key Advantages of Dubai Airport Free Zone",
    items: [
      {
        id: 1,
        media: {
          path: "/images/dafza-key-1.svg",
          alt: "Full Ownership",
        },
        title: "Full Ownership",
        description:
          "<p>Retain 100% equity with complete repatriation of capital and profits.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/dafza-key-2.svg",
          alt: "Tax Incentives",
        },
        title: "Tax Incentives",
        description:
          "<p>Zero personal income tax and corporate tax for qualifying businesses</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/dafza-key-3.svg",
          alt: "Strategic Location",
        },
        title: "Strategic Location",
        description:
          "<p>Direct access to Dubai International Airport supporting global connections</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/dafza-key-4.svg",
          alt: "Premium Infrastructure",
        },
        title: "Premium Infrastructure",
        description:
          "<p>Modern offices, warehouses, and facilities for international operations.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/dafza-key-5.svg",
          alt: "Efficient Operations",
        },
        title: "Efficient Operations",
        description:
          "<p>Single-window services streamline licensing, customs, and administration.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/dafza-key-6.svg",
          alt: "Business Ecosystem",
        },
        title: "Business Ecosystem",
        description:
          "<p>Access to a network of companies and opportunities for regional growth.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Business Licenses in DAFZA",
    description:
      "DAFZA provides a broad range of licences to match different business activities. We help you select the licence that best fits your operational and expansion goals.",
    items: [
      {
        id: 1,
        media: {
          path: "/images/dafz-servive-1.svg",
          alt: "Trade License",
        },
        title: "Trade License",
        description:
          "Import, export, storage, and trading of goods locally and internationally.",
      },
      {
        id: 2,
        media: {
          path: "/images/dafz-servive-2.svg",
          alt: "Service License",
        },
        title: "Service License",
        description: "Professional, technical, and consultancy services.",
      },
      {
        id: 3,
        media: {
          path: "/images/dafz-servive-2.svg",
          alt: "Industrial License",
        },
        title: "Industrial License",
        description:
          "Light manufacturing, assembly, and processing activities.",
      },
      {
        id: 4,
        media: {
          path: "/images/dafz-servive-2.svg",
          alt: "General Trading License",
        },
        title: "General Trading License",
        description: "Trade multiple product categories under one license.",
      },
    ] satisfies ServiceItem[],
  },
  businessLocation: {
    title: "Types of Companies in DAFZA",
    description:
      "DAFZA offers flexible company structures to suit a variety of business models. We guide you in choosing the right type to align with your UAE growth strategy.",
    items: [
      {
        id: 1,
        title: "FZE",
        type: "image",
        image: "/images/saifz-business-1.jpg",
        description:
          "A Free Zone Establishment is owned by a single shareholder, either an individual or a corporate entity",
        link: "#",
      },
      {
        id: 2,
        title: "FZCO",
        type: "image",
        image: "/images/saifz-business-2.jpg",
        description:
          "A Free Zone Company requires a minimum of two shareholders, who can be individuals or corporate entities.",
        link: "#",
      },
      {
        id: 3,
        title: "Branch of a Foreign Company",
        type: "image",
        image: "/images/saifz-business-4.jpg",
        description:
          "Existing UAE or foreign companies can open a branch in DAFZA, with activities aligned to the parent company.",
        link: "#",
      },
      {
        id: 4,
        title: "Branch of a UAE Company",
        type: "image",
        image: "/images/saifz-business-3.jpg",
        description: "A UAE company can register a branch within SAIF Zone.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  banking: {
    title: "Banking Support for DAFZA Companies",
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
  cta: {
    title: "Not Sure if DAFZA is Right for your Business?",
    description:
      "<p>Compare free zones, understand licensing options, and choose a structure that aligns with your operational goals.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/dfza-cta-overlay.svg",
      overlayMobile: "/images/dfza-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What types of businesses can be set up in DAFZA?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title: "Do I need a local sponsor to start a DAFZA company?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title: "How long does it take to set up a company in DAFZA?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "Is a physical office required in DAFZA?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title: "Can a DAFZA company sponsor UAE residence visas?",
        description: `
                    <p>Yes. Depending on the office or facility size and license type, DAFZA companies can sponsor visas for owners, employees, and dependents.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI provides strategic support for building and scaling your DAFZA business. We ensure your setup is smooth, compliant, and ready for growth.</p>",
    items: [
      {
        id: 1,
        text: "Licensing strategy and setup guidance",
      },
      {
        id: 2,
        text: "Compliance and authority liaison support",
      },
      {
        id: 3,
        text: "Corporate governance and company structuring",
      },
      {
        id: 4,
        text: "Banking, visa, and operational assistance",
      },
    ],
    media: {
      path: "/images/dfza-document.jpg",
      alt: "Required documents",
    },
  } satisfies DocumentRequiredData,
  insights: {
    title: "Related Blogs",
    items: [
      {
        id: 1,
        media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "<p>What to look for when choosing an audit firm in 2025 – from expertise and independence to technology and trust that support better business decisions.</p>",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-insights-2.jpg",
          alt: "Top Audit Firms UAE",
        },
        title: "Top 10 Audit firms in UAE",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-insights-3.jpg",
          alt: "Audit Firm Selection",
        },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut a days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 4,
        media: { path: "/images/home-insights-1.jpg", alt: "VAT Guide UAE" },
        title:
          "VAT in the United Arab Emirates: A Complete Guide for Companies in 2025",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
    ] satisfies InsightItem[],
  },
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild variant="dafz" data={localData.whyBuild} />
      <CorporateServicesUaeServices data={localData.services} variant="saifz" />
      <BusinessLocation data={localData.businessLocation} />
      <DocumentRequired
        data={localData.document_required_data}
        variant="dfza"
      />
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
