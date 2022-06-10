export default function Landing() {
  return (
    <div className="z-10 flex h-[100vh] w-[100vw] justify-center text-slate-900 dark:text-white">
      <div className="mt-[17vh] w-[70vw] text-left">
        <h1 className="text-1xl text-slate-900 dark:text-white lg:text-7xl lg:leading-relaxed">
          Hi, I'm <span className="text-purple-600">Francesca Ho</span> and I'm
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
  );
}
