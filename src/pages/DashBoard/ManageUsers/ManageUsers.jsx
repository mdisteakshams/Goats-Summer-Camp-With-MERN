import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (eachUser) => {
    fetch(`https://summer-camp-server-psi-nine.vercel.app/users/admin/${eachUser._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `The User role has been changed to Admin. From Now, ${eachUser.name} is an Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (eachUser) => {
    fetch(`https://summer-camp-server-psi-nine.vercel.app/users/instructor/${eachUser._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `The User role has been changed to Instructor. From Now, ${eachUser.name} is an Instructor!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full ms-12 my-10">
      <Helmet>
        <title>Goat's Summer Camp | Manage Users</title>
      </Helmet>
      <h3 className="text-4xl text-orange-500 mb-5 text-center font-semibold">Total Users: {users.length}</h3>
      
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((eachUser, index) => (
              <tr key={eachUser._id}>
                <th>{index + 1}</th>
                <td>{eachUser.name}</td>
                <td>{eachUser.email}</td>
                <td className="text-center">
                  {eachUser.role === "admin" ? (
                    "Admin"
                  ) : eachUser.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <div>
                      <button
                        onClick={() => handleMakeAdmin(eachUser)}
                        className="btn btn-ghost bg-red-600 text-white"
                      >
                        Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(eachUser)}
                        className="btn btn-ghost bg-green-500 text-white ms-4"
                      >
                        Instructor
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

export default ManageUsers;
