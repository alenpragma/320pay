import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Navigate, useLocation } from "react-router-dom";
import Form from "../../Components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../Components/Forms/InputField";
import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import LoadingButton from "../../Components/Loading/LoadingButton";
import LoaingAnimation from "../../Components/Loading/LoaingAnimation";

interface Plan {
  package_name?: string;
  package_price?: number;
  duration?: number;
}

export const validationSchema = z.object({
  coupon: z.string().optional(),
});
const ConfirmPackage = () => {
  const location = useLocation();
  const { plan, data } = location.state || {};
  const package_name = plan?.package_name || "";
  const package_price = plan?.package_price || "";
  const duration = plan?.duration || "";

  const [coupon, setCoupon] = useState("");
  const [confirm, setConfirm] = useState<Boolean>(false);
  const [totalBalance, setToatalBalance] = useState(Number(package_price));
  const [couponData, setCouponData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {};
  const handleCouponChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
    if (e.target.value.length > 5) {
      try {
        const response = await axiosInstance.get(
          `user-coupon?coupon_code=${e.target.value}`
        );
        if (response) {
          setCouponData(response?.data?.data);
        }
        const couponData = response?.data?.data;
        if (couponData.status === "valid") {
          setConfirm(true);
          const discountPrice =
            Number(package_price / 100) * couponData?.percentage;
          console.log(discountPrice);
          setToatalBalance(Number(package_price - discountPrice));
        }
      } catch (err) {
        setError("Invalid Coupon");
      } finally {
      }
    }
    if (coupon.length > 5) {
      setToatalBalance(Number(package_price));
      setCouponData("");
      setConfirm(false);
      setError("");
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
      if (response?.data?.status === 200) {
        Swal.fire({
          text: "successfully buy",
          icon: "success",
          customClass: {
            popup: "custom-swal-modal",
          },
        });
      }
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

  useEffect;

  return (
    <>
      {package_name ? (
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 mx-auto bg-slate-400 rounded-lg mt-10">
            <div className="w-full h-full rounded bg-[#fff] border border-slate-300">
              <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
                <h4>Confirm Order</h4>
              </div>
              <div className="p-3">
                <h6 className="font-medium flex justify-between items-center">
                  <span>Domain Name:</span>
                  {""}
                  <span className="font-normal">{data.domain}</span>
                </h6>
                <p className="font-medium">{package_name} Package</p>
                <div className="flex justify-between items-center">
                  <p className="font-medium">{parseInt(duration)} Month</p>
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
                      <div className="w-full rounded-lg">
                        <div className="w-full">
                          <InputField
                            name="coupon"
                            type="text"
                            className="w-full py-[5px] border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-lg px-3"
                            placeholder="Coupon Code"
                            onChange={handleCouponChange}
                            maxlength={6}
                          />
                        </div>
                        <p className="text-[12px] text-red-500 mt-5">{error}</p>
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
                      Discount{" "}
                      {couponData ? <>({couponData?.percentage})%</> : ""}
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
      ) : (
        <Navigate to="/wrong-path" />
      )}
    </>
  );
};

export default ConfirmPackage;
