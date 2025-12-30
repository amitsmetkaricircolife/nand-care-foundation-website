"use client";
import Image from "next/image";
import { Box, Heading, Button } from "@chakra-ui/react";
import PageLayout from "@/components/layout/PageLayout";
import CampaignCarousel from "./CampaignCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (GPU accelerated)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const campaignImages = [
    "/images/hero/similar-campaigns1.png",
    "/images/hero/similar-campaigns2.png",
    "/images/hero/similar-campaigns3.png",
    "/images/hero/similar-campaigns4.png",
    "/images/hero/similar-campaigns5.png",
  ];

  return (
    <PageLayout transparentHeader={true}>
      {/* Hero Banner - Responsive Fixed Height */}
      <Box
        ref={ref}
        position="relative"
        h={{
          base: "100vh",
          sm: "100vh",
          md: "100vh",
        }}
        minH={{
          base: "600px",
          sm: "700px",
          md: "100vh",
        }}
        overflow="hidden"
      >
        {/* Parallax Background Image */}
        <MotionBox
          position="absolute"
          inset={0}
          style={{ y: imageY }}
          willChange="transform"
        >
          <Box position="relative" w="100%" h="120%" top="-10%">
            <Image
              src="/images/hero/home-hero.png"
              alt="Campaign Hero"
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </Box>
        </MotionBox>

        {/* Gradient Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))"
          zIndex={1}
        />

        {/* Parallax Content */}
        <MotionBox
          position="relative"
          zIndex={2}
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "center", md: "space-between" }}
          style={{ y: contentY, opacity }}
          willChange="transform, opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Content */}
          <Box
            px={{ base: 6, md: 8, lg: 12 }}
            pt={{ base: "20vh", sm: "25vh", md: "140px" }}
            flex={{ base: "0", md: "1" }}
            display="flex"
            alignItems={{ base: "flex-start", md: "center" }}
            maxW={{ base: "100%", md: "var(--content-max-width)" }}
            mx={{ base: 0, md: "auto" }}
            w="100%"
          >
            <Box maxW={{ base: "100%", sm: "320px", md: "600px" }}>
              <MotionHeading
                as="h1"
                fontSize={{
                  base: "32px",
                  sm: "40px",
                  md: "56px",
                  lg: "64px",
                }}
                fontWeight="700"
                color={{ base: "white", md: "black" }}
                mb={{ base: 6, md: 8 }}
                lineHeight="1.2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Campaign Name
              </MotionHeading>

              <MotionButton
                bg="primary.600"
                color="white"
                size={{ base: "lg", md: "xl" }}
                px={{ base: 8, md: 12 }}
                py={{ base: 6, md: 7 }}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="600"
                borderRadius="12px"
                _hover={{ bg: "primary.700" }}
                _active={{ bg: "primary.800" }}
                boxShadow="0 4px 20px rgba(0,0,0,0.2)"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </MotionButton>
            </Box>
          </Box>

          {/* Similar Campaigns - Desktop Only */}
          <MotionBox
            pb={{ md: 12 }}
            w="100%"
            display={{ base: "none", md: "block" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Box
              maxW="var(--content-max-width)"
              px={{ md: 8, lg: 12 }}
              mb={4}
              mx="auto"
            >
              <Heading
                as="h2"
                fontSize={{ md: "2xl", lg: "3xl" }}
                color="black"
                fontWeight="600"
              >
                Similar Campaigns
              </Heading>
            </Box>

            <Box
              maxW="var(--content-max-width)"
              px={{ md: 8, lg: 12 }}
              mx="auto"
            >
              <CampaignCarousel images={campaignImages} />
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>
    </PageLayout>
  );
}
