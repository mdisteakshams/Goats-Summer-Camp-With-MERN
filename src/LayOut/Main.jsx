import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
  const location = useLocation();
  const withoutHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  const withoutBanner =
    location.pathname.includes("classes/Piano") ||
    location.pathname.includes("instructors") ||
    location.pathname.includes("login") ||
    location.pathname.includes("signup");
  return (
    <div>
      {withoutHeaderFooter || <Navbar></Navbar>}
      {withoutBanner || <Banner></Banner>}
      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>

      {withoutHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
