import { FaCopy } from "react-icons/fa";
import { images, loading } from "../..";
import { useEffect, useState } from "react";
import { copyToClipboard } from "../../utils/Actions";
import { ethers } from "ethers";
import axiosInstance from "../../utils/axiosConfig";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { CreateWallet } from "../../Actions/CreateWalletAction/CreateWalletAction";
import { MdContentCopy } from "react-icons/md";
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

  const fetchApi = async () => {
    const response = await axiosInstance("/client-wallets");
    return response;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["walletAddress"],
    queryFn: fetchApi,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const wallet = data?.data?.data;

  const { mutate, isPending } = CreateWallet(refetch);
  const createWallets = async () => {
    mutate();
  };

  return (
    <div className="md:p-8 pt-5">
      <div className="md:w-2/5 w-11/12 mx-auto ">
        {wallet ? (
          <div className="mt-5 border border-[#E2E2E9] rounded-2xl">
            <div className="py-2 bg-primary w-full rounded-t-2xl px-5">
              <span className="font-semibold text-white ">Wallet Address</span>
            </div>
            <div className="p-8 ">
              <div className="flex justify-center items-center">
                <img src={images.qrCode} alt="" />
              </div>
              <div className="">
                <p className="text-[14px]">Wallet Address</p>
                <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
                  <span className=" w-full text-[14px]  text-start pl-3 font-semibold">
                    {isLoading ? (
                      <div className="w-full flex justify-center items-center">
                        <PuffLoader size={30} />
                      </div>
                    ) : (
                      <>
                        {`${wallet?.client_wallet_address?.slice(
                          0,
                          18
                        )} .........${wallet?.client_wallet_address?.slice(
                          -6
                        )}`}{" "}
                      </>
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
        ) : (
          <button
            onClick={createWallets}
            className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]"
          >
            Add Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Deposit;
