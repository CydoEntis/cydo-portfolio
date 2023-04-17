import {
  ChakraBaseProvider,
  StyleFunctionProps,
  cookieStorageManagerSSR,
  extendTheme,
  localStorageManager,
} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import React from "react";

type Props = {
  cookies?: string;
  children: React.ReactNode;
};

function ThemeHandler({ cookies, children }: Props) {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          color: mode('#333', '#FFF')(props),
          bg: mode("#fff", "#0C0C0C")
        }
      })
    },
    config,
    breakpoints,
  });

  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraBaseProvider>
  );
}

export default ThemeHandler;
