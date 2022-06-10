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
  const design = [
    { text: "Figma", link: "figma" },
    { text: "Adobe Illustrator", link: "adobeillustrator" },
    { text: "Adobe Photoshop", link: "adobephotoshop" },
    { text: "Adobe Premiere Pro", link: "adobepremierepro" },
    { text: "Adobe After Effects", link: "adobeaftereffects" },
  ];
  const system = [
    { text: "Git", link: "git" },
    { text: "GitHub", link: "github" },
    { text: "Linux", link: "linux" },
  ];

  return (
    <div className="z-10 flex h-[100vh] w-[100vw] justify-center text-slate-900 dark:text-white">
      <div className="mt-[17vh] w-[70vw] text-left">
        <h1>Skills</h1>
        <div className="flex w-[30vw] min-w-[300px]">
          <h1>Back-End</h1>
          {backend.map(({ text, link }) => {
            return (
              <div
                key={link}
                className="align-center flex flex-col justify-center rounded-md border-4 border-slate-900"
              >
                <img
                  className="mx-auto w-[50px] h-[50px]"
                  src={`https://raw.githubusercontent.com/the-code-raccoon/website/f199ef1d2b791076cdc129297dfc465918149734/src/assets/icons/${link}.svg`}
                  alt={text}
                />
                <h1 className="text-base">{text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
