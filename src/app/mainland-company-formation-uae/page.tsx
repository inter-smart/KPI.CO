import MainlandBusiness from "@/components/features/mainland/MainlandBusiness";
import BusinessLocation from "@/components/features/mainland/BusinessLocation";

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
    mainlandBusiness: {
        title: "Start A Mainland Business In The UAE",
        description: "<p>A mainland company lets you do business anywhere in the UAE, without being limited to a specific free zone. It is licensed by the Department of Economic Development (DED) in the Emirate where your company is registered and is commonly used by businesses that want direct access to the local market.</p>",
        highlightsTitle: "Mainland company formation is suitable for businesses such as:",
        highlights: [
            "Trading companies",
            "Service-based businesses",
            "Consultants and professionals",
            "Companies working with UAE clients",
        ],
        footerDescription: "<p>For most business activities, 100% foreign ownership is allowed, making mainland setup a flexible option for both local and international investors.</p>",
        image: {
            path: "/images/corporate-services-uae-setup-1.jpg",
            alt: "Mainland Business Setup UAE",
        },
    } satisfies MainlandBusinessData,

    businessLocation: {
        title: "Mainland Business Locations In The UAE",
        description: "Each of the UAE's seven Emirates offers unique opportunities for mainland business setup. Choosing the right location depends on your sector, scale, and long-term goals.",
        items: [
            {
                id: 1,
                title: "Dubai Mainland",
                type: "image",
                image: "/images/mainlandBusiness-1.jpg",
                description: "Dubai offers world-class infrastructure and a global trade hub environment, perfect for ambitious international businesses.",
                link: "#",
            },
            {
                id: 2,
                title: "Abu Dhabi Mainland",
                type: "image",
                image: "/images/mainlandBusiness-2.jpg",
                description: "Abu Dhabi combines strong government support with strategic industry clusters. Its focus on energy, technology, and innovation provides a solid base for businesses working on large-scale or specialized projects.",
                link: "#",
            },
            {
                id: 3,
                title: "Ajman Mainland",
                type: "image",
                image: "/images/mainlandBusiness-3.jpg",
                description: "Ajman provides a cost-effective mainland setup with a fast-growing industrial base and strategic port access.",
                link: "#",
            },
            {
                id: 4,
                title: "Sharjah Mainland",
                type: "image",
                image: "/images/mainlandBusiness-4.jpg",
                description: "Sharjah is the cultural and educational hub of the UAE, offering unique opportunities in logistics and creative industries.",
                link: "#",
            },
            {
                id: 5,
                title: "Ras Al Khaimah (RAK) Mainland",
                type: "image",
                image: "/images/mainlandBusiness-5.jpg",
                description: "RAK is known for its diverse economy and strong manufacturing sector, offering a high quality of life and business-friendly regulations.",
                link: "#",
            },
            {
                id: 6,
                title: "Fujairah Mainland",
                type: "image",
                image: "/images/mainlandBusiness-6.jpg",
                description: "Fujairah is a strategic maritime and oil hub with the only UAE access to the Indian Ocean.",
                link: "#",
            },
            {
                id: 7,
                title: "Umm Al Quwain Mainland",
                type: "image",
                image: "/images/mainlandBusiness-7.jpg",
                description: "UAQ offers a stable business environment with a focus on tourism and trade, providing great potential for sustainable growth.",
                link: "#",
            },
        ]
    } satisfies BusinessLocationData,
};

export default function MainlandCompanyFormationUaePage() {
    return (
        <>
            <MainlandBusiness data={localData.mainlandBusiness} />
            <BusinessLocation data={localData.businessLocation} />
        </>
    );
}
