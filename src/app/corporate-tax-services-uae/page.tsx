import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import VatGuidance, {
  VatGuidanceData,
} from "@/components/features/vat-services/VatGuidance";
import CorporateTaxUae, {
  CorporateTaxUaeData,
} from "@/components/features/corporate-tax-services/CorporateTaxUae";

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
};

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  description?: string;
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

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
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
      desktopPath: "/images/corporateTax-inner-hero-desktop.svg",
      mobilePath: "/images/corporateTax-inner-hero-mobile.svg",
      alt: "Financial Statement Audits Built for Accountability",
    },
    title: "Financial Statement Audits Built for Accountability",
    description:
      "<p>Financial statement audits are relied upon by regulators, banks, investors, and shareholders. Accuracy, independence, and documentation matter - not just for compliance, but for credibility. KPI delivers independent financial statement audits designed to meet statutory requirements and withstand external scrutiny across the UAE.</p>",
  } satisfies HeroData,
  vatGuidance: {
    title: "What Corporate Tax Means for UAE Businesses",
    description:
      "Corporate Tax in the UAE applies to taxable profits earned by UAE-based entities and certain foreign businesses with a UAE presence.",
    highlighted_text:
      "For many organisations, the challenge is not the rate, but assessing:",
    service_list: [
      "Whether corporate tax applies to your specific entity and activities",
      "Which income is taxable, exempt, or qualifies for relief",
      "How group structures free zone status, and transactions are assessed",
      "What compliance looks like in practice - registration, filing deadlines, transfer pricing documentation",
      "Getting this wrong creates exposure - penalties, loss of free zone tax benefits that are difficult to unwind later.",
    ],
    media: {
      path: "/images/financial-support.jpg",
      alt: "VAT Guidance & Support",
    },
  } satisfies VatGuidanceData,
  document_required_data: {
    title: "Scope of Corporate Tax",
    description:
      "<p>Determining whether corporate tax applies, and how it applies depends on legal form, activity, income type, and group structure. Each case requires assessment - assumptions based on legacy tax-free status no longer hold. </p><p>Corporate Tax in the UAE may apply to:</p>",
    items: [
      {
        id: 1,
        text: "UAE mainland companies",
      },
      {
        id: 2,
        text: "Free zone entities, subject to qualifying conditions",
      },
      {
        id: 3,
        text: "UAE branches of foreign companies",
      },
      {
        id: 4,
        text: "Permanent establishments of non-resident entities",
      },
      {
        id: 5,
        text: "Certain individuals conducting business activities",
      },
      {
        id: 6,
        text: "Groups with UAE-linked income or operations",
      },
    ],
    media: {
      path: "/images/corporate-tax-services-document.jpg",
      alt: "financial-services-document",
    },
  } satisfies DocumentRequiredData,
  riskAdvisory: {
    title: "Corporate Tax Exemptions and Reliefs",
    description:
      " <p>Certain entities and income streams may be exempt from UAE corporate tax, including →</p> <p>Eligibility for these must be assessed carefully. Incorrect assumptions around exemptions are among the most common causes of corporate tax exposure.</p>",
    highlightsText: "",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "Qualifying free zone income",
      },
      {
        id: 2,
        slNo: 2,
        description: "Government and government-controlled entities",
      },
      {
        id: 3,
        slNo: 3,
        description: "Certain investment and holding structures",
      },
      {
        id: 4,
        slNo: 4,
        description: "Certain pension funds and investment funds",
      },
    ],
  } satisfies RiskAdvisoryDta,
  document_required_data_2: {
    title: "Transfer Pricing Under UAE Corporate Tax",
    description:
      "<p>The UAE corporate tax regime introduces formal transfer pricing requirements aligned with international standards. Businesses with related-party transactions must ensure:</p>",
    items: [
      {
        id: 1,
        text: "Arm’s length pricing",
      },
      {
        id: 2,
        text: "Proper transaction documentation",
      },
      {
        id: 3,
        text: "Transfer pricing policies aligned with operations",
      },
    ],
    media: {
      path: "/images/corporate-tax-document-required.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "supports transfer pricing analysis, documentation, reducing risk and ensuring compliance.",
  } satisfies DocumentRequiredData,
  services: {
    title: "Corporate Tax Compliance & Filing",
    description:
      "UAE corporate tax compliance goes beyond simply submitting a return. Businesses must:",
    items: [
      {
        id: 1,
        media: {
          path: "/images/corporate-tax-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Maintain accurate financial records",
      },
      {
        id: 2,
        media: {
          path: "/images/corporate-tax-servive-2.svg",
          alt: "Commercial License",
        },
        title: "Determine taxable income correctly",
      },
      {
        id: 3,
        media: {
          path: "/images/corporate-tax-servive-3.svg",
          alt: "Tax Compliance",
        },
        title: "Prepare transfer pricing documentation if thresholds are met",
      },
      {
        id: 4,
        media: {
          path: "/images/corporate-tax-servive-4.svg",
          alt: "Tax Compliance",
        },
        title: "Apply adjustments and exclusions appropriately",
      },
      {
        id: 5,
        media: {
          path: "/images/corporate-tax-servive-5.svg",
          alt: "Tax Compliance",
        },
        title: "File corporate tax returns within prescribed timelines",
      },
      {
        id: 6,
        media: {
          path: "/images/corporate-tax-servive-6.svg",
          alt: "Tax Compliance",
        },
        title: "Retain documentation supporting tax positions",
      },
    ] satisfies ServiceItem[],
    footer_description:
      "We support clients through the full compliance lifecycle - registration, calculation, filing, and readiness, reducing errors, rework, and regulatory risk.",
  },
  mainlandBusiness: {
    title: "How KPI Supports Corporate Tax",
    description:
      "<p>Our corporate tax advisory is designed for businesses that need more than just form-filling.</p>",
    highlightsTitle: "We support organisations through:",
    highlights: [
      "Corporate tax impact assessments",
      "Structuring and restructuring advisory",
      "Free zone and group tax analysis",
      "Corporate tax registration & return preparation",
      "Transfer pricing advisory and documentation",
      "Ongoing advisory as regulations evolve",
    ],
    footerDescription:
      "Our role is to ensure corporate tax positions are clear, deliberate, and defensible. No over-engineering, no generic templates.",
    image: {
      path: "/images/corporate-tax-business.jpg",
      alt: "Meydan",
    },
  } satisfies MainlandBusinessData,
  whyChoose: {
    title: "Why Leading Organisations Work with KPI Group",
    sub_title: "",
    description: "",
    items: [
      {
        id: 1,
        title: "Judgement-led advisory",
        description:
          "<p>We focus on how corporate tax rules are applied in practice considering the facts and circumstances, not just how they are written or interpreted.</p>",
      },
      {
        id: 2,
        title: "Structural perspective",
        description:
          "<p>Corporate tax is assessed in the context of ownership, operations, and transactions, not in isolation.</p>",
      },
      {
        id: 3,
        title: "Regulatory familiarity",
        description:
          "<p>We bring extensive experience working across mainland, free zone, and complex group structures in the UAE.</p>",
      },
      {
        id: 4,
        title: "Measured delivery",
        description:
          "<p>No over-engineering. No unnecessary complexity. Just positions built to last.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  cta: {
    title: "Discuss Corporate Tax with Confidence",
    description:
      "<p>When corporate tax affects your business structure, pricing, or reporting, early decisions are critical. KPI helps organisations establish corporate tax positions that remain credible today, and defensible in future.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/corporate-tax-cta-overlay.svg",
      overlayMobile: "/images/corporate-tax-cta-overlay-mobile.svg",
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
  tax_uae: {
    title: "UAE Corporate Tax Rates",
    tax_list: [
      {
        title: "Under the UAE corporate tax regime:",
        items: [
          "0% on taxable income up to AED 375,000",
          "9% on taxable income above AED 375,000",
          "15% effective rate for large multinational groups under OECD Pillar Two (Domestic Minimum Top-up Tax)",
        ],
      },
      {
        title: "Small Business Relief:",
        description:
          "Businesses with revenue of AED 3 million or less may elect for Small Business Relief, which treats taxable income as zero. This relief is temporary (available until 31 December 2026) and requires annual election. Only available to UAE resident persons.",
      },
    ],
  } satisfies CorporateTaxUaeData,
  tax_uae_2: {
    title: "Corporate Tax and Free Zones",
    tax_list: [
      {
        title:
          "Free zone entities are not automatically exempt from UAE corporate tax. The corporate tax treatment depends on:",
        items: [
          "Whether the entity qualifies as a Qualifying Free Zone Person",
          "The nature of income earned (qualifying vs non-qualifying)",
          "Compliance with substance and regulatory conditions.",
        ],
      },
      {
        title: "KPI Group helps free zone businesses:",
        items: [
          "Assess qualifying status",
          "Identify taxable vs qualifying income",
          "Align operational and contractual structures to maintain QFZP status",
          "Avoid unintended loss of tax benefits",
        ],
      },
    ],
  } satisfies CorporateTaxUaeData,
};

export const metadata: Metadata = {
  title: "Corporate Tax Advisory Services in the UAE | KPI Group",
  description:
    "KPI offers independent corporate tax advisory and compliance support for UAE businesses. Structure, assess, and comply with confidence under the UAE Corporate Tax regime.",
};

export default function CorporateTaxUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <VatGuidance
        data={localData.vatGuidance}
        variant="Financial-Statement-Audit"
      />
      <CorporateTaxUae data={localData.tax_uae} variant="blue" />
      <DocumentRequired data={localData.document_required_data} />
      <RiskAdvisory data={localData.riskAdvisory} />
      <CorporateTaxUae data={localData.tax_uae_2} variant="yellow" />
      <DocumentRequired
        data={localData?.document_required_data_2}
        variant="dfza"
      />
      <CorporateServicesUaeServices
        data={localData?.services}
        variant="saifz"
      />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
