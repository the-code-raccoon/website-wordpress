import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import FeaturedWork from "./FeaturedWork";
import Contact from "./Contact";

import Background from "./Background";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";
import Landing from "./Landing";

export default function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div
        className=" w-[500vw] bg-[#78A7FF] transition ease-in-out dark:bg-[#38285c]"
        onWheel={(e) => {
          document.scrollingElement.scrollLeft += e.deltaY * 2.5;
        }}
      >
        <Header />
        <div className="z-10 flex h-[100vh]">
          <div className="z-10 w-[100vw]" id="landing">
            <Landing />
          </div>

          <div className="z-10 w-[100vw]" id="about">
            <About />
          </div>

          <div className="z-10 w-[100vw]" id="skills">
            <Skills />
          </div>

          <div className="z-10 w-[100vw]" id="featured-works">
            <FeaturedWork />
          </div>

          <div className="z-10 w-[100vw]" id="contact">
            <Contact />
          </div>

          <Background />
        </div>
      </div>
    </ParallaxProvider>
  );
}
