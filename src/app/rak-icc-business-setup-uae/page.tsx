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
import BlogRelated from "@/components/features/blogs/BlogRelated";
import { MediaItem } from "../page";
import { blogData } from "@/data/blogData";

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
      desktopPath: "/images/rak-bg.svg",
      mobilePath: "/images/rak-mobile-bg.svg",
      alt: "RAK Offshore Company Formation (RAK ICC)",
    },
    title: "RAK Offshore Company <br/> Formation (RAK ICC) ",
    description:
      "<p>Set up a RAK ICC offshore company, part of Ras Al Khaimah Economic Zone (RAKEZ), in the UAE with 100% foreign ownership. A cost-effective offshore structure for international business, holding companies, and asset protection.</p>",
  } satisfies HeroData,
  freezoneBusiness: {
    title: "Start a Business in Ras Al Khaimah, UAE",
    description:
      "<p>Looking to start a business in the UAE without relocating? RAK ICC Offshore Company Formation provides a flexible, compliant solution for international entrepreneurs and businesses.</p>",
    highlightsTitle: "Common uses include:",
    highlights: [
      "International trading",
      "Holding and investment structures",
      "Asset protection",
      "Wealth and succession planning",
      "Special purpose vehicles (SPVs)",
    ],
    footerDescription:
      "You don’t need to visit the UAE - our team manages the full process, from documentation to registration and post-incorporation support.",
    image: {
      path: "/images/rak-img.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,
  jafzaFreeZone: {
    title: "Is RAK ICC Right for You?",
    free_zone_list: [
      {
        id: 1,
        title: "RAK ICC is suitable if you",
        highlightsText: "Key Points:",
        zone_list: [
          "Operate outside the UAE",
          "Need a holding or investment company",
          "Want 100% foreign ownership",
          "Require a tax-efficient offshore structure",
          "Do not need visas, staff, or office space",
        ],
      },
      {
        id: 2,
        title: "JAFZA Offshore Company",
        highlightsText: "Key Points:",
        zone_list: [
          "Plan to trade directly within the UAE",
          "Need employee visas",
          "Require a physical office",
          "Need VAT registration in the UAE",
        ],
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "If your business requires local operations, visas, or trading within the UAE, we also offer Free Zone and Mainland company setups tailored to different business goals.",
      },
    ],
  } satisfies MeydanFreeZoneData,

  keyBenefits: {
    title: "Key Benefits of RAK ICC Setup",
    slides: [
      {
        id: 1,
        title: "Business-Friendly Structure",
        items: [
          "<p>100% foreign ownership</p>",
          "<p>No minimum capital requirement</p>",
          "<p>No physical office required</p>",
          "<p>Individual or corporate shareholders allowed</p>",
          "<p>Corporate directors permitted</p>",
        ],
        media: {
          path: "/images/rak-setup.jpg",
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
          path: "/images/rak-setup.jpg",
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
          path: "/images/rak-setup.jpg",
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
          path: "/images/rak-setup.jpg",
          alt: "Business-Friendly Structure",
        },
      },
    ],
  } satisfies MeydanKeyBenefitsData,
  banking: {
    title: "Banking Support for Your UAE Business",
    description:
      "<p>We support clients with bank account opening through trusted UAE and international banking partners.</p>",
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
      "While RAK ICC is ideal for offshore and international structures, we also support various other UAE business structures to suit different operational needs.",
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
      "<p>KPI Group is more than a company formation agent. We’re your partner in business growth, providing end-to-end support across audit, risk, and corporate services. We help businesses with:</p>",
    items: [
      {
        id: 1,
        text: "Strategic business setup advice ",
      },
      {
        id: 2,
        text: "Regulatory and compliance guidance",
      },
      {
        id: 3,
        text: "Corporate governance support",
      },
      { id: 4, text: "Risk assessment and advisory" },
      { id: 5, text: "Ongoing post‑setup service" },
    ],
    ftr_description: "Our approach ensures that your RAK ICC company is structured for growth, compliant, and aligned with your business strategy.",

    media: {
      path: "/images/whywork-rak.jpg", // <-- your image path
      alt: "Required documents",
    },
  },
  contactUs: {
    title: "Ready To Start Your Business In The UAE?",
    description:
      "<p>Our team will help you choose the right setup, jurisdiction, and structure <br/> based on your goals, risk profile, and budget. Talk to our experts today!</p>",
    button: {
      label: "Contact Us",
      link: "/contact",
    },
    images: {
      overlay: "/images/rak-cta.svg",
      overlayMobile: "/images/rak-cta-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is a RAK ICC offshore company?",
        description: `
                    <p>Costs vary depending on company structure and requirements. Our team will provide a clear breakdown before proceeding.</p>
                    `,
      },
      {
        id: 2,
        title: "Is RAK ICC a free zone or mainland company?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Get in touch with our team for a tailored estimate for your business setup.</p>
                    `,
      },
      {
        id: 3,
        title: "Who can set up a RAK ICC company?",
        description: `
                    <p>Timelines depend on your chosen jurisdiction and business activity. With proper preparation, many businesses can be fully registered within a few weeks.</p>
                    `,
      },
      {
        id: 4,
        title: "How long does it take to set up a RAK ICC company?",
        description: `
                    <p>Company setup timelines are generally efficient and depend on document readiness and licence type.</p>
                    `,
      },
      {
        id: 5,
        title: "How much does RAK ICC company setup cost?",
        description: `
                    <p>Costs vary depending on company structure and requirements. Our team will provide a clear breakdown before proceeding.</p>
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
      <RiskOrganisation data={localData.whyWorkWith} />
      <CorporateServicesUaeCta data={localData.contactUs} />
      <CorporateServicesUaeFaq
        variant="side-arrow"
        data={localData.corporate_faq_data}
      />
      <BlogRelated data={localData.related_blog} />
    </>
  );
}
