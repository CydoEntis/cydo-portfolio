import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  components: {
    Button: {
      variants: {
        base: {
          bg: "#B7FD00",
          color: "#333",
        },
      },
    },
    Text: {
      variants: {
        base: {
          color: "#333",
        },
      },
    },
    Heading: {
      variants: {
        base: {
          color: "#333",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
