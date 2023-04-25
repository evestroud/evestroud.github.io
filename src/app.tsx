import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "./theme";
import Portfolio from "./Portfolio";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Portfolio />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
