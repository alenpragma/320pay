import { useState } from "react";
import { tableData } from "../..";
import TData from "../Table/TData";
import Pagination from "../Pagination/Pagination";

const DashboardTable = () => {
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
      <div className="rounded-xl border-2 border-[#E2E2E9] pb-4">
        <h4 className="text-[24px] font-semibold p-4">Last Login Sessions</h4>
        <div className="overflow-x-auto w-full">
          <table className="overflow-x-auto border-collapse w-full">
            <thead>
              <tr className="bg-[#E2E2E9] text-[#616365]">
                <th className="py-2 px-6 text-start">Location</th>
                <th className="py-2 px-6 text-start">Status</th>
                <th className="py-2 px-6 text-start">Device</th>
                <th className="py-2 px-6 text-start">IP Address</th>
                <th className="py-2 px-6 text-start">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentItems.map((item, i) => (
                <tr key={i} className="border-b border-[#E2E2E9]">
                  <TData  data="London, Uk" className=" px-6"/>
                  <TData className=" px-6">
                    <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded py-1 px-3">
                      Ok
                    </span>
                  </TData>
                  <TData data="Chrome - Windows 10" className=" px-6"/>
                  <TData data="162.158.163.86" className=" px-6" />
                  <TData data="21 hours ago" className=" px-6"/>
                </tr>
              ))}
            </tbody>
          </table>
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

export default DashboardTable;
