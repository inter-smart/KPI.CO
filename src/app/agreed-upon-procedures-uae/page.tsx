import InnerHero from '@/components/common/InnerHero'
import WhyRiskManagement from "@/components/features/risk-overview/WhyRiskManagement";
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

const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/agreed-banner-desk.png",
            mobilePath: "/images/agreed-banner-mob.png",
            alt: "Company Formation in DMCC Free Zone, UAE",
        },
        title: "Focused Reviews. Factual Findings. No Opinions.",
        description:
            "<p>Agreed-Upon Procedures (AUP) engagements provide targeted verification on specific matters when stakeholders need factual findings without the full scope of an audit. KPI delivers AUP engagements in strict accordance with ISRS 4400, providing objective, factual findings that satisfy stakeholder requirements and regulatory expectations across the UAE, DIFC, and ADGM.</p>",
    } satisfies HeroData,

      whyRisk: {
        title: "What Are Agreed-Upon Procedures (AUP)?",
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

}

export const metadata: Metadata = {
    title: "AUP Audit Services in UAE | DFSA & Regulatory Compliance | KPI   ",
    description:
        "Expert Agreed-Upon Procedures (AUP) engagements for UAE  businesses. Factual findings, scope-aligned reporting for stakeholders and authorities.. ",
};

export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <WhyRiskManagement data={localData.whyRisk} />

        </>
    )
}