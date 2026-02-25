import { Metadata } from "next";
import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import { MainlandBusinessData } from "../mainland-company-formation-uae/page";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";
import { MeydanFreeZoneData } from "../meydan-freezone-business-setup-uae/page";
import MeydanKeyBenefits, {
  MeydanKeyBenefitsData,
} from "@/components/features/meydan/MeydanKeyBenefits";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import BusinessLocation, {
  type BusinessLocationData,
} from "@/components/features/mainland/BusinessLocation";
import RiskOrganisation from "@/components/features/risk-overview/RiskOrganisation";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import { MediaItem } from "../page";
import { blogData } from "@/data/blogData";
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
export type BankingPartner = {
  id: number;
  media: {
    path: string;
    alt: string;
  };
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
      desktopPath: "/images/jafza-freezone-bg.svg",
      mobilePath: "/images/jafza-freezone-bg-mobile.svg",
      alt: "Company Formation in JAFZA, UAE",
    },
    title: "Company Formation in JAFZA, <br/> UAE ",
    description:
      "<p>In the DIFC ecosystem, financial reports are scrutinised by boards and audit committees, relied upon by investors, and subject to regulatory review by the Dubai Financial Services Authority (DFSA). As a DIFC-registered audit firm, KPI delivers DFSA-compliant audit services, designed to meet statutory filing requirements, to regulated entities and other DIFC entities where professional judgement, regulatory alignment, and robust documentation are essential.</p>",
  } satisfies HeroData,
  freezoneBusiness: {
    title: "Start a Business in Jabel Ali Free Zone",
    description:
      "<p>The Jebel Ali Free Zone Authority (JAFZA) is Dubai’s largest and most established free zone for trade, logistics, and manufacturing. It combines world-class infrastructure with business-friendly regulations, making it ideal for companies looking to serve the Middle East and beyond. Entrepreneurs, startups, and corporate offices benefit from fast licensing, flexible offices or warehouses, and a thriving business community, giving you everything needed to launch and grow in Dubai.</p>",
    highlightsTitle: "Key Features Include:",
    highlights: [
      "Quick company registration",
      "Licenses for trading, industrial and service activities",
      "Optional offices, warehouses or shared desk setups",
      "Comprehensive support for visas, banking, and compliance",
      "Full end-to-end setup managed by our team",
    ],
    footerDescription: "",
    image: {
      path: "/images/freezone-busns.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,
  jafzaFreeZone: {
    title: "Is JAFZA the Free Zone Right for You?",
    free_zone_list: [
      {
        id: 1,
        title: "Is JAFZA the Free Zone Right for You?",
        highlightsText: "",
        zone_list: [
          "Want complete foreign ownership with no local sponsor",
          "Require industrial, logistics, or trading capabilities",
          "Need warehousing or distribution solutions",
          "Plan regional or global expansion",
          "Want to join a large, dynamic business community",
        ],
      },
      {
        id: 2,
        title: "JAFZA Free Zone may not be ideal if you:",
        highlightsText: "",
        zone_list: [
          "Need full UAE mainland market access",
          "Operate purely professional or consultancy services",
          "Require dedicated offices for all staff immediately",
          "Need business services outside free zone rules",
        ],
      },
    ],
    structure_list: [],
  } satisfies MeydanFreeZoneData,

  keyBenefits: {
    title: "Key Benefits of Company Formation in DMCC",
    slides: [
      {
        id: 1,
        title: "Business-Friendly Structure",
        items: [
          "<p>100% foreign ownership</p>",
          "<p>No local partner required</p>",
          "<p>Multiple license types for different business <br/> models</p>",
          "<p>Scalable company structures for startups  <br/> and SMEs</p>",
        ],
        media: {
          path: "/images/jafza-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
      {
        id: 2,
        title: "Easy Setup Process",
        items: [
          "One of the most competitive license costs in Dubai",
          "No paid-up share capital required",
          "Reasonable visa allocation costs",
          "Zero personal income tax",
          "Zero corporate tax for qualifying companies",
        ],
        media: {
          path: "/images/jafza-benefit-1.jpg",
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
          path: "/images/jafza-benefit-1.jpg",
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
          path: "/images/jafza-benefit-1.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
  banking: {
    title: "Banking Support for Your Business",
    description:
      "<p>Our Business Set Up Consultants Help Founders Open Bank Accounts With Trusted UAE And International Banks, Ensuring Smooth <br/> Operations And Financial Compliance.</p>",
    partners: [
      {
        id: 1,
        media: {
          path: "/images/banking-partner-4.svg",
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
          path: "/images/banking-partner-3.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 4,
        media: {
          path: "/images/banking-partner-05.svg",
          alt: "Emirates NBD",
        },
      },
    ] satisfies BankingPartner[],
  },
  businessLocation: {
    title: "Explore Other Business Setup Options",
    description:
      "If JAFZA isn’t the right fit for your business, you can consider other UAE company structures:",
    items: [
      {
        id: 1,
        title: "Mainland",
        type: "image",
        image: "/images/bussnes-setup-1.jpg",
        description:
          "Used for asset holding, ring-fencing risk, or structured finance arrangements.",
        link: "#",
      },
      {
        id: 2,
        title: "Other Freezones",
        type: "image",
        image: "/images/bussnes-setup-2.jpg",
        description:
          "Used for asset holding, ring-fencing risk, or structured finance arrangements.",
        link: "#",
      },
      {
        id: 3,
        title: "ADGM",
        type: "image",
        image: "/images/bussnes-setup-3.png",
        description:
          "Ajman provides an affordable setup experience with fast approvals and a central location near key ports. Ideal for smaller companies and service providers looking for simplicity and convenience.",
        link: "#",
      },
      {
        id: 4,
        title: "DIFC",
        type: "image",
        image: "/images/bussnes-setup-4.jpg",
        description:
          "Sharjah offers a cost-effective environment with a growing SME ecosystem. It is known for supporting creative, educational, and industrial initiatives while maintaining close access to Dubai's markets.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  logoimage: {
    title: "",
    description: "",
    partners: [
      {
        id: 1,
        media: {
          path: "/images/banking-partner-01.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 2,
        media: {
          path: "/images/banking-partner-02.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 3,
        media: {
          path: "/images/banking-partner-03.svg",
          alt: "Emirates NBD",
        },
      },
      {
        id: 4,
        media: {
          path: "/images/banking-partner-04.svg",
          alt: "Emirates NBD",
        },
      },
    ] satisfies BankingPartner[],
  },
  whyWorkWith: {
    title: "Why Work with KPI ",
    description:
      "<p>KPI is more than a formation agent - we’re your growth partner. From registration to operations, we provide full end to end support for your business success:</p>",
    items: [
      {
        id: 1,
        text: "Strategic business setup advice ",
      },
      {
        id: 2,
        text: "Compliance and regulatory guidance",
      },
      {
        id: 3,
        text: "Compliance and regulatory guidance",
      },
      { id: 4, text: "Ongoing support to ensure your JAFZA company thrives" },
    ],

    media: {
      path: "/images/whywork-img.jpg", // <-- your image path
      alt: "Required documents",
    },
    ftr_description: "",
  },
  contactUs: {
    title: "Ready to Launch Your Business in <br/> Dubai?",
    description:
      "<p>Our team helps you select the ideal license, setup, and structure based <br/> on your growth goals and business model. Speak with our experts <br/>today!</p>",
    button: {
      label: "Contact Us",
      link: "/contact",
    },
    images: {
      overlay: "/images/jafza-cta.svg",
      overlayMobile: "/images/jafza-cta-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a JAFZA company?",
        description: `
                    <p>You can start by choosing the right business structure - mainland, free zone, or offshore - then completing licensing, visas, and banking. KPI guides you through each step for a smooth setup.</p>
                    `,
      },
      {
        id: 2,
        title: "Can I set up a business in JAFZA remotely?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                    `,
      },
      {
        id: 3,
        title: "Is 100% foreign ownership allowed?",
        description: `
                    <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                    `,
      },
      {
        id: 4,
        title: "How long does a JAFZA business setup take?",
        description: `
                    <p>Company setup timelines are generally efficient and depend on document readiness and licence type.</p>
                    `,
      },
      {
        id: 5,
        title: "How much does a JAFZA business license cost?",
        description: `
                    <p>Packages start at ~AED 18,000 depending on your services, office, and visa requirements.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  related_blog: {
    title: "Our Insights",
    items: blogData.slice(0, 7).map((blog) => ({
      id: blog.id,
      media: blog.media,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      readTime: blog.readTime,
      slug: `/blog/${blog.slug}`,
    })),
  },
};

export const metadata: Metadata = {
  title: "JAFZA Free Zone Company Setup | Expert UAE Business Services  ",
  description:
    "Set up your company in JAFZA Free Zone, Dubai. Flexible business licenses, 100% ownership, and tailored visa options for entrepreneurs and startups in the UAE. ",
};

export default function DwtcFreezone() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.freezoneBusiness} />
      <MeydanFreeZone data={localData.jafzaFreeZone} variant="ifza" />
      <MeydanKeyBenefits data={localData.keyBenefits} />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="downshadow"
      />
      <BusinessLocation data={localData.businessLocation} />
      <CorporateServicesUaeBanking
        data={localData.logoimage}
        variant="downshadow"
      />
      <RiskOrganisation variant="dwtc" data={localData.whyWorkWith} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq
        variant="side-arrow"
        data={localData.corporate_faq_data}
      />
      <HomeOurInsights data={localData.related_blog} />
    </>
  );
}
