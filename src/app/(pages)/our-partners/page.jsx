import PageLayout from "@/components/layout/PageLayout";
import { Box } from "@chakra-ui/react";
import PartnersHeroSection from "./PartnersHeroSection";
import ImpactTimeLineSection from "./ImpactTimeLineSection";
import PartnersCommunitySection from "./PartnersCommunitySection";
import BePartOfStorySection from "./BePartOfStorySection";

export const metadata = {
  title: "Our Partners",
  description: "Every act of kindness fuels a new milestone",
};

export default function OurPartnersPage() {
  return (
    <PageLayout transparentHeader={false}>
      <Box pt="var(--header-height)">
        <PartnersHeroSection />
        <ImpactTimeLineSection />
        <PartnersCommunitySection />
        <BePartOfStorySection />
      </Box>
    </PageLayout>
  );
}
