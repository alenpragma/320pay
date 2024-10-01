import Swal from "sweetalert2";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import LoaingAnimation from "../../Components/Loading/LoaingAnimation";
import LoadingButton from "../../Components/Loading/LoadingButton";
import { useNavigate } from "react-router-dom";
import { usePostAction } from "../../Actions/PostAction/PostAction";

const PasswordChange = () => {
  const [error, setError] = useState<string>("");
  console.log(error);
  const [newPasswordError, setNewPasswordError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const { mutate, isPending } = usePostAction("/change-password", reset, () =>
    navigate("/")
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { old_password, new_password, password_confirmation } = data;
    if (old_password === new_password) {
      setError("Old password and new password are same");
      return;
    }
    if (password_confirmation !== new_password) {
      setNewPasswordError("New password and confirmation do not match");
      return;
    }
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update data?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "custom-swal-modal",
      },
    });
    if (result.isConfirmed) {
      mutate(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="gap-2 w-full space-y-6">
        <div className="space-y-1 my-3">
          <p className="text-[#282828] flex items-center gap-2">
            <FaLock /> <span>Old Password</span>
          </p>
          <div className="relative">
            <input
              {...register("old_password", { required: true })}
              type={showPassword ? "text" : "password"}
              className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-400 rounded-md py-1 px-4"
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
              className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-400 rounded-md py-1 px-4"
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
            {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
          </div>
        </div>
        <div className="space-y-1 my-3">
          <p className="text-[#282828] flex items-center gap-2">
            <FaLock /> <span>Confirm New Password</span>
          </p>
          <input
            {...register("password_confirmation", { required: true })}
            type="password"
            className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-400 rounded-md py-1 px-4"
            placeholder="Confirm New Password"
          />
          {newPasswordError && (
            <p className="text-red-500 text-[12px] mt-1">{newPasswordError}</p>
          )}
        </div>
      </div>
      <div className="w-[200px] mt-6 border border-slate-300 rounded-lg">
        {isPending ? (
          <LoaingAnimation size={30} color="#36d7b7" />
        ) : (
          <LoadingButton className="w-full">Change Password</LoadingButton>
        )}
      </div>
    </form>
  );
};

export default PasswordChange;
