import PageLayout from "@/components/layout/PageLayout";
import { Box } from "@chakra-ui/react";
import PartnersHeroSection from "./PartnersHeroSection";
import ImpactTimeLineSection from "./ImpactTimeLineSection";
import PartnersCommunitySection from "./PartnersCommunitySection";
import BePartOfStorySection from "./BePartOfStorySection";

export const metadata = {
  title: "Our Trusted Partners | Nand Care Foundation Collaborations",
  description:
    "See the corporations, foundations, and organizations amplifying our impact. Learn about our strategic partnerships that ensure accountability and maximize the reach of every donation. Partner with us.",
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
