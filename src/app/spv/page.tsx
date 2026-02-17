"use client";

import InnerHero from "@/components/common/InnerHero";
import RiskAdvisory from "@/components/features/risk-overview/RiskAdvisory";
import RiskExploreService from "@/components/features/risk-overview/RiskExploreService";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import { MediaItem } from "../page";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import type { FaqItem } from "@/app/corporate-services-uae/page";
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
      desktopPath: "/images/regulated-audit-bg.jpg",
      mobilePath: "/images/regulated-audit-mobile-bg.png",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "DIFC Audits Built to Withstand Regulatory Scrutiny ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  
  riskAdvisory: {
    title: "What an ADGM SPVs Offer",
    description:
      "<p>ADGM SPVs combine flexibility with regulatory credibility. Key features include </p> ",
    highlightsText: "This makes ADGM SPVs a preferred choice for investors and groups seeking clean ownership structures that stand up to scrutiny.",
    advisoryItems: [
      {
        id: 1,
        slNo: 1,
        description: "No requirement for physical office space",
      },
      {
        id: 2,
        slNo: 2,
        description: "No employees or UAE visas required",
      },
      {
        id: 3,
        slNo: 3,
        description: "100% foreign ownership",
      },
      {
        id: 4,
        slNo: 4,
        description: "Ability to hold regional and international assets",
      },
      {
        id: 5,
        slNo: 5,
        description: "Operation under English common law principles",
      },
    ],
  } satisfies RiskAdvisoryDta,
  contactUs: {
    title: "Discuss Your ADGM SPV Requirements",
    description:
      "<p>If you are structuring assets, investments, or ownership through an SPV, <br/> we can help you design a structure that works today and as it evolves.</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/overlay-spv.png",
      overlayMobile: "/images/overlay-spv-mobile.png",
    },
  } satisfies CtaData,
  explore_service: {
    title: " Related Audit Services ",
    items: [
      {
        id: 1,
        media: { path: "/images/explore-01.jpg", alt: "Company Formation in ADGM" },
        title: "Company Formation in <br/> ADGM",
        slug: "#",
      },
      {
        id: 2,
        media: { path: "/images/explore-01.jpg", alt: "SPV Foundations" },
        title: "SPV <br/> Foundations",
        slug: "#",
      },
      {
        id: 3,
        media: { path: "/images/explore-01.jpg", alt: "Holding Companies" },
        title: "Holding <br/> Companies",
        slug: "#",
      },
    ] satisfies ServiceItem[],
  },
  difc_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is an ADGM SPV?",
        description: `
          <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Who should consider setting up an ADGM SPV?",
        description: `
          <p>Yes. Our audit procedures are designed to address DFSA-focused risks including governance, capital adequacy, valuation, and regulatory reporting.</p>
                        `,
      },
      {
        id: 3,
        title: "Is an ADGM SPV subject to UAE Corporate Tax?",
        description: `
          <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Can an ADGM SPV open a UAE bank account?",
        description: `
          <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "What documents are required to set up an ADGM SPV?",
        description: `
          <p>Typical requirements include shareholder and beneficial owner information, constitutional documents, and supporting KYC materials. The exact documentation depends on ownership complexity, jurisdictional exposure, and intended use of the SPV.</p>
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

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <RiskAdvisory variant="difc" data={localData.riskAdvisory} />
      <RiskExploreService variant="difc" data={localData.explore_service} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq data={localData.difc_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
