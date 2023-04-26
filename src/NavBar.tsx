import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const Header = ({ bg }: { bg: string }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box as="header" bg={bg} w="100%">
      <Flex justifyContent="space-between" p="1rem">
        <Heading as="h1">Eve Stroud</Heading>
        <IconButton
          icon={<SunIcon />}
          aria-label="Toggle color theme"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Flex as="nav" justifyContent="space-around">
        <Link href="/">About Me</Link>
        <Link>Portfolio</Link>
      </Flex>
    </Box>
  );
};

export default Header;
