"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// Custom Avatar Component
const Avatar = ({ src, name, size = "48px" }) => {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);

  return (
    <Box
      position="relative"
      w={size}
      h={size}
      borderRadius="full"
      overflow="hidden"
      flexShrink={0}
      bg="primary.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {!imageError ? (
        <Image
          src={src}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          onError={() => setImageError(true)}
        />
      ) : (
        <Text fontSize="lg" fontWeight="600" color="white" userSelect="none">
          {initials}
        </Text>
      )}
    </Box>
  );
};

export default function WhatOurDonorsSay() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Donor",
      avatar: "/images/testimonials/priya-sharma.jpg",
      rating: 5,
      comment:
        '"I love how transparent Nand Care is. I can see exactly how my donations help. It feels good to make a real difference in the world!"',
    },
    {
      name: "Rajesh Kumar",
      role: "Monthly Supporter",
      avatar: "/images/testimonials/rajesh-kumar.jpg",
      rating: 5,
      comment:
        '"The platform is so easy to use. I set up monthly donations and get regular updates about the impact. Highly recommended!"',
    },
    {
      name: "Anita Desai",
      role: "First-time Donor",
      avatar: "/images/testimonials/anita-desai.jpg",
      rating: 5,
      comment:
        '"I was hesitant about online donations, but Nand Care\'s verified campaigns and secure process gave me confidence to contribute."',
    },
  ];

  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
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
            What Our Donors Say
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Join thousands of satisfied donors making a difference
          </Text>
        </Box>

        {/* Testimonial Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              p={{ base: 6, md: 7 }}
              transition="all 0.3s"
              _hover={{
                boxShadow: "lg",
                borderColor: "gray.300",
                transform: "translateY(-4px)",
              }}
            >
              <VStack align="stretch" gap={5}>
                {/* Stars */}
                <HStack gap={1}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Box
                      key={i}
                      as={LuStar}
                      color="orange.400"
                      fill="orange.400"
                      boxSize={5}
                    />
                  ))}
                </HStack>

                {/* Comment */}
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.700"
                  lineHeight="1.7"
                  fontStyle="italic"
                >
                  {testimonial.comment}
                </Text>

                {/* Author Info */}
                <HStack gap={3} pt={2}>
                  <Avatar
                    src={testimonial.avatar}
                    name={testimonial.name}
                    size="48px"
                  />

                  <Box>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="600"
                      color="gray.900"
                    >
                      {testimonial.name}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">
                      {testimonial.role}
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
