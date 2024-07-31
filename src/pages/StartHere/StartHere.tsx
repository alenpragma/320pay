import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
const StartHere = () => {
  return (
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
        <div className="p-6 space-y-6 border-t-2 border-t-primary rounded-3xl shadow-md duration-300 hover:shadow-xl">
          <div>
            <h4 className="font-semibold text-[18px]">Small</h4>
            <p className="text-[14px] text-secondary">
              Essintiul Feature Made Affordable
            </p>
          </div>
          <h4 className="tracking-wide">
            <span className="font-bold text-[32px] text-black mr-3">$80</span>
            <span className="text-secondary text-[14px]">/1 Month</span>
          </h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-3 text-[14px] text-secondary">
              <TiTick /> <span>All-Chains</span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-secondary">
              <TiTick /> <span>All-Chains</span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-secondary">
              <TiTick /> <span>All-Chains</span>
            </li>
          </ul>
          <button className="w-full py-2 rounded-xl bg-primary text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartHere;
