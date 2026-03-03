import { Metadata } from "next";
import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";
import HomeCounter from "@/components/features/home/HomeCounter";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";

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

export type MediaItem = {
  path: string;
  alt: string;
};

export type SetupOptionItem = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
  slug: string;
};

export type CounterItem = {
  id: number;
  value: number;
  symbol?: string;
  label: string;
};

export type MeydanKeyBenefitsData = {
  title: string;
  description?: string;
  slides: {
    id: number;
    title: string;
    items: (string | { title?: string; description?: string })[];
    media: {
      path: string;
      alt: string;
    };
  }[];
};


export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};


const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/technology-banner.svg",
      mobilePath: "/images/technology-banner-mobile-bg.svg",
      alt: "ADGM Audits Built To Withstand Regulatory Scrutiny",
    },
    title: "Where Advisory Meets Enterprise Technology ",
    description:
      "<p>KPI Group supports organisations operating in complex regulatory environments across audit, tax, and compliance. As regulatory frameworks become increasingly digital - from ERP-driven finance to e-invoicing and real-time reporting, compliance today is as much a technology challenge as it is a regulatory one. Vantheon is the technology division of KPI Group, where our regulatory understanding meets deep systems expertise. Vantheon was established in 2014 to design, implement, and govern enterprise technology systems that support regulatory compliance, financial control, and operational scale.</p>",
  } satisfies HeroData,
  setupOptions: {
    title: "Vantheon: The Technology Arm of KPI ",
    description: "",
    items: [
      {
        id: 1,
        title: "Regulation Is Now System-Led",
        description:
          "<p>Compliance today is driven by data, controls, and real-time visibility, not post-fact reviews. Audit, tax, and regulatory outcomes increasingly depend on how systems are designed and governed.</p>",
        media: {
          path: "/images/tech-img-01.jpg",
          alt: "Mainland Business Setup",
        },
        slug: "/corporate-services-uae/mainland",
      },
      {
        id: 2,
        title: "Technology, Built Into the KPI Model",
        description:
          "<p>Vantheon was created to ensure regulation is implemented inside enterprise systems, not around them. It connects regulatory intent with system configuration, process design, and control frameworks.</p>",
        media: {
          path: "/images/tech-img-02.jpg",
          alt: "Freezone Business Setup",
        },
        slug: "/corporate-services-uae/freezone",
      },
      {
        id: 3,
        title: "From Advice to Execution",
        description:
          "<p>Through Vantheon, KPI supports ERP, HRMS, and compliance technology implementations that stand up to audit, scrutiny, and scale. This allows us to advise, implement, and assess with full accountability across both regulation and technology.</p>",
        media: {
          path: "/images/tech-img-03.jpg",
          alt: "Offshore Business Setup",
        },
        slug: "/corporate-services-uae/offshore",
      },
    ] satisfies SetupOptionItem[],
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
  keyBenefits: {
    title: "What We Do",
    slides: [
      {
        id: 1,
        title: "Business-Friendly Structure",
        items: [
          "100% foreign ownership",
          "No local sponsor required",
          "No minimum share capital requirement",
          "Over 2,500+ business activities available",
          "Combine multiple activity groups under one license",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "Cost-Effective Setup",
        items: [
          "One of the most competitive license costs in Dubai",
          "No paid-up share capital required",
          "Reasonable visa allocation costs",
          "Zero personal income tax",
          "Zero corporate tax for qualifying companies",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 3,
        title: "Flexible Visa Options",
        items: [
          "Choose 0 to 6 visa allocations",
          "Visas for owners, employees, and dependents",
          "Efficient visa processing through digital portal",
          "Option to upgrade visa package as you grow",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 4,
        title: "Tax & Banking Advantages",
        items: [
          "100% repatriation of capital and profits",
          "No customs duties on import/export",
          "Assistance with corporate bank account opening",
          "Access to global trade networks",
        ],
        media: {
          path: "/images/mayden-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
  whyBuild: {
    title: "Why Businesses Choose DWTC Free Zone?",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/busness-freezone-1.svg",
          alt: "Prime Location",
        },
        title: "Prime Location",
        description:
          "<p>A central Dubai address with excellent connectivity to DIFC, Downtown Dubai, and Sheikh Zayed Road.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/busness-freezone-2.svg",
          alt: "Global Reputation",
        },
        title: "Global Reputation",
        description:
          "<p>Part of Dubai World Tra de Centre, offering strong international credibility and brand recognition.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/busness-freezone-3.svg",
          alt: "Client Focused",
        },
        title: "Client Focused",
        description:
          "<p>Access to flexi desks, serviced offices, and scalable workspace solutions to match different business needs.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
};

export const metadata: Metadata = {
  title: "Where Advisory Meets Enterprise Technology",
  description:
    "KPI Group supports organisations operating in complex regulatory environments across audit, tax, and compliance",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero variant="technology" data={localData.hero} />
      <CorporateServicesUaeSetupOptions
        variant="technology"
        data={localData.setupOptions}
      />
      <HomeCounter data={localData.counterList} />
      <MeydanKeyBenefits data={localData.keyBenefits} />
      <CorporateServicesUaeWhyBuild
        variant="technology"
        data={localData.whyBuild}
      />
    </>
  );
}
