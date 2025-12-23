import { Box, Container, Heading } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = {
  title: "Campaigns",
  description: "Browse our active campaigns",
};

export default function CampaignsPage() {
  return (
    <PageLayout transparentHeader={false}>
      <Box pt="var(--header-height)">
        <Container maxW="var(--content-max-width)" py={20}>
          <Heading as="h1" size="3xl" mb={6}>
            Campaigns
          </Heading>
          {/* Add your content here */}
        </Container>
      </Box>
    </PageLayout>
  );
}
