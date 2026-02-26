import { Metadata } from "next";
import { MediaItem } from "../page";
import { blogData } from "@/data/blogData";
import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import OffshoreCompaniesUae from "@/components/offshore/OffshoreCompaniesUae";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";

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

export type MainlandBusinessData = {
  title: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  footerDescription: string;
  image: {
    path: string;
    alt: string;
  };
};

export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type BankingPartner = {
  id: number;
  media: {
    path: string;
    alt: string;
  };
};

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
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
      desktopPath: "/images/offshore-innerbanner-desktop.svg",
      mobilePath: "/images/offshore-innerbanner-mobile.svg",
      alt: "Expert SOP Consulting & Development in UAE",
    },
    title: "Offshore Company Formation in the UAE",
    description:
      "<p>Set up an offshore company in the UAE to manage international business, protect assets, and structure global investments efficiently. Ideal for businesses and individuals operating outside the UAE and do not require a physical presence. </p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start an Offshore Company in the UAE",
    description:
      "<p>An offshore company is a legal entity registered in the UAE for ownership and holding purposes without operating locally. It is commonly used to hold assets, manage investments, or structure group ownership, with no requirement for offices or residence visas. </p>",
    highlightsTitle: "Offshore companies are commonly used for: ",
    highlights: [
      "Intellectual property holding ",
      "Property ownership structures ",
      "Holding assets and investments ",
      "Shareholding and investment vehicles ",
      "International business and trading activities ",
    ],
    footerDescription: "",
    image: {
      path: "/images/offshore-business.jpg",
      alt: "Meydan",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Why Choose a Mainland Company Setup?   ",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/offshore-busness-1.svg",
          alt: "Cost Effective",
        },
        title: "Asset Protection ",
        description:
          "<p>Separate ownership from operations and safeguard assets through a recognized offshore structure.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/offshore-busness-2.svg",
          alt: "Cost Effective",
        },
        title: "Ownership Control ",
        description:
          "<p>Retain full ownership and control of the company without any local partners or sponsors.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/offshore-busness-3.svg",
          alt: "Cost Effective",
        },
        title: "Regulatory Stability",
        description:
          "<p>Operate within a regulated, internationally recognized framework that supports ownership structures and compliance.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/offshore-busness-4.svg",
          alt: "Cost Effective",
        },
        title: "Tax Efficiency ",
        description:
          "<p>Commonly used in tax-efficient international structures, subject to applicable global tax regulations.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/offshore-busness-5.svg",
          alt: "Cost Effective",
        },
        title: "Confidentiality Safeguards ",
        description:
          "<p>Benefit from structured privacy for shareholders and directors, in line with regulatory requirements.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/offshore-busness-6.svg",
          alt: "Cost Effective",
        },
        title: "Global Operations",
        description:
          "<p>Conduct international business, hold foreign investments, and operate across multiple jurisdictions.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/offshore-busness-7.svg",
          alt: "Cost Effective",
        },
        title: "No Physical Office",
        description:
          "<p>No requirement to lease office space or maintain a UAE presence to keep the company active.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/offshore-busness-8.svg",
          alt: "Cost Effective",
        },
        title: "Cost Efficiency",
        description:
          "<p>Reduced setup and maintenance costs compared to mainland and free zone companies.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  offshoreCompanies: {
    title: "Types Of Offshore Companies In The UAE",
    description:
      "Choosing the right offshore jurisdiction depends on your asset type, ownership structure, and banking requirements.",
    free_zone_list: [
      {
        id: 1,
        title: "RAK ICC Offshore Company",
        description:
          "Registered under the Ras Al Khaimah International Corporate Centre, RAK ICC is a cost-effective offshore jurisdiction commonly used for holding companies and international ownership structures, with lower setup and maintenance costs.",
        value: "AED XXX",
        zone_list: [
          "Quick incorporation process (typically a few days)",
          "No minimum office or UAE residency requirements",
          "Flexible shareholding and directorship options",
          "Suitable for holding, investment, and intellectual property structures",
        ],
        button: {
          label: "Learn More",
          link: "/contact-us",
          target: false,
        },
      },
      {
        id: 2,
        title: "JAFZA Offshore Company",
        description:
          "Registered under the Jebel Ali Free Zone Authority, JAFZA Offshore is a premium jurisdiction often used for property holding and complex ownership structures, with higher setup costs reflecting its reputation and banking acceptance.",
        value: "AED XXX",
        zone_list: [
          "Recognized by major UAE and international banks",
          "Ideal for property and regional investment holding",
          "Supports multi-tiered ownership and company structures",
          "Robust regulatory framework for compliance and governance",
        ],
        button: {
          label: "Learn More",
          link: "/contact-us",
          target: false,
        },
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "<p>Offshore companies are designed for holding and ownership structures. Businesses that plan to trade locally, lease office space, or require UAE visas should consider a mainland or free zone company instead.</p>",
      },
    ],
  },
  banking: {
    title: "Banking Support for Offshore Companies",
    description:
      "<p>Offshore banking involves enhanced due diligence and jurisdiction-specific requirements. We assist with bank selection, documentation preparation, and application coordination through UAE and international banks. We support clients with bank account opening through trusted UAE and international banking partners.</p>",
    partners: [
      {
        id: 1,
        media: {
          path: "/images/banking-partner-6.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 2,
        media: {
          path: "/images/banking-partner-1.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 3,
        media: {
          path: "/images/banking-partner-2.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 4,
        media: {
          path: "/images/banking-partner-3.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 5,
        media: {
          path: "/images/banking-partner-4.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 6,
        media: {
          path: "/images/banking-partner-7.svg",
          alt: "Emirates NBD",
        },
      },
    ] satisfies BankingPartner[],
  },
  whyChoose: {
    title: "Why Work with KPI Group? ",
    description:
      "<p>KPI Group advises offshore structures with a focus on ownership clarity, jurisdiction suitability, and banking readiness – fully aligned with your long-term business goals. Our team supports you with: </p>",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Strategic Structuring",
        description:
          "<p>We design offshore structures suited to asset holding, international operations, and ownership planning. </p>",
      },
      {
        id: 2,
        title: "Jurisdiction Guidance ",
        description:
          "<p>Clear advice on offshore jurisdictions to help you choose the most appropriate framework. </p>",
      },
      {
        id: 3,
        title: "Banking Preparation",
        description:
          "<p>Support with bank selection, documentation readiness, and application coordination. </p>",
      },
      {
        id: 4,
        title: "Transparent Process ",
        description:
          "<p>Clear scope, defined timelines, and straightforward communication throughout the setup.</p>",
      },
      {
        id: 5,
        title: "Ongoing Support",
        description:
          "<p>Even after your company is established, KPI Group provides continuous guidance to help you adapt, scale, and operate efficiently in the UAE.</p>",
      },
      {
        id: 6,
        title: "Ongoing Support",
        description:
          "<p>Even after your company is established, KPI Group provides continuous guidance to help you adapt, scale, and operate efficiently in the UAE.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  cta: {
    title: "Ready to Set Up an Offshore Company in the UAE? ",
    description:
      "<p>Speak with our experts to structure your offshore company based on your objectives, risk profile, and international requirements.  </p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/offshore-cta-overlay-mainland.svg",
      overlayMobile: "/images/offshore-cta-overlay-mainland-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is an offshore company in the UAE? ",
        description: `
                        <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                        `,
      },
      {
        id: 2,
        title: "Can an offshore company trade inside the UAE? ",
        description: `
                        <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                        `,
      },
      {
        id: 3,
        title: "What is a mainland company in the UAE?",
        description: `
                        <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                        `,
      },
      {
        id: 4,
        title: "Do offshore companies require an office or visas? ",
        description: `
                        <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                        `,
      },
      {
        id: 5,
        title: "Is offshore company formation legal in the UAE? ",
        description: `
                        <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                        `,
      },
      {
        id: 6,
        title: "How long does offshore company formation take?  ",
        description: `
                        <p>Offshore incorporation is typically completed within a few working days, subject to documentation approval. </p>
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
  title: " Offshore Company Setup | Offshore Company Registration UAE ",
  description:
    "Offshore business setup in the UAE with trusted advisors. KPI Group helps you register RAK ICC & JAFZA offshore companies with expert structuring and guidance.",
};

export default function CompanyFormationOffshoreUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="mainland"
        data={localData.whyBuild}
      />
      <OffshoreCompaniesUae data={localData.offshoreCompanies} />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="sop"
      />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
