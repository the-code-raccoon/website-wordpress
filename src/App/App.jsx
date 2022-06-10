import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
// import FeaturedWork from "./FeaturedWork";
// import Contact from "./Contact";

import Background from "./Background";

import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";

export default function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div
        className=" w-[400vw] bg-[#78A7FF] transition ease-in-out dark:bg-[#38285c]"
        onWheel={(e) => {
          document.scrollingElement.scrollLeft += e.deltaY * 2.5;
        }}
      >
        <Header />
        <div className="z-10 flex h-[100vh]">
          <div className="z-10 w-[100vw]" id="landing">
            <div
              className="z-10 flex h-[100vh] w-[100vw] justify-center text-slate-900 dark:text-white"
              id="landing"
            >
              <div className="mt-[17vh] w-[70vw] text-left">
                <h1 className="text-1xl text-slate-900 dark:text-white lg:text-7xl lg:leading-relaxed">
                  Hi, I'm <span className="text-purple-600">Francesca Ho</span>{" "}
                  and I'm a
                  <span className="text-maroon"> Full-Stack Web Developer</span>
                  <span className="inline-block animate-cursor-blink bg-maroon text-transparent">
                    {"|"}
                  </span>
                </h1>
                <h1 className="font-minecraft text-base text-slate-900 dark:text-white lg:text-3xl">
                  I'm currently looking for work and open for projects!
                </h1>
              </div>
            </div>
          </div>

          <div className="z-10 w-[100vw]" id="about">
            <About />
          </div>

          <div className="z-10 w-[100vw]" id="skills">
            <Skills />
          </div>

          <div className="z-10 w-[100vw]" id="featured-works">
            {/* <FeaturedWork /> */}
          </div>

          <div className="z-10 w-[100vw]" id="contact">
            {/* <Contact /> */}
          </div>

          <Background />
        </div>
      </div>
    </ParallaxProvider>
  );
}
