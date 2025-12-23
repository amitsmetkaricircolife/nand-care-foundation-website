import { Container as ChakraContainer } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
  return (
    <ChakraContainer
      maxW="var(--content-max-width)"
      px={{ base: 6, md: 8, lg: 12 }}
      {...props}
    >
      {children}
    </ChakraContainer>
  );
}
