import { tableData } from "../..";

const DashboardTable = () => {
  return (
    <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 ">
      <h4 className="text-[24px] font-semibold p-4">Last Login Sessions</h4>
      <div className="overflow-x-auto w-full">
        <table className=" border-collapse w-full">
          <thead>
            <tr className="bg-[#E2E2E9]">
              <th className="py-2 px-8 text-start">Location</th>
              <th className="py-2 px-8 text-start">Status</th>
              <th className="py-2 px-8 text-start">Device</th>
              <th className="py-2 px-8 text-start">IP Address</th>
              <th className="py-2 px-8 text-start">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tableData.map((item, i) => (
              <tr key={i} className="border-b border-[#E2E2E9]">
                <td className="py-2 px-8 text-start text-[16px] text-[#868B8F]">
                  London. UK
                </td>
                <td className="py-2 px-8 text-start">
                  <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                    Ok
                  </span>
                </td>
                <td className="py-2 px-8 text-start text-[16px] text-[#868B8F]">
                  Chrome - Windows 10
                </td>
                <td className="py-2 px-8 text-start text-[16px] text-[#868B8F]">
                  162.158.163.86
                </td>
                <td className="py-2 px-8 text-start text-[16px] text-[#868B8F]">
                  21 hours ago
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
