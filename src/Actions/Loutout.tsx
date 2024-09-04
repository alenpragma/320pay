// import { useNavigate } from "react-router-dom";
import { removePaymentaToken } from "../hooks/handelAuthToken";
import Swal from "sweetalert2";

export const handleLogOut = () => {
//   const navigate = useNavigate();
  Swal.fire({
    text: "Are you sure to logout?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
    cancelButtonText: "Cancel",
    customClass: {
      popup: "custom-swal-modal",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      removePaymentaToken();
    //   navigate("/login");
    }
  });
};
