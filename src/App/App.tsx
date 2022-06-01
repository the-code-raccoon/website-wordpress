import { Title, TitleContainer, Page, SubHeader, Section } from "./App-style";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

import "./App.css";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme themeMode={themeMode}>
      <Page>
        <Header toggleThemeMode={toggleThemeMode} />
        <Container fluid="lg">
          <Row>
            <Col className="my-5">
              <Title>
                Hi, I'm <span>Francesca Ho</span> and I'm a
                <span> Full-Stack Web Developer</span>
              </Title>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <SubHeader>
                I'm currently looking for work and open for projects!
              </SubHeader>
            </Col>
          </Row>
          <Row>
            <SubHeader>Featured Works</SubHeader>
          </Row>
          <Row>
            <FeaturedWork />
          </Row>
        </Container>
      </Page>
    </Theme>
  );
}
