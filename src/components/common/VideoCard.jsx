"use client";
import { Box, Text, Heading } from "@chakra-ui/react";
import { LuPlay } from "react-icons/lu";
import { useState, useRef } from "react";

export default function VideoCard({ video, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Box
      position="relative"
      height={{ base: "400px", md: "500px" }}
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
      }}
    >
      {/* Video Element */}
      <Box
        as="video"
        ref={videoRef}
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        poster={video.thumbnail}
        muted
        loop
        playsInline
        preload="none"
        loading="lazy"
      >
        <source src={video.src} type="video/mp4" />
      </Box>

      {/* Dark Gradient Overlay */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.800, transparent 50%, blackAlpha.300)"
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
        w="72px"
        h="72px"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.3s"
        opacity={isHovered ? 0 : 1}
      >
        <Box as={LuPlay} color="white" boxSize={8} ml={1} />
      </Box>

      {/* Content at Bottom */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={{ base: 6, md: 8 }}
        zIndex={2}
      >
        <Heading
          as="h3"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="600"
          color="white"
          mb={2}
        >
          {video.title}
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
          {video.subtitle}
        </Text>
      </Box>
    </Box>
  );
}
