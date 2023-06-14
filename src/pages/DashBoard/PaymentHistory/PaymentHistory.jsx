import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payment = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: user?.email && !loading,

    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-full mx-10">
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        Payment History of My Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Class</th>
              <th>Price</th>
              <th className="text-center">Transaction Id</th>
              <th>Status</th>
              <th className="text-center">Date of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((each, index) => (
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
                <td>{each.price}$</td>
                <td className="text-center">{each.transactionId}</td>
                <td>Paid</td>
                <td>{each.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
