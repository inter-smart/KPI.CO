import InnerHero from "@/components/common/InnerHero";
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import HomeCounter from "@/components/features/home/HomeCounter";
import type { CounterItem } from "@/app/page";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
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

export type MeydanKeyBenefitsData = {
  title: string;
  slides: {
    id: number;
    title: string;
    items: string[];
    media: {
      path: string;
      alt: string;
    };
  }[];
};

export type ProcessStep = {
  id: number;
  title: string;
  sub_title: string;
    inner_title: string;
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

export type MediaItem = {
  path: string;
  alt: string;
};

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  slug: string;
};

export type WhyChooseItem = {
  id: number;
  title: string;
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
  category?: string;
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/aupbanner.svg",
      mobilePath: "/images/aupbanner-mob.svg",
      alt: "Company Formation in DMCC Free Zone, UAE",
    },
    title: "Focused Reviews. Factual Findings. No Opinions.",
    description:
      "<p>Agreed-Upon Procedures (AUP) engagements provide targeted verification on specific matters when stakeholders need factual findings without the full scope of an audit. KPI delivers AUP engagements in strict accordance with ISRS 4400, providing objective, factual findings that satisfy stakeholder requirements and regulatory expectations across the UAE, DIFC, and ADGM.</p>",
  } satisfies HeroData,

  whyRisk: {
    title: "<p>What Are <span>Agreed-Upon Procedures (AUP)?</span></p>",
    highlightsTitle:
      "<p>Agreed-Upon Procedures are targeted reviews performed on specific financial or non-financial information, based on procedures agreed in advance with management and stakeholders. These <br> engagements are conducted in accordance with <span>ISRS 4400 (IAASB)</span></p>",
    highlights: [
      "No audit or review opinion is expressed",
      "No assurance is provided",
      "Findings are reported factually, without interpretation",
      "Findings allow stakeholders to form their own conclusions",
    ],
    footerDescription: "",
    image: {
      path: "/images/difc-audit.jpg",
      alt: "Risk advisory discussion",
    },
  } satisfies WhyRiskData,

  keyBenefits: {
    title: "Where AUP Engagements Are Commonly Used",
    slides: [
      {
        id: 1,
        title: "Regulatory & Authority-Led Requirements",
        items: [
          "DFSA / FSRA regulated entities",
          "PIB / Regulatory Return Auditor’s Reports",
          "Client Money Auditor’s Reports",
          "Safe Custody Auditor’s Reports",
          "Insurance Monies Auditor’s Reports",
          "Money Services Auditor’s Reports",
        ],
        media: {
          path: "/images/aup-img1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "Financial & Operational Verifications",
        items: [
          "Review of Accounts Receivable and Accounts Payable",
          "Verification of cash and bank balances ",
          "Review of loans and advances ",
          "Assessment of tax provisions ",
          "Observation and reporting of inventory stock counts ",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 3,
        title: "Transaction & Compliance Support",
        items: [
          "Due diligence for mergers, acquisitions, or partnerships",
          "Verification of compliance with licensing and regulatory requirements ",
          "Review of HR and payroll-related processes ", 
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,

  formationProcess: {
    title: "Our Approach to AUP Engagements",
    sub_title: null,
    description:
      "Audit systems are used to support documentation and evidence handling, ensuring consistency and completeness.",
    steps: [
      {
        id: 1,
        title: "Clear Scoping",
        sub_title: "",
                inner_title: "Clear Scoping",
        description:
          "<p>Procedures are agreed upfront to ensure clarity and alignment. </p>",
      },
      {
        id: 2,
        title: "Precise Execution",
        sub_title: "",
                inner_title: "Precise Execution",
        description:
          "<p>Work is performed strictly as defined, without scope expansion. </p>",
      },
      {
        id: 3,
        title: "Structured Reporting",
        sub_title: "",
                inner_title: "Structured Reporting",
        description:
          "<p>Findings are documented clearly for stakeholder use.</p>",
      },
      {
        id: 4,
        title: "Timely Delivery",
        sub_title: "",
                inner_title: "Timely Delivery",
        description:
          "<p>Engagements are completed efficiently to meet regulatory or commercial timelines.</p>",
      },
    ] satisfies ProcessStep[],
  },

  document_required_data: {
    title: "Scope of an AUP Engagement",
    description:
      "<p>An Agreed-Upon Procedures engagement focuses on specific areas identified upfront, based on what stakeholders need verified.</p> <p>Depending on the requirement, an AUP engagement may involve:</p>",
    items: [
      {
        id: 1,
        text: "Reviewing selected financial or operational information ",
      },
      { id: 2, text: "Verifying balances, transactions, or records" },
      { id: 3, text: "Performing agreed checks or confirmations" },
      {
        id: 4,
        text: "Testing compliance with specific requirements or thresholds",
      },
      {
        id: 5,
        text: "Initial approval from the Department of Economic Development (DED)",
      },
    ],

    media: {
      path: "/images/document-required-img.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "<p>The outcome is a clear record of procedures performed and findings observed, allowing stakeholders to draw their own conclusions based on the results.</p>",
  } satisfies DocumentRequiredData,

  whyChoose: {
    title: "Why Organisations Choose KPI for AUP",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Independent and objective execution",
        description:
          "<p>Procedures performed independently, with findings reported factually and without interpretation, bias, or advocacy. </p>",
      },
      {
        id: 2,
        title: "Regulatory familiarity",
        description:
          "<p>Extensive experience delivering AUP engagements aligned with regulatory and stakeholder needs across UAE, DIFC, and ADGM.</p>",
      },
      {
        id: 3,
        title: "Scope discipline",
        description:
          "<p>Procedures executed strictly as agreed, with no deviation, scope creep, or ambiguity in delivery or reporting.</p>",
      },
      {
        id: 4,
        title: "Quality and accountability",
        description:
          "<p>Engagements delivered in line with professional standards, documentation requirements, and stakeholder expectations.</p>",
      },
    ] satisfies WhyChooseItem[],
  },

  counterList: [
    {
      id: 1,
      value: 460,
      symbol: "+",
      label: "Years of Combined <br> Experience",
    },
    {
      id: 2,
      value: 700,
      symbol: "+",
      label: "Active Client <br> Relationships",
    },
    {
      id: 3,
      value: 95,
      symbol: "%",
      label: "Client Retention <br> Rate",
    },
    {
      id: 4,
      value: 11000,
      symbol: "+",
      label: "Engagements Successfully <br> Delivered ",
    },
  ] satisfies CounterItem[],

  explore_service: {
    title: "<span>Explore</span> Related Audit Services",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Financial Statement  <br/>Audit",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "DIFC & DFSA Regulated  <br/>Audits",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "ADGM Regulated <br/>Audit",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },

  cta: {
    title: "Discuss an Agreed-Upon Procedures Engagement",
    description:
      "<p>If you require verification on specific matters for regulatory, banking, or stakeholder purposes, our team can help define and execute an AUP engagement with clarity.</p>",
    button: {
      label: "Get in Touch",
      link: "/",
    },
    images: {
      overlay: "/images/aupCta-desk.png",
      overlayMobile: "/images/ctaAgreed.png",
    },
  } satisfies CtaData,

  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What's the difference between an AUP and an audit?",
        description: `
                        <p>An audit provides an opinion on whether financial statements are free from material misstatement. An AUP engagement performs specific agreed procedures and reports factual findings only - no opinion or assurance is provided. </p>
                        `,
      },
      {
        id: 2,
        title: "Can I rely on an AUP report for decision-making? ",
        description: `
                        <p>AUP reports present factual findings based on procedures performed. Users must evaluate the findings and draw their own conclusions based on their specific needs.</p>
                        `,
      },
      {
        id: 3,
        title: "Is an AUP report suitable for regulatory submissions? ",
        description: `
                        <p>Yes, many UAE regulators (including DFSA and FSRA) specifically require AUP reports for certain regulatory returns and compliance verifications.</p>
                        `,
      },
      {
        id: 4,
        title: "How much does an AUP engagement cost?",
        description: `
                        <p>Fees depend on the scope, complexity, and number of procedures agreed. We provide transparent fee estimates after understanding your specific requirements. </p>
                        `,
      },
      {
        id: 5,
        title: "How long does an AUP engagement take? ",
        description: `
                        <p>Typical engagements are completed within 2-4 weeks, though timelines vary based on scope and information availability.</p>
                        `,
      },
     
    ] satisfies FaqItem[],
  },

  insights: {
    title: "Our Insights",
    items: blogData.slice(0, 4).map((blog) => ({
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
  title: "AUP Audit Services in UAE | DFSA & Regulatory Compliance | KPI   ",
  description:
    "Expert Agreed-Upon Procedures (AUP) engagements for UAE  businesses. Factual findings, scope-aligned reporting for stakeholders and authorities.. ",
};

export default function page() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <MeydanKeyBenefits data={localData.keyBenefits} />
      <CorporateServicesUaeFormationProcess
        variant="aup"
        data={localData.formationProcess}
      />
      <DocumentRequired data={localData.document_required_data} variant="aup" />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="aup"
      />
      <HomeCounter data={localData.counterList} variant="aup"/>
      <RiskExploreService variant="difc" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
