import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import StartHereModal from "../../comonents/Modal/StartHereModdal";
import { images, PlanData } from "../..";
const StartHere = () => {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <StartHereModal handleModal={handleModal} modal={modal} />
      <div className="md:p-8 px-3 pt-4">
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
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-8">
          {PlanData.map((data, i) => (
            <div
              key={i}
              className="p-6 space-y-6 border-t-2 border-t-primary rounded-3xl shadow-md duration-300 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold text-[18px]">{data.plan}</h4>
                  <span className="px-2 py-1 bg-[#E8E2FD] text-primary rounded font-semibold">
                    Save {data.save} %
                  </span>
                </div>
                <p className="text-[14px] text-secondary mt-3">
                  Essintiul Feature Made Affordable
                </p>
              </div>
              <h4 className="tracking-wide">
                {data.price.map((price, i) => (
                  <span
                    key={i}
                    className="font-bold text-[32px] text-black mr-3"
                  >
                    ${price.price}
                  </span>
                ))}
                <span className="text-secondary text-[14px]">/1 Month</span>
              </h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-3 text-[14px] text-secondary">
                  <img className="size-5" src={images.tick} alt="" />{" "}
                  <span>{data.feature.featureOne}</span>
                </li>
                <li className="flex items-center gap-3 text-[14px] text-secondary">
                  <img className="size-5" src={images.tick} alt="" />{" "}
                  <span>{data.feature.featureTwo}</span>
                </li>
                <li className="flex items-center gap-3 text-[14px] text-secondary">
                  <img className="size-5" src={images.tick} alt="" />{" "}
                  <span>{data.feature.featureThree}</span>
                </li>
              </ul>
              <button
                onClick={handleModal}
                className="w-full py-2 rounded-xl bg-primary text-white font-semibold"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StartHere;
