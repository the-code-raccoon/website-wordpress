export default function Skills() {
  const frontend = [
    { text: "HTML", link: "html5" },
    { text: "CSS", link: "css3" },
    { text: "SASS", link: "sass" },
    { text: "JavaScript", link: "javascript" },
    { text: "TypeScript", link: "typescript" },
    { text: "React", link: "react" },
    { text: "Bootstrap", link: "bootstrap" },
    { text: "MaterialUI", link: "mui" },
    { text: "TailwindCSS", link: "tailwindcss" },
    { text: "jQuery", link: "jquery" },
  ];
  const backend = [
    { text: "NodeJS", link: "nodedotjs" },
    { text: "JavaScript", link: "javascript" },
    { text: "TypeScript", link: "typescript" },
    { text: "Express", link: "express" },
    { text: "Jest", link: "jest" },
    { text: "StoryBook", link: "storybook" },
    { text: "Cypress", link: "cypress" },
    { text: "MongoDB", link: "mongodb" },
    { text: "PostgreSQL", link: "postgresql" },
    { text: "Python", link: "python" },
    { text: "Java", link: "java" },
    { text: "Ruby", link: "ruby" },
    { text: "Ruby on Rails", link: "rubyonrails" },
  ];
  const misc = [
    { text: "Git", link: "git" },
    { text: "GitHub", link: "github" },
    { text: "Linux", link: "linux" },
    { text: "Figma", link: "figma" },
    { text: "Adobe Illustrator", link: "adobeillustrator" },
    { text: "Adobe Photoshop", link: "adobephotoshop" },
    { text: "Adobe Premiere Pro", link: "adobepremierepro" },
    { text: "Adobe After Effects", link: "adobeaftereffects" },
  ];

  const skills = [
    { text: "Front-End", set: frontend },
    { text: "Back-End", set: backend },
    { text: "Misc", set: misc },
  ];

  return (
    <div className="z-10 flex h-[100vh] w-[100vw] justify-center text-slate-900">
      <div className="mt-[10vh] flex text-center">
        {skills.map(({ text, set }) => {
          return (
            <div key={text} className="mx-3 w-[20vw]">
              <h1 className=" dark:text-white">{text}</h1>
              <div className="flex h-[60vh] flex-wrap content-evenly justify-evenly rounded-md bg-slate-200/[0.5] p-3">
                {set.map(({ text, link }) => {
                  return (
                    <div
                      key={link}
                      className="align-center mx-3 flex h-[100px] flex-col flex-wrap justify-center"
                    >
                      <img
                        className="mx-auto h-[50px] w-[50px]"
                        src={`https://raw.githubusercontent.com/the-code-raccoon/website/816afe171525681bf8d750a425b794358d2ec50d/src/assets/icons/${link}.svg`}
                        alt={text}
                      />
                      <h1 className="text-base">{text}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
