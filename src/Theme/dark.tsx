import Theme from "./theme-interface";

export const dark: Theme = {
  bg: {
    default: "#222222",
    divider: "#F6F7F8",
    border: "#EBECED",
  },
  primary: {
    default: "#B3005C",
    dark: "#661F43"
  },
  secondary: {
    default: "#3F88C5"
  },
  text: {
    default: "#ffffff",
    secondary: "#384047",
    placeholder: "#7C8894",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
