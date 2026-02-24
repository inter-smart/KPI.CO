import { Metadata } from "next";
import { MediaItem } from "../page";
import InnerHero from "@/components/common/InnerHero";
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import CorporateServicesUaeWhyBuild from "@/components/features/services/CorporateServicesUaeWhyBuild";
import MeydanFreeZone from "@/components/features/meydan/MeydanFreeZone";

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

export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type MeydanFreeZoneItem = {
  id: number;
  title: string;
  zone_list: string[];
};

export type MeydanFreeZoneData = {
  title: string;
  main_description?: string;
  free_zone_list: MeydanFreeZoneItem[];
  structure_list: MeydanStructureItem[];
};

export type MeydanStructureItem = {
  id: number;
  title: string;
  description: string;
};

const localData = {
  hero: {
    id: 1,
    media: {
      desktopPath: "/images/offshore-innerbanner-desktop.svg",
      mobilePath: "/images/offshore-innerbanner-mobile.svg",
      alt: "Expert SOP Consulting & Development in UAE",
    },
    title: "Offshore Company Formation in the UAE",
    description:
      "<p>Set up an offshore company in the UAE to manage international business, protect assets, and structure global investments efficiently. Ideal for businesses and individuals operating outside the UAE and do not require a physical presence. </p>",
  } satisfies HeroData,
  mainlandBusiness: {
    title: "Start an Offshore Company in the UAE",
    description:
      "<p>An offshore company is a legal entity registered in the UAE for ownership and holding purposes without operating locally. It is commonly used to hold assets, manage investments, or structure group ownership, with no requirement for offices or residence visas. </p>",
    highlightsTitle: "Offshore companies are commonly used for: ",
    highlights: [
      "Intellectual property holding ",
      "Property ownership structures ",
      "Holding assets and investments ",
      "Shareholding and investment vehicles ",
      "International business and trading activities ",
    ],
    footerDescription: "",
    image: {
      path: "/images/offshore-business.jpg",
      alt: "Meydan",
    },
  } satisfies MainlandBusinessData,
  whyBuild: {
    title: "Why Choose a Mainland Company Setup?   ",
    description: "",
    items: [
      {
        id: 1,
        media: {
          path: "/images/offshore-busness-1.svg",
          alt: "Cost Effective",
        },
        title: "Asset Protection ",
        description:
          "<p>Separate ownership from operations and safeguard assets through a recognized offshore structure.</p>",
      },
      {
        id: 2,
        media: {
          path: "/images/offshore-busness-2.svg",
          alt: "Cost Effective",
        },
        title: "Ownership Control ",
        description:
          "<p>Retain full ownership and control of the company without any local partners or sponsors.</p>",
      },
      {
        id: 3,
        media: {
          path: "/images/offshore-busness-3.svg",
          alt: "Cost Effective",
        },
        title: "Regulatory Stability",
        description:
          "<p>Operate within a regulated, internationally recognized framework that supports ownership structures and compliance.</p>",
      },
      {
        id: 4,
        media: {
          path: "/images/offshore-busness-4.svg",
          alt: "Cost Effective",
        },
        title: "Tax Efficiency ",
        description:
          "<p>Commonly used in tax-efficient international structures, subject to applicable global tax regulations.</p>",
      },
      {
        id: 5,
        media: {
          path: "/images/offshore-busness-5.svg",
          alt: "Cost Effective",
        },
        title: "Confidentiality Safeguards ",
        description:
          "<p>Benefit from structured privacy for shareholders and directors, in line with regulatory requirements.</p>",
      },
      {
        id: 6,
        media: {
          path: "/images/offshore-busness-6.svg",
          alt: "Cost Effective",
        },
        title: "Global Operations",
        description:
          "<p>Conduct international business, hold foreign investments, and operate across multiple jurisdictions.</p>",
      },
      {
        id: 7,
        media: {
          path: "/images/offshore-busness-7.svg",
          alt: "Cost Effective",
        },
        title: "No Physical Office",
        description:
          "<p>No requirement to lease office space or maintain a UAE presence to keep the company active.</p>",
      },
      {
        id: 8,
        media: {
          path: "/images/offshore-busness-8.svg",
          alt: "Cost Effective",
        },
        title: "Cost Efficiency",
        description:
          "<p>Reduced setup and maintenance costs compared to mainland and free zone companies.</p>",
      },
    ] satisfies WhyBuildItem[],
  },
  meydanFreeZone: {
    title: "Types of Offshore Companies in the UAE",
    main_description:
      "Choosing the right offshore jurisdiction depends on your asset type, ownership structure, and banking requirements. ",
    free_zone_list: [
      {
        id: 1,
        title: "RAK ICC Offshore Company",
        zone_list: [
          "Want 100% foreign ownership",
          "Prefer a fast, digital setup process",
          "Need flexible visa allocation (0–6 visas)",
          "Want a range of business activity options",
          "Wish to expand regional or global operations",
        ],
      },
      {
        id: 2,
        title: "Meydan Free Zone may not be suitable if you:",
        zone_list: [
          "Need direct UAE mainland market access (no branch conversion)",
          "Require heavy industrial facilities or large warehousing",
          "Plan business operations outside free zone permissions",
        ],
      },
    ],
    structure_list: [
      {
        id: 1,
        title: "Choosing the Right Structure",
        description:
          "If your business requires Mainland or other Free Zone options, our expert team will guide you to the best setup for your goals.",
      },
    ],
  } satisfies MeydanFreeZoneData,
};

export const metadata: Metadata = {
  title: " Offshore Company Setup | Offshore Company Registration UAE ",
  description:
    "Offshore business setup in the UAE with trusted advisors. KPI Group helps you register RAK ICC & JAFZA offshore companies with expert structuring and guidance.",
};

export default function CompanyFormationOffshoreUaePage() {
  return (
    <>
      <InnerHero data={localData?.hero} />
      <MainlandBusiness data={localData.mainlandBusiness} />
      <CorporateServicesUaeWhyBuild
        variant="mainland"
        data={localData.whyBuild}
      />
      <MeydanFreeZone data={localData.meydanFreeZone} variant="default" />
    </>
  );
}
