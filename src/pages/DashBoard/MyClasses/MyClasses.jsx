import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: user?.email && !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/each?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-full mx-10">
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        History of My Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((each, index) => (
              <tr key={each._id}>
                <td>{index + 1}</td>
                <td>
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
                <td>{each.available_seats}</td>
                <td>{each.price}$</td>
                <td className="text-center">{each.enrollment}</td>
                <td>
                  {each.status}
                </td>
                <td>
                <button className="btn btn-sm btn-warning">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
