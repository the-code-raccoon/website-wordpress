import { useState } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

type Mode = "LIGHT" | "DARK";

export default function Header() {
  const [mode, setMode] = useState<Mode>("DARK");

  const navlinks = [
    { element: "about", text: "About" },
    { element: "featured-works", text: "Featured Works" },
    { element: "contact", text: "Contact" },
  ];

  return (
    <nav className="w-100 absolute z-10 flex flex-row items-center justify-between px-4 py-2">
      <div
        className="flex flex-row text-5xl font-bold text-orange-500 hover:cursor-pointer dark:text-purple-700"
        onClick={() => scroll.scrollToTop()}
      >
        <h1>F. Ho</h1>
      </div>
      <div className="align-center flex flex-row flex-col justify-center text-purple-700 dark:text-white">
        {navlinks.map((link) => {
          return (
            <div
              key={link.text}
              className="mx-3 cursor-pointer text-3xl"
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
      <div
        className="flex h-7 w-14 cursor-pointer items-center rounded-full border border-black bg-gray-300 p-1"
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
        <div
          className={
            "h-5 w-5 rounded-full bg-purple-900 shadow-md transition ease-in-out " +
            (mode === "DARK" ? "" : " translate-x-6 transform")
          }
        ></div>
      </div>
    </nav>
  );
}
