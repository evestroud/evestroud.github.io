import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

const Projects = ({ bg }: { bg: string; path: string }) => {
  // TODO take children and generate cards

  const p = "1rem";
  const my = "1rem";
  const borderRadius = "10px";
  return (
    <Container as="main" flex={1}>
      <Heading>My Projects</Heading>
      <Card bg={bg} p={p} my={my} borderRadius={borderRadius}>
        <CardHeader>
          <Flex justifyContent="space-between">
            <Heading as="h3" size="md" mb="1">
              Scientific Calculator
            </Heading>
            <Link color="blue.500" href="/projects/scientific-calculator">
              View Project
            </Link>
          </Flex>
          <Text mb="1">
            A scientific calculator written in TypeScript and Preact
          </Text>
        </CardHeader>
        <CardBody>
          Uses a recursive descent parser to evaluate expressions entered by the
          user. Inspired by the Texas Instruments TI-30XIIS.
        </CardBody>
      </Card>
      <Card bg={bg} p={p} my={my} borderRadius={borderRadius}>
        TODO
      </Card>
    </Container>
  );
};

export default Projects;
