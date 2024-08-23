import React from "react"
import TData from "../../comonents/Table/TData"
import { MdContentCopy } from "react-icons/md"
import HoverTableItem from "../../lib/HoverTableItem"
import { copyToClipboard } from "../../utils/Actions"

const TransactionRow = ({ data }: any) => {
  const handleCopy = (copy: any) => {
    copyToClipboard(copy)
  }

  return (
    <>
      <tr className="border-b border-[#E2E2E9]">
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
            {/* {data.hash  ? ( */}
            <HoverTableItem value={data.hash} />
            {/* ) : ( */}
            {/* "" */}
            {/* )} */}
          </div>
        </TData>
        <TData data={`${data?.value} ${"selectValue"}`} className="px-6" />

        <TData className="px-3">
          <div className="relative">
            <div className="flex items-center">
              <span
                className="hover:bg-green-100 px-3 rounded"
                // onMouseEnter={() => handleTras(data.from)}
                // onMouseLeave={() => handleTras(null)}
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
            <HoverTableItem value={data.from} />
            {/* {data.from == historyData ? (
                        ) : (
                          ""
                        )} */}
          </div>
        </TData>
        <TData className="px-3">
          <div className="relative">
            <div className="flex items-center">
              <span
                className="hover:bg-green-100 px-3 rounded"
                // onMouseEnter={() => handleTras(data.to)}
                // onMouseLeave={() => handleTras(null)}
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
            <HoverTableItem value={data.to} />
            {/* {data.to == historyData ? (
                        ) : (
                          ""
                        )} */}
          </div>
        </TData>
        <TData className="  px-6">
          <span className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded px-5 py-1">
            {data.status == 1 ? "Complete" : "Pending"}
          </span>
        </TData>
      </tr>
    </>
  )
}

export default TransactionRow
