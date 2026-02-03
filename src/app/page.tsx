import MainSlider from "@/components/features/home/MainSlider/MainSlider";

import OurInsights from "@/components/features/home/HomeOurInsights";
import ProfessionalAffiliations from "@/components/features/home/HomeProfessionalAffiliations";
import HomeAbout from "@/components/features/home/HomeAbout";
import HomeApart from "@/components/features/home/HomeApart";
import PartnerSection from "@/components/features/home/PartnerSection";
import ServiceSection from "@/components/features/home/ServiceSection";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <PartnerSection />
      <ServiceSection />
      <HomeApart />
      <HomeAbout />
      <ProfessionalAffiliations />
      <OurInsights />
    </>
  );
}
