import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(getRandomColor());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#54d1b8]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <div className="">
                <div className="text-xl mt-3 ms-3 text-white">Welcome Back to Admin's Dashboard </div>
                <motion.h1 className="text-xl mt-3 ms-3" style={{ color: textColor }}>
                  {user.displayName}
                </motion.h1>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink className="text-lg" to="/">
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/addItem">Add an Item</NavLink>
              </li> */}
              <li>
                <NavLink className="text-lg" to="/dashboard/manageclass">
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/manageusers">
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <div className="">
                <div className="text-xl mt-3 ms-3 text-white">Welcome Back to Instructor's Dashboard </div>
                <motion.h1 className="text-xl mt-3 ms-3" style={{ color: textColor }}>
                  {user.displayName}
                </motion.h1>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink className="text-lg" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/addclass">
                  Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/myclass">
                  My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <div className="">
                <div className="text-xl mt-3 ms-3 text-white">Welcome Back to Students's Dashboard </div>
                <motion.h1 className="text-xl mt-3 ms-3" style={{ color: textColor }}>
                  {user.displayName}
                </motion.h1>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink className="text-lg" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/paymenthistory">
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/mycart">
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/myenrolledclasses">
                  My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
