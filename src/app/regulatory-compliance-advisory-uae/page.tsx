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

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  description: string;
  highlightsText: string;
  zone_list: string[];
  footer_description?: string;
};

export type MeydanFreeZoneData = {
  title: string;
  description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list?: MeydanStructureItem[];
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
      alt: "Expert SOP Consulting & Development in UAE",
    },
    title: "Regulatory Compliance That Stands Up To Review",
    description:
      "<p>Regulatory compliance is not just about filing requirements. It is about demonstrating control, governance, and accountability when regulators, auditors, or stakeholders ask questions. KPI Group supports organisations in meeting regulatory and compliance obligations across UAE jurisdictions with structured, defensible, and practical advisory support.</p>",
  } satisfies HeroData,
  riskAdvisory: {
    title: "Why Regulatory & <br> Compliance Advisory Matters",
    description:
      " <p>As organisations operate in regulated or semi-regulated environments, compliance expectations increase, often faster than internal processes evolve.</p> <p>Regulatory and compliance risks commonly arise when organisations →</p><div>At this stage, compliance gaps are rarely intentional - they are structural.</div>",
    highlightsText: "",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "Operate under multiple authorities or free zones",
      },
      {
        id: 2,
        slNo: 2,
        description: "Face licensing, reporting, or inspection requirements",
      },
      {
        id: 3,
        slNo: 3,
        description: "Rely on informal or undocumented compliance <br> processes",
      },
      {
        id: 4,
        slNo: 4,
        description: "Experience repeated regulatory queries or audit <br> findings",
      },
      {
        id: 5,
        slNo: 5,
        description: "Underestimate the documentation regulators expect",
      },
    ],
  } satisfies RiskAdvisoryDta,
  document_required_data: {
    title: "What Regulatory & Compliance Advisory Means At KPI ",
    description:
      "<p>Practical Compliance Support. Aligned with Regulatory Expectations.</p><p>KPI Regulatory & Compliance Advisory services focus on helping organisations understand, implement, and evidence compliance requirements relevant to their operations.</p><p>We support management with:</p>",
    items: [
      {
        id: 1,
        text: "Interpretation of regulatory and authority requirements",
      },
      {
        id: 2,
        text: "Design and assessment of compliance frameworks and controls",
      },
      {
        id: 3,
        text: "Preparation for regulatory inspections, audits, and reviews",
      },
      { id: 4, text: "Addressing identified compliance gaps and weaknesses" },
      {
        id: 5,
        text: "Ongoing compliance support aligned with governance needs",
      },
    ],
    media: {
      path: "/images/regulatory-document-required.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "Our role is not to create unnecessary complexity. It is to help organisations meet expectations with clarity and discipline.",
  } satisfies DocumentRequiredData,
  services: {
    title: "Our Regulatory & Compliance Advisory Services",
    description:
      "Our services are designed to support organisations operating across mainland and free zone jurisdictions, including <br> regulated environments.",
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
  meydanFreeZone: {
    title: "",
    free_zone_list: [
      {
        id: 1,
        title: "When Organisations Engage Compliance Advisory",
        description:
          "Regulatory & compliance advisory is most effective when engaged proactively, not reactively.",
        highlightsText: "Common triggers include:",
        zone_list: [
          "Preparation for regulatory inspection or authority review",
          "New licensing or regulatory classification",
          "Findings from internal or external audits",
          "Board or investor concerns around compliance oversight",
          "Expansion into regulated or free zone environments",
        ],
        footer_description:
          "Early engagement allows organisations to address issues privately, before they become formal regulatory matters.",
      },
    ],
  } satisfies MeydanFreeZoneData,
  whyChoose: {
    title: "How KPI Approaches Regulatory & Compliance Advisory",
    description:
      "<p>A regulator-aware approach focused on clarity and accountability.</p>",
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
      {
        id: 4,
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
  title: "Regulatory & Compliance Advisory Services in the UAE | KPI Group ",
  description:
    "KPI provides regulatory and compliance advisory services for UAE organisations. Practical support to meet authority requirements, strengthen controls, and reduce regulatory risk. ",
};

export default function RegulatoryComplianceAdvisoryUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} variant="saifz" />
      <RiskAdvisory data={localData.riskAdvisory} variant="difc" />
      <DocumentRequired
        data={localData?.document_required_data}
        variant="regulatory"
      />
      <CorporateServicesUaeServices
        data={localData?.services}
        variant="regulatory"
      />
      <MeydanFreeZone variant="difc" data={localData.meydanFreeZone} />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="regulatory"
      />
      <HomeCounter data={localData.counterList} />
      <VatRelatedTax data={localData.vatRelatedTax} />
      <CorporateServicesUaeCta data={localData.cta} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
