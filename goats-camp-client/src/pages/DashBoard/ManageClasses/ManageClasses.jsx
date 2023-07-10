import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();

  const handleApprove = (each) => {
    fetch(`https://summer-camp-server-psi-nine.vercel.app/classes/approve/${each._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `The Class has been Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDecline = (each) => {
    fetch(`https://summer-camp-server-psi-nine.vercel.app/classes/decline/${each._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `The User role has been Declined`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full my-10 ms-5">
       <h3 className="text-4xl text-orange-500 mb-5 text-center font-semibold">Total Classes: {classes.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor email</th>
              <th className="text-center">Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((each, index) => (
              <tr key={each._id}>
                <td>{index + 1}</td>
                <td className="w-auto">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={each.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{each.name}</div>
                    </div>
                  </div>
                </td>
                <td>{each.instructor_name}</td>
                <td>{each.email}</td>
                <td className="text-center">{each.available_seats}</td>
                <td className="">${each.price}</td>
                <td>
                  {each.status === "Approved" ? (
                    "Approved"
                  ) : each.status === "Declined" ? (
                    "Declined"
                  ) : (
                    <div>
                      <button
                        onClick={() => handleApprove(each)}
                        className="btn btn-ghost bg-green-600 text-white"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDecline(each)}
                        className="btn btn-ghost bg-red-600 text-white ms-4"
                      >
                        Decline
                      </button>
                      <button
                        className="btn btn-ghost bg-blue-600 text-white ms-4"
                      >
                        Send FeedBack
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
