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
  currency: z.string().min(1, "This field is required"),
  network: z.string().optional(),
});

const Withdraw = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<any>();
  const [availableTokens, setAvailableTokens] = useState([]);

  const formSubmit: SubmitHandler<FieldValues> = async () => {
    setLoading(true);
    const data = {
      token_id: selectedCurrency.id,
    };

    const response = await axiosInstance.post("/client-token/store", data);
    console.log(response);
    if (response.data.success == 200) {
      toast.success("Successfuly added currency");
    }
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
  const currencys = availableTokens.map((item: any) => ({
    id: item.id,
    label: item?.rpc_chain,
    value: item?.rpc_chain,
  }));

  const handleCurrencyChange = (value: string) => {
    const selectedToken = availableTokens.find((token: any) => {
      return token.id === value;
    });

    setSelectedCurrency(selectedToken);
  };

  return (
    <div className="w-full mt-20">
      <div className=" w-1/2 mx-auto border border-slate-300 shadow-4 rounded-lg">
        <h4 className="w-full bg-primary font-semibold text-[20px] text-white px-3 rounded-t-lg py-2">
          Withdraw
        </h4>
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            currency: "",
            network: "",
          }}
        >
          <div className="w-full mx-auto px-3 my-10">
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">Network</p>
              <SelectField
                name="network"
                className=""
                options={currencys}
                placeholder="Please select an option"
                onChange={handleCurrencyChange}
              />
            </div>
            <div className="relative mb-8">
              <p className="font-semibold text-secondary mb-2">Amount</p>
              <SelectField
                name="network"
                className=""
                options={currencys}
                placeholder="Please select an option"
                onChange={handleCurrencyChange}
              />
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
  );
};

export default Withdraw;
