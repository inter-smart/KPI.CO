import InnerHero from "@/components/common/InnerHero";
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

export default function page() {
  return (
    <div>page</div>
  )
}
