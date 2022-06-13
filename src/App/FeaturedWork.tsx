export default function FeaturedWork() {
  const works = [
    {
      name: "Charcuterie",
      logo: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg",
      bgcolor: "#ffffff",
      description: `An in-restaurant web platform that gives customers a digital menu
      and ordering interface at their fingertips, just by scanning a QR
      code with their phone. Restaurants have a dashboard to manage
      their menu, seated customers and incoming orders.`,
      image:
        "https://raw.githubusercontent.com/robotsch/charcuterie/main/docs/orders.png",
      github:
        "https://raw.githubusercontent.com/robotsch/charcuterie/main/docs/orders.png",
      preview: null,
      stack: `NodeJS, TypeScript, React, MaterialUI, Express, MongoDB, SocketIO`,
      btntext: "black",
    },
    {
      name: "Foodie",
      logo: "https://raw.githubusercontent.com/the-code-raccoon/website/c0fea90a41bf7b8ad4c447bae694010b830499c7/assets/foodie.svg",
      bgcolor: "#DA4167",
      description: `A restaurant ordering pickup app where users can order from a menu, edit their cart, be notified via SMS of their order and look at their past orders. Restaurant can mange incoming orders via SMS.`,
      image:
        "https://raw.githubusercontent.com/robotsch/Foodie/main/docs/landing-page.png",
      github: "https://github.com/robotsch/Foodie",
      preview: "https://lhl-midterm-foodie.herokuapp.com/",
      stack: "NodeJS, Express, jQuery, Bootstrap, PostgreSQL",
      btntext: "black",
    },
    {
      name: "GOTHREAU",
      logo: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/GOTHREAU.svg",
      bgcolor: "#674EA7",
      description: "Portfolio website for the musical artist Gothreau.",
      image:
        "https://raw.githubusercontent.com/the-code-raccoon/the-code-raccoon.github.io/main/src/assets/gothreau.png",
      github: "https://github.com/the-code-raccoon/gothreau",
      preview: null,
      stack: "React, TailwindCSS",
      btntext: "white",
    },
    {
      name: "Interview Scheduler",
      logo: "https://raw.githubusercontent.com/the-code-raccoon/scheduler/main/public/images/logo.png",
      bgcolor: "#222f3e",
      description:
        "Interview Scheduler is a single page application that lets users book, edit and cancel interviews.",
      image:
        "https://raw.githubusercontent.com/the-code-raccoon/scheduler/main/docs/landing.png",
      github: "https://github.com/the-code-raccoon/scheduler",
      preview: null,
      stack: "React, Cypress, StoryBook, Jest",
      btntext: "white",
    },
  ];

  const hidden = (
    <div className="hidden bg-[#222f3e] bg-[#ffffff] bg-[#DA4167] bg-[#674EA7]" />
  );

  return (
    <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900">
      <div className="xl-w-[80%] mt-[10vh] flex w-[90%] justify-center text-center">
        {works.map((work) => {
          return (
            <div
              className="md-w-[30%] mx-3 w-[80%] max-w-[400px]"
              key={work.name}
            >
              <div className="flex h-[80vh] flex-wrap content-between justify-evenly rounded-md bg-slate-200/[0.8] py-4">
                <div className="w-[90%]">
                  <div
                    className={`flex h-[100px] w-[100%] rounded-[10px] bg-[${work.bgcolor}] mx-auto mb-4`}
                  >
                    <img
                      src={work.logo}
                      alt={work.name}
                      className="m-auto w-[80%] transition-[width] ease-in-out hover:w-[90%]"
                    />
                  </div>

                  <img
                    src={work.image}
                    alt={work.name}
                    className="mx-auto w-[350px]"
                  />
                </div>

                <div className="w-[90%]">
                  <h1 className="text-sm">{work.description}</h1>
                </div>

                <div className="w-[90%]">
                  <h1 className="text-sm">Made with: {work.stack}.</h1>
                </div>

                {work.preview && (
                  <a
                    href={work.preview}
                    className="text-black no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className={`bg-[${work.bgcolor}] text-${work.btntext} delay-80 h-[45px] w-[150px] rounded-md pb-1 text-center shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-purple-300`}
                    >
                      View Live
                    </button>
                  </a>
                )}

                <a
                  href={work.github}
                  className="text-black no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className={`bg-[${work.bgcolor}] text-${work.btntext} delay-80 h-[45px] w-[150px] rounded-md pb-1 text-center shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-purple-300`}
                  >
                    GitHub Page
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
