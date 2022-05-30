export default interface Theme {
  bg: {
    default: string;
    divider: string;
    border: string;
  };
  primary: {
    default: string;
    dark: string;
  };
  secondary: {
    default: string;
  };
  text: {
    default: string;
    secondary: string;
    placeholder: string;
  };
  fontSizes: {
    small: "1em";
    medium: "2em";
    large: "3em";
  };
  fontWeight: {
    light: 300;
    regular: 400;
    medium: 500;
    semibold: 600;
    bold: 700;
  };
}
