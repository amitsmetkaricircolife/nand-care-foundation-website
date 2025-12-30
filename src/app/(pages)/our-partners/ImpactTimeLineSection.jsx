"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { LuTrendingUp } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const timelineData = [
  {
    name: "Aravinthraj",
    amount: "₹1,000",
    action: "Supported school meals for 20 kids 🍛",
    time: "4 hours ago",
  },
  {
    name: "Anonymous",
    amount: "₹1,000",
    action: "Supported school meals for 20 kids 🍛",
    time: "4 hours ago",
  },
  {
    name: "Priya Sharma",
    amount: "₹1,000",
    action: "Supported school meals for 20 kids 🍛",
    time: "4 hours ago",
  },
  {
    name: "Ashish",
    amount: "₹1,000",
    action: "Supported school meals for 20 kids 🍛",
    time: "4 hours ago",
  },
  {
    name: "Suraj",
    amount: "₹1,000",
    action: "Supported school meals for 20 kids 🍛",
    time: "4 hours ago",
  },
];

export default function ImpactTimeLineSection() {
  return (
    <Box bg="white" py={{ base: 12, md: 16 }}>
      <Container maxW="900px" px={{ base: 6, md: 8 }}>
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
          <Icon as={LuTrendingUp} boxSize={6} color="gray.900" />
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "28px" }}
            fontWeight="700"
            color="gray.900"
          >
            Impact Timeline
          </Heading>
        </MotionFlex>

        {/* Timeline */}
        <MotionVStack
          align="stretch"
          gap={0}
          position="relative"
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
          {/* Vertical Line */}
          <Box
            position="absolute"
            left="11px"
            top="20px"
            bottom="20px"
            w="2px"
            bg="gray.200"
          />

          {timelineData.map((item, index) => (
            <MotionFlex
              key={index}
              gap={4}
              position="relative"
              pb={6}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Green Dot */}
              <Box
                w="24px"
                h="24px"
                borderRadius="full"
                bg="green.500"
                flexShrink={0}
                zIndex={1}
                mt={1}
              />

              {/* Content Card */}
              <Box
                flex={1}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="12px"
                p={5}
                boxShadow="0 1px 3px rgba(0,0,0,0.05)"
                _hover={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderColor: "gray.300",
                }}
                transition="all 0.2s"
              >
                <Flex justify="space-between" align="start" mb={2}>
                  <Box>
                    <Text
                      fontSize="17px"
                      fontWeight="600"
                      color="gray.900"
                      mb={1}
                    >
                      {item.name}
                    </Text>
                    <Text fontSize="14px" fontWeight="600" color="green.600">
                      {item.amount} donated
                    </Text>
                  </Box>
                  <Text fontSize="13px" color="gray.500">
                    {item.time}
                  </Text>
                </Flex>
                <Text fontSize="15px" color="gray.600">
                  {item.action}
                </Text>
              </Box>
            </MotionFlex>
          ))}
        </MotionVStack>
      </Container>
    </Box>
  );
}
