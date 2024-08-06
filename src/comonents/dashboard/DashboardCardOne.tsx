import { FaRegCopy } from "react-icons/fa";
import { dashboardCard } from "../..";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { copyToClipboard } from "../../utils/Actions";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const DashboardCardOne = () => {
  const [textToCopy, setTextToCopy] = useState<string>("");
  const handleCopy = (copy: string) => {
    copyToClipboard(textToCopy);
    setTextToCopy(copy);
  };

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [privateKey, setPrivateKey] = useState<string | null>(null);

  const createWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    const privateKey = wallet.privateKey;
    setWalletAddress(address);
    setPrivateKey(privateKey);
    localStorage.setItem("address", address);
    localStorage.setItem("privateKey", privateKey);
  };
  const address = localStorage.getItem("address");

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
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
              <span className="md:text-[28px] text-[12px] font-medium text-[#313436] w-full">
                {i === 1 && <span>$</span>}
                {i !== 2 ? item.secretCode : ""}
                {i === 2 && (
                  <div>
                    {address === null ? (
                      <Link to="/wallet">
                        <button
                          onClick={createWallet}
                          className="w-full py-2 rounded-lg bg-gradient-to-r  to-[#5634dc7a] hover:via-[#5634dccd] from-[#5634dcd6] hover:bg-[#5634dc7a] text-white font-light text-[16px]"
                        >
                          Add Wallet
                        </button>
                      </Link>
                    ) : (
                      <p className="flex justify-between items-center">
                        {`${address?.slice(0, 8)} .........${address?.slice(
                          -6
                        )}`}{" "}
                        <span className="text-[#5734DC] md:text-[24px] text-[20px]">
                          <FaRegCopy
                            className="cursor-pointer"
                            onClick={() => handleCopy(address)}
                          />
                        </span>
                      </p>
                    )}
                  </div>
                )}
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
              <Link to={`${item.name === "wallet" ? "/deposit" : "/licenses"}`}>
                <CiCirclePlus className="text-[24px] text-[#5734DC] absolute top-3 right-3  cursor-pointer" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCardOne;
