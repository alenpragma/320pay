import { useState } from "react";
import { images } from "../..";
import { copyToClipboard } from "../../utils/Actions";
import { FaCopy } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

type IModal = {
  handleModal: () => void;
  modal: boolean;
};

const PurchasePlaneModal = ({ handleModal, modal }: IModal) => {
  const [textToCopy, setTextToCopy] = useState<string>("");
  const handleCopy = (copy: string) => {
    copyToClipboard(textToCopy);
    setTextToCopy(copy);
  };
  const copy = "0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA";
  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100   fixed bg-[#07070745] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0    -z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-6/12 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded  ${
          modal ? " opacity-100 z-[101]" : "opacity-0 -z-[102]"
        }`}
      >
        <div className="w-full h-full rounded">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4>Licenses Datils</h4>
            <RxCross1
              onClick={handleModal}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="px-5 pb-20 pt-8">
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Expiry</span>{" "}
              <span className="text-[16px]">12 jun 2024</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Order Id</span>{" "}
              <span className="text-[16px]">#76380</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Domain Name</span>{" "}
              <span className="text-[16px]">231783892110</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Plan </span>{" "}
              <span className="text-[16px]">1 Month</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Price </span>{" "}
              <span className="text-[16px]"> 80$</span>
            </div>
            <div className="flex justify-between text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">
                Scan Licenses QR
              </span>{" "}
              <span className="text-[16px]">
                <img className="size-24" src={images.qrCode} alt="" />
              </span>
            </div>
            <div className="w-full mt-4">
              <div className=" rounded-lg bg-[#91919131] flex  items-center text-end justify-between">
                <span className=" w-4/5 text-[14px]  text-start pl-3 font-semibold">
                  0x625336E4A6C4cCa4....852A668ad3a3fA
                </span>
                <span
                  onClick={() => handleCopy(copy)}
                  className=" text-white bg-primary rounded-r-lg cursor-pointer flex items-center  w-1/5 py-3 px-2 gap-2"
                >
                  <p>Copy Licence</p>
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

export default PurchasePlaneModal;