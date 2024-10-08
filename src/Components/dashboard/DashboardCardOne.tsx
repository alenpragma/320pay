import { FaRegCopy } from "react-icons/fa";
import { images } from "../..";
import { copyToClipboard } from "../../utils/Actions";
import Skeleton from "react-loading-skeleton";
import { CreateWallet } from "../../Actions/CreateWalletAction/CreateWalletAction";
import { useState } from "react";
import TickIcon from "../../lib/TickIcon";

const DashboardCardOne = ({
  clientProfile,
  totalBalance,
  isLoading,
  refetch,
  wallets,
}: any) => {
  const [clientId, setClientId] = useState<string | null>("");
  const [wallet, setWallet] = useState<string | null>("");
  const handleCopy = (
    copy: string,
    clientId: string | null,
    wallet: string | null
  ) => {
    copyToClipboard(copy);
    setClientId(clientId);
    setWallet(wallet);
    setTimeout(() => {
      setClientId(null);
      setWallet(null);
    }, 3000);
  };

  const { mutate, isPending } = CreateWallet(refetch);
  const createWallets = async () => {
    mutate();
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <div className="md:p-5 p-3 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="gap-5 md:pt-0">
            <div className="md:size-[70px] size-[40px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.profile}
                alt=""
              />
            </div>
            <div className="text-xl">
              <h4 className="text-[#616365] font-medium md:text-[24px] ">
                Your Client ID
              </h4>
              <div className="md:text-[28px] mt-3 font-medium text-[#313436] w-full">
                <div>
                  {isLoading ? (
                    <Skeleton height={40} count={1} highlightColor="#F4F5F6" />
                  ) : (
                    <div className="flex pr-5">
                      <p className="min-w-full flex justify-between items-center">
                        {clientProfile?.client_secret_id}
                      </p>
                      <span className="  text-[#5734DC] md:text-[24px] text-[20px]">
                        {!clientId ? (
                          <FaRegCopy
                            className="cursor-pointer"
                            onClick={() =>
                              handleCopy(
                                clientProfile?.client_secret_id,
                                clientProfile?.client_secret_id,
                                null
                              )
                            }
                          />
                        ) : (
                          <TickIcon
                            className="size-6"
                            strokeWidth="2"
                            stroke="#5734DC"
                          />
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-5 p-3 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="gap-5 md:pt-0">
            <div className="md:size-[70px] size-[40px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.wallet2}
                alt=""
              />
            </div>
            <div className="text-xl">
              <h4 className="text-[#616365] font-medium md:text-[24px] ">
                Your Balance
              </h4>
              <div className="md:text-[28px] mt-3 font-medium text-[#313436] w-full">
                <div>
                  {isLoading ? (
                    <Skeleton height={40} count={1} highlightColor="#F4F5F6" />
                  ) : (
                    <div className="flex pr-5">
                      <p className="min-w-full flex justify-between items-center">
                        {totalBalance?.balance} USDT
                      </p>
                      <span className="  text-[#5734DC] md:text-[24px] text-[20px]"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-5 p-3 rounded-xl border-2 border-[#E2E2E9] relative px-2">
          <div className="gap-5 md:pt-0">
            <div className="md:size-[70px] size-[40px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
              <img
                className="w-full md:size-[40px]"
                src={images.wallet2}
                alt=""
              />
            </div>
            <div className="text-xl">
              <h4 className="text-[#616365] font-medium md:text-[24px]">
                Wallet
              </h4>
              <div className="flex flex-row md:items-center items-start justify-between mt-3 mb-2">
                <span className="md:text-[28px] font-medium text-[#313436] w-full">
                  <div>
                    {!wallets?.client_wallet_address && isLoading == true ? (
                      <Skeleton
                        height={40}
                        count={1}
                        highlightColor="#F4F5F6"
                      />
                    ) : (
                      <div className="flex justify-between items-center">
                        {!wallets?.client_wallet_address ? (
                          <div className="w-full flex justify-center items-center">
                            {!isPending && (
                              <button
                                onClick={() => createWallets()}
                                className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]"
                              >
                                Create Wallets
                              </button>
                            )}

                            {isPending && (
                              <button className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]">
                                Loading...
                              </button>
                            )}
                          </div>
                        ) : (
                          <>
                            {`${wallets?.client_wallet_address?.slice(
                              0,
                              5
                            )} .........${wallets?.client_wallet_address?.slice(
                              -6
                            )}`}{" "}
                            <div className="text-[#5734DC] md:text-[24px] text-[20px]">
                              {!wallet ? (
                                <FaRegCopy
                                  className="cursor-pointer"
                                  onClick={() =>
                                    handleCopy(
                                      wallets?.client_wallet_address,
                                      null,
                                      wallets?.client_wallet_address
                                    )
                                  }
                                />
                              ) : (
                                <TickIcon
                                  className="size-6"
                                  strokeWidth="2"
                                  stroke="#5734DC"
                                />
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardOne;
