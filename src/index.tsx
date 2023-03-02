import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { extendTheme } from "@chakra-ui/react";

const Fonts = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'Press Start 2P', cursive;
        src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Press+Start+2P&family=Roboto:wght@300;400;500&display=swap') format('woff2')
      }
      `}
  />
);
export default Fonts;
const theme = extendTheme({
  fonts: {
    body: `'Press Start 2P', cursive`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
