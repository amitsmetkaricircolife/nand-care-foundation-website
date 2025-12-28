"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Input,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { LuSearch, LuChevronDown } from "react-icons/lu";

// Campaign data - these images already have text overlays
const campaignsData = [
  {
    id: 1,
    image: "/images/hero/similar-campaigns1.png",
  },
  {
    id: 2,
    image: "/images/hero/similar-campaigns2.png",
  },
  {
    id: 3,
    image: "/images/hero/similar-campaigns3.png",
  },
  {
    id: 4,
    image: "/images/hero/similar-campaigns4.png",
  },
  {
    id: 5,
    image: "/images/hero/similar-campaigns5.png",
  },
  {
    id: 6,
    image: "/images/hero/similar-campaigns1.png",
  },
];

const filterOptions = [
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "urgent", label: "Most Urgent" },
  { value: "funded", label: "Most Funded" },
];

export default function FeaturedCampaignMainSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("trending");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCampaigns = campaignsData;

  const currentFilterLabel =
    filterOptions.find((opt) => opt.value === filterValue)?.label || "Trending";

  return (
    <Box bg="white">
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ base: 10, md: 12 }}>
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "40px", lg: "48px" }}
            fontWeight="700"
            color="gray.900"
            mb={3}
            lineHeight="1.2"
          >
            Featured Campaigns
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.600"
            fontWeight="400"
          >
            Complete transparency in every campaign.
          </Text>
        </Box>

        {/* Search and Filter */}
        <HStack
          gap={4}
          mb={{ base: 10, md: 12 }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="stretch"
        >
          {/* Search Input */}
          <Box position="relative" flex={1}>
            <Box
              position="absolute"
              left="16px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              pointerEvents="none"
            >
              <Box as={LuSearch} boxSize={5} color="gray.400" />
            </Box>
            <Input
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              h="56px"
              pl="48px"
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="12px"
              fontSize="15px"
              _placeholder={{ color: "gray.400" }}
              _hover={{ borderColor: "gray.400" }}
              _focus={{
                borderColor: "primary.500",
                boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
                outline: "none",
              }}
            />
          </Box>

          <Box position="relative" w={{ base: "100%", md: "200px" }}>
            <Box
              as="button"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              h="56px"
              px={4}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="12px"
              fontSize="15px"
              cursor="pointer"
              _hover={{ borderColor: "gray.400" }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Text color="gray.700">{currentFilterLabel}</Text>
              <Box as={LuChevronDown} boxSize={5} color="gray.500" />
            </Box>

            {/* Dropdown Menu */}
            {isFilterOpen && (
              <Box
                position="absolute"
                top="60px"
                left={0}
                right={0}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="12px"
                boxShadow="lg"
                zIndex={10}
                overflow="hidden"
              >
                {filterOptions.map((option) => (
                  <Box
                    key={option.value}
                    px={4}
                    py={3}
                    cursor="pointer"
                    fontSize="15px"
                    bg={filterValue === option.value ? "gray.50" : "white"}
                    _hover={{ bg: "gray.50" }}
                    onClick={() => {
                      setFilterValue(option.value);
                      setIsFilterOpen(false);
                    }}
                  >
                    {option.label}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </HStack>

        {/* Campaigns Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {filteredCampaigns.map((campaign, index) => (
            <Box
              key={`campaign-${index}`}
              position="relative"
              height={{ base: "280px", md: "320px", lg: "360px" }}
              borderRadius="20px"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.3s ease"
              boxShadow="0 2px 8px rgba(0,0,0,0.08)"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
              onClick={() =>
                (window.location.href = `/campaigns/${campaign.id}`)
              }
            >
              <Image
                src={campaign.image}
                alt={`Campaign ${index + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
