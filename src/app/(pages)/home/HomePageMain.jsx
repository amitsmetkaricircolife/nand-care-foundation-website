"use client";

// --Imports
import React from "react";

import Image from "next/image";
import { Box, Container, Heading, Button } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";

// --Component Detail--

const HomePageMain = () => {
  // --Constants--

  // --States--
  const [open, setOpen] = useState();
  // --Methods--

  // --API Calls--

  // --UseEffects--

  return (
    <>
      {" "}
      <PageLayout transparentHeader={true}>
        {/* Hero Section with Your Background Image */}
        <Box position="relative" minH="100vh" overflow="hidden">
          {/* Your Hero Image */}
          <Image
            src="/images/hero/home-hero.png"
            alt="Nand Care Foundation - Campaign Hero"
            fill
            style={{ objectFit: "cover" }}
            quality={90}
            priority
            sizes="100vw"
          />

          {/* Dark Overlay for Text Readability */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.500"
            zIndex={1}
          />

          {/* Hero Content */}
          <Container
            maxW="var(--content-max-width)"
            position="relative"
            zIndex={2}
            h="100vh"
            display="flex"
            alignItems="center"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <Box maxW="600px">
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color="white"
                mb={{ base: 6, md: 8 }}
                lineHeight="1.2"
              >
                Campaign Name
              </Heading>

              <Button
                bg="primary.500"
                color="white"
                size={{ base: "md", md: "lg" }}
                px={{ base: 8, md: 12 }}
                py={{ base: 6, md: 7 }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="600"
                borderRadius="md"
                _hover={{ bg: "primary.600" }}
                _active={{ bg: "primary.700" }}
                boxShadow="xl"
              >
                Donate Now
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Similar Campaigns Section */}
        <Box bg="gray.50" py={{ base: 12, md: 16, lg: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={3}
              color="gray.900"
            >
              Similar Campaigns
            </Heading>
            <Box
              fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
              mb={{ base: 8, md: 12 }}
            >
              Your support can make a difference
            </Box>

            {/* Add your campaign cards here */}
            <Box>{/* Campaign cards will go here */}</Box>
          </Container>
        </Box>
      </PageLayout>
    </>
  );
};

export default HomePageMain;
