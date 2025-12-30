"use client";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function ReadyToMakeDifference() {
  return (
    <Box bg="secondary.500" py={{ base: 16, md: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
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
          <MotionButton
            as={NextLink}
            href="/campaigns"
            bg="white"
            color="primary.500"
            size="lg"
            px={{ base: 8, md: 12 }}
            py={{ base: 6, md: 7 }}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="600"
            borderRadius="12px"
            boxShadow="0 4px 20px rgba(0,0,0,0.15)"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            _hover={{
              bg: "gray.50",
            }}
          >
            Start Your Journey
          </MotionButton>
        </MotionBox>
      </Container>
    </Box>
  );
}
