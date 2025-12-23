"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  VStack,
  Input,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.800" color="white">
      {/* Main Footer Content */}
      <Container
        maxW="var(--content-max-width)"
        py={{ base: 10, md: 16 }}
        px={{ base: 6, md: 8, lg: 12 }}
        mx="auto" // Add this to all Container components
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={{ base: 10, md: 8 }}
        >
          {/* Brand Section */}
          <Box maxW={{ base: "100%", md: "300px" }}>
            <Flex align="center" gap={2} mb={4}>
              <Box
                w="40px"
                h="40px"
                bg="blue.500"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="60%" h="60%" bg="white" borderRadius="sm" />
              </Box>
              <Text fontSize="lg" fontWeight="600">
                Nand Care Foundation
              </Text>
            </Flex>
            <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.7" mb={6}>
              Making a positive impact in communities through compassionate care
              and sustainable development programs.
            </Text>

            {/* Social Links */}
            <HStack gap={3}>
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaYoutube, href: "#" },
              ].map((social, index) => (
                <ChakraLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ opacity: 0.8 }}
                >
                  <Box
                    w="38px"
                    h="38px"
                    bg="whiteAlpha.200"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s"
                    _hover={{ bg: "secondary.500" }}
                  >
                    <Box as={social.icon} boxSize={4} />
                  </Box>
                </ChakraLink>
              ))}
            </HStack>
          </Box>

          {/* Quick Links */}
          <VStack
            align="flex-start"
            gap={4}
            display={{ base: "none", md: "flex" }}
          >
            <Text fontSize="md" fontWeight="600" mb={2}>
              Quick Links
            </Text>
            {[
              { name: "Home", href: "/home" },
              { name: "Campaigns", href: "/campaigns" },
              { name: "Our Partners", href: "/our-partners" },
              { name: "Volunteers", href: "/volunteers" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="sm"
                  color="whiteAlpha.800"
                  cursor="pointer"
                  transition="color 0.2s"
                  _hover={{ color: "white" }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* Legal */}
          <VStack
            align="flex-start"
            gap={4}
            display={{ base: "none", md: "flex" }}
          >
            <Text fontSize="md" fontWeight="600" mb={2}>
              Legal
            </Text>
            {[
              { name: "Terms of Service", href: "#" },
              { name: "Privacy Policy", href: "#" },
              { name: "Cookie Policy", href: "#" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="sm"
                  color="whiteAlpha.800"
                  cursor="pointer"
                  transition="color 0.2s"
                  _hover={{ color: "white" }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* Newsletter */}
          <Box maxW={{ base: "100%", md: "320px" }}>
            <Text fontSize="md" fontWeight="600" mb={4}>
              Stay Updated
            </Text>
            <Text fontSize="sm" color="whiteAlpha.800" mb={4}>
              Subscribe to our newsletter for the latest updates
            </Text>
            <Flex gap={2}>
              <Input
                placeholder="Enter your email"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                fontSize="sm"
                _placeholder={{ color: "whiteAlpha.600" }}
                _hover={{ borderColor: "whiteAlpha.400" }}
                css={{
                  "&:focus": {
                    borderColor: "var(--chakra-colors-secondary-500)",
                    boxShadow: "none",
                  },
                }}
              />
              <Button
                bg="secondary.500"
                color="white"
                px={6}
                fontSize="sm"
                fontWeight="600"
                flexShrink={0}
                _hover={{ bg: "secondary.600" }}
              >
                Subscribe
              </Button>
            </Flex>

            {/* Contact Info */}
            <VStack align="flex-start" gap={2} mt={6}>
              <Text fontSize="sm" color="whiteAlpha.800">
                📧 info@nandcare.org
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800">
                📞 +91 (800) 123-4567
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800">
                📍 123 Care Street, Delhi, India
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Bottom Bar */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.200" py={6}>
        <Container
          maxW="var(--content-max-width)"
          py={{ base: 10, md: 16 }}
          px={{ base: 6, md: 8, lg: 12 }}
          mx="auto" // Add this to all Container components
        >
          <Text fontSize="sm" color="whiteAlpha.700" textAlign="center">
            © {currentYear} Nand Care Foundation. All Rights Reserved |
            Registered NGO #12345
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
