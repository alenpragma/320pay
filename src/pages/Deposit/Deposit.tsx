import { images } from "../..";
import { useState } from "react";
import { copyToClipboard } from "../../utils/Actions";
import axiosInstance from "../../utils/axiosConfig";
import Skeleton from "react-loading-skeleton";
import { MdContentCopy } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import TickIcon from "../../lib/TickIcon";

const Deposit = () => {
  const [timeout, setTimeouts] = useState<boolean>(false);
  const handleCopy = (copy: string) => {
    copyToClipboard(copy);
    setTimeouts(true);
    setTimeout(() => {
      setTimeouts(false);
    }, 3000);
  };

  const shortenAddress = (address: string) => {
    if (!address) return "";
    const firstPart = address.slice(0, 10);
    const lastPart = address.slice(-8);
    return `${firstPart}....${lastPart}`;
  };

  const fetchApi = async () => {
    const response = await axiosInstance("/client-wallets");
    return response;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["walletAddress"],
    queryFn: fetchApi,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const wallet = data?.data?.data;

  return (
    <div className="md:p-8 pt-5">
      <div className="md:w-2/5 w-11/12 mx-auto ">
        <div className="mt-5 border border-[#E2E2E9] rounded-2xl">
          <div className="py-2 bg-primary w-full rounded-t-2xl px-5">
            <span className="font-semibold text-white ">
              Pay BNB/ETH/USDT [BEP20/ERC20]
            </span>
          </div>
          <div className="p-8 ">
            <div className="flex justify-center items-center">
              <img src={images.qrCode} alt="" />
            </div>
            <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
              <span className=" w-full text-[14px]  text-start px-3 font-semibold">
                {isLoading ? (
                  <Skeleton height={30} count={1} />
                ) : (
                  shortenAddress(wallet?.client_wallet_address)
                )}
              </span>
              {timeout == false ? (
                <MdContentCopy
                  onClick={() => handleCopy(wallet?.client_wallet_address)}
                  className="cursor-pointer rotate-180 size-6"
                />
              ) : (
                <TickIcon className="size-6" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
