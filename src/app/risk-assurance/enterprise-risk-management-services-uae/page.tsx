import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeCounter from "@/components/features/home/HomeCounter";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";

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

export type WhyBuildItem = {
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
  step: string;
  title: string;
  inner_title?: string;
  sub_title: string;
  description: string;
};

export type RiskAssuranceData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
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
  media: MediaItem;
  title: string;
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
const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/erm-banner-desk.svg",
      mobilePath: "/images/erm-banner-mob.svg",
      alt: "Enterprise Risk Management Built for Decisions, Not Documents",
    },
    title: "Enterprise Risk Management Built for Decisions, Not Documents",
    description:
      "<p>Enterprise Risk Management is not about producing risk registers that sit unused. It is about  giving leadership a clear, structured view of the risks that could materially affect strategy objectives, operations, and regulatory compliance. KPI helps organisations design and implement ERM frameworks that support informed decision-making, clear accountability, and regulatory readiness. </p>",
  } satisfies HeroData,

  whyBuild: {
    title: "Why Organisations Implement ERM ",
    description:
      "<p>ERM is typically introduced when risk oversight needs to evolve beyond informal practices. The key benefits include:</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/erm_icon1.svg",
          alt: "Improved decision-making",
        },
        title: "Improved decision-making",
        description:
          "<p>Decisions are guided by structured risk insights instead of assumptions, enabling leadership to act with confidence.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/erm_icon2.svg",
          alt: "Enhanced risk awareness",
        },
        title: "Enhanced risk awareness",
        description:
          "<p>Provides a clear view of risks across functions, business units, and entities. </p>",
      },
      {
        id: 3,
        media: {
          path: "/images/erm_icon3.svg",
          alt: "business continuity",
        },
        title: "business continuity",
        description:
          "<p>Early identification of threats help prevent operational or strategic disruptions. </p>",
      },
      {
        id: 4,
        media: {
          path: "/images/erm_icon4.svg",
          alt: "Regulatory alignment",
        },
        title: "Regulatory alignment",
        description:
          "<p>ERM frameworks that satisfy governance standards and regulatory expectations. </p>",
      },
      {
        id: 5,
        media: {
          path: "/images/erm_icon5.svg",
          alt: "Protection of assets and revenue ",
        },
        title: "Protection of assets and revenue",
        description:
          "<p>Focused attention on risks that could materially impact financial performance</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/erm_icon6.svg",
          alt: "Stronger stakeholder confidence",
        },
        title: "Stronger stakeholder confidence",
        description:
          "<p>Demonstrable risk oversight for boards, investors, and regulators.</p>",
      },
    ] satisfies WhyBuildItem[],
  },

  formationProcess: {
    title: "How KPI Supports ERM ",
    sub_title: "Our ERM engagements typically cover:",
    description:
      "KPI provides both advisory and implementation support across the ERM lifecycle. Our approach is proportionate, practical, and tailored to how organisations actually operate.",
    steps: [
      {
        id: 1,
        step: "Step One",
        title: "Enterprise risk identification",
        sub_title: "Enterprise risk identification",
        inner_title: "Enterprise risk identification",
        description:
          "<p>Identification of strategic, operational,-financial, and compliance risks affect business objectives.</p>",
      },
      {
        id: 2,
        step: "Step Two",
        title: "Risk assessment and prioritisation",
        sub_title: "Risk assessment and prioritisation",
        inner_title: "Risk assessment and prioritisation",
        description:
          "<p>Evaluation of risks based on impact, likelihood, and velocity to focus on what matters the most.</p>",
      },
      {
        id: 3,
        step: "Step Three",
        title: "Risk appetite definition",
        sub_title: "Risk appetite definition",
        inner_title: "Risk appetite definition",
        description:
          "<p>Support in defining acceptable risk thresholds aligned with strategy and governance expectations.</p>",
      },
      {
        id: 4,
        step: "Step Four",
        title: "Risk mitigation and control design",
        sub_title: "Risk mitigation and control design",
        inner_title: "Risk mitigation and control design",
        description:
          "<p>Develop response strategies and controls for high priority risks.</p>",
      },
      {
        id: 5,
        step: "Step Five",
        title: "Risk monitoring and reporting",
        sub_title: "Risk monitoring and reporting",
        inner_title: "Risk monitoring and reporting",
        description:
          "<p>Design reporting structures that provide clear visibility to management and boards.</p>",
      },
      {
        id: 6,
        step: "Step Six",
        title: "ERM framework implementation",
        sub_title: "ERM framework implementation",
        inner_title: "ERM framework implementation",
        description:
          "<p>Embed ERM into governance, decision-making, and reporting processes.</p>",
      },
    ] satisfies ProcessStep[],
  },

  riskAssurance: {
    title: "Our ERM Methodology ",
    description:
      "A structured approach designed to provide clarity, consistency and actionable insights across organization. ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/method_icon1.svg",
          alt: "Risk identification",
        },
        title: "Risk identification",
        description:
          "Identify strategic, operational, financial, and compliance risks that could Affect Organizational Objectives. ",
      },
      {
        id: 2,
        media: {
          path: "/images/method_icon2.svg",
          alt: "Risk assessment and prioritisation",
        },
        title: "Risk assessment and prioritisation",
        description:
          "Evaluate risk based on impact, likelihood, and <br> velocity.",
      },
      {
        id: 3,
        media: {
          path: "/images/method_icon3.svg",
          alt: "Risk appetite and strategy alignment",
        },
        title: "Risk appetite and strategy alignment",
        description:
          "Define acceptable risk levels to support informed decision-making and strategic objectives.",
      },
      {
        id: 4,
        media: {
          path: "/images/method_icon4.svg",
          alt: "Risk mitigation planning",
        },
        title: "Risk mitigation planning",
        description:
          "Design of controls and response strategies <br> for high priority risks.",
      },
      {
        id: 5,
        media: {
          path: "/images/method_icon5.svg",
          alt: "Implementation of controls",
        },
        title: "Implementation of controls",
        description:
          "Embed risk responses Into Processes, Governance Structures and Decision-Making Workflows.",
      },
      {
        id: 6,
        media: {
          path: "/images/method_icon6.svg",
          alt: "Monitoring and reporting",
        },
        title: "Monitoring and reporting",
        description:
          "Develop dashboards, reporting frameworks, and escalation mechanisms for oversights.",
      },
      {
        id: 7,
        media: {
          path: "/images/method_icon7.svg",
          alt: "Continuous improvement",
        },
        title: "Continuous improvement",
        description:
          "Periodic review and update the ERM framework to reflect business, regulatory, and market changes.",
      },
    ] satisfies RiskAssuranceData[],
  },

  whyChoose: {
    title: "Why Organisations Choose KPI for ERM ",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Proven risk advisory experience ",
        description:
          "<p>Extensive experience across risk, assurance, and governance engagements delivering practical and trusted solutions..</p>",
      },
      {
        id: 2,
        title: "Industry-aware frameworks",
        description:
          "<p>ERM solutions tailored to your industry, regulatory, and organisational context.</p>",
      },
      {
        id: 3,
        title: "UAE regulatory insight ",
        description:
          "<p>Deep understanding of mainland, free zone, DIFC, and ADGM regulatory environments to ensure compliance.</p>",
      },
      {
        id: 4,
        title: "Technology-enabled risk assessment",
        description:
          "<p>Use of structured tools and analytics to support risk assessment and reporting. </p>",
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
    title: "Related Services",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Internal Audit <br/> Services",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Regulatory & Compliance <br/> Advisory",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Audit Firm Guide" },
        title: "Standard Operating <br/> Procedures (SOPs)",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },

  cta: {
    title: "Discuss Your ERM Requirements ",
    description:
      "<p>If your organisation needs clearer risk visibility, stronger governance, or a defensible approach to risk oversight,KPI can support you in designing and implementing an ERM framework that works in practice.</p>",
    button: {
      label: "Get in Touch",
      link: "/",
    },
    images: {
      overlay: "/images/ermCta-desk.svg",
      overlayMobile: "/images/erm-mobile.png",
    },
  } satisfies CtaData,

  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is Enterprise Risk Management (ERM)? ",
        description: `
                      <p>Enterprise Risk Management (ERM) is a structured framework that helps organisations identify, assess, prioritise, and manage risks that could affect strategic objectives, financial performance, operations, or regulatory compliance. </p>
                      <p>An ERM framework provides leadership with a consolidated view of enterprise risks across the organisation and establishes clear governance structures for risk monitoring, reporting, and mitigation. Properly implemented ERM enables management and boards to make informed decisions based on structured risk insights rather than isolated risk assessments. </p>
                      `,
      },
      {
        id: 2,
        title:
          " Why is Enterprise Risk Management important for organisations? ",
        description: `
                      <p>Enterprise Risk Management is important because it provides organisations with a structured and proactive approach to managing uncertainty and protecting business objectives.  </p>
                      <p>A well-designed ERM framework helps organisations: </p>
                      <ul>
                        <li>Identify risks before they escalate into operational or financial issues </li>
                        <li>Improve decision-making through structured risk insights  </li>
                        <li>Strengthen governance and accountability across leadership teams  </li>
                        <li>Align risk exposure with strategic objectives and risk appetite </li>
                        <li>Demonstrate effective risk oversight to regulators, investors, and boards  </li>
                      </ul>
                      <p>For organisations operating in regulated environments or experiencing rapid growth, Enterprise Risk Management also strengthens regulatory readiness and organisational resilience. </p>
                      `,
      },
      {
        id: 3,
        title:
          "What are the key steps to implementing an Enterprise Risk Management (ERM) framework? ",
        description: `
                      <p>Implementing an Enterprise Risk Management (ERM) framework typically involves a structured process designed to identify and manage risks across the organisation. </p>
                      <p>The key steps usually include: </p>
                      <ul>
                        <li>Enterprise risk identification – identifying strategic, operational, financial, and compliance risks across business units </li>
                        <li>Risk assessment and prioritisation – evaluating risks based on likelihood, potential impact, and urgency </li>
                        <li>Defining risk appetite – determining the level of risk the organisation is willing to accept in pursuit of its objectives  </li>
                        <li>Designing risk mitigation strategies – implementing controls and response mechanisms for high-priority risks  </li>
                        <li>Establishing governance and reporting structures – ensuring clear accountability and visibility to management and boards  </li>
                        <li>Ongoing monitoring and review – updating the ERM framework as business conditions and regulatory environments evolve   </li>
                      </ul>
                      <p>A well-implemented ERM framework integrates risk awareness into everyday decision-making rather than treating risk as a separate compliance activity. </p>
                      `,
      },
      {
        id: 4,
        title:
          "Which organisations should implement Enterprise Risk Management? ",
        description: `
                      <p>Enterprise Risk Management is beneficial for organisations that require structured oversight of risks across multiple functions, business units, or jurisdictions. </p>
                      <p>Organisations typically implement ERM frameworks when they: </p>
                      <ul>
                        <li>Operate in regulated industries or jurisdictions </li>
                        <li>Experience rapid growth or organisational complexity  </li>
                        <li>Manage multiple subsidiaries, entities, or international operations </li>
                        <li>Face increasing board or investor expectations around governance </li>
                        <li>Require structured visibility of enterprise-wide risks </li>
                      </ul>
                      <p>ERM is particularly valuable for mid-sized and large organisations seeking stronger governance, improved decision-making, and greater resilience against operational or regulatory risks. </p>
                      `,
      },
      {
        id: 5,
        title:
          "What does an Enterprise Risk Management consultant or advisor do? ",
        description: `
                      <p>An Enterprise Risk Management consultant helps organisations design, implement, and strengthen ERM frameworks that support governance, decision-making, and regulatory alignment.  </p>
                      <p>ERM advisors typically support organisations by: </p>
                      <ul>
                        <li>Identifying and mapping enterprise-wide risks </li>
                        <li>Assessing the effectiveness of existing risk management controls </li>
                        <li>Designing ERM frameworks aligned with governance standards </li>
                        <li>Defining risk appetite and risk reporting structures </li>
                        <li>Supporting implementation of risk monitoring and oversight processes </li>
                      </ul>
                      <p>A risk advisory firm like KPI also helps organisations document risk frameworks, prepare for regulatory review, and ensure that risk management practices are practical, proportionate, and aligned with organisational objectives. </p>
                      `,
      },
      {
        id: 6,
        title:
          "How does Enterprise Risk Management improve business decision-making? ",
        description: `
                      <p>Enterprise Risk Management improves business decision-making by providing leadership with structured visibility into the risks that could affect strategy, operations, and financial performance.  </p>
                      <p>Through an effective ERM framework, management and boards gain: </p>
                      <ul>
                        <li>Clear insight into enterprise-wide risk exposure  </li>
                        <li>Better prioritisation of strategic initiatives and investments </li>
                        <li>Early identification of operational or regulatory threats  </li>
                        <li>Alignment between risk appetite and business strategy  </li>
                        <li>More informed discussions at leadership and board level  </li>
                      </ul>
                      <p>By integrating risk analysis into planning and governance processes, Enterprise Risk Management allows organisations to make decisions with greater confidence, discipline, and resilience.  </p>
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
  title: "Enterprise Risk Management (ERM) Services UAE | KPI Group ",
  description:
    "Enterprise Risk Management (ERM) services for UAE organisations. Identify, assess, and manage enterprise risks with governance clarity and regulatory alignment.",

  openGraph: {
    title: "Enterprise Risk Management Advisory UAE | KPI Group ",
    description:
      "Enterprise Risk Management (ERM) services for UAE organisations. Identify, assess, and manage enterprise risks with governance clarity and regulatory alignment.",
    url: "https://kpi.co/enterprise-risk-management-services-uae",
    siteName: "KPI.CO",
    type: "website",
    images: [
      {
        url: "/images/KPI-logo-og.png",
        width: 1200,
        height: 630,
        alt: "KPI Logo",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={localData.hero} variant="erm" />
      <CorporateServicesUaeWhyBuild variant="erm" data={localData.whyBuild} />
      <CorporateServicesUaeFormationProcess
        variant="erm"
        data={localData.formationProcess}
      />
      <RiskAssuranceServices data={localData.riskAssurance} variant="erm" />
      <CorporateServicesUaeWhyChoose variant="erm" data={localData.whyChoose} />
      <HomeCounter data={localData.counterList} variant="erm" />
      <RiskExploreService variant="erm" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.cta} variant="erm" />
      <CorporateServicesUaeFaq
        data={localData.corporate_faq_data}
        // variant="side-arrow"
      />
      <HomeOurInsights variant="Our-Insights" />
    </>
  );
}
