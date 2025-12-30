"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { LuPlay } from "react-icons/lu";

const MotionBox = motion(Box);

export default function VideoCard({ video, priority = false }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <MotionBox
      position="relative"
      borderRadius={{
        base: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
      }}
      overflow="hidden"
      bg="black"
      cursor="pointer"
      height={{
        base: "280px",
        sm: "320px",
        md: "400px",
        lg: "450px",
        xl: "500px",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      }}
      transition={{ duration: 0.3 }}
      onClick={handlePlay}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail */}
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
            quality={85}
            loading={priority ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{
              objectFit: "cover",
            }}
          />

          {/* Gradient Overlay */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-b, transparent 50%, blackAlpha.800)"
            zIndex={1}
          />

          {/* Play Button */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
            bg="whiteAlpha.300"
            backdropFilter="blur(10px)"
            borderRadius="full"
            w={{
              base: "56px",
              sm: "60px",
              md: "64px",
              lg: "72px",
            }}
            h={{
              base: "56px",
              sm: "60px",
              md: "64px",
              lg: "72px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid"
            borderColor="whiteAlpha.600"
            transition="all 0.3s"
            _hover={{
              bg: "whiteAlpha.500",
              borderColor: "white",
              transform: "translate(-50%, -50%) scale(1.1)",
            }}
          >
            <Box
              as={LuPlay}
              boxSize={{
                base: 6,
                sm: 7,
                md: 7,
                lg: 8,
              }}
              color="white"
              ml={1}
            />
          </Box>

          {/* Video Info */}
          <VStack
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={{
              base: 4,
              sm: 4,
              md: 5,
              lg: 6,
            }}
            align="flex-start"
            gap={{
              base: 1,
              md: 1.5,
            }}
            zIndex={2}
          >
            <Heading
              as="h3"
              fontSize={{
                base: "14px",
                sm: "15px",
                md: "16px",
                lg: "18px",
                xl: "20px",
              }}
              fontWeight="600"
              color="white"
              lineHeight="1.3"
              noOfLines={2}
            >
              {video.title}
            </Heading>
            <Text
              fontSize={{
                base: "11px",
                sm: "12px",
                md: "13px",
                lg: "14px",
              }}
              color="whiteAlpha.900"
              lineHeight="1.4"
              noOfLines={1}
            >
              {video.subtitle}
            </Text>
          </VStack>
        </>
      ) : (
        <Box
          as="video"
          src={video.src}
          controls
          autoPlay
          w="100%"
          h="100%"
          style={{ objectFit: "cover" }}
        />
      )}
    </MotionBox>
  );
}
