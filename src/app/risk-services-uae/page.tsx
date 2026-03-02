import InnerHero from "@/components/common/InnerHero";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
import { MediaItem, CounterItem } from "../page";
import type { FaqItem } from "@/app/corporate-services-uae/page";
import RiskOrganisation from "@/components/features/risk-overview/RiskOrganisation";
import HomeCounter from "@/components/features/home/HomeCounter";
import DiscussYourRisk from "@/components/features/risk-overview/DiscussYourRisk";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
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

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  inner_title: string;
  sub_title: string;
  description: string;
};

export type DiscussYourRiskData = {
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
      mobilePath: "/images/risk-overview-mobile-bg.jpg",
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
      " <p>KPI's risk advisory services focus on how risk emerges within organisations, not just how it appears on paper. We align risk management with real operations, decision-making and regulatory expectations. Our role is not to introduce complexity but to make risk visible, manageable, and defensible at the right level.  </p> <p>We support management and boards with, </p>",
    highlightsText: "",
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
          "Assessing control effectiveness and identifying material gaps ",
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

  formationProcess: {
    title: "How KPI Approaches Risk",
    sub_title: null,
    description:
      "A practical, governance-led approach that goes beyond theory-driven frameworks and and focuses on how risk emerges within organisations. ",
    steps: [
      {
        id: 1,
        step: "Step One",
        title: "Risk Identification with Business Context ",
        inner_title: "Risk identification with business context",
        sub_title: "Risk identification with business context",
        description:
          "<p>Understanding how risks arise within day-to-day operations, decision making, organizations structures and not just within policy.</p>",
      },
      {
        id: 2,
        step: "Step Two",
        title: "Control Assessment and Gap Analysis ",
        inner_title: "Control Assessment and Gap Analysis ",
        sub_title: "Control Assessment and Gap Analysis ",
        description:
          "<p>Evaluating whether controls exist, appropriately designed, operate effectively, and are properly documented. </p>",
      },
      {
        id: 3,
        step: "Step Three",
        title: "Clear Prioritisation ",
        inner_title: "Clear Prioritisation ",
        sub_title: "Clear Prioritisation ",
        description:
          "<p>Focusing on risks that carry regulatory, financial, or reputational consequences. </p>",
      },
      {
        id: 4,
        step: "Step Four",
        title: "Actionable Recommendations ",
        inner_title: "Actionable Recommendations ",
        sub_title: "Actionable Recommendations ",
        description:
          "<p>Suggest practical suggestion that management can implement, rather than an abstract observation. </p>",
      },
    ] satisfies ProcessStep[],
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
      label: "Get in Touch",
      link: "/#contact",
    },
    images: {
      overlay: "/images/riskcta.svg",
      overlayMobile: "/images/riskcta-mob.svg",
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
    sub_title: "",
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
        title: "What are risk advisory services in the UAE?",
        description: `
        <p>Risk advisory services in the UAE help organisations identify, assess, and manage operational, financial, and regulatory risks within a structured governance framework. These services strengthen internal controls, enterprise risk management (ERM), and regulatory compliance across mainland and free zone jurisdictions.</p>
        <p>In the UAE’s evolving regulatory environment, risk advisory focuses on building defensible control frameworks, improving governance oversight, and preparing organisations for regulatory inspections, audits, and authority reviews.</p>
                      `,
      },
      {
        id: 2,
        title: " When should a company in the UAE engage risk advisory services?",
        description: `
        <p>Companies in the UAE typically engage risk advisory services when they:</p>
        <ul>
          <li>Expand into regulated sectors or free zone jurisdictions</li>
          <li>Prepare for regulatory inspection or internal audit</li>
          <li>Experience rapid growth without formalised internal controls</li>
          <li>Face recurring audit findings or compliance gaps</li>
          <li>Require board-level governance strengthening</li>
        </ul>
        <p>Engaging a UAE risk advisory firm early helps mitigate regulatory risk, financial exposure, and reputational damage before issues escalate.</p>
                      `,
      },
      {
        id: 3,
        title: "What is the difference between risk advisory and internal audit in the UAE?",
        description: `
        <p>Risk advisory services in the UAE focus on identifying risk exposure, designing governance frameworks, and strengthening internal control structures proactively.</p>
         <p>Internal audit services in the UAE provide independent assurance that existing controls are operating effectively and in line with regulatory and governance expectations.</p>
        <p>In short:</p>
         <ul>
          <li>Risk advisory strengthens and designs risk frameworks.</li>
          <li>Internal audit evaluates and tests control effectiveness.</li> 
        </ul>
        <p>Both are critical components of strong corporate governance in the UAE.</p>  
        `,
      },
      {
        id: 4,
        title: "Are risk management frameworks mandatory for UAE companies?",
        description: `
        <p>While not all UAE companies are legally required to implement formal enterprise risk management frameworks, many regulators and free zone authorities expect documented risk management and internal control systems.</p>
        <p>Regulated entities, financial services firms, government-related entities, and licensed free zone companies are often required to demonstrate governance structures, risk assessments, and compliance monitoring processes during inspections.</p>
        <p>Implementing a structured risk management framework improves regulatory readiness and audit defensibility.</p> 
                      `,
      },
      {
        id: 5,
        title: "Which industries in the UAE require risk advisory support?",
        description: `
        <p>Risk advisory services in the UAE are commonly required across:</p>
          <ul>
          <li>Financial services and regulated entities</li>
          <li>Free zone licensed companies</li> 
          <li>Government-related organisations</li> 
          <li>Large family-owned groups</li> 
          <li>Rapidly scaling SMEs</li> 
          <li>Multi-entity or cross-border businesses</li> 
        </ul>
        <p>Any organisation subject to regulatory compliance obligations or governance scrutiny can benefit from professional risk advisory and internal control assessment.</p>
                      `,
      },
      {
        id: 6,
        title: "What does an enterprise risk management (ERM) framework include in the UAE?",
        description: `
        <p>An enterprise risk management (ERM) framework in the UAE typically includes:</p>
          <ul>
          <li>Structured risk identification and classification</li>
          <li>Risk assessment and prioritisation aligned with risk appetite</li> 
          <li>Internal control design and documentation</li> 
          <li>Governance roles and accountability matrices</li> 
          <li>Ongoing risk monitoring and reporting to management or boards</li>  
        </ul>
        <p>An effective ERM framework aligns business strategy with regulatory compliance requirements and strengthens long-term governance maturity.
</p>
                      `,
      },
      {
        id: 7,
        title: "How do risk advisory services reduce regulatory compliance risk in the UAE?",
        description: `
        <p>Risk advisory services reduce regulatory compliance risk by:</p>
          <ul>
          <li>Identifying internal control weaknesses before regulatory review</li>
          <li>Strengthening documentation and governance structures</li> 
          <li>Aligning policies and procedures with UAE regulatory frameworks</li> 
          <li>Preparing organisations for authority inspections and internal audits</li>  
        </ul>
        <p>By proactively addressing governance and compliance gaps, organisations reduce exposure to regulatory penalties, audit findings, and reputational risk.</p>
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
      date_full: blog.date_full,
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export const metadata: Metadata = {
  title: "Risk Advisory & Governance Services UAE | KPI Group",
  description:
    "Independent risk and assurance services for UAE organisations. Strengthen governance, internal controls, and regulatory compliance with clarity and discipline. ",
};

export default function RiskOverviewPage() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory data={localData.riskAdvisory} />
      <RiskAssuranceServices data={localData.riskAssurance} />
      <RiskOrganisation data={localData.riskOrganisation} />
      <CorporateServicesUaeFormationProcess
        variant="risk"
        data={localData.formationProcess}
      />
      <HomeCounter data={localData.counterList} variant="risk" />
      <RiskExploreService data={localData.explore_service} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="risk"
      />
      <DiscussYourRisk data={localData.discussYourRisk} />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
