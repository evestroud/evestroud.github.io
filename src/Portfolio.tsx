import { Flex, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Portfolio = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Flex bg={bg} flexDir="column" justifyContent="space-between" minH="100vh">
      <NavBar />
      <Footer />
    </Flex>
  );
};

export default Portfolio;
