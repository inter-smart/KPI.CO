import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import HomeCounter from "@/components/features/home/HomeCounter";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import DiscussYourRisk from "@/components/features/risk-overview/DiscussYourRisk";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";

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
    data_description: string;
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

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
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

export type InsightItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  date_full?: string;
  media: MediaItem;
  slug: string;
  category?: string;
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
    title: "Vantheon: The Technology Arm Of KPI ",
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
        title: "ERP & Finance Systems",
        data_description:
          "Vantheon is a NetSuite implementation and advisory partner, supporting organisations with complex finance, multi‑entity structures, and cross‑border operations. We focus on building finance systems that support control, transparency, and scale, not just transactional processing.",
        items: [
          "NetSuite implementation and optimisation",
          "Multi‑entity and multi‑subsidiary architecture",
          "Financial controls, workflows, and approval design",
          "Regulatory‑aligned reporting and audit readiness",
        ],
        media: {
          path: "/images/technology-whatdo-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "HR & Workforce Systems",
        data_description:
          "Through infithra, KPI Group’s HRMS platform, Vantheon supports organisations with distributed, high‑movement, and operationally complex workforces. infithra is designed for businesses where people, roles, and locations don’t stay static.",
        items: [
          "Employee lifecycle management",
          "Attendance, payroll, and statutory alignment",
          "Role‑based access and audit trails",
          "Integration with finance and compliance systems",
        ],
        media: {
          path: "/images/technology-whatdo-2.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 3,
        title: "Compliance‑Driven Technology Initiatives",
        data_description:
          "Vantheon plays a central role in system‑led compliance initiatives. This capability is critical as regulatory frameworks increasingly rely on real‑time, system‑generated data rather than post‑fact reporting.",
        items: [
          "E‑invoicing and transaction reporting readiness",
          "System alignment for VAT, corporate tax, and regulatory audits",
          "Data standardisation and master data governance",
          "Integration between ERPs, ASPs, and external regulatory networks",
        ],
        media: {
          path: "/images/technology-whatdo-3.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
  whyBuild: {
    title: "How We Work",
    description: "Vantheon engagements are structured around three principles",
    items: [
      {
        id: 1,
        media: {
          path: "/images/busness-technology-1.svg",
          alt: "Regulatory Awareness",
        },
        title: "Regulatory Awareness",
        description:
          "<p>Systems are designed with audit, tax, and regulatory outcomes in mind from day one.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/busness-technology-2.svg",
          alt: "System Integrity",
        },
        title: "System Integrity",
        description:
          "<p>We prioritise clean data models, clear controls, and defensible workflows over cosmetic configuration.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/busness-technology-3.svg",
          alt: "Long‑Term Scalability",
        },
        title: "Long‑Term Scalability",
        description:
          "<p>Solutions are built to accommodate regulatory change, business growth, and system evolution.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Why Vantheon",
    description:
      "<p>Vantheon is not a standalone tech vendor. It is the technology execution layer of KPI Group, purpose‑built to support organisations where systems, compliance, and scale are inseparable.</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/technology-howwork-1.svg",
          alt: "Backed by KPI Group’s audit, tax, and regulatory expertise",
        },
        title: "Backed by KPI Group’s audit, tax, and regulatory expertise",
        description: "",
      },
      {
        id: 2,
        media: {
          path: "/images/technology-howwork-2.svg",
          alt: "Proven experience across ERP, HRMS, and compliance‑led systems",
        },
        title: "Proven experience across ERP, HRMS, and compliance‑led systems",
        description: "",
      },
      {
        id: 3,
        media: {
          path: "/images/technology-howwork-3.svg",
          alt: "Strong focus on governance, controls, and auditability",
        },
        title: "Strong focus on governance, controls, and auditability",
        description: "",
      },
      {
        id: 4,
        media: {
          path: "/images/technology-howwork-4.svg",
          alt: "Designed for organisations operating under UAE federal and free‑zone frameworks",
        },
        title:
          "Designed for organisations operating under UAE federal and free‑zone frameworks",
        description: "",
      },
    ] satisfies ServiceItem[],
  },
  discussYourRisk: {
    title: "Talk to Us",
    description:
      "<p>Whether you’re planning a NetSuite implementation, preparing for UAE e-Invoicing, or reassessing your HR or finance systems, KPI and Vantheon help you get it right the first time.</p>",
    button: {
      label: "Get in Touch",
      link: "/#contact",
    },
    images: {
      overlay: "/images/technology-overlay.svg",
      overlayMobile: "/images/technology-overlay-mob.svg",
    },
  } satisfies DiscussYourRiskData,
  insights: {
    title: "Our Insights",
    items: blogData.slice(0, 4).map((blog) => ({
      id: blog.id,
      media: blog.media,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      readTime: blog.readTime,
      date_full: blog.date_full,
      slug: `/blog/${blog.slug}`,
    })),
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
      <HomeCounter variant="technology" data={localData.counterList} />
      <MeydanKeyBenefits variant="technology" data={localData.keyBenefits} />
      <CorporateServicesUaeWhyBuild
        variant="technology"
        data={localData.whyBuild}
      />
      <CorporateServicesUaeServices
        variant="technology"
        data={localData.services}
      />
      <DiscussYourRisk variant="technology" data={localData.discussYourRisk} />
         <HomeOurInsights data={localData.insights} />
    </>
  );
}
