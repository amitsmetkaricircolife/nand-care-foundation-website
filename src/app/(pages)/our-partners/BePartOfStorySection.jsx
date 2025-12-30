"use client";
import React from "react";
import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function BePartOfStorySection() {
  return (
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        <MotionBox
          textAlign="center"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="16px"
          p={{ base: 8, md: 12 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="700"
            color="gray.900"
            mb={3}
          >
            Be part of the next story ❤️
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            color="gray.600"
            maxW="500px"
            mx="auto"
            mb={8}
            lineHeight="1.7"
          >
            Every donation writes a new chapter of kindness. Join NandCare's
            community of changemakers.
          </Text>

          {/* Buttons */}
          <Flex
            gap={4}
            justify="center"
            flexDirection={{ base: "column", sm: "row" }}
            maxW="600px"
            mx="auto"
          >
            <MotionBox
              flex={1}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size={"xl"}
                w="100%"
                bg="red.500"
                color="white"
                fontSize="16px"
                fontWeight="600"
                borderRadius="8px"
                _hover={{ bg: "red.600" }}
                onClick={() => (window.location.href = "/campaigns")}
              >
                Donate Now
              </Button>
            </MotionBox>
            <MotionBox
              flex={1}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                w="100%"
                size={"xl"}
                bg="white"
                color="red.500"
                fontSize="16px"
                fontWeight="600"
                border="2px solid"
                borderColor="red.500"
                borderRadius="8px"
                _hover={{ bg: "red.50" }}
                onClick={() => (window.location.href = "/campaigns")}
              >
                Explore Other Campaigns
              </Button>
            </MotionBox>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
}
