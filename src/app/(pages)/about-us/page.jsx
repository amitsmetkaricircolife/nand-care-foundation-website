import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Nand Care Foundation and our mission to make a difference",
};

export default function AboutUsPage() {
  const stats = [
    { value: "₹2Cr+", label: "Funds Raised" },
    { value: "5,000+", label: "Beneficiaries" },
    { value: "300+", label: "Campaigns" },
    { value: "50,000+", label: "Total Donors" },
  ];

  const values = [
    {
      title: "Transparency",
      description:
        "We maintain complete transparency in all our operations and fund utilization.",
    },
    {
      title: "Compassion",
      description:
        "Every action we take is driven by genuine care and empathy for those in need.",
    },
    {
      title: "Impact",
      description:
        "We focus on creating measurable, long-lasting positive change in communities.",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and ethical conduct.",
    },
  ];

  return (
    <PageLayout transparentHeader={false}>
      <Box pt="var(--header-height)">
        {/* Hero Section */}
        <Box bg="tertiary.50" py={{ base: 16, md: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="gray.900"
              mb={6}
              maxW="800px"
            >
              Making a Positive Impact Through Compassionate Care
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              maxW="700px"
              lineHeight="1.8"
            >
              Nand Care Foundation is dedicated to creating lasting change in
              communities through sustainable development programs, healthcare
              initiatives, and educational support.
            </Text>
          </Container>
        </Box>

        {/* Our Story */}
        <Box py={{ base: 12, md: 16, lg: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: 8, md: 12 }}
              alignItems="center"
            >
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  mb={6}
                  color="gray.900"
                >
                  Our Story
                </Heading>
                <VStack align="stretch" gap={4}>
                  <Text fontSize="md" color="gray.700" lineHeight="1.8">
                    Founded in 2015, Nand Care Foundation began with a simple
                    mission: to bring hope and support to those who need it
                    most. What started as a small community initiative has grown
                    into a nationwide movement touching thousands of lives.
                  </Text>
                  <Text fontSize="md" color="gray.700" lineHeight="1.8">
                    Our journey has been marked by countless stories of
                    transformation, resilience, and hope. From providing
                    healthcare to underserved communities to supporting
                    education for underprivileged children, we've remained
                    committed to our core values.
                  </Text>
                  <Text fontSize="md" color="gray.700" lineHeight="1.8">
                    Today, we continue to expand our reach, driven by the belief
                    that every individual deserves access to basic necessities,
                    healthcare, and opportunities for a better future.
                  </Text>
                </VStack>
              </Box>
              <Box
                position="relative"
                height={{ base: "300px", md: "400px" }}
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src="/images/about/our-story.jpg"
                  alt="Our Story"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={85}
                />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Impact Stats */}
        <Box bg="secondary.500" py={{ base: 12, md: 16 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              textAlign="center"
              color="white"
              mb={12}
            >
              Our Impact in Numbers
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 6, md: 8 }}>
              {stats.map((stat, index) => (
                <VStack key={index} textAlign="center">
                  <Text
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="whiteAlpha.900"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Our Values */}
        <Box py={{ base: 12, md: 16, lg: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              textAlign="center"
              mb={12}
              color="gray.900"
            >
              Our Core Values
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
              {values.map((value, index) => (
                <Box
                  key={index}
                  p={{ base: 6, md: 8 }}
                  borderRadius="lg"
                  bg="white"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.200"
                  transition="all 0.3s"
                  _hover={{
                    boxShadow: "lg",
                    borderColor: "primary.500",
                    transform: "translateY(-4px)",
                  }}
                >
                  <Heading as="h3" fontSize="xl" mb={3} color="primary.500">
                    {value.title}
                  </Heading>
                  <Text fontSize="md" color="gray.700" lineHeight="1.7">
                    {value.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </PageLayout>
  );
}
