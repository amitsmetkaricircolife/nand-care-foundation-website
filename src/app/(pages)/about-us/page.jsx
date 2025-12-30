import { Box } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import AboutUsMainSection from "./AboutUsMainSection";

export const metadata = {
  title: "About Nand Care Foundation | Our Mission, Vision & Impact Story",
  description:
    "Discover the story behind Nand Care Foundation. Learn about our mission, our dedicated team, and the core values that guide our work in sustainable community development and humanitarian aid since 2020.",
};

export default function AboutUsPage() {
  return (
    <PageLayout transparentHeader={false}>
      <Box pt="var(--header-height)">
        <AboutUsMainSection />
      </Box>
    </PageLayout>
  );
}
