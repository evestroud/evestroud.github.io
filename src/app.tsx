import { ChakraProvider, ColorModeProvider, Heading } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./NavBar";

export function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <NavBar />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}
