import { Key, useEffect, useState } from "react";
import TData from "../../Components/Table/TData";
import axiosInstance from "../../utils/axiosConfig";
import PurchasePlaneModal from "../../Components/Modal/PurchasePlaneModal";
import Skeleton from "react-loading-skeleton";
import { formatToLocalDate } from "../../hooks/formatDate";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PurchasePlane = () => {
  const [modal, setModal] = useState(false);
  const [singleData, setSingleData] = useState();

  //  --------- purchase plan modal show funciton
  const handleModal = (clientId: any) => {
    setModal(!modal);
    const purchasePlanSingleData = purchasePlane?.find(
      (data: any) => data.id === clientId
    );
    setSingleData(purchasePlanSingleData);
  };

  const fetchApi = async () => {
    const response = await axiosInstance("/client/package-purchase-history");
    return response;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["walletAddress"],
    queryFn: fetchApi,
    staleTime: 10000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
  const purchasePlane = data?.data?.data;
  return (
    <>
      <PurchasePlaneModal
        handleModal={handleModal}
        modal={modal}
        singleData={singleData}
      />
      <div className="md:p-6 px-3 pt-4">
        <div className="flex justify-end">
          <Link to="/dashboard/start-here">
            <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Add New Licenses
            </button>
          </Link>
        </div>
        {isLoading ? (
          <div className="mt-5">
            <Skeleton height={35} count={7} />
          </div>
        ) : (
          <>
            {purchasePlane.length !== 0 ? (
              <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
                <div className="overflow-x-auto w-full">
                  <table className=" border-collapse w-full">
                    <thead>
                      <tr className="bg-[#FAFAFA] text-secondary">
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Order Id
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap ">
                          Plan
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Price
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Created
                        </th>
                        {/* <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Total Days
                        </th> */}
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Status
                        </th>
                        <th className="py-2 px-6 text-start  whitespace-nowrap">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {purchasePlane?.map((item: any, i: Key) => (
                        <tr
                          key={i}
                          className="border-b border-[#E2E2E9] text-[#616365]"
                        >
                          <TData data={item.client_id} className="  px-6" />
                          <TData data={item.package_name} className="px-6" />
                          <TData className="px-6">${item.package_price}</TData>
                          <TData
                            data={formatToLocalDate(item.created_at)}
                            className="  px-6"
                          />
                          <TData className="px-6">
                            <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                              {item.status == 0 ? "Valid" : "Expired"}
                            </span>
                          </TData>
                          <TData className="  px-6">
                            <button
                              onClick={() => handleModal(item.id)}
                              className="font-semibold text-[14px] text-white bg-[#000000ae] rounded px-5 py-1"
                            >
                              View
                            </button>
                          </TData>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              "User hasn't any purchase plan"
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PurchasePlane;
