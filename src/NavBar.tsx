import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = ({ bg }: { bg: string }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box as="header" bg={bg} w="100%">
      <Flex justifyContent="space-between" p="1rem">
        <Heading as="h1">Eve Stroud</Heading>
        <Box>
          <Link href="https://github.com/evestroud">
            <IconButton
              aria-label="My GitHub account"
              icon={<Icon as={BsGithub} />}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/evestroud/" marginX="1.5">
            <IconButton
              aria-label="My LinkedIn account"
              icon={<Icon as={BsLinkedin} />}
            />
          </Link>
          <IconButton
            icon={<SunIcon />}
            aria-label={`Toggle ${colorMode} mode`}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
      </Flex>
      <Flex as="nav" justifyContent="space-around">
        <Link href="/">About Me</Link>
        <Link href="/projects">Projects</Link>
      </Flex>
    </Box>
  );
};

export default Header;
