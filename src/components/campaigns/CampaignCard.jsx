"use client";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function CampaignCard({ imageSrc, alt }) {
  return (
    <Box
      w={{ base: "280px", sm: "320px", md: "360px", lg: "380px" }}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      bg="white"
      cursor="pointer"
      transition="all 0.3s ease"
      flexShrink={0}
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
      }}
    >
      <Box position="relative" width="100%" aspectRatio="16/9">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={90}
          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
        />
      </Box>
    </Box>
  );
}
