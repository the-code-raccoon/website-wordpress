export default function FeaturedWork() {
  const works = [
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg",
      bgcolor: "#ffffff",
    },
    {
      name: "Foodie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/c0fea90a41bf7b8ad4c447bae694010b830499c7/assets/foodie.svg",
      bgcolor: "#DA4167",
    },
    {
      name: "GOTHREAU",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/GOTHREAU.svg",
      bgcolor: "#674EA7",
    },
    {
      name: "Interview Scheduler",
      link: "https://raw.githubusercontent.com/the-code-raccoon/scheduler/main/public/images/logo.png",
      bgcolor: "#222f3e",
    },
  ];

  const hidden = (
    <div className="hidden bg-[#222f3e] bg-[#ffffff] bg-[#DA4167] bg-[#674EA7]" />
  );

  return (
    <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900">
      <div className="xl-w-[80%] mt-[10vh] flex w-[90%] justify-between text-center">
        {/* {works.map(({ name, link, bgcolor }) => {
          return (
            <div
              className={`flex h-[150px] w-[400px] rounded-[20px] bg-[${bgcolor}]`}
            >
              <img
                src={link}
                alt={name}
                className="m-auto w-[300px] transition-[width] ease-in-out hover:w-[350px]"
              />
            </div>
          );
        })} */}
        <div className="md-w-[30%] mx-3 w-[80%] max-w-[400px]">
          <div className="flex h-[75vh] flex-wrap content-evenly justify-evenly rounded-md bg-slate-200/[0.5] p-3">
            <div
              className={`flex h-[150px] w-[400px] rounded-[20px] bg-[${"#ffffff"}]`}
            >
              <img
                src="https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg"
                alt={"Charcuterie"}
                className="m-auto w-[280px] transition-[width] ease-in-out hover:w-[320px]"
              />
            </div>
            <h1 className="text-sm">
              An in-restaurant web platform that gives customers a digital menu
              and ordering interface at their fingertips, just by scanning a QR
              code with their phone. Restaurants have a dashboard to manage
              their menu, seated customers and incoming orders.
            </h1>
            <a
              href="https://google.com"
              className="text-black no-underline"
              target="_blank"
              rel='noreferrer'
            >
              <button
                className={`bg-[${"#ffffff"}] h-[45px] w-[150px] rounded-md pb-1 text-center shadow transition-fontSize ease-in-out hover:text-lg`}
              >
                View Live
              </button>
            </a>
            <a
              href="https://google.com"
              className="text-black no-underline"
              target="_blank"
              rel='noreferrer'
            >
              <button
                className={`bg-[${"#ffffff"}] h-[45px] w-[150px] rounded-md pb-1 text-center shadow transition-fontSize ease-in-out hover:text-lg`}
              >
                GitHub Page
              </button>
            </a>
          </div>
        </div>

        <div className="md-w-[30%] mx-3 w-[80%] max-w-[400px]">
          <div className="flex h-[75vh] flex-wrap content-evenly justify-evenly rounded-md bg-slate-200/[0.5] p-3">
            <div
              className={`flex h-[150px] w-[400px] rounded-[20px] bg-[${"#ffffff"}]`}
            >
              <img
                src="https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg"
                alt={"Charcuterie"}
                className="m-auto w-[300px] transition-[width] ease-in-out hover:w-[350px]"
              />
            </div>
          </div>
        </div>

        <div className="md-w-[30%] mx-3 w-[80%] max-w-[400px]">
          <div className="flex h-[75vh] flex-wrap content-evenly justify-evenly rounded-md bg-slate-200/[0.5] p-3">
            <div
              className={`flex h-[150px] w-[400px] rounded-[20px] bg-[${"#ffffff"}]`}
            >
              <img
                src="https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg"
                alt={"Charcuterie"}
                className="m-auto w-[300px] transition-[width] ease-in-out hover:w-[350px]"
              />
            </div>
          </div>
        </div>

        <div className="md-w-[30%] mx-3 w-[80%] max-w-[400px]">
          <div className="flex h-[75vh] flex-wrap content-evenly justify-evenly rounded-md bg-slate-200/[0.5] p-3">
            <div
              className={`flex h-[150px] w-[400px] rounded-[20px] bg-[${"#ffffff"}]`}
            >
              <img
                src="https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg"
                alt={"Charcuterie"}
                className="m-auto w-[300px] transition-[width] ease-in-out hover:w-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
