import { Link } from "react-router-dom";
import { tableData } from "../..";
import TData from "../../comonents/Table/TData";
import { useState } from "react";
import Pagination from "../../comonents/Pagination/Pagination";

const DepositLog = () => {
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
        <div className="flex justify-between">
          <h5>
            <span className="text-secondary text-[14px]">Balance:</span>{" "}
            <span className="text-black font-bold">$5000</span>
          </h5>
          <Link to="/deposit">
            <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Deposit Now
            </button>
          </Link>
        </div>
        <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
          <div className="overflow-x-auto w-full">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#E2E2E9] text-secondary">
                  <th className="py-2 px-6 text-start">Getway</th>
                  <th className="py-2 px-6 text-start">Amount</th>
                  <th className="py-2 px-6 text-start">Date</th>
                  <th className="py-2 px-6 text-start">Transition ID</th>
                  <th className="py-2 px-6 text-start">Status</th>
                  <th className="py-2 px-6 text-start">More</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentItems.map((item, i) => (
                  <tr key={i} className="border-b border-[#E2E2E9]">
                    <TData data="Crypto" />
                    <TData data="80 USD" />
                    <TData data="12 Jun 2025" />
                    <TData data="0x62535......68ad3a3fA" />
                    <TData>
                      <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                        Complete
                      </span>
                    </TData>
                    <TData>
                      <button className="font-semibold text-[14px] text-white bg-[#000000ae] rounded px-5 py-1">
                        View
                      </button>
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

export default DepositLog;
