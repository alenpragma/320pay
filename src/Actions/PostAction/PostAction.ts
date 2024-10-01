import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axiosConfig";

export const usePostAction = (
  url: string,
  handleModal?: (e: any) => void,
  reset?: () => void,
  navigate?: (e: any) => void
) => {
  const mutation = useMutation({
    mutationFn: async (postData: FieldValues) => {
      const response = await axiosInstance.post(url, postData);
      console.log(response);
      return response;
    },
    onSuccess: (data) => {
      try {
        if (data) {
          Swal.fire({
            title: "Successfully",
            icon: "success",
            customClass: {
              popup: "custom-swal-modal",
            },
          });
          reset?.();
          navigate?.("/");
          handleModal?.("");
        }
      } catch (error) {
        console.error("Error during success handling:", error);
      }
    },
    onError: () => {
      Swal.fire({
        text: "Something went wrong",
        icon: "warning",
        customClass: {
          popup: "custom-swal-modal",
        },
      });
    },
  });

  return mutation;
};
