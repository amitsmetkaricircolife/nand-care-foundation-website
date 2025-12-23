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
  title: "Our Partners",
  description: "Meet our trusted partners who help us make a difference",
};

export default function OurPartnersPage() {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "/images/partners/partner-1.png",
      category: "Corporate",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/images/partners/partner-2.png",
      category: "NGO",
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/images/partners/partner-3.png",
      category: "Healthcare",
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/images/partners/partner-4.png",
      category: "Education",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "/images/partners/partner-5.png",
      category: "Corporate",
    },
    {
      id: 6,
      name: "Partner 6",
      logo: "/images/partners/partner-6.png",
      category: "NGO",
    },
    {
      id: 7,
      name: "Partner 7",
      logo: "/images/partners/partner-7.png",
      category: "Healthcare",
    },
    {
      id: 8,
      name: "Partner 8",
      logo: "/images/partners/partner-8.png",
      category: "Corporate",
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
            >
              Our Trusted Partners
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              maxW="700px"
              lineHeight="1.8"
            >
              Together with our partners, we're creating lasting positive change
              in communities across the nation. Their support and collaboration
              make our mission possible.
            </Text>
          </Container>
        </Box>

        {/* Partners Grid */}
        <Box py={{ base: 12, md: 16, lg: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <SimpleGrid
              columns={{ base: 2, md: 3, lg: 4 }}
              gap={{ base: 6, md: 8 }}
            >
              {partners.map((partner) => (
                <Box
                  key={partner.id}
                  p={{ base: 6, md: 8 }}
                  bg="white"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s"
                  _hover={{
                    boxShadow: "lg",
                    borderColor: "primary.500",
                    transform: "translateY(-4px)",
                  }}
                >
                  <Box position="relative" width="100%" height="80px">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      style={{ objectFit: "contain" }}
                      quality={90}
                    />
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Become a Partner */}
        <Box bg="secondary.500" py={{ base: 12, md: 16, lg: 20 }}>
          <Container
            maxW="var(--content-max-width)"
            px={{ base: 6, md: 8, lg: 12 }}
          >
            <VStack textAlign="center" gap={6} color="white">
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                Become a Partner
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                maxW="700px"
                lineHeight="1.8"
              >
                Join us in making a difference. Partner with Nand Care
                Foundation to create meaningful impact and transform lives
                across communities.
              </Text>
              <VStack gap={3} mt={4}>
                <Text fontSize="lg" fontWeight="600">
                  📧 partnerships@nandcare.org
                </Text>
                <Text fontSize="lg" fontWeight="600">
                  📞 +91 (800) 123-4567
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Partnership Benefits */}
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
              Partnership Benefits
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
              {[
                {
                  title: "Brand Visibility",
                  description:
                    "Enhance your brand reputation through association with meaningful social causes.",
                },
                {
                  title: "CSR Compliance",
                  description:
                    "Fulfill your corporate social responsibility goals with certified impact programs.",
                },
                {
                  title: "Community Impact",
                  description:
                    "Make a real difference in communities while engaging your employees and stakeholders.",
                },
              ].map((benefit, index) => (
                <Box
                  key={index}
                  p={{ base: 6, md: 8 }}
                  bg="white"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.200"
                  textAlign="center"
                >
                  <Heading as="h3" fontSize="xl" mb={4} color="primary.500">
                    {benefit.title}
                  </Heading>
                  <Text fontSize="md" color="gray.700" lineHeight="1.7">
                    {benefit.description}
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
