import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = ({ bg }: { bg: string; path: string }) => {
  const p = "1rem";
  const my = "1rem";
  const borderRadius = "10px";
  return (
    <Container as="main" flex={1}>
      <Heading>Hi, I'm Eve!</Heading>
      <Box as="p" bg={bg} p={p} my={my} borderRadius={borderRadius}>
        <Text marginBottom="1rem">
          I'm a software engineer, trained at Ada Developer's Academy and
          currently interning with SAP Concur! I'm passionate about programming,
          especially functional programming and type systems.
        </Text>
        <Text>
          This page is still a work in progress since I've been more focused on
          my internship and getting my portfolio projects presentable but I hope
          to polish it up soon!
        </Text>
      </Box>
      <Box
        as="ul"
        bg={bg}
        p={p}
        my={my}
        borderRadius={borderRadius}
        listStyleType="none"
      >
        <li>
          Technical Skills: Functional and Object Oriented Programming, Unit and
          Integration testing, API Design
        </li>
        <li>
          Languages: Python, JavaScript, TypeScript, HTML/CSS, Scheme, Rust, SQL
        </li>
        <li>
          Frameworks/Technologies: Git, React, Flask, GraphQL, Cypress, Firebase
        </li>
      </Box>
    </Container>
  );
};

export default About;
