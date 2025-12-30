"use client";
import React from "react";
import { Box, Container, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function BePartOfStorySection() {
  return (
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        <Box
          textAlign="center"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="16px"
          p={{ base: 8, md: 12 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="700"
            color="gray.900"
            mb={3}
          >
            Be part of the next
            <br />
            story ❤️
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            color="gray.600"
            maxW="500px"
            mx="auto"
            mb={8}
            lineHeight="1.7"
          >
            kindness. Join NandCare's community of
            <br />
            Every donation writes a new chapter of
            <br />
            changemakers.
          </Text>

          {/* Buttons */}
          <Flex
            gap={4}
            justify="center"
            flexDirection={{ base: "column", sm: "row" }}
            maxW="600px"
            mx="auto"
          >
            <Button
              flex={1}
              h="52px"
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
            <Button
              flex={1}
              h="52px"
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
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
