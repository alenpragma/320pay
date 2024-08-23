import { RxCross1 } from "react-icons/rx";
import Form from "../Forms/Form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SelectField from "../Forms/SelecetField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SelectIcon from "../SelectIcon/SelectIcon";
import { useState } from "react";
import Loading from "../Lottie/Loading";

type IModal = {
  handleRenewModal: () => void;
  renewModal: boolean;
};

// export const currency = [
//   { name: "USDT" },
//   { name: "BNB" },
//   { name: "MIND" },
//   { name: "MUSD" },
//   { name: "SHIV" },
//   { name: "DAI" },
//   { name: "MATIC" },
//   { name: "TRX" },
// ];

export const currency = [{ label: "USDT", value: "USDT" }];
export const network = [
  { name: "Binance(BEP20" },
  { name: "Ethereum(ERC20)" },
  { name: "Polygon(MATIC)" },
  { name: "Mind Smart Chain(MIND20)" },
  { name: "Arbitrum" },
  { name: "Optimism" },
];
export const validationSchema = z.object({
  month: z.string().min(1, "This field is required"),
});

const PaymenModal = ({ handleRenewModal, renewModal }: IModal) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    console.log(data);
  };

  return (
    <div className="w-full ">
      <div
        className={` ${
          renewModal
            ? " opacity-100   fixed bg-[#07070745] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0 -z-50"
        }`}
        onClick={handleRenewModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-6/12 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded  ${
          renewModal ? " opacity-100 z-[101]" : "opacity-0 -z-[102]"
        }`}
      >
        <div className="w-full h-full rounded">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4> Add New Currency</h4>
            <RxCross1
              onClick={handleRenewModal}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="px-5 md:pb-20 pb-8 pt-8">
            <Form
              onSubmit={formSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                month: "",
              }}
            >
              <div className="md:w-10/12 w-full mx-auto">
                <div className="relative mb-8">
                  <p className="font-semibold text-secondary mb-2">
                    Choose Currency
                  </p>
                  <SelectField
                    name="month"
                    className="appearance-none px-2 pr-8 py-2 rounded border border-slate-300 focus:outline focus:outline-slate-400  text-secondary font-medium w-full custom_select"
                    options={currency}
                    placeholder="Please select an option"
                  />
                </div>
                <div className="relative mb-8">
                  <p className="font-semibold text-secondary mb-2">
                    Choose Network
                  </p>
                  <SelectField
                    name="month"
                    className="appearance-none px-2 pr-8 py-2 rounded border border-slate-300 focus:outline focus:outline-slate-400  text-secondary font-medium w-full"
                    options={network}
                    placeholder="Please select an option"
                  />
                  <SelectIcon />
                </div>
                <div className="flex justify-center items-center">
                  {loading ? (
                    <button className="px-5 rounded-xl bg-[#5634dc93] text-white font-semibold w-[90%] flex justify-center items-center cursor-not-allowed">
                      <Loading />
                    </button>
                  ) : (
                    <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-[90%]">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymenModal;
