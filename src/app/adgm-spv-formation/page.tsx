import InnerHero from "@/components/common/InnerHero";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import { MediaItem } from "../page";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import DocumentRequired from "@/components/features/services/DocumentRequired";
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

export type RiskAssuranceData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
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
  date_full: string;
  readTime: string;
  media: MediaItem;
  slug: string;
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/spv-banner.jpg",
      mobilePath: "/images/spv-banner-mobile.jpg",
      alt: "ADGM Special Purpose Vehicles Designed for Control, Protection, and Clarity",
    },
    title:
      "ADGM Special Purpose Vehicles <br/> Designed for Control, <br/> Protection, and Clarity ",
    description:
      "<p>ADGM SPVs operate under a common law framework recognised by regulators, banks, and investors. When structured properly, they provide control, protection, and credibility. We structure ADGM SPVs with attention to structural integrity, regulatory alignment, and long-term usability, not just incorporation speed.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Why Organisations Use SPVs in ADGM",
    description:
      "<p>SPVs are not operational entities. They are used when ownership clarity and risk control cannot be compromised. When structured correctly, SPVs strengthen governance, reduce exposure, and provide confidence to counterparties and stakeholders. We have worked with SPVs since ADGM's early years. That experience shows in how we approach structuring.</p>",
    highlightsTitle: "ADGM SPVs are commonly used for:",
    highlights: [
      "Asset and investment holding",
      "Ring-fencing liabilities from operating businesses",
      "Group restructuring and ownership layering",
      "Joint venture and shareholder arrangements",
      "Family office and private wealth structures",
    ],
    footerDescription: "",
    image: {
      path: "/images/spv-busnes.jpg",
      alt: "Why Organisations Use SPVs in ADGM",
    },
  } satisfies MainlandBusinessData,
  riskAdvisory: {
    title: "What an ADGM SPVs Offer",
    description:
      "<p>ADGM SPVs combine flexibility with regulatory credibility. Key features include </p> ",
    highlightsText:
      "This makes ADGM SPVs a preferred choice for investors and groups seeking clean ownership structures that stand up to scrutiny.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "No requirement for <br/> physical office space",
      },
      {
        id: 2,
        slNo: 2,
        description: "No employees or UAE visas <br/> required",
      },
      {
        id: 3,
        slNo: 3,
        description: "100% foreign ownership",
      },
      {
        id: 4,
        slNo: 4,
        description: "Ability to hold regional and <br/> international assets",
      },
      {
        id: 5,
        slNo: 5,
        description: "Operation under English common law principles",
      },
    ],
  } satisfies RiskAdvisoryDta,
  riskAssurance: {
    title: "Our Approach To SPV Structuring",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/spv-service-1.svg",
          alt: "Structuring & Feasibility",
        },
        title: "Structuring & Feasibility",
        description:
          "Understanding the intended use of the SPV, risk profile, and future scenarios before incorporation.",
      },
      {
        id: 2,
        media: {
          path: "/images/spv-service-2.svg",
          alt: "Regulatory Alignment",
        },
        title: "Regulatory Alignment",
        description:
          "Ensuring the structure reflects ADGM requirements <br/> and broader regulatory considerations.",
      },
      {
        id: 3,
        media: {
          path: "/images/spv-service-3.svg",
          alt: "Controlled Incorporation",
        },
        title: "Controlled Incorporation",
        description:
          "Efficient execution without shortcuts that create <br/>problems later.",
      },
      {
        id: 4,
        media: {
          path: "/images/spv-service-4.svg",
          alt: "Ongoing Readiness",
        },
        title: "Ongoing Readiness",
        description:
          "Support for banking, reporting, governance, and <br/> restructuring when required.",
      },
    ] satisfies RiskAssuranceData[],
  },
  whyChoose: {
    title: "Why Organisations Choose KPI for ADGM SPVs",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "First-hand ADGM experience",
        description:
          "<p>KPI was the first firm registered in ADGM. We have worked with SPVs since the jurisdiction's early years.</p>",
      },
      {
        id: 2,
        title: "Structuring-led advice",
        description:
          "<p>We focus on durability, governance, and clarity, not just incorporation speed or form completion.</p>",
      },
      {
        id: 3,
        title: "Regulatory awareness ",
        description:
          "<p>Our approach is based on how ADGM authorities assess SPVs in practice, not theory.</p>",
      },
      {
        id: 4,
        title: "Long-term partnership",
        description:
          "<p>Support beyond setup, covering governance, compliance, audit, and future restructuring needs.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  contactUs: {
    title: "Discuss Your ADGM SPV <br/> Requirements",
    description:
      "<p>If you are structuring assets, investments, or ownership through an SPV,  we can help you design a structure that works today and as it evolves.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-spv.png",
      overlayMobile: "/images/overlay-spv-mobile.png",
    },
  } satisfies CtaData,
  document_required_data: {
    title: "Scope of Our ADGM SPV Services",
    description:
      "<p>We provide end-to-end SPV support, from structuring to post- <br/>incorporation readiness. Our work is purpose driven. The SPV must remain <br/> effective as ownership, assets, or strategies evolve </p>",
    items: [
      {
        id: 1,
        text: "Structuring advice aligned to asset type and commercial objectives ",
      },
      { id: 2, text: "Incorporation and registration with ADGM " },
      { id: 3, text: "Drafting and coordination of constitutional documents " },
      { id: 4, text: "Liaison with ADGM Registration Authority " },
      {
        id: 5,
        text: "Banking support and ongoing compliance guidance",
      },
    ],

    media: {
      path: "/images/spv-scope-img.jpg",
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  explore_service: {
    title: " Related Corporate Services ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/explore-01.jpg",
          alt: "Company Formation in ADGM",
        },
        title: "Company Formation in <br/> ADGM",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "SPV Foundations" },
        title: "SPV <br/> Foundations",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Holding Companies" },
        title: "Holding <br/> Companies",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  difc_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is an ADGM SPV?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Who should consider setting up an ADGM SPV?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
                        `,
      },
      {
        id: 3,
        title: "Is an ADGM SPV subject to UAE Corporate Tax?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Can an ADGM SPV open a UAE bank account?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "What documents are required to set up an ADGM SPV?",
        description: `
          <p>Typical requirements include shareholder and beneficial owner information, constitutional documents, and supporting KYC materials. The exact documentation depends on ownership complexity, jurisdictional exposure, and intended use of the SPV.</p>
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
      readTime: blog.readTime,
      date: blog.date, 
      date_full: blog.date_full,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export const metadata: Metadata = {
  title:
    "ADGM SPV Formation Services | Special Purpose Vehicles UAE | KPI Group   ",
  description:
    "Structured ADGM SPV formation for asset holding, investments, and ring-fenced ownership. Clear structuring, regulator-aware execution, and end-to-end support. ",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness variant="spv" data={localData.mainlandBusiness} />
      <RiskAdvisory variant="difc" data={localData.riskAdvisory} />
      <RiskAssuranceServices data={localData.riskAssurance} />
      <CorporateServicesUaeWhyChoose variant="spv" data={localData.whyChoose} />
      {/* <DocumentRequired variant="spv" data={localData.document_required_data} /> */}
      <RiskOrganisation data={localData.document_required_data} />
      <RiskExploreService variant="difc" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq
        variant="side-arrow"
        data={localData.difc_faq_data}
      />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
