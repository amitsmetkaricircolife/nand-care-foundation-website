import PageLayout from "@/components/layout/PageLayout";
import { Box, Container } from "@chakra-ui/react";
import FeaturedCampaignMainSection from "./FeaturedCampaignMainSection";

export const metadata = {
  title: "Active Donation Campaigns | Support Clean Water & Education",
  description:
    "Explore our urgent donation campaigns. See exactly how your gift helps—from building wells to funding schools. Real-time updates, transparent goals, and direct impact stories. Fund a campaign now.",
};

export default function CampaignsPage() {
  return (
    <>
      <PageLayout transparentHeader={false}>
        <Box pt="var(--header-height)">
          <Container maxW="var(--content-max-width)" py={20}>
            <FeaturedCampaignMainSection />
          </Container>
        </Box>
      </PageLayout>
    </>
  );
}
