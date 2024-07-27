import { dashboardCard2, images } from "../..";

const DashboardCardTwo = () => {
  return (
    <div className="w-full border-2 border-[#E2E2E9] rounded-xl p-4 grid md:grid-cols-4 grid-cols-2 md:gap-14 gap-3 -z-[5]">
      {dashboardCard2.map((item, i) => (
        <div
          key={i}
          className="p-3 rounded-xl bg-[#E2E2E9] flex flex-col justify-center items-center"
        >
          <div className="flex justify-start items-center gap-5">
            <div className="size-12  bg-[#fff] rounded-full flex justify-center items-center p-2">
              <img className="md:size-[36px] size-full" src={item.img} alt="" />
            </div>
            <h4 className="font-medium text-[16px] text-[#868B8F]">
              {item.title}
            </h4>
          </div>
          <h4 className="text-[24px] font-semibold md:mt-5 mt-3">{item.number}</h4>
        </div>
      ))}
    </div>
  );
};

export default DashboardCardTwo;
