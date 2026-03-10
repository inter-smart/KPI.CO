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
    <section id="about" className={cn("w-full py-8 xl:py-[90px] 2xl:py-[100px] bg-linear-to-b from-[#053269] to-[#6A9FE0] overflow-hidden relative z-0", className)}>
      <Image
        src="/images/aboutLine.png"
        alt="about-delemt"
        width={368}
        height={868}
        className="h-full absolute -z-1 inset-y-0 left-0 right-auto pointer-events-none max-w-full sm:max-w-[35%] w-full"
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
            "typography [--text-color:#d2dbe7]! mb-6 xl:[&_p]:text-[18px] 3xl:[&_p]:text-[24px] [&_p]:leading-[1.7] [&_p]:font-normal xl:mb-8 2xl:mb-10",
          )}
        >
          {parse(data.description ?? "<p>no content</p>")}
        </div>

        <Button
          className="text-[14px] xl:text-[19.2px] 2xl:text-[20px] leading-none font-medium max-sm:rounded-[6px] !text-[#212121] min-w-[120px] xl:min-w-[178px] 2xl:min-w-[190px] h-[30px] md:h-[42px] xl:h-[48px] bg-[#ffc916]"
          asChild
        >
          <Link href={data.button.link}>{data.button.label}</Link>
        </Button>
      </div>
    </section>
  );
}
