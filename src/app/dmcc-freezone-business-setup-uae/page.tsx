import InnerHero from '@/components/common/InnerHero'
import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";
import { Metadata } from "next";


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
  footerDescription?: string;
  image: {
    path: string;
    alt: string;
  };
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


const localData = {
    hero: {
        id: 1,
        media: {
            desktopPath: "/images/audit-banner.png",
            mobilePath: "/images/audit-mobile.png",
            alt: "Company Formation in DMCC Free Zone, UAE",
        },
        title: "Company Formation in DMCC Free Zone, UAE",
        description:
            "<p>Establish your company in DMCC Free Zone with full ownership, quick licensing, and flexible office solutions. Perfect for startups, SMEs, and international companies looking to operate in Dubai.</p>",
    } satisfies HeroData,

    mainlandBusiness: {
        title: "Start a Business in DMCC, UAE",
        description:
            "<p>The Dubai Multi Commodities Centre (DMCC) is a government-backed free zone and one of Dubai’s most respected business hubs. It offers a transparent regulatory framework, flexible licenses, and dedicated support, making it easy for you to start and scale your business. Whether you’re launching a startup, providing professional services, trading, or managing a regional office, DMCC gives you the freedom and tools to grow successfully in Dubai.</p>",
        highlightsTitle:
            "Key Features Include:",
        highlights: [
            "Fast, digital company registration",
            "Flexible license covering multiple business activities",
            "Optional physical office or flexi-desk solutions",
            "Support with visas, banking, and compliance",
        ],
        footerDescription:
            "<p>Our team manages the setup process end-to-end, ensuring your DMCC company is fully compliant, operational, and ready for growth.</p>",
        image: {
            path: "/images/dmcc-img.jpg",
            alt: "Mainland Business Setup UAE",
        },
    } satisfies MainlandBusinessData,

      businessLocation: {
        title: "Explore Other Business Setup Options",
        description:
          "If DMCC Free Zone isn’t the perfect fit for your business plan, you can explore other UAE company structures. Each option offers different benefits, market access, and licensing flexibility to help you find the best setup for your growth goals.",
        items: [
          {
            id: 1,
            title: "Mainland",
            type: "image",
            image: "/images/dmcc-location-1.jpg",
            description:
              "Operate anywhere in the UAE with access to the local market and government contracts.",
            link: "#",
          },
          {
            id: 2,
            title: "Other Freezones",
            type: "image",
            image: "/images/dmcc-location-2.jpg",
            description:
              "The UAE has many free zones, each offering tax benefits, flexibility, and industry-specific support. Explore your options.",
            link: "#",
          },
          {
            id: 3,
            title: "ADGM",
            type: "image",
            image: "/images/dmcc-location-3.jpg",
            description:
              "A globally recognized financial center with a strong common law framework, ideal for financial services and investment firms.",
            link: "#",
          },
          {
            id: 4,
            title: "DIFC",
            type: "image",
            image: "/images/dmcc-location-4.jpg",
            description:
              "A premium jurisdiction for finance and professional services with an independent legal and regulatory environment.",
            link: "#",
          },
           
        ],
      } satisfies BusinessLocationData,
}
export default function page() {
    return (
        <>
            <InnerHero data={localData.hero} />
            <MainlandBusiness data={localData.mainlandBusiness} />

             <BusinessLocation data={localData.businessLocation} />
        </>
    )
}
