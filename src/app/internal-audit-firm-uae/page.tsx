import InnerHero from "@/components/common/InnerHero";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import { Metadata } from "next";
import { MediaItem } from "../page";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import HomeCounter from "@/components/features/home/HomeCounter";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import BlogRelated from "@/components/features/blogs/BlogRelated";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import { blogData } from "@/data/blogData";

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
export type RiskAssuranceData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
};
export type ProcessStep = {
  id: number;
  title: string;
  inner_title: string;
  sub_title: string;
  description: string;
};
export type BankingPartner = {
  id: number;
  media: {
    path: string;
    alt: string;
  };
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
      desktopPath: "/images/internal-audit-bg.svg",
      mobilePath: "/images/reinternal-audit-mobile-bg.png",
      alt: "Trusted Internal Audit Services in the UAE",
    },
    title: "Trusted Internal Audit Services in the UAE ",
    description:
      "<p>Enhance governance and safeguard your business with our trusted internal audit services. We help you identify risk, strengthen internal controls, and maintain regulatory compliance. Supporting steady growth at every stage.</p>",
  } satisfies HeroData,

  document_required_data: {
    title: "Audit and Compliance Experts in <br/> the UAE",
    description:
      "<p>Our internal audit service independently evaluates the effectiveness of your internal controls, risk management, and governance frameworks. We carry out focused risk-based reviews to identify control weaknesses, process deficiencies and regulatory exposure that could impact business performance or compliance.</p><p>By aligning our audit with your business objectives and UAE regulatory requirements, we help management and stakeholders gain confidence and enable informed decision-making and steady growth.</p>",
    items: [],

    media: {
      path: "/images/audit-compliance-img.jpg",
      alt: "Audit and Compliance Experts in the UAE",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  riskAssurance: {
    title: "Why Internal Audits Matter",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/audit-service-1.svg",
          alt: "Regulatory Compliance",
        },
        title: "Regulatory Compliance",
        description:
          "Comply with the UAE local laws, regulatory <br/> requirements, and applicable international standards <br/> which reduce the risk of penalties, regulatory <br/> actions, and reputational damages.",
      },
      {
        id: 2,
        media: {
          path: "/images/audit-service-2.svg",
          alt: "Risk Identification & Mitigation",
        },
        title: "Risk Identification & Mitigation",
        description:
          "Proactively identify operational, financial, and<br/> compliance risks and strengthen your control<br/> environment to minimize exposure and support business<br/> continuity.",
      },
      {
        id: 3,
        media: {
          path: "/images/audit-service-3.svg",
          alt: "Operational Efficiency",
        },
        title: "Operational Efficiency",
        description:
          "Assess business processes to identify inefficiencies, <br/> optimize workflows, and implement controls that <br/> enhance performance while keeping the operational <br/> costs low.",
      },
      {
        id: 4,
        media: {
          path: "/images/audit-service-4.svg",
          alt: "Stronger Governance & Transparency",
        },
        title: "Stronger Governance & Transparency",
        description:
          "Enhance accountability, accuracy, and transparency <br/> in the financial and operational reporting, reinforce <br/> stakeholder confidence and corporate governance<br/> standards.",
      },
    ] satisfies RiskAssuranceData[],
  },
  ProcessStep: {
    title: "Our Audit Approach",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        title: "Risk Assessment & Audit Planning",
        inner_title: "Risk Assessment & Audit <br/> Planning",
        sub_title: "Risk Assessment & Audit Planning",
        description:
          "<p>Identifying and prioritize key risk areas aligned with your business objectives, regulatory requirements, and operational environment.</p>",
      },
      {
        id: 2,
        title: "Audit Execution & Review",
        inner_title: "Audit Execution & Review",
        sub_title: "Audit Execution & Review",
        description:
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk.</p>",
      },
      {
        id: 3,
        title: "Reporting & Recommendations",
        inner_title: "Reporting & Recommendations",
        sub_title: "Reporting & Recommendations",
        description:
          "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
      },
      {
        id: 4,
        title: "Follow-Up Support",
        inner_title: "Follow-Up Support",
        sub_title: "Follow-Up Support",
        description:
          "<p>Assessment of the entity’s regulatory classification, business model, and control environment to identify areas of heightened risk.</p>",
      },
    ] satisfies ProcessStep[],
  },
  banking: {
    title: "",
    description: "",
    partners: [
      {
        id: 1,
        media: {
          path: "/images/banking-partner-01.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 2,
        media: {
          path: "/images/banking-partner-02.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 3,
        media: {
          path: "/images/banking-partner-03.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 4,
        media: {
          path: "/images/banking-partner-04.svg",
          alt: "Emirates NBD",
        },
      },
    ] satisfies BankingPartner[],
  },

  whyChoose: {
    title: "Leading Internal Audit Firm In The UAE",
    description:
      "<p>As a trusted internal audit firm in the UAE, we help organizations strengthen governance, enhance operational controls, and effectively manage risk and compliance. Our experienced professionals deliver tailored, value-driven internal audit solutions aligned with your business objectives and regulatory environment. By combining technical expertise with a practical, business-focused approach, we support informed decision-making and improve efficiency for long-term growth.</p>",
    sub_title: "Why Businesses Choose KPI",
    items: [
      {
        id: 1,
        title: "Proven Expertise",
        description:
          "<p>Decades of experience delivering internal audit, advisory, and risk management services across the UAE, trusted by organizations across diverse industries. </p>",
      },
      {
        id: 2,
        title: "Regulatory Insight",
        description:
          "<p>Deep knowledge of UAE laws, Free Zone regulations, and international standards reducing compliance risk and regulatory exposures.</p>",
      },
      {
        id: 3,
        title: "Timely and Efficient Delivery",
        description:
          "<p>Streamlined processes and disciplined execution ensure audits are completed efficiently with minimum business disruption.</p>",
      },
      {
        id: 4,
        title: "Date Integrity and Confidentiality",
        description:
          "<p>We safeguard sensitive information through strict confidentiality protocols, robust data security measures, and the highest professional standards.</p>",
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
    title: " Related Services ",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "External <br/> Audit",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Enterprise Risk Management",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Regulatory & Compliance Advisory",
        slug: "#",
      },
      {
        id: 4,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Standard Operating Procedures",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  contactUs: {
    title: "Request a Consultation",
    description:
      "<p>Gain independent assurance, close control gaps, and strengthen <br/> governance with expert internal audit services.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-audit.svg",
      overlayMobile: "/images/overlay-audit-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is an internal audit?",
        description: `
                    <p>Yes. Internal audit findings help strengthen processes, reduce inefficiencies, and support sustainable business growth.</p>
                    `,
      },
      {
        id: 2,
        title: "What are the benefits of internal audit?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                    `,
      },
      {
        id: 3,
        title: "How long does an internal audit take?",
        description: `
                    <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                    `,
      },
      {
        id: 4,
        title: "Is internal audit mandatory in the UAE?",
        description: `
                    <p>Yes. Internal audit findings help strengthen processes, reduce inefficiencies, and support sustainable business growth.</p>
                    `,
      },
      {
        id: 5,
        title: "Can internal audit findings help improve business performance?",
        description: `
                    <p>Yes. Internal audit findings help strengthen processes, reduce inefficiencies, and support sustainable business growth.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  related_blog: {
      title: " Our Insights ",
      items: blogData.slice(0, 3).map((blog) => ({
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
  title: "Internal Auditor in Dubai | Internal Audit Firms in UAE  ",
  description:
    "Looking for a trusted internal audit firm in the UAE? KPI Group provides tailored audits to strengthen controls, ensure compliance - get in touch!",
};

export default function InternalAudit() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <DocumentRequired variant="spv" data={localData.document_required_data} />
      <RiskAssuranceServices data={localData.riskAssurance} />
      <CorporateServicesUaeFormationProcess
        variant="aup"
        data={localData.ProcessStep}
      />
      <CorporateServicesUaeBanking
        variant="audit"
        data={localData.banking}
      />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="risk"
      />
      <HomeCounter data={localData.counterList} />
      <RiskExploreService data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.contactUs} />
       <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <BlogRelated data={localData.related_blog} />
    </>
  );
}
