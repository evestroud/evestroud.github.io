import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("purple.100", "purple.800");
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
