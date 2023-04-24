import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <Heading>Eve Stroud</Heading>
      <Button onClick={toggleColorMode}>Toggle</Button>
    </Box>
  );
};

export default NavBar;
