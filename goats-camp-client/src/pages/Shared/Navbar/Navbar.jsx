import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
// import useClassCart from "../../../hooks/useClassCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../../public/logo.png";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  // const [cart] = useClassCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/classes/Piano">Classes</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link
          to={
            isAdmin
              ? "/dashboard/manageusers"
              : isInstructor
              ? "/dashboard/myclass"
              : "/dashboard/mycart"
          }
        >
          DashBoard
        </Link>
      </li>
      {/* {user ? (
        <>
          <button onClick={handleSignOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 sm:flex">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="lg:ms-28 sm:ms-28">

          <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <li>
                <div
                  className="tooltip tooltip-right rounded-box"
                  data-tip={user.displayName}
                >
                  <div className="">
                    <img
                      className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <button onClick={handleSignOut} className="btn btn-ghost">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="btn btn-ghost">Login</button>
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
