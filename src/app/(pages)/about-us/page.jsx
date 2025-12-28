import { Box } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import AboutUsMainSection from "./AboutUsMainSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Nand Care Foundation and our mission to make a difference",
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
