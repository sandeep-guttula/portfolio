import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./Home";
const Layout = () => {
  return (
    <div className="overflow-hidden h-[95%] lg:h-[93%] w-[95%] rounded-lg border border-borderColor bg-primary ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
