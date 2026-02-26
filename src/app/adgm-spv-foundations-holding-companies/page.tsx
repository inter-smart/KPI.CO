import InnerHero from "@/components/common/InnerHero";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import { MediaItem } from "../page";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import { Metadata } from "next";
import RiskOrganisation from "@/components/features/risk-overview/RiskOrganisation";

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
      desktopPath: "/images/holding-bg.svg",
      mobilePath: "/images/holding-bg-mobile.svg",
      alt: "ADGM Holding Companies Built For Control And Clarity",
    },
    title: "ADGM Holding Companies Built  <br/>for Control and Clarity ",
    description:
      "<p>ADGM holding companies are used to own and control subsidiaries, <br/>investments, and assets within a single, regulated structure. They provide<br/> clarity at the ownership level while separating strategic control from<br/> operational risk. KPI advises on the formation and structuring of ADGM <br/>  holding companies with a focus on governance integrity, regulatory <br/>acceptance, and long-term usability.</p>",
  } satisfies HeroData,

  riskAdvisory: {
    title: "What a Holding Company Is <br/> Designed to Do",
    description:
      "<p>Holding companies sit above operating entities, acting <br/> as the legal and governance anchor for a group.</p> <p>They are used to</p>",
    highlightsText:
      "This is an active ownership structure, not a passive <br/> asset-holding vehicle. ADGM holding companies can be <br/> operational. ",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description:
          "Centralise ownership of <br/> subsidiaries and <br/> investments",
      },
      {
        id: 2,
        slNo: 2,
        description:
          "Create a clean separation <br/> between owners and <br/> operations",
      },
      {
        id: 3,
        slNo: 3,
        description:
          "Establish group-level <br/> governance, brand <br/> management and reporting",
      },
      {
        id: 4,
        slNo: 4,
        description:
          "Support capital raises, inter- <br/>company financing ,exits, or <br/> restructuring",
      },
      {
        id: 5,
        slNo: 5,
        description:
          "Present clear ownership structures to banks, investors and <br/> regulators",
      },
    ],
  } satisfies RiskAdvisoryDta,
  riskOrganisation: {
    title: "Why ADGM For Holding Companies",
    description:
      "<p>ADGM offers distinct advantages for structured ownership: </p>",
    items: [
      {
        id: 1,
        text: "100% foreign ownership - no local partner or sponsor required ",
      },
      { id: 2, text: "Incorporation and registration with ADGM " },
      {
        id: 3,
        text: "0% corporate tax for Qualifying Free Zone Persons (QFZP) on eligible income",
      },
      {
        id: 4,
        text: "0% withholding tax on dividends, interest, and royalties ",
      },
      { id: 5, text: "0% capital gains tax on sale of shares or assets " },
      {
        id: 6,
        text: "English common law jurisdiction with independent ADGM Courts ",
      },
      {
        id: 7,
        text: "Access to 68+ double taxation treaties for cross-border efficiency ",
      },
      {
        id: 8,
        text: "No restrictions on profit repatriation or capital movement ",
      },
      { id: 9, text: "Strategic MENA gateway with global connectivity " },
    ],

    media: {
      path: "/images/holding-doc-img.jpg",
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  meydanFreeZone: {
    title: "",
    description: "",
    free_zone_list: [
      {
        id: 1,
        title: "How KPI Structures Holding Companies",
        description:
          "We start with structure appropriateness, not incorporation speed. The objective is a structure that works commercially and holds up under scrutiny.",
        highlightsText: "KPI advises on:",
        zone_list: [
          "Whether a holding company is the right structure",
          "Shareholding and control mechanics",
          "Governance design aligned with real decision-making",
          "Regulatory positioning within ADGM",
          "Practical considerations around audit, reporting, and banking",
        ],
      },
      {
        id: 2,
        title: "How We Support Your ADGM Setup",
        description:
          "Our role goes beyond registering an entity. We focus on whether the holding structure is appropriate, defensible, and scalable. The scope is calibrated to complexity, ensuring clarity without unnecessary structuring or over-engineering.",
        highlightsText: "Our support typically covers:",
        zone_list: [
          "Structuring and suitability assessment aligned to ownership and control objectives",
          "ADGM holding company incorporation and authority coordination",
          "Shareholder, board, and governance framework design",
          "Alignment with SPVs, foundations, and operating entities",
          "Ongoing advisory support as group structures evolve",
        ],
      },
    ],
    structure_list: [],
  } satisfies MeydanFreeZoneData,
  common_use_data: {
    title: "Common Use Cases For ADGM <br/> Holding Companies",
    description: "<p>A holding company is typically used when: </p>",
    items: [
      {
        id: 1,
        text: "Multiple businesses or assets sit under common ownership ",
      },
      {
        id: 2,
        text: "Owners want consolidated control without operational involvement ",
      },
      {
        id: 3,
        text: "Group restructuring or future investment is anticipated ",
      },
      {
        id: 4,
        text: "Tax optimization through 0% corporate tax & treaty access is a <br/> strategic priority ",
      },
      { id: 5, text: "Risk needs to be isolated at the operating level " },
      { id: 6, text: "Banking and regulatory transparency are critical " },
      {
        id: 7,
        text: "Regional headquarters for MENA market access is needed ",
      },
    ],

    media: {
      path: "/images/common-use-img.jpg",
      alt: "Common Use Cases for ADGM Holding Companies",
    },
    ftr_description:
      "In these cases, a holding company simplifies control, oversight, and  decision-making.",
  } satisfies DocumentRequiredData,
  whyChoose: {
    title: "Why Choose KPI for ADGM Holding Companies",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Structuring first",
        description:
          "<p>We design ownership structures around control, governance, and future outcomes.</p>",
      },
      {
        id: 2,
        title: "ADGM-specific experience",
        description:
          "<p>Clear understanding of how holding companies are reviewed and maintained in practice.</p>",
      },
      {
        id: 3,
        title: "Connected advisory ",
        description:
          "<p>Holding companies aligned with SPVs, foundations, audit, and compliance requirements.</p>",
      },
      {
        id: 4,
        title: "Disciplined execution",
        description:
          "<p>Clear advice, clean structures, and no unnecessary layers.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  explore_service: {
    title: " Related Structuring Options ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/related-img.jpg",
          alt: "Special Purpose Vehicles (SPVs)",
        },
        title: "Special Purpose Vehicles<br/> (SPVs)",
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/related-img.jpg",
          alt: "SPV Foundations in ADGM",
        },
        title: "SPV Foundations in<br/> ADGM",
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/related-img.jpg",
          alt: "Company Formation in ADGM",
        },
        title: "Company Formation in <br/> ADGM",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  contactUs: {
    title: "Assess Whether a Holding <br/> Company Is Right for You",
    description:
      "<p>If you are considering a holding company as part of a wider group or <br/> ownership structure, KPI can help you assess, design, and implement it <br/> with clarity and full regulatory compliance. Initial consultations focus on <br/> structure appropriateness, QFZP qualification, realistic costs and <br/>timelines, and integration with existing arrangements.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-holding.svg",
      overlayMobile: "/images/overlay-holding-mobile.svg",
    },
  } satisfies CtaData,
  difc_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title:
          "What is the difference between an ADGM holding company and an SPV?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Do I need a physical office in ADGM for a holding company?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
                        `,
      },
      {
        id: 3,
        title: "Can I get 100% foreign ownership in an ADGM holding company?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "What are the ongoing compliance requirements?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "Do I need to pay tax on my ADGM holding company?",
        description: `
          <p>ADGM holding companies that qualify as Qualifying Free Zone Persons (QFZP) benefit from 0% corporate tax on eligible income, 0% withholding tax on dividends/interest/royalties, and 0% capital gains tax. However, you must register with UAE Federal Tax Authority and file annual tax returns even when no tax is payable. Maintaining QFZP status requires meeting financial substance requirements.</p>
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

export const metadata: Metadata = {
  title: "ADGM SPV Foundations Advisory & Setup | KPI Group",
  description:
    "KPI provides independent advisory and setup support for ADGM SPV Foundations. Asset protection, succession planning, and ownership structuring delivered with regulatory clarity.  ",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <RiskAdvisory variant="difc" data={localData.riskAdvisory} />
      {/* <DocumentRequired variant="spv" data={localData.holding_company_data} /> */}
      <RiskOrganisation variant="holding" data={localData.riskOrganisation} />
      <MeydanFreeZone variant="holding" data={localData.meydanFreeZone} />
      {/* <DocumentRequired variant="spv" data={localData.common_use_data} /> */}
      <RiskOrganisation variant="holding" data={localData.common_use_data} />
      <CorporateServicesUaeWhyChoose
        variant="holding"
        data={localData.whyChoose}
      />
      <RiskExploreService variant="holding" data={localData.explore_service} />
      <CorporateServicesUaeCta variant="holding" data={localData.contactUs} />
      <CorporateServicesUaeFaq variant="holding" data={localData.difc_faq_data} />
      <HomeOurInsights variant="holding" data={localData.insights} />
    </>
  );
}
