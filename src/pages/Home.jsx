// import bgsvg from "../assets/backgroundBlurs.svg";
const Home = () => {
  const angle = ">";
  const text = "// find my profile on Github:";
  return (
    <div className="font-fira h-[92%]">
      {/* <img src={bgsvg} alt="" className="fill-[#43D9AD] blur-sm opacity-40 " /> */}
      <div className="h-full">
        <div className="h-full left flex flex-col justify-evenly items-centers w-full px-5">
          <div>
            <span className="text-textWhite font-normal text-base">
              Hi all. I am
            </span>
            <h1 className="text-textWhite font-normal text-6xl">
              Sandeep Guttula
            </h1>
            <span className="text-textGreen font-normal text-xl">
              {angle} Front-end developer
            </span>
          </div>
          <div>
            <p className="text-textSecondary  text-xs">{text}</p>
            <p>
              <span className="text-textBlue text-[12px]">const </span>
              <span className="text-textGreen text-[12px]">githubLink </span>
              <span className="text-textBrown  text-[12px]">
                = “https://github.com/sandeep-guttula”
              </span>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Home;
