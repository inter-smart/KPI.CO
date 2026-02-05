import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import { Metadata } from "next";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type MediaItem = {
  path: string;
  alt: string;
};

export type HeroData = {
  id: number;
  title: string;
  description: string;
  additionalContent: string[];
};

export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type SetupOptionItem = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
  slug: string;
};

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  description: string;
};

export type BankingPartner = {
  id: number;
  name: string;
  logo: string;
};

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type WhyChooseItem = {
  id: number;
  media: MediaItem;
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
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

/* ------------------------------------------------------------------ */
/* local_data                                                         */
/* ------------------------------------------------------------------ */

const localData = {
  hero: {
    id: 1,
    title: "Business Setup Experts - Start Your Business in the UAE",
    description:
      "<p>The United Arab Emirates is built for founders with ambition. Whether you are launching your first company or expanding internationally, KPI helps you set up in the UAE with the right structure, clear guidance, and full support beyond incorporation. From choosing the best jurisdiction to managing banking, tax, and visas, we make the process simple, transparent, and stress-free.</p>",
    additionalContent: [
      "30+ years of experience",
      "No hidden costs",
      "Free banking consultation",
    ],
  } satisfies HeroData,

  whyBuild: {
    title: "Why Build Your Business in The UAE?",
    description:
      "<p>The UAE’s appeal goes beyond world-class infrastructure and a vibrant lifestyle. Here’s why it’s the perfect place to start and scale your company: </p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/corporate-services-uae-service-1.svg",
          alt: "Strategic Location",
        },
        title: "Strategic Location",
        description:
          "<p>Connect easily to Europe, Asia, and Africa from the UAE, giving your business fast access to global markets.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/corporate-services-uae-service-2.svg",
          alt: "Tax Benefits",
        },
        title: "Tax Benefits",
        description:
          "<p>Benefit from zero personal income tax and a competitive corporate tax framework for predictable long-term planning.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/corporate-services-uae-service-3.svg",
          alt: "100% Ownership",
        },
        title: "100% Ownership",
        description:
          "<p>Operate in a secure, pro-business environment backed by government policies that support growth.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/corporate-services-uae-service-4.svg",
          alt: "Business-Friendly",
        },
        title: "Business-Friendly",
        description:
          "<p>Access trusted banks, investor networks, and financial infrastructure to run your operations smoothly.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/corporate-services-uae-service-5.svg",
          alt: "Visa Support",
        },
        title: "Visa Support",
        description:
          "<p>Get your company operational fast with streamlined licensing, visas, and government approvals. </p>",
      },
      {
        id: 6,
        media: {
          path: "/images/corporate-services-uae-service-6.svg",
          alt: "World-Class Infrastructure",
        },
        title: "World-Class Infrastructure",
        description:
          "<p>Access a dynamic ecosystem of startups, accelerators, and tech hubs to scale your business ideas faster.</p>",
      },
    ] satisfies WhyBuildItem[],
  },

  setupOptions: {
    title: "Business Setup Options in The UAE",
    description:
      "<p>The UAE offers several ways to establish a company; each suited to different business goals and operating models. We help you select the right structure from day one, ensuring it aligns with your business activity, growth plans, and long-term objectives.</p>",
    items: [
      {
        id: 1,
        title: "Mainland",
        description:
          "<p>Mainland companies allow you to operate anywhere in the UAE and engage directly with local clients and government entities. This structure offers maximum operational flexibility and is suitable for businesses that need a strong presence in the local market.</p>",
        media: {
          path: "/images/corporate-services-uae-setup-1.jpg",
          alt: "Mainland Business Setup",
        },
        slug: "/corporate-services-uae/mainland",
      },
      {
        id: 2,
        title: "Freezone",
        description:
          "<p>Free Zone setups are ideal for startups, SMEs, and international companies focused on specific industries. They provide a business-friendly environment with simplified registration, regulatory support, and easy access to sector-specific infrastructure.</p>",
        media: {
          path: "/images/corporate-services-uae-setup-2.jpg",
          alt: "Freezone Business Setup",
        },
        slug: "/corporate-services-uae/freezone",
      },
      {
        id: 3,
        title: "Offshore",
        description:
          "<p>Offshore companies are designed for international operations, holding structures, or cross-border investments. They do not trade within the UAE but offer a streamlined, efficient setup with confidentiality and access to UAE professional services.</p>",
        media: {
          path: "/images/corporate-services-uae-setup-3.jpg",
          alt: "Offshore Business Setup",
        },
        slug: "/corporate-services-uae/offshore",
      },
    ] satisfies SetupOptionItem[],
  },

  formationProcess: {
    title: "Company Formation Process",
    description:
      "<p>Our streamlined process ensures your business is set up correctly from day one.</p>",
    steps: [
      {
        id: 1,
        step: "01",
        title: "Consultation",
        description:
          "We discuss your business goals, activities, and recommend the best jurisdiction and license type.",
      },
      {
        id: 2,
        step: "02",
        title: "Documentation",
        description:
          "We prepare all required documents, applications, and handle the submission process.",
      },
      {
        id: 3,
        step: "03",
        title: "Approval",
        description:
          "We liaise with authorities to obtain approvals and ensure compliance with all requirements.",
      },
      {
        id: 4,
        step: "04",
        title: "License Issuance",
        description:
          "Your trade license is issued and your company is officially registered.",
      },
      {
        id: 5,
        step: "05",
        title: "Post-Setup Support",
        description:
          "We assist with banking, visas, office setup, and ongoing compliance requirements.",
      },
    ] satisfies ProcessStep[],
  },

  banking: {
    title: "Corporate Banking Support",
    description:
      "<p>We help you open corporate bank accounts with leading UAE banks and navigate the banking requirements.</p>",
    partners: [
      { id: 1, name: "Emirates NBD", logo: "/images/bank-logo-1.png" },
      { id: 2, name: "ADCB", logo: "/images/bank-logo-2.png" },
      { id: 3, name: "Mashreq", logo: "/images/bank-logo-3.png" },
      { id: 4, name: "FAB", logo: "/images/bank-logo-4.png" },
      { id: 5, name: "RAKBANK", logo: "/images/bank-logo-5.png" },
      { id: 6, name: "HSBC", logo: "/images/bank-logo-6.png" },
    ] satisfies BankingPartner[],
  },

  services: {
    title: "Our Best Corporate Services",
    description:
      "<p>Comprehensive corporate services to support your business at every stage.</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/corporate-service-icon-1.svg",
          alt: "Company Formation",
        },
        title: "Company Formation",
        description:
          "Complete setup services including license, registration, and legal documentation.",
      },
      {
        id: 2,
        media: {
          path: "/images/corporate-service-icon-2.svg",
          alt: "PRO Services",
        },
        title: "PRO Services",
        description:
          "Government liaison services for visas, permits, and regulatory compliance.",
      },
      {
        id: 3,
        media: {
          path: "/images/corporate-service-icon-3.svg",
          alt: "Visa Processing",
        },
        title: "Visa Processing",
        description:
          "Employee and investor visa processing with family sponsorship support.",
      },
      {
        id: 4,
        media: {
          path: "/images/corporate-service-icon-4.svg",
          alt: "Office Solutions",
        },
        title: "Office Solutions",
        description:
          "Flexible office space solutions from virtual offices to dedicated premises.",
      },
      {
        id: 5,
        media: {
          path: "/images/corporate-service-icon-5.svg",
          alt: "Banking Assistance",
        },
        title: "Banking Assistance",
        description: "Corporate account opening support with major UAE banks.",
      },
      {
        id: 6,
        media: {
          path: "/images/corporate-service-icon-6.svg",
          alt: "Compliance Support",
        },
        title: "Compliance Support",
        description:
          "Ongoing compliance, license renewals, and regulatory updates.",
      },
    ] satisfies ServiceItem[],
  },

  whyChoose: {
    title: "Why Choose KPI?",
    items: [
      {
        id: 1,
        media: {
          path: "/images/why-choose-icon-1.svg",
          alt: "30+ Years Experience",
        },
        title: "30+ Years Experience",
        description:
          "<p>Decades of experience helping businesses establish and grow in the UAE market.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/why-choose-icon-2.svg",
          alt: "End-to-End Support",
        },
        title: "End-to-End Support",
        description:
          "<p>Complete support from initial consultation through to ongoing compliance and growth.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/why-choose-icon-3.svg",
          alt: "Transparent Pricing",
        },
        title: "Transparent Pricing",
        description:
          "<p>Clear, upfront pricing with no hidden fees or unexpected costs.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/why-choose-icon-4.svg",
          alt: "Expert Guidance",
        },
        title: "Expert Guidance",
        description:
          "<p>Professional advisors who understand UAE regulations and business requirements.</p>",
      },
    ] satisfies WhyChooseItem[],
  },

  cta: {
    title: "Build Your Business in the UAE",
    description:
      "<p>Ready to start your UAE business journey? Get in touch with our corporate services team for a free consultation.</p>",
    button: {
      label: "Get Started Today",
      link: "/contact",
    },
  } satisfies CtaData,

  faqs: {
    title: "FAQs",
    items: [
      {
        id: 1,
        question: "How long does it take to set up a company in the UAE?",
        answer:
          "The timeline varies by jurisdiction. Freezone companies can be set up in 3-5 business days, while mainland companies typically take 7-14 business days depending on the license type and approvals required.",
      },
      {
        id: 2,
        question: "What is the difference between mainland and freezone?",
        answer:
          "Mainland companies can trade anywhere in the UAE and with government entities, but may require a local service agent. Freezone companies offer 100% foreign ownership and tax benefits but have restrictions on trading in the local UAE market.",
      },
      {
        id: 3,
        question: "Do I need a physical office to start a business?",
        answer:
          "Requirements vary by jurisdiction. Freezone companies often accept flexi-desk or virtual office solutions. Mainland companies typically require a physical office address, though the size requirements depend on the license type.",
      },
      {
        id: 4,
        question: "How many visas can I get with my company license?",
        answer:
          "The number of visas depends on your license type, office space size, and jurisdiction. Freezone licenses typically allow 1-6 visas initially, while mainland licenses vary based on office space and business activities.",
      },
      {
        id: 5,
        question: "What are the ongoing costs of maintaining a UAE company?",
        answer:
          "Ongoing costs include annual license renewal, office rent, visa renewals, and compliance requirements. We provide transparent pricing and help you budget for all recurring expenses.",
      },
    ] satisfies FaqItem[],
  },
};

export const metadata: Metadata = {
  title: "#1 UAE Business Setup Consultants | Start Your Business in UAE",
  description:
    "Set up a mainland company in the UAE with full market access. Compare license types, setup steps and visa options. Clear process. No hidden fees.",
};

export default function CorporateServicesUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <CorporateServicesUaeWhyBuild data={localData.whyBuild} />
      <CorporateServicesUaeSetupOptions data={localData.setupOptions} />
      <CorporateServicesUaeFormationProcess data={localData.formationProcess} />
      <CorporateServicesUaeBanking data={localData.banking} />
      <CorporateServicesUaeServices data={localData.services} />
      <CorporateServicesUaeWhyChoose data={localData.whyChoose} />
      <CorporateServicesUaeCta data={localData.cta} />
      <CorporateServicesUaeFaq data={localData.faqs} />
    </>
  );
}
