"use client";
import Image from "next/image";
import { Box, Heading, Button } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import CampaignCarousel from "./CampaignCarousel";

export default function HeroSection() {
  const campaignImages = [
    "/images/hero/similar-campaigns1.png",
    "/images/hero/similar-campaigns2.png",
    "/images/hero/similar-campaigns3.png",
    "/images/hero/similar-campaigns4.png",
    "/images/hero/similar-campaigns5.png",
  ];

  return (
    <PageLayout transparentHeader={true}>
      {/* Hero Banner - Fixed Height */}
      <Box
        position="relative"
        h={{ base: "400px", sm: "500px", md: "100vh" }}
        overflow="hidden"
      >
        {/* Background Image */}
        <Image
          src="/images/hero/home-hero.png"
          alt="Campaign Hero"
          fill
          style={{
            objectFit: "fit",
          }}
          quality={90}
          priority
          sizes="100vw"
        />

        {/* Gradient Overlay */}

        {/* Content */}
        <Box
          position="relative"
          zIndex={2}
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "center", md: "space-between" }}
        >
          {/* Hero Content */}
          <Box
            px={{ base: 6, md: 8, lg: 12 }}
            pt={{ base: 0, md: "140px" }}
            flex={{ base: "0", md: "1" }}
            display="flex"
            alignItems="center"
            maxW={{ base: "100%", md: "var(--content-max-width)" }}
            mx={{ base: 0, md: "auto" }}
            w="100%"
          >
            <Box maxW={{ base: "220px", md: "600px" }}>
              <Heading
                as="h1"
                fontSize={{ base: "xl", sm: "2xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color={{ base: "gray.900", md: "black" }}
                mb={{ base: 4, md: 8 }}
                lineHeight="1.2"
              >
                Campaign Name
              </Heading>

              <Button
                bg="primary.600"
                color="white"
                size={{ base: "md", md: "lg" }}
                px={{ base: 6, md: 12 }}
                py={{ base: 5, md: 7 }}
                fontSize={{ base: "sm", md: "lg" }}
                fontWeight="600"
                borderRadius="md"
                _hover={{ bg: "primary.600" }}
                _active={{ bg: "primary.700" }}
                boxShadow="xl"
              >
                Donate Now
              </Button>
            </Box>
          </Box>

          {/* Similar Campaigns - Desktop Only */}
          <Box pb={{ md: 12 }} w="100%" display={{ base: "none", md: "block" }}>
            <Box
              maxW="var(--content-max-width)"
              px={{ md: 8, lg: 12 }}
              mb={4}
              mx="auto"
            >
              <Heading
                as="h2"
                fontSize={{ md: "2xl", lg: "3xl" }}
                color="black"
                fontWeight="600"
              >
                Similar Campaigns
              </Heading>
            </Box>

            <Box
              maxW="var(--content-max-width)"
              px={{ md: 8, lg: 12 }}
              mx="auto"
            >
              <CampaignCarousel images={campaignImages} />
            </Box>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}
