import { useState } from "react";
import { tableData } from "../..";
import TData from "../../comonents/Table/TData";
import Pagination from "../../comonents/Pagination/Pagination";
import { Link } from "react-router-dom";
import Select from "react-select";

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

  return (
    <>
      <div className="md:p-6 px-3 pt-4">
        <div className="flex justify-start">
          <div>
            <Select options={options} classNamePrefix="custom-select" placeholder="Select Here "/>
            {/* <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Deposit Now
            </button> */}
          </div>
        </div>
        <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
          <div className="overflow-x-auto w-full">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#E2E2E9] text-[#616365]">
                  <th className="py-2 px-6 text-start">Date</th>
                  <th className="py-2 px-6 text-start">Transaction Hash</th>
                  <th className="py-2 px-6 text-start">Amount</th>
                  <th className="py-2 px-6 text-start">From Wallet</th>
                  <th className="py-2 px-6 text-start">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentItems.map((item, i) => (
                  <tr key={i} className="border-b border-[#E2E2E9]">
                    <TData data="12 Jun 2025" className="  px-6" />
                    <TData data="0x625....3a3fA" className="  px-6" />
                    <TData data="80 USD" className="  px-6" />

                    <TData data="0x625....3a3fA" className="  px-6" />
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
