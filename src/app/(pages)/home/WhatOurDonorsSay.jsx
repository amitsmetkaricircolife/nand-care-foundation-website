"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// Custom Avatar Component - Optimized
const Avatar = ({
  src,
  name,
  size = { base: "40px", sm: "44px", md: "48px" },
}) => {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);

  return (
    <Box
      position="relative"
      w={size}
      h={size}
      borderRadius="full"
      overflow="hidden"
      flexShrink={0}
      bg="primary.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {!imageError ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="48px"
          style={{ objectFit: "cover" }}
          quality={85}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          fontWeight="600"
          color="white"
          userSelect="none"
        >
          {initials}
        </Text>
      )}
    </Box>
  );
};

export default function WhatOurDonorsSay() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Donor",
      avatar: "/images/testimonials/priya-sharma.jpg",
      rating: 5,
      comment:
        "I love how transparent Nand Care is. I can see exactly how my donations help. It feels good to make a real difference in the world!",
    },
    {
      name: "Rajesh Kumar",
      role: "Monthly Supporter",
      avatar: "/images/testimonials/rajesh-kumar.jpg",
      rating: 5,
      comment:
        "The platform is so easy to use. I set up monthly donations and get regular updates about the impact. Highly recommended!",
    },
    {
      name: "Anita Desai",
      role: "First-time Donor",
      avatar: "/images/testimonials/anita-desai.jpg",
      rating: 5,
      comment:
        "I was hesitant about online donations, but Nand Care's verified campaigns and secure process gave me confidence to contribute.",
    },
  ];

  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 4, sm: 6, md: 8, lg: 12 }}
      >
        {/* Section Header */}
        <MotionBox
          textAlign="center"
          mb={{ base: 8, sm: 10, md: 12 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            fontSize={{
              base: "24px",
              sm: "28px",
              md: "32px",
              lg: "40px",
              xl: "48px",
            }}
            fontWeight="700"
            color="gray.900"
            mb={{ base: 2, md: 3 }}
            lineHeight="1.2"
          >
            What Our Donors Say
          </Heading>
          <Text
            fontSize={{
              base: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            }}
            color="gray.600"
            lineHeight="1.6"
            maxW={{ base: "100%", md: "600px" }}
            mx="auto"
          >
            Join thousands of satisfied donors making a difference
          </Text>
        </MotionBox>

        {/* Testimonial Cards - Fully Responsive Grid */}
        <MotionSimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
          }}
          gap={{
            base: 5,
            sm: 6,
            md: 6,
            lg: 8,
          }}
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
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Box
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius={{
                  base: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "20px",
                }}
                p={{
                  base: 5,
                  sm: 6,
                  md: 6,
                  lg: 7,
                }}
                h="100%"
                display="flex"
                flexDirection="column"
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  borderColor: "gray.300",
                  transform: "translateY(-4px)",
                }}
              >
                <VStack align="stretch" gap={{ base: 4, md: 5 }} flex="1">
                  {/* Stars */}
                  <HStack gap={{ base: 0.5, md: 1 }} flexWrap="wrap">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        as={LuStar}
                        color="orange.400"
                        fill="orange.400"
                        boxSize={{
                          base: 4,
                          sm: 4.5,
                          md: 5,
                        }}
                      />
                    ))}
                  </HStack>

                  {/* Comment */}
                  <Text
                    fontSize={{
                      base: "14px",
                      sm: "15px",
                      md: "15px",
                      lg: "16px",
                    }}
                    color="gray.700"
                    lineHeight={{
                      base: "1.6",
                      md: "1.7",
                    }}
                    fontStyle="italic"
                    flex="1"
                  >
                    "{testimonial.comment}"
                  </Text>

                  {/* Author Info */}
                  <HStack
                    gap={{ base: 2.5, sm: 3, md: 3 }}
                    pt={{ base: 2, md: 2 }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      name={testimonial.name}
                      size={{
                        base: "40px",
                        sm: "44px",
                        md: "48px",
                      }}
                    />

                    <Box flex="1" minW={0}>
                      <Text
                        fontSize={{
                          base: "13px",
                          sm: "14px",
                          md: "15px",
                          lg: "16px",
                        }}
                        fontWeight="600"
                        color="gray.900"
                        lineHeight="1.4"
                        noOfLines={1}
                      >
                        {testimonial.name}
                      </Text>
                      <Text
                        fontSize={{
                          base: "11px",
                          sm: "12px",
                          md: "13px",
                          lg: "14px",
                        }}
                        color="gray.600"
                        lineHeight="1.4"
                        noOfLines={1}
                      >
                        {testimonial.role}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
}
