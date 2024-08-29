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

type IModal = {
  handleRenewModal: () => void;
  renewModal: boolean;
};

export const validationSchema = z.object({
  currency: z.string().min(1, "This field is required"),
  // network: z.string().min(1, "This field is required"),
  wallet: z.string().min(1, "This field is required"),
  amount: z.string().min(1, "This field is required"),
});

const Withdraw = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<any>();
  const [availableTokens, setAvailableTokens] = useState([]);
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  const getDatas = async () => {
    const response = await axiosInstance.get("/client/available-tokens");
    if (response?.data?.data) {
      setAvailableTokens(response?.data?.data);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  const currencys = availableTokens?.map((item: any) => ({
    label: item?.token_symbol,
    value: item.token_symbol,
    image: item.image,
  }));

  const handleCurrencyChange = (value: string) => {
    const selectedToken = availableTokens.find((token: any) => {
      return token.token_symbol === value;
    });

    setSelectedCurrency(selectedToken);
  };

  return (
    <div className="w-full mt-5 px-3">
      <div className=" md:w-[600px] mx-auto border border-slate-300 shadow-4 rounded-lg md:px-0">
        <h4 className="w-full bg-primary font-semibold text-[20px] text-white px-3 rounded-t-lg py-2">
          Withdraw
        </h4>
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            currency: "",
            wallet: "",
            amount: "",
          }}
        >
          <div className="w-full mx-auto px-3 my-10">
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">
                Choose Currency
              </p>
              <SelectField
                name="currency"
                className=""
                type="string"
                options={currencys}
                placeholder="Please select an option"
                onChange={handleCurrencyChange}
              />
            </div>
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">Network</p>
              <div className="relative">
                <InputField
                  placeholder="Network"
                  type="text"
                  name="network"
                  defaultValue={
                    selectedCurrency?.rpc_chain
                      ? selectedCurrency?.rpc_chain
                      : "Network address"
                  }
                  className={`${
                    selectedCurrency?.rpc_chain
                      ? "text-black pl-10"
                      : "text-secondary px-4"
                  } w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 pr-4`}
                />

                <img
                  className="absolute w-6 top-1 my-auto left-2 text-slate-500 text-[20px] cursor-pointer"
                  src={selectedCurrency?.image}
                  alt=""
                />
              </div>
            </div>
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">
                Wallet Address
              </p>
              <InputField
                name="wallet"
                type="text"
                className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-4"
                placeholder="Enter Your Wallet Address"
              />
            </div>
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">Amount</p>
              <InputField
                name="amount"
                type="number"
                className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-4"
                placeholder="Enter Your Amount"
              />
            </div>
            <SlideButton />
            {/* <div className="flex justify-center items-center">
              {loading ? (
                <button className="px-5 rounded-xl bg-[#5634dc93] text-white font-semibold w-[90%] flex justify-center items-center cursor-not-allowed">
                  <Loading />
                </button>
              ) : (
                <SlideButton />
              )}
            </div> */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Withdraw;
