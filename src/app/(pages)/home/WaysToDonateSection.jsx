"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { LuPackage, LuBanknote, LuGift } from "react-icons/lu";
import { PiTShirtLight } from "react-icons/pi";
import { LuMail } from "react-icons/lu";

export default function WaysToDonateSection() {
  const donationWays = [
    {
      icon: PiTShirtLight,
      title: "Donate Products",
      description: "Contribute essential items to those in need.",
    },
    {
      icon: LuMail,
      title: "Donate Money",
      description: "Fund specific amount for campaigns.",
    },
    {
      icon: LuGift,
      title: "Gift Donations",
      description: "Donate in someone's name as a meaningful gift.",
    },
  ];

  return (
    <Box bg="tertiary.50" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        {/* Section Header */}
        <Box textAlign="center" mb={{ base: 10, md: 12 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="gray.900"
            mb={3}
          >
            Ways to Donate
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Every contribution counts.
          </Text>
        </Box>

        {/* Donation Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          {donationWays.map((way, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              p={{ base: 8, md: 10 }}
              textAlign="center"
              boxShadow="sm"
              transition="all 0.3s"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-4px)",
              }}
            >
              <VStack gap={4}>
                {/* Icon */}
                <Box
                  color="tertiary.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    as={way.icon}
                    boxSize={{ base: 12, md: 14 }}
                    strokeWidth={1.5}
                  />
                </Box>

                {/* Title */}
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="600"
                  color="gray.900"
                >
                  {way.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="1.7"
                >
                  {way.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
