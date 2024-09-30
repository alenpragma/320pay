import { Key, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import axiosInstance from "../../utils/axiosConfig";
import { ITokenData, ITransaction } from "../../types/web3";

import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import TransactionRow from "./TransactionRow";
import SearchInput from "../../Components/SearchInput";
import PaginationButtons from "../../Components/PaginationButton/PaginationButton";

type OptionType = {
  label: string;
  value: string;
};
const TransitionHistory = () => {
  const [selectedToken, setSelectedToken] = useState<string | null>("MUSD");
  const [search, setSearch] = useState("");
  const fetchApi = async () => {
    const response = await axiosInstance("/client-tokens");
    return response;
  };

  const { data: clientTokens, isLoading } = useQuery({
    queryKey: ["walletAddress"],
    queryFn: fetchApi,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const clientToken = clientTokens?.data?.data;
  console.log(clientToken);

  const options = clientToken?.map((item: ITokenData) => ({
    id: item?.id,
    label: item?.token_symbol,
    value: item?.token_symbol,
  }));
  const defaultOption = { label: "MUSD", value: "MUSD" };

  const fetchTransactions = async () => {
    const response = await axiosInstance(
      `/client/transactions?token_symbol=${selectedToken}`
    );
    return response;
  };
  const { data: transactions, isLoading: isTransactionsLoading } =
    useQuery<any>({
      queryKey: ["transactions", selectedToken],
      queryFn: fetchTransactions,
      // enabled: !!selectedToken,
      staleTime: 10000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    });
  const transitionData = transactions?.data?.data;
  const handleChange = (newValue: SingleValue<OptionType>) => {
    if (newValue) {
      setSelectedToken(newValue.value);
    }
  };
  const filteredDeposits = transitionData?.filter(
    (data: any) =>
      data?.to?.toLowerCase().includes(search.toLowerCase()) ||
      data?.from?.toLowerCase().includes(search.toLowerCase()) ||
      data?.hash?.toLowerCase().includes(search.toLowerCase()) ||
      data?.value?.toString().toLowerCase().includes(search.toLowerCase())
  );

  // const filteredDeposits = Array.isArray(transitionData)
  //   ? transitionData.filter(
  //       (data: any) =>
  //         data?.to?.toLowerCase().includes(search.toLowerCase()) ||
  //         data?.from?.toLowerCase().includes(search.toLowerCase()) ||
  //         data?.hash?.toLowerCase().includes(search.toLowerCase()) ||
  //         data?.value?.toString().toLowerCase().includes(search.toLowerCase())
  //     )
  //   : [];

  // pagination calculate
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setparePage] = useState(10);

  const from = currentPage * perPage;
  const to = from + perPage;
  //  pagination end
  const totalPage = Math.ceil(filteredDeposits?.length / perPage);

  return (
    <>
      <div className="md:p-6 px-3 pt-4">
        <div className="max-w-full w-100 mb-4">
          <SearchInput placeholder="Search..." setSearch={setSearch} />
        </div>
        {isLoading ? (
          <div>
            <Skeleton height={35} count={7} />
          </div>
        ) : (
          <>
            {clientToken?.length !== 0 ? (
              <>
                <div className="flex justify-start">
                  <div>
                    <Select
                      options={options}
                      classNamePrefix="custom-select"
                      placeholder="Select Here"
                      defaultValue={defaultOption}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {isTransactionsLoading ? (
                  <div className="mt-5">
                    <Skeleton height={35} count={7} />
                  </div>
                ) : (
                  <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
                    <div className="overflow-x-auto w-full">
                      <table className=" border-collapse w-full">
                        <thead>
                          <tr className="bg-[#FAFAFA] text-[#616365]">
                            <th className="py-2 px-6 text-start">SL</th>
                            <th className="py-2 px-6 text-start">Date</th>
                            <th className="py-2 px-6 text-start">
                              Transaction Hash
                            </th>
                            <th className="py-2 px-6 text-start">Amount</th>
                            <th className="py-2 px-6 text-start">
                              From Wallet
                            </th>
                            <th className="py-2 px-6 text-start">To Wallet</th>
                            <th className="py-2 px-6 text-start">Status</th>
                          </tr>
                        </thead>

                        <tbody className="bg-white">
                          {filteredDeposits
                            ?.slice(from, to)
                            ?.map((data: ITransaction, i: Key) => (
                              <TransactionRow
                                key={i}
                                data={data}
                                selectValue={selectedToken}
                                index={i}
                                perPage={perPage}
                                currentPage={currentPage}
                              />
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p>User hasn't transition history</p>
            )}
          </>
        )}
        <PaginationButtons
          totalPages={totalPage}
          currentPage={2}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default TransitionHistory;
