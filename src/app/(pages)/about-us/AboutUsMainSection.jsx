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
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaDotCircleSolid } from "react-icons/lia";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

export default function AboutUsMainSection() {
  const coreValues = [
    {
      icon: FaRegHeart,
      title: "Compassion First",
      description:
        "Every action we take is rooted in genuine care for communities and their needs.",
      color: "red",
    },
    {
      icon: PiMedal,
      title: "Unwavering Integrity",
      description:
        "We maintain the highest standards of transparency and ethical practices.",
      color: "blue",
    },
    {
      icon: FaRegHeart,
      title: "Community Driven",
      description:
        "Local communities lead their campaigns; we provide the platform & support.",
      color: "green",
    },
    {
      icon: PiMedal,
      title: "Impact Focussed",
      description:
        "We measure success by the tangible, lasting change we create together.",
      color: "orange",
    },
    {
      icon: FaRegHeart,
      title: "Accountability & Trust",
      description:
        "Every rupee is tracked, every promise is kept, every outcome is documented.",
      color: "purple",
    },
    {
      icon: PiMedal,
      title: "Inclusive Growth",
      description:
        "We believe everyone deserves opportunity, regardless of background.",
      color: "teal",
    },
  ];

  return (
    <Box bg="white">
      {/* Hero Section with Optimized Image */}
      <MotionBox
        position="relative"
        h={{ base: "400px", md: "500px" }}
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Optimized Background Image with Next.js Image */}
        <Image
          src="/images/about-us/Background.jpg"
          alt="About NandCare Foundation"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Dark Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))"
          zIndex={1}
        />

        {/* Hero Content */}
        <Container
          maxW="var(--content-max-width)"
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={2}
          px={{ base: 6, md: 8 }}
        >
          <MotionBox
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            textAlign="center"
          >
            <Heading
              as="h1"
              fontSize={{ base: "40px", md: "56px", lg: "64px" }}
              fontWeight="700"
              color="white"
              lineHeight="1.2"
              mb={3}
            >
              About{" "}
              <Box as="span" color="beige.700">
                NandCare
              </Box>
            </Heading>
            <Text
              color="white"
              textAlign="center"
              maxW="800px"
              fontWeight="400"
            >
              Building bridges between compassionate hearts and communities in
              need.
            </Text>
          </MotionBox>
        </Container>
      </MotionBox>

      {/* Mission & Vision Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
          <MotionSimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 8, md: 12 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Our Mission */}
            <MotionBox
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="0 2px 12px rgba(0,0,0,0.08)"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
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
            </MotionBox>

            {/* Our Vision */}
            <MotionBox
              bg="white"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="0 2px 12px rgba(0,0,0,0.08)"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
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
            </MotionBox>
          </MotionSimpleGrid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box bg="white" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
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
                What started as a small initiative helping 50 families during
                the pandemic has grown into a movement connecting thousands of
                donors with hundreds of life-changing campaigns. Our platform
                combines cutting-edge technology with grassroots community
                knowledge to ensure transparency, efficiency, and real impact.
              </Text>
              <Text fontSize="16px" color="gray.600" lineHeight="1.8">
                Today, NandCare stands as a testament to what's possible when
                technology meets humanity—where every click, every donation, and
                every share creates ripples of positive change across
                communities in need.
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </MotionBox>

          <MotionSimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            gap={{ base: 6, md: 8 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {coreValues.map((value, index) => (
              <MotionBox
                key={index}
                bg="white"
                p={8}
                borderRadius="20px"
                boxShadow="0 2px 8px rgba(0,0,0,0.06)"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <Box
                  w="56px"
                  h="56px"
                  borderRadius="14px"
                  bg={`${value.color}.50`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={5}
                >
                  <Icon
                    as={value.icon}
                    boxSize={7}
                    color={`${value.color}.500`}
                  />
                </Box>
                <Heading
                  as="h3"
                  fontSize="20px"
                  fontWeight="700"
                  color="gray.900"
                  mb={3}
                >
                  {value.title}
                </Heading>
                <Text fontSize="15px" color="gray.600" lineHeight="1.7">
                  {value.description}
                </Text>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
