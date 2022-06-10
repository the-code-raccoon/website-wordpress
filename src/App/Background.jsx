import { Parallax, useParallax } from "react-scroll-parallax";

import imageClose from "../assets/tree-front.png";
import imageMid from "../assets/tree-middle.png";
import imageFar from "../assets/tree-back.png";
import imageBg from "../assets/clouds.png";

import { useRef } from "react";

export default function Background() {
  const target = useRef(null);

  const mid = useParallax({
    speed: 50,
    targetElement: target.current,
  });
  const close = useParallax({
    speed: 100,
    targetElement: target.current,
  });

  const midExtend = 50 * 5 * -1;
  const closeExtend = 100 * 5 * -1;

  const root = "absolute w-[200vw] h-[100vh] z-0 overflow-x-hidden";
  const layer = "absolute bottom-0 h-[100vh] bg-repeat-x";

  return (
    <div className={root} ref={target}>
      {/* <div
        style={{
          backgroundSize: "50%",
          backgroundImage: `url(${imageBg})`,
          left: 0,
          right: 0,
        }}
        className={layer + " bg-repeat-y"}
      /> */}
      <div
        style={{
          backgroundPositionY: "bottom 200px",
          backgroundSize: "auto 200px",
          backgroundImage: `url(${imageFar})`,
          left: 0,
          right: 0,
        }}
        className={layer}
      />
      <div
        style={{
          backgroundPositionY: "bottom 95px",
          backgroundSize: "auto 250px",
          backgroundImage: `url(${imageMid})`,
          left: midExtend,
          right: midExtend,
        }}
        className={layer}
        ref={mid.ref}
      />
      <div
        style={{
          backgroundPositionY: "bottom",
          backgroundSize: "auto 300px",
          backgroundImage: `url(${imageClose})`,
          left: closeExtend,
          right: closeExtend,
        }}
        className={layer}
        ref={close.ref}
      />
    </div>
  );
}
