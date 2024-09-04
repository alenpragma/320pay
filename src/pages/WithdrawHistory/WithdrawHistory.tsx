import { useState } from "react";
import { images, tableData, walletHistory } from "../..";
import TData from "../../Components/Table/TData";
import { FaCopy } from "react-icons/fa";
import PaymenModal from "../../Components/Modal/PaymentModal";
import { copyToClipboard } from "../../utils/Actions";
import HoverTableItem from "../../lib/HoverTableItem";
import { MdContentCopy } from "react-icons/md";

const WithdrawHistory = () => {
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

  const [isToggled0, setIsToggled0] = useState(false);
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [modal, setModal] = useState(false);

  const handleToggle0 = () => {
    setIsToggled0(!isToggled0);
  };
  const handleToggl1 = () => {
    setIsToggled1(!isToggled1);
  };
  const handleToggl2 = () => {
    setIsToggled2(!isToggled2);
  };
  const handleModal = () => {
    setModal(!modal);
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
      <PaymenModal renewModal={modal} handleRenewModal={handleModal} />
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
                {walletHistory.map((data, i) => (
                  <tr
                    key={data.id}
                    className="border-b border-[#E2E2E9] text-[#616365]"
                  >
                    <TData className="px-6">
                      <h4>12 june 2024</h4>
                    </TData>
                    <TData className="px-6">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="px-3 rounded hover:bg-green-100"
                            onMouseEnter={() =>
                              handleTras(data.transition_History)
                            }
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.transition_History.slice(0, 12)}
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
                    <TData className="px-6">
                      <h4>80 USD</h4>
                    </TData>
                    <TData className="px-6">
                      <div
                        className="relative"
                        onMouseEnter={() => handleTras(data.wallletHistory)}
                        onMouseLeave={() => handleTras(null)}
                      >
                        <div className="flex items-center">
                          <span className="hover:bg-green-100 px-3 rounded">
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
                    <TData className="px-6">
                      <button className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded py-1 w-full   md:px-0 px-3">
                        Active
                      </button>
                    </TData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawHistory;
