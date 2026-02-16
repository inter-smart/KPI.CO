"use client";

import InnerHero from "@/components/common/InnerHero";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskApproach from "@/components/features/risk-overview/RiskAooroach";
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";

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

export type ApproachStep = {
  id: number;
  title: string;
  sub_title: string;
  description: string;
};

export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  description: string;
  highlightsText: string;
  zone_list: string[];
};

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

export type MeydanFreeZoneData = {
  title: string;
  description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list: MeydanStructureItem[];
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/regulated-audit-bg.png",
      mobilePath: "/images/regulated-audit-mobile-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "DIFC Audits Built to Withstand Regulatory Scrutiny ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  whyRisk: {
    title: "Why DIFC Audits Are Different And Demand More",
    highlightsTitle:
      "In DIFC, audit quality is assessed not only on compliance, but on defensibility. It operates with a regulatory environment where:",
    highlights: [
      "Financial reporting is subject to active review by the DFSA",
      "Governance weaknesses and control failures carry regulatory consequences",
      "Audit judgement extends beyond numbers and is open to challenge",
      "Inadequate documentation can trigger enhanced regulatory scrutiny",
    ],
    footerDescription: "",
    image: {
      path: "/images/difc-audit.jpg",
      alt: "Risk advisory discussion",
    },
  } satisfies WhyRiskData,
  riskAdvisory: {
    title: "DIFC & DFSA Regulated Audit Services",
    description:
      "<p>KPI provides audit services to DIFC-registered and DFSA-regulated entities in line with →</p><p>KPI provides audit services to DIFC-registered and DFSA-regulated entities in line with →Our audits follow a risk-based methodology that prioritises regulatory and financial significance over audit volume. Audit quality is reinforced through documented processes and consistent application of professional judgement.</p> ",
    highlightsText: "",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "DIFC Companies Law and Regulations (as amended)",
      },
      {
        id: 2,
        slNo: 2,
        description: "DFSA Rulebooks and prescribed reporting requirements",
      },
      {
        id: 3,
        slNo: 3,
        description: "International Standards on Auditing (ISA)",
      },
    ],
  } satisfies RiskAdvisoryDta,
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
  meydanFreeZone: {
    title: "Audit Support During DIFC Liquidation & Regulatory Closure",
    free_zone_list: [
      {
        id: 1,
        title: "Audit Support During DIFC Liquidation & Regulatory Closure",
        description: "Audits are often required during DIFC liquidation, restructuring, or regulatory closure processes.",
        highlightsText: "KPI provides audit support aligned with DIFC and DFSA requirements, including:",
        zone_list: [
          "Audit of final financial statements",
          "Support for regulatory and authority submissions",
          "Audit coordination with liquidators and legal advisors",
        ],
      },
      
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "If your business requires Mainland or other Free Zone options, our expert team will guide you to the best setup for your goals.",
      },
    ],
  } satisfies MeydanFreeZoneData,
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <WhyRiskManagement data={localData.whyRisk} />
      <RiskAdvisory variant="difc" data={localData.riskAdvisory} />
      <RiskApproach variant="mainland" data={localData.approachProcess} />
      <MeydanFreeZone variant="difc" data={localData.meydanFreeZone} />
    </>
  );
}
