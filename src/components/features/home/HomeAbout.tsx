import { cn } from "@/lib/utils";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import type { AboutData } from "@/app/page";

type HomeAboutProps = {
  data: AboutData;
  className?: string;
};

export default function HomeAbout({ data, className }: HomeAboutProps) {
  return (
    <section
      className={cn(
        "w-full py-8 xl:py-[90px] 2xl:py-[100px] bg-linear-to-t from-[#6a9fe0] to-[#053269] overflow-hidden relative z-0",
        className,
      )}
    >
      <Image
        src="/images/home-about-delmt.png"
        alt="about-delemt"
        width={368}
        height={868}
        className="h-full absolute -z-1 inset-y-0 left-0 right-auto pointer-events-none"
      />
      
      <div className="container">
        <Heading
          as="h2"
          size="h2"
          className="text-white mb-4 xl:mb-6 2xl:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          {data.title}
        </Heading>

        <div
          className={cn(
            "typography [--text-color:#d2dbe7]! mb-6 xl:mb-8 2xl:mb-10",
          )}
        >
          {parse(data.description ?? "<p>no content</p>")}
        </div>

        <Button variant="yellow" size="lg" asChild>
          <Link href={data.button.link}>{data.button.label}</Link>
        </Button>
      </div>
    </section>
  );
}
