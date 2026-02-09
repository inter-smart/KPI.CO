import CorporateServicesUaeCta from "@/components/features/services/CorporateServicesUaeCta";
import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";
import CorporateServicesUaeWhyChoose from "@/components/features/services/CorporateServicesUaeWhyChoose";
import DocumentRequired from "@/components/features/services/DocumentRequired";

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

export type DocumentRequiredData = {
  id: number;
  title?: string;
  description?: string;
  media?: {
    path?: string;
    alt?: string;
  };
};

export type FaqItem = {
  id: number;
  title: string;
  description: string;
};

const localData = {
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
  document_required_data: {
    title: "Documents Required",
    description:
      "<p>To complete your Mainland company registration, you will typically need: </p>",
    items: [
      { id: 1, text: "Passport copies of all shareholders " },
      { id: 2, text: "UAE entry stamp or residence visa copy " },
      { id: 3, text: "Emirates ID (if applicable) " },
      { id: 4, text: "Trade name reservation " },
      {
        id: 5,
        text: "Initial approval from the Department of Economic Development (DED)",
      },
      { id: 6, text: "Tenancy contract (Ejari)" },
      {
        id: 7,
        text: "Memorandum of Association (MOA) or Local Service Agent agreement ",
      },
    ],

    media: {
      path: "/images/document-required-img.jpg", // <-- your image path
      alt: "Required documents",
    },

    ftr_description:
      "<p>KPI handles the full process, from reviewing your documents to final submission, ensuring everything is compliant and your mainland company setup is handled professionally.</p>",
  },
};

export default function MainlandCompanyFormationUaePage() {
  return (
    <>
      <CorporateServicesUaeWhyChoose
        data={localData.whyChoose}
        variant="mainland"
      />
      <CorporateServicesUaeCta data={localData.cta} variant="mainland" />
      <CorporateServicesUaeFaq data={localData.corporate_faq_data} />
      <DocumentRequired data={localData.document_required_data} />
    </>
  );
}
