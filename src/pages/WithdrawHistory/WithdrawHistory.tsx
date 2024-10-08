import { useState } from "react";
import TData from "../../Components/Table/TData";
import PaymenModal from "../../Components/Modal/PaymentModal";
import { copyToClipboard } from "../../utils/Actions";
import HoverTableItem from "../../lib/HoverTableItem";
import { MdContentCopy } from "react-icons/md";
import axiosInstance from "../../utils/axiosConfig";
import { formatToLocalDate } from "../../hooks/formatDate";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";
import TickIcon from "../../lib/TickIcon";

type ITokenSymbole = {
  token_symbol?: string;
  tokenId?: string;
};

const WithdrawHistory = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const [timeout, setTimeouts] = useState<string | null>("");
  const [addressTimeOut, setAddressTimeOut] = useState<string | null>("");

  const handleCopy = (
    copy: any,
    id: string | null,
    addressId: string | null
  ) => {
    copyToClipboard(copy);
    setTimeouts(id);
    setAddressTimeOut(addressId);
    setTimeout(() => {
      setTimeouts(null);
      setAddressTimeOut(null);
    }, 3000);
  };
  const [transId, setTransId] = useState<string | null>();
  const [address, setAddress] = useState<string | null>();
  const handleTras = (tranId: string | null, addr: string | null) => {
    setTransId(tranId);
    setAddress(addr);
  };

  const fetchData = async () => {
    const [withdraw, tokens] = await Promise.all([
      axiosInstance.get(`/client/withdraw-history`),
      axiosInstance.get(`/client-tokens`),
    ]);
    return {
      profile: withdraw,
      tokens: tokens,
    };
  };
  const { data, isLoading } = useQuery({
    queryKey: ["withdrawHistory", "token"],
    queryFn: fetchData,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const withdrowHistory = data?.profile?.data?.data;
  const tokens = data?.tokens?.data?.data;

  console.log("withdraw", withdrowHistory);

  return (
    <>
      <PaymenModal renewModal={modal} handleRenewModal={handleModal} />
      {isLoading ? (
        <div className="mt-8">
          <Skeleton height={50} count={7} />
        </div>
      ) : (
        <>
          {withdrowHistory?.length === 0 ? (
            <p>User hasn't any transition history</p>
          ) : (
            <div className="md:p-6 px-3 pt-4">
              <div className=" rounded-xl border-2 border-[#E2E2E9] mt-4 p-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-secondary text-[20px] font-semibold">
                    Withdraw History
                  </h4>
                </div>
                <div className="overflow-x-auto w-full mt-6">
                  <table className=" border-collapse w-full">
                    <thead>
                      <tr className="bg-[#FAFAFA] text-secondary">
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Date
                        </th>
                        <th className="py-2 px-9 text-start  whitespace-nowrap ">
                          Transaction Hash
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Amount
                        </th>
                        <th className="py-2 px-9 text-start  whitespace-nowrap">
                          To Wallet
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {withdrowHistory?.map((data: any) => (
                        <tr
                          key={data.id}
                          className="border-b border-[#E2E2E9] text-[#616365]"
                        >
                          <TData className="px-6">
                            <h4>{formatToLocalDate(data?.created_at)}</h4>
                          </TData>
                          <TData className="px-6">
                            <div className="relative">
                              <div className="flex items-center">
                                <span
                                  className="px-3 rounded hover:bg-green-100"
                                  onMouseEnter={() =>
                                    handleTras(data?.id, null)
                                  }
                                  onMouseLeave={() => handleTras(null, null)}
                                >
                                  {data?.txn_hash?.slice(0, 5)}
                                  .......
                                  {data?.txn_hash?.slice(-5)}
                                </span>
                                {timeout !== data?.id ? (
                                  <MdContentCopy
                                    onClick={() =>
                                      handleCopy(data?.txn_hash, data?.id, null)
                                    }
                                    className="cursor-pointer rotate-180 size-6"
                                  />
                                ) : (
                                  <TickIcon className="size-6" />
                                )}
                              </div>
                              {data?.id == transId && data.txn_hash !== null ? (
                                <HoverTableItem value={data?.txn_hash} />
                              ) : (
                                ""
                              )}
                            </div>
                          </TData>
                          <TData className="px-6">
                            <h4>
                              {data?.amount}{" "}
                              {tokens
                                ?.filter(
                                  (token: ITokenSymbole) =>
                                    token?.tokenId == data?.token_id
                                )
                                .map((item: ITokenSymbole) => (
                                  <span>{item?.token_symbol}</span>
                                ))}
                            </h4>
                          </TData>
                          <TData className="px-6">
                            <div
                              className="relative"
                              onMouseEnter={() => handleTras(null, data?.id)}
                              onMouseLeave={() => handleTras(null, null)}
                            >
                              <div className="flex items-center">
                                <span className="hover:bg-green-100 px-3 rounded">
                                  {data?.wallet_address.slice(0, 5)}
                                  .......
                                  {data?.wallet_address.slice(-5)}
                                </span>
                                {addressTimeOut !== data?.id ? (
                                  <MdContentCopy
                                    onClick={() =>
                                      handleCopy(data?.wallet_address, null, data?.id)
                                    }
                                    className="cursor-pointer rotate-180 size-6"
                                  />
                                ) : (
                                  <TickIcon className="size-6" />
                                )}
                              </div>
                              {data?.id == address &&
                              data.wallet_address !== null ? (
                                <HoverTableItem value={data?.wallet_address} />
                              ) : (
                                ""
                              )}
                            </div>
                          </TData>
                          <TData className="px-6">
                            <button className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded py-1 w-full   md:px-0 px-3">
                              {data?.status}
                            </button>
                          </TData>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default WithdrawHistory;
