import { tableData } from "../..";
import TData from "../../comonents/Table/TData";

const PurchasePlane = () => {
  return (
    <div className="md:p-6 px-3 pt-4">
      <div className="flex justify-end">
        <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
          Add New Licenses
        </button>
      </div>
      <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
        <h4 className="text-[24px] font-semibold p-4">My Purchased Plans</h4>
        <div className="overflow-x-auto w-full">
          <table className=" border-collapse w-full">
            <thead>
              <tr className="bg-[#E2E2E9] text-secondary">
                <th className="py-2 px-8 text-start">Order Id</th>
                <th className="py-2 px-8 text-start">Plan</th>
                <th className="py-2 px-8 text-start">Price</th>
                <th className="py-2 px-8 text-start">Created</th>
                <th className="py-2 px-8 text-start">Total Days</th>
                <th className="py-2 px-8 text-start">Status</th>
                <th className="py-2 px-8 text-start">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableData.map((item, i) => (
                <tr key={i} className="border-b border-[#E2E2E9]">
                  <TData data="#76380" />
                  <TData data="1 Month" />
                  <TData data="80 USD" />
                  <TData data="12 Jun 2025" />
                  <TData data="30" />
                  <TData>
                    <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                      Licenses Genareted
                    </span>
                  </TData>
                  <TData>
                    <button className="font-semibold text-[14px] text-white bg-[#000000ae] rounded px-5 py-1">
                      View
                    </button>
                  </TData>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchasePlane;
