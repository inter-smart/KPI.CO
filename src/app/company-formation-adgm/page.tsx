import InnerHero from "@/components/common/InnerHero";
import { Metadata } from "next";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import BlogRelated from "@/components/features/blogs/BlogRelated";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import { blogData } from "@/data/blogData";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import RiskAssuranceServices from "@/components/features/risk-overview/RiskAssuranceServices";
import BusinessLocation, {
  type BusinessLocationData,
} from "@/components/features/mainland/BusinessLocation";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import { BankingPartner } from "../corporate-services-uae/page";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";

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
export type BusinessItem = {
  id: number;
  name: string;
  description: string;
  media: {
    path: string;
    alt: string;
  };
  button?: {
    link: string;
    target: boolean;
  };
};
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

export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type MediaItem = {
  path: string;
  alt: string;
};
export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
};
export type RiskAssuranceData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
};

export type ProcessStep = {
  id: number;
  step: string;
  title: string;
  inner_title?: string;
  sub_title: string;
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
      desktopPath: "/images/formation-adgm-bg.svg",
      mobilePath: "/images/formation-adgm-mobile-bg.png",
      alt: "ADGM Company Formation, Done with Regulatory Clarity",
    },
    title: "ADGM Company Formation, Done with Regulatory Clarity ",
    description:
      "<p>Set up your business in Abu Dhabi Global Market (ADGM) with a firm that understands the regulatory, structural, and commercial realities of the jurisdiction. We work with these realities day to day. KPI provides end-to-end ADGM company formation services delivered with clarity, precision, and local expertise.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "How KPI Approaches ADGM Foundations",
    description:
      "<p>We don't just file paperwork. We focus on whether the structure will hold up over time. Our goal is simple: a foundation that is defensible, functional, and future-ready. We are deliberate about structure naming, purpose alignment, and regulatory positioning - because how a Foundation is framed matters as much as how it is formed.</p>",
    highlightsTitle: "KPI supports clients through:",
    highlights: [
      "Structuring advice aligned with the intended purpose of the foundation",
      "Guidance on founders, council members, guardians, and beneficiaries",
      "Governance design that balances control, independence, and flexibility",
      "Regulatory alignment with ADGM Registration Authority requirements",
    ],
    footerDescription: "",
    image: {
      path: "/images/adgm-foundation.jpg",
      alt: "How KPI Approaches ADGM Foundations",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Benefits of Setting Up a Business in ADGM",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/benefit_icon1.svg",
          alt: "Independent Legal Framework",
        },
        title: "Independent Legal Framework",
        description:
          "<p>Decisions are guided by structured risk insights instead of assumptions, enabling leadership to act with confidence.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/benefit_icon2.svg",
          alt: "100% Foreign Ownership",
        },
        title: "100% Foreign Ownership",
        description:
          "<p>Provides a clear view of risks across functions, business units, and entities. </p>",
      },
      {
        id: 3,
        media: {
          path: "/images/benefit_icon3.svg",
          alt: "Global Credibility",
        },
        title: "Global Credibility",
        description:
          "<p>Early identification of threats help prevent operational or strategic disruptions. </p>",
      },
      {
        id: 4,
        media: {
          path: "/images/benefit_icon4.svg",
          alt: "Flexible Structuring",
        },
        title: "Flexible Structuring",
        description:
          "<p>ERM frameworks that satisfy governance standards and regulatory expectations. </p>",
      },
      {
        id: 5,
        media: {
          path: "/images/benefit_icon5.svg",
          alt: "Strong Regulatory Oversight",
        },
        title: "Strong Regulatory Oversight",
        description:
          "<p>Focused attention on risks that could materially impact financial performance</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/benefit_icon6.svg",
          alt: "Banking Acceptance",
        },
        title: "Banking Acceptance",
        description:
          "<p>Demonstrable risk oversight for boards, investors, and regulators.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  whyChoose: {
    title: "Why Choose KPI for ADGM Company Formation",
    description: "",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "First Registered Entity in ADGM",
        description:
          "<p>KPI was the first company to be registered in ADGM. That experience shows in how we approach setups - fewer missteps, clearer guidance</p>",
      },
      {
        id: 2,
        title: "Structuring-Led Advisory",
        description:
          "<p>We focus on getting the structure right, not just completing incorporation formalities. Every ADGM setup is aligned to ownership, control, and long-term objectives.</p>",
      },
      {
        id: 3,
        title: "Regulatory Awareness",
        description:
          "<p>Our advice reflects how ADGM authorities assess applications in practice, not theory.</p>",
      },
      {
        id: 4,
        title: "End-to-End Support",
        description:
          "<p>From incorporation to governance, compliance, accounting, and audit support as your ADGM entity evolves.</p>",
      },
    ] satisfies WhyChooseItem[],
  },

  riskAssurance: {
    title: "Types of ADGM Company Licenses",
    description:
      "KPI Group helps you identify the appropriate licence based on your activity and regulatory exposure.",
    items: [
      {
        id: 1,
        media: {
          path: "/images/company_icon1.svg",
          alt: "Commercial License",
        },
        title: "Commercial License",
        description: "For trading, holding, and general commercial activities.",
      },
      {
        id: 2,
        media: {
          path: "/images/company_icon2.svg",
          alt: "Professional Services Licence",
        },
        title: "Professional Services Licence",
        description: "For advisory, consulting, and service-based businesses.",
      },
      {
        id: 3,
        media: {
          path: "/images/company_icon3.svg",
          alt: "Financial Services Licence (FSRA Regulated)",
        },
        title: "Financial Services Licence (FSRA Regulated)",
        description:
          "For asset management, investment advisory, fintech, and other regulated financial activities (subject to FSRA approval).",
      },
    ] satisfies RiskAssuranceData[],
  },

  businessLocation: {
    title: "Mainland Business Locations In The UAE",
    description:
      "Each of the UAE's seven Emirates offers unique opportunities for mainland business setup. Choosing the right location depends on your sector, scale, and long-term goals.",
    items: [
      {
        id: 1,
        title: "Private Company Limited by Shares (Ltd)",
        type: "image",
        image: "/images/mainlandBusiness-5.jpg",
        description:
          "Used for asset holding, ring-fencing risk, or structured finance arrangements.",
        link: "#",
      },
      {
        id: 2,
        title: "Special Purpose Vehicle <br/> (SPV)",
        type: "image",
        image: "/images/mainlandBusiness-2.jpg",
        description:
          "Used for asset holding, ring-fencing risk, or structured finance arrangements.",
        link: "#",
      },
      {
        id: 3,
        title: "Foundations",
        type: "image",
        image: "/images/mainlandBusiness-4.jpg",
        description:
          "Ajman provides an affordable setup experience with fast approvals and a central location near key ports. Ideal for smaller companies and service providers looking for simplicity and convenience.",
        link: "#",
      },
      {
        id: 4,
        title: "Holding Companies",
        type: "image",
        image: "/images/mainlandBusiness-8.jpg",
        description:
          "Sharjah offers a cost-effective environment with a growing SME ecosystem. It is known for supporting creative, educational, and industrial initiatives while maintaining close access to Dubai's markets.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  formationProcess: {
    title: "ADGM Company Setup Process",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        step: "Step One",
        title: "Understanding Your Requirements & Structure",
        sub_title: "Choose Your Business Activity & Structure",
        inner_title: "Understanding Your Requirements & Structure",
        description:
          "<p>We assess your objectives, activities, and ownership to determine the right ADGM structure and licence.</p>",
      },
      {
        id: 2,
        step: "Step Two",
        title: "Application Preparation",
        sub_title: "Application Preparation",
        inner_title: "Application Preparation",
        description:
          "<p>We assess your objectives, activities, and ownership to determine the right ADGM structure and licence.</p>",
      },
      {
        id: 3,
        step: "Step Three",
        title: "Authority Review & Approval",
        sub_title: "Authority Review & Approval",
        inner_title: "Authority Review & Approval",
        description:
          "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
      },
      {
        id: 4,
        step: "Step Four",
        title: "Company Incorporation",
        sub_title: "Company Incorporation",
        inner_title: "Company Incorporation",
        description:
          "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
      },
      {
        id: 5,
        step: "Step Five",
        title: "Post-Setup Support",
        sub_title: "Post-Setup Support",
        inner_title: "Post-Setup Support",
        description:
          "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
      },
    ] satisfies ProcessStep[],
  },
  banking: {
    title: "Banking Support for ADGM Companies",
    description:
      "<p>ADGM banking involves enhanced due diligence and structure-specific reviews. We support clients with bank selection, documentation readiness, and application coordination through UAE and international banks.</p>",
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
          path: "/images/banking-partner-2.svg",
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

  contactUs: {
    title: "Setting Up in ADGM?",
    description:
      "<p>Speak with our experts to structure your ADGM entity with <br/> clarity, confidence, and regulatory precision</p>",
    button: {
      label: "Get In Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/company-formation.svg",
      overlayMobile: "/images/company-formation-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title:
          "What is ADGM and why is it different from other UAE jurisdictions?",
        description: `
                    <p>Yes. Internal audit findings help strengthen processes, reduce inefficiencies, and support sustainable business growth.</p>
                    `,
      },
      {
        id: 2,
        title: "Who should consider setting up a company in ADGM?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                    `,
      },
      {
        id: 3,
        title: "Can foreigners own 100% of an ADGM company?",
        description: `
                    <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                    `,
      },
      {
        id: 4,
        title: "Do ADGM companies need a physical office or employees?",
        description: `
                    <p>Yes. Internal audit findings help strengthen processes, reduce inefficiencies, and support sustainable business growth.</p>
                    `,
      },
      {
        id: 5,
        title: "What types of licences are available in ADGM?",
        description: `
                    <p>ADGM offers Commercial Licences, Professional Services Licences, and Financial <br/>
                        Services Licences (regulated by the FSRA). The appropriate licence depends on the nature of your activity, regulatory exposure, and business model.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  related_blog: {
    title: " Our Insights ",
    items: blogData.slice(0, 3).map((blog) => ({
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
  title: "ADGM Company Formation & Structuring Services | KPI Group  ",
  description:
    "Set up your company in Abu Dhabi Global Market (ADGM) with expert regulatory and structure-led support. KPI Group delivers end-to-end ADGM company formation with clarity and precision.",
};

export default function InternalAudit() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="formation"
        data={localData.whyBuild}
      />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="risk"
      />
      <RiskAssuranceServices data={localData.riskAssurance} />
      <BusinessLocation data={localData.businessLocation} />
      <CorporateServicesUaeFormationProcess
        variant="mainland"
        data={localData.formationProcess}
      />
      <CorporateServicesUaeBanking
        variant="company"
        data={localData.banking}
      />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq variant="side-arrow" data={localData.corporate_faq_data} />
      <BlogRelated data={localData.related_blog} />
    </>
  );
}
