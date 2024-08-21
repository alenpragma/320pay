import { useState } from "react";
import { tableData, walletHistory } from "../..";
import TData from "../../comonents/Table/TData";
import Pagination from "../../comonents/Pagination/Pagination";
import Select from "react-select";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard } from "../../utils/Actions";
import { MdContentCopy } from "react-icons/md";
import HoverTableItem from "../../lib/HoverTableItem";

const options = [
  { value: "bnb", label: "BNB" },
  { value: "btc", label: "BTC" },
  { value: "usd", label: "USD" },
];

const TransitionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const [selectValue, setSelectValue] = useState("");
  const hanldeChenge = (e: any) => {
    setSelectValue(e.label);
  };

  const handleCopy = (copy: any) => {
    copyToClipboard(copy);
  };
  const [historyData, setHistory] = useState("");
  const handleTras = (history: any) => {
    setHistory(history);
  };
  return (
    <>
      <div className="md:p-6 px-3 pt-4">
        <div className="flex justify-start">
          <div>
            <Select
              options={options}
              classNamePrefix="custom-select"
              placeholder="Select Here"
              onChange={hanldeChenge}
            />
            {/* <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Deposit Now
            </button> */}
          </div>
        </div>
        <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
          <div className="overflow-x-auto w-full">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#FAFAFA] text-[#616365]">
                  <th className="py-2 px-6 text-start">Date</th>
                  <th className="py-2 px-6 text-start">Transaction Hash</th>
                  <th className="py-2 px-6 text-start">Amount</th>
                  <th className="py-2 px-6 text-start">From Wallet</th>
                  <th className="py-2 px-6 text-start">To Wallet</th>
                  <th className="py-2 px-6 text-start">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {walletHistory.map((data, i) => (
                  <tr key={i} className="border-b border-[#E2E2E9]">
                    <TData data="12 Jun 2025" className="  px-6" />
                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            onMouseEnter={() => handleTras(data.wallletHistory)}
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.wallletHistory.slice(0, 10)}
                            .......
                            {data.wallletHistory.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.wallletHistory)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.wallletHistory == historyData ? (
                          <HoverTableItem value={data.wallletHistory} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData data={`80 ${selectValue}`} className="  px-6" />

                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            onMouseEnter={() => handleTras(data.transition_History)}
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.transition_History.slice(0, 10)}
                            .......
                            {data.transition_History.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.transition_History)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.transition_History == historyData ? (
                          <HoverTableItem value={data.transition_History} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            onMouseEnter={() => handleTras(data.wallletHistory)}
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.wallletHistory.slice(0, 10)}
                            .......
                            {data.wallletHistory.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.wallletHistory)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.wallletHistory == historyData ? (
                          <HoverTableItem value={data.wallletHistory} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData className="  px-6">
                      <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                        Complete
                      </span>
                    </TData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  );
};

export default TransitionHistory;
