"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { LiaDotCircleSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";

export default function AboutUsMainSection() {
  return (
    <Box bg="white">
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "400px", md: "500px" }}
        bgImage="url('/images/about-us/Background.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
        }}
      >
        <Container
          maxW="var(--content-max-width)"
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={1}
          px={{ base: 6, md: 8 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "40px", md: "56px", lg: "64px" }}
            fontWeight="700"
            color="white"
            textAlign="center"
            lineHeight="1.2"
            mb={3}
          >
            About{" "}
            <Box as="span" color="beige.700">
              NandCare
            </Box>
          </Heading>
          <Text color="white" textAlign="center" maxW="800px" fontWeight="400">
            Building bridges between compassionate hearts and communities in
            need.
          </Text>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }}>
            {/* Our Mission */}
            <Box
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="0 2px 12px rgba(0,0,0,0.08)"
            >
              <Box
                w="64px"
                h="64px"
                borderRadius="16px"
                bg="secondary.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Icon
                  as={LiaDotCircleSolid}
                  boxSize={8}
                  color="secondary.500"
                />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "28px" }}
                fontWeight="700"
                color="gray.900"
                mb={4}
              >
                Our Mission
              </Heading>
              <Text fontSize="16px" color="gray.600" lineHeight="1.7">
                To create a transparent, accessible platform that connects
                generous donors with verified causes, ensuring every
                contribution makes a measurable impact in transforming lives and
                building sustainable communities.
              </Text>
            </Box>

            {/* Our Vision */}
            <Box
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="0 2px 12px rgba(0,0,0,0.08)"
            >
              <Box
                w="64px"
                h="64px"
                borderRadius="16px"
                bg="primary.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
              >
                <Icon as={TbWorld} boxSize={8} color="primary.500" />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "28px" }}
                fontWeight="700"
                color="gray.900"
                mb={4}
              >
                Our Vision
              </Heading>
              <Text fontSize="16px" color="gray.600" lineHeight="1.7">
                A world where every individual, regardless of circumstance has
                access to basic necessities, quality education, healthcare, and
                opportunities to thrive—powered by a global community of
                compassionate changemakers.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box bg="white" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 8 }}>
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "40px" }}
            fontWeight="700"
            color="gray.900"
            textAlign="center"
            mb={8}
          >
            Our Story
          </Heading>
          <VStack spacing={6} align="stretch">
            <Text fontSize="16px" color="gray.600" lineHeight="1.8">
              NandCare was born from a simple belief: that genuine compassion,
              when channeled effectively, can create extraordinary change.
              Founded in 2020 by a group of social entrepreneurs and community
              leaders, we saw the gap between people wanting to help and
              verified causes needing support.
            </Text>
            <Text fontSize="16px" color="gray.600" lineHeight="1.8">
              What started as a small initiative helping 50 families during the
              pandemic has grown into a movement connecting thousands of donors
              with hundreds of life-changing campaigns. Our platform combines
              cutting-edge technology with grassroots community knowledge to
              ensure transparency, efficiency, and real impact.
            </Text>
            <Text fontSize="16px" color="gray.600" lineHeight="1.8">
              Today, NandCare stands as a testament to what's possible when
              technology meets humanity—where every click, every donation, and
              every share creates ripples of positive change across communities
              in need.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "40px" }}
            fontWeight="700"
            color="gray.900"
            textAlign="center"
            mb={12}
          >
            Our Core Values
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            gap={{ base: 6, md: 8 }}
          >
            {/* Compassion First */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="red.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={FaRegHeart} boxSize={7} color="red.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Compassion First
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                Every action we take is rooted in genuine care for communities
                and their needs.
              </Text>
            </Box>

            {/* Unwavering Integrity */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="blue.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={PiMedal} boxSize={7} color="blue.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Unwavering Integrity
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                We maintain the highest standards of transparency and ethical
                practices.
              </Text>
            </Box>

            {/* Community Driven */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="green.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={FaRegHeart} boxSize={7} color="green.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Community Driven
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                Local communities lead their campaigns; we provide the platform
                & support.
              </Text>
            </Box>

            {/* Impact Focussed */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="orange.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={PiMedal} boxSize={7} color="orange.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Impact Focussed
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                We measure success by the tangible, lasting change we create
                together.
              </Text>
            </Box>

            {/* Accountability & Trust */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="purple.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={FaRegHeart} boxSize={7} color="purple.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Accountability & Trust
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                Every rupee is tracked, every promise is kept, every outcome is
                documented.
              </Text>
            </Box>

            {/* Inclusive Growth */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
            >
              <Box
                w="56px"
                h="56px"
                borderRadius="14px"
                bg="teal.50"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Icon as={PiMedal} boxSize={7} color="teal.500" />
              </Box>
              <Heading
                as="h3"
                fontSize="20px"
                fontWeight="700"
                color="gray.900"
                mb={3}
              >
                Inclusive Growth
              </Heading>
              <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                We believe everyone deserves opportunity, regardless of
                background.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
