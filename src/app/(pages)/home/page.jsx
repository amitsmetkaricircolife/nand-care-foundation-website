import FeaturedCampaignsSection from "./FeaturedCampaignsSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ImpactSection from "./ImpactSection";
import ImpactStatsSection from "./ImpactStatsSection";
import UrgentCausesSection from "./UrgentCausesSection";
import WhyChooseSection from "./WhyChooseSection";

export const metadata = {
  title: "Home",
  description: "Welcome to Nand Care Foundation - Making a positive impact",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <UrgentCausesSection />
      <FeaturedCampaignsSection />
      <WhyChooseSection />
      <ImpactStatsSection />
      <HowItWorksSection />
    </>
  );
}
