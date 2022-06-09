import { useState } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

type Mode = "LIGHT" | "DARK";

export default function Header(props: any) {
  const [mode, setMode] = useState<Mode>("DARK");

  const navlinks = [
    { element: "about", text: "About" },
    { element: "featured-works", text: "Featured Works" },
    { element: "contact", text: "Contact" },
  ];

  return (
    <nav className="w-100 items-center flex flex-row justify-between px-4 py-2">
      <div
        className="flex flex-row text-5xl font-bold text-orange-500 hover:cursor-pointer dark:text-purple-700"
        onClick={() => scroll.scrollToTop()}
      >
        <h1>F. Ho</h1>
        {/* <button
          className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
          type="button"
        >
          BUTTON
        </button> */}
      </div>
      <div className="align-center flex flex-row flex-col justify-center text-purple-700 dark:text-white">
        {navlinks.map((link) => {
          return (
            <div
              key={link.text}
              className="mx-3 text-3xl"
              onClick={() => {
                scroller.scrollTo(link.element, {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -150,
                });
              }}
            >
              {link.text}
            </div>
          );
        })}
      </div>
      <button
        className="border border-black bg-white px-3 py-1 text-xl text-black"
        onClick={() => {
          const html = document.querySelector("html")!;

          if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            setMode("LIGHT");
          } else {
            html.classList.add("dark");
            setMode("DARK");
          }
        }}
      >
        {mode === "LIGHT" && "Switch to Dark"}
        {mode === "DARK" && "Switch to Light"}
      </button>
    </nav>
  );
}
