"use client";
import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuArrowRight } from "react-icons/lu";
import NextLink from "next/link";
import CampaignCard from "@/components/campaigns/CampaignCard";

const FeaturedCampaignsSection = () => {
  const scrollRef = useRef(null);

  // Featured campaigns images
  const featuredImages = [
    "/images/hero/similar-campaigns1.png",
    "/images/hero/similar-campaigns2.png",
    "/images/hero/similar-campaigns3.png",
    "/images/hero/similar-campaigns4.png",
    "/images/hero/similar-campaigns5.png",
  ];

  // Triple images for infinite scroll effect
  const infiniteImages = [
    ...featuredImages,
    ...featuredImages,
    ...featuredImages,
  ];

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
    <Box bg="secondary.50" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        {/* Section Header */}
        <Box textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="gray.900"
            mb={3}
          >
            Featured Campaigns
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Top campaigns our community supports
          </Text>
        </Box>

        {/* Carousel */}
        <Box position="relative" mb={8}>
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
                <Box
                  key={`featured-${index}`}
                  css={{ scrollSnapAlign: "start" }}
                >
                  <CampaignCard
                    imageSrc={image}
                    alt={`Featured Campaign ${(index % featuredImages.length) + 1}`}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* View All Link */}
        <Box textAlign="center">
          <Link
            as={NextLink}
            href="/campaigns"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="primary.500"
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="600"
            _hover={{
              color: "primary.600",
              textDecoration: "none",
            }}
            transition="all 0.2s"
          >
            View All Campaigns
            <Box as={LuArrowRight} boxSize={5} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedCampaignsSection;
