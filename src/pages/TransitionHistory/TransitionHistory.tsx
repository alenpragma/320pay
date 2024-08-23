import { Key, useEffect, useState } from "react"
import { tableData } from "../.."
import TData from "../../comonents/Table/TData"
import Pagination from "../../comonents/Pagination/Pagination"
import Select from "react-select"
import { copyToClipboard } from "../../utils/Actions"
import { MdContentCopy } from "react-icons/md"
import HoverTableItem from "../../lib/HoverTableItem"
import axiosInstance from "../../utils/axiosConfig"

// const options = [
//   { value: "bnb", label: "BNB" },
//   { value: "btc", label: "BTC" },
//   { value: "usd", label: "USD" },
// ]

type ITransaction = {
  status: string | number
  message: string
  value: number
  to: string
  from: string
  hash: string
  token_name: string
  token_symbol: string
  gas: string
  gasPrice: string
  timestamp: string
}

const TransitionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(tableData.length / itemsPerPage)
  // const indexOfLastItem = currentPage * itemsPerPage
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem)

  const [selectValue, setSelectValue] = useState("")
  const [historyData, setHistory] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState<any>([])
  const [walletHistory, setWalletHistory] = useState<any>([])
  //
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleCopy = (copy: any) => {
    copyToClipboard(copy)
  }

  const handleTras = (history: any) => {
    setHistory(history)
  }

  const getDatas = async () => {
    const response = await axiosInstance.get("/client-tokens")
    if (response?.data?.data) {
      setTokenSymbol(response?.data?.data)
      setSelectValue(response?.data?.data[0].token_symbol)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  let options
  if (tokenSymbol) {
    options = tokenSymbol?.map((item: any) => ({
      id: item.id,
      label: item?.token_symbol,
      value: item?.token_symbol,
    }))
  }

  const getTransactions = async (value: string) => {
    if (value) {
      console.log(value)

      const response = await axiosInstance.get(
        `client/transactions?token_symbol=${value}`
      )

      if (response?.data.data.status == 0) {
        console.log("data not found")
      }
      if (
        response?.data.success === 200 &&
        Array.isArray(response?.data.data)
      ) {
        setWalletHistory(response?.data.data)
      }
    }
  }

  useEffect(() => {
    getTransactions(selectValue)
  }, [selectValue && tokenSymbol])

  const hanldeChenge = (e: any) => {
    setSelectValue(e.label)
    getTransactions(selectValue)
  }

  return (
    <>
      <div className="md:p-6 px-3 pt-4">
        <div className="flex justify-start">
          <div>
            <Select
              options={options}
              classNamePrefix="custom-select"
              placeholder="Select Here"
              defaultInputValue={selectValue ?? ""}
              onChange={hanldeChenge}
            />
            {/* <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
              Deposit Now
            </button> */}
          </div>
        </div>
        <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
          <div className="overflow-x-auto w-full">
            <table className=" border-collapse w-full">
              <thead>
                <tr className="bg-[#FAFAFA] text-[#616365]">
                  <th className="py-2 px-6 text-start">Date</th>
                  <th className="py-2 px-6 text-start">Transaction Hash</th>
                  <th className="py-2 px-6 text-start">Amount</th>
                  <th className="py-2 px-6 text-start">From Wallet</th>
                  <th className="py-2 px-6 text-start">To Wallet</th>
                  <th className="py-2 px-6 text-start">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {walletHistory?.map((data: ITransaction, i: Key) => (
                  <tr key={i} className="border-b border-[#E2E2E9]">
                    <TData data={data?.timestamp} className="  px-6" />
                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            // onMouseEnter={() => handleTras(data.wallletHistory)}
                            // onMouseLeave={() => handleTras(null)}
                          >
                            {data.hash?.slice(0, 10)}
                            .......
                            {data.hash?.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.hash)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.hash == historyData ? (
                          <HoverTableItem value={data.hash} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData
                      data={`${data?.value} ${selectValue}`}
                      className="px-6"
                    />

                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            onMouseEnter={() => handleTras(data.from)}
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.from?.slice(0, 10)}
                            .......
                            {data.from?.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.from)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.from == historyData ? (
                          <HoverTableItem value={data.from} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData className="px-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <span
                            className="hover:bg-green-100 px-3 rounded"
                            onMouseEnter={() => handleTras(data.to)}
                            onMouseLeave={() => handleTras(null)}
                          >
                            {data.to?.slice(0, 10)}
                            .......
                            {data.to?.slice(-8)}
                          </span>
                          <MdContentCopy
                            onClick={() => handleCopy(data.to)}
                            className="cursor-pointer rotate-180 size-5"
                          />
                        </div>
                        {data.to == historyData ? (
                          <HoverTableItem value={data.to} />
                        ) : (
                          ""
                        )}
                      </div>
                    </TData>
                    <TData className="  px-6">
                      <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
                        {data.status == 1 ? "Complete" : "Pending"}
                      </span>
                    </TData>
                  </tr>
                ))}
              </tbody>
            </table>
            {walletHistory.length == 0 && (
              <p className="text-center text-xl font-semibold text-[#616365] mt-4">
                Data not found
              </p>
            )}
          </div>
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
      />
    </>
  )
}

export default TransitionHistory
