import { FaUser } from "react-icons/fa";
import { images } from "../..";
import { SubmitHandler } from "react-hook-form";
import Form from "../../comonents/Forms/Form";
import InputField from "../../comonents/Forms/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PuffLoader } from "react-spinners";
import { useState } from "react";
import { Link } from "react-router-dom";

export const validationSchema = z.object({
  email: z.string().min(1, "This field is required."),
});

const ResetPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-between items-center w-full px-3 md:w-10/12 mx-auto h-screen overflex-y-auto">
      <div className="flex-1 md:block hidden">
        <img className="w-full h-auto" src={images.loginImage} alt="" />
      </div>
      <div className="flex-1">
        <div className="md:bg-[#fff] bg-[#313fd52b] md:p-0 p-4 md:rounded-none rounded-md md:w-3/4 w-full mx-auto">
          <img className="w-32 h-10" src={images.logo} alt="" />
          <h4 className="text-primary text-[24px] font-semibold my-2">
            Forgot Password
          </h4>
          <Form
            onSubmit={formSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <div className=" mt-8">
              <div className="space-y-3 my-5">
                <label
                  htmlFor="name"
                  className="text-[#3e3e3e] font-semibold text-[18px]"
                >
                  email
                </label>
                <div className="relative">
                  <InputField
                    name="email"
                    type="text"
                    className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                    placeholder="Enter Your Email"
                  />
                  <FaUser className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
                </div>
              </div>
              <Link to="/password-reset/password-otp" className="mt-5">
                <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full">
                  Next
                </button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
