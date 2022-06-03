import { Toggle, Text, Brand } from "./Header-style";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { animateScroll as scroll, scroller } from "react-scroll";

export default function Header(props: any) {
  const { toggleThemeMode } = props;

  return (
    <Navbar expand="sm" fixed="top">
      <Container fluid>
        <Nav.Link onClick={() => scroll.scrollToTop()}>
          <Brand>F. Ho</Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Toggle className="me-auto" toggleThemeMode={toggleThemeMode} />
            <Nav.Link
              onClick={() => {
                scroller.scrollTo("featured-works", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -150,
                });
              }}
            >
              <Text>Work</Text>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scroller.scrollTo("about", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -150,
                });
              }}
            >
              <Text>About</Text>
            </Nav.Link>
            <Nav.Link onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -150,
                });
              }}>
              <Text>Contact</Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
