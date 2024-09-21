import { useState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { PuffLoader } from "react-spinners";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "../../Components/Forms/InputField";
import Form from "../../Components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export interface OTPFormInputs {
  otp: string[];
}

export const validationSchema = z.object({
  code: z.string().min(1, "This field is required."),
});

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { confirmationResponsData } = location.state || {};
  console.log(confirmationResponsData, "confirmationResponsData");

  const [loading, setLoading] = useState(false);

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {

    const confirmData = {
      id: confirmationResponsData?.id,
      code: data,
    };
    console.log(confirmData);
    if (!confirmationResponsData?.id) {
      toast.error("data not found");
      return;
    }
    setLoading(true);
    const withdrowResponse = await axiosInstance.post(
      "/client/withdraw-confirm",
      confirmData
    );
    if (withdrowResponse?.data?.success === false) {
      toast.error(withdrowResponse?.data?.msg);
    }

    if (withdrowResponse?.data?.success) {
      toast.success(withdrowResponse?.data?.msg);
      navigate("/dashboard");
    }
    if (withdrowResponse?.data?.error) {
      toast.error(withdrowResponse?.data?.msg);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="md:w-1/2 w-full mx-auto mt-20 border border-slate-300 rounded-lg">
      <h4 className="w-full bg-primary font-semibold text-[20px] text-white px-3 rounded-t-lg py-2">
        Withdraw
      </h4>
      <p className="text-[14px] text-secondary  px-3 my-5">
        Enter The 6 Digit Code To Process <br /> Your Withdraw
      </p>
      <div className="my-10 px-3">
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            code: "",
          }}
        >
          <InputField
            name="code"
            type="text"
            className="md:w-1/2 w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md px-3 py-1"
            placeholder="Enter OTP"
          />

          <p
            className="text-[14px] px-3 my-10 text-right cursor-pointer hover:text-red-500"
            // onClick={() => handleResendOtp()}
          >
            Resend Code?
          </p>

          <div className="w-1/2 mx-auto mt-6 border border-slate-300 rounded-lg bg-blue-100">
            {loading ? (
              <div className="w-full">
                <PuffLoader className="mx-auto" color="#36d7b7" size={40} />
              </div>
            ) : (
              <button className="px-5 py-3 rounded-lg bg-primary text-white font-semibold w-full">
                Submit
              </button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Otp;
