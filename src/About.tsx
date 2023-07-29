import { Box, Container, Heading, List, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import aboutMarkdown from "./about.md?raw";

interface MarkdownProps {
  children: string;
}

const markdownTheme = {
  h1: ({ children }: MarkdownProps) => (
    <Heading as="h1" size="2xl">
      {children}
    </Heading>
  ),
  h2: ({ children }: MarkdownProps) => (
    <Heading as="h2" size="lg" mb=".5rem">
      {children}
    </Heading>
  ),
  p: ({ children }: MarkdownProps) => (
    <>
      <Text>{children}</Text>
      <br />
    </>
  ),
  ul: ({ children }: MarkdownProps) => (
    <List as="ul" listStyleType="none">
      {children}
    </List>
  ),
};

const About = ({ bg }: { bg: string; path: string }) => {
  return (
    <Container as="main" flex={1}>
      {aboutMarkdown.split("---").map((section: string, index) => (
        <Box
          bg={index ? bg : undefined}
          p="1rem"
          mb={index ? "1rem" : undefined}
          borderRadius="10px"
        >
          <ReactMarkdown
            components={ChakraUIRenderer(markdownTheme)}
            children={section}
            skipHtml
          />
        </Box>
      ))}
    </Container>
  );
};

export default About;
