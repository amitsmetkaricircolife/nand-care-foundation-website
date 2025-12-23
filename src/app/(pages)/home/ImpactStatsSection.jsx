// components/home/ImpactStatsSection.jsx
"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function ImpactStatsSection() {
  const stats = [
    { value: "₹2Cr+", label: "Funds Raised" },
    { value: "5,000+", label: "Active Donors" },
    { value: "300+", label: "Campaigns Supported" },
    { value: "50,000+", label: "Lives Impacted" },
  ];

  return (
    <Box bg="secondary.600" py={{ base: 12, md: 16 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          color="white"
          mb={12}
        >
          Our Impact in Numbers
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 6, md: 8 }}>
          {stats.map((stat, index) => (
            <VStack key={index} textAlign="center" gap={0}>
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="white"
              >
                {stat.value}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.800">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
