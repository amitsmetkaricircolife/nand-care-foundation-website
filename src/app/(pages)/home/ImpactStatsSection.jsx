"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <VStack ref={ref} textAlign="center" gap={0}>
      <MotionText
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="700"
        color="white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {value}
      </MotionText>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="whiteAlpha.900"
        fontWeight="500"
      >
        {label}
      </Text>
    </VStack>
  );
}

export default function ImpactStatsSection() {
  const stats = [
    { value: "₹2Cr+", label: "Funds Raised" },
    { value: "5,000+", label: "Active Donors" },
    { value: "300+", label: "Campaigns Supported" },
    { value: "50,000+", label: "Lives Impacted" },
  ];

  return (
    <Box bg="secondary.600" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
            color="white"
            fontWeight="700"
            mb={{ base: 10, md: 12 }}
          >
            Our Impact in Numbers
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 8, md: 10 }}>
          {stats.map((stat, index) => (
            <AnimatedStat key={index} value={stat.value} label={stat.label} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
