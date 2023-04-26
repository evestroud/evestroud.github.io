import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const NavBar = ({ bg }: { bg: string }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" bg={bg} justifyContent="space-between" w="100%" p="1rem">
      <Heading as="h1">Eve Stroud</Heading>
      <IconButton
        icon={<SunIcon />}
        aria-label="Toggle color theme"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default NavBar;
