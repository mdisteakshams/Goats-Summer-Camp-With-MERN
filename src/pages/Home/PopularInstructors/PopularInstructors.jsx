import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        Some Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {users.map((each) => (
          <PopularInstructorsCard key={each._id} each={each}></PopularInstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
