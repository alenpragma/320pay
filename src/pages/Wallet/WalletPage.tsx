import { FaCopy } from "react-icons/fa";
import { images } from "../..";
import { useState } from "react";
import { copyToClipboard } from "../../utils/Actions";



const Deposit = () => {
  const [textToCopy, setTextToCopy] = useState<string | null>('');
  const handleCopy = (copy: string | null) => {
    copyToClipboard(textToCopy);
    setTextToCopy(copy);
  };

  const address = localStorage.getItem("address");
  const privateKey = localStorage.getItem("privateKey");
//   const copy = "0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA";
  return (
    <div className="md:p-8 pt-5">
      <div className="md:w-2/5 w-11/12 mx-auto ">
        <div className="mt-5 border border-[#E2E2E9] rounded-2xl">
          <div className="py-2 bg-primary w-full rounded-t-2xl px-5">
            <span className="font-semibold text-white ">Wallet Address</span>
          </div>
          <div className="p-8 ">
            <div className="flex justify-center items-center">
              <img src={images.qrCode} alt="" />
            </div>
            <div className="">
              <p className="text-[14px]">Wallet Address</p>
              <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
                <span className=" w-full text-[14px]  text-start pl-3 font-semibold">
                  {`${address?.slice(0, 18)} .........${address?.slice(-6)}`}
                </span>
                <span
                  onClick={() => handleCopy(address)}
                  className="px-3 py-3 text-white bg-primary rounded-r-lg cursor-pointer"
                >
                  <FaCopy />
                </span>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[14px]">Secret Key</p>
              <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
                <span className=" w-full text-[14px]  text-start pl-3 font-semibold">
                  {`${privateKey?.slice(0, 18)} .........${address?.slice(-6)}`}
                </span>
                <span
                  onClick={() => handleCopy(privateKey)}
                  className="px-3 py-3 text-white bg-primary rounded-r-lg cursor-pointer"
                >
                  <FaCopy />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;