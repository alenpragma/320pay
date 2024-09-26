import { Key, useState } from "react";
import { Link } from "react-router-dom";
import StartHereModal from "../../Components/Modal/StartHereModdal";
import { images } from "../..";
import axiosInstance from "../../utils/axiosConfig";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";
import { Wallet } from "../Dashboard/Dashboard";

type IPackage = {
  id: number;
  package_name: string;
  short_description: string;
  savings: string | null;
  no_of_domains: string;
  package_price: string;
  duration: string;
  description: string;
  status: string;
  is_deleted: string;
  created_at: string;
  updated_at: string;
};

const StartHere = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [plan, setPlan] = useState<any>("");

  const handleModal = (data?: any) => {
    setPlan(data);
    setModal(!modal);
  };

  const fetchData = async () => {
    const [packages, tokens] = await Promise.all([
      axiosInstance.get(`/client/packages`),
      axiosInstance.get(`/client-tokens`),
    ]);
    return {
      packages: packages.data,
      tokens: tokens.data,
    };
  };

  const { data, isLoading } = useQuery({
    queryKey: ["packeges", "tokens"],
    queryFn: fetchData,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const packages = data?.packages?.packages;
  const tokens = data?.tokens?.data;
  const balance = tokens?.find((wallet: Wallet) => {
    return wallet.token_symbol === "USDT" && wallet.chainID === "56";
  });
  return (
    <>
      <StartHereModal plan={plan} handleModal={handleModal} modal={modal} />
      <div className="md:p-8 px-3 pt-4">
        <div className="flex justify-between">
          <h5>
            <span className="text-secondary text-[14px]"> Balance:</span>{" "}
            <span className="text-black font-bold">
              {isLoading ? "" : <>${balance?.balance}</>}
            </span>
          </h5>
          <Link to="/dashboard/deposit">
            <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Deposit Now
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-8">
          {isLoading ? (
            <>
              <Skeleton height={400} count={1} highlightColor="#F4F5F6" />
              <Skeleton height={400} count={1} highlightColor="#F4F5F6" />
              <Skeleton height={400} count={1} highlightColor="#F4F5F6" />
            </>
          ) : (
            <>
              {" "}
              {packages?.map((data: IPackage, i: Key) => (
                <div
                  key={i}
                  className="p-6 space-y-6 border-t-2 border-t-primary rounded-3xl shadow-md duration-500 hover:shadow-xl hover:translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <h4 className="font-semibold text-[18px]">
                        {data?.package_name}
                      </h4>
                      <span className="px-2 py-1 bg-[#E8E2FD] text-primary rounded font-semibold">
                        Save {data?.savings}
                      </span>
                    </div>
                    <p className="text-[14px] text-secondary mt-3">
                      Essintiul Feature Made Affordable
                    </p>
                  </div>
                  <h4 className="tracking-wide">
                    <span className="font-bold text-[32px] text-black mr-3">
                      ${data?.package_price}
                    </span>
                    <span className="text-secondary text-[14px]">
                      /{data?.duration} Month
                    </span>
                  </h4>
                  <ul className="space-y-1">
                    {data?.description.split("\n").map((desc, i) => {
                      return (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[14px] text-secondary"
                        >
                          <img className="size-5" src={images?.tick} alt="" />
                          <span>{desc}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    onClick={() => handleModal(data)}
                    className="w-full py-2 rounded-xl bg-primary text-white font-semibold"
                  >
                    Get Started
                  </button>
                </div>
              ))}{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StartHere;
