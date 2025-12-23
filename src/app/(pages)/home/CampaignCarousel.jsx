"use client";
import { Box, IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import CampaignCard from "@/components/campaigns/CampaignCard";

export default function CampaignCarousel({ images }) {
  const scrollRef = useRef(null);

  // Triple images for infinite scroll effect
  const infiniteImages = [...images, ...images, ...images];

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
    <Box position="relative">
      {/* Previous Button - Semi-Transparent */}
      <Box
        position="absolute"
        top="50%"
        left={{ base: 2, md: 4 }}
        transform="translateY(-50%)"
        zIndex={10}
      >
        <IconButton
          aria-label="Previous"
          onClick={() => scroll("left")}
          bg="whiteAlpha.300"
          color="white"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.400"
          _hover={{
            bg: "whiteAlpha.500",
            transform: "scale(1.1)",
            borderColor: "whiteAlpha.600",
          }}
          _active={{
            bg: "whiteAlpha.600",
            transform: "scale(0.95)",
          }}
          transition="all 0.2s"
        >
          <LuChevronLeft size={24} />
        </IconButton>
      </Box>

      {/* Next Button - Semi-Transparent */}
      <Box
        position="absolute"
        top="50%"
        right={{ base: 2, md: 4 }}
        transform="translateY(-50%)"
        zIndex={10}
      >
        <IconButton
          aria-label="Next"
          onClick={() => scroll("right")}
          bg="whiteAlpha.300"
          color="white"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.400"
          _hover={{
            bg: "whiteAlpha.500",
            transform: "scale(1.1)",
            borderColor: "whiteAlpha.600",
          }}
          _active={{
            bg: "whiteAlpha.600",
            transform: "scale(0.95)",
          }}
          transition="all 0.2s"
        >
          <LuChevronRight size={24} />
        </IconButton>
      </Box>

      {/* Carousel Container - Manual Scroll */}
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
            <Box key={`campaign-${index}`} css={{ scrollSnapAlign: "start" }}>
              <CampaignCard
                imageSrc={image}
                alt={`Campaign ${(index % images.length) + 1}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
