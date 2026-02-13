import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import { blogData } from "@/data/blogData";
import VatGuidance, {
  VatGuidanceData,
} from "@/components/features/vat-services/VatGuidance";

export type InsightItem = {
  id: number;
  title: string;
  description: string; 
  date: string;
  readTime: string;
  media: MediaItem;
  slug: string;
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

export type BankingPartner = {
  id: number;
  media: {
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

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
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

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/vatservices-inner-hero-desktop.svg",
      mobilePath: "/images/vatservices-inner-hero-mobile.svg",
      alt: "VAT Advisory & Compliance That Works for your Business ",
    },
    title: "VAT Advisory & Compliance That Works for your Business ",
    description:
      "<p>Navigate UAE VAT with confidence. From registration to returns, compliance reviews to FTA support, KPI provides practical VAT guidance that keeps your business compliant and your operations smooth</p>",
  } satisfies HeroData,
  vatGuidance: {
    title: "When Businesses Need VAT Guidance & Support",
    description:
      "VAT influences how you price, contract, and manage cash flow. When handled well, it becomes routine. When handled poorly, it leads to penalties, cash flow issues, and FTA scrutiny. Addressing VAT correctly from the start prevents disruption and keeps it predictable.",
    highlighted_text: "VAT typically becomes a focus when organisations:",
    service_list: [
      "Start taxable operations or reach registration thresholds ",
      "Expand into new activities, markets, or group structures",
      "Enter complex supplier, customer, or cross-border arrangements ",
      "Implement new ERP systems or change operational models ",
      "Face FTA inquiries, audits, or penalty notices ",
      "Need alignment between finance, legal, procurement, and operations ",
    ],
    media: {
      path: "/images/vat-guidance-support.jpg",
      alt: "VAT Guidance & Support",
    },
  } satisfies VatGuidanceData,
  banking: {
    title: "Banking Support for Your UAE Business",
    description:
      "<p>We support clients with bank account opening through trusted UAE and international banking partners.</p>",
    partners: [
      {
        id: 1,
        media: {
          path: "/images/banking-partner-1.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 2,
        media: {
          path: "/images/banking-partner-2.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 3,
        media: {
          path: "/images/banking-partner-3.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 4,
        media: {
          path: "/images/banking-partner-4.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 5,
        media: {
          path: "/images/banking-partner-5.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 6,
        media: {
          path: "/images/banking-partner-3.svg",
          alt: "Emirates NBD",
        },
      },
    ] satisfies BankingPartner[],
  },
  cta: {
    title: "Ready to Start Your Business in the UAE?",
    description:
      "<p>Our team will help you choose the right setup, jurisdiction, and structure based on your goals, risk profile, and budget. Talk to our experts today!</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/meydan-cta-overlay.svg",
      overlayMobile: "/images/meydan-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a Meydan Free Zone company?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title: "Can I set up remotely from outside the UAE?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title: "Is 100% foreign ownership allowed?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "How long does setup take?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title: "How much does a Meydan Free Zone license cost?",
        description: `
                    <p>Packages start from approximately AED 12,500; costs vary by visa package and services required.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI is more than a company formation agent. We’re your partner in business growth, providing end-to-end support across audit, risk, and corporate services. We help businesses with:</p>",
    items: [
      {
        id: 1,
        text: "Strategic business structuring",
      },
      {
        id: 2,
        text: "Regulatory and compliance guidance",
      },
      {
        id: 3,
        text: "Corporate governance support",
      },
      {
        id: 4,
        text: "Risk assessment and advisory",
      },
      {
        id: 5,
        text: "Ongoing post‑setup service",
      },
    ],
    ftr_description:
      "<p>Our approach ensures that your Meydan Free Zone company is structured for growth, compliant, and aligned with your business strategy.</p>",
    media: {
      path: "/images/meydan-document.jpg",
      alt: "Meydan Document",
    },
  } satisfies DocumentRequiredData,
  insights: {
    title: "Related Blogs",
    items: blogData.slice(0, 4).map((blog) => ({
      id: blog.id,
      media: blog.media,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
  keyBenefits: {
    title: "Understanding UAE VAT ",
    description:
      "Value Added Tax (VAT) was introduced in the UAE in 2018 at a standard rate of 5%. It applies to most goods and services, with specific rules for registration, rates, and compliance. ",
    slides: [
      {
        id: 1,
        title: "VAT Registration Thresholds ",
        items: [
          {
            title: "Mandatory registration: ",
            description:
              "Required when taxable supplies exceed AED 375,000 in the past 12 months or are expected to exceed this amount in the next 30 days ",
          },
          {
            title: "Voluntary registration:",
            description:
              "Available when taxable supplies exceed AED 187,500 in the same period  ",
          },
          {
            title: "Group registration: ",
            description:
              "Group registration: Businesses with multiple UAE entities can register as a single taxable group  ",
          },
        ],
        media: {
          path: "/images/vat-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "VAT Rates in the UAE ",
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
        title: "VAT Return Filing ",
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
    ],
  } satisfies MeydanKeyBenefitsData,
};

export default function VatServicesUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <VatGuidance data={localData.vatGuidance} />
      <MeydanKeyBenefits data={localData.keyBenefits} variant="Vat-Services" />
      <DocumentRequired data={localData.document_required_data} />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="saifz" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} variant="saifz" />
    </>
  );
}
