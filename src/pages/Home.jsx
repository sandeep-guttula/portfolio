import bgsvg from "../assets/backgroundBlurs.svg";
const Home = () => {
  const angle = ">";
  const text = [
    "// complete the game to continue",
    "// you can also see it on my Github page",
    "// find my profile on Github:",
  ];

  return (
    <div className="font-fira h-[92%]">
      <img
        src={bgsvg}
        alt=""
        className="fill-[#43D9AD] blur-sm opacity-40 absolute top-0 left-0 w-full h-full"
      />
      <div className="h-full">
        <div className="left h-full flex flex-col justify-evenly items-center w-full lg:w-[50%] ">
          <div className=" h-full flex flex-col justify-evenly items-center">
            <div className=" w-max flex gap-3 flex-col justify-center">
              <span className="text-textWhite font-normal text-base ">
                Hi all. I am
              </span>
              <h1 className="text-textWhite font-normal text-5xl lg:text-6xl">
                Sandeep{" "}
                <span className="lg:hidden">
                  <br />
                </span>{" "}
                Guttula
              </h1>
              <span className="text-textGreen font-normal text-xl">
                {angle} Front-end developer
              </span>
            </div>
            <div className="w-full">
              <div className="w-3/4 pl-16 lg:pl-0 ">
                <p className="hidden lg:flex text-textSecondary  text-xs">
                  {text[0]}
                </p>
                <p className="hidden lg:flex text-textSecondary  text-xs">
                  {text[1]}
                </p>
                <p className="lg:hidden text-textSecondary  text-xs">
                  {text[2]}
                </p>
                <a
                  href="https://github.com/sandeep-guttula"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-textBlue text-[12px]">const </span>
                  <span className="text-textGreen text-[12px]">
                    githubLink{" "}
                  </span>
                  <span className="text-textBrown  text-[12px]">
                    = “https://github.com/sandeep-guttula”
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Home;
