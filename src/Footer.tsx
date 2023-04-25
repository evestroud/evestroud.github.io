import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("purple.100", "purple.800");
  return (
    <Box as="footer" bg={bg}>
      <Heading size="xs" as="h5" textAlign="right" mr="1" p="px">
        © Eve Stroud 2022
      </Heading>
    </Box>
  );
};

export default Footer;
