import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CreateWallet = (refetch: () => void) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/client/create-address");
      console.log(response);
      if (response?.data?.success === 200) {
        refetch();
        toast.info(response?.data?.message);
        navigate("/dashboard/wallet");
        return;
      }
      return response.data;
    },
  });

  return mutation;
};
