"use client";

import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import { MediaItem } from "../page";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import RiskOrganisation from "@/components/features/risk-overview/RiskOrganisation";
import { RiskOrganisationData } from "../risk-overview/page";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import BlogRelated from "@/components/features/blogs/BlogRelated";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";

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

export type BankingPartner = {
  id: number;
  media: {
    path: string;
    alt: string;
  };
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

export type InsightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  media: MediaItem;
  slug: string;
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

const localData = {
  hero: {
    id: 1,
    media: {
      path: "/images/ifza-bg.png",
      alt: "Company Formation in IFZA, UAE",
    },
    title: "Company Formation in IFZA, UAE ",
    description:
      "<p>Set up your business in IFZA (International Free Zone Authority), Dubai - one of the UAE’s most founder-friendly free zones. Fast setup timelines, diverse licence options, and competitive pricing for entrepreneurs, startups, and international companies.</p>",
  } satisfies HeroData,

  mainlandBusiness: {
    title: "Start a Business in IFZA Dubai",
    description:
      "<p>The International Free Zone Authority (IFZA), based in Dubai Silicon Oasis (DSO), is a rapidly growing free zone that supports businesses with simple and fast company formation. Fully licensed by the UAE government, IFZA provides access to world-class infrastructure and new business opportunities. The free zone offers a flexible platform to scale, connect internationally, and thrive in one of the world’s most dynamic business hubs.</p>",
    highlightsTitle: "IFZA Free Zone is Well Suited For:",
    highlights: [
      "Startups and first-time founders entering the UAE",
      "International companies expanding into Dubai",
      "Consultants, freelancers, and service providers",
      "Trading businesses with regional or global operations",
      "Holding companies and group structures",
    ],
    footerDescription:
      "",
    image: {
      path: "/images/ifza.jpg",
      alt: "Business in IFZA",
    },
  } satisfies MainlandBusinessData,

  whyBuild: {
    title: "Why Businesses Choose IFZA Free Zone",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/ifza-busness-1.svg",
          alt: "Cost Effective",
        },
        title: "Cost Effective",
        description:
          "<p>A central Dubai address with excellent connectivity to DIFC, Downtown Dubai, and Sheikh Zayed Road.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/ifza-busness-2.svg",
          alt: "Global Reputation",
        },
        title: "Global Reputation",
        description:
          "<p>Part of Dubai World Tra de Centre, offering strong international credibility and brand recognition.</p>",
      },
      
      {
        id: 3,
        media: {
          path: "/images/ifza-busness-4.svg",
          alt: "Flexible Licences",
        },
        title: "Flexible Licences",
        description:
          "<p>Well suited for professional, consulting, and client-facing businesses operating in Dubai.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/ifza-busness-4.svg",
          alt: "Full Ownership",
        },
        title: "Full Ownership",
        description:
          "<p>Well suited for professional, consulting, and client-facing businesses operating in Dubai.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Business Licenses in IFZA Dubai",
    description:
      "<p>IFZA offers a broad range of licences to accommodate different business models. Licences can often include multiple activities, depending on approval.</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/busnes-license-1.svg",
          alt: "Commercial License",
        },
        title: "Commercial License",
        description:
          "For companies involved in buying, selling, importing, exporting, and distributing specific goods.",
      },
      {
        id: 2,
        media: {
          path: "/images/busnes-license-2.svg",
          alt: "General Trading License",
        },
        title: "General Trading License",
        description:
          "Allows broader trading across multiple products and commodities under one licence.",
      },
      {
        id: 3,
        media: {
          path: "/images/busnes-license-3.svg",
          alt: "Professional License",
        },
        title: "Professional License",
        description:
          "For service-based businesses such as consulting, advisory, IT services, marketing, education, and management services.",
      },
      {
        id: 4,
        media: {
          path: "/images/busnes-license-4.svg",
          alt: "E-Commerce License",
        },
        title: "E-Commerce License",
        description: "For digital businesses, online shops and marketplaces. ",
      },
      {
        id: 5,
        media: {
          path: "/images/busnes-license-8.svg",
          alt: "Industrial License",
        },
        title: "Industrial License",
        description:
          "For online businesses, digital platforms, and internet-based trading activities.",
      },
      
    ] satisfies ServiceItem[],
  },
  meydanFreeZone: {
    title: "Documents Required for IFZA Business Setup",
    main_description: "We assist you with all documents and approvals, ensuring a smooth setup and full compliance with IFZA regulations.",
    free_zone_list: [
      {
        id: 1,
        title: "Individual Shareholder(s)",
        zone_list: [
          "Passport copy",
          "Passport-sized photograph",
          "Emirates ID (if UAE resident)",
          "UAE visa copy (if applicable)",
        ],
      },
      {
        id: 2,
        title: "Corporate Shareholder(s",
        zone_list: [
          "Notarized board resolution",
          "Notarized memorandum and articles of association",
          "Plan business operations outside free zone permissions",
          "Notarized certificate of incorporation",
        ],
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "Additional documents may be required depending on the business activity, number of shareholders, or company structure.",
      },
    ],
  } satisfies MeydanFreeZoneData,
  banking: {
    title: "Banking Support for IFZA Companies  ",
    description:
      "<p>We assist clients with corporate bank account opening through trusted UAE and international banking partners, helping you choose the right bank based on your business activity and structure.</p>",
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
  workWithKpi: {
    title: "Why Work with KPI ",
    description:
      "<p>KPI is more than a company formation provider - we’re your long-term growth partner in the UAE. We help founders navigate IFZA setup decisions with clarity, speed, and compliance.</p>",
    items: [
      {
        id: 1,
        text: "Strategic IFZA setup and licence structuring ",
      },
      {
        id: 2,
        text: "Regulatory and compliance guidance ",
      },
      {
        id: 3,
        text: "Corporate governance and structuring support",
      },
      { id: 4, text: "Ongoing advisory as your UAE operations scale" },
    ],

    media: {
      path: "/images/work-kpi.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies RiskOrganisationData,
  contactUs: {
    title: "Not Sure if IFZA Free Zone is Right for your Business",
    description:
      "<p>Our team will help you compare free zones, understand licence options, and choose a setup structure that aligns with your commercial goals.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-ifza.png",
      overlayMobile: "/images/overlay-ifza-mobile.png",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "Is IFZA Free Zone suitable for startups?",
        description: `
                  <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                  `,
      },
      {
        id: 2,
        title: "Is IFZA Free Zone suitable for startups?",
        description: `
                  <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                  `,
      },
      {
        id: 3,
        title: "Is IFZA Free Zone suitable for startups?",
        description: `
                  <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                  `,
      },
      {
        id: 4,
        title: "How long does it take to set up a company in IFZA Free Zone?",
        description: `
                  <p>Company formation is typically fast and depends on document readiness and activity approvals.</p>
                  `,
      },
    ] satisfies FaqItem[],
  },
  related_blog: {
    title: " Related Blogs ",
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
    ] satisfies InsightItem[],
  },
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="freezone"
        data={localData.whyBuild}
      />
      <CorporateServicesUaeServices variant="saifz" data={localData.services} />
      <MeydanFreeZone  data={localData.meydanFreeZone} />
      <RiskOrganisation data={localData.workWithKpi} />
      <CorporateServicesUaeBanking variant="freezone" data={localData.banking} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <BlogRelated data={localData.related_blog} />
    </>
  );
}
