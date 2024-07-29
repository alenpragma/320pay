import { FaCopy } from "react-icons/fa";
import { images } from "../..";
import { useState } from "react";
import { copyToClipboard } from "../../utils/Actions";

const Deposit = () => {
  const [textToCopy, setTextToCopy] = useState<string>("");
  const handleCopy = (copy: string) => {
    copyToClipboard(textToCopy);
    setTextToCopy(copy);
  };
  const copy = "0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA";
  return (
    <div className="md:p-8 pt-5">
      <div className="md:w-2/5 w-11/12 mx-auto ">
        <form>
          <select
            name=""
            id=""
            className="w-full px-2 py-2 rounded border border-slate-300 focus:outline focus:outline-slate-400"
          >
            <option value="bitcoin">bitcoin</option>
            <option value="bitcoin">bitcoin</option>
            <option value="bitcoin">bitcoin</option>
          </select>
        </form>
        <div className="mt-5 border border-[#E2E2E9] rounded-2xl">
          <div className="py-2 bg-primary w-full rounded-t-2xl px-5">
            <span className="font-semibold text-white ">
              Pay BNB/ETH/USDT [BEP20/ERC20]
            </span>
          </div>
          <div className="p-8 ">
            <div className="flex justify-center items-center">
              <img src={images.qrCode} alt="" />
            </div>
            <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
              <span className=" w-full text-[14px]  text-start pl-3 font-semibold">
                0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA
              </span>
              <span
                onClick={() => handleCopy(copy)}
                className="px-3 py-3 text-white bg-primary rounded-r-lg cursor-pointer"
              >
                <FaCopy />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
