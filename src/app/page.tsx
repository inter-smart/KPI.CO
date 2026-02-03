import CounterInfo from "@/components/features/home/MainSlider/CounterInfo";
import MainSlider from "@/components/features/home/MainSlider/MainSlider";
import SecurityInfo from "@/components/features/home/MainSlider/SecurityInfo";
// import ServicesInfo from "@/components/features/home/MainSlider/ServicesInfo";
import PartnerSection from "@/components/features/home/PartnerSection";
import ServiceSection from "@/components/features/home/ServiceSection";
import OurInsights from "@/components/features/home/HomeOurInsights";
import ProfessionalAffiliations from "@/components/features/home/HomeProfessionalAffiliations";
import HomeAbout from "@/components/features/home/HomeAbout";
import HomeApart from "@/components/features/home/HomeApart";

const local_data = {
  partners: {
    title: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/home-professionalAffiliations-1.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-professionalAffiliations-2.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-professionalAffiliations-3.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 4,
        media: {
          path: "/images/home-professionalAffiliations-4.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 5,
        media: {
          path: "/images/home-professionalAffiliations-5.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 6,
        media: {
          path: "/images/home-professionalAffiliations-6.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
    ],
  },
  counter_list: [
    {
      id: 1,
      value: 460,
      symbol: "+",
      label: "Years of Combined <br> Experience",
    },
    {
      id: 2,
      value: 700,
      symbol: "+",
      label: "Active Client <br> Relationships",
    },
    {
      id: 3,
      value: 95,
      symbol: "%",
      label: "Client Retention <br> Rate",
    },
    {
      id: 4,
      value: 11000,
      symbol: "+",
      label: "Engagements Successfully <br> Delivered ",
    },
  ],
  security_info_data: {
    title: "Commitment to Information Security ",
    description: `
    <p>At KPI, protecting client information is a professional obligation, not a technical afterthought. Our ISO 27001-certified Information Security Management System (ISMS) ensures structured governance of confidentiality, data integrity, and access across all engagements. </p>
    <p>This certification underscores our commitment to trust, discipline, and best-practice information security - providing our clients with confidence that their data is protected at every level. </p>
    `,
    iso_info: {
      media: {
        type: "image",
        url: "/images/iso-certification-icon.svg",
        alt: "ISO certification",
      },
      label: "ISO 27001",
      description: "Information Security Management System",
    },
  },
  service_info_data: {
    title: "Our Services",
    description:
      "Navigating the UAE business landscape can be challenging. KPI brings practical experience, clear insight, and trusted guidance to help you move forward. Explore how we can support your business, from compliance through to growth.",
    service_list: [
      {
        id: 1,
        media: {
          type: "image",
          path: "/images/service-icon-1.svg",
          alt: "Audit & Assurance",
        },
        title: "Audit & Assurance",
        description:
          "Independent, high-quality audits that strengthen stakeholder confidence and meet UAE statutory and regulatory requirements. ",
        button: {
          link: "/",
          target: false,
        },
      },
      {
        id: 2,
        media: {
          type: "image",
          path: "/images/service-icon-2.svg",
          alt: "Risk Advisory",
        },
        title: "Risk Advisory",
        description:
          "Governance-led risk advisory that helps organisations identify, manage, and control risk across operations and compliance.",
        button: {
          link: "/",
          target: false,
        },
      },
      {
        id: 3,
        media: {
          type: "image",
          path: "/images/service-icon-3.svg",
          alt: "Tax Advisory",
        },
        title: "Tax Advisory",
        description:
          "Practical advice on UAE corporate tax and VAT, focused on clarity, supporting compliance and effective financial planning.",
        button: {
          link: "/",
          target: false,
        },
      },
      {
        id: 4,
        media: {
          type: "image",
          path: "/images/service-icon-4.svg",
          alt: "Corporate Services",
        },
        title: "Corporate Services",
        description:
          "End-to-end corporate services to start a business in the UAE, including licensing, banking, PRO, and ongoing support. ",
        button: {
          link: "/",
          target: false,
        },
      },
      {
        id: 5,
        media: {
          type: "image",
          path: "/images/service-icon-5.svg",
          alt: "DIFC & ADGM",
        },
        title: "DIFC & ADGM",
        description:
          "Advisory and audit support for DIFC and ADGM entities, including regulatory, audit, and compliance needs.",
        button: {
          link: "/",
          target: false,
        },
      },
      {
        id: 6,
        media: {
          type: "image",
          path: "/images/service-icon-6.svg",
          alt: "Digital Transformation",
        },
        title: "Digital Transformation",
        description:
          "Oracle NetSuite consulting, supported by proprietary digital solutions developed across the KPI Group.",
        button: {
          link: "/",
          target: false,
        },
      },
    ],
  },
  Professional_affiliations: {
    title: "Professional Affiliations ",
    items: [
      {
        id: 1,
        media: {
          path: "/images/home-professionalAffiliations-1.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 2,
        media: {
          path: "/images/home-professionalAffiliations-2.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 3,
        media: {
          path: "/images/home-professionalAffiliations-3.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 4,
        media: {
          path: "/images/home-professionalAffiliations-4.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 5,
        media: {
          path: "/images/home-professionalAffiliations-5.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
      {
        id: 6,
        media: {
          path: "/images/home-professionalAffiliations-6.png",
          alt: "professionalAffiliations",
        },
        slug: "#",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <MainSlider />
      {/* <ServicesInfo data={local_data?.service_info_data} /> */}
      <PartnerSection />
      {/* <ProfessionalAffiliations data={local_data?.Professional_affiliations} /> */}

      <ServiceSection />
      <HomeApart />
      <CounterInfo data={local_data} />
      <SecurityInfo data={local_data?.security_info_data} />
      <HomeAbout />
      <ProfessionalAffiliations data={local_data?.Professional_affiliations} />
      <OurInsights />
    </>
  );
}
