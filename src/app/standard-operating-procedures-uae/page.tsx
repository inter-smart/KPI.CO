import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
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

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
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

export type ProcessStep = {
  id: number;
  step?: string;
  title: string;
  inner_title?: string;
  sub_title?: string;
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
      desktopPath: "/images/sop-innerbanner-desktop.svg",
      mobilePath: "/images/sop-innerbanner-mobile.svg",
      alt: "Expert SOP Consulting & Development in UAE",
    },
    title: "Expert SOP Consulting & Development in UAE",
    description:
      "<p>Streamline your business operations with KPI’s SOP development services. Simplify workflows, drive efficiency and maintain consistent quality across your business.</p>",
  } satisfies HeroData,
  document_required_data: {
    title: "What are Standard Operating Procedures?",
    description:
      "<p>A Standard Operating Procedure (SOP) is a set of detailed, written instructions that outline how to complete specific tasks or processes within an organization. SOPs help businesses simplify and standardize routine and critical operations, minimizing errors and driving efficiency.</p><p>Why Are Standard Operating Procedures Important?</p>",
    items: [
      { id: 1, text: "Ensures consistent processes across the organization" },
      {
        id: 2,
        text: "Improves efficiency by reducing errors and driving productivity",
      },
      { id: 3, text: "Provides guidance for employee onboarding and training" },
      { id: 4, text: "Defines clear roles and responsibilities amongst teams" },
      { id: 5, text: "Supports scalability as the business grows" },
      { id: 6, text: "Implements controls through segregation of duties" },
      { id: 7, text: "Delegates authority based on roles & responsibilities" },
    ],
    media: {
      path: "/images/sop-document-required.jpg",
      alt: "Required documents",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  whyChoose: {
    title: "SOPs Made Simple with KPI",
    description:
      "<p>At KPI, our team of business consultants in the UAE have decades of experience in developing comprehensive policies and procedures for various industries. Using a structured approach, we thoroughly analyze your existing business processes, identify gaps, and provide actionable steps for improvements. Our well-defined SOPs empower businesses to streamline operations and achieve sustainable growth with confidence.</p><p><b>Why Businesses Choose KPI:</b></p>",
    items: [
      {
        id: 1,
        title: "Skilled Experts",
        description:
          "<p>Deep experience operating within UAE regulatory environment, including federal authorities and free zone frameworks.</p>",
      },
      {
        id: 2,
        title: "Tailored Solution",
        description:
          "<p>Our SOP services are designed keeping your business needs in mind to govern processes and deliver consistent results</p>",
      },
      {
        id: 3,
        title: "Regulatory Expertise",
        description:
          "<p>Our deep understanding of UAE laws and regulations ensures that all SOP documentation complies with industry best practices.</p>",
      },
      {
        id: 4,
        title: "Comprehensive Support",
        description:
          "<p>With SOP training and implementation services, we ensure a smooth and hassle-free rollout of your new processes.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  services: {
    title: "Benefits of Standard Operating Procedures",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/sop-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Consistent Processes",
        description:
          "SOPs establish clear steps to follow when completing tasks, creating a uniformed framework across processes.",
      },
      {
        id: 2,
        media: {
          path: "/images/sop-servive-2.svg",
          alt: "Commercial License",
        },
        title: "Task Efficiency",
        description:
          "With clear documentation in place, employees spend less time figuring out how to complete tasks, speeding up overall productivity and performance.",
      },
      {
        id: 3,
        media: {
          path: "/images/sop-servive-3.svg",
          alt: "Commercial License",
        },
        title: "Training & Onboarding",
        description:
          "SOPs serve as detailed process manuals for new employees, reducing training time and costs as they grasp organizational procedures",
      },
      {
        id: 4,
        media: {
          path: "/images/sop-servive-4.svg",
          alt: "Commercial License",
        },
        title: "Risk Management",
        description:
          "By conducting a thorough analysis of risk identification, assessment and mitigation, businesses can reduce the risk of non-compliance and penalties.",
      },
      {
        id: 5,
        media: {
          path: "/images/sop-servive-5.svg",
          alt: "Commercial License",
        },
        title: "Conflict Resolution",
        description:
          "Clear policies and procedures support in resolving workplace disputes and fostering a harmonious and productive culture within teams.",
      },
      {
        id: 6,
        media: {
          path: "/images/sop-servive-6.svg",
          alt: "Commercial License",
        },
        title: "Growth Framework",
        description:
          "SOPs lay the foundation for business growth with a scalable structure that can be replicated across teams, departments or locations.",
      },
      {
        id: 7,
        media: {
          path: "/images/sop-servive-7.svg",
          alt: "Commercial License",
        },
        title: "Control Framework",
        description:
          "SOPs establish effective controls for growing businesses, streamlining processes and reducing operational risks.",
      },
    ] satisfies ServiceItem[],
  },
  formationProcess: {
    title: "Steps for SOP Development",
    sub_title: null,
    description:
      "A practical, governance-led approach that goes beyond theory-driven frameworks and and focuses on how risk emerges within organisations. ",
    steps: [
      {
        id: 1,
        title: "Define Scope & Objectives",
        inner_title: "Define Scope & Objectives",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
      {
        id: 2,
        title: "Analyze Existing Processes",
        inner_title: "Analyze Existing Processes",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
      {
        id: 3,
        title: "Develop Standard Operating Procedures",
        inner_title: "Develop Standard Operating Procedures",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
      {
        id: 4,
        title: "Review SOPs and Align",
        inner_title: "Review SOPs and Align",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
      {
        id: 5,
        title: "Implement and Train",
        inner_title: "Implement and Train",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
      {
        id: 6,
        title: "Monitor and Update",
        inner_title: "Monitor and Update",
        description:
          "<p>We work closely with your team to define the SOP’s purpose, scope and desired outcomes, ensuring alignment with your business goals.</p>",
      },
    ] satisfies ProcessStep[],
  },
  vatRelatedTax: {
    title: "Related Tax & Advisory Services",
    tax_list: [
      {
        id: 1,
        title: "AML",
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
        title: "Internal Audit",
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
        title: "Enterprise Risk",
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
        title: "Business Continuity Planning",
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
    title: "Want to improve how your <br> people and processes work together?",
    description: "",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/sop-cta-overlay.svg",
      overlayMobile: "/images/sop-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What are SOPs?",
        description: `
                  <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                  `,
      },
      {
        id: 2,
        title: "Why are SOPs important for businesses?",
        description: `
                  <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                  `,
      },
      {
        id: 3,
        title: "How do KPI's SOPs comply with UAE regulations?",
        description: `
                  <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                  `,
      },
      {
        id: 4,
        title: "How often should SOPs be reviewed and updated?",
        description: `
                  <p>Business visas are available for founders, partners, employees, and dependents. Requirements typically include a valid passport, trade license, and relevant approvals. KPI manages the process end-to-end to save time and ensure compliance.</p>
                  `,
      },
      {
        id: 5,
        title: "What other services does KPI offer?",
        description: `
                  <p>Some jurisdictions and business activities require a physical office or flexi-desk. KPI Group helps you select compliant office solutions that meet licensing and visa requirements.</p>
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

export const metadata: Metadata = {
  title: "SOP Consultants in UAE | Standard Operating Procedures | KPI",
  description:
    "Professional SOP consultants in the UAE offering standard operating procedures for businesses to improve compliance, efficiency, and performance. Get in touch!",
};

export default function StandardOperatingProceduresUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} variant="saifz" />
      <DocumentRequired
        data={localData?.document_required_data}
        variant="sop"
      />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="sop"
      />
      <CorporateServicesUaeServices
        data={localData?.services}
        variant="saifz"
      />
      <CorporateServicesUaeFormationProcess
        variant="mainland"
        data={localData?.formationProcess}
      />
      <VatRelatedTax data={localData.vatRelatedTax} variant="sop" />
      <CorporateServicesUaeCta data={localData.cta} />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
