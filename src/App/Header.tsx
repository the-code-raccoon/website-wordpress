import { Toggle, Text } from "./Header-style";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header(props: any) {
  const { toggleThemeMode } = props;

  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home" className="align-items-center">
          <Text>F. Ho</Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Toggle className="me-auto" toggleThemeMode={toggleThemeMode} />
            <Nav.Link href="#work">
              <Text>Work</Text>
            </Nav.Link>
            <Nav.Link href="#about">
              <Text>About</Text>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Text>Contact</Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
