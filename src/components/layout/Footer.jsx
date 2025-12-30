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
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "FAQs", href: "/faqs" },
    { name: "Our Partners", href: "/our-partners" },
    { name: "About Us", href: "/about-us" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "80G Certificate", href: "#" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <Box as="footer" bg="#2D2D2D" color="white">
      {/* Main Footer Content */}
      <Container
        maxW="var(--content-max-width)"
        py={{ base: 12, md: 14, lg: 12 }}
        px={{
          base: 4,
          sm: 6,
          md: 8,
          lg: 12,
          xl: 16,
        }}
        mx="auto"
      >
        {/* Mobile & Tablet Layout */}
        <Box display={{ base: "block", lg: "none" }}>
          {/* Brand Section */}
          <Box mb={8}>
            <Flex align="center" gap={2.5} mb={4}>
              <Box w="36px" h="36px" position="relative" flexShrink={0}>
                <Image
                  src="/images/mainlogo.png"
                  alt="Nand Care Foundation Logo"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>
              <Text fontSize="17px" fontWeight="600" lineHeight="1.2">
                Nand Care Foundation
              </Text>
            </Flex>
            <Text
              fontSize="14px"
              color="whiteAlpha.700"
              lineHeight="1.7"
              mb={0}
            >
              Empowering change through transparent giving. Every donation
              creates lasting impact.
            </Text>
          </Box>

          {/* Quick Links & Legal - Side by Side on Mobile */}
          <SimpleGrid columns={2} gap={8} mb={8}>
            {/* Quick Links */}
            <VStack align="flex-start" gap={2.5}>
              <Text fontSize="16px" fontWeight="600" mb={1}>
                Quick Links
              </Text>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text
                    fontSize="14px"
                    color="whiteAlpha.700"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ color: "white", pl: 1 }}
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </VStack>

            {/* Legal */}
            <VStack align="flex-start" gap={2.5}>
              <Text fontSize="16px" fontWeight="600" mb={1}>
                Legal
              </Text>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Text
                    fontSize="14px"
                    color="whiteAlpha.700"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ color: "white", pl: 1 }}
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </SimpleGrid>

          {/* Stay Updated */}
          <Box mb={6}>
            <Text fontSize="16px" fontWeight="600" mb={3}>
              Stay Updated
            </Text>
            <Text
              fontSize="14px"
              color="whiteAlpha.700"
              mb={4}
              lineHeight="1.6"
            >
              Get impact stories and campaign updates
            </Text>
            <Flex gap={2} mb={5}>
              <Input
                placeholder="Your email"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="white"
                fontSize="14px"
                h="44px"
                borderRadius="8px"
                _placeholder={{ color: "whiteAlpha.500" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{
                  borderColor: "secondary.500",
                  boxShadow: "0 0 0 1px var(--chakra-colors-secondary-500)",
                }}
              />
              <Button
                bg="secondary.500"
                color="white"
                px={6}
                h="44px"
                fontSize="14px"
                fontWeight="600"
                flexShrink={0}
                borderRadius="8px"
                _hover={{ bg: "secondary.600" }}
                _active={{ bg: "secondary.700" }}
                transition="all 0.2s"
              >
                Subscribe
              </Button>
            </Flex>

            {/* Contact Info */}
            <VStack align="flex-start" gap={2.5} mb={6}>
              <Flex align="center" gap={2}>
                <Box as={LuMail} boxSize={4} color="whiteAlpha.700" />
                <ChakraLink
                  href="mailto:contact@nandcare.org"
                  fontSize="14px"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                >
                  contact@nandcare.org
                </ChakraLink>
              </Flex>
              <Flex align="center" gap={2}>
                <Box as={LuPhone} boxSize={4} color="whiteAlpha.700" />
                <ChakraLink
                  href="tel:+919876543210"
                  fontSize="14px"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                >
                  +91 98765 43210
                </ChakraLink>
              </Flex>
              <Flex align="start" gap={2}>
                <Box
                  as={LuMapPin}
                  boxSize={4}
                  color="whiteAlpha.700"
                  mt={0.5}
                  flexShrink={0}
                />
                <Text fontSize="14px" color="whiteAlpha.700">
                  Mumbai, India
                </Text>
              </Flex>
            </VStack>

            {/* Social Links - Mobile */}
            <Box>
              <Text fontSize="16px" fontWeight="600" mb={3}>
                Catch Us On
              </Text>
              <HStack gap={3}>
                {socialLinks.map((social, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChakraLink
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Box
                        w="38px"
                        h="38px"
                        bg="gray.500"
                        borderRadius="8px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.3s ease"
                        _hover={{ bg: "primary.500" }}
                      >
                        <Box as={social.icon} boxSize={4} />
                      </Box>
                    </ChakraLink>
                  </MotionBox>
                ))}
              </HStack>
            </Box>
          </Box>
        </Box>

        {/* Desktop Layout (4 Columns) */}
        <SimpleGrid
          columns={4}
          gap={{ lg: 8, xl: 12 }}
          alignItems="start"
          display={{ base: "none", lg: "grid" }}
        >
          {/* Brand Section */}
          <Box>
            <Flex align="center" gap={2.5} mb={4}>
              <Box w="36px" h="36px" position="relative" flexShrink={0}>
                <Image
                  src="/images/mainlogo.png"
                  alt="Nand Care Foundation Logo"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>
              <Text fontSize="17px" fontWeight="600" lineHeight="1.2">
                Nand Care Foundation
              </Text>
            </Flex>
            <Text
              fontSize="14px"
              color="whiteAlpha.700"
              lineHeight="1.7"
              mb={5}
            >
              Empowering change through transparent giving. Every donation
              creates lasting impact.
            </Text>

            {/* Social Links - Desktop */}
            <HStack gap={3}>
              {socialLinks.map((social, index) => (
                <MotionBox
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChakraLink
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Box
                      w="38px"
                      h="38px"
                      bg="gray.500"
                      borderRadius="8px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="all 0.3s ease"
                      _hover={{ bg: "primary.500" }}
                    >
                      <Box as={social.icon} boxSize={4} />
                    </Box>
                  </ChakraLink>
                </MotionBox>
              ))}
            </HStack>
          </Box>

          {/* Quick Links */}
          <VStack align="flex-start" gap={2.5}>
            <Text fontSize="16px" fontWeight="600" mb={1}>
              Quick Links
            </Text>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="14px"
                  color="whiteAlpha.700"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ color: "white", pl: 1 }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* Legal */}
          <VStack align="flex-start" gap={2.5}>
            <Text fontSize="16px" fontWeight="600" mb={1}>
              Legal
            </Text>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="14px"
                  color="whiteAlpha.700"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ color: "white", pl: 1 }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* Stay Updated */}
          <Box>
            <Text fontSize="16px" fontWeight="600" mb={3}>
              Stay Updated
            </Text>
            <Text
              fontSize="14px"
              color="whiteAlpha.700"
              mb={4}
              lineHeight="1.6"
            >
              Get impact stories and campaign updates
            </Text>
            <Flex gap={2} mb={5}>
              <Input
                placeholder="Your email"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="white"
                fontSize="14px"
                h="44px"
                borderRadius="8px"
                _placeholder={{ color: "whiteAlpha.500" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{
                  borderColor: "secondary.500",
                  boxShadow: "0 0 0 1px var(--chakra-colors-secondary-500)",
                }}
              />
              <Button
                bg="secondary.500"
                color="white"
                px={6}
                h="44px"
                fontSize="14px"
                fontWeight="600"
                flexShrink={0}
                borderRadius="8px"
                _hover={{ bg: "secondary.600" }}
                _active={{ bg: "secondary.700" }}
                transition="all 0.2s"
              >
                Subscribe
              </Button>
            </Flex>

            {/* Contact Info */}
            <VStack align="flex-start" gap={2.5}>
              <Flex align="center" gap={2}>
                <Box as={LuMail} boxSize={4} color="whiteAlpha.700" />
                <ChakraLink
                  href="mailto:contact@nandcare.org"
                  fontSize="14px"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                >
                  contact@nandcare.org
                </ChakraLink>
              </Flex>
              <Flex align="center" gap={2}>
                <Box as={LuPhone} boxSize={4} color="whiteAlpha.700" />
                <ChakraLink
                  href="tel:+919876543210"
                  fontSize="14px"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                >
                  +91 98765 43210
                </ChakraLink>
              </Flex>
              <Flex align="start" gap={2}>
                <Box
                  as={LuMapPin}
                  boxSize={4}
                  color="whiteAlpha.700"
                  mt={0.5}
                  flexShrink={0}
                />
                <Text fontSize="14px" color="whiteAlpha.700">
                  Mumbai, India
                </Text>
              </Flex>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Bottom Bar */}
      <Box
        borderTop="1px solid"
        borderColor="whiteAlpha.200"
        py={{ base: 4, md: 5 }}
      >
        <Container
          maxW="var(--content-max-width)"
          px={{
            base: 4,
            sm: 6,
            md: 8,
            lg: 12,
            xl: 16,
          }}
          mx="auto"
        >
          <Text
            fontSize={{ base: "12px", md: "13px" }}
            color="whiteAlpha.600"
            textAlign="center"
            lineHeight="1.6"
          >
            © {currentYear} Nand Care Foundation. All rights reserved. |
            Registered 80G NGO
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
