import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./NavBar";

export function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <Flex>
            <NavBar />
          </Flex>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}
