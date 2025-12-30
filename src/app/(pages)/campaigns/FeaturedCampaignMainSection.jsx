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
} from "@chakra-ui/react";
import Image from "next/image";
import { LuSearch, LuChevronDown } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

// Campaign data
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
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        {/* Header with Animation */}
        <MotionBox
          textAlign="center"
          mb={{ base: 10, md: 12 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </MotionBox>

        {/* Search and Filter with Animation */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HStack
            gap={4}
            mb={{ base: 10, md: 12 }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ base: "none", md: "space-between" }}
            alignItems="stretch"
          >
            {/* Search Input - Reduced Width */}
            <Box position="relative" w={{ base: "100%", md: "400px" }}>
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

            {/* Filter Dropdown */}
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
                transition="all 0.2s"
              >
                <Text color="gray.700">{currentFilterLabel}</Text>
                <Box
                  as={LuChevronDown}
                  boxSize={5}
                  color="gray.500"
                  transform={isFilterOpen ? "rotate(180deg)" : "rotate(0deg)"}
                  transition="transform 0.2s"
                />
              </Box>

              {/* Dropdown Menu with Animation */}
              <AnimatePresence>
                {isFilterOpen && (
                  <MotionBox
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
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
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
                        transition="background 0.2s"
                      >
                        {option.label}
                      </Box>
                    ))}
                  </MotionBox>
                )}
              </AnimatePresence>
            </Box>
          </HStack>
        </MotionBox>

        {/* Campaigns Grid with Stagger Animation */}
        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 6, md: 8 }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredCampaigns.map((campaign, index) => (
            <MotionBox
              key={`campaign-${campaign.id}-${index}`}
              position="relative"
              height={{ base: "280px", md: "320px", lg: "360px" }}
              borderRadius="20px"
              overflow="hidden"
              cursor="pointer"
              boxShadow="0 2px 8px rgba(0,0,0,0.08)"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              }}
              onClick={() =>
                (window.location.href = `/campaigns/${campaign.id}`)
              }
            >
              {/* Optimized Next.js Image with Lazy Loading */}
              <Image
                src={campaign.image}
                alt={`Campaign ${campaign.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                loading={index < 2 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                style={{
                  objectFit: "cover",
                }}
              />
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}
