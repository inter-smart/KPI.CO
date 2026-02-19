"use client";

import InnerHero from "@/components/common/InnerHero";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import { MediaItem } from "../page";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";

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
export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  description: string;
  highlightsText: string;
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

export type RiskAdvisoryDta = {
  title: string;
  description: string;
  highlightsText: string;
  advisoryItems: {
    id: number;
    slNo: number;
    description: string;
  }[];
};

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
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
export type ServiceItem = {
  id: number;
  title: string;
  media: MediaItem;
  slug: string;
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

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/adgm-foundation-banner.jpg",
      mobilePath: "/images/adgm-foundation-banner-mobile.jpg",
      alt: "ADGM Foundations: Built for <br/>Control, Continuity, and Asset Protection",
    },
    title:
      "ADGM Foundations: Built for <br/> Control, Continuity, and Asset Protection ",
    description:
      "<p>ADGM Foundations in the ADGM help you separate ownership from control, protect assets, and create long-term governance structures for families, founders, and investment groups. We help you set up and structure ADGM Foundations with a clear understanding of regulatory expectations, governance design, and real-world use cases.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "How KPI Approaches ADGM Foundations",
    description:
      "<p>We don't just file paperwork. We focus on whether the structure will hold up over time. Our goal is simple: a foundation that is defensible, functional, and future-ready. We are deliberate about structure naming, purpose alignment, and regulatory positioning - because how a Foundation is framed matters as much as how it is formed.</p>",
    highlightsTitle: "KPI supports clients through:",
    highlights: [
      "Structuring advice aligned with the intended purpose of the foundation",
      "Guidance on founders, council members, guardians, and beneficiaries",
      "Governance design that balances control, independence, and flexibility",
      "Regulatory alignment with ADGM Registration Authority requirements",
    ],
    footerDescription: "",
    image: {
      path: "/images/adgm-foundation.jpg",
      alt: "How KPI Approaches ADGM Foundations",
    },
  } satisfies MainlandBusinessData,
  meydanFreeZone: {
    title: "How ADGM Foundations Are Typically Used",
    description: "ADGM Foundations work well when traditional companies or trusts don't fully address ownership, succession, or asset-protection requirements, particularly where SPV-like structuring outcomes are needed. They're often used within family offices, investment groups, or as",
    free_zone_list: [
      {
        id: 1,
        title: "Structural Role",
        description: "ADGM Foundations work well when traditional companies or trusts don't fully address ownership, succession, or asset-protection requirements, particularly where SPV-like structuring outcomes are needed. They're often used within family offices, investment groups, or as ownership layers within broader holding structures.",
       highlightsText:"Key Points:",
       zone_list: [
         "Serves as an ownership layer above operating companies or <br/> SPVs",
          "Separates legal ownership from economic benefit",
          "Establishes long-term governance independent of <br/> shareholders",
          "Provides stability across generations or changes in control",
          "Ring-fences assets from operational and commercial risk",
          "Holds shares, investments, or assets without shareholders",
          "Enables structured decision-making through councils or <br/> guardians",
        ],
      },
      {
        id: 2,
        title: "Typical Use Case",
        description: "Most people consider an ADGM Foundation when they're thinking about long-term ownership, succession, or isolating risk, particularly where SPV-like outcomes are required. Used correctly, ADGM Foundations reduce ambiguity around control, continuity, and decision-making.",
        highlightsText:"Key Points:",
        zone_list: [
          "Founder wants ownership continuity beyond personal <br/> involvement",
          "Family succession planning without transferring shares",
          "Creating structures that outlive individual stakeholders",
          "Preventing fragmentation of ownership over time",
          "Isolating high-value assets from business liabilities",
          "Structuring ownership where traditional company <br/> models are unsuitable",
          "Need for oversight without day-to-day management <br/> involvement",
        ],
      },
    ],
    structure_list: [
    ],
  } satisfies MeydanFreeZoneData,
 
  whyChoose: {
    title: "Why Work With Us On ADGM Foundations",
    description: "",
    items: [
      {
        id: 1,
        title: "First-hand ADGM experience",
        description:
          "<p>We prioritise substance, governance, and long-term viability <br/> over speed.</p>",
      },
      {
        id: 2,
        title: "ADGM regulatory familiarity",
        description:
          "<p>Hands-on experience with how ADGM Foundations are reviewed <br/> and maintained in practice</p>",
      },
      {
        id: 3,
        title: "Integrated perspective ",
        description:
          "<p>Ability to align foundations with SPVs, holding companies, audit,<br/> and compliance needs.</p>",
      },
      {
        id: 4,
        title: "Clear, disciplined delivery",
        description:
          "<p>No over-engineering. No generic templates. Structures built for<br/> real use.</p>",
      },
    ] satisfies WhyChooseItem[],
  },

  contactUs: {
    title: "Let's Talk About Your ADGM Foundation",
    description:
      "<p>If you are considering a ADGM Foundation as part of a wider ownership, <br/> succession, or asset protection strategy, KPI can help you structure it with <br/> clarity and confidence.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-adgm-foundation.png",
      overlayMobile: "/images/overlay-adgm-foundation-mobile.png",
    },
  } satisfies CtaData,
  document_required_data: {
    title: "Formation & Governance Scope",
    description:
      "<p>We tailor everything to your situation - no unnecessary complexity, just <br/> what you actually need. The result? A foundation that meets regulatory <br/> standards and is practical to run and maintain. Our ADGM Foundation <br/> support typically includes: </p>",
    items: [
      {
        id: 1,
        text: "Structuring and suitability assessment ",
      },
      { id: 2, text: "Drafting and coordination of constitutional documents " },
      { id: 3, text: "ADGM registration and authority liaison " },
      { id: 4, text: "Governance framework design " },
      {
        id: 5,
        text: "Ongoing advisory support as structures evolve",
      },
    ],

    media: {
      path: "/images/adgm-scope-img.jpg",
      alt: "Formation & Governance Scope",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  explore_service: {
    title: " Related Services ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/explore-01.jpg",
          alt: "Special Purpose Vehicles (SPVs)",
        },
        title: "Special Purpose Vehicles <br/>(SPVs)",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Holding Companies in ADGM" },
        title: "Holding Companies in <br/> ADGM",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Company Formation in ADGM" },
        title: "Company Formation in <br/> ADGM",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  difc_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is an ADGM Foundation?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "When should I consider setting up an ADGM Foundation?",
        description: `
          <p>Yes. ADGM Foundations are currently tax-neutral, meaning no income tax, no capital gains tax, and no inheritance tax. That said, you'll still need to meet ADGM's Economic Substance requirements and comply with Anti-Money Laundering regulations.</p>
                        `,
      },
      {
        id: 3,
        title: "How is an ADGM Foundation different from a trust?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Who controls an ADGM Foundation?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "Are there tax benefits to an ADGM Foundation?",
        description: `
          <p>Yes. ADGM Foundations are currently tax-neutral, meaning no income tax, no capital gains tax, and no inheritance tax. That said, you'll still need to meet ADGM's Economic Substance requirements and comply with Anti-Money Laundering regulations.</p>
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
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <MeydanFreeZone data={localData.meydanFreeZone} />
      <DocumentRequired variant="spv" data={localData.document_required_data} />
      <CorporateServicesUaeWhyChoose variant="risk" data={localData.whyChoose} />
      <RiskExploreService variant="difc" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq data={localData.difc_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
