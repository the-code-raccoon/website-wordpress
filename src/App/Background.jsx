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

  const root = "relative w-[300vw]"
  const artist = "fixed right-[10px] bottom-[10px] z-10 text-right"
  const layer = "absolute top-0 bottom-0 h-[100vh]"

  return (
    <div>
      <a
        target="_blank"
        href="https://aethrall.itch.io/"
        className={artist}
      >
        Art by Aethrall
      </a>
      <div className={root} ref={target}>
        <div
          style={{ backgroundImage: `url(${imageBg})`, left: 0, right: 0 }}
          className={layer}
        />
        <div
          style={{
            backgroundImage: `url(${imageFar})`,
            left: 0,
            right: 0,
          }}
          className={layer}
        />
        <div
          style={{
            backgroundImage: `url(${imageMid})`,
            left: midExtend,
            right: midExtend,
          }}
          className={layer}
          ref={mid.ref}
        />
        <div
          style={{
            backgroundImage: `url(${imageClose})`,
            left: closeExtend,
            right: closeExtend,
          }}
          className={layer}
          ref={close.ref}
        />
      </div>
    </div>
  );

  // return (
  //   <Parallax
  //     translateY={["-100px", "200px"]}
  //     translateX={["-500px", "500px"]}
  //     speed={5}
  //   >
  //     <div className="h-20 w-20 bg-orange-500" />
  //   </Parallax>
  // );
}
