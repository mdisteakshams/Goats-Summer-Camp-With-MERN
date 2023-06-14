import { Helmet } from "react-helmet-async";
import useClassCart from "../../../hooks/useClassCart";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useClassCart();
  const totalSelectedClassesPrice = cart.reduce(
    (total, each) => each.price + total,
    0
  );

  const handleDeleteClass = (each) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-psi-nine.vercel.app/carts/${each._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your Class has been deleted successfully.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-10">
      <Helmet>
        <title>Goat's Summer Camp | Dashboard</title>
      </Helmet>
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        All of My Selected Classes
      </h2>
      <div className="uppercase font-semibold h-[60px] eachs-center flex justify-evenly mt-8">
        <h2>Total Selected Classes: {cart.length}</h2>
        <h2>Total Price of the Selected Carts: {totalSelectedClassesPrice}$</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((each, index) => (
              <tr key={each._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={each.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{each.name}</td>
                <td>{each.instructor_name}</td>
                <td className="text-end">${each.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(each)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/payment/${each._id}`}>
                    <button className="btn btn-sm btn-warning">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
