import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { images } from "../..";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "../../comonents/Forms/Form";
import InputField from "../../comonents/Forms/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

// const inputFieldSchema = z.object({
//   username: z.string().min(1, "This field is required."),
//   email: z.string().email("This field is required."),
//   password: z.string().min(1, "This field is required."),
//   confirmPassword: z.string().min(1, "This field is required."),
//   checkUser: z.literal(true),
// });


const inputFieldSchema = z.object({
  username: z.string().min(1, "This field is required."),
  email: z.string().email("This field is required."),
  password: z.string().min(1, "This field is required."),
  confirmPassword: z.string().min(1, "This field is required."),
  checkUser: z.literal(true),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords must match',
});

const Register = () => {
  const formSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex justify-between items-center md:w-10/12 px-3 w-full mx-auto h-screen overflow-y-auto">
      <div className="flex-1 md:block hidden">
        <img className="w-full h-auto" src={images.loginImage} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="text-primary text-[24px] font-semibold">
          Web 320 Payment
        </h4>
        <p className="text-secondary font-semibold ">
          Welcome To Web 320 Payment
        </p>
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(inputFieldSchema)}
          defaultValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                htmlFor="email"
                className="text-[#3e3e3e] font-semibold text-[18px]"
              >
                Your E-mail
              </label>
              <div className="relative">
                <InputField
                  name="email"
                  type="email"
                  className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                  placeholder="Enter Your E-Mail"
                />
                <MdEmail className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
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
                  type="password"
                  className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                  placeholder="password"
                />
                <FaLock className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
              </div>
            </div>
            <div className="space-y-1 ">
              <label
                htmlFor="password"
                className="text-[#3e3e3e] font-semibold text-[18px]"
              >
                confirm Password
              </label>
              <div className="relative">
                <InputField
                  name="confirmPassword"
                  type="password"
                  className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pl-10 pr-4"
                  placeholder="password"
                />
                <FaLock className="absolute top-2 my-auto left-4 text-slate-500 text-[18px]" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-5 mt-8 relative">
                <InputField
                  name="checkUser"
                  type="checkbox"
                  className="size-5"
                />
                <p>I Agree To All <span className="text-primary cursor-pointer">Terms & Condition</span></p>
              </div>
              <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full focus:bg-[#251756] transition duration-100">
                Sign Up
              </button>
              <p>
                You Have Al ready a account <Link to="/login" className="text-primary">Sign In</Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
