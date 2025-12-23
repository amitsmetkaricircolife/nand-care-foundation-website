// components/home/CTASection.jsx
"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function CTASection() {
  return (
    <Box bg="secondary.500" py={{ base: 12, md: 16 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <Box textAlign="center" maxW="600px" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="white"
            mb={4}
          >
            Ready to Make a Difference?
          </Heading>
          <Text fontSize="md" color="whiteAlpha.900" mb={8}>
            Join our community of compassionate donors and be part of something
            bigger.
          </Text>

          <HStack gap={3} maxW="500px" mx="auto">
            <Input
              placeholder="Enter your email"
              bg="white"
              size="lg"
              borderRadius="md"
            />
            <Button
              bg="primary.500"
              color="white"
              size="lg"
              px={8}
              flexShrink={0}
              _hover={{ bg: "primary.600" }}
            >
              Get Started
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
