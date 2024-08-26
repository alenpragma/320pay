import { useState } from "react";
import TData from "../../comonents/Table/TData";

const PaymentData = ({ handelUpdateStatus, loading, token }: any) => {
  const [isToggled, setIsToggled] = useState(false);
  const [updateId, setUpdateId] = useState("");

  // const handleToggl1 = () => {
  //   setIsToggled1(!isToggled1)
  // }
  // const handleToggl2 = () => {
  //   setIsToggled2(!isToggled2)
  // }

  const handleToggle0 = (id: any, status: string) => {
    setUpdateId(id);
    handelUpdateStatus(id, status);
    // setIsToggled(!isToggled);
  };
  return (
    <>
      <tr className="border-b border-[#E2E2E9] text-[#616365]">
        <TData className="  px-6">
          <div className="flex items-center gap-3">
            <img className="w-10" src={token?.image} alt="" />
            <span>{token?.token_name}</span>
          </div>
        </TData>

        <TData className="  px-6">
          <div className="flex items-center gap-3">
            <span>{token?.rpc_chain}</span>
          </div>
        </TData>

        <TData className="  px-6">
          <button
            className={`font-semibold text-[14px] ${
              token?.status == 0 ? "text-[#4FC55B]" : "text-[#FF8109]"
            } bg-[#DCF3DE] rounded py-1 w-[100px] md:px-0 px-3`}
          >
            {token?.status == 0 ? "Active" : "Deactive"}
          </button>
        </TData>
        <TData>
          {" "}
          <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
              token.status == 0 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
            }`}
            onClick={() => handleToggle0(token.id, token.status)}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                token.status !== 1 ? "translate-x-6" : ""
              }`}
            ></div>{" "}
          </div>
        </TData>

        {/* <TData className="px-6">
          {loading == false || updateId == token.id ? (
            <div
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                token.status == 0 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
              }`}
              onClick={() => handleToggle0(token.id, token.status)}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                  token.status !== 1 ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          ) : (
            "loading.."
          )}
        </TData> */}
      </tr>
    </>
  );
};

export default PaymentData;

// <div
// className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
//   token.status != 1 ? "bg-[#4FC55B]" : "bg-[#FF8109]"
// }`}
// onClick={() => handleToggle0(token.id, token.status)}
// >
//    {loading && token.id == updateId ? (
//   "loading"
// ) : (
//   <div
//     className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
//       token.status == 1 ? "translate-x-6" : ""
//     }`}
//   ></div>
// )}

// <div
//   className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
//     token.status == 1 ? "translate-x-6" : ""
//   }`}
// ></div>
// </div>
