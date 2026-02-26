import { Heading, Text } from "@/components/utils/typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
type BlogInternalAuditProps = {
  data: {
    media: {
      media_type: string;
      mobile_path: string;
      desktop_path: string;
      media_alt: string;
    };
    sub_title: string;
    title: string;
    description?: string;
    date?: string;
    date_full?: string;
    readTime?: string;
  };
};
export default function BlogInternalAudit({ data }: BlogInternalAuditProps) {
  return (
    <section className="w-full h-auto block pt-[30px] sm:pt-[40px] xl:pt-[60px] bg-white relative z-0">
      <div className="container">
        <div className="w-full md:max-w-[65%] xl:max-w-[49%] 2xl:max-w-[50%] md:m-auto mb-7 md:mb-10 xl:mb-12">
          <Text
            as="p"
            size="p4"
            className="text-[12px] lg:text-[11px] 2xl:text-[16px] 3xl:text-[18px] font-medium md:text-center text-[#4E4E4E] flex w-fit px-5 xl:px-6 2xl:px-7 py-1 xl:py-1.5 2xl:py-2  mb-2 xl:mb-3 2xl:mb-4 md:mx-auto bg-[#FFE595] rounded-[40px]"
          >
            {data?.sub_title}
          </Text>
          <Heading
            as="h2"
            size="h2"
            className="font-bold md:text-center text-[#1C5396] w-full mb-4"
          >
            {data?.title}
          </Heading>

          <Text
            size="p1"
            className="leading-none md:text-center font-medium text-[#4E4E4E] uppercase"
          >
            {data.date_full} • {data.readTime}
          </Text>
          <div className={cn("typography", "[--text-color:#282828] md:text-center")}>
            {data?.description}
          </div>
        </div>
        <div className="w-full !overflow-hidden !rounded-[10px] relative aspect-[1280/360]">
          <Image
            src={data?.media?.desktop_path || "/images/icon-placeholder.svg"}
            alt={data?.media?.media_alt}
            width={1200}
            height={340}
            className="h-full w-full object-cover !rounded-[10px] min-h-[220px]"
          />
          <div className="absolute inset-0 bg-[#1C5396]/40 z-20 pointer-events-none !m-0 !rounded-[10px]"></div>
        </div>
      </div>
    </section>
  );
}
