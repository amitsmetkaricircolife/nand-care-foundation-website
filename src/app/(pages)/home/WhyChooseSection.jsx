"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  LuShieldCheck,
  LuCircleCheck,
  LuEye,
  LuTrendingUp,
} from "react-icons/lu";

export default function WhyChooseSection() {
  const features = [
    {
      icon: LuShieldCheck,
      title: "100% Transparent Process",
      description:
        "Track every rupee from donation to impact with real-time updates.",
      iconColor: "secondary.500",
      bgColor: "secondary.50",
    },
    {
      icon: LuCircleCheck,
      title: "Verified Campaigns",
      description:
        "Every cause is thoroughly vetted and monitored by our team.",
      iconColor: "secondary.500",
      bgColor: "secondary.50",
    },
    {
      icon: LuEye,
      title: "Secure Payments",
      description:
        "Get instant notifications on how your donation makes a difference.",
      iconColor: "secondary.500",
      bgColor: "secondary.50",
    },
    {
      icon: LuTrendingUp,
      title: "Auto 80G Receipts",
      description:
        "Join thousands who've witnessed measurable, lasting change.",
      iconColor: "secondary.500",
      bgColor: "secondary.50",
    },
  ];

  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          {/* Left Side - Image with Stats */}
          <Box position="relative" order={{ base: 2, lg: 1 }}>
            <Box
              position="relative"
              height={{ base: "400px", md: "500px", lg: "600px" }}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image
                src="/images/hero/why-choose-image.png"
                alt="Why Choose NandCare"
                fill
                style={{ objectFit: "cover" }}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Title Text Outside Cards */}
              <Box
                position="absolute"
                bottom={{ base: 24, md: 32 }}
                left={{ base: 6, md: 8 }}
                right={{ base: 6, md: 8 }}
                mb={5}
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="white"
                  fontWeight="600"
                  textShadow="0 2px 4px rgba(0,0,0,0.3)"
                  mb={2}
                >
                  Making Dreams Come True
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="white"
                  textShadow="0 1px 2px rgba(0,0,0,0.3)"
                >
                  One donation at a time
                </Text>
              </Box>

              {/* Two Separate Stats Cards */}
              <HStack
                position="absolute"
                bottom={{ base: 6, md: 8 }}
                left={{ base: 6, md: 8 }}
                right={{ base: 6, md: 8 }}
                gap={4}
              >
                {/* Happy Donors Card */}
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={{ base: 4, md: 5 }}
                  boxShadow="xl"
                  flex={1}
                >
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="gray.900"
                    lineHeight="1.2"
                    mb={1}
                  >
                    50K+
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.600">
                    Happy Donors
                  </Text>
                </Box>

                {/* Active Campaigns Card */}
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={{ base: 4, md: 5 }}
                  boxShadow="xl"
                  flex={1}
                >
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    color="primary.500"
                    lineHeight="1.2"
                    mb={1}
                  >
                    300+
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="gray.600">
                    Active Campaigns
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Box>

          {/* Right Side - Content */}
          <VStack align="flex-start" gap={6} order={{ base: 1, lg: 2 }}>
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="gray.900"
                mb={3}
              >
                Why Choose NandCare?
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                Lorem ipsum dolor sit amet cvel proin.
              </Text>
            </Box>

            <VStack align="stretch" gap={4} w="100%">
              {features.map((feature, index) => (
                <Box
                  key={index}
                  p={5}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="secondary.200"
                  bg="secondary.50"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "secondary.300",
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                >
                  <HStack align="flex-start" gap={4}>
                    {/* Icon */}
                    <Box color={feature.iconColor} flexShrink={0} mt={1}>
                      <Box as={feature.icon} boxSize={6} />
                    </Box>

                    {/* Text Content */}
                    <Box flex={1}>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="600"
                        color="gray.900"
                        mb={2}
                      >
                        {feature.title}
                      </Text>
                      <Text
                        fontSize={{ base: "sm", md: "md" }}
                        color="gray.600"
                        lineHeight="1.6"
                      >
                        {feature.description}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
