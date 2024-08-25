import { RxCross1 } from "react-icons/rx";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import Form from "../../comonents/Forms/Form";
import SelectField from "../../comonents/Forms/SelecetField";
import InputField from "../../comonents/Forms/InputField";
import Loading from "../../comonents/Lottie/Loading";
import SlideButton from "../../comonents/SlideButton/SlideButton";

import OtpInput from 'react-otp-input';

type IModal = {
  handleRenewModal: () => void;
  renewModal: boolean;
};

export const currency = [
  { label: "USDT", value: "usdt" },
  { label: "BNB", value: "bnb" },
  { label: "MIND", value: "mind" },
  { label: "MUSD", value: "musd" },
  { label: "SHIV", value: "shiv" },
  { label: "DAI", value: "dai" },
  { label: "TRX", value: "trx" },
];

export const network = [
  { label: "Binance(BEP20)", value: "binance" },
  { label: "Ethereum(ERC20)", value: "ethereum" },
  { label: "Polygon(MATIC)", value: "polygon" },
  { label: "MIND SMART CHAIN((MIND20)", value: "polygon" },
  { label: "ARBITRUM", value: "arbitrum" },
  { label: "OPTIMISM", value: "optimism" },
];
export const validationSchema = z.object({
  a: z.number().max(1, "This field is required"),
  b: z.number().max(1, "This field is required"),
  c: z.number().max(1, "This field is required"),
  d: z.number().max(1, "This field is required"),
});

const Otp = () => {
  const formSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };
  const [otp, setOtp] = useState('');
  return (
    <div className="w-full mt-20">
      <div className=" md:w-[600px] mx-auto border border-slate-300 shadow-4 rounded-lg md:px-0 px-3">
        <h4 className="w-full bg-primary font-semibold text-[20px] text-white px-3 rounded-t-lg py-2">
          Verification
        </h4>
        <p className="text-[14px] text-secondary px-3 mt-4">
          Enter The 4 Digit Code To Process <br /> Your Withdraw
        </p>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      </div>
    </div>
  );
};

export default Otp;



// <Form
// onSubmit={formSubmit}
// resolver={zodResolver(validationSchema)}
// defaultValues={{
//   a: "",
//   b: "",
//   c: "",
//   d: "",
// }}
// >
// <div className="w-full mx-auto px-3 mt-6 mb-10">
//   <div className="relative mb-8">
//     <p className="font-semibold text-secondary mb-2">Network</p>
//     <div className="w-1/2 mx-auto grid grid-cols-4 gap-3">
//       <InputField
//         name="a"
//         type="number"
//         className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-3 pr-4"
//       />
//       <InputField
//         name="b"
//         type="number"
//         className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-3 pr-4"
//       />
//       <InputField
//         name="c"
//         type="number"
//         className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-3 pr-4"
//       />
//       <InputField
//         name="d"
//         type="number"
//         className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-3 pr-4"
//       />
//     </div>
//   </div>
//   <button className="bg-primary py-2 rounded-lg text-white w-full font-semibold">
//     Verify Withdraw
//   </button>
//   {/* <div className="flex justify-center items-center">
//     {loading ? (
//       <button className="px-5 rounded-xl bg-[#5634dc93] text-white font-semibold w-[90%] flex justify-center items-center cursor-not-allowed">
//         <Loading />
//       </button>
//     ) : (
//       <button className="bg-primary py-2 rounded-lg text-white w-full font-semibold">
//         Verify Withdraw
//       </button>
//     )}
//   </div> */}
// </div>
// </Form>