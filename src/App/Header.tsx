import { useState } from "react";

type Mode = "LIGHT" | "DARK";

export default function Header() {
  const [mode, setMode] = useState<Mode>("DARK");

  const navlinks = [
    { element: "about", text: "About" },
    { element: "featured-works", text: "Featured Works" },
    { element: "contact", text: "Contact" },
  ];

  return (
    <nav className="w-100 fixed z-10 z-20 flex flex-row items-center justify-between px-4 py-2">
      <div
        className="flex flex-row hover:cursor-pointer"
        onClick={() => {
          console.log("click");
          const element = document.getElementById("landing");
          if (!element) {
            return;
          }
          element.scrollIntoView();
        }}
      >
        <h1 className="font-bold dark:text-maroon text-purple-700">F. Ho</h1>
      </div>
      <div className="align-center flex flex-row flex-col justify-center text-slate-900 dark:text-white">
        {navlinks.map((link) => {
          return (
            <div
              key={link.text}
              className="mx-3 cursor-pointer text-3xl"
              onClick={() => {
                const element = document.getElementById(link.element);
                if (!element) {
                  return;
                }
                element.scrollIntoView();
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
