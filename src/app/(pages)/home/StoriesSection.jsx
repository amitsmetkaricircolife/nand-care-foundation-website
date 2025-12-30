"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Icon,
} from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionLink = motion(Link);

// Lazy load VideoCard component with responsive skeleton
const VideoCard = dynamic(() => import("@/components/common/VideoCard"), {
  loading: () => (
    <Box
      height={{
        base: "280px",
        sm: "320px",
        md: "400px",
        lg: "450px",
        xl: "500px",
      }}
      borderRadius={{
        base: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
      }}
      bg="gray.200"
      position="relative"
      overflow="hidden"
      _after={{
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        animation: "shimmer 1.5s infinite",
      }}
      sx={{
        "@keyframes shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      }}
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
    <Box
      bg="coral.50"
      py={{
        base: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 20,
      }}
    >
      <Container
        maxW="var(--content-max-width)"
        px={{
          base: 4,
          sm: 6,
          md: 8,
          lg: 12,
        }}
      >
        {/* Section Header - Fully Responsive */}
        <MotionBox
          textAlign="center"
          mb={{
            base: 8,
            sm: 9,
            md: 10,
            lg: 12,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            mb={{
              base: 2,
              sm: 2.5,
              md: 3,
            }}
            lineHeight="1.2"
            px={{
              base: 2,
              sm: 0,
            }}
          >
            See Real Stories of Change
          </Heading>
          <Text
            fontSize={{
              base: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            }}
            color="gray.600"
            lineHeight={{
              base: "1.6",
              md: "1.7",
            }}
            maxW={{
              base: "100%",
              sm: "90%",
              md: "700px",
            }}
            mx="auto"
            px={{
              base: 2,
              sm: 0,
            }}
          >
            Watch how your contributions transform lives and build stronger
            communities
          </Text>
        </MotionBox>

        {/* Video Grid - Responsive Columns */}
        <MotionSimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 2,
            lg: 4,
            xl: 4,
          }}
          gap={{
            base: 5,
            sm: 5,
            md: 6,
            lg: 6,
            xl: 8,
          }}
          mb={{
            base: 6,
            sm: 7,
            md: 8,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stories.map((story, index) => (
            <MotionBox
              key={story.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Suspense
                fallback={
                  <Box
                    height={{
                      base: "280px",
                      sm: "320px",
                      md: "400px",
                      lg: "450px",
                      xl: "500px",
                    }}
                    borderRadius={{
                      base: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "20px",
                    }}
                    bg="gray.200"
                  />
                }
              >
                <VideoCard video={story} priority={index < 2} />
              </Suspense>
            </MotionBox>
          ))}
        </MotionSimpleGrid>

        {/* View More Link - Responsive */}
        <Box textAlign="center">
          <MotionLink
            as={NextLink}
            href="/stories"
            display="inline-flex"
            alignItems="center"
            gap={{
              base: 1.5,
              sm: 2,
            }}
            color="primary.500"
            fontSize={{
              base: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            }}
            fontWeight="600"
            py={{
              base: 2,
              sm: 2.5,
            }}
            px={{
              base: 3,
              sm: 4,
            }}
            borderRadius="8px"
            transition="all 0.2s"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            _hover={{
              color: "primary.600",
              textDecoration: "none",
              bg: "whiteAlpha.600",
            }}
            _active={{
              bg: "whiteAlpha.800",
            }}
          >
            View More Stories
            <Icon
              as={LuArrowRight}
              boxSize={{
                base: 4,
                sm: 4.5,
                md: 5,
              }}
            />
          </MotionLink>
        </Box>
      </Container>
    </Box>
  );
}
