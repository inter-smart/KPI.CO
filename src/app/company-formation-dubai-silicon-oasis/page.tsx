import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import InnerHero from "@/components/common/InnerHero";
import { blogData } from "@/data/blogData";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import { Metadata } from "next";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";

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

export type MediaItem = {
  path: string;
  alt: string;
};
export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};
export type LocationItem = {
  id: number;
  title: string;
  type: "image" | "content";
  image?: string;
  description?: string;
  link?: string;
};
export type BusinessLocationData = {
  title: string;
  description: string;
  items: LocationItem[];
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

export type ServiceItem = {
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
      desktopPath: "/images/dsoa-desktop.png",
      mobilePath: "/images/dsoa-mobile.png",
      alt: "Company Formation in Dubai Silicon oasis",
    },
    title: "Company Formation in Dubai Silicon oasis ",
    description:
      "<p>Set up your business in Dubai Silicon Oasis Authority - a tech-focused free zone designed for innovation and growth. Benefit from fast registration, flexible licenses, and access to cutting-edge infrastructure in Dubai’s integrated technology park.</p>",
  } satisfies HeroData,


  mainlandBusiness: {
    title: "Start a Business in Dubai Silicon Oasis",
    description:
      "<p>Dubai Silicon Oasis Authority (DSOA) is a vibrant, tech-focused free zone in Dubai that supports businesses of all sizes. With state-of-the-art infrastructure, flexible office options, and a supportive regulatory environment, it provides a strong foundation for startups, IT companies, and service providers to establish themselves in the UAE. DSOA fosters a thriving business ecosystem where companies can grow, explore regional and international opportunities, and turn innovative ideas into long-term success in one of the world’s most dynamic commercial hubs.</p>",
    highlightsTitle:
      "DSO Free Zone is Well Suited For:",
    highlights: [
      "Technology startups and IT companies",
      "International firms expanding into Dubai",
      "Consultants, freelancers, and professional service providers",
      "E-commerce and digital businesses",
      "Holding companies and regional offices",
    ],

    image: {
      path: "/images/dsoa.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,

  whyBuild: {
    title: "Why Businesses Choose DSO Free Zone",
    items: [
      {
        id: 1,
        media: {
          path: "/images/dsoa_icon1.svg",
          alt: "Full Ownership",
        },
        title: "Full Ownership",
        description:
          "<p>100% foreign ownership with complete repatriation of capital and profits.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/dsoa_icon2.svg",
          alt: "Tax Benefits",
        },
        title: "Tax Benefits",
        description:
          "<p>Zero income tax and no import or export duties, allowing you to keep more of your profits. </p>",
      },
      {
        id: 3,
        media: {
          path: "/images/dsoa_icon3.svg",
          alt: "Flexible Setup",
        },
        title: "Flexible Setup",
        description:
          "<p>Company registration in Silicon Oasis can be completed remotely with minimal hassle. </p>",
      },
      {
        id: 4,
        media: {
          path: "/images/dsoa_icon4.svg",
          alt: "Visa Options",
        },
        title: "Visa Options",
        description:
          "<p>DSOA offers both visa and non-visa packages for employees and owners.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/dsoa_icon5.svg",
          alt: "Low Costs ",
        },
        title: "Low Costs",
        description:
          "<p>Competitive operational costs make DSOA an affordable choice for startups and growing companies.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/dsoa_icon6.svg",
          alt: "Wide Activities",
        },
        title: "Wide Activities",
        description:
          "<p>Supports a broad range of business activities to suit different industries.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/dsoa_icon7.svg",
          alt: "Integrated Community",
        },
        title: "Integrated Community",
        description:
          "<p>A balanced environment that combines living and working within the free zone.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/dsoa_icon8.svg",
          alt: "Business Support",
        },
        title: "Business Support",
        description:
          "<p>Comprehensive business advisory services to help your company operate efficiently.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Types of Licenses in DSOA",
    description: "Dubai Silicon Oasis supports multiple company structures to suit different business needs. We help you choose the right structure to match your growth plans.",
    items: [
      {
        id: 1,
        media: {
          path: "/images/saifz-servive-1.svg",
          alt: "Company Formation",
        },
        title: "Service License",
        description: "For professional services, IT solutions, and consultancy businesses operating in DSOA.",
      },
      {
        id: 2,
        media: {
          path: "/images/saifz-servive-2.svg",
          alt: "Company Formation",
        },
        title: "Trade License",
        description:
          "Allows companies to import, export, distribute, and trade goods locally and internationally.",
      },
      {
        id: 3,
        media: {
          path: "/images/saifz-servive-3.svg",
          alt: "Company Formation",
        },
        title: "Industrial License",
        description:
          "Grants permission for manufacturing, processing, assembly, and production of goods.",
      },
      {
        id: 4,
        media: {
          path: "/images/saifz-servive-4.svg",
          alt: "Company Formation",
        },
        title: "Special Licenses",
        description:
          "For companies registered with Dubai Economy that want to operate in DSOA’s administrative zones",
      },
    ] satisfies ServiceItem[],
  },
  businessLocation: {
    title: "Types of Companies in DSOA",
    description:
      "Our team assists with all required documents and approvals, making it easy to set up your company fully compliant in DSOA.",
    items: [
      {
        id: 1,
        title: "FZE",
        type: "image",
        image: "/images/dsoa_location1.jpg",
        description:
          "Dubai offers world-class infrastructure and a global trade hub environment, perfect for ambitious international businesses.",
        link: "#",
      },
      {
        id: 2,
        title: "FZCO",
        type: "image",
        image: "/images/dsoa_location2.jpg",
        description:
          "Abu Dhabi combines strong government support with strategic industry clusters. Its focus on energy, technology, and innovation provides a solid base for businesses working on large-scale or specialized projects.",
        link: "#",
      },
      {
        id: 3,
        title: "Branch of a UAE Company",
        type: "image",
        image: "/images/dsoa_location3.jpg",
        description:
          "Ajman provides a cost-effective mainland setup with a fast-growing industrial base and strategic port access.",
        link: "#",
      },
      {
        id: 4,
        title: "Dubai Economy Companies",
        type: "image",
        image: "/images/dsoa_location4.jpg",
        description:
          "Sharjah is the cultural and educational hub of the UAE, offering unique opportunities in logistics and creative industries.",
        link: "#",
      },

    ],
  } satisfies BusinessLocationData,


  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI is more than a company formation provider - we’re your business partner fo rlong-term success in the UAE. From initial planning to company registration and compliance, we ensure your DSOA setup is fast, smooth, and fully compliant. </p>",
    items: [
      { id: 1, text: "Strategic DSOA setup advice and licence structuring " },
      { id: 2, text: "Regulatory and compliance guidance " },
      { id: 3, text: "Corporate governance and business structuring support" },
      { id: 4, text: "Ongoing advisory as your UAE operations grow " },

    ],

    media: {
      path: "/images/whyImg.jpg",
      alt: "Required documents",
    },

  } satisfies DocumentRequiredData,

  banking: {
    title: "Banking Support for SAIF Companies   ",
    description:
      "<p>We assist clients with corporate bank account opening through trusted UAE and international banking partners, helping you choose the right bank based on your business activity and structure.  </p>",
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
  cta: {
    title: "Not sure if DSOA Free Zone is right for your business? ",
    description:
      "<p>Our team helps you compare free zones, understand licence options, and select the setup that aligns with your goals.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/cta-bg-desk.jpg",
      overlayMobile: "/images/cta-bg-mob.jpg",
    },
  } satisfies CtaData,

  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What types of businesses can I set up in DSOA?",
        description: `
                      <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                      `,
      },
      {
        id: 2,
        title: "Do I need a local sponsor to start a DSOA company?",
        description: `
                      <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                      `,
      },
      {
        id: 3,
        title: "How long does it take to set up a company in DSOA?",
        description: `
                      <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                      `,
      },
      {
        id: 4,
        title: "Do I need a physical office to register in DSOA?",
        description: `
                      <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                      `,
      },
      {
        id: 5,
        title: "Can my DSOA company sponsor UAE residence visas? ",
        description: `
                      <p>Yes, depending on your licence and office package, your company can sponsor visas for owners, employees, and family members.</p>
                      `,
      },

    ] satisfies FaqItem[],
  },

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
};



export const metadata: Metadata = {
  title: "Dubai Silicon Oasis Business Setup | Fast Company Formation  ",
  description:
    "Start your business in Dubai Silicon Oasis (DSOA). Flexible licenses, affordable packages & expert support. Get a free quote!  ",
};


export default function page() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="mainland"
        data={localData.whyBuild}
      />
      <CorporateServicesUaeServices data={localData.services} variant="saifz" />
      <BusinessLocation data={localData.businessLocation} />
      <DocumentRequired data={localData.document_required_data} />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} variant="saifz" />
    </>
  )
}
