import { Box, Container, Heading, Link } from "@chakra-ui/react";

const Projects = ({ bg }: { bg: string; path: string }) => {
  const p = "1rem";
  const my = "1rem";
  const borderRadius = "10px";
  return (
    <Container as="main" flex={1}>
      <Heading>My Projects</Heading>
      <Box as="p" bg={bg} p={p} my={my} borderRadius={borderRadius}>
        <Link href="/projects/scientific-calculator">
          Scientific Calculator
        </Link>
      </Box>{" "}
      <Box
        as="ul"
        bg={bg}
        p={p}
        my={my}
        borderRadius={borderRadius}
        listStyleType="none"
      >
        TODO
      </Box>
    </Container>
  );
};

export default Projects;
