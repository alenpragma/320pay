import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import { PuffLoader } from "react-spinners";

const ChangePassword = () => {
  const [error, setError] = useState<string>("");
  const [newPasswordError, setNewPasswordError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const { register, handleSubmit, reset, watch } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { old_password, new_password, password_confirmation } = data;
    setLoading(true);

    try {
      if (old_password === new_password) {
        setError("Old password and new password cannot be the same");
        setLoading(false);
        return;
      }

      if (password_confirmation !== new_password) {
        setNewPasswordError("New password and confirmation do not match");
        setLoading(false);
        return;
      }

      const response = await axiosInstance.post("/change-password", data);

      if (response.status === 200) {
        Swal.fire({
          title: "Updated Successfully",
          text: "Your password has been successfully updated",
          icon: "success",
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Opps!",
        text: "Your old password doesn't match",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <div className="pt-5 px-3">
      <h4 className="text-[#282828] text-[20px] font-medium">
        Change Password
      </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <div className="gap-2 md:w-1/2 w-full space-y-8">
            <div className="space-y-1 my-3">
              <p className="text-[#282828] flex items-center gap-2">
                <FaLock /> <span>Old Password</span>
              </p>
              <div className="relative">
                <input
                  {...register("old_password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-[#E2E2E9] rounded-md py-1 px-2"
                  placeholder="Old Password"
                />
                {showPassword === false ? (
                  <FaRegEyeSlash
                    onClick={handleShowPassword}
                    className="absolute top-2 right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                ) : (
                  <FaRegEye
                    onClick={handleShowPassword}
                    className="absolute top-2 right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="space-y-1 my-3">
              <p className="text-[#282828] flex items-center gap-2">
                <FaLock /> <span>New Password</span>
              </p>
              <div className="relative">
                <input
                  {...register("new_password", { required: true })}
                  type={showNewPassword ? "text" : "password"}
                  className="w-full border border-[#E2E2E9] rounded-md py-1 px-2"
                  placeholder="New Password"
                />
                {showNewPassword === false ? (
                  <FaRegEyeSlash
                    onClick={handleNewPassword}
                    className="absolute top-2 right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                ) : (
                  <FaRegEye
                    onClick={handleNewPassword}
                    className="absolute top-2 right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                )}
                {error && (
                  <p className="text-red-500 text-[12px] mt-1">{error}</p>
                )}
              </div>
            </div>
            <div className="space-y-1 my-3">
              <p className="text-[#282828] flex items-center gap-2">
                <FaLock /> <span>Confirm New Password</span>
              </p>
              <input
                {...register("password_confirmation", { required: true })}
                type="password"
                className="w-full border border-[#E2E2E9] rounded-md py-1 px-2"
                placeholder="Confirm New Password"
              />
              {newPasswordError && (
                <p className="text-red-500 text-[12px] mt-1">
                  {newPasswordError}
                </p>
              )}
            </div>
          </div>
          <div className="w-[200px] mt-6 border border-slate-300 rounded-lg">
            {loading ? (
              <div className="w-full">
                <PuffLoader className="mx-auto" color="#36d7b7" size={40} />
              </div>
            ) : (
              <button className="px-5 py-3 rounded-lg bg-primary text-white font-semibold w-full">
                Chenge Password
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

// import React, { useState } from "react";
// import Form from "../../comonents/Forms/Form";
// import { z } from "zod";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import InputField from "../../comonents/Forms/InputField";
// import { FaLock, FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
// import axiosInstance from "../../utils/axiosConfig";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";

// export const validationSchema = z.object({
//   old_password: z.string().min(1, "This field is required"),
//   new_password: z.string().min(1, "This field is required"),
//   password_confirmation: z.string().min(1, "This field is required"),
// });

// const ChangePassword = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [showPassword, setShowPassword] = useState<boolean>(true);
//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const formSubmit: SubmitHandler<any> = async (data) => {
//     console.log(data);
//     return;
//     try {
//       setLoading(true);
//       const response = await axiosInstance.post("/change-password", data);
//       if (response?.status === 200) {
//         Swal.fire({
//           title: "Updated Successfully",
//           text: "Your Password has successfully updated",
//           icon: "success",
//         });
//       }
//     } catch (error) {
//       setLoading(false);
//     }
//   };
//   const handleChange = (data: FieldValues) => {
//     const { old_password, new_password } = data;
//     if (old_password == new_password) {
//       setError("New password can not be same as current password");
//     } else {
//       setError("");
//     }
//   };
//   return (
//     <div className="pt-5 px-3">
//       <h4 className="text-[#282828] text-[20px] font-medium">Edit Profile</h4>
//       <div>
//         <Form
//           onSubmit={formSubmit}
//           resolver={zodResolver(validationSchema)}
//           onChange={handleChange}
//           defaultValues={{
//             name: "",
//             old_password: "",
//             new_password: "",
//             password_confirmation: "",
//           }}
//         >
//           <div className="mt-10">
//             <div className=" gap-2 w-1/2 space-y-8">
//               <div className="space-y-1 my-3 col-span-6">
//                 <p className=" text-[#282828] flex items-center gap-2">
//                   <FaLock /> <span>Current Password</span>
//                 </p>

//                 <div className="relative">
//                   <InputField
//                     name="old_password"
//                     type={showPassword ? "password" : "text"}
//                     className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-2"
//                     placeholder="Old Password"
//                   />
//                   {showPassword ? (
//                     <FaRegEyeSlash
//                       onClick={handleShowPassword}
//                       className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
//                     />
//                   ) : (
//                     <FaRegEye
//                       onClick={handleShowPassword}
//                       className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className="space-y-1 my-3 col-span-6">
//                 <p className=" text-[#282828] flex items-center gap-2">
//                   <FaLock /> <span>New Password</span>
//                 </p>
//                 <div className="relative">
//                   <InputField
//                     name="new_password"
//                     type={showPassword ? "password" : "text"}
//                     className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-2"
//                     placeholder="Old Password"
//                   />
//                   {showPassword ? (
//                     <FaRegEyeSlash
//                       onClick={handleShowPassword}
//                       className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
//                     />
//                   ) : (
//                     <FaRegEye
//                       onClick={handleShowPassword}
//                       className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
//                     />
//                   )}
//                   <p className="text-red-500 text-[12px] mt-1">{error}</p>{" "}
//                 </div>
//               </div>
//               <div className="space-y-1 my-3 col-span-6">
//                 <p className=" text-[#282828] flex items-center gap-2">
//                   <FaLock /> <span>Confirm New Password</span>
//                 </p>
//                 <InputField
//                   name="password_confirmation"
//                   type="password"
//                   className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1  px-2"
//                   placeholder="Retype Password"
//                 />
//               </div>
//             </div>

//             <button className="text-white bg-primary px-4 py-1 rounded-md mt-8">
//               Chenge Password
//             </button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;
