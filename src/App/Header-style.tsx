import styled from "styled-components";

import Button from "react-bootstrap/Button";

export const Switch = styled.button`
  color: ${(props) => props.theme.primary.default};
  background-color: ${(props) => props.theme.bg.default}
  font-size: 0.75em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.primary.default};
  border-radius: 3px;
  display: block;
`;

export const Toggle = (props: any) => {
  const { toggleThemeMode } = props;
  return <Switch onClick={toggleThemeMode}>Switch Theme</Switch>;
  // return <Button onClick={toggleThemeMode}>Switch Theme</Button>;
};

export const Text = styled.span`
  color: ${(props) => props.theme.text.default};
  font-size 1.5em;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  padding: 1.3em;
`;
