"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { LuUsers } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);

const partnersData = [
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹25,000",
    avatar: "AR",
  },
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹15,000",
    avatar: "RM",
  },
  {
    name: "Meera Patel",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Meera Patel",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Anonymous",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Aravinthraj",
    donations: "5 donations",
    amount: "₹25,000",
    avatar: "AR",
  },
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹25,000",
    avatar: "AR",
  },
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹15,000",
    avatar: "RM",
  },
  {
    name: "Aravinthraj",
    donations: "5 donations",
    amount: "₹15,000",
    avatar: "AR",
  },
  {
    name: "Meera Patel",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Anonymous",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Meera Patel",
    donations: "7 donations",
    amount: "₹12,000",
    avatar: "RM",
  },
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹25,000",
    avatar: "AR",
  },
  {
    name: "Aravinthraj",
    donations: "6 donations",
    amount: "₹15,000",
    avatar: "RM",
  },
  {
    name: "Aravinthraj",
    donations: "5 donations",
    amount: "₹15,000",
    avatar: "AR",
  },
];

export default function PartnersCommunitySection() {
  const [activeTab, setActiveTab] = useState("generous");

  return (
    <Box bg="gray.50" py={{ base: 12, md: 16 }}>
      <Container maxW="var(--content-max-width)" px={{ base: 6, md: 8 }}>
        {/* Section Header */}
        <MotionFlex
          align="center"
          gap={2}
          mb={8}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Icon as={LuUsers} boxSize={6} color="gray.900" />
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight="700"
            color="gray.900"
          >
            Our Community of Partners
          </Heading>
        </MotionFlex>

        {/* Tabs */}
        <MotionFlex
          gap={2}
          mb={8}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            flex={1}
            h="48px"
            bg={activeTab === "generous" ? "red.500" : "white"}
            color={activeTab === "generous" ? "white" : "gray.700"}
            borderRadius="8px"
            fontSize="15px"
            fontWeight="600"
            _hover={{ bg: activeTab === "generous" ? "red.600" : "gray.100" }}
            onClick={() => setActiveTab("generous")}
            transition="all 0.2s"
          >
            Most Generous
          </Button>
          <Button
            flex={1}
            h="48px"
            bg={activeTab === "recent" ? "red.500" : "white"}
            color={activeTab === "recent" ? "white" : "gray.700"}
            borderRadius="8px"
            fontSize="15px"
            fontWeight="600"
            _hover={{ bg: activeTab === "recent" ? "red.600" : "gray.100" }}
            onClick={() => setActiveTab("recent")}
            transition="all 0.2s"
          >
            Recent
          </Button>
        </MotionFlex>

        {/* Partners Grid */}
        <AnimatePresence mode="wait">
          <MotionSimpleGrid
            key={activeTab}
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={6}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.2 },
              },
            }}
          >
            {partnersData.map((partner, index) => (
              <MotionFlex
                key={`${activeTab}-${index}`}
                align="center"
                gap={4}
                bg="white"
                p={5}
                borderRadius="12px"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="0 1px 3px rgba(0,0,0,0.05)"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                {/* Avatar */}
                <Flex
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  bg="red.100"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Text fontSize="16px" fontWeight="700" color="red.600">
                    {partner.avatar}
                  </Text>
                </Flex>

                {/* Info */}
                <Box flex={1}>
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    color="gray.900"
                    mb={0.5}
                  >
                    {partner.name}
                  </Text>
                  <Text fontSize="13px" color="gray.500" mb={1}>
                    {partner.donations}
                  </Text>
                  <Text fontSize="18px" fontWeight="700" color="green.600">
                    {partner.amount}
                  </Text>
                </Box>
              </MotionFlex>
            ))}
          </MotionSimpleGrid>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
