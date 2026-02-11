import HomeHero from "@/components/features/home/HomeHero";
import HomePartner from "@/components/features/home/HomePartner";
import HomeProfessionalAffiliations from "@/components/features/home/HomeProfessionalAffiliations";
import HomeAbout from "@/components/features/home/HomeAbout";
import HomeApart from "@/components/features/home/HomeApart";
import HomeCounter from "@/components/features/home/HomeCounter";
import HomeSecurityInfo from "@/components/features/home/HomeSecurityInfo";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import HomeService from "@/components/features/home/HomeService";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type MediaItem = {
  path: string;
  alt: string;
};

export type SlideItem = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  type: "image" | "video";
  mediaUrl: string;
  posterUrl?: string;
};

export type PartnerItem = {
  id: number;
  name: string;
  logo: string;
};

export type CounterItem = {
  id: number;
  value: number;
  symbol?: string;
  label: string;
};

export type ServicesData = {
  title: string;
  description: string;
  serviceList: ServiceItem[];
};

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
  button: {
    link: string;
    target: boolean;
  };
};

export type ApartItem = {
  id: number;
  media: MediaItem;
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
  category?: string;
};

export type AffiliationItem = {
  id: number;
  media: MediaItem;
  slug: string;
};

export type IsoInfo = {
  media: {
    type: string;
    url: string;
    alt: string;
  };
  label: string;
  description: string;
};

export type SecurityInfoData = {
  title: string;
  description: string;
  isoInfo: IsoInfo;
};

export type SectionWithItems<T> = {
  title: string;
  items: T[];
};

export type AboutData = {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
};

const localData = {
  hero: {
    slides: [
      {
        id: 1,
        title: "A Leading Accounting, Risk & Advisory Firm in the UAE ",
        description:
          "For over 30 years, KPI has supported businesses across the UAE with audit, risk, tax, corporate, and technology advisory services. We work with organisations at every stage, from establishment to expansion, helping strengthen governance, manage risk, and support long-term, sustainable growth.",
        buttonText: "Get in Touch",
        buttonLink: "/",
        type: "video" as const,
        mediaUrl: "/videos/banner.mp4",
        posterUrl: "/images/hero-bg-2.jpg",
      },
    ] satisfies SlideItem[],
  },

  clientPartners: [
    { id: 1, name: "Bharathre", logo: "/images/Bharathre.png" },
    { id: 2, name: "Hiranandani", logo: "/images/hiranandani.png" },
    { id: 3, name: "Edelweiss", logo: "/images/Edleweiss.png" },
    { id: 4, name: "Sharaf Group", logo: "/images/Sharaf.png" },
    { id: 5, name: "Gorica Group", logo: "/images/Gorica.png" },
    { id: 6, name: "logwin", logo: "/images/logwin.png" },
  ] satisfies PartnerItem[],

  services: {
    title: "Our Services",
    description:
      "Navigating the UAE business landscape can be challenging. KPI brings practical experience, clear insight, and trusted guidance to help you move forward. Explore how we can support your business, from compliance through to growth.",
    serviceList: [
      {
        id: 1,
        media: {
          path: "/images/service-icon-1.svg",
          alt: "Audit & Assurance",
        },
        title: "Audit & Assurance",
        description:
          "Independent, high-quality audits that strengthen stakeholder confidence and meet UAE statutory and regulatory requirements. ",
        button: { link: "/", target: false },
      },
      {
        id: 2,
        media: {
          path: "/images/service-icon-2.svg",
          alt: "Risk Advisory",
        },
        title: "Risk Advisory",
        description:
          "Governance-led risk advisory that helps organisations identify, manage, and control risk across operations and compliance.",
        button: { link: "/", target: false },
      },
      {
        id: 3,
        media: {
          path: "/images/service-icon-3.svg",
          alt: "Tax Advisory",
        },
        title: "Tax Advisory",
        description:
          "Practical advice on UAE corporate tax and VAT, focused on clarity, supporting compliance and effective financial planning.",
        button: { link: "/", target: false },
      },
      {
        id: 4,
        media: {
          path: "/images/service-icon-4.svg",
          alt: "Corporate Services",
        },
        title: "Corporate Services",
        description:
          "End-to-end corporate services to start a business in the UAE, including licensing, banking, PRO, and ongoing support. ",
        button: { link: "/", target: false },
      },
      {
        id: 5,
        media: {
          path: "/images/service-icon-5.svg",
          alt: "DIFC & ADGM",
        },
        title: "DIFC & ADGM",
        description:
          "Advisory and audit support for DIFC and ADGM entities, including regulatory, audit, and compliance needs.",
        button: { link: "/", target: false },
      },
      {
        id: 6,
        media: {
          path: "/images/service-icon-6.svg",
          alt: "Digital Transformation",
        },
        title: "Digital Transformation",
        description:
          "Oracle NetSuite consulting, supported by proprietary digital solutions developed across the KPI Group.",
        button: { link: "/", target: false },
      },
    ] satisfies ServiceItem[],
  } satisfies ServicesData,

  apart: {
    title: "What Sets Us Apart?",
    items: [
      {
        id: 1,
        media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
        title: "Multi-disciplinary Depth",
        description:
          "<p>We bring experience across audit, regulation, enterprise systems, and operationally complex businesses. We look at issues in context, not in isolation.</p>",
      },
      {
        id: 2,
        media: { path: "/images/home-apart-item-2.svg", alt: "home-apart" },
        title: "Judgement over Templates",
        description:
          "<p>We don't rely on generic checklists. Our approach is shaped by decades of hands-on engagement and focused on solutions that work in practice.</p>",
      },
      {
        id: 3,
        media: { path: "/images/home-apart-item-3.svg", alt: "home-apart" },
        title: "Independence without Compromise",
        description:
          "<p>We are selective about the work we accept. Where independence, audit quality, or stakeholder interest cannot be protected, we do not proceed. </p>",
      },
      {
        id: 4,
        media: { path: "/images/home-apart-item-4.svg", alt: "home-apart" },
        title: "Long-term Focus",
        description:
          "<p>We prioritise sustainable relationships over short-term growth. Accuracy, transparency, and sound judgement are our priorities - not volume or size.</p>",
      },
      {
        id: 5,
        media: { path: "/images/home-apart-item-5.svg", alt: "home-apart" },
        title: "Strong Regulatory Alignment ",
        description:
          "<p>We are registered and active across UAE mainland, DIFC, and ADGM, supporting regulated entities with clarity and discipline.</p>",
      },
    ] satisfies ApartItem[],
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

  securityInfo: {
    title: "Commitment to Information Security ",
    description: `
    <p>At KPI, protecting client information is a professional obligation, not a technical afterthought. Our ISO 27001-certified Information Security Management System (ISMS) ensures structured governance of confidentiality, data integrity, and access across all engagements. </p>
    <p>This certification underscores our commitment to trust, discipline, and best-practice information security - providing our clients with confidence that their data is protected at every level. </p>
    `,
    isoInfo: {
      media: {
        type: "image",
        url: "/images/iso-certification-icon.svg",
        alt: "ISO certification",
      },
      label: "ISO 27001",
      description: "Information Security Management System",
    },
  } satisfies SecurityInfoData,

  about: {
    title: "About Us",
    description:
      "<p>KPI was established in Dubai in the early 1990s, shaped by hands-on experience working with businesses under real commercial and regulatory pressure. From the outset, our focus has been on delivering reliable audit, accounting, and advisory services grounded in discipline, accountability, and professional judgement.</p><p>Over time, our work expanded beyond traditional audit into risk, regulatory advisory, corporate services, and enterprise technology - reflecting how modern businesses actually operate. Today, KPI is a multi-disciplinary advisory firm serving clients across the UAE and the wider region, guided by independence, integrity, and long-term trust.</p><p>Whether you are establishing a presence, strengthening governance, or scaling operations, KPI provides the expertise, structure, and insight to drive measurable results.</p>",
    button: {
      label: "Get in Touch",
      link: "/",
    },
  } satisfies AboutData,

  insights: {
    title: "Our Insights",
    items: [
      {
        id: 1,
        media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "<p>What to look for when choosing an audit firm in 2025 – from expertise and independence to technology and trust that support better business decisions.</p>",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-insights-2.jpg",
          alt: "Top Audit Firms UAE",
        },
        title: "Top 10 Audit firms in UAE",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-insights-3.jpg",
          alt: "Audit Firm Selection",
        },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut a days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 4,
        media: { path: "/images/home-insights-1.jpg", alt: "VAT Guide UAE" },
        title:
          "VAT in the United Arab Emirates: A Complete Guide for Companies in 2025",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
    ] satisfies InsightItem[],
  },

  professionalAffiliations: {
    title: "Professional Affiliations ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/home-professionalAffiliations-1.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-professionalAffiliations-2.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-professionalAffiliations-3.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 4,
        media: {
          path: "/images/home-professionalAffiliations-4.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 5,
        media: {
          path: "/images/home-professionalAffiliations-5.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 6,
        media: {
          path: "/images/home-professionalAffiliations-6.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
    ] satisfies AffiliationItem[],
  },
};

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <HomeHero data={localData.hero} />
      <HomePartner data={localData.clientPartners} />
      <HomeService data={localData.services} />
      <HomeApart data={localData.apart} />
      <HomeCounter data={localData.counterList} />
      <HomeAbout data={localData.about} className="sm:hidden" />
      <HomeSecurityInfo data={localData.securityInfo} />
      <HomeAbout data={localData.about} className="max-sm:hidden" />
      <HomeProfessionalAffiliations data={localData.professionalAffiliations} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
