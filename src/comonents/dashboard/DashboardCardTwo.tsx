import { dashboardCard2 } from "../..";

const DashboardCardTwo = () => {
  return (
    <div className="w-full border-2 border-[#E2E2E9] rounded-xl p-4 grid md:grid-cols-4 grid-cols-2 md:gap-14 gap-3 -z-[5]">
      {dashboardCard2.map((item, i) => (
        <div
          key={i}
          className="p-3 rounded-xl bg-[#FAFAFA] flex  justify-start items-start gap-5 border-2 border-[#E2E2E9]"
        >
          <div className="size-[48px]  bg-[#fff] rounded-full flex justify-center items-center p-2">
            <img className="md:size-[24px] size-full" src={item.img} alt="" />
          </div>
          <div className="flex flex-col  justify-start pt-3">
            <h4 className="font-medium text-[16px] text-[#868B8F]">
              {item.title}
            </h4>
            <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
              {item.number}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCardTwo;
