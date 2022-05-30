import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.text.default};
`;

export const Links = styled.div`
  display: flex;
`;
