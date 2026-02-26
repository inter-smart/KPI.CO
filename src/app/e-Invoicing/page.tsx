import InnerHero from "@/components/common/InnerHero";
import HomeCounter from "@/components/features/home/HomeCounter";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
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

export type ProcessStep = {
  id: number;
  title: string;
  inner_title?: string;
  description: string;
};

export type MeydanFreeZoneData = {
  title: string;
  description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list?: MeydanStructureItem[];
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

export type InsightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  media: MediaItem;
  slug: string;
};

export type MediaItem = {
  path: string;
  alt: string;
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/e-invoicing-banner.svg",
      mobilePath: "/images/e-invoicing-banner-mob.svg",
      alt: "E-Invoicing That Strengthens Compliance and Commercial Performance",
    },
    title: "E-Invoicing That Strengthens Compliance and Commercial Performance",
    description:
      "<p>E-invoicing is becoming a core part of the UAE tax and reporting landscape. Organisations are required to issue, transmit, and retain invoices in structured digital formats aligned with regulatory standards. KPI Group supports organisations in preparing for e-invoicing by aligning tax requirements, operational processes, and system controls ensuring compliance while improving accuracy, transparency, and efficiency across invoicing and VAT reporting.</p>",
  } satisfies HeroData,

  mainlandBusiness: {
    title: "What E-Invoicing Changes for Businesses",
    description:
      "<p>E-invoicing is not only a technology change. It directly impacts how VAT is calculated, reported, validated, and reviewed by authorities.</p> <p>Under the UAE framework, invoices must follow prescribed digital formats, contain validated tax data, and be securely transmitted and archived. This increases regulatory visibility and reduces tolerance for manual errors, inconsistent treatment, or weak documentation.</p> <p>Organisations that prepare early are better positioned to manage compliance, reduce operational friction, and maintain control over tax reporting as requirements evolve.</p>",
    highlightsTitle: "",
    highlights: [],
    footerDescription: "",
    image: {
      path: "/images/mainland-busnes.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,

  formationProcess: {
    title: "E-Invoicing Advisory & Readiness Support",
    sub_title: null,
    description:
      "Our e-invoicing support is advisory-led, with a focus on tax outcomes, control integrity, and regulatory defensibility.",
    steps: [
      {
        id: 1,
        title: "E-Invoicing Readiness Assessment",
        inner_title: "E-Invoicing Readiness Assessment",
        description:
          "<p>Review of current invoicing, billing, and accounting processes against UAE e-invoicing requirements.</p>",
      },
      {
        id: 2,
        title: "VAT & Tax Data Alignment",
        inner_title: "VAT & Tax Data Alignment",
        description:
          "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
      },
      {
        id: 3,
        title: "Process & Control Review",
        inner_title: "Process & Control Review",
        description:
          "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
      },
      {
        id: 4,
        title: "Regulatory Roadmap Planning",
        inner_title: "Regulatory Roadmap Planning",
        description:
          "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
      },
      {
        id: 5,
        title: "Ongoing Compliance Advisory",
        inner_title: "Ongoing Compliance Advisory",
        description:
          "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
      },
    ] satisfies ProcessStep[],
  },

  meydanFreeZone: {
    title: "",
    free_zone_list: [
      {
        id: 1,
        title: "Business Value Beyond Compliance",
        description: "How E-Invoicing Improves Accuracy and Control",
        highlightsText:
          "When implemented with the right structure and controls, e-invoicing delivers measurable operational benefits:",
        zone_list: [
          "Reduced manual invoice processing and data entry",
          "Improved accuracy and consistency of VAT reporting",
          "Stronger audit trails and transaction traceability",
          "Better visibility into billing cycles and cash flows",
          "Lower exposure to filing errors and regulatory challenges",
        ],
        footer_description:
          "In practice, e-invoicing functions as a governance and efficiency mechanism - supporting control, transparency, and decision-making alongside compliance.",
      },
    ],
  } satisfies MeydanFreeZoneData,

  whyChoose: {
    title: "Why Organisations Work With KPI for E-Invoicing Advisory",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Regulatory clarity",
        description:
          "<p>Advice grounded in how UAE authorities assess tax data and reporting in practice. </p>",
      },
      {
        id: 2,
        title: "Tax-first perspective",
        description:
          "<p>Alignment of e-invoicing with VAT treatment, filings, and audit readiness.</p>",
      },
      {
        id: 3,
        title: "Process-led approach",
        description:
          "<p>Focus on how invoice data flows across systems, people, and controls & not just technical outputs.</p>",
      },
      {
        id: 4,
        title: "Scalable support",
        description:
          "<p>Advisory designed to remain effective as transaction volumes, entities, and regulatory requirements expand.</p>",
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

  cta: {
    title: "Discuss Your E-Invoicing Readiness",
    description:
      "<p>Whether you are assessing preparedness, planning implementation, or aligning VAT processes with digital invoicing requirements, KPI Group can support you with clarity, structure, and regulatory confidence.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/cta-invoing.svg",
      overlayMobile: "/images/spv-banner-mobile.jpg",
    },
  } satisfies CtaData,

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
  title: "UAE E-Invoicing Advisory & Compliance Support | KPI  ",
  description:
    "Advisory and readiness support for UAE e-invoicing mandates. Align tax, systems, and controls with regulatory requirements and business efficiency. ",
};

export default function page() {
  return (
    <>
      <InnerHero data={localData.hero} variant="e-invoicing" />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeFormationProcess
        variant="mainland"
        data={localData.formationProcess}
      />
      <MeydanFreeZone variant="difc" data={localData.meydanFreeZone} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <HomeCounter data={localData.counterList} />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />

      <HomeOurInsights data={localData.insights} />
    </>
  );
}
