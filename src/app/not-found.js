import { Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <Container maxW="var(--content-max-width)" py={20}>
      <Box textAlign="center">
        <Heading as="h1" size="4xl" mb={4} color="brand.500">
          404
        </Heading>
        <Heading as="h2" size="xl" mb={4}>
          Page Not Found
        </Heading>
        <Text fontSize="lg" color="neutral.600" mb={8}>
          The page you are looking for doesn't exist or has been moved.
        </Text>
        <Link href="/home" passHref legacyBehavior>
          <Button as="a" colorScheme="brand" size="lg">
            Go Back Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
