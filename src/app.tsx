import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <Flex flexDir="column" justifyContent="space-between" minH="100vh">
            <NavBar />
            <Footer />
          </Flex>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}
