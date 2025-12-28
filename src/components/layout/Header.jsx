"use client";

import {
  Box,
  Flex,
  Button,
  Container,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navigation";
import { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Header({ transparent = false }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const isTransparent = transparent && !isScrolled;

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isTransparent ? "transparent" : "white"}
        boxShadow={isTransparent ? "none" : "sm"}
        height={{ base: "70px", md: "var(--header-height)" }}
        transition="all 0.3s ease"
      >
        <Container
          maxW="var(--content-max-width)"
          h="100%"
          px={{ base: 6, md: 8, lg: 12 }}
          mx="auto"
        >
          <Flex justify="space-between" align="center" h="100%">
            {/* Logo */}
            <Link href="/home">
              <Flex align="center" gap={2} cursor="pointer">
                <Box
                  w={{ base: "35px", md: "40px" }}
                  h={{ base: "35px", md: "40px" }}
                  position="relative"
                  transition="all 0.3s ease"
                >
                  <Image
                    src="/images/mainlogo.png"
                    alt="Nand Care Foundation Logo"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </Box>
                <Box
                  fontSize={{
                    base: "sm",
                    md: "md",
                    lg: "lg",
                    xl: "xl",
                  }}
                  fontWeight="600"
                  color={isTransparent ? "black" : "gray.800"}
                  lineHeight="1.2"
                  transition="color 0.3s ease"
                >
                  Nand Care Foundation
                </Box>
              </Flex>
            </Link>

            {/* Desktop Navigation */}
            <HStack
              gap={{ base: 6, lg: 8 }}
              display={{ base: "none", md: "flex" }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Box
                      as="span"
                      position="relative"
                      fontSize="15px"
                      fontWeight={isActive ? "600" : "500"}
                      color={
                        isTransparent
                          ? isActive
                            ? "primary.500"
                            : "black"
                          : isActive
                            ? "primary.500"
                            : "gray.700"
                      }
                      transition="color 0.2s"
                      cursor="pointer"
                      pb={2}
                      _hover={{
                        color: isTransparent ? "white" : "primary.500",
                      }}
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        right: 0,
                        height: "3px",
                        bg: isTransparent ? "primary.500" : "primary.500",
                        borderRadius: "full",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.3s ease",
                      }}
                      sx={{
                        "&:hover::after": {
                          transform: "scaleX(1)",
                        },
                      }}
                    >
                      {item.name}
                    </Box>
                  </Link>
                );
              })}
            </HStack>

            {/* Login Button - Desktop */}
            <Button
              bg="primary.600"
              color="white"
              size={{ base: "sm", md: "md" }}
              px={{ base: 6, md: 8 }}
              borderRadius="md"
              fontWeight="600"
              fontSize={{ base: "14px", md: "15px" }}
              _hover={{ bg: "primary.600" }}
              _active={{ bg: "primary.700" }}
              display={{ base: "none", md: "flex" }}
              boxShadow={isTransparent ? "lg" : "none"}
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              display={{ base: "flex", md: "none" }}
              p={2}
              color={isTransparent ? "white" : "gray.800"}
              _hover={{
                bg: isTransparent ? "whiteAlpha.300" : "gray.100",
              }}
            >
              {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Box
          position="fixed"
          top="70px"
          left={0}
          right={0}
          bottom={0}
          bg="white"
          zIndex={999}
          display={{ base: "block", md: "none" }}
          overflowY="auto"
        >
          <Container
            maxW="var(--content-max-width)"
            h="100%"
            px={{ base: 6, md: 8, lg: 12 }}
            mx="auto"
          >
            <VStack gap={6} align="stretch">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Box
                      as="span"
                      fontSize="16px"
                      fontWeight={isActive ? "600" : "500"}
                      color={isActive ? "primary.500" : "gray.700"}
                      display="block"
                      py={2}
                      cursor="pointer"
                      borderBottom="2px solid"
                      borderColor={isActive ? "primary.500" : "transparent"}
                      transition="all 0.2s"
                      _hover={{ color: "primary.500" }}
                    >
                      {item.name}
                    </Box>
                  </Link>
                );
              })}
              <Button
                bg="primary.500"
                color="white"
                size="md"
                borderRadius="md"
                fontWeight="600"
                _hover={{ bg: "primary.600" }}
                mt={4}
              >
                Login
              </Button>
            </VStack>
          </Container>
        </Box>
      )}
    </>
  );
}
