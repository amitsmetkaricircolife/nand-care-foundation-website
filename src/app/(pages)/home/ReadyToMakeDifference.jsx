"use client";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ReadyToMakeDifference() {
  return (
    <Box bg="secondary.500" py={{ base: 16, md: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <Box textAlign="center">
          {/* Heading */}
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="white"
            mb={4}
          >
            Ready to Make a Difference?
          </Heading>

          {/* Subtitle */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            mb={8}
            maxW="800px"
            mx="auto"
          >
            Join our community of compassionate donors and be part of something
            bigger.
          </Text>

          {/* CTA Button */}
          <Button
            as={NextLink}
            href="/campaigns"
            bg="white"
            color="primary.500"
            size="lg"
            px={{ base: 8, md: 12 }}
            py={{ base: 6, md: 7 }}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="600"
            borderRadius="lg"
            _hover={{
              bg: "gray.50",
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            _active={{
              bg: "gray.100",
              transform: "translateY(0)",
            }}
            transition="all 0.3s"
          >
            Start Your Journey
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
