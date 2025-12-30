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
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
        height={{ base: "70px", lg: "var(--header-height)" }}
        transition="all 0.3s ease"
        backdropFilter={isTransparent ? "none" : "blur(10px)"}
      >
        <Container
          maxW="var(--content-max-width)"
          h="100%"
          px={{
            base: 4,
            sm: 6,
            md: 8,
            lg: 12,
            xl: 16,
          }}
          mx="auto"
        >
          <Flex justify="space-between" align="center" h="100%">
            {/* Logo */}
            <Link href="/home">
              <Flex
                align="center"
                gap={{ base: 2, md: 2.5, lg: 3 }}
                cursor="pointer"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.02)" }}
              >
                <Box
                  w={{ base: "32px", sm: "36px", md: "40px", lg: "44px" }}
                  h={{ base: "32px", sm: "36px", md: "40px", lg: "44px" }}
                  position="relative"
                  transition="all 0.3s ease"
                  flexShrink={0}
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
                    base: "lg",
                    sm: "lg",
                    md: "xl",
                    lg: "xl",
                    xl: "xl",
                  }}
                  fontWeight="600"
                  color={isTransparent ? "black" : "gray.800"}
                  lineHeight="1.2"
                  transition="color 0.3s ease"
                  whiteSpace="nowrap"
                >
                  Nand Care Foundation
                </Box>
              </Flex>
            </Link>

            {/* Desktop Navigation - Only show on large screens (1024px+) */}
            <HStack
              gap={{ lg: 6, xl: 8, "2xl": 10 }}
              display={{ base: "none", lg: "flex" }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Box
                      as="span"
                      position="relative"
                      fontSize={{
                        lg: "15px",
                        xl: "16px",
                        "2xl": "17px",
                      }}
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
                      transition="all 0.2s ease"
                      cursor="pointer"
                      pb={2}
                      _hover={{
                        color: isTransparent ? "white" : "primary.500",
                        transform: "translateY(-2px)",
                      }}
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        right: 0,
                        height: "3px",
                        bg: "primary.500",
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

            {/* Login Button - Desktop Only */}
            <Button
              bg="primary.600"
              color="white"
              size={{ lg: "md" }}
              px={{ lg: 6, xl: 8 }}
              h={{ lg: "44px", xl: "46px" }}
              borderRadius="md"
              fontWeight="600"
              fontSize={{ lg: "15px", xl: "16px" }}
              _hover={{
                bg: "primary.700",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              _active={{ bg: "primary.800", transform: "translateY(0)" }}
              display={{ base: "none", lg: "flex" }}
              boxShadow={isTransparent ? "lg" : "sm"}
              transition="all 0.2s ease"
            >
              Login
            </Button>

            {/* Mobile/Tablet Menu Button - Show up to 1023px */}
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              display={{ base: "flex", lg: "none" }}
              p={2}
              minW="auto"
              color={isTransparent ? "white" : "gray.800"}
              _hover={{
                bg: isTransparent ? "whiteAlpha.300" : "gray.100",
              }}
              transition="all 0.2s ease"
            >
              {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Mobile/Tablet Menu with Animation - Show up to 1023px */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionBox
            position="fixed"
            top={{ base: "70px", md: "70px" }}
            left={0}
            right={0}
            bottom={0}
            bg="white"
            zIndex={999}
            display={{ base: "block", lg: "none" }}
            overflowY="auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Container
              maxW="var(--content-max-width)"
              h="100%"
              px={{ base: 4, sm: 6, md: 8 }}
              py={{ base: 6, md: 8 }}
              mx="auto"
            >
              <MotionVStack
                gap={0}
                align="stretch"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <MotionBox
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Box
                          as="span"
                          fontSize={{ base: "17px", md: "18px" }}
                          fontWeight={isActive ? "600" : "500"}
                          color={isActive ? "primary.500" : "gray.700"}
                          display="block"
                          py={{ base: 4, md: 5 }}
                          cursor="pointer"
                          borderBottom="1px solid"
                          borderColor="gray.100"
                          transition="all 0.2s"
                          _hover={{
                            color: "primary.500",
                            pl: 2,
                            bg: "primary.50",
                          }}
                          bg={isActive ? "primary.50" : "transparent"}
                          px={{ base: 4, md: 5 }}
                          borderRadius="md"
                          mb={2}
                        >
                          {item.name}
                        </Box>
                      </Link>
                    </MotionBox>
                  );
                })}

                <MotionBox
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  mt={{ base: 6, md: 8 }}
                >
                  <Button
                    bg="primary.500"
                    color="white"
                    size="lg"
                    w="100%"
                    h={{ base: "52px", md: "56px" }}
                    borderRadius="md"
                    fontWeight="600"
                    fontSize={{ base: "16px", md: "17px" }}
                    _hover={{ bg: "primary.600" }}
                    _active={{ bg: "primary.700" }}
                  >
                    Login
                  </Button>
                </MotionBox>
              </MotionVStack>
            </Container>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}
