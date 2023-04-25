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
  const bg = useColorModeValue("lightgray", "darkgray");
  return (
    <Flex bg={bg} justifyContent="space-between" w="100%" p="1rem">
      <Heading>Eve Stroud</Heading>
      <IconButton
        icon={<SunIcon />}
        aria-label="Toggle color theme"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default NavBar;
