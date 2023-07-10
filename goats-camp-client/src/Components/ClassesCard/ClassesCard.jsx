import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClassCart from "../../hooks/useClassCart";

const ClassesCard = ({ each }) => {
  const {
    name,
    instructor_name,
    image,
    available_seats,
    _id,
    price,
    enrollment,
    status,
  } = each;

  const { user } = useContext(AuthContext);
  const [, refetch] = useClassCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToClasses = (each) => {
    

    if (user && user.email) {
      const cartItem = {
        classesId: _id,
        name,
        instructor_name,
        image,
        available_seats,
        price,
        enrollment,
        email: user.email,
      };
      fetch("https://summer-camp-server-psi-nine.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            const Toast = Swal.mixin({
              toast: true,
              position: "top-center",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "The Class Has been Added Successfully",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Log In to Select Your Desired Classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      {status === 'Approved' ? (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="Shoes" className="h-72" />
            </figure>
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title">Name of The Class : {name}</h2>
              <p>Instructor: {instructor_name}</p>
              <p>Available Seats: {available_seats}</p>
              <p>Enrolled Students: {enrollment}</p>
              <p>Price: {price}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleAddToClasses(each)}
                  className="btn btn-outline border-orange-400 border-0 border-b-4 mt-4 bg-slate-100"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClassesCard;
