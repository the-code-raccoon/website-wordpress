export default function Contact() {

  const svg = "ml-3 w-[30px] sm:w-[40px]"

  return (
    <div className="z-10 flex h-[100vh] w-[100%] justify-center text-slate-900 dark:text-white">
      <div className="mt-[17vh] flex w-[85%] h-[50vh] flex-col text-center justify-between">
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <h1 className="text-base sm:text-2xl leading-loose">
            Please feel free to contact me via email at
          </h1>
        </div>
        <div className="mx-auto">
          <a
            href="mailto:francesca.ho459@gmail.com"
            className="text-black no-underline"
          >
            <button className="delay-80 flex rounded-md bg-white py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-purple-300">
              <h1 className="text-sm sm:text-2xl">francesca.ho459@gmail.com</h1>
              <svg
                className={svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
            </button>
          </a>
        </div>
        <div>
          <h1 className="text-base sm:text-2xl leading-loose">or on my socials on</h1>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto justify-center content-center">
          <div className="mx-auto mb-6 sm:mx-3">
            <a
              href="https://github.com/the-code-raccoon"
              target="_blank"
              rel="noreferrer"
              className="text-black no-underline"
            >
              <button className="delay-80 flex rounded-md bg-slate-500 py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-400">
                <h1 className="text-base sm:text-2xl">Github</h1>
                <svg
                  className={svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="sm:mx-3">
            <a
              href="https://www.linkedin.com/in/francesca-h-111714174/"
              target="_blank"
              rel="noreferrer"
              className="text-black no-underline transition hover:text-purple-500"
            >
              <button className="delay-80 flex rounded-md bg-[#0072b1] py-3 px-4 text-center shadow transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-500">
                <h1 className="text-base sm:text-2xl">Linkedin</h1>
                <svg
                  className={svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
