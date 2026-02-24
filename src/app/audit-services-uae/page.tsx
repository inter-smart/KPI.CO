import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import VatRelatedTax, {
  VatRelatedTaxData,
} from "@/components/features/vat-services/VatRelatedTax";
import HomeCounter from "@/components/features/home/HomeCounter";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";

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
  structure_list: {
    id: number;
    title: string;
    description: string;
  }[];
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

export type MediaItem = {
  path: string;
  alt: string;
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
      desktopPath: "/images/regulatory-innerbanner-desktop.svg",
      mobilePath: "/images/regulatory-innerbanner-mobile.svg",
      alt: "Audit That Stands up to Regulatory Scrutiny ",
    },
    title: "Audit That Stands up to Regulatory Scrutiny ",
    description:
      "<p>When compliance and credibility audit is not a checkbox exercise. KPI provides independent audit and assurance services designed for businesses operating in growth-oriented environments where expectations are high and scrutiny is real.</p>",
  } satisfies HeroData,
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
        description: "Stakeholders expect transparency and consistency",
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
  document_required_data: {
    title: "Tone at the Top ",
    description:
      "<p> At KPI, independence isn’t optional; it’s a discipline. Professional skepticism not only drives how we think, but also every audit, shaping how we plan, execute, and conclude engagements.</p> <p>We never compromise on audit quality. When faced with decisions that could dilute standards, we prioritize integrity over convenience. This discipline guides which engagements we accept and ensures audit remains separate from advisory and technology services, keeping every opinion objective, defensible, and regulator ready.</p>",
    items: [],
    media: {
      path: "/images/audit-img.jpg",
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  services: {
    title: "Why Audit Becomes Critical as Organizations Grow",
    description:
      "As companies scale, expand into free zones, or operate under formal regulatory and governance frameworks:",
    items: [
      {
        id: 1,
        media: {
          path: "/images/regulatory-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Regulatory compliance assessments",
        description:
          "Review of existing compliance frameworks against applicable authority requirements.",
      },
      {
        id: 2,
        media: {
          path: "/images/regulatory-servive-2.svg",
          alt: "Industrial License",
        },
        title: "Compliance framework design & enhancement",
        description:
          "Support in developing policies, procedures, and controls aligned with regulatory expectations.",
      },
      {
        id: 3,
        media: {
          path: "/images/regulatory-servive-3.svg",
          alt: "Industrial License",
        },
        title: "Licensing & regulatory readiness support",
        description:
          "Preparation for regulatory applications, renewals, and inspections",
      },
      {
        id: 4,
        media: {
          path: "/images/regulatory-servive-4.svg",
          alt: "Industrial License",
        },
        title: "Remediation of compliance gaps",
        description:
          "Structured support to address issues identified through audits, inspections, or reviews.",
      },
      {
        id: 5,
        media: {
          path: "/images/regulatory-servive-5.svg",
          alt: "Industrial License",
        },
        title: "Ongoing compliance advisory",
        description:
          "Practical guidance for evolving regulatory obligations and operational changes. Each engagement is scoped based on jurisdiction, regulatory exposure, and organisational maturity.",
      },
    ] satisfies ServiceItem[],
  },
  
  whyChoose: {
    title: "How KPI Approaches Regulatory & Compliance Advisory",
    description:
      "<p>A regulator-aware approach focused on clarity and accountability.</p>",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Regulatory interpretation with context",
        description:
          "<p>Understanding how rules are applied in practice, not just how they are written.</p>",
      },
      {
        id: 2,
        title: "Risk-based prioritisation",
        description:
          "<p>Focusing on compliance areas that carry real regulatory and reputational consequences.</p>",
      },
      {
        id: 3,
        title: "Clear documentation and evidence",
        description:
          "<p>Ensuring policies, processes, and controls are properly documented and defensible.</p>",
      },
      {
        id: 4,
        title: "Practical implementation support",
        description:
          "<p>Recommendations that management can realistically implement and maintain</p>",
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
    title: "Related Risk Services",
    tax_list: [
      {
        id: 1,
        title: "Enterprise Risk Management",
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
        title: "Internal Audit Services",
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
        title: "Standard Operating Procedures",
        link: {
          url: "/einvoicing-solutions-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "eInvoicing Solution",
        },
      },
    ],
  } satisfies VatRelatedTaxData,
  cta: {
    title: "Discuss Your Regulatory & <br> Compliance Requirements",
    description:
      "If regulatory obligations are becoming harder to interpret, manage, or defend, KPI can support your organisation in strengthening compliance frameworks before issues escalate.",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/regulatory-cta-overlay.svg",
      overlayMobile: "/images/regulatory-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  insights: {
    title: "Our Insights",
    items: blogData.slice(0, 4).map((blog) => ({
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
  title: "Audit Firms in Dubai | External & Regulatory Audit Services UAE ",
  description:
    "Independent audit and assurance services for UAE businesses operating in regulated, growth-oriented environments,  delivered in line with ISA and IFRS ",
};

export default function RegulatoryComplianceAdvisoryUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} variant="saifz" />
      <DocumentRequired
        data={localData?.document_required_data}
        variant="regulatory"
      />
      <RiskAdvisory data={localData.riskAdvisory} />
      {/* <RiskOrganisation data={localData?.document_required_data} /> */}
      <CorporateServicesUaeServices
        data={localData?.services}
        variant="saifz"
      />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="sop"
      />
      <HomeCounter data={localData.counterList} />
      <VatRelatedTax data={localData.vatRelatedTax} />
      <CorporateServicesUaeCta data={localData.cta} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
