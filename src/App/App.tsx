import { SubHeader, Section } from "./App-style";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import Contact from "./Contact";
import Footer from "./Footer";
import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

import Background from "./Background";

import { Element } from "react-scroll";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <ParallaxProvider>
      <Theme themeMode={themeMode}>
        <div className="bg-slate-200 transition ease-in-out dark:bg-zinc-900">
          <Header toggleThemeMode={toggleThemeMode} />
          <div className="flex h-[100vh] items-center justify-center">
            <div className="max-w-[1000px]">
              <h1
                id="header"
                className="text-7xl text-slate-900 dark:text-white"
              >
                Hi, I'm <span className="text-bleu">Francesca Ho</span> and I'm
                a
                <span className="font-pixel text-maroon">
                  {" "}
                  Full-Stack Web Developer
                </span>
                <span className="inline-block animate-cursor-blink bg-maroon text-6xl text-transparent">
                  {"|"}
                </span>
              </h1>
              <h1 className="font-minecraft text-3xl text-slate-900 dark:text-white">
                I'm currently looking for work and open for projects!
              </h1>
            </div>
          </div>
          <Background />
          <Section>
            <Row>
              <SubHeader>Featured Works</SubHeader>
            </Row>
            <Row>
              <Element name="featured-works">
                <FeaturedWork />
              </Element>
            </Row>
          </Section>
          <Section>
            <Row>
              <SubHeader>About</SubHeader>
            </Row>
            <Row>
              <Element name="about">fdsfdsfksd</Element>
            </Row>
          </Section>
          <Row>
            <SubHeader>Contact Me!</SubHeader>
          </Row>
          <Row>
            <Element name="contact">
              <Contact />
            </Element>
          </Row>
        </div>
        <Footer />
      </Theme>
    </ParallaxProvider>
  );
}
