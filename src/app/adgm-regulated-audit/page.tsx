import InnerHero from "@/components/common/InnerHero";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskApproach from "@/components/features/risk-overview/RiskApproach";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import { MediaItem } from "../page";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
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

export type WhyRiskData = {
  title: string;
  highlightsTitle: string;
  highlights: string[];
  footerDescription: string;
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

export type ProcessStep = {
  id: number;
  title: string;
  sub_title: string;
  description: string;
};

export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  description: string;
  highlightsText: string;
  zone_list: string[];
  footer_description: string;
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
      desktopPath: "/images/adgm-regulated-bg.png",
      mobilePath: "/images/adgm-regulated-mobile-bg.png",
      alt: "ADGM Audits Built To Withstand Regulatory Scrutiny",
    },
    title: "ADGM Audits Built To <br/> Withstand Regulatory Scrutiny ",
    description:
      "<p>In the ADGM ecosystem, financial reports are never in isolation. They are subject to board and audit committee scrutiny, relied upon by investors, and ultimately subject to regulatory review. As an ADGM-registered audit firm, KPI delivers FSRA-compliant audit services to regulated entities and other entities. Our audits are designed to meet statutory filing requirements and are prepared with regulatory review in mind.</p>",
  } satisfies HeroData,
  whyRisk: {
    title: "Why ADGM Audits Are Different <br/> And Demand More",
    highlightsTitle: "ADGM operates within a regulatory framework where:",
    highlights: [
      "Financial reporting is subject to rigorous review by FSRA",
      "Weak governance and control failures carry direct consequences",
      "Audit judgement is not just numbers, is open to challenge",
      "Inadequate documentation leads to intensive regulatory consequences",
    ],
    footerDescription: "",
    image: {
      path: "/images/difc-audit.jpg",
      alt: "Risk advisory discussion",
    },
  } satisfies WhyRiskData,
  riskAdvisory: {
    title: "ADGM Regulated Audit Services",
    description:
      "<p>KPI provides audit services to ADGM registered and FSRA regulated entities in line with </p>",
    highlightsText:
      "We follow a risk-based audit methodology, prioritising regulatory and financial significance over audit volume. Audit quality is supported by documented processes and consistent application of professional judgement.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "ADGM Companies <br/> Regulations, as amended",
      },
      {
        id: 2,
        slNo: 2,
        description: "FSRA Rulebooks and <br/> prescribed reporting <br/> requirements",
      },
      {
        id: 3,
        slNo: 3,
        description: "International Standards on Auditing (ISA",
      },
    ],
  } satisfies RiskAdvisoryDta,
  approachProcess: {
    title: "Our Audit Approach",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        title: "Entity specific risk assessment",
        sub_title: "Entity specific risk assessment",
        description:
          "<p>We begin with a detailed assessment of the entity’s regulatory classification, business model, and control environment to identify areas of highest risk.</p>",
      },
      {
        id: 2,
        title: "Regulatory focused risk <br/> prioritisation",
        sub_title: "Regulatory focused risk prioritisation",
        description:
          "<p>We begin with a detailed assessment of the entity’s regulatory classification, business model, and control environment to identify areas of highest risk.</p>",
      },
      {
        id: 3,
        title: "Judgement-driven audit execution",
        sub_title: "Judgement-driven audit execution",
        description:
          "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
      },
      {
        id: 4,
        title: "Testing of key controls and <br/> balances",
        sub_title: "Testing of key controls and balances",
        description:
          "<p>We begin with a detailed assessment of the entity’s regulatory classification, business model, and control environment to identify areas of highest risk.</p>",
      },
      {
        id: 5,
        title: "Documentation",
        sub_title: "Documentation",
        description:
          "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
      },
    ] satisfies ProcessStep[],
  },

  meydanFreeZone: {
    title: "",
    free_zone_list: [
      {
        id: 1,
        title: "Who We Audit in ADGM",
        description: "",
        highlightsText:
          "Our audit services are designed for entities where clarity, precision and regulatory certainty are required including:",
        zone_list: [
          "FSRA regulated financial institutions or financial services firms",
          "ADGM registered entities including holding companies, special purpose vehicles (SPVs) and foundations",
          "Investment funds",
        ],
        footer_description:
          "Scope of audit and depth are proportionate to regulatory risk and supervisory focus.",
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "ADGM Experience From The Early Years",
        description:
          "<p>KPI was the first audit firm registered with ADGM and has been involved in the ADGM-regulated entities audits from the jurisdiction’s initial years. This longstanding presence provides us with deep understanding, practical insight into regulatory expectations and how audit challenges have emerged in ADGM entities over time.</p>",
      },
    ],
  } satisfies MeydanFreeZoneData,
  whyChoose: {
    title: "Why ADGM Entities Trust KPI",
    description:
      "",
    items: [
      {
        id: 1,
        title: "Regulatory Familiarity",
        description:
          "<p>Deep understanding of FSRA expectations without introducing <br/> unnecessary complexity</p>",
      },
      {
        id: 2,
        title: "Independent Judgement",
        description:
          "<p>Balanced, objective audit opinions that withstand regulatory <br/> and stakeholder challenge.</p>",
      },
      {
        id: 3,
        title: "Clear Communication",
        description:
          "<p>Audit findings communicated clearly to management, boards,<br/> and key stakeholders.</p>",
      },
      {
        id: 4,
        title: "Professional accountability",
        description:
          "<p>Consistently high standards of confidentiality, discipline, and <br/> audit integrity.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  contactUs: {
    title: "Discuss Your ADGM Audit Requirements",
    description:
      "<p>If you have any questions regarding audit of ADGM registered entities, <br/> please reach out to us for assistance.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-adgm.png",
      overlayMobile: "/images/overlay-adgm-mobile.png",
    },
  } satisfies CtaData,
  explore_service: {
    title: " Related Audit Services ",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Related Audit <br/> Services",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Agreed-Upon Procedures (AUP)",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "DIFC & DFSA Regulated Audit",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  difc_faq_data: {
    title: "FAQs",
    button: {
      label: "Learn More",
      link: "/contact",
      target: "_blank",
    },
    faq_list: [
      {
        id: 1,
        title: "What is an ADGM regulated audit?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Who needs an ADGM audit?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
                        `,
      },
      {
        id: 3,
        title: "What makes ADGM audits different from other audits?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Is KPI registered as an ADGM audit firm?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "What standards do you follow for ADGM audits?",
        description: `
          <p>We conduct ADGM audits in accordance with:  </p> 
          <p>· International Standards on Auditing (ISA)</p>
          <p>· ADGM Companies Regulations (as amended)</p>
          <p>· FSRA Rulebooks and prescribed reporting requirements</p>
          <p>· International Financial Reporting Standards (IFRS)</p>
          
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
  title: "ADGM Approved Audit Firm | FSRA Regulated Audits UAE  ",
  description:
    "Independent, FSRA-compliant audit services for ADGM-registered entities. Delivered with regulatory discipline and clarity under IFRS and ISA ",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory variant="difc" data={localData.riskAdvisory} />
      <RiskApproach variant="mainland" data={localData.approachProcess} />
      <MeydanFreeZone variant="difc" data={localData.meydanFreeZone} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <RiskExploreService variant="difc" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq data={localData.difc_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
