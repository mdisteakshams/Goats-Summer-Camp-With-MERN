import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import MyClasses from "../pages/DashBoard/MyClasses/MyClasses";
import Payment from "../pages/DashBoard/Payment/Payment";
import MyEnrolledClasses from "../pages/DashBoard/MyEnrolledClasses/MyEnrolledClasses";
import Instructors from "../pages/Instructors/Instructors";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes/:category",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "manageusers",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: "addclass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: "manageclass",
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "myclass",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://summer-camp-server-psi-nine.vercel.app/carts/each/${params.id}`)
      },
      {
        path: "myenrolledclasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      }
    ],
  },
  {
    path: '*',
    element: <Error></Error>
  },
]);
