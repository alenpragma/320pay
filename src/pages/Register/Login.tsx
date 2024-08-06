import { FaLock, FaUser } from "react-icons/fa";
import { images } from "../..";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "../../comonents/Forms/Form";
import InputField from "../../comonents/Forms/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { keyName, keyPassword } from "../../lib/KeyName";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { userInfo } from "../../comonents/ProtectRouter/ProtectRoute";
import Swal from "sweetalert2";

export const validationSchema = z.object({
  username: z.string().min(1, "This field is required."),
  password: z.string().min(1, "This field is required."),
});

const Login = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState<boolean | null>(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formSubmit: SubmitHandler<FieldValues> = (data) => {
    localStorage.setItem(keyName, data.username);
    localStorage.setItem(keyPassword, data.password);
    Navigate(from, { replace: true });
    if (data.name !== userInfo.name && userInfo.password !== data.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username and Password doesn't match",
      });
    } else {
      return Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
    }
  };

  return (
    <div className="flex justify-between items-center w-full px-3 md:w-10/12 mx-auto h-screen overflex-y-auto">
      <div className="flex-1 md:block hidden">
        <img className="w-full h-auto" src={images.loginImage} alt="" />
      </div>
      <div className="flex-1 md:bg-[#fff] bg-[#313fd52b] md:p-0 p-4 md:rounded-none rounded-md">
        <h4 className="text-primary text-[24px] font-semibold">
          Web 320 Payment
        </h4>
        <p className="text-secondary font-semibold ">
          Welcome To Web 320 Payment
        </p>
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            username: "",
            password: "",
          }}
        >
          <div className="space-y-6 mt-8">
            <div className="space-y-1 ">
              <label
                htmlFor="name"
                className="text-[#3e3e3e] font-semibold text-[18px]"
              >
                Username
              </label>
              <div className="relative">
                <InputField
                  name="username"
                  type="text"
                  className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                  placeholder="Enter your user name"
                />
                <FaUser className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
              </div>
            </div>
            <div className="space-y-1 ">
              <label
                htmlFor="password"
                className="text-[#3e3e3e] font-semibold text-[18px]"
              >
                Password
              </label>
              <div className="relative">
                <InputField
                  name="password"
                  type={showPassword ? "password" : "text"}
                  className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                  placeholder="password"
                />
                <FaLock className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={handleShowPassword}
                    className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                ) : (
                  <FaRegEye
                    onClick={handleShowPassword}
                    className="absolute top-2 my-auto right-4 text-slate-500 text-[20px] cursor-pointer"
                  />
                )}
              </div>
            </div>
            <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full">
              Login
            </button>
            <p className="text-secondary text-[14px]">
              Don't have an Account?{" "}
              <Link to="/register" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
