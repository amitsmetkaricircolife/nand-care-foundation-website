"use client";
import React from "react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { LuHeart } from "react-icons/lu";

export default function PartnersHeroSection() {
  return (
    <Box
      background="linear-gradient(90deg, #FF6666 0%, #FFE6E6 100%)"
      py={{ base: 16, md: 20 }}
    >
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        {/* Donors Count Badge */}
        <Flex justify="center" mb={6}>
          <Flex
            align="center"
            gap={2}
            bg="white"
            px={5}
            py={2}
            borderRadius="full"
            boxShadow="sm"
          >
            <Box as={LuHeart} color="red.500" boxSize={5} />
            <Text fontSize="15px" fontWeight="600" color="gray.800">
              3,500+ donors and counting
            </Text>
          </Flex>
        </Flex>

        {/* Main Heading */}
        <Heading
          as="h1"
          fontSize={{ base: "32px", md: "44px", lg: "52px" }}
          fontWeight="700"
          color="gray.900"
          textAlign="center"
          mb={4}
          lineHeight="1.2"
        >
          Our Partners in Change 🤝
        </Heading>

        {/* Subheading */}
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          color="gray.700"
          textAlign="center"
          maxW="600px"
          mx="auto"
          lineHeight="1.7"
        >
          Every act of kindness fuels a new milestone.
          <br />
          Here's how our partners have shaped
          <br />
          NandCare's journey of hope.
        </Text>
      </Container>
    </Box>
  );
}
