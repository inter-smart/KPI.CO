import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeCounter from "@/components/features/home/HomeCounter";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import VatRelatedTax, { 
  VatRelatedTaxData,
} from "@/components/features/vat-services/VatRelatedTax";

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

export type RiskAdvisoryDta = {
  title: string;
  description: string;
  highlightsText: string;
  advisoryItems: {
    id: number;
    slNo: number;
    description: string;
  }[];
  structure_list: {
    id: number;
    title: string;
    description: string;
  }[];
};

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type MediaItem = {
  path: string;
  alt: string;
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

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
};

export type CounterItem = {
  id: number;
  value: number;
  symbol?: string;
  label: string;
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
      desktopPath: "/images/audit-banner.svg",
      mobilePath: "/images/audit-banner-mob.svg",
      alt: "Audit That Stands up to Regulatory Scrutiny ",
    },
    title: "Audit That Stands up to Regulatory Scrutiny ",
    description:
      "<p>When compliance and credibility audit is not a checkbox exercise. KPI provides independent audit and assurance services designed for businesses operating in growth-oriented environments where expectations are high and scrutiny is real.</p>",
  } satisfies HeroData,
  document_required_data: {
    title: "Tone at the Top ",
    description:
      "<p>At KPI, independence isn’t optional; it’s a discipline. Professional skepticism not only drives how we think, but also every audit, shaping how we plan, execute, and conclude engagements.</p> <p>We never compromise on audit quality. When faced with decisions that could dilute standards, we prioritize integrity over convenience. This discipline guides which engagements we accept and ensures audit remains separate from advisory and technology services, keeping every opinion objective, defensible, and regulator ready.</p>",
    items: [],
    media: {
      path: "/images/audit-img.jpg",
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  riskAdvisory: {
    title: "Why Audit Becomes <br/>Critical as Organizations <br/> Grow",
    description: " ",
    highlightsText:
      "As companies scale, expand into free zones, or operate under formal regulatory and governance frameworks:",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "Financial statements face deeper scrutiny",
      },
      {
        id: 2,
        slNo: 2,
        description: "Regulatory obligations increase",
      },
      {
        id: 3,
        slNo: 3,
        description: "Stakeholders expect transparency and <br/> consistency",
      },
      {
        id: 4,
        slNo: 4,
        description: "Errors carry reputational and legal consequences",
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "At this stage, audit is no longer about compliance alone - it becomes about confidence. Confidence in the numbers, the process, and the judgement behind them.",
      },
    ],
  } satisfies RiskAdvisoryDta,
  audit_document_data: {
    title: "What KPI Stands For",
    description:
      "<p><b>Independent Assurance, Delivered with Regulatory Discipline</b/></p><p>KPI’s Audit & Assurance practice supports organizations that require:</p>",
    items: [
      { id: 1, text: "Statutory audits aligned with UAE regulations" },
      { id: 2, text: "Independent assurance for stakeholders and authorities" },
      { id: 3, text: "Clear, defensible reporting without ambiguity" },
    ],
    media: {
      path: "/images/auditservices-document-required.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "<p>Our audit methodology is aligned with International Standards on Auditing (ISA) and supported by a firm-wide quality framework consistent with ISQM requirements.</p><p>Our role is not to overcomplicate audit; it is to get it right, document it properly, and stand by it. That responsibility sits at the core of our work.</p>",
  } satisfies DocumentRequiredData,
  services: {
    title: "Our Audit and Assurance Services",
    description:
      "We provide a structured range of audit services to meet statutory, regulatory, and stakeholder requirements:",
    items: [
      {
        id: 1,
        media: {
          path: "/images/audit-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Financial Statement Audit",
        description:
          "Independent examination of financial statements to ensure accuracy, compliance with applicable standards, and reliability for stakeholders.",
      },
      {
        id: 2,
        media: {
          path: "/images/audit-servive-2.svg",
          alt: "Industrial License",
        },
        title: "Agreed-Upon Procedures (AUP)",
        description:
          "Targeted reviews performed against specific procedures agreed with stakeholders, with factual findings reported without opinion.",
      },
      {
        id: 3,
        media: {
          path: "/images/audit-servive-3.svg",
          alt: "Industrial License",
        },
        title: "DIFC & DFSA Regulated Audits",
        description:
          "Audit services tailored for DIFC entities, delivered with an understanding of supervisory review standards.",
      },
      {
        id: 4,
        media: {
          path: "/images/audit-servive-4.svg",
          alt: "Industrial License",
        },
        title: "ADGM Regulated Audits",
        description:
          "Regulatory-compliant audits for ADGM-registered entities, conducted in line with ADGM frameworks and international standards.",
      },
    ] satisfies ServiceItem[],
    footer_description:
      "Each service is delivered with independence, professional scepticism, and a clear understanding of regulatory expectations. Aligned with ISA, supported by ISQM-based quality controls, and applied consistently across engagements",
  },
  mainlandBusiness: {
    title: "How KPI Approaches Audit",
    description: "<p><b>Disciplined without unnecessary disruption</b></p>",
    highlightsTitle: "Our audits are designed to be:",
    highlights: [
      "Risk-focused",
      "Evidence-driven",
      "Aligned to regulatory frameworks",
      "Respectful of management time",
    ],
    footerDescription:
      "From planning through reporting, we prioritise clarity, timeliness, underpinned by documented processes and professional judgement.",
    image: {
      path: "/images/audit-services-business.jpg",
      alt: "Meydan",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Technology-Enabled Audit Delivery",
    description:
      "<p>We use technology to handle the process, so our team can focus on the judgement. Our audit workflow is supported by integrated systems:</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/auditservice-1.svg",
          alt: "Incorrect VAT treatment",
        },
        title: "Engagement Management Platform",
        description:
          "<p>Manages proposals, engagement letters, quality documentation, and project delivery in one place.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/auditservice-2.svg",
          alt: "Missed input tax recovery ",
        },
        title: "Client Portal",
        description:
          "<p>Secure space for document exchange and progress monitoring. Everything is systematic and timestamped.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/auditservice-3.svg",
          alt: "System misalignment ",
        },
        title: "Audit Software",
        description:
          "<p>Handles workpapers, testing, judgement documentation, and signoffs ensuring consistency and audit trail integrity.</p>",
      },
    ] satisfies WhyBuildItem[],
    structure_list: [
      {
        id: 1,
        title: "Technology doesn't replace professional judgement.",
        description:
          "It removes administrative friction so we can focus on risk assessment, evidence evaluation, and clear reporting.",
      },
    ],
  },
  whyChoose: {
    title: "Why Organizations Trust KPI for Audit",
    description: "<p>Here’s where we’re diplomatic but strong:</p>",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Regulatory familiarity",
        description:
          "<p>Experience working within UAE regulatory frameworks, including free zones and regulated entities built through years of practical engagement</p>",
      },
      {
        id: 2,
        title: "Balanced judgement",
        description:
          "<p>Independent where it matters, practical where it helps, without compromising audit integrity.</p>",
      },
      {
        id: 3,
        title: "Clear communication",
        description:
          "<p>Findings presented clearly and directly, without jargon, ambiguity, or overstatement. </p>",
      },
      {
        id: 4,
        title: "Professional accountability",
        description:
          "<p>Audits delivered with discipline, confidentiality, and adherence to professional standards. We stand by our work.</p>",
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
  vatRelatedTax: {
    title: "Explore Our Audit Services",
    tax_list: [
      {
        id: 1,
        title: "Financial Statement Audit",
        link: {
          url: "/tax-advisory-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Tax Advisory",
        },
      },
      {
        id: 2,
        title: "Agreed-Upon Procedures",
        link: {
          url: "/corporate-tax-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Corporate Tax",
        },
      },
      {
        id: 3,
        title: "DIFC & DFSA Regulated Audit",
        link: {
          url: "/einvoicing-solutions-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "eInvoicing Solution",
        },
      },
      {
        id: 4,
        title: "ADGM Regulated Audit",
        link: {
          url: "/corporate-tax-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Corporate Tax",
        },
      },
    ],
  } satisfies VatRelatedTaxData,
  cta: {
    title: "Discuss Your Audit Requirements with Confidence",
    description:
      "Whether you are preparing for statutory audit, regulatory review, or stakeholder assurance, our audit team can help you navigate requirements with clarity.",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/audit-cta-overlay.svg",
      overlayMobile: "/images/audit-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is KPI’s approach to audit engagements?",
        description: `
                    <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                    `,
      },
      {
        id: 2,
        title: "What types of audit services does KPI provide?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                    `,
      },
      {
        id: 3,
        title: "Who needs an audit?",
        description: `
                    <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                    `,
      },
      {
        id: 4,
        title: "What accounting standards do you follow?",
        description: `
                    <p>Business visas are available for founders, partners, employees, and dependents. Requirements typically include a valid passport, trade license, and relevant approvals. KPI manages the process end-to-end to save time and ensure compliance.</p>
                    `,
      },
      {
        id: 5,
        title: "How long does an audit take?",
        description: `
                    <p>Audit timelines vary based on entity size, complexity, transaction volume, and quality of financial records. Typical audits range from 3-6 weeks for straightforward entities, while complex or regulated entities may require 6-10 weeks. We provide a detailed timeline during engagement planning.</p>
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
  title: "Audit Services in the UAE | Statutory & Regulated Audits | KPI",
  description:
    "Independent audit and assurance services for UAE businesses operating in regulated, growth-oriented environments,  delivered in line with ISA and IFRS ",
};

export default function AuditOverviewUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} variant="AuditServicesUae" />
      <DocumentRequired
        data={localData?.document_required_data}
        variant="AuditServicesUaes"
      />
      <RiskAdvisory data={localData.riskAdvisory} variant="AuditServicesUae" />
      <DocumentRequired
        data={localData.audit_document_data}
        variant="AuditServicesUae"
      />
      <CorporateServicesUaeServices
        data={localData?.services}
        variant="AuditServicesUae"
      />
      <MainlandBusiness
        data={localData.mainlandBusiness}
        variant="AuditServicesUae"
      />
      <CorporateServicesUaeWhyBuild
        data={localData.whyBuild}
        variant="AuditServicesUae"
      />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="AuditServicesUae"
      />
      <HomeCounter data={localData.counterList} />
      <VatRelatedTax data={localData.vatRelatedTax} variant="sop" />
      <CorporateServicesUaeCta
        data={localData.cta}
        variant="AuditServicesUae"
      />
      <CorporateServicesUaeFaq
        data={localData.corporate_faq_data}
        variant="AuditServicesUae"
      />
      <HomeOurInsights />
    </>
  );
}