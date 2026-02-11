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

const localData = {
  hero: {
    id: 1,
    media: {
      path: "/images/risk-overview-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "Company Formation in DWTC, UAE ",
    description:
      "<p>Establish your business in Dubai World Trade Centre, a central and globally recognised business district. DWTC offers flexible office solutions and a streamlined setup ideal for founders, startups, and growing businesses.</p>",
  } satisfies HeroData,

  mainlandBusiness: {
    title: "Start a Business in Dubai World Trade Centre",
    description:
      "<p>Dubai World Trade Centre (DWTC) Free Zone is a government-backed business district located in the heart of Dubai. Known for its strategic location and strong commercial reputation, DWTC is a preferred choice for companies seeking a prestigious address with direct access to key business hubs such as DIFC, Downtown Dubai, and Sheikh Zayed Road.</p>",
    highlightsTitle: "DWTC Free Zone is Well Suited For:",
    highlights: [
      "Consulting and advisory firms",
      "Professional and service-based businesses",
      "Trading companies with light operational needs",
      "Holding and management structures",
      "Companies seeking a prestigious Dubai business address",
    ],
    footerDescription:
      "<p>DWTC Free Zone is particularly attractive for founders who value credibility, accessibility, and a central business presence without the operational complexity of larger free zones</p>",
    image: {
      path: "/images/dwtc-img.jpg",
      alt: "Business in Dubai World",
    },
  } satisfies MainlandBusinessData,

  whyBuild: {
    title: "Why Businesses Choose DWTC Free Zone?",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/busness-freezone-1.svg",
          alt: "Prime Location",
        },
        title: "Prime Location",
        description:
          "<p>A central Dubai address with excellent connectivity to DIFC, Downtown Dubai, and Sheikh Zayed Road.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/busness-freezone-2.svg",
          alt: "Global Reputation",
        },
        title: "Global Reputation",
        description:
          "<p>Part of Dubai World Tra de Centre, offering strong international credibility and brand recognition.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/busness-freezone-3.svg",
          alt: "Client Focused",
        },
        title: "Client Focused",
        description:
          "<p>Access to flexi desks, serviced offices, and scalable workspace solutions to match different business needs.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/busness-freezone-4.svg",
          alt: "Flexible Offices",
        },
        title: "Flexible Offices",
        description:
          "<p>Well suited for professional, consulting, and client-facing businesses operating in Dubai.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Types of Business Licenses in DWTC",
    description:
      "<p>DWTC Free Zone offers a diverse range of licences to support a wide variety of business activities. You can choose the most suitable licence based on your planned activity and business model.</p>",
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
          "For service-oriented activities including consulting, advisory, IT services, and other specialised services",
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
          path: "/images/busnes-license-5.svg",
          alt: "Event Management License",
        },
        title: "Event Management License",
        description:
          "For companies organising and managing events, exhibitions, conferences, and related services. ",
      },
      {
        id: 6,
        media: {
          path: "/images/busnes-license-6.svg",
          alt: "Family Office License",
        },
        title: "Family Office Licenses",
        description:
          "For wealth management, investment planning, estate management, and related advisory services.",
      },
      {
        id: 7,
        media: {
          path: "/images/busnes-license-7.svg",
          alt: "Virtual Assets License",
        },
        title: "Virtual Assets License",
        description:
          "For companies operating in digital assets, blockchain, cryptocurrencies, and related services.",
      },
    ] satisfies ServiceItem[],
  },
  riskOrganisation: {
    title: "Documents Required for DWTC Business License",
    description:
      "<p>To set up a company in DWTC Free Zone, founders typically need: </p>",
    items: [
      {
        id: 1,
        text: "Passport copies of shareholders ",
      },
      {
        id: 2,
        text: "UAE entry stamp or residence visa copy (if applicable) ",
      },
      {
        id: 3,
        text: "Trade name and business activity selection",
      },
      { id: 4, text: "Office or workspace confirmation" },
    ],

    media: {
      path: "/images/document-required.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description:
      "<p>Additional documents may be required depending on the business structure.</p>",
  } satisfies RiskOrganisationData,

  banking: {
    title: "Banking Support for DWTC Companies",
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
      "<p>KPI is more than a formation provider - we’re your growth partner. We support your DWTC Free Zone business from setup through ongoing operations.</p>",
    items: [
      {
        id: 1,
        text: "Strategic DWTC setup advice ",
      },
      {
        id: 2,
        text: "Compliance and regulatory guidance ",
      },
      {
        id: 3,
        text: "Corporate governance support",
      },
      { id: 4, text: "Ongoing advisory as your business grows" },
    ],

    media: {
      path: "/images/work-kpi.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies RiskOrganisationData,
  contactUs: {
    title: "Not sure if DWTC Free Zone is the right choice for your business?",
    description:
      "<p>Our team will help you compare options, understand requirements, and choose the setup that best aligns with your goals in the UAE.</p>",
    button: {
      label: "Contact Us",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-freezone.png",
      overlayMobile: "/images/overlay-freezone-mobile.png",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "Is DWTC Free Zone suitable for startups?",
        description: `
                  <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                  `,
      },
      {
        id: 2,
        title: "Can I apply for UAE residence visas through DWTC?",
        description: `
                  <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                  `,
      },
      {
        id: 3,
        title: "Do I need a physical office in DWTC?",
        description: `
                  <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                  `,
      },
      {
        id: 4,
        title: "How long does it take to set up a company in DWTC Free Zone?",
        description: `
                  <p>Company setup timelines are generally efficient and depend on document readiness and licence type.</p>
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
      <RiskOrganisation variant="freezone" data={localData.riskOrganisation} />
      <CorporateServicesUaeBanking variant="freezone" data={localData.banking} />
      <RiskOrganisation data={localData.workWithKpi} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <BlogRelated data={localData.related_blog} />
    </>
  );
}
