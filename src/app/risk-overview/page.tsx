"use client";

import InnerHero from "@/components/common/InnerHero";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import { MediaItem } from "../page";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import RiskOrganisation from "@/components/features/risk-overview/RiskOrganisation";
import RiskApproach from "@/components/features/risk-overview/RiskAooroach";
import HomeCounter from "@/components/features/home/HomeCounter";
import DiscussYourRisk from "@/components/features/risk-overview/DiscussYourRisk";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
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

export type RiskAssuranceData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
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

export type ApproachStep = {
  id: number;
  title: string;
  sub_title: string;
  description: string;
};

export type CounterItem = {
  id: number;
  value: number;
  symbol?: string;
  label: string;
};
export type DiscussYourRiskData = {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
};

export type ServiceItem = {
  id: number;
  title: string;
  media: MediaItem;
  slug: string;
};

export type WhyChooseItem = {
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
      desktopPath: "/images/risk-overview-bg.png",
      mobilePath: "/images/risk-overview-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "Stay Ahead of Regulatory Risk  ",
    description:
      "<p>As organisations grow, governance expectations rise, and regulators demand evidence, not intent. KPI helps organisations identify and strengthen risk frameworks before issues escalate into regulatory, financial, or reputational consequences. </p>",
  } satisfies HeroData,

  whyRisk: {
    title: "Why Risk Management Becomes Critical as Organisations Scale ",
    highlightsTitle:
      "Risk exposure increases as organisation scale, particularly when  they:",
    highlights: [
      "Operate across multiple jurisdictions or freezones ",
      "Become subject To Regulatory Oversight or Licensing requirements",
      "Grow faster than their internal control frameworks",
      "Rely on informal processes that no longer scale ",
    ],
    footerDescription:
      "<p>At this stage, unmanaged risk often manifests as control failures, compliance gaps, and operational breakdowns, often discovered too late. </p>",
    image: {
      path: "/images/risk-overview-img.jpg",
      alt: "Risk advisory discussion",
    },
  } satisfies WhyRiskData,

  riskAdvisory: {
    title: "What Risk Advisory Means at KPI in Practice",
    description:
      " <p>KPI's risk advisory services focus on how risk emerges within organisations, not just how it appears on paper. We align risk management with real operations, decision-making and regulatory expectations. Our role is not to introduce complexity but to make risk visible, manageable, and defensible at the right level.  </p>",
    highlightsText: "We support management and boards with, ",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description:
          "Identifying key operational, financial, and compliance risks",
      },
      {
        id: 2,
        slNo: 2,
        description:
          "Assessing control effectiveness and identifying material gaps ",
      },
      {
        id: 3,
        slNo: 3,
        description:
          "Strengthening governance structures, roles and accountability ",
      },
      {
        id: 4,
        slNo: 4,
        description:
          "Preparing organisations for regulatory review, inspection and scrutiny ",
      },
    ],
  } satisfies RiskAdvisoryDta,

  riskAssurance: {
    title: "Risk & Assurance Services",
    description:
      "KPI provides risk and assurance services designed to strengthen governance, internal controls, and regulatory readiness. Our services are tailored to support organisations at different stages of maturity, growth and risk exposure.",
    items: [
      {
        id: 1,
        media: {
          path: "/images/risk-assurance-service-1.svg",
          alt: "Company Formation",
        },
        title: "Enterprise Risk Management (ERM)",
        description:
          "Design and implementation of ERM frameworks aligned with business objectives, risk appetite, and governance expectations.",
      },
      {
        id: 2,
        media: {
          path: "/images/risk-assurance-servive-2.svg",
          alt: "Company Formation",
        },
        title: "Internal Audit Services",
        description:
          "Independent evaluation of internal controls, governance, and risk management processes.",
      },
      {
        id: 3,
        media: {
          path: "/images/risk-assurance-servive-3.svg",
          alt: "Company Formation",
        },
        title: "Regulatory & Compliance Advisory",
        description:
          "Support with regulatory obligations, authority requirements, and compliance frameworks across UAE jurisdictions.",
      },
      {
        id: 4,
        media: {
          path: "/images/risk-assurance-servive-4.svg",
          alt: "Company Formation",
        },
        title: "Standard Operating Procedures (SOPs)",
        description:
          "Design and documentation of clear, scalable processes to reduce operational risk and improve consistency. Each engagement is delivered independently, proportionately, and aligned with regulatory expectations.",
      },
    ] satisfies RiskAssuranceData[],
  },
  riskOrganisation: {
    title: "When Organisations Typically Engage Risk Advisory ",
    description:
      "<p>Risk advisory is often triggered by moments of change, not failure. Common scenarios include: </p>",
    items: [
      {
        id: 1,
        text: "Rapid business growth, organizational change or restructuring  ",
      },
      {
        id: 2,
        text: "Preparation for regulatory inspection, review or audit ",
      },
      {
        id: 3,
        text: "Board or investor concerns around governance and control ",
      },
      { id: 4, text: "Repeated control issues or unresolved audit findings  " },
      {
        id: 5,
        text: "Expansion into regulated or free zone environments ",
      },
    ],

    media: {
      path: "/images/document-required-img.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description:
      "<p>Engaging early allows organisations to address issues proactively, before they become external concerns. </p>",
  } satisfies RiskOrganisationData,

  approachProcess: {
    title: "How KPI Approaches Risk",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        title: "Risk identification with business context",
        sub_title: "Risk identification with business context",
        description:
          "<p>Understanding how risks arise within day-to-day operations, decision making, organizations structures and not just within policy.</p>",
      },
      {
        id: 2,
        title: "Control assessment and gap analysis",
        sub_title: "Control assessment and gap analysis",
        description:
          "<p>Understanding how risks arise within day-to-day operations, decision making, organizations structures and not just within policy.</p>",
      },
      {
        id: 3,
        title: "Clear prioritisation",
        sub_title: "Clear prioritisation",
        description:
          "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
      },
      {
        id: 4,
        title: "Actionable recommendations",
        sub_title: "Actionable recommendations",
        description:
          "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
      },
    ] satisfies ApproachStep[],
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

  discussYourRisk: {
    title: "Discuss Your Risk Environment with Confidence and Clarity",
    description:
      "<p>If risk is becoming harder to track, explain, or defend, our team can help you bring structure and clarity before issues escalate. Whether you are strengthening governance, preparing for regulatory review, or addressing control gaps, KPI can support you with clarity and confidence. </p>",
    button: {
      label: "Request Consultation",
      link: "/contact",
    },
  } satisfies DiscussYourRiskData,

  explore_service: {
    title: " Explore Risk Services  ",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Standard Operating Procedures",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Regulatory & Compliance Advisory",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Internal Audit Services",
        slug: "#",
      },
      {
        id: 4,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Enterprise Risk Management",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },

  whyChoose: {
    title: "Why Organisations Trust KPI for Risk Services ",
    description: "",
    items: [
      {
        id: 1,
        title: "Regulatory awareness",
        description:
          "<p>Deep experience operating within UAE regulatory environment, including federal authorities and free zone frameworks. </p>",
      },
      {
        id: 2,
        title: "Balanced judgement",
        description:
          "<p>Independent and objective where required, pragmatic where possible. </p>",
      },
      {
        id: 3,
        title: "Clear communication",
        description:
          "<p>Findings presented clearly and directly, without jargon, ambiguity, or overstatement. </p>",
      },
      {
        id: 4,
        title: "Professional discipline",
        description:
          "<p>Confidentiality, structure, and adherence to professional standards.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "How do I start a business in the UAE?",
        description: `
        <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                      `,
      },
      {
        id: 2,
        title: "What does it cost to set up a business in the UAE?",
        description: `
        <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                      `,
      },
      {
        id: 3,
        title: "How long does it take to set up a company in the UAE",
        description: `
        <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                      `,
      },
      {
        id: 4,
        title: "What does it cost to set up a business in the UAE?",
        description: `
        <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                      `,
      },
      {
        id: 5,
        title: "What are the requirements for obtaining a UAE business visa? ",
        description: `
        <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                      `,
      },
      {
        id: 6,
        title: "Do I need to have a physical office in the UAE?",
        description: `
        <p>Some jurisdictions and business activities require a physical office or flexi-desk. KPI Group helps you select compliant office solutions that meet licensing and visa requirements.</p>
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
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export default function RiskOverviewPage() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory data={localData.riskAdvisory} />
      <RiskAssuranceServices data={localData.riskAssurance} />
      <RiskOrganisation data={localData.riskOrganisation} />
      <RiskApproach variant="mainland" data={localData.approachProcess} />
      <HomeCounter data={localData.counterList} variant="risk" />
      <RiskExploreService data={localData.explore_service} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        titleClassName="risk"
      />
      <DiscussYourRisk data={localData.discussYourRisk} />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
