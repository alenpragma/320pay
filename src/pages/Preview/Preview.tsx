import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import LoaingAnimation from "../../Components/Loading/LoaingAnimation";

const Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { withdrawData } = location.state || {};

  console.log(withdrawData);

  const confirmWithdrow = async () => {
    const confirmData = {
      amount: withdrawData.amount,
      token_id: withdrawData.token_id,
      wallet_address: withdrawData.wallet_address,
    };
    setLoading(true);
    const withdrowResponse = await axiosInstance.post(
      "/client/withdraw",
      confirmData
    );
    console.log(withdrowResponse);

    if (withdrowResponse?.data?.success == 200) {
      setLoading(false);
      toast.success(withdrowResponse?.data?.msg);
      const { ...confirmationResponsData } = withdrowResponse.data;

      navigate("/dashboard/withdraw/preview/otp", {
        state: { confirmationResponsData },
      });
    }
    if (withdrowResponse?.data?.error) {
      toast.error(withdrowResponse?.data?.messsage);
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 w-full mx-auto mt-20 rounded-lg px-3">
      <h4 className="text-center text-secondary font-medium text-[18px]">
        Confirm Withdraw
      </h4>
      <div className="text-center mt-4">
        <p className="text-[14px] text-black">Received Amount</p>
        <h4 className="text-[24px] font-semibold  leading-6">
          {withdrawData?.amount - (withdrawData?.amount / 100) * 1}{" "}
          {withdrawData?.token_symbol}
        </h4>
      </div>
      <div className="space-y-6 mt-10">
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Network</h6>
          <h6 className="bg-primary rounded-lg text-[14px] px-2 text-white py-[2px] w-fit">
            {withdrawData?.network || " "}
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Address</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            {withdrawData?.wallet_address || 0}
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Withdrawal Amount</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            ${withdrawData?.amount - (withdrawData?.amount / 100) * 0.5}
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Network Fee 0.5%</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            ${(withdrawData?.amount / 100) * 0.5}
          </h6>
        </div>
      </div>
      {loading ? (
        <LoaingAnimation size={30} color="#36d7b7" />
      ) : (
        <button
          onClick={() => confirmWithdrow()}
          className="px-5 py-2 mt-5 w-full rounded-lg bg-primary text-white font-semibold"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Preview;
