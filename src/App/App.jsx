import { SubHeader, Section } from "./App-style";

import { useRef, useEffect } from "react";

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
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div
        className=" w-[200vw] bg-[#87ceeb] transition ease-in-out dark:bg-[#131862]"
        onWheel={(e) => {
          document.scrollingElement.scrollLeft += e.deltaY * 2.5;
        }}
      >
        <Header />
        <div className="flex h-[100vh] items-center justify-center">
          {/* <div className="h-[100vh]"> */}
          <div className="z-10">
            <h1 className="text-7xl text-slate-900 dark:text-white">
              Hi, I'm <span className="text-bleu">Francesca Ho</span> and I'm a
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
          <Background />
        </div>
      </div>
      {/* <Section>
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
          </Row> */}
    </ParallaxProvider>
  );
}
