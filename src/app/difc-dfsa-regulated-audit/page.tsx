"use client";

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

export type ApproachStep = {
  id: number;
  title: string;
  sub_title: string;
  description: string;
};

export type RiskOrganisationData = {
  title?: string;
  description?: string;
  items?: {
    id: number;
    text: string;
  }[];
  ftr_description?: string;
  media?: {
    path?: string;
    alt?: string;
  };
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
      desktopPath: "/images/regulated-audit-bg.jpg",
      mobilePath: "/images/regulated-audit-mobile-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "DIFC Audits Built To <br/> Withstand Regulatory Scrutiny ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  whyRisk: {
    title: "Why DIFC Audits Are Different <br/> And Demand More",
    highlightsTitle:
      "In DIFC, audit quality is assessed not only on compliance, but on defensibility. It operates with a regulatory environment where:",
    highlights: [
      "Financial reporting is subject to active review by the DFSA",
      "Governance weaknesses and control failures carry regulatory consequences",
      "Audit judgement extends beyond numbers and is open to challenge",
      "Inadequate documentation can trigger enhanced regulatory scrutiny",
    ],
    footerDescription: "",
    image: {
      path: "/images/difc-audit.jpg",
      alt: "Risk advisory discussion",
    },
  } satisfies WhyRiskData,
  riskAdvisory: {
    title: "DIFC & DFSA Regulated Audit <br/> Services",
    description:
      "<p>KPI provides audit services to DIFC-registered and DFSA-regulated entities in line with</p> ",
    highlightsText: "Our audits follow a risk-based methodology that prioritises regulatory and financial significance over audit volume. Audit quality is reinforced through documented processes and consistent application of professional judgement.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "DIFC Companies Law and  <br/> Regulations (as amended)",
      },
      {
        id: 2,
        slNo: 2,
        description: "DFSA Rulebooks and  <br/> prescribed reporting  <br/> requirements",
      },
      {
        id: 3,
        slNo: 3,
        description: "International Standards on Auditing (ISA)",
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
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk.</p>",
      },
      {
        id: 2,
        title: "Regulatory focused risk <br/> prioritisation",
        sub_title: "Regulatory focused risk prioritisation",
        description:
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk.</p>",
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
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk.</p>",
      },
      {
        id: 5,
        title: "Documentation",
        sub_title: "Documentation",
        description:
          "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
      },
    ] satisfies ApproachStep[],
  },
  riskOrganisation: {
    title: "Who We Audit in DIFC",
    description:
      "<p>Our audit services are designed for entities where clarity, precision, and regulatory certainty are required, including: </p>",
    items: [
      {
        id: 1,
        text: "DFSA-regulated financial institutions and financial services firms ",
      },
      {
        id: 2,
        text: "DIFC-registered entities including holding companies and SPVs ",
      },
      {
        id: 3,
        text: "Investment funds and asset management structures",
      },
      

    ],

    media: {
      path: "/images/document-required-img.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description:
      "<p>Audit scope and depth are proportionate to regulatory risk and supervisory focus.</p>",
  } satisfies RiskOrganisationData,
  meydanFreeZone: {
    title: "",
    free_zone_list: [
      {
        id: 1,
        title: "Audit Support During DIFC Liquidation & Regulatory <br/> Closure",
        description:
          "Audits are often required during DIFC liquidation, restructuring, or regulatory closure processes.",
        highlightsText:
          "KPI provides audit support aligned with DIFC and DFSA requirements, including:",
        zone_list: [
          "Audit of final financial statements",
          "Support for regulatory and authority submissions",
          "Audit coordination with liquidators and legal advisors",
        ],
        footer_description:
          "Our focus during closure is ensuring financial information remains accurate, documented, and defensible throughout regulatory and legal review.",
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "DIFC Experience Built Over Time",
        description:
          "<p>KPI has been auditing DIFC-registered and DFSA-regulated entities across multiple regulatory cycles.</p> <p> This experience provides us with practical insight into DFSA expectations, regulatory review trends, and how audit scrutiny has evolved across DIFC entities.</p>",
      },
    ],
  } satisfies MeydanFreeZoneData,
  whyChoose: {
    title: "Why DIFC Entities Trust KPI",
    description:
      "",
    items: [
      {
        id: 1,
        title: "Regulatory familiarity",
        description:
          "<p>Strong understanding of DFSA expectations without <br/> unnecessary complexity.</p>",
      },
      {
        id: 2,
        title: "Independent judgement",
        description:
          "<p>Balanced, objective audit opinions that withstand regulatory <br/> and stakeholder challenge.</p>",
      },
      {
        id: 3,
        title: "Clear communication",
        description:
          "<p>Audit findings communicated clearly to management, boards, <br/>and key stakeholders.</p>",
      },
      {
        id: 4,
        title: "Professional accountability",
        description:
          "<p>Consistently high standards of confidentiality, discipline, and<br/> audit integrity.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  contactUs: {
    title: "Discuss Your DIFC Audit Requirements",
    description:
      "<p>Your audit must satisfy DFSA expectations, board scrutiny, and <br/> stakeholder confidence - not just statutory compliance. <br/> If you have questions regarding audits of DIFC-registered or DFSA- <br/>regulated entities, let’s talk.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-difc.png",
      overlayMobile: "/images/overlay-difc-mobile.png",
    },
  } satisfies CtaData,
  explore_service: {
    title: " Related Audit Services ",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Financial Statement Audit",
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
        title: "ADGM Regulated Audit",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  difc_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a DIFC regulated audit?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Who requires a DIFC audit?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
                        `,
      },
      {
        id: 3,
        title: "What makes DIFC audits different?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Is KPI an approved DIFC audit firm?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "What standards do you follow?",
        description: `
          <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                        `,
      },
      {
        id: 6,
        title: "How long does a DIFC audit take?",
        description: `
          <p>Some jurisdictions and business activities require a physical office or flexi-desk. KPI Group helps you select compliant office solutions that meet licensing and visa requirements.</p>
                        `,
      },
      {
        id: 7,
        title: "Do you audit DFSA-regulated financial institutions?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
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
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory variant={["difc", "center"]}data={localData.riskAdvisory} />
      <RiskApproach variant="mainland" data={localData.approachProcess} />
      <RiskOrganisation data={localData.riskOrganisation} />
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
