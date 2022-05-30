import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  // background: ${(props) => props.theme.bg.default};
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const Toggle = (props: any) => {
  const { toggleThemeMode } = props;
  return <Button onClick={toggleThemeMode}>Switch Theme</Button>;
};

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  // background: blue;
  background: ${(props) => props.theme.bg.default};
  box-sizing: border-box;
`;
