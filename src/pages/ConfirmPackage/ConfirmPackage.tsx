import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Form from "../../Components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../Components/Forms/InputField";

export const validationSchema = z.object({
  coupon: z.string().optional(),
});
const verification = "aaaaaa";
const ConfirmPackage = () => {
  const location = useLocation();
  const { plan, data } = location.state || {};
  const [coupon, setCoupon] = useState("");
  const [confirm, setConfirm] = useState<Boolean>(false);
  const { package_name, package_price, duration } = plan;
  const [totalBalance, setToatalBalance] = useState(Number(package_price));
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (coupon === verification) {
      setConfirm(true);
      const discountPrice = Number(package_price) * 0.1;
      setToatalBalance(Number(package_price - discountPrice));
    }
  };
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
    if (coupon.length < 7) {
      setToatalBalance(Number(package_price));
      setConfirm(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2 mx-auto bg-slate-400 rounded-lg mt-10">
        <div className="w-full h-full rounded bg-[#fff] border border-slate-300">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4>Confirm Order</h4>
          </div>
          <div className="p-3">
            <h6 className="font-medium flex justify-between items-center">
              <span>Domain Name:</span>{" "}
              <span className="font-normal">{data.domain}</span>
            </h6>
            <p className="font-medium">{package_name}</p>
            <div className="flex justify-between items-center">
              <p className="font-medium">{duration}</p>
              <p className="font-medium">
                Price: <span className="font-normal">${package_price}</span>
              </p>
            </div>
            <div>
              <Form
                onSubmit={formSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  coupon: "",
                }}
              >
                <div className=" mt-8">
                  <div className=" flex items-center w-full border border-slate-300 rounded-lg">
                    <div className="md:w-9/12   w-full">
                      <InputField
                        name="coupon"
                        type="text"
                        className="w-full py-[5px] border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-l-lg px-3"
                        placeholder="Coupon Code"
                        onChange={handleCouponChange}
                      />
                    </div>
                    <button
                      className={`w-3/12  text-white font-medium h-full py-[5px] border rounded-r-lg ${
                        coupon.length <= 5
                          ? "bg-[#876fe6] border-[#876fe6] cursor-not-allowed"
                          : "border-primary bg-[#5734dc]"
                      }`}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between py-2 border-b border-b-slate-300">
                <span className="text-slate-700">Subtotal</span>
                <span className="text-slate-700">${package_price}</span>
              </div>
              <div
                className={`flex items-center justify-between py-2 border-b border-b-slate-300 ${
                  confirm ? "text-slate-700" : "text-slate-400"
                }`}
              >
                <span className="">Discount(10%)</span>
                <span className="">-${package_price * 0.1}</span>
              </div>
              <div className="border-b-2 border-dashed border-slate-400 mt-8"></div>
              <div className="flex items-center justify-between py-2 border-b border-b-slate-300">
                <span className="text-slate-700">Total</span>
                <span className="text-slate-700">${totalBalance}</span>
              </div>
            </div>
            <button className="bg-primary py-2 rounded-lg text-white font-medium w-full mt-5">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPackage;
