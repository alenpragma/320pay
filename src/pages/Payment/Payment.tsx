import { useState } from "react";
import { images, tableData } from "../..";
import TData from "../../comonents/Table/TData";
import Pagination from "../../comonents/Pagination/Pagination";
import { FaCopy } from "react-icons/fa";
import PaymenModal from "../../comonents/Modal/PaymentModal";

const Payment = () => {
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
  const [modal, setModal] = useState(true);

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

  return (
    <>
      <PaymenModal renewModal={modal} handleRenewModal={handleModal} />
      <div className="md:p-6 px-3 pt-4">
        <div className=" rounded-xl border-2 border-[#E2E2E9] mt-4 p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-secondary text-[20px] font-semibold">
              Payment Settings
            </h4>
            <button onClick={handleModal} className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Add New Currency
            </button>
          </div>
          <div className="overflow-x-auto w-full mt-6">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#FAFAFA] text-secondary">
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Currency
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap ">
                    NetWork
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Status
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-[#E2E2E9] text-[#616365]">
                  <TData className="  px-6">
                    <div className="flex items-center gap-3">
                      <img src={images.usdt} alt="" />
                      <span>USDT</span>
                    </div>
                  </TData>
                  <TData className="  px-6 ">
                    <div className="flex items-center gap-3">
                      <span>askdfskdfjskjdfsdkjf</span>
                      <FaCopy />
                    </div>
                  </TData>
                  <TData className="  px-6">
                    <button
                      className={`font-semibold text-[14px] ${
                        isToggled0 ? "text-[#4FC55B]" : "text-[#FF8109]"
                      } bg-[#DCF3DE] rounded py-1 w-[100px]   md:px-0 px-3`}
                    >
                      {isToggled0 ? "Active" : "Deactive"}
                    </button>
                  </TData>
                  <TData className="  px-6">
                    <div
                      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                        isToggled0 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
                      }`}
                      onClick={() => handleToggle0()}
                    >
                      <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                          isToggled0 ? "translate-x-6" : ""
                        }`}
                      ></div>{" "}
                    </div>
                  </TData>
                </tr>
                <tr className="border-b border-[#E2E2E9] text-[#616365]">
                  <TData className="  px-6">
                    <div className="flex items-center gap-3">
                      <img src={images.usdt} alt="" />
                      <span>USDT</span>
                    </div>
                  </TData>
                  <TData className="  px-6 ">
                    <div className="flex items-center gap-3">
                      <span>askdfskdfjskjdfsdkjf</span>
                      <FaCopy />
                    </div>
                  </TData>
                  <TData className="  px-6">
                    <button
                      className={`font-semibold text-[14px] ${
                        isToggled1 ? "text-[#4FC55B]" : "text-[#FF8109]"
                      } bg-[#DCF3DE] rounded py-1 w-[100px]   md:px-0 px-3`}
                    >
                      {isToggled1 ? "Active" : "Deactive"}
                    </button>
                  </TData>
                  <TData className="  px-6">
                    <div
                      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                        isToggled1 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
                      }`}
                      onClick={() => handleToggl1()}
                    >
                      <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                          isToggled1 ? "translate-x-6" : ""
                        }`}
                      ></div>{" "}
                    </div>
                  </TData>
                </tr>
                <tr className="border-b border-[#E2E2E9] text-[#616365]">
                  <TData className="  px-6">
                    <div className="flex items-center gap-3">
                      <img src={images.usdt} alt="" />
                      <span>USDT</span>
                    </div>
                  </TData>
                  <TData className="  px-6 ">
                    <div className="flex items-center gap-3">
                      <span>askdfskdfjskjdfsdkjf</span>
                      <FaCopy />
                    </div>
                  </TData>
                  <TData className="  px-6">
                    <button
                      className={`font-semibold text-[14px] ${
                        isToggled2 ? "text-[#4FC55B]" : "text-[#FF8109]"
                      } bg-[#DCF3DE] rounded py-1 w-[100px]   md:px-0 px-3`}
                    >
                      {isToggled2 ? "Active" : "Deactive"}
                    </button>
                  </TData>
                  <TData className="  px-6">
                    <div
                      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                        isToggled2 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
                      }`}
                      onClick={() => handleToggl2()}
                    >
                      <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                          isToggled2 ? "translate-x-6" : ""
                        }`}
                      ></div>{" "}
                    </div>
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

export default Payment;
