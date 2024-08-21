import { useState } from "react";
import { images, tableData } from "../..";
import TData from "../../comonents/Table/TData";
import { FaCopy } from "react-icons/fa";
import PaymenModal from "../../comonents/Modal/PaymentModal";
import { copyToClipboard } from "../../utils/Actions";
import HoverTableItem from "../../lib/HoverTableItem";

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

  const [item, setItem] = useState("");
  const [id, setId] = useState<any>();
  const handleTras = (item: any) => {
    setItem(item);
    setId(item);
  };
  console.log(item);
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
                  <th className="py-2 px-6 text-start  whitespace-nowrap ">
                    Transaction Hash
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Amount
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    To Wallet
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-[#E2E2E9] text-[#616365]">
                  <TData className="px-6">
                    <h4>12 june 2024</h4>
                  </TData>
                  <TData className="px-6">
                    <div
                      className="relative"
                      onMouseEnter={() => handleTras(1)}
                      onMouseLeave={() => handleTras(null)}
                    >
                      <HoverTableItem
                        handleCopy={handleCopy}
                        item={item}
                        id={id}
                      />
                    </div>
                  </TData>
                  <TData className="px-6">
                    <h4>80 USD</h4>
                  </TData>
                  <TData className="px-6">
                    <div
                      className="relative"
                      onMouseEnter={() => handleTras("transition items")}
                      onMouseLeave={() => handleTras(null)}
                    >
                      <HoverTableItem handleCopy={handleCopy} item={item} />
                    </div>
                  </TData>
                  <TData className="px-6">
                    <button className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded py-1 w-full   md:px-0 px-3">
                      Active
                    </button>
                  </TData>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawHistory;
