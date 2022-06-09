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
    <header className="w-100 fixed flex flex-row justify-between text-white">
      <div
        className="text-5xl font-bold text-orange-500 hover:cursor-pointer dark:text-white"
        onClick={() => scroll.scrollToTop()}
      >
        F. Ho
      </div>
      <div>
        <ul className="flex flex-row">
          {navlinks.map((link) => {
            return (
              <li
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
              </li>
            );
          })}
        </ul>
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
    </header>
  );
}
