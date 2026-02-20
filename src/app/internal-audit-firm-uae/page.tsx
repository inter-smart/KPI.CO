import InnerHero from "@/components/common/InnerHero";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import { Metadata } from "next";
import { MediaItem } from "../page";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";

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

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/internal-audit-bg.svg",
      mobilePath: "/images/reinternal-audit-mobile-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "DIFC Audits Built To  Withstand <br/>Regulatory Scrutiny ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  
  document_required_data: {
      title: "Audit and Compliance Experts in <br/> the UAE",
      description:
      "<p>Our internal audit service independently evaluates the effectiveness of your internal controls, risk management, and governance frameworks. We carry out focused risk-based reviews to identify control weaknesses, process deficiencies and regulatory exposure that could impact business performance or compliance.</p><p>Our audit services are designed for entities where clarity, precision, and regulatory certainty are required, including: </p><p>By aligning our audit with your business objectives and UAE regulatory requirements, we help management and stakeholders gain confidence and enable informed decision-making and steady growth.</p>",
    items: [ ],

    media: {
      path: "/images/audit-compliance-img.jpg",
      alt: "Audit and Compliance Experts in the UAE",
    },
    ftr_description: "",
  } satisfies DocumentRequiredData,
  riskAssurance: {
      title: "Our Approach To SPV Structuring",
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
            "Comply with the UAE local laws, regulatory requirements, and applicable international standards which reduce the risk of penalties, regulatory actions, and reputational damages.",
        },
        {
          id: 2,
          media: {
            path: "/images/audit-service-2.svg",
            alt: "Risk Identification & Mitigation",
          },
          title: "Risk Identification & Mitigation",
          description:
            "Proactively identify operational, financial, and compliance risks and strengthen your control environment to minimize exposure and support business continuity.",
        },
        {
          id: 3,
          media: {
            path: "/images/audit-service-3.svg",
            alt: "Operational Efficiency",
          },
          title: "Operational Efficiency",
          description:
            "Assess business processes to identify inefficiencies, optimize workflows, and implement controls that enhance performance while keeping the operational costs low.",
        },
        {
          id: 4,
          media: {
            path: "/images/audit-service-4.svg",
            alt: "Stronger Governance & Transparency",
          },
          title: "Stronger Governance & Transparency",
          description:
            "Enhance accountability, accuracy, and transparency in the financial and operational reporting, reinforce stakeholder confidence and corporate governance standards.",
        },
      ] satisfies RiskAssuranceData[],
    },
};

export const metadata: Metadata = {
  title:
    "Internal Auditor in Dubai | Internal Audit Firms in UAE  ",
  description:
    "Looking for a trusted internal audit firm in the UAE? KPI Group provides tailored audits to strengthen controls, ensure compliance - get in touch!",
};

export default function InternalAudit() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <DocumentRequired variant="spv" data={localData.document_required_data} />
      <RiskAssuranceServices data={localData.riskAssurance} />
    </>
  );
}
