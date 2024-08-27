import { FaRegCopy } from "react-icons/fa";
import { images } from "../..";
import { useEffect, useState } from "react";
import { copyToClipboard } from "../../utils/Actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosConfig";
import Skeleton from "react-loading-skeleton";

const DashboardCardOne = ({ clientProfile }: any) => {
  const [wallet, setWallet] = useState<any>("");

  const handleCopy = (copy: string) => {
    copyToClipboard(copy);
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [walletLoading, setWalletLoading] = useState<boolean>(false);

  const getWallet = async () => {
    try {
      setWalletLoading(true);
      const response = await axiosInstance.get("/client-wallets");
      if (response?.data?.success === 200) {
        setWallet(response?.data?.data);
      }
    } catch (error) {
      console.error("Failed to fetch wallet data:", error);
    } finally {
      setWalletLoading(false);
    }
  };
  useEffect(() => {
    getWallet();
  }, []);

  const creteWallet = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/client/create-address");
      console.log(response);

      if (response?.data?.success == 200) {
        getWallet();
        // setCreatedAddress(response?.data?.data)
        toast.info(response?.data?.message);
        navigate("/wallet");
        return;
      }
      if (response?.data?.error == 400) {
        return toast.error(response?.data?.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  // const shortenAddress = (address: string) => {
  //   if (!address) return ""
  //   const firstPart = address.slice(0, 5)
  //   const lastPart = address.slice(-6)
  //   return `${firstPart}....${lastPart}`
  // }

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="md:p-5 p-1 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="flex items-center gap-5 pt-8 md:pt-0">
            <div className="md:size-[70px] size-[32px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.profile}
                alt=""
              />
            </div>
            <h4 className="text-[#616365] font-medium md:text-[24px] text-[12px]">
              Your Client Id
            </h4>
          </div>
          <div className="flex flex-row md:items-center items-start justify-between md:mt-8 mt-3 mb-2">
            <span className="md:text-[28px] text-[12px] font-medium text-[#313436] w-full">
              <div>
                {walletLoading ? (
                  <Skeleton height={40} count={1} highlightColor="#F4F5F6" />
                ) : (
                  <p className="flex justify-between items-center">
                    {clientProfile?.client_secret_id.slice(0, 6)}...{" "}
                    {clientProfile?.client_secret_id.slice(-3)}
                    <span className="text-[#5734DC] md:text-[24px] text-[20px]">
                      <FaRegCopy
                        className="cursor-pointer"
                        onClick={() =>
                          handleCopy(clientProfile?.client_secret_id)
                        }
                      />
                    </span>
                  </p>
                )}
              </div>
            </span>
          </div>
        </div>

        <div className="md:p-5 p-1 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="flex items-center gap-5 pt-8 md:pt-0">
            <div className="md:size-[70px] size-[32px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.wallet2}
                alt=""
              />
            </div>
            <h4 className="text-[#616365] font-medium md:text-[24px] text-[12px]">
              Your Balance
            </h4>
          </div>
          <div className="flex flex-row md:items-center items-start justify-between md:mt-8 mt-3 mb-2">
            <span className="md:text-[28px] text-[12px] font-medium text-[#313436] w-full">
              <div>
                {walletLoading ? (
                  <Skeleton height={40} count={1} highlightColor="#F4F5F6" />
                ) : (
                  <p className="flex justify-between items-center">0.00</p>
                )}
              </div>
            </span>
          </div>
        </div>

        <div className="md:p-5 p-1 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="flex items-center gap-5 pt-8 md:pt-0">
            <div className="md:size-[70px] size-[32px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.wallet2}
                alt=""
              />
            </div>
            <h4 className="text-[#616365] font-medium md:text-[24px] text-[12px]">
              Wallet
            </h4>
          </div>
          <div className="flex flex-row md:items-center items-start justify-between md:mt-8 mt-3 mb-2">
            <span className="md:text-[28px] text-[12px] font-medium text-[#313436] w-full">
              <div>
                {!wallet?.client_wallet_address && walletLoading == true ? (
                  <Skeleton height={40} count={1} highlightColor="#F4F5F6" />
                ) : (
                  <p className="flex justify-between items-center">
                    {!wallet?.client_wallet_address ? (
                      <div className="w-full flex justify-center items-center">
                        {!loading && (
                          <button
                            onClick={() => creteWallet()}
                            className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]"
                          >
                            Create Wallets
                          </button>
                        )}

                        {loading && (
                          <button className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]">
                            Loading...
                          </button>
                        )}
                      </div>
                    ) : (
                      <>
                        {`${wallet?.client_wallet_address?.slice(
                          0,
                          5
                        )} .........${wallet?.client_wallet_address?.slice(
                          -6
                        )}`}{" "}
                        <FaRegCopy
                          className="cursor-pointer"
                          onClick={() =>
                            handleCopy(wallet?.client_wallet_address)
                          }
                        />
                      </>
                    )}
                    {/* {shortenAddress(wallet?.client_wallet_address)}
                    <span className="text-[#5734DC] md:text-[24px] text-[20px]">
                      <FaRegCopy
                        className="cursor-pointer"
                        onClick={() =>
                          handleCopy(wallet?.client_wallet_address)
                        }
                      />
                    </span> */}
                  </p>
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardOne;
