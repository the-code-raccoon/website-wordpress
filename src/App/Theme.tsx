import React from "react";
import { ThemeProvider } from "styled-components";

import { light } from "../Theme/light";
import { dark } from "../Theme/dark";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export default function Theme(props: any) {
  return (
    <ThemeProvider theme={props.themeMode === "dark" ? dark : light}>
      {props.children}
    </ThemeProvider>
  );
}
