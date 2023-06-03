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

const PROJECTS = [
  {
    title: "Scientific Calculator",
    url: "/projects/scientific-calculator",
    subtitle: "A scientific calculator written in TypeScript and Preact",
    description:
      "Uses a recursive descent parser to evaluate expressions entered by the user. Inspired by the Texas Instruments TI-30XIIS.",
  },
  {
    title: "Lisp RS",
    url: "/projects/lisp_rs",
    subtitle: "A simple Lisp interpreter written in Rust",
    description:
      "Originally written to run natively in the command line, this was adapted to run on the web using XTerm.js and WebAssembly.",
  },
];

const Projects = ({ bg }: { bg: string; path: string }) => {
  // TODO take children and generate cards
  const projectCards = PROJECTS.map((project) => (
    <Project {...project} bg={bg} />
  ));

  return (
    <Container as="main" flex={1}>
      <Heading>My Projects</Heading>
      {projectCards}
    </Container>
  );
};

interface ProjectProps {
  title: string;
  subtitle: string;
  url: string;
  description: string;
  bg: string;
}

const Project = ({ title, subtitle, url, description, bg }: ProjectProps) => {
  const p = "1rem";
  const my = "1rem";
  const borderRadius = "10px";

  return (
    <>
      <Card bg={bg} p={p} my={my} borderRadius={borderRadius}>
        <CardHeader>
          <Flex justifyContent="space-between">
            <Heading as="h3" size="md" mb="1">
              {title}
            </Heading>
            <Link color="blue.500" href={url}>
              View Project
            </Link>
          </Flex>
          <Text mb="1">{subtitle}</Text>
        </CardHeader>
        <CardBody>{description}</CardBody>
      </Card>
    </>
  );
};

export default Projects;
