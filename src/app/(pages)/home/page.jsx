import FeaturedCampaignsSection from "./FeaturedCampaignsSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ImpactSection from "./ImpactSection";
import ImpactStatsSection from "./ImpactStatsSection";
import ReadyToMakeDifference from "./ReadyToMakeDifference";
import StoriesSection from "./StoriesSection";
import UrgentCausesSection from "./UrgentCausesSection";
import WaysToDonateSection from "./WaysToDonateSection";
import WhatOurDonorsSay from "./WhatOurDonorsSay";
import WhyChooseSection from "./WhyChooseSection";

export const metadata = {
  title: "Nand Care Foundation | Making a positive impact",
  description:
    "Join Nand Care Foundation in creating lasting change. Your secure online donation funds education, healthcare, and crisis relief for communities in need. Every contribution makes a difference. Donate today.",
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
      <WaysToDonateSection />
      <WhatOurDonorsSay />
      <StoriesSection />
      <ReadyToMakeDifference />
    </>
  );
}
