import CorporateServicesUaeFaq from "@/components/features/services/CorporateServicesUaeFaq";

export type CorporateFaq_data = {
    title: string;
    description: string;
};

const local_data = {
    corporateServicesUaeFaq_data: {

    } satisfies CorporateFaq_data,
}

export default function CorporateServicesUaePage() {
    return (
        <>
            <CorporateServicesUaeFaq data={local_data?.corporateServicesUaeFaq_data} />
        </>
    )
}
