"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { LuMail, LuHeart, LuTrendingUp } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

export default function HowItWorksSection() {
  const steps = [
    {
      icon: LuHeart,
      title: "Discover a Cause",
      description:
        "Browse verified campaigns that resonate with your heart and values.",
    },
    {
      icon: LuMail,
      title: "Make a Donation",
      description:
        "Contribute securely in seconds with multiple payment options.",
    },
    {
      icon: LuTrendingUp,
      title: "See real Impact",
      description:
        "Receive updates and witness the transformation your support creates.",
    },
  ];

  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
            mb={2}
            fontWeight="700"
            color="gray.900"
          >
            How It Works
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign="center"
            mb={{ base: 10, md: 12 }}
          >
            Three easy steps to change lives.
          </Text>
        </MotionBox>

        <Box position="relative">
          {/* Horizontal gradient line behind icons (desktop only) */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="50px"
            left="0"
            right="0"
            height="2px"
            mx={{ base: 4, md: 12 }}
            bgGradient="linear(to-r, secondary.200, primary.200, secondary.200)"
            opacity={0.4}
          />

          <MotionSimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 10, md: 12 }}
            alignItems="flex-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {steps.map((step, index) => (
              <MotionBox
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <VStack
                  textAlign="center"
                  gap={4}
                  align="center"
                  position="relative"
                >
                  {/* Icon circle */}
                  <Box
                    position="relative"
                    zIndex={1}
                    w={{ base: "72px", md: "88px" }}
                    h={{ base: "72px", md: "88px" }}
                    borderRadius="full"
                    bg="secondary.500"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 8px 24px rgba(0,0,0,0.12)"
                  >
                    <Icon
                      as={step.icon}
                      boxSize={{ base: 8, md: 9 }}
                      color="white"
                    />
                  </Box>

                  {/* Title */}
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="600"
                    color="gray.900"
                    mt={1}
                  >
                    {step.title}
                  </Heading>

                  {/* Description */}
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.600"
                    maxW={{ base: "280px", md: "320px" }}
                    lineHeight="1.7"
                  >
                    {step.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
