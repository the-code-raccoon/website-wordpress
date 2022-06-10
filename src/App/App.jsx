import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import Contact from "./Contact";
import Footer from "./Footer";

import Background from "./Background";

import { Element } from "react-scroll";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";

export default function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div
        className=" w-[200vw] bg-[#78A7FF] transition ease-in-out dark:bg-[#38285c]"
        onWheel={(e) => {
          document.scrollingElement.scrollLeft += e.deltaY * 2.5;
        }}
      >
        <Header />
        <div className="flex h-[100vh] items-center">
          <div className="z-10 flex w-[100vw] justify-center">
            <div className="w-[70%] text-left">
              <h1 className="text-7xl text-slate-900 dark:text-white">
                Hi, I'm <span className="text-bleu">Francesca Ho</span> and I'm
                a<span className="text-maroon"> Full-Stack Web Developer</span>
                <span className="inline-block animate-cursor-blink bg-maroon text-6xl text-transparent">
                  {"|"}
                </span>
              </h1>
              <h1 className="font-minecraft text-3xl text-slate-900 dark:text-white">
                I'm currently looking for work and open for projects!
              </h1>
            </div>
          </div>

          <div className="z-10 w-[100vw]">
            <FeaturedWork />
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
