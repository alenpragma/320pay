import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Form from "../../Components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../Components/Forms/InputField";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import LoadingButton from "../../Components/Loading/LoadingButton";
import LoaingAnimation from "../../Components/Loading/LoaingAnimation";

export const validationSchema = z.object({
  coupon: z.string().optional(),
});
const ConfirmPackage = () => {
  const location = useLocation();
  const { plan, data } = location.state || {};
  const [coupon, setCoupon] = useState("");
  const [confirm, setConfirm] = useState<Boolean>(false);
  const { package_name, package_price, duration } = plan;
  const [totalBalance, setToatalBalance] = useState(Number(package_price));
  const [couponData, setCouponData] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    // setLoading(true);
    try {
      const response = await axiosInstance.get(
        `user-coupon?coupon_code=${data?.coupon}`
      );
      setCouponData(response?.data?.data);
      const couponData = response?.data?.data;
      if (couponData.status === "valid") {
        setConfirm(true);
        const discountPrice =
          Number(package_price / 100) * couponData?.percentage;
        setToatalBalance(Number(package_price - discountPrice));
      }
    } catch (err) {
      Swal.fire({
        text: "Your coupon is invalid",
        icon: "error",
        customClass: {
          popup: "custom-swal-modal",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
    if (coupon.length < 7) {
      setToatalBalance(Number(package_price));
      setCouponData("");
      setConfirm(false);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/client/purchase-package", {
        package_id: plan?.id,
        domain_name: data,
        coupon_code: couponData?.coupon_code,
      });
      const error = response.data.messsage;
      if (response?.data?.error) {
        Swal.fire({
          text: error,
          icon: "error",
          customClass: {
            popup: "custom-swal-modal",
          },
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
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
                      type="submit"
                      className={`w-3/12 text-white font-medium h-full py-[5px] border rounded-r-lg ${
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
                <span className="">
                  Discount {couponData ? <>({couponData?.percentage})%</> : ""}
                </span>
                <span className="">
                  {couponData ? (
                    <>-${(package_price / 100) * couponData?.percentage}</>
                  ) : (
                    "$ 0.00"
                  )}
                </span>
              </div>
              <div className="border-b-2 border-dashed border-slate-400 mt-8"></div>
              <div className="flex items-center justify-between py-2 border-b border-b-slate-300">
                <span className="text-slate-700">Total</span>
                <span className="text-slate-700">${totalBalance}</span>
              </div>
            </div>

            <div className="w-full mt-6 border border-slate-300 rounded-lg">
              {loading ? (
                <LoaingAnimation size={30} color="#36d7b7" />
              ) : (
                <div onClick={handleConfirm}>
                  <LoadingButton className="w-full">
                    {" "}
                    Confirm Order
                  </LoadingButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPackage;
