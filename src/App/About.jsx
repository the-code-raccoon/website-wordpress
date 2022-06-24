import axios from "axios";
import { useState, useEffect } from "react";

export default function About() {
  const [texts, setTexts] = useState({
    about: "",
    lore: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:10003/wp-json/wp/v2/posts?categories=15")
      .then((res) => {
        setTexts({
          about: res.data[1].content.rendered,
          lore: res.data[0].content.rendered,
        });
      });
  }, []);

  return (
    <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900 dark:text-white">
      <div className="mt-[17vh] flex w-[85%] flex-row text-left">
        <div className="mx-3 w-[80vw] sm:w-[100%]">
          <h1>About</h1>
          <h1
            className="mt-3 text-[0.875rem] leading-relaxed sm:text-[1rem]"
            dangerouslySetInnerHTML={{ __html: texts.about }}
          ></h1>
        </div>
        <div className="mx-3 w-[80vw] sm:w-[100%]">
          <h1>Lore</h1>
          <h1
            className="mt-3 text-[0.875rem] leading-relaxed sm:text-[1rem]"
            dangerouslySetInnerHTML={{ __html: texts.lore }}
          ></h1>
        </div>
      </div>
    </div>
  );
}
