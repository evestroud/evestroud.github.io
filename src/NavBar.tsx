import {
  Box,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  const boxBg = useColorModeValue("lightgray", "darkgray");
  return (
    <Box
      bg={boxBg}
      display="flex"
      justifyContent="space-between"
      w="100%"
      p="1rem"
    >
      <Heading>Eve Stroud</Heading>
      <IconButton
        icon={<SunIcon />}
        aria-label="Toggle color theme"
        onClick={toggleColorMode}
      ></IconButton>
    </Box>
  );
};

export default NavBar;
