"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load VideoCard component
const VideoCard = dynamic(() => import("@/components/common/VideoCard"), {
  loading: () => (
    <Box
      height={{ base: "400px", md: "500px" }}
      borderRadius="2xl"
      bg="gray.200"
      animate="pulse"
    />
  ),
  ssr: false,
});

export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      src: "/videos/stories/Sample1.mp4",
      thumbnail: "/videos/thumbnails/Sample1.png",
      title: "Meet Sarah's Story",
      subtitle: "How education changed everything",
    },
    {
      id: 2,
      src: "/videos/stories/Sample2.mp4",
      thumbnail: "/videos/thumbnails/Sample2.png",
      title: "Community Impact",
      subtitle: "Your donation's ripple effect",
    },
    {
      id: 3,
      src: "/videos/stories/Sample3.mp4",
      thumbnail: "/videos/thumbnails/Sample3.png",
      title: "Dreams Realized",
      subtitle: "From struggle to success",
    },

    {
      id: 4,
      src: "/videos/stories/Sample3.mp4",
      thumbnail: "/videos/thumbnails/Sample3.png",
      title: "Hope Restored",
      subtitle: "See the transformation",
    },
  ];

  return (
    <Box bg="coral.50" py={{ base: 12, md: 16, lg: 20 }}>
      <Container
        maxW="var(--content-max-width)"
        px={{ base: 6, md: 8, lg: 12 }}
      >
        <Box textAlign="center" mb={{ base: 10, md: 12 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="gray.900"
            mb={3}
          >
            See Real Stories of Change
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Watch how your contributions transform lives and build stronger
            communities
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          gap={{ base: 6, md: 8 }}
          mb={8}
        >
          {stories.map((story) => (
            <Suspense
              key={story.id}
              fallback={
                <Box
                  height={{ base: "400px", md: "500px" }}
                  borderRadius="2xl"
                  bg="gray.200"
                />
              }
            >
              <VideoCard video={story} />
            </Suspense>
          ))}
        </SimpleGrid>

        <Box textAlign="center">
          <Link
            as={NextLink}
            href="/stories"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="primary.500"
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="600"
            _hover={{
              color: "primary.600",
              textDecoration: "none",
            }}
            transition="all 0.2s"
          >
            View More Stories
            <Box as={LuArrowRight} boxSize={5} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
