import { Metadata } from "next";
import { MediaItem } from "../page";
import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import VatAdvisory, {
  VatAdvisoryData,
} from "@/components/features/vat-services/VatAdvisory";
import BusinessLocation, {
  type BusinessLocationData,
} from "@/components/features/mainland/BusinessLocation";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";

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

export type ServiceItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  inner_title?: string;
  sub_title?: string;
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

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/company-difc-innerbanner.svg",
      mobilePath: "/images/company-difc-innerbanner-mobile.svg",
      alt: "Company Formation in IFZA, UAE",
    },
    title: "DIFC Company Formation in Dubai",
    description:
      "<p>Set up your company in Dubai International Financial Centre (DIFC), a globally recognized financial hub. 100% foreign ownership, fully compliant, and structured for financial and professional services.</p>",
  } satisfies HeroData,
  whyBuild: {
    title: "About DIFC",
    description:
      "<p>Thinking of expanding your business to Dubai? DIFC is the perfect hub. It’s a world-class financial free zone with its own legal system, recognized globally. Whether you’re running a bank, investment firm, fintech startup, or professional services company, DIFC gives you the credibility, governance, and international reach to grow confidently.</p><p><b>Why Choose DIFC For Your Business?</b></p><p>Setting up in DIFC gives you advantages that make your business future-proof:</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/difc-busness-1.svg",
          alt: "Cost Effective",
        },
        title: "Full Foreign Ownership",
        description:
          "<p>Keep 100% control of your company without needing a UAE partner.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/difc-busness-2.svg",
          alt: "Cost Effective",
        },
        title: "Independent Legal System",
        description:
          "<p>Operate under English common law principles with access to DIFC Courts.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/difc-busness-3.svg",
          alt: "Cost Effective",
        },
        title: "Global Recognition",
        description: "<p>Your business is seen and trusted worldwide.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/difc-busness-4.svg",
          alt: "Cost Effective",
        },
        title: "Strategic Location: ",
        description:
          "<p>Easily connect with markets across the Middle East, Asia, Europe, and beyond.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  vatAdvisory: {
    title: "Business Activities in DIFC",
    description: "Wondering what you can do in DIFC? Here’s a quick guide: ",
    service_list: [
      {
        id: 1,
        title: "Financial <br> Services",
        description:
          "Banking, insurance, investment management, and other regulated activities.",
      },
      {
        id: 2,
        title: "Professional <br> Services",
        description: "Legal, consulting, accounting, and advisory firms.",
      },
      {
        id: 3,
        title: "Fintech & <br> Innovation",
        description:
          "Startups creating technology-driven solutions for finance.",
      },
      {
        id: 4,
        title: "Investment & Family <br> offices",
        description:
          "Managing assets and investments efficiently in a global hub.",
      },
    ],
  } satisfies VatAdvisoryData,
  businessLocation: {
    title: "Types of Legal Entities in DIFC",
    description:
      "Choosing the right legal structure sets your company up for success. In DIFC, you can:",
    items: [
      {
        id: 1,
        title: "Company Limited by Shares(LTD)",
        type: "image",
        image: "/images/mainlandBusiness-1.jpg",
        description: "Ideal for standard corporate operations.",
        link: "#",
      },
      {
        id: 2,
        title: "Limited Liability Partnership(LLP)",
        type: "image",
        image: "/images/mainlandBusiness-2.jpg",
        description: "Flexible for professional services firms.",
        link: "#",
      },
      {
        id: 3,
        title: "Branch of a Foreign Company",
        type: "image",
        image: "/images/mainlandBusiness-3.jpg",
        description: "Extend your existing company into DIFC.",
        link: "#",
      },
      {
        id: 4,
        title: "Representative Office",
        type: "image",
        image: "/images/mainlandBusiness-4.jpg",
        description: "Showcase your business without full operations locally.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  services: {
    title: "Types of Licenses in DIFC",
    description: "Select a license based on your business activities:",
    items: [
      {
        id: 1,
        media: {
          path: "/images/difc-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Financial Services License",
        description: "For regulated banking, insurance, and asset management.",
      },
      {
        id: 2,
        media: {
          path: "/images/difc-servive-2.svg",
          alt: "Commercial License",
        },
        title: "Professional / Non-Financial License",
        description:
          "Legal, accounting, consulting, and other professional services.",
      },
      {
        id: 3,
        media: {
          path: "/images/difc-servive-3.svg",
          alt: "Service License",
        },
        title: "Innovation License",
        description: "For fintech startups and tech-driven ventures.",
      },
      {
        id: 4,
        media: {
          path: "/images/difc-servive-4.svg",
          alt: "Maritime License",
        },
        title: "Commercial License",
        description: "General trading activities.",
      },
      {
        id: 5,
        media: {
          path: "/images/difc-servive-3.svg",
          alt: "Maritime License",
        },
        title: "Retail License",
        description: "Sell goods directly to consumers within DIFC.",
      },
      {
        id: 6,
        media: {
          path: "/images/difc-servive-4.svg",
          alt: "Maritime License",
        },
        title: "Holding Company License",
        description: "Manage investments in other companies.",
      },
      {
        id: 7,
        media: {
          path: "/images/difc-servive-3.svg",
          alt: "Maritime License",
        },
        title: "Non-Regulated License",
        description: "Flexible option for non-financial companies outside DFSA",
      },
    ] satisfies ServiceItem[],
  },
  formationProcess: {
    title: "Office Requirement",
    sub_title: null,
    description:
      "<p>All DIFC companies must have a physical office. Options include flexi-desks, serviced offices, or commercial offices depending on the license type.</p><p><b>Setting up Your DIFC Company</b></p>",
    steps: [
      {
        id: 1,
        step: "Step One",
        title: "Choose Your Business Activity",
        inner_title: "Choose Your Business Activity",
        description:
          "<p>Pick the type of business you want to run and make sure it’s allowed in DIFC.</p>",
      },
      {
        id: 2,
        step: "Step Two",
        title: "Select Your Legal Structure",
        inner_title: "Select Your Legal Structure",
        description:
          "<p>Pick the type of business you want to run and make sure it’s allowed in DIFC.</p>",
      },
      {
        id: 3,
        step: "Step Three",
        title: "Submit Your Application",
        inner_title: "Submit Your Application",
        description:
          "<p>Pick the type of business you want to run and make sure it’s allowed in DIFC.</p>",
      },
      {
        id: 4,
        step: "Step Four",
        title: "Get Your License",
        inner_title: "Get Your License",
        description:
          "<p>Pick the type of business you want to run and make sure it’s allowed in DIFC.</p>",
      },
      {
        id: 5,
        step: "Step Five",
        title: "Set Up Your Office",
        inner_title: "Set Up Your Office",
        description:
          "<p>Pick the type of business you want to run and make sure it’s allowed in DIFC.</p>",
      },
    ] satisfies ProcessStep[],
    process_list: [
      {
        id: 1,
        title: "Required documents",
        description:
          "<p>Passport copies, business plan (for regulated entities), corporate documents (if applicable), compliance/AML documents.</p>",
      },
    ],
  },
  banking: {
    title: "Banking Support for Your UAE Business",
    description:
      "<p>We assist with corporate bank accounts in DIFC and UAE banks, ensuring smooth compliance and KYC processes based on your business type.</p>",
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
    title: "Why Work with KPI ",
    description:
      "<p>We’re more than a company formation agent. Our audit, risk, and corporate services expertise ensure your DIFC company is compliant, strategically structured, and ready for growth. Ongoing support is included post-incorporation.</p>",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Industry Leaders",
        description:
          "<p>Years of experience in DIFC company setup.</p>",
      },
      {
        id: 2,
        title: "End-to-End Support",
        description:
          "<p>From consultation to post-setup services. </p>",
      },
      {
        id: 3,
        title: "Local Expertise",
        description:
          "<p>Deep knowledge of DIFC regulations and business environments. </p>",
      },
      {
        id: 4,
        title: "Streamlined Process",
        description:
          "<p>We handle documentation, approvals, and compliance efficiently.</p>",
      },
    ] satisfies WhyChooseItem[],
  },
  cta: {
    title: "Ready to Start Your DIFC Company?",
    description:
      "<p>Talk to our experts to select the right structure, license, and package for your business goals.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/mainland-cta-overlay-mainland.svg",
      overlayMobile: "/images/mainland-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a DIFC company?",
        description: `
                      <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                      `,
      },
      {
        id: 2,
        title: "Who can set up a DIFC company?",
        description: `
                      <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                      `,
      },
      {
        id: 3,
        title: "How long does it take to set up a DIFC company?",
        description: `
                      <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                      `,
      },
      {
        id: 4,
        title: "Can DIFC companies hire employees and issue visas?",
        description: `
                      <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                      `,
      },
      {
        id: 5,
        title: "How much does DIFC company setup cost?",
        description: `
                      <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                      `,
      },
    ] satisfies FaqItem[],
  },
};

export const metadata: Metadata = {
  title: "DIFC Free Zone Company Setup | Start Your Business in Dubai",
  description:
    "Start your business in DIFC, Dubai’s global financial free zone. Expert end to end support for company setup, licensing, and regulatory compliance. Get in touch!",
};

export default function CompanyFormationDIFC() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <CorporateServicesUaeWhyBuild
        variant="freezone"
        data={localData.whyBuild}
      />
      <VatAdvisory data={localData.vatAdvisory} />
      <BusinessLocation data={localData.businessLocation} />
      <CorporateServicesUaeServices data={localData.services} variant="saifz" />
      <CorporateServicesUaeFormationProcess
        variant="mainland"
        data={localData.formationProcess}
      />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeWhyChoose
        data={localData?.whyChoose}
        variant="sop"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
    </>
  );
}
