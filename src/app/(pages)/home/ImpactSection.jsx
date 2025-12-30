"use client";
import React, { useRef } from "react";
import { Box, Heading, Text, Container, IconButton } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load CampaignCard
const CampaignCard = dynamic(
  () => import("@/components/campaigns/CampaignCard"),
  {
    loading: () => (
      <Box
        w="320px"
        h="400px"
        borderRadius="20px"
        bg="gray.200"
        flexShrink={0}
      />
    ),
    ssr: false,
  }
);

const MotionBox = motion(Box);

const ImpactSection = () => {
  const scrollRef = useRef(null);

  const impactImages = [
    "/images/hero/similar-campaigns1.png",
    "/images/hero/similar-campaigns2.png",
    "/images/hero/similar-campaigns3.png",
    "/images/hero/similar-campaigns4.png",
    "/images/hero/similar-campaigns5.png",
  ];

  const infiniteImages = [...impactImages, ...impactImages, ...impactImages];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box bg="tertiary.100" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        {/* Section Header with Animation */}
        <MotionBox
          textAlign="center"
          mb={{ base: 8, md: 12 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="gray.900"
            mb={3}
          >
            Impact We've Created
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            See the impact we've made together.
          </Text>
        </MotionBox>

        {/* Carousel */}
        <Box position="relative">
          {/* Previous Button */}
          <Box
            position="absolute"
            top="50%"
            left={{ base: -2, md: -6 }}
            transform="translateY(-50%)"
            zIndex={10}
          >
            <IconButton
              aria-label="Previous"
              onClick={() => scroll("left")}
              bg="white"
              color="gray.800"
              size="lg"
              borderRadius="full"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                bg: "gray.50",
                transform: "scale(1.1)",
                borderColor: "gray.300",
              }}
              _active={{
                bg: "gray.100",
                transform: "scale(0.95)",
              }}
              transition="all 0.2s"
            >
              <LuChevronLeft size={24} />
            </IconButton>
          </Box>

          {/* Next Button */}
          <Box
            position="absolute"
            top="50%"
            right={{ base: -2, md: -6 }}
            transform="translateY(-50%)"
            zIndex={10}
          >
            <IconButton
              aria-label="Next"
              onClick={() => scroll("right")}
              bg="white"
              color="gray.800"
              size="lg"
              borderRadius="full"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                bg: "gray.50",
                transform: "scale(1.1)",
                borderColor: "gray.300",
              }}
              _active={{
                bg: "gray.100",
                transform: "scale(0.95)",
              }}
              transition="all 0.2s"
            >
              <LuChevronRight size={24} />
            </IconButton>
          </Box>

          {/* Carousel Container */}
          <Box
            ref={scrollRef}
            overflow="auto"
            overflowY="hidden"
            css={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box display="flex" gap={6} py={2} px={1}>
              {infiniteImages.map((image, index) => (
                <Box key={`impact-${index}`} css={{ scrollSnapAlign: "start" }}>
                  <CampaignCard
                    imageSrc={image}
                    alt={`Impact Campaign ${(index % impactImages.length) + 1}`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImpactSection;
