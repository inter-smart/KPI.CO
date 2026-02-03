import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

interface localData {
  title?: string;
  description?: string;
  items: {
    id: number;
    media: { path: string; alt: string };
    title?: string;
    description?: string;
  }[];
}

interface HomeApart {
  data?: localData;
}

const local_data: localData = {
  title: "What Sets Us Apart?",
  items: [
    {
      id: 1,
      media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
      title: "Multi-disciplinary Depth",
      description:
        "<p>We bring experience across audit, regulation, enterprise systems, and operationally complex businesses. We look at issues in context, not in isolation.</p>",
    },
    {
      id: 2,
      media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
      title: "Judgement over Templates",
      description:
        "<p>We don’t rely on generic checklists. Our approach is shaped by decades of hands-on engagement and focused on solutions that work in practice.</p>",
    },
    {
      id: 3,
      media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
      title: "Independence without Compromise",
      description:
        "<p>We are selective about the work we accept. Where independence, audit quality, or stakeholder interest cannot be protected, we do not proceed. </p>",
    },
    {
      id: 4,
      media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
      title: "Long-term Focus",
      description:
        "<p>We prioritise sustainable relationships over short-term growth. Accuracy, transparency, and sound judgement are our priorities - not volume or size.</p>",
    },
    {
      id: 5,
      media: { path: "/images/home-apart-item-1.svg", alt: "home-apart" },
      title: "Strong Regulatory Alignment ",
      description:
        "<p>We are registered and active across UAE mainland, DIFC, and ADGM, supporting regulated entities with clarity and discipline.</p>",
    },
  ],
};

export default function HomeApart({ data = local_data }: HomeApart) {
  return (
    <section className="w-full py-8 xl:py-[90px] 2xl:py-[100px] bg-linear-to-t from-[#6a9fe0] to-[#053269] overflow-hidden relative z-0">
      <Image
        src="/images/home-apart-delmt.png"
        alt="home-apart-delmt"
        width={368}
        height={868}
        className="h-full absolute -z-1 inset-y-0 right-0 left-auto pointer-events-none"
      />
      <div className="container">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-white mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-between -mx-2 xl:-mx-4 2xl:-mx-5 relative z-0">
          <div className="w-[1px] h-full bg-white/30 absolute inset-y-0 left-1/2" />
          {data.items.map((item, index) => (
            <div
              key={"our-sights" + index}
              className="w-full sm:w-1/2 xl:w-[468px] 2xl:w-[520px] 3xl:w-[660px] p-2 xl:p-4 2xl:p-5"
            >
              <div className="w-full h-auto block">
                <div className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[21px] leading-normal font-semibold text-white mb-1.5 xl:mb-2.5 2xl:mb-3.5 flex gap-2">
                  <Image
                    src={item.media.path || "/images/placeholder-image.png"}
                    alt={item.media.alt || "Home Apart"}
                    width={34}
                    height={34}
                    className="w-6 xl:w-7 2xl:w-8 hover:scale-120 transition"
                  />
                  {parse(item.title ?? "title")}
                </div>
                <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:2xl:text-[21px] leading-normal font-normal text-[#d3dde8]">
                  {parse(item.description ?? "description")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
