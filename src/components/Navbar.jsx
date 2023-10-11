import ham from "../assets/hamburger.svg";
const Navbar = () => {
  return (
    <nav className="h-12 border-b-1 border-borderColor flex justify-between   items-center px-5">
      <div className="text-textSecondary h-full text-base font-fira flex">
        <span className="flex justify-center items-center px-5 lg:border-r-1 border-borderColor ">
          sandeep-guttula
        </span>
        <ul className="hidden lg:flex h-full justify-between items-center text-textSecondary text-base font-fira">
          <li className="border-r-1 px-5  h-full border-borderColor  flex justify-center items-center">
            _home
          </li>
          <li className="border-r-1 px-5   h-full border-borderColor  flex justify-center items-center">
            _about
          </li>
          <li className="border-r-1 px-5   h-full border-borderColor  flex justify-center items-center">
            _projects
          </li>
        </ul>
      </div>
      <div className="hidden px-5 lg:flex justify-center items-center text-textSecondary font-fira border-l-1 border-borderColor h-full ">
        _contact
      </div>
      <img className="h-6 w-[18px] lg:hidden" src={ham} alt="" />
    </nav>
  );
};

export default Navbar;
