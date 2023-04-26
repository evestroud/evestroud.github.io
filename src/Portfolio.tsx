import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Router } from "preact-router";
import Header from "./NavBar";
import Footer from "./Footer";
import About from "./About";

const Portfolio = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const primary = useColorModeValue("purple.100", "purple.800");
  return (
    <Flex bg={bg} flexDir="column" justifyContent="space-between" minH="100vh">
      <Header bg={primary} />
      <Router>
        <About path="/" bg={primary} />
      </Router>
      <Footer bg={primary} />
    </Flex>
  );
};

export default Portfolio;
