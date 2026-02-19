"use client";
import Image from "next/image";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export type MediaItem = {
  path: string;
  alt: string;
};

export type WhyBuildItem = {
  id: number;
  media: MediaItem;
  title: string;
  description: string;
};

export type CorporateServicesUaeWhyBuildData = {
  title: string;
  description?: string;
  items: WhyBuildItem[];
};

export type Variant =
  | "hamriya"
  | "dafz"
  | "saifz"
  | "mainland"
  | "freezone"
  | "dsoa"
  | "default";

export type CorporateServicesUaeWhyBuildProps = {
  variant?: Variant | Variant[];
  data: CorporateServicesUaeWhyBuildData;
};

const hasVariant = (
  variant: Variant | Variant[] | undefined,
  target: Variant,
) => {
  if (Array.isArray(variant)) {
    return variant.includes(target);
  }
  return variant === target;
};

function WhyBuildCard({
  item,
  variant,
}: {
  item: WhyBuildItem;
  variant?: Variant | Variant[];
}) {
  return (
    <div
      className={cn(
        "group w-full h-full xl:min-h-[230px] 2xl:min-h-[276px] 3xl:min-h-[340px] bg-white rounded-[10px] p-5 sm:p-4 xl:py-6 2xl:py-7.5 xl:px-5 2xl:px-5.5 shadow-[0px_0px_5px_0_rgba(28,83,150,0.1)] hover:shadow-[0px_10px_30px_rgba(28,83,150,0.1)] transition-all duration-300",
        variant === "freezone" ? "xl:min-h-[205px] 2xl:min-h-[265px] 3xl:min-h-[300px]" : "",
      )}
    >
      <div className="w-[46px] 2xl:w-[55px] aspect-square mb-[20px] 2xl:mb-[25px] transition-transform">
        <Image
          src={item.media.path}
          alt={item.media.alt}
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
      <Heading
        as="div"
        size="h5"
        className={cn(
          "font-semibold !text-black mb-2 2xl:mb-2.5",
          (hasVariant(variant, "saifz") || hasVariant(variant, "freezone") || hasVariant(variant, "dsoa")) &&
            "!text-[#1C5396]",
          "font-semibold text-[#1C5396] mb-2 2xl:mb-2.5",
          hasVariant(variant, "saifz") && "text-[#1C5396]",
          hasVariant(variant, "dafz") && "text-[#1C5396]",
        )}
      >
        {item.title}
      </Heading>
      <Text
        as="div"
        size="p1"
        className={cn(
          "font-normal text-[#4e4e4e] sm:text-black",
          hasVariant(variant, "mainland") || hasVariant(variant, "freezone")
            ? "text-[14px] 2xl:text-[14px] 3xl:text-[18px]"
            : "",
        )}
      >
        {parse(item?.description)}
      </Text>
    </div>
  );
}

export default function CorporateServicesUaeWhyBuild({
  data,
  variant,
}: CorporateServicesUaeWhyBuildProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  return (
    <section
      className={cn(
        "w-full block py-12.5 sm:py-10 xl:py-[70px_50px] 2xl:py-[85px_65px]",
        hasVariant(variant, "mainland")
          ? "bg-[#f9fafb] "
          : "bg-linear-to-t from-[#f1fafe] via-white to-white",
        hasVariant(variant, "saifz") &&
          "bg-linear-to-t from-[#f1fafe] via-white to-white",
        hasVariant(variant, "dsoa") &&
          "bg-linear-to-t from-[#f1fafe] via-white to-white",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "w-full mb-6 xl:mb-10 2xl:mb-12",
            hasVariant(variant, "mainland") || hasVariant(variant, "freezone") || hasVariant(variant, "dsoa")
              ? "text-start "
              : "sm:text-center sm:max-w-[576px] xl:max-w-[860px] 2xl:max-w-[1060px] 3xl:max-w-[1280px] mx-auto",
            hasVariant(variant, "dafz") && "sm:text-left !max-w-full",
          )}
        >
          <Heading
            as="h2"
            size="h2"
            className="text-[#1C5396] mb-3 sm:mb-5 2xl:mb-7"
          >
            {data.title}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              size="p5"
              className="text-[#4e4e4e] mb-4 xl:mb-6 2xl:mb-8"
            >
              {parse(data?.description)}
            </Text>
          )}
        </div>
        <div
          className={cn(
            "hidden sm:grid grid-cols-2 md:grid-cols-2 ",
            hasVariant(variant, "mainland") || hasVariant(variant, "freezone") || hasVariant(variant, "dsoa")
              ? "lg:grid-cols-4 gap-3 xl:gap-5 2xl:gap-6"
              : "lg:grid-cols-3 gap-4 xl:gap-8 2xl:gap-10",
            hasVariant(variant, "dafz") &&
                "lg:!gap-[20px_30px] xl:!gap-[25px_35px] 2xl:!gap-[25px_40px] 3xl:!gap-[35px_50px]",
            hasVariant(variant, "hamriya") &&
              "lg:!gap-[35px_20px] xl:!gap-[40px_20px] 2xl:!gap-[50px_25px] 3xl:!gap-[60px_30px]",
          )}
        >
          {data.items.map((item) => (
            <div key={item.id}>
              <WhyBuildCard item={item} variant={variant} />
            </div>
          ))}
        </div>
        <div ref={emblaRef} className="w-full max-w-full sm:hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5">
            {data.items.map((item) => (
              <div
                key={`why-build-${item.id}`}
                className="flex-[0_0_340px] min-w-0 select-none px-2.5"
              >
                <WhyBuildCard item={item} variant={variant} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
