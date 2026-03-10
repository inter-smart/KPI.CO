import InnerHero from "@/components/common/InnerHero";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
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
import { Metadata } from "next";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";

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
  step: string;
  inner_title: string;
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
    mobileImagePath?: string;
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
      desktopPath: "/images/regulated-audit-bg.svg",
      mobilePath: "/images/regulated-audit-mobile-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "DIFC Audits Built To  Withstand Regulatory Scrutiny ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  whyRisk: {
    title: "Why DIFC Audits Are Different  And Demand More",
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
    title: "DIFC & DFSA Regulated Audit  Services",
    description:
      "<p>KPI provides audit services to DIFC-registered and DFSA-regulated entities in line with</p> ",
    highlightsText:
      "Our audits follow a risk-based methodology that prioritises regulatory and financial significance over audit volume. Audit quality is reinforced through documented processes and consistent application of professional judgement.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "DIFC Companies Law and   Regulations (as amended)",
      },
      {
        id: 2,
        slNo: 2,
        description:
          "DFSA Rulebooks and   prescribed reporting   requirements",
      },
      {
        id: 3,
        slNo: 3,
        description: "International Standards on Auditing (ISA)",
      },
    ],
  } satisfies RiskAdvisoryDta,
  ProcessStep: {
    title: "Our Audit Approach",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        step: "Step One",
        title: "Entity-specific risk assessment",
        inner_title: "Entity-specific risk assessment",
        sub_title: "Entity-specific risk assessment",
        description:
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk. </p>",
      },
      {
        id: 2,
        step: "Step Two",
        title: "Regulatory focused risk  prioritisation",
        inner_title: "Regulatory focused risk  prioritisation",
        sub_title: "Regulatory focused risk prioritisation",
        description:
          "<p>Audit focus aligned to areas of DFSA supervisory interest, including governance, capital adequacy, valuation, and regulatory reporting</p>",
      },
      {
        id: 3,
        step: "Step Three",
        title: "Judgement-driven audit execution",
        inner_title: "Judgement-driven audit execution",
        sub_title: "Judgement-driven audit execution",
        description:
          "<p>Procedures designed around professional judgement and risk severity, not standardised checklists.</p>",
      },
      {
        id: 4,
        step: "Step Four",
        title: "Testing of key controls and  balances",
        inner_title: "Testing of key controls and  balances",
        sub_title: "Testing of key controls and balances",
        description:
          "<p>Focused effort on material balances, complex transactions, and high-risk processes.</p>",
      },
      {
        id: 5,
        step: "Step Five",
        title: "Documentation",
        inner_title: "Documentation",
        sub_title: "Documentation",
        description:
          "<p>Working papers aligned clearly to risk assessment, audit response, and conclusions.</p>",
      },
    ] satisfies ProcessStep[],
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
      path: "/images/why-audit.jpg", // <-- your image path
      // mobileImagePath: "/images/why-mobile-audit.jpg", // <-- your mobile Image Path
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
        title: "Audit Support During DIFC Liquidation & Regulatory Closure",
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
          "<p>KPI has been auditing DIFC-registered and DFSA-regulated entities across multiple regulatory cyclesThis experience provides us with practical insight into DFSA expectations, regulatory review trends, and how audit scrutiny has evolved  across DIFC entities.</p>",
      },
    ],
  } satisfies MeydanFreeZoneData,
  whyChoose: {
    title: "Why DIFC Entities Trust KPI",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Regulatory familiarity",
        description:
          "<p>Strong understanding of DFSA expectations without  unnecessary complexity.</p>",
      },
      {
        id: 2,
        title: "Independent judgement",
        description:
          "<p>Balanced, objective audit opinions that withstand regulatory  and stakeholder challenge.</p>",
      },
      {
        id: 3,
        title: "Clear communication",
        description:
          "<p>Audit findings communicated clearly to management, boards, and key stakeholders.</p>",
      },
      {
        id: 4,
        title: "Professional accountability",
        description:
          "<p>Consistently high standards of confidentiality, discipline, and audit integrity.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  contactUs: {
    title: "Discuss Your DIFC Audit Requirements",
    description:
      "<p>Your audit must satisfy DFSA expectations, board scrutiny, and  stakeholder confidence - not just statutory compliance.  If you have questions regarding audits of DIFC-registered or DFSA- regulated entities, let’s talk.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-difc.svg",
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
    button: {
      label: "Learn More",
      link: "/contact",
      target: "_blank",
    },
    faq_list: [
      {
        id: 1,
        title: "What is a DIFC regulated audit?",
        description: `
          <p>A DIFC regulated audit is an independent examination of financial statements for entities registered in the Dubai International Financial Centre, conducted in accordance with ISA, DIFC laws, and DFSA Rulebooks. These audits are designed to meet statutory filing requirements and withstand DFSA regulatory review. </p>
                        `,
      },
      {
        id: 2,
        title: "Who requires a DIFC audit?",
        description: `
          <p>DIFC audits are required for: </p>
          <ul>
          <li>DFSA-regulated financial institutions and financial services firms</li>
          <li>DIFC-registered entities including holding companies and SPVs </li>
          <li>Investment funds operating within DIFC </li>
          <li>Any entity subject to DIFC Companies Law audit requirements </li>
          </ul>
                        `,
      },
      {
        id: 3,
        title: "What makes DIFC audits different?",
        description: `
          <p>DIFC audits operate under heightened regulatory scrutiny where audit judgements are challengeable, documentation standards are high, and regulatory consequences may arise from governance or reporting weaknesses. </p>
                        `,
      },
      {
        id: 4,
        title: "Is KPI an approved DIFC audit firm?",
        description: `
          <p>Yes. KPI is registered as an approved audit firm in DIFC and provides audit services to DIFC-registered and DFSA-regulated entities. </p>
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
          <p>Typically 4–8 weeks depending on size, complexity, and regulatory classification. Timelines are confirmed during engagement scoping. </p>
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
      date_full: blog.date_full,
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export const metadata: Metadata = {
  title:
    "DIFC & DFSA Regulated Audit Services | Regulatory-Grade Audits | KPI ",
  description:
    "Independent, DFSA-compliant audit services for DIFC-registered entities. Delivered with regulatory discipline and clarity under IFRS and ISA. ",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero variant="difc-regulated" data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory variant="difc-regulated" data={localData.riskAdvisory} />
      <CorporateServicesUaeFormationProcess
        variant="difc-regulated"
        data={localData.ProcessStep}
      />
      <RiskOrganisation
        variant="difc-regulated"
        data={localData.riskOrganisation}
      />
      <MeydanFreeZone
        variant="difc-regulated"
        data={localData.meydanFreeZone}
      />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="difc-regulated"
      />
      <RiskExploreService
        variant="difc-regulated"
        data={localData.explore_service}
      />
      <CorporateServicesUaeCta
        variant="difc-regulated"
        data={localData.contactUs}
      />
      <CorporateServicesUaeFaq
        variant="difc-regulated"
        data={localData.difc_faq_data}
      />
       <HomeOurInsights data={localData.insights} variant="home"/>
    </>
  );
}
