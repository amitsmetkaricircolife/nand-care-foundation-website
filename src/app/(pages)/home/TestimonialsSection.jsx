// components/home/TestimonialsSection.jsx
"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Donor",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5,
      comment:
        "I love how transparent Nand Care is. I can see exactly where my donations go...",
    },
    {
      name: "Rajesh Kumar",
      role: "Corporate Partner",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5,
      comment:
        "The platform is easy to use. I can set up monthly donations and get proper receipts...",
    },
    {
      name: "Anita Desai",
      role: "Volunteer",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 5,
      comment:
        "I was hesitant about online donations, but Nand Care verified campaigns...",
    },
  ];

  return (
    <Box bg="tertiary.50" py={{ base: 12, md: 16 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          mb={3}
        >
          What Our Donors Say
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign="center" mb={12}>
          Join thousands of satisfied donors making a difference
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} bg="white" p={6} borderRadius="lg" boxShadow="md">
              {/* Stars */}
              <HStack gap={1} mb={4}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Box
                    key={i}
                    as={LuStar}
                    color="primary.500"
                    fill="currentColor"
                    boxSize={5}
                  />
                ))}
              </HStack>

              {/* Comment */}
              <Text fontSize="sm" color="gray.700" mb={6} lineHeight="1.7">
                {testimonial.comment}
              </Text>

              {/* Author */}
              <HStack gap={3}>
                <Avatar
                  src={testimonial.avatar}
                  name={testimonial.name}
                  size="md"
                />
                <Box>
                  <Text fontSize="sm" fontWeight="600" color="gray.900">
                    {testimonial.name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {testimonial.role}
                  </Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
