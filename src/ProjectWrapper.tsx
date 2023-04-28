import { Box, Container } from "@chakra-ui/react";

const ProjectWrapper = ({ project }: { project: string; path: string }) => {
  return (
    // TODO 'back to projects' link

    <Container as="main" flex={1} display="flex" flexDir="column">
      <Box
        as="iframe"
        src={`https://evestroud.github.io/${project}/`}
        flex="1"
      />
    </Container>
  );
};

export default ProjectWrapper;
