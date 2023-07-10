import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      return response.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
