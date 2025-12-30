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
import { LuShield, LuUsers, LuTrendingUp, LuHeart } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

export default function WhyChooseSection() {
  const features = [
    {
      icon: LuShield,
      title: "100% Transparency",
      description:
        "Every rupee tracked. Real-time updates on fund utilization and impact reports.",
    },
    {
      icon: LuUsers,
      title: "Verified Campaigns",
      description:
        "All campaigns thoroughly vetted. Direct impact on real beneficiaries.",
    },
    {
      icon: LuTrendingUp,
      title: "Track Your Impact",
      description:
        "Get updates, photos, and stories showing exactly how your donation helped.",
    },
    {
      icon: LuHeart,
      title: "Tax Benefits",
      description:
        "80G certified donations. Instant receipts for tax deductions.",
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
            Why Choose NandCare?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Trust, transparency, and real impact.
          </Text>
        </MotionBox>

        {/* Features Grid */}
        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: 8, md: 10 }}
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
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <VStack
                align="flex-start"
                gap={4}
                p={{ base: 6, md: 8 }}
                bg="gray.50"
                borderRadius="16px"
                h="100%"
                transition="all 0.3s"
                _hover={{
                  bg: "primary.50",
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                }}
              >
                <Box
                  w="56px"
                  h="56px"
                  borderRadius="12px"
                  bg="primary.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={feature.icon} boxSize={7} color="primary.600" />
                </Box>

                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="600"
                  color="gray.900"
                >
                  {feature.title}
                </Heading>

                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="1.7"
                >
                  {feature.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}
