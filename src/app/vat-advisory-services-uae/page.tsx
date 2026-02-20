import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import MeydanKeyBenefits from "@/components/features/meydan/MeydanKeyBenefits";
import { blogData } from "@/data/blogData";
import VatGuidance, {
  VatGuidanceData,
} from "@/components/features/vat-services/VatGuidance";
import VatAdvisory, {
  VatAdvisoryData,
} from "@/components/features/vat-services/VatAdvisory";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import VatHealth, {
  VatHealthData,
} from "@/components/features/vat-services/VatHealth";
import VatRelatedTax, {
  VatRelatedTaxData,
} from "@/components/features/vat-services/VatRelatedTax";

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

export type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: number;
  step?: string;
  title: string;
  inner_title?: string;
  sub_title: string;
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
        title: "VAT Rates in the UAE  ",
        items: [
          {
            title: "5% standard rate: ",
            description: "Applied to most goods and services  ",
          },
          {
            title: "0% zero-rated: ",
            description:
              "Exports, international transport, and certain supplies ",
          },
          {
            title: "Exempt supplies: ",
            description: "Residential property, certain financial services ",
          },
          {
            title: "Reverse Charge Mechanism (RCM): ",
            description: "For specific imported services and goods ",
          },
          {
            title: "Out of scope:  ",
            description: "Transactions outside UAE VAT jurisdiction  ",
          },
        ],
        media: {
          path: "/images/vat-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 3,
        title: "VAT Return Filing ",
        items: [
          {
            title: "Filing frequency: ",
            description:
              "Monthly (for businesses with annual turnover above AED 150 million) or quarterly (for most other businesses) ",
          },
          {
            title: "Deadline: ",
            description:
              "VAT returns and payments must be submitted within 28 days from the end of each tax period ",
          },
          {
            title: "Penalties: ",
            description:
              "Late filing can result in penalties starting at AED 1,000, with additional fines for late payment and non-compliance reaching up to AED 50,000 ",
          },
        ],
        media: {
          path: "/images/vat-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
  vatAdvisory: {
    title: "Our VAT Advisory Services ",
    description:
      "KPI supports businesses across the full VAT lifecycle, from registration to ongoing advisory and compliance. All services are tailored to your business complexity and need, not templates. ",
    service_list: [
      {
        id: 1,
        title: "VAT Registration & <br> Deregistration ",
        description:
          "Assess VAT obligations, registration <br> support, and deregistration where <br> needed - aligned with business <br> activity and thresholds. ",
      },
      {
        id: 2,
        title: "Advisory & <br> Structuring ",
        description:
          "Provide practical guidance on VAT <br> treatment for transactions, <br> contracts, pricing models, and <br> operating structures. ",
      },
      {
        id: 3,
        title: "Compliance & <br> Return Filing",
        description:
          "Preparation and review of monthly <br> or quarterly VAT returns, <br> reconciliation with accounting <br> records, accurate calculation <br> of output and input tax, and timely <br> submission within the 28-day <br> deadline to avoid penalties. ",
      },
      {
        id: 4,
        title: "Reviews & <br> Health Checks ",
        description:
          "Independent review of VAT positions, <br> filings, and processes <br> to identify gaps, risks, or <br> opportunities for improvement. ",
      },
    ],
  } satisfies VatAdvisoryData,
  whyBuild: {
    title: "Common VAT Challenges We Help Solve ",
    description:
      "<p>Businesses across the UAE face recurring VAT issues that create risk, inefficiency, and financial exposure. We identify these issues early and implement practical solutions before they escalate</p>",
    items: [
      {
        id: 1,
        media: {
          path: "/images/vat-service-1.svg",
          alt: "Incorrect VAT treatment",
        },
        title: "Incorrect VAT treatment ",
        description:
          "<p>Misclassification of supplies leading to under or overpayment </p>",
      },
      {
        id: 2,
        media: {
          path: "/images/vat-service-2.svg",
          alt: "Missed input tax recovery ",
        },
        title: "Missed input tax recovery ",
        description:
          "<p>Failure to claim eligible VAT, reducing cash flow </p>",
      },
      {
        id: 3,
        media: {
          path: "/images/vat-service-3.svg",
          alt: "System misalignment ",
        },
        title: "System misalignment  ",
        description:
          "<p>Disconnect between invoicing software and VAT reporting </p>",
      },
      {
        id: 4,
        media: {
          path: "/images/vat-service-4.svg",
          alt: "Documentation gaps",
        },
        title: "Documentation gaps",
        description:
          "<p>Incomplete records that create problems during FTA audits </p>",
      },
      {
        id: 5,
        media: {
          path: "/images/vat-service-5.svg",
          alt: "Cross-border complexity ",
        },
        title: "Cross-border complexity ",
        description:
          "<p>Confusion over GCC, export, and international service rules </p>",
      },
      {
        id: 6,
        media: {
          path: "/images/vat-service-6.svg",
          alt: "Penalty exposure",
        },
        title: "Penalty exposure",
        description:
          "<p>Late filings, errors, or non-compliance leading to fines </p>",
      },
    ] satisfies WhyBuildItem[],
  },
  formationProcess: {
    title: "How We Approach VAT ",
    sub_title: null,
    description: null,
    steps: [
      {
        id: 1,
        title: "Risk identification with business context",
        sub_title: "Control assessment and gap analysis",
        description:
          "<p>Understanding how risks arise within day-to-day operations, decision making, organizations structures and not just within policy.</p>",
      },
      {
        id: 2,
        title: "Control assessment and gap analysis",
        sub_title: "Control assessment and gap analysis",
        description:
          "<p>Evaluating whether controls exist, appropriately designed, operate effectively, and are properly documented.</p>",
      },
      {
        id: 3,
        title: "Clear prioritisation",
        sub_title: "Clear prioritisation",
        description:
          "<p>Focusing on risks that carry regulatory, financial, or reputational consequences. </p>",
      },
      {
        id: 4,
        title: "Actionable recommendations",
        sub_title: "Actionable recommendations",
        description:
          "<p>Suggest practical suggestion that management can implement, rather than an abstract observation.</p>",
      },
    ] satisfies ProcessStep[],
  },
  document_required_data: {
    title: "Who We Commonly Support ",
    description: "<p>Our VAT services are relevant for: </p>",
    items: [
      {
        id: 1,
        text: "UAE mainland and free zone companies ",
      },
      {
        id: 2,
        text: "Professional services and advisory firms ",
      },
      {
        id: 3,
        text: "Trading and distribution businesses ",
      },
      {
        id: 4,
        text: "Technology and digital companies ",
      },
      {
        id: 5,
        text: "Groups with multiple entities or cross-border activity ",
      },
    ],
    ftr_description:
      "<p>Whether VAT is new or already in place, our role is to bring structure and confidence to how it is managed. </p>",
    media: {
      path: "/images/vat-services-document.jpg",
      alt: "vat-services-document",
    },
  } satisfies DocumentRequiredData,
  vatHealth: {
    title: "VAT Health Check",
    description:
      "Not sure if your VAT processes are optimized? Request a complimentary VAT health check to identify: ",
    health_list: [
      "Potential input tax recovery opportunities",
      "Compliance gaps and penalty risks",
      "Process inefficiencies and system issues",
      "Documentation and record-keeping improvements",
    ],
    button: {
      label: "Book Your Free VAT Health Check",
      link: "/contact",
    },
    media: {
      path: "/images/vat-benefit-1.jpg",
      alt: "VAT Health Check",
    },
  } satisfies VatHealthData,
  whyChoose: {
    title: "Why Choose KPI for VAT Services ",
    sub_title: "",
    items: [
      {
        id: 1,
        title: "Commercially grounded advice ",
        description:
          "<p>VAT guidance aligned around how your business operates.  </p>",
      },
      {
        id: 2,
        title: "Regulatory awareness ",
        description:
          "<p>Clear understanding of UAE VAT legislation and FTA <br> expectations in practice. </p>",
      },
      {
        id: 3,
        title: "Integrated perspective",
        description:
          "<p>Ability to align VAT with corporate tax, audit, and risk <br> considerations. </p>",
      },
      {
        id: 4,
        title: "Clear communication ",
        description:
          "<p>Straightforward advice without unnecessary complexity or <br> jargon. </p>",
      },
    ] satisfies WhyChooseItem[],
  },
  cta: {
    title: "Discuss Your VAT Requirements ",
    description:
      "<p>If you want VAT to be predictable, embedded, and easy to manage as your business grows, KPI can support you with clarity and confidence. </p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/vat-services-cta-overlay.svg",
      overlayMobile: "/images/vat-services-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "Who must register for VAT in the UAE?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title: "How often do I need to file VAT returns?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title: "What happens if I miss the VAT filing deadline?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "Can I claim VAT on all business expenses?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title: "Do free zone companies need to register for VAT?",
        description: `
                    <p>Yes. Free zone companies must register if they exceed the mandatory registration threshold and make taxable supplies within the UAE or to other GCC countries. Different rules may apply for designated zones.</p>
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
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
  vatRelatedTax: {
    title: "Related Tax & Advisory Services",
    tax_list: [
      {
        id: 1,
        title: "Tax Advisory",
        link: {
          url: "/tax-advisory-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Tax Advisory",
        },
      },
      {
        id: 2,
        title: "Corporate Tax",
        link: {
          url: "/corporate-tax-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Corporate Tax",
        },
      },
      {
        id: 3,
        title: "eInvoicing Solution",
        link: {
          url: "/einvoicing-solutions-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "eInvoicing Solution",
        },
      },
      {
        id: 4,
        title: "Corporate Tax",
        link: {
          url: "/corporate-tax-services-uae",
        },
        media: {
          path: "/images/vat-related-1.jpg",
          alt: "Corporate Tax",
        },
      },
    ],
  } satisfies VatRelatedTaxData,
};

export default function VatServicesUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <VatGuidance data={localData.vatGuidance} />
      <MeydanKeyBenefits data={localData.keyBenefits} variant="Vat-Services" />
      <VatAdvisory data={localData.vatAdvisory} />
      <CorporateServicesUaeWhyBuild data={localData.whyBuild} variant="dafz" />
      <CorporateServicesUaeFormationProcess
        variant="Vat-Services"
        data={localData.formationProcess}
      />
      <DocumentRequired
        data={localData.document_required_data}
        variant="dfza"
      />
      <VatHealth data={localData.vatHealth} />
      <VatRelatedTax data={localData.vatRelatedTax} />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="saifz" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} />
    </>
  );
}
