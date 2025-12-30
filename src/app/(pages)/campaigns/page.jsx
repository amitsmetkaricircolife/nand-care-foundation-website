import PageLayout from "@/components/layout/PageLayout";
import { Box, Container } from "@chakra-ui/react";
import FeaturedCampaignMainSection from "./FeaturedCampaignMainSection";

export const metadata = {
  title: "Campaigns",
  description: "Welcome to Nand Care Foundation - Making a positive impact",
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
