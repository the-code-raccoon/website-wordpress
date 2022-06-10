import Header from "./Header";
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
        <div className="flex h-[100vh] items-center z-10">
          <div
            className="z-10 flex h-[100vh] w-[100vw] justify-center"
            id="landing"
          >
            <div className="w-[70vw] text-left">
              <h1 className="text-1xl mt-[17vh] text-slate-900 dark:text-white lg:text-7xl lg:leading-relaxed">
                Hi, I'm <span className="text-bleu">Francesca Ho</span> and I'm
                a<span className="text-maroon"> Full-Stack Web Developer</span>
                <span className="inline-block animate-cursor-blink bg-maroon text-transparent">
                  {"|"}
                </span>
              </h1>
              <h1 className="font-minecraft text-base text-slate-900 dark:text-white lg:text-3xl">
                I'm currently looking for work and open for projects!
              </h1>
            </div>
          </div>

          <div className="z-10 w-[100vw]" id="about">
            {/* <About /> */}
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
