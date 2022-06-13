import { useParallax } from "react-scroll-parallax";

import imageClose from "../assets/tree-front.png";
import imageMid from "../assets/tree-middle.png";
import imageFar from "../assets/tree-back.png";
import imageBg from "../assets/clouds-top.png";

import { useRef } from "react";

export default function Background() {
  const target = useRef(null);

  const mid = useParallax({
    speed: 60,
    targetElement: target.current,
  });
  const close = useParallax({
    speed: 120,
    targetElement: target.current,
  });

  const midExtend = 50 * 11 * -1;
  const closeExtend = 100 * 11 * -1;

  const root =
    // "absolute w-[500vw] h-[100vh] z-0 overflow-x-hidden overflow-y-hidden";
    "absolute w-[1200vw] sm:w-[885vw] md:w-[810vw] lg:w-[620vw] xl:w-[520vw] h-[100vh] z-0 overflow-x-hidden overflow-y-hidden";
  const layer = "absolute bottom-0 h-[100vh] bg-repeat-x";

  return (
    <div className={root} ref={target}>
      <div
        style={{
          backgroundSize: "40%",
          backgroundImage: `url(${imageBg})`,
          left: 0,
          right: 0,
        }}
        className={layer + " opacity-80 dark:opacity-50"}
      />
      <div
        style={{
          backgroundPosition: "bottom 200px left 0",
          backgroundSize: "auto 200px",
          backgroundImage: `url(${imageFar})`,
          left: 0,
          right: 0,
        }}
        className={layer + " dark:brightness-50"}
      />
      <div
        style={{
          backgroundPosition: "bottom 95px left 0",
          backgroundSize: "auto 250px",
          backgroundImage: `url(${imageMid})`,
          left: midExtend,
          right: midExtend,
        }}
        className={layer + " dark:brightness-50"}
        ref={mid.ref}
      />
      <div
        style={{
          backgroundPosition: "bottom left 0",
          backgroundSize: "auto 300px",
          backgroundImage: `url(${imageClose})`,
          left: closeExtend,
          right: closeExtend,
        }}
        className={layer + " dark:brightness-50"}
        ref={close.ref}
      />
    </div>
  );
}
