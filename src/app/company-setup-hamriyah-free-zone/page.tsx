import InnerHero from "@/components/common/InnerHero";
import { blogData } from "@/data/blogData";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";
import CorporateServicesUaeSetupOptions from "@/components/features/services/CorporateServicesUaeSetupOptions";

export type MainlandBusinessData = {
  title: string;
  description: string;
  highlightsTitle?: string;
  highlights: string[];
  footerDescription: string;
  image: {
    path: string;
    alt: string;
  };
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
  sub_title: string;
  description: string;
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
      desktopPath: "/images/hamriyah-desktop-banner.svg",
      mobilePath: "/images/hamriyah-mobile-banner.svg",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "Company Formation in Hamriyah Free Zone, Sharjah",
    description:
      "<p>Set up your company in Hamriyah Free Zone Authority (HFZA) - one of the UAE’s largest industrial and maritime hubs, offering port-led logistics, purpose-built industrial zones, and direct access to regional and international markets.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start Your Business in Hamriyah Free Zone",
    description:
      "<p>Established in 1995, Hamriyah Free Zone Authority (HFZA) is a cornerstone of Sharjah’s industrial economy and one of the UAE’s most established free zones. Home to over 6,500 companies from 163+ countries, HFZA is designed for businesses that require scale, logistics efficiency, and long-term operational stability.</p><p>Located along the Arabian Gulf, HFZA combines a deep-water seaport, industrial land, warehouses, and dedicated sector zones to support manufacturing, trading, maritime, and heavy industry operations. HFZA is particularly suited for founders and groups looking to build asset-backed operations, regional distribution hubs, or export-driven manufacturing businesses from the UAE.</p>",
    highlightsTitle: "",
    highlights: [],
    footerDescription: "",
    image: {
      path: "/images/hamriyah-business-mainland.jpg",
      alt: "Hamriyah",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Key Benefits of Business Setup in HFZA",
    items: [
      {
        id: 1,
        media: {
          path: "/images/hamriyah-key-1.svg",
          alt: "Port Access",
        },
        title: "Port Access",
        description:
          "<p>Direct connectivity to Hamriyah Port with inner harbour and deep-water facilities for export-driven businesses.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/hamriyah-key-2.svg",
          alt: "Industrial Scale",
        },
        title: "Industrial Scale",
        description:
          "<p>Large land plots, heavy-load warehouses, and sector-specific zones for manufacturing and processing.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/hamriyah-key-3.svg",
          alt: "Customs Relief",
        },
        title: "Customs Relief",
        description:
          "<p>No import, export, or re-export duties within the free zone, supporting cost-efficient trade flows.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/hamriyah-key-4.svg",
          alt: "Long Tenure",
        },
        title: "Long Tenure",
        description:
          "<p>Stable land lease options extending beyond 25 years, enabling long-term industrial planning.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/hamriyah-key-5.svg",
          alt: "Fast Licensing",
        },
        title: "Fast Licensing",
        description:
          "<p>Efficient approval process with licenses typically issued within 1–5 working days.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/hamriyah-key-6.svg",
          alt: "Digital Control",
        },
        title: "Digital Control",
        description:
          "<p>Centralised e-services portal for licensing, renewals, visas, and official documentation.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/hamriyah-key-7.svg",
          alt: "Zone Security",
        },
        title: "Zone Security",
        description:
          "<p>24/7 monitored access and controlled industrial environments for assets and operations.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/hamriyah-key-8.svg",
          alt: "Sector Focus",
        },
        title: "Sector Focus",
        description:
          "<p>Dedicated zones such as HFZA Food Park, Maritime City, and Steel Zone to support compliance and scale.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Choose the Right Hamriyah Freezone License",
    description:
      "Hamriyah Free Zone provides activity-specific licenses to ensure regulatory compliance and operational clarity. Choosing the appropriate license is essential, as only approved activities may be conducted. KPI supports founders through precise activity mapping to align licensing with customs processes, banking expectations, and day-to-day operations.",
    items: [
      {
        id: 1,
        media: {
          path: "/images/hamriyah-servive-1.svg",
          alt: "Industrial License",
        },
        title: "Industrial License",
        description:
          "For manufacturing, processing, assembly, packaging, and industrial production. Suitable for light and heavy industrial operations.",
      },
      {
        id: 2,
        media: {
          path: "/images/hamriyah-servive-2.svg",
          alt: "Commercial License",
        },
        title: "Commercial License",
        description:
          "For import, export, trading, distribution, and e-commerce activities across regional and international markets.",
      },
      {
        id: 3,
        media: {
          path: "/images/hamriyah-servive-3.svg",
          alt: "Service License",
        },
        title: "Service License",
        description:
          "For professional, technical, and consultancy-based services operating from HFZA.",
      },
      {
        id: 4,
        media: {
          path: "/images/hamriyah-servive-4.svg",
          alt: "Maritime License",
        },
        title: "Maritime License",
        description:
          "For shipbuilding, ship repair, offshore fabrication, marine logistics, and port-related operations.",
      },
    ] satisfies ServiceItem[],
  },
  businessLocation: {
    title: "Legal Structures Available in HFZA",
    description:
      "HFZA offers flexible company structures tailored to different ownership, control, and expansion needs. Selecting the right entity is critical, as it directly affects liability, governance, and long-term scalability. KPI guides founders in choosing structures that align with banking requirements, tax efficiency, and group-level planning.",
    items: [
      {
        id: 1,
        title: "FZE",
        type: "image",
        image: "/images/saifz-business-1.jpg",
        description: "Free Zone Establishment with a single shareholder.",
        link: "#",
      },
      {
        id: 2,
        title: "FZC",
        type: "image",
        image: "/images/saifz-business-2.jpg",
        description: "Free Zone Company with two or more shareholders.",
        link: "#",
      },
      {
        id: 3,
        title: "Branch of a Foreign Company",
        type: "image",
        image: "/images/saifz-business-4.jpg",
        description:
          "A foreign company can establish a branch to operate in the UAE.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  setupOptions: {
    title: "HFZA Operational Setup Options",
    description:
      "<p>Hamriyah Free Zone supports businesses that require physical operations, storage, or industrial production. KPI advises on facility selection during setup, ensuring alignment with license scope, visa quotas, and operational scale.</p>",
    items: [
      {
        id: 1,
        title: "Offices",
        description:
          "<p>Executive offices and business suites for management, administration, and service-based operations</p>",
        media: {
          path: "/images/hamriyah-setup-1.jpg",
          alt: "hamriyah-setup-1",
        },
        slug: "/corporate-services-uae/mainland",
      },
      {
        id: 2,
        title: "Warehouses",
        description:
          "<p>Pre-built units for storage, processing, and light manufacturing, compliant with UAE safety standards.</p>",
        media: {
          path: "/images/hamriyah-setup-2.jpg",
          alt: "Warehouses",
        },
        slug: "/corporate-services-uae/freezone",
      },
      {
        id: 3,
        title: "Industrial Land",
        description:
          "<p>Customisable plots for purpose-built factories, plants, and heavy industrial developments.</p>",
        media: {
          path: "/images/hamriyah-setup-3.jpg",
          alt: "Industrial Land",
        },
        slug: "/corporate-services-uae/offshore",
      },
    ] satisfies SetupOptionItem[],
  },
  banking: {
    title: "Banking Support for HFZA Companies  ",
    description:
      "<p>We assist clients with corporate bank account opening through trusted UAE and international banking partners, helping you choose the right bank based on your business activity and structure. </p>",
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
    title: "Launch Your Business in Hamriyah Free Zone",
    description:
      "<p>Speak with our consultants to assess licensing, facilities, timelines, and costs based on your business model. Get clear answers before you commit.</p>",
    button: {
      label: "Get Started Today",
      link: "/contact",
    },
    images: {
      overlay: "/images/hamriyah-cta-overlay.svg",
      overlayMobile: "/images/hamriyah-cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "What is Hamriyah Free Zone (HFZA)?",
        description: `
                    <p>You can register an FZE, FZC, or a branch of a UAE or foreign company in SAIF Free Zone. KPI handles the process from start to finish, ensuring fast approval and compliance.</p>
                    `,
      },
      {
        id: 2,
        title:
          "How much does it cost to set up a company in Hamriyah Free Zone?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title: "How long does Hamriyah Free Zone company formation take?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "What licenses are available in Hamriyah Free Zone?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title: "Can foreigners own 100% of a Hamriyah Free Zone company?",
        description: `
                    <p>Yes, Hamriyah Free Zone allows 100% foreign ownership for all company types.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI acts as a long-term advisory partner, not just a company setup agent. We support Hamriyah Free Zone businesses with:</p>",
    items: [
      {
        id: 1,
        text: "Authority-level guidance on licensing and activities",
      },
      {
        id: 2,
        text: "Structuring support aligned with banking and tax requirements",
      },
      {
        id: 3,
        text: "End-to-end visa and immigration coordination",
      },
      {
        id: 4,
        text: "Ongoing renewals, amendments, and compliance management",
      },
      {
        id: 5,
        text: "Strategic advisory as your business scales in the UAE",
      },
    ],
    media: {
      path: "/images/hamriyah-document.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "<p>Our role is to ensure your HFZA company is built correctly from day one — and remains compliant as it grows.</p>",
  } satisfies DocumentRequiredData,
  insights: {
    title: "Related Blogs",
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

export default function HamriyaUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <MainlandBusiness data={localData.mainlandBusiness} variant="hamriya" />
      <CorporateServicesUaeWhyBuild
        variant={["mainland", "saifz", "hamriya"]}
        data={localData.whyBuild}
      />
      <CorporateServicesUaeServices data={localData.services} variant="saifz" />
      <BusinessLocation data={localData.businessLocation} />
      <CorporateServicesUaeSetupOptions
        data={localData.setupOptions}
        variant="hamriyah"
      />
      <DocumentRequired
        data={localData.document_required_data}
        variant="hamriya"
      />
      <CorporateServicesUaeBanking
        data={localData.banking}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <HomeOurInsights data={localData.insights} variant="saifz" />
    </>
  );
}
