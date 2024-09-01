import { Key, useEffect, useState } from "react";
import PaymenModal from "../../comonents/Modal/PaymentModal";
import axiosInstance from "../../utils/axiosConfig";
import PaymentData from "./PaymentData";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const Payment = () => {
  // const [currentPage, setCurrentPage] = useState([])
  // const [isToggled0, setIsToggled0] = useState(false)
  // const handleToggle0 = (id: string) => {
  //   console.log(id, "iddddd")
  //   setIsToggled0(!isToggled0)
  // }

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  // console.log(loading);
  const [tokenId, setTokenId] = useState<string>("");
  const handleModal = () => {
    setModal(!modal);
  };

  const [tokenLoading, setTokenLoading] = useState<boolean>(false);
  console.log(tokenLoading);
  const [tokens, setTokens] = useState<any>([]);

  const getDatas = async () => {
    setTokenLoading(true);
    try {
      const response = await axiosInstance.get("/client-tokens");
      if (response?.data?.data) {
        setTokens(response?.data?.data);
      }
    } catch (err) {
    } finally {
      setTokenLoading(false);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  const handelUpdateStatus = async (id: any, status: string) => {
    setTokenId(id);
    setLoading(true);
    try {
      const updatedData = {
        id,
        status: status == "1" ? 0 : 1,
      };
      const response = await axiosInstance.post(
        "/client-token/update",
        updatedData
      );

      if (response.status === 200) {
        // toast("Payment settings updated");
        getDatas();
        setTokenId("");
      }
    } catch (error) {
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PaymenModal renewModal={modal} handleRenewModal={handleModal} />
      <div className="md:p-6 px-3 pt-4">
        <div className=" rounded-xl border-2 border-[#E2E2E9] mt-4 p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-secondary text-[20px] font-semibold">
              Payment Settings
            </h4>
            <button
              onClick={handleModal}
              className="px-5 py-2 rounded-lg bg-primary text-white font-semibold cursor-pointer"
            >
              Add New Currency
            </button>
          </div>

          {tokenLoading ? (
            <div className="mt-5">
              <Skeleton height={35} count={5} />
            </div>
          ) : (
            <>
              {tokens.length !== 0 ? (
                <>
                  {" "}
                  <div className="overflow-x-auto w-full mt-6">
                    <table className=" border-collapse w-full">
                      <thead>
                        <tr className="bg-[#FAFAFA] text-secondary">
                          <th className="py-2 px-6 text-start  whitespace-nowrap">
                            Currency
                          </th>
                          <th className="py-2 px-6 text-start whitespace-nowrap ">
                            Network
                          </th>
                          <th className="py-2 px-6 text-start  whitespace-nowrap">
                            Status
                          </th>
                          <th className="py-2 px-6 text-start  whitespace-nowrap">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {tokens?.map((token: any, i: Key) => {
                          return (
                            <PaymentData
                              key={i}
                              handelUpdateStatus={handelUpdateStatus}
                              loading={loading}
                              token={token}
                              tokenId={tokenId}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>{" "}
                </>
              ) : (
                "User has not payment"
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
