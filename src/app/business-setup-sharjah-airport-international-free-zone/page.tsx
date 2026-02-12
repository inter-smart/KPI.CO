import InnerHero from "@/components/common/InnerHero";
import HomeOurInsights from "@/components/features/home/HomeOurInsights";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import DocumentRequired from "@/components/features/services/DocumentRequired";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeBanking from "@/components/features/services/CorporateServicesUaeBanking";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeServices from "@/components/features/services/CorporateServicesUaeServices";

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
      desktopPath: "/images/saifz-hero-bg.jpg",
      mobilePath: "/images/saifz-hero-bg-mobile.svg",
      alt: "Mainland Company Formation & Licensing in the UAE",
    },
    title: "Company Formation in SAIF Free Zone",
    description:
      "<p>Set up your company in Sharjah Airport International Free Zone - a strategically located, investor-friendly free zone offering 100% foreign ownership, tax efficiency, and rapid setup within 1 hour for global businesses.</p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start a Business in Sharjah Airport International Free Zone",
    description:
      "<p>Sharjah Airport International Free Zone (SAIF Zone) is a dynamic and well-connected business hub located next to Sharjah International Airport. Known for its modern infrastructure, strategic location near Dubai, and founder-friendly regulations, SAIF Zone is ideal for entrepreneurs and international companies seeking a UAE base.</p>",
    highlightsTitle: "Why founders start a SAIF Free Zone Company:",
    highlights: [
      "100% foreign ownership with no local sponsor required",
      "Zero corporate and personal income tax for qualifying businesses",
      "Fast setup timelines, often within 1 hour",
      "Flexible facility options: offices, warehouses, land plots, jewellery park",
      "Strategic access to UAE and regional markets",
      "Confidentiality and asset protection for holding and investment companies",
    ],
    footerDescription:
      "<p>SAIF Free Zone enables founders and investors to build tax-efficient structures, operate international trading or manufacturing, and manage assets with minimal bureaucracy.</p>",
    image: {
      path: "/images/saifz-mainland-business.jpg",
      alt: "Mainland Business Setup UAE",
    },
  } satisfies MainlandBusinessData,

  businessLocation: {
    title: "Types of Companies in SAIF",
    description:
      "SAIF Free Zone offers flexible structures to suit founders and international businesses.",
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
        title: "Branch of a UAE Company",
        type: "image",
        image: "/images/saifz-business-3.jpg",
        description: "A UAE company can register a branch within SAIF Zone.",
        link: "#",
      },
      {
        id: 4,
        title: "Branch of a Foreign Company",
        type: "image",
        image: "/images/saifz-business-4.jpg",
        description:
          "A foreign company can establish a branch to operate in the UAE.",
        link: "#",
      },
    ],
  } satisfies BusinessLocationData,
  whyBuild: {
    title: "Key Benefits of SAIF Business Setup",
    items: [
      {
        id: 1,
        media: {
          path: "/images/saifz-key-1.svg",
          alt: "Fast Setup",
        },
        title: "Fast Setup",
        description:
          "<p>Rapid registration with single-window processing; some licenses issued same-day or within 1 hour.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/saifz-key-2.svg",
          alt: "Full Ownership",
        },
        title: "Full Ownership",
        description:
          "<p>100% foreign ownership with complete control over your business and profits.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/saifz-key-3.svg",
          alt: "Visa Options",
        },
        title: "Flexible Licenses",
        description:
          "<p>Commercial, Service, and Industrial licenses available, with options to combine activities.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/saifz-key-4.svg",
          alt: "Visa Options",
        },
        title: "Tax Efficiency",
        description:
          "<p>100% corporate and personal tax exemption, full repatriation of profits, and no currency restrictions.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/saifz-key-5.svg",
          alt: "Visa Options",
        },
        title: "Strategic Location",
        description:
          "<p>Next to Sharjah Airport with access to major global trade routes,Dubai, and UAE ports.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/saifz-key-6.svg",
          alt: "Visa Options",
        },
        title: "Modern Facilities",
        description:
          "<p>Executive offices, shared workspaces, warehouses, land plots, and jewelry park options.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/saifz-key-7.svg",
          alt: "Visa Options",
        },
        title: "PRO Assistance",
        description:
          "<p>Visa quotas (up to 8 with SAIF Suite), online company status management, and professional support.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/saifz-key-8.svg",
          alt: "Visa Options",
        },
        title: "Operational Support",
        description:
          "<p>On-site customs, 24/7 power, and integrated logistics for smooth goods clearance.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  services: {
    title: "Types of Licenses in Sharjah Airport Free Zone",
    items: [
      {
        id: 1,
        media: {
          path: "/images/saifz-servive-1.svg",
          alt: "Company Formation",
        },
        title: "Trade License",
        description: "For import, export, storage, or distribution activities.",
      },
      {
        id: 2,
        media: {
          path: "/images/saifz-servive-2.svg",
          alt: "Company Formation",
        },
        title: "General Trading License",
        description:
          "Covers a broader range of trading activities under a single license.",
      },
      {
        id: 3,
        media: {
          path: "/images/saifz-servive-3.svg",
          alt: "Company Formation",
        },
        title: "Service License",
        description:
          "Covers consultancy, e-commerce, and professional service activities.",
      },
      {
        id: 4,
        media: {
          path: "/images/saifz-servive-4.svg",
          alt: "Company Formation",
        },
        title: "Industrial License",
        description:
          "For manufacturing, processing, assembling, packaging, and exporting products.",
      },
    ] satisfies ServiceItem[],
  },
  business: {
    title: "Other Business Setup Options",
    description:
      "If a mainland company isn’t the right fit for your business, KPI can help you explore other UAE company structures.",
    items: [
      {
        id: 1,
        name: "Freezone",
        description:
          "Best suited for businesses focused on international trade, digital services, or startups seeking tax efficiency and simplified setup. Freezone companies often enjoy 100% foreign ownership and flexible visa options.",
        media: {
          path: "",
          alt: "Business Structuring",
        },
      },
      {
        id: 2,
        name: "Offshore",
        description:
          "Ideal for holding companies, asset protection, or businesses that operate internationally without a local UAE presence. Offshore companies cannot trade directly within the UAE and do not require an office or UAE visas. ",
        media: {
          path: "",
          alt: "Business Structuring",
        },
      },
      {
        id: 3,
        name: "ADGM",
        description:
          "A globally recognized financial centre in Abu Dhabi with a strong legal framework and common law structure. Ideal for financial services, investment firms and profesional advisory businesses",
        media: {
          path: "",
          alt: "Business Structuring",
        },
      },
      {
        id: 4,
        name: "DIFC",
        description:
          "A premium Dubai- based jurisdiction for finance, investment, and professional services. Operates under an independent legal and regulatory framework with international standards",
        media: {
          path: "",
          alt: "Business Structuring",
        },
      },
    ] satisfies BusinessItem[],
  },
  banking: {
    title: "Banking Support for SAIF Companies",
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
  whyChoose: {
    title: "Why choose KPI?",
    description:
      "KPI is more than a company setup service. We guide businesses through every step of mainland formation and beyond, helping you build a compliant, growth-ready company in the UAE. Our team supports you with: ",
    items: [
      {
        id: 1,
        title: "Business Structuring ",
        description:
          "<p>We help you choose the right activity, license, and legal structure to align with your goals and long-term growth. </p>",
      },
      {
        id: 2,
        title: "Regulatory Guidance",
        description:
          "<p>Stay fully compliant with UAE laws and regulations. We ensure approvals, documentation, and licenses are handled correctly. </p>",
      },
      {
        id: 3,
        title: "Office & Visa Support",
        description:
          "<p>We handle your UAE office setup and visa processing for owners, employees, and dependents during the formation process.</p>",
      },
      {
        id: 4,
        title: "Banking & Operations",
        description:
          "<p>We assist with corporate bank accounts, operational setup, and admin tasks to give your mainland company a solid foundation.</p>",
      },
      {
        id: 5,
        title: "Ongoing Advisory",
        description:
          "<p>After formation, we provide continuous guidance and support, helping your business scale, adapt, and operate across the UAE.</p>",
      },
      {
        id: 6,
        title: "Accounting Services",
        description:
          "<p>We manage bookkeeping, accounting, and reporting, helping your business maintain clarity for informed decision-making.</p>",
      },
    ] satisfies WhyChooseItem[],
    hero: {
      id: 1,
      media: {
        desktopPath: "/images/mainland-company-formation-uae-hero-bg.png",
        mobilePath: "/images/mainland-company-formation-uae-hero-bg.png",
        alt: "Mainland Company Formation & Licensing in the UAE",
      },
      title: "Mainland Company Formation & Licensing in the UAE ",
      description:
        "<p>Set up your mainland company in the UAE and operate freely across all Emirates. Ideal for businesses that need local market access, onshore operations, and long term flexibility.</p>",
    } satisfies HeroData,
    whyBuild: {
      title: "Why Choose a Mainland Company Setup?",
      description:
        "<p>The UAE offers several ways to establish a company; each suited to different business goals and operating models. We help you select the right structure from day one, ensuring it aligns with your business activity, growth plans, and long-term objectives.</p>",
      items: [
        {
          id: 1,
          media: {
            path: "/images/mainland-company-formation-service-1.svg",
            alt: "Market Access",
          },
          title: "Market Access",
          description:
            "<p>Operate anywhere in the UAE without geographic limits. Trade directly with local and international clients without needing agents or distributors.</p>",
        },
        {
          id: 2,
          media: {
            path: "/images/mainland-company-formation-service-2.svg",
            alt: "Full Ownership",
          },
          title: "Full Ownership",
          description:
            "<p>Most business activities under a Mainland license allow 100% foreign ownership. Retain complete control without a local sponsor or partner. </p>",
        },
        {
          id: 3,
          media: {
            path: "/images/mainland-company-formation-service-3.svg",
            alt: "Visa Options",
          },
          title: "Visa Options",
          description:
            "<p>Benefit from flexible visas for employees and dependents. Visa eligibility scales with office size and business growth. </p>",
        },
        {
          id: 4,
          media: {
            path: "/images/mainland-company-formation-service-4.svg",
            alt: "Flexible Offices",
          },
          title: "Flexible Offices",
          description:
            "<p>Choose an office location anywhere in the UAE. Office size can grow as your business expands and visa needs increase.</p>",
        },
        {
          id: 5,
          media: {
            path: "/images/mainland-company-formation-service-5.svg",
            alt: "Government Contracts ",
          },
          title: "Government Contracts ",
          description:
            "<p>Mainland companies can bid for government and semi-government projects, giving access to opportunities not available to free zone entities.</p>",
        },
        {
          id: 6,
          media: {
            path: "/images/mainland-company-formation-service-6.svg",
            alt: "Banking Credibility",
          },
          title: "Banking Credibility",
          description:
            "<p>Mainland companies are seen as more established by banks and local partners, simplifying banking, leasing, and commercial relationships.</p>",
        },
        {
          id: 7,
          media: {
            path: "/images/mainland-company-formation-service-7.svg",
            alt: "Easy Expansion",
          },
          title: "Easy Expansion",
          description:
            "<p>Open multiple branches or expand operations across multiple Emirates without changing your core company license or structure.</p>",
        },
        {
          id: 8,
          media: {
            path: "/images/mainland-company-formation-service-8.svg",
            alt: "Regulatory Stability",
          },
          title: "Regulatory Stability",
          description:
            "<p>Operate within a clear and stable legal framework. Mainland companies benefit from consistent regulations that support long-term growth and compliance.</p>",
        },
      ] satisfies WhyBuildItem[],
    },
    formationProcess: {
      title: "Steps to Get a Mainland License",
      sub_title: null,
      description: null,
      steps: [
        {
          id: 1,
          step: "Step One",
          title: "Free Consultation with Our Experts",
          sub_title: "Free Consultation with Our Experts",
          description:
            "<p>Share your business details with our team. We’ll guide you on the best mainland setup for your goals.</p>",
        },
        {
          id: 2,
          step: "Step Two",
          title: "Choose Your Business Activity & Structure",
          sub_title: "Choose Your Business Activity & Structure",
          description:
            "<p>Pick the right business activity and legal structure. KPI Group ensures your choices meet DED regulations. </p>",
        },
        {
          id: 3,
          step: "Step Three",
          title: "Reserve Your Company Name & Apply for License",
          sub_title: "Reserve Your Company Name & Apply for License",
          description:
            "<p>We handle company name reservation and trade license application, including all required approvals and documents.</p>",
        },
        {
          id: 4,
          step: "Step Four",
          title: "Office & Workspace Setup",
          sub_title: "Office & Workspace Setup",
          description:
            "<p>Secure a physical office or coworking space. We’ll guide you through tenancy agreements, Ejari, and necessary approvals.</p>",
        },
        {
          id: 5,
          step: "Step Five",
          title: "UAE Residency & Visas",
          sub_title: "UAE Residency & Visas",
          description:
            "<p>Obtain visas for owners, employees, and dependents. KPI Group manages the full visa process. </p>",
        },
        {
          id: 6,
          step: "Step Six",
          title: "Open Your Business Bank Account",
          sub_title: "Open Your Business Bank Account",
          description:
            "<p>Set up a corporate bank account to start operating and managing your company finances. </p>",
        },
      ] satisfies ProcessStep[],
    },
    whyChoose: {
      title: "Why choose KPI?",
      description:
        "Choosing the right business setup consultants in the UAE can save you time, reduce costs, and prevent unnecessary restructuring. KPI supports founders and businesses with clear advice, practical execution, and ongoing guidance every step of the way.",
      items: [
        {
          id: 1,
          title: "Experienced Guidance",
          description:
            "<p>Decades of hands-on experience supporting businesses across multiple industries, structures, and UAE jurisdictions. </p>",
        },
        {
          id: 2,
          title: "Founder-led Approach ",
          description:
            "<p>We take the time to understand your goals and recommend solutions that fit how you want to operate and grow. </p>",
        },
        {
          id: 3,
          title: "Transparent Processes",
          description:
            "<p>No hidden costs or surprises. You know what to expect at every stage, from setup through ongoing compliance. </p>",
        },
        {
          id: 4,
          title: "End-to-End Support",
          description:
            "<p>From UAE company formation to banking, visas, and compliance, we stay involved as your business evolves. </p>",
        },
      ] satisfies WhyChooseItem[],
    },
    cta: {
      title: "Ready to Start Your Dream Business in the UAE? ",
      description:
        "<p>Our team will help you choose the right structure, license, and setup based on your goals, risk profile, and budget. Speak to our expert business setup consultants today!</p>",
      button: {
        label: "Get in Touch",
        link: "/contact",
      },
      images: {
        overlay: "/images/corporate-cta-overlay.svg",
        overlayMobile: "/images/corporate-cta-overlay-mobile.svg",
      },
    } satisfies CtaData,
    corporate_faq_data: {
      title: "FAQs",
      faq_list: [
        {
          id: 1,
          title: "What is a mainland company in the UAE?",
          description: `
                    <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                    `,
        },
        {
          id: 2,
          title: "Is mainland company formation available across the UAE",
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
          title: "What does it cost to set up a business in the UAE?",
          description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
        },
        {
          id: 5,
          title: "How long does mainland company setup take? ",
          description: `
                    <p>Timelines vary by activity and Emirate, but licensing is typically completed within a few working days once approvals are in place.</p>
                    `,
        },
        {
          id: 6,
          title: "How much does a mainland license cost?",
          description: `
                    <p>Costs depend on the business activity, license type, office requirements, and visas needed. Our team provides a clear breakdown before starting. </p>
                    `,
        },
      ] satisfies FaqItem[],
    },
  },
  cta: {
    title: "Launch Your SAIF Free Zone Company Today",
    description:
      "<p>Get expert guidance to select the right company type, license, and facility. Start your UAE journey with confidence – KPI handles the process from start to finish.</p>",
    button: {
      label: "Get in Touch",
      link: "/contact",
    },
    images: {
      overlay: "/images/cta-overlay.svg",
      overlayMobile: "/images/cta-overlay-mobile.svg",
    },
  } satisfies CtaData,
  corporate_faq_data: {
    title: "FAQs",
    faq_list: [
      {
        id: 1,
        title: "How do I set up a company in SAIF Free Zone?",
        description: `
                    <p>A mainland company is a business licensed by the Department of Economic Development (DED), allowing you to operate anywhere in the UAE.</p>
                    `,
      },
      {
        id: 2,
        title:
          "What types of licenses are available in Sharjah Airport Free Zone?",
        description: `
                    <p>Yes, mainland companies can be registered in different Emirates, including Dubai and Abu Dhabi.</p>
                    `,
      },
      {
        id: 3,
        title: "Can I have 100% foreign ownership in SAIF Free Zone?",
        description: `
                    <p>Yes, most mainland business activities allow full foreign ownership, subject to regulatory approval. </p>
                    `,
      },
      {
        id: 4,
        title: "How quickly can I start my SAIF Free Zone company?",
        description: `
                    <p>Costs vary depending on the jurisdiction, type of license, number of visas, and office requirements. Use our business setup cost calculator for an instant estimate tailored to your business.</p>
                    `,
      },
      {
        id: 5,
        title:
          "Does KPI help with visas and permits for SAIF Free Zone companies?",
        description: `
                    <p>Yes. KPI assists with shareholder and employee visas, manages visa quotas, and handles all company status updates efficiently.</p>
                    `,
      },
    ] satisfies FaqItem[],
  },
  document_required_data: {
    title: "Why Work with KPI",
    description:
      "<p>KPI is your strategic growth partner, not just a company formation service provider. We help founders structure their SAIF Free Zone companies efficiently, ensuring compliance while maximizing flexibility for trading, industrial, or service operations. </p> <p><b>Our services include:</b></p>",
    items: [
      {
        id: 1,
        text: "Tailored company structures for tax efficiency and international operations",
      },
      { id: 2, text: "Guidance on regulatory and compliance requirements" },
      {
        id: 3,
        text: "End-to-end corporate support: licenses, visas, and approvals",
      },
      {
        id: 4,
        text: "Risk assessment and advisory for secure regional expansion",
      },
      {
        id: 5,
        text: "Post-setup support to manage visas, company status, and operational needs",
      },
    ],
    media: {
      path: "/images/document-required-saifz-img.jpg",
      alt: "Required documents",
    },
    ftr_description:
      "<p>With KPI, your SAIF Free Zone company is structured for growth, letting you focus on scaling and managing your international business.</p>",
  } satisfies DocumentRequiredData,
  
  insights: {
    title: "Related Blogs",
    items: [
      {
        id: 1,
        media: { path: "/images/home-insights-1.jpg", alt: "Audit Firm Guide" },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "<p>What to look for when choosing an audit firm in 2025 – from expertise and independence to technology and trust that support better business decisions.</p>",
        date: "14 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-insights-2.jpg",
          alt: "Top Audit Firms UAE",
        },
        title: "Top 10 Audit firms in UAE",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "13 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-insights-3.jpg",
          alt: "Audit Firm Selection",
        },
        title: "A Guide to Choosing the Best Audit Firm in 2025",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut a days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      },
      {
        id: 4,
        media: { path: "/images/home-insights-1.jpg", alt: "VAT Guide UAE" },
        title:
          "VAT in the United Arab Emirates: A Complete Guide for Companies in 2025",
        description:
          "State helps you see how many more days you need to work to reach.",
        date: "12 NOV 2024",
        readTime: "2 MIN READ",
        slug: "#",
      }, 
    ] satisfies InsightItem[],
  },
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} variant="saifz" />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant={["mainland", "saifz"]}
        data={localData.whyBuild}
      />
      <CorporateServicesUaeServices data={localData.services} variant="saifz" />
      <BusinessLocation data={localData.businessLocation} />
      <DocumentRequired
        data={localData.document_required_data}
        variant="saifz"
      />
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
