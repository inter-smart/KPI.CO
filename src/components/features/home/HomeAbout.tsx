import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

interface localData {
  title?: string;
  description?: string;
  button?: {
    label: string;
    link: string;
  };
}

interface HomeAboutProps {
  data?: localData;
}

const local_data: localData = {
  title: "About Us",
  description:
    "<p>KPI was established in Dubai in the early 1990s, shaped by hands-on experience working with businesses under real commercial and regulatory pressure. From the outset, our focus has been on delivering reliable audit, accounting, and advisory services grounded in discipline, accountability, and professional judgement.</p><p>Over time, our work expanded beyond traditional audit into risk, regulatory advisory, corporate services, and enterprise technology - reflecting how modern businesses actually operate. Today, KPI is a multi-disciplinary advisory firm serving clients across the UAE and the wider region, guided by independence, integrity, and long-term trust.</p><p>Whether you are establishing a presence, strengthening governance, or scaling operations, KPI provides the expertise, structure, and insight to drive measurable results.</p>",
  button: {
    label: "Get in Touch",
    link: "/",
  },
};

export default function HomeAbout({ data = local_data }: HomeAboutProps) {
  return (
    <section className="w-full py-8 xl:py-[90px] 2xl:py-[100px] bg-linear-to-t from-[#6a9fe0] to-[#053269] overflow-hidden relative z-0">
      <Image
        src="/images/home-about-delmt.png"
        alt="about-delemt"
        width={368}
        height={868}
        className="h-full absolute -z-1 inset-y-0 left-0 right-auto pointer-events-none"
      />
      <div className="container">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-white mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          {data.title}
        </h2>

        <div className={cn("typography [--text-color:#d2dbe7]! mb-6 xl:mb-8 2xl:mb-10")}>
          {parse(data.description ?? "<p>no content</p>")}
        </div>

        <Button
          className="text-[14px] xl:text-[17px] 2xl:text-[20px] leading-none font-medium text-black min-w-[190px] xl:min-w-[160px] 2xl:min-w-[190px] h-[42px] 2xl:h-[50px] bg-[#ffc916] hover:text-white"
          asChild
        >
          <Link href={data.button?.link ?? "/"}>{data.button?.label}</Link>
        </Button>
      </div>
    </section>
  );
}
