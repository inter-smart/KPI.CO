import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import { blogData } from "@/data/blogData";
import VatGuidance, {
  VatGuidanceData,
} from "@/components/features/vat-services/VatGuidance";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import VatRelatedTax, {
  VatRelatedTaxData,
} from "@/components/features/vat-services/VatRelatedTax";
import HomeCounter from "@/components/features/home/HomeCounter";
import type { CounterItem } from "@/app/page";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";

export type InsightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  media: MediaItem;
  slug: string;
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

export type FaqItem = {
  id: number;
  title: string;
  description: string;
};

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: number;
  step?: string;
  title: string;
  inner_title?: string;
  sub_title: string;
  description: string;
};

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/financial-inner-hero-desktop.svg",
      mobilePath: "/images/financial-inner-hero-mobile.svg",
      alt: "Financial Statement Audits Built for Accountability",
    },
    title: "Financial Statement Audits Built for Accountability",
    description:
      "<p>Financial statement audits are relied upon by regulators, banks, investors, and shareholders. Accuracy, independence, and documentation matter - not just for compliance, but for credibility. KPI delivers independent financial statement audits designed to meet statutory requirements and withstand external scrutiny across the UAE.</p>",
  } satisfies HeroData,
  vatGuidance: {
    title: "Why Financial Statement Audits Matter",
    description:
      "As organisations grow, audits are no longer viewed only by management. Financial statements are relied upon by external parties who expect consistency, transparency, and regulatory alignment.",
    highlighted_text:
      "A financial statement audit is commonly required or relied upon by:",
    service_list: [
      "Regulatory authorities",
      "Banks and financial institutions",
      "Partners and shareholders",
      "Investors and other stakeholders",
    ],
    footer_highlighted_text:
      "At this stage, audit quality directly impacts trust, decision-making, and risk exposure.",
    media: {
      path: "/images/financial-support.jpg",
      alt: "VAT Guidance & Support",
    },
  } satisfies VatGuidanceData,
  riskAdvisory: {
    title: "Scope of Our Financial Statement Audits",
    description:
      " <p>Our audits are conducted in line with applicable auditing standards and UAE regulatory requirements, and typically include</p>",
    highlightsText:
      "The outcome is a clear, defensible audit opinion supported by proper documentation.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "Examination of financial statements and disclosures",
      },
      {
        id: 2,
        slNo: 2,
        description:
          "Assessment of accounting policies and significant estimates ",
      },
      {
        id: 3,
        slNo: 3,
        description:
          "Verification of balances, transactions, and supporting documentation ",
      },
      {
        id: 4,
        slNo: 4,
        description: "Evaluation of controls relevant to financial reporting",
      },
    ],
  } satisfies RiskAdvisoryDta,
  formationProcess: {
    title: "Our Audit Approach",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        title: "Planning & Risk Assessment",
        sub_title: "Planning & Risk Assessment",
        description:
          "<p>Understanding the business, its environment, and areas of higher audit risk.</p>",
      },
      {
        id: 2,
        title: "Audit Execution",
        sub_title: "Audit Execution",
        description:
          "<p>Evaluating whether controls exist, appropriately designed, operate effectively, and are properly documented.</p>",
      },
      {
        id: 3,
        title: "Audit Reporting",
        sub_title: "Audit Reporting",
        description:
          "<p>Focusing on risks that carry regulatory, financial, or reputational consequences. </p>",
      },
      {
        id: 4,
        title: "Completion & Sign-off",
        sub_title: "Completion & Sign-off",
        description:
          "<p>Suggest practical suggestion that management can implement, rather than an abstract observation.</p>",
      },
    ] satisfies ProcessStep[],
  },
  document_required_data: {
    title: "Financial Statement Audits in Liquidation Scenarios",
    description:
      "<p>Financial statement audits may also be required during company liquidation or winding-up processes.</p><p>In such cases, audits support:</p>",
    items: [
      {
        id: 1,
        text: "Verification of financial records",
      },
      {
        id: 2,
        text: "Regulatory and authority requirements",
      },
      {
        id: 3,
        text: "Transparency for shareholders, creditors, and liquidators",
      },
    ],
    ftr_description:
      "<p>KPI provides audit support aligned with liquidation and closure requirements, ensuring financial information is properly reviewed and defensible.</p>",
    media: {
      path: "/images/financial-services-document.jpg",
      alt: "financial-services-document",
    },
  } satisfies DocumentRequiredData,
  whyChoose: {
    title: "Why Organisations Choose KPI for Financial Statement Audits",
    items: [
      {
        id: 1,
        title: "Regulatory familiarity",
        description:
          "<p>Experience working within UAE regulatory frameworks, including mainland and free zone entities.</p>",
      },
      {
        id: 2,
        title: "Balanced professional judgement",
        description:
          "<p>Independent where it matters, practical where appropriate — without compromising audit integrity.</p>",
      },
      {
        id: 3,
        title: "Clear communication",
        description:
          "<p>Findings explained clearly to management and stakeholders, without ambiguity.</p>",
      },
      {
        id: 4,
        title: "Professional accountability",
        description:
          "<p>Audits delivered with discipline, confidentiality, and adherence to professional standards. </p>",
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
    title: "Explore Related Audit Services",
    tax_list: [
      {
        id: 1,
        title: "Agreed-Upon Procedures (AUP)",
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
        title: "DIFC & DFSA Regulated Audits",
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
        title: "ADGM Regulated Audits",
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
    title: "Discuss Your Financial Statement Audit",
    description:
      "<p>Whether you are preparing for a statutory audit, regulatory review, or audit support during liquidation, our audit team can help you navigate requirements with clarity and confidence. </p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/financial-cta-overlay.svg",
      overlayMobile: "/images/financial-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    button: {
      label: "Learn More",
      link: "/contact",
      target: "_blank",
    },
    faq_list: [
      {
        id: 1,
        title: "What is a financial statement audit?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title:
          "Who is required to have a financial statement audit in the UAE?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title:
          "What standards are used for financial statement audits in the UAE?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "How long does a financial statement audit take?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title:
          "Is a financial statement audit different from an internal audit?",
        description: `
                    <p>Yes. A financial statement audit is an independent, statutory or externally relied-upon engagement focused on expressing an audit opinion on financial statements. An internal audit focuses on evaluating internal controls, risk management, and governance processes and is typically conducted for management and board assurance rather than statutory reporting.</p>
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
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export default function VatServicesUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <VatGuidance
        data={localData.vatGuidance}
        variant="Financial-Statement-Audit"
      />
      <RiskAdvisory data={localData.riskAdvisory} />
      <CorporateServicesUaeFormationProcess
        variant="Vat-Services"
        data={localData.formationProcess}
      />
      <DocumentRequired
        data={localData.document_required_data}
        variant="dfza"
      />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <HomeCounter data={localData.counterList} />
      <VatRelatedTax data={localData.vatRelatedTax} />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
