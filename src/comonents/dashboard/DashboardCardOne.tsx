import { FaRegCopy } from "react-icons/fa";
import { dashboardCard } from "../..";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { toast } from "react-toastify";

const DashboardCardOne = () => {
  const [textToCopy, setTextToCopy] = useState<string>("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleCopy = (copy: string) => {
    copyToClipboard();
    setTextToCopy(copy);
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {dashboardCard.map((item, i) => (
          <div
            key={i}
            className="md:p-5 p-1 rounded-xl border-2 border-[#E2E2E9] relative px-2"
          >
            <div className="flex items-center gap-5 pt-8 md:pt-0">
              <div className="md:size-[70px] size-[32px] p-2 bg-[#E8E2FD] flex justify-center items-center rounded-full">
                <img className="w-full md:size-[40px]" src={item.img} alt="" />
              </div>
              <h4 className="text-[#616365] font-medium md:text-[24px] text-[12px]">
                {item.title}
              </h4>
            </div>
            <div className="flex flex-row md:items-center items-start justify-between md:mt-8 mt-3 mb-2">
              <span className="md:text-[28px] text-[12px] font-medium text-[#313436]">
                {i === 1 && <span>$</span>}
                {item.secretCode}
              </span>
              {i === 0 && (
                <span className="text-[#5734DC] md:text-[24px] text-[20px]">
                  <FaRegCopy
                    className="cursor-pointer"
                    onClick={() => handleCopy(item.secretCode)}
                  />
                </span>
              )}
            </div>
            {i !== 0 && (
              <CiCirclePlus className="text-[24px] text-[#5734DC] absolute top-3 right-3  cursor-pointer" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCardOne;
