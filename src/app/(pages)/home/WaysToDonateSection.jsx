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
import { PiTShirtLight } from "react-icons/pi";
import { LuMail, LuGift } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

export default function WaysToDonateSection() {
  const donationWays = [
    {
      icon: PiTShirtLight,
      title: "Donate Products",
      description: "Contribute essential items to those in need.",
    },
    {
      icon: LuMail,
      title: "Donate Money",
      description: "Fund specific amount for campaigns.",
    },
    {
      icon: LuGift,
      title: "Gift Donations",
      description: "Donate in someone's name as a meaningful gift.",
    },
  ];

  return (
    <Box bg="tertiary.100" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        {/* Section Header */}
        <MotionBox
          textAlign="center"
          mb={{ base: 10, md: 12 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="gray.900"
            mb={3}
          >
            Ways to Donate
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Every contribution counts.
          </Text>
        </MotionBox>

        {/* Donation Cards */}
        <MotionSimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: 6, md: 8 }}
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
          {donationWays.map((way, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="20px"
              p={{ base: 8, md: 10 }}
              textAlign="center"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
              }}
            >
              <VStack gap={4}>
                {/* Icon */}
                <Box
                  color="tertiary.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={way.icon}
                    boxSize={{ base: 12, md: 14 }}
                    strokeWidth={1.5}
                  />
                </Box>

                {/* Title */}
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="600"
                  color="gray.900"
                >
                  {way.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="1.7"
                >
                  {way.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}
