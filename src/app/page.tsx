import MainSlider from "@/components/features/home/MainSlider/MainSlider";

import OurInsights from "@/components/features/home/HomeOurInsights";
import ProfessionalAffiliations from "@/components/features/home/HomeProfessionalAffiliations";
import HomeAbout from "@/components/features/home/HomeAbout";
import HomeApart from "@/components/features/home/HomeApart";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <HomeApart />
      <HomeAbout />
      <ProfessionalAffiliations />
      <OurInsights />
    </>
  );
}
