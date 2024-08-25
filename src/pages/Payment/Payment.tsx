import { Key, useEffect, useState } from "react"
import { images, tableData } from "../.."
import TData from "../../comonents/Table/TData"
import Pagination from "../../comonents/Pagination/Pagination"
import PaymenModal from "../../comonents/Modal/PaymentModal"
import axiosInstance from "../../utils/axiosConfig"
import PaymentData from "./PaymentData"

const Payment = () => {
  const [currentPage, setCurrentPage] = useState([])

  const [isToggled0, setIsToggled0] = useState(false)
  const [modal, setModal] = useState(false)

  const handleToggle0 = (id: string) => {
    console.log(id, "iddddd")

    setIsToggled0(!isToggled0)
  }
  const handleModal = () => {
    setModal(!modal)
  }

  // const handleCopy = (copy: any) => {
  //   copyToClipboard(copy)
  // }

  // const history = "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f3BA"
  // const history1 = "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f332"
  // const history2 = "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f3fd"
  // const [historyData, setHistory] = useState("")
  // const handleTras = (history: any) => {
  //   setHistory(history)
  // }

  const [loading, setLoading] = useState<boolean>(false)
  const [tokens, setTokens] = useState<any>([])

  const getDatas = async () => {
    const response = await axiosInstance.get("/client-tokens")
    if (response?.data?.data) {
      setTokens(response?.data?.data)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  const handelUpdateStatus = async (id: string, status: any) => {
    setLoading(true)
    console.log(status, id, "id")

    const updatedData = {
      id,
      status: status == 1 ? 0 : 1,
    }
    const response = await axiosInstance.post(
      "/client-token/update",
      updatedData
    )
    console.log(response.data.succeses)
    if (response.data.succeses == 200) {
      // const tokenToUpdate =
      // tokens.map((token: any) =>
      //   token.id === response.data.id
      //     ? { ...token, status: response.data.status }
      //     : token
      // )
    }

    setLoading(false)
  }

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
              className="px-5 py-2 rounded-lg bg-primary text-white font-semibold"
            >
              Add New Currency
            </button>
          </div>
          <div className="overflow-x-auto w-full mt-6">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#FAFAFA] text-secondary">
                  <th className="py-2 px-6 text-start  whitespace-nowrap">
                    Currency
                  </th>
                  <th className="py-2 px-6 text-start  whitespace-nowrap ">
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
                    />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
