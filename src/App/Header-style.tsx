import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text.default};
  padding: 0.5em 1.5em;
  font-size 1.5em;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
`;

export const Switch = styled.button`
  color: ${(props) => props.theme.primary.default};
  font-size: 0.75em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.primary.default};;
  border-radius: 3px;
  display: block;
`;

export const Toggle = (props: any) => {
  const { toggleThemeMode } = props;
  return <Switch onClick={toggleThemeMode}>Switch Theme</Switch>;
};
