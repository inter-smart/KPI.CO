import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";

import { Metadata } from "next";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import { blogData } from "@/data/blogData";

export type MainlandBusinessData = {
  title: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  footerDescription?: string;
  image: {
    path: string;
    alt: string;
  };
};

export type MediaItem = {
  path: string;
  alt: string;
};

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
      desktopPath: "/images/jafza-offshore-bg.svg",
      mobilePath: "/images/jafza-offshore-bg-mobile.svg",
      alt: "Company Formation in JAFZA",
    },
    title: "Company Formation in <br/> JAFZA ",
    description:
      "<p>Set up your offshore company in Jebel Ali Free Zone (JAFZA) - a strategic, tax-efficient hub offering 100% foreign ownership, asset protection, and simplified setup for global businesses.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start a Business in Jebel Ali Free Zone",
    description:
      "<p>Jebel Ali Free Zone Authority (JAFZA) is one of the UAE’s oldest and most established free zones, located in Dubai. Known for its world-class infrastructure, strategic proximity to Jebel Ali Port and Al Maktoum International Airport, and investor-friendly regulations, JAFZA is a top choice for entrepreneurs and international businesses seeking an offshore presence in the UAE.</p>",
    highlightsTitle: "Why founders start a JAFZA Offshore Company:",
    highlights: [
      "100% foreign ownership with no local sponsor required",
      "Zero corporate and personal income tax for qualifying businesses",
      "Full repatriation of capital and profits",
      "Easy access to UAE and regional markets",
      "Confidentiality and asset protection for holding and investment companie",
    ],
    footerDescription:
      "<p>JAFZA Offshore enables founders and investors to create tax-efficient structures, conduct international trading, and hold UAE-based assets, all while leveraging Dubai’s global connectivity and business-friendly ecosystem.</p>",
    image: {
      path: "/images/offshore-busnes.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Key Benefits of JAFZA Business Setup",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/jafza-offshore-service-1.svg",
          alt: "Cost Efficiency",
        },
        title: "Cost Efficiency",
        description:
          "<p>Competitive setup fees starting from AED 15,000 to minimize entry costs.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/jafza-offshore-service-2.svg",
          alt: "Full Ownership",
        },
        title: "Full Ownership",
        description:
          "<p>100% foreign ownership with complete profit and capital repatriation.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/jafza-offshore-service-3.svg",
          alt: "Tax Incentives",
        },
        title: "Tax Incentives",
        description:
          "<p>Zero corporate and personal income tax for qualifying offshore companies.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/jafza-offshore-service-4.svg",
          alt: "Simplified Setup",
        },
        title: "Simplified Setup",
        description:
          "<p>Streamlined registration and administrative support for fast incorporation.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/jafza-offshore-service-5.svg",
          alt: "Strategic Location",
        },
        title: "Strategic Location",
        description:
          "<p>Proximity to Jebel Ali Port, Dubai airport, and global shipping routes.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/jafza-offshore-service-6.svg",
          alt: "Flexible Facilities ",
        },
        title: "Flexible Facilities ",
        description:
          "<p> Ability to hold investments, manage assets, or conduct international trading.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/jafza-offshore-service-7.svg",
          alt: "Visa Solutions",
        },
        title: "Visa Solutions",
        description:
          "<p> Flexible employee visa packages for startups, SMEs, and expanding teams.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/jafza-offshore-service-8.svg",
          alt: "Business Ecosystem",
        },
        title: "Business Ecosystem",
        description:
          "<p> Access to investors, service providers, and regional business partners</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  document_required_data: {
    title: "Why Work with KPI ",
    description:
      "<p>KPI Group is more than a company formation agent. We’re your <br/>partner in business growth, providing end-to-end support <br/>across corporate, regulatory, and business advisory services. <br/>We help JAFZA Offshore companies with:</p>",
    items: [
      {
        id: 1,
        text: "Strategic company structuring for tax efficiency and <br/>international operations",
      },
      {
        id: 2,
        text: "Regulatory and compliance guidance tailored to JAFZA <br/>Offshore requirements",
      },
      { id: 3, text: "Corporate governance support to streamline operations" },
      {
        id: 4,
        text: "Risk assessment and advisory for secure offshore expansion",
      },
      {
        id: 5,
        text: "Ongoing post‑setup services including licenses, visas, and<br/> approvals",
      },
    ],

    media: {
      path: "/images/whywork-offshore.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "<p>Our approach ensures that your JAFZA Offshore company is <br/>structured for growth, fully compliant, and aligned with your <br/>business strategy - giving you the freedom to focus on<br/> expanding and managing your global business.</p>",
  } satisfies DocumentRequiredData,
  cta: {
    title: "Launch Your JAFZA Offshore Company Today",
    description:
      "<p>Get expert guidance to select the right company type, license, and setup for your international business goals. Start your UAE offshore journey with confidence - our team handles the process from start to finish.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/jafza-overlay.svg",
      overlayMobile: "/images/jafza-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "Can I have 100% foreign ownership?",
        description: `
                      <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                      `,
      },
      {
        id: 2,
        title: "How long does it take to set up a JAFZA Offshore company?",
        description: `
                      <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                      `,
      },
      {
        id: 3,
        title: "Are there minimum capital requirements?",
        description: `
                      <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                      `,
      },
      {
        id: 4,
        title:
          "What’s the difference between a mainland and freezone company in the UAE?",
        description: `
                      <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                      `,
      },
      {
        id: 5,
        title: "Why choose JAFZA company setup?",
        description: `
                      <p>Setting up in Jebel Ali Free Zone protects your assets, lowers tax liabilities, and keeps your business information secure.</p>
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
  title: "JAFZA Offshore Company Setup | Start Your Business in Dubai  ",
  description:
    "Start your business in Dubai in Jebel Ali Free Zone. 100% foreign ownership, zero tax, full profit repatriation & asset protection. Get in touch!",
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="offshore"
        data={localData.whyBuild}
      />
      <DocumentRequired
        data={localData.document_required_data}
        variant="sop"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq variant="side-arrow" data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
