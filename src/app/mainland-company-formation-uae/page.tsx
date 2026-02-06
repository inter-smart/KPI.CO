import InnerHero from "@/components/common/InnerHero";
import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeFormationProcess from "@/components/features/services/CorporateServicesUaeFormationProcess";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";

export type MediaItem = {
  path: string;
  alt: string;
};

export type HeroData = {
  id: number;
  title: string;
  description: string;
  media: MediaItem;
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
      path: "/images/mainland-company-formation-uae-hero-bg.png",
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
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <InnerHero data={localData.hero} />
      <CorporateServicesUaeWhyBuild
        variant="mainland"
        data={localData.whyBuild}
      />

      <CorporateServicesUaeFormationProcess
        variant="mainland"
        data={localData.formationProcess}
      />
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
    </>
  );
}
