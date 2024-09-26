import Skeleton from "react-loading-skeleton";
import { images } from "../..";
const DashboardCardTwo = ({ dashboardData, isLoading }: any) => {
  return (
    <>
      {isLoading ? (
        <div className="mt-5 grid md:grid-cols-4 grid-cols-2 gap-5">
          <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
          <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
          <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
          <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
        </div>
      ) : (
        <div className="w-full border-2 border-[#E2E2E9] rounded-xl p-4 grid md:grid-cols-4 grid-cols-1 xsm:grid-cols-2 md:gap-14 gap-3 -z-[5]">
          <div className="p-2 md:p-3 rounded-xl bg-[#FAFAFA] flex  justify-start items-start gap-5 border-2 border-[#E2E2E9]">
            <div className="size-[48px]  bg-[#fff] rounded-full flex justify-center items-center p-2">
              <img
                className="md:size-[24px] size-full"
                src={images.trophy}
                alt=""
              />
            </div>
            <div className="flex flex-col  justify-start pt-3">
              <h4 className="font-medium text-[16px] text-[#868B8F]">Orders</h4>
              <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
                {dashboardData?.orders}
              </h4>
            </div>
          </div>
          <div className="p-2 md:p-3 rounded-xl bg-[#FAFAFA] flex  justify-start items-start gap-5 border-2 border-[#E2E2E9]">
            <div className="size-[48px]  bg-[#fff] rounded-full flex justify-center items-center p-2">
              <img
                className="md:size-[24px] size-full"
                src={images.shield}
                alt=""
              />
            </div>
            <div className="flex flex-col  justify-start pt-3">
              <h4 className="font-medium text-[16px] text-[#868B8F]">Domain</h4>
              <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
                {dashboardData?.domains}
              </h4>
            </div>
          </div>
          <div className="p-2 md:p-3 rounded-xl bg-[#FAFAFA] flex  justify-start items-start gap-5 border-2 border-[#E2E2E9]">
            <div className="size-[48px]  bg-[#fff] rounded-full flex justify-center items-center p-2">
              <img
                className="md:size-[24px] size-full"
                src={images.ticket}
                alt=""
              />
            </div>
            <div className="flex flex-col  justify-start pt-3">
              <h4 className="font-medium text-[16px] text-[#868B8F]">Ticket</h4>
              <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
                {dashboardData?.tickets}
              </h4>
            </div>
          </div>
          <div className="p-2 md:p-3 rounded-xl bg-[#FAFAFA] flex  justify-start items-start gap-5 border-2 border-[#E2E2E9]">
            <div className="size-[48px]  bg-[#fff] rounded-full flex justify-center items-center p-2">
              <img
                className="md:size-[24px] size-full"
                src={images.file}
                alt=""
              />
            </div>
            <div className="flex flex-col  justify-start pt-3">
              <h4 className="font-medium text-[16px] text-[#868B8F]">
                Your Logins
              </h4>
              <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
                {dashboardData?.logins}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardCardTwo;
