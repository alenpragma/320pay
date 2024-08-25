import React, { useState } from "react"
import { MdContentCopy } from "react-icons/md"
import HoverTableItem from "../../lib/HoverTableItem"
import { copyToClipboard } from "../../utils/Actions"
import TData from "../../comonents/Table/TData"

const TransactionRow = ({ data, selectValue, wallet }: any) => {
  const [hoveredField, setHoveredField] = useState<string | null>(null)

  const handleCopy = (copy: any) => {
    copyToClipboard(copy)
  }

  const handleMouseEnter = (field: string) => {
    setHoveredField(field)
  }

  const handleMouseLeave = () => {
    setHoveredField(null)
  }

  return (
    <>
      <tr className="border-b border-[#E2E2E9]">
        <TData data={data?.timestamp} className="px-6" />
        <TData className="px-3">
          <div className="relative">
            <div className="flex items-center">
              <span
                className="hover:bg-green-100 w-40 px-3 rounded"
                onMouseEnter={() => handleMouseEnter("hash")}
                onMouseLeave={handleMouseLeave}
              >
                {data.hash?.slice(0, 6)}
                ........
                {data.hash?.slice(-8)}
              </span>
              <MdContentCopy
                onClick={() => handleCopy(data.hash)}
                className="cursor-pointer rotate-180 size-5"
              />
            </div>
            {hoveredField === "hash" && <HoverTableItem value={data.hash} />}
          </div>
        </TData>
        <TData data={`${data?.value} ${selectValue}`} className="px-6" />

        <TData className="px-3">
          <div className="relative">
            <div className="flex items-center">
              <span
                className="hover:bg-green-100 px-3 rounded"
                onMouseEnter={() => handleMouseEnter("from")}
                onMouseLeave={handleMouseLeave}
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
            {hoveredField === "from" && <HoverTableItem value={data.from} />}
          </div>
        </TData>
        <TData className="px-3">
          <div className="relative">
            <div className="flex items-center">
              <span
                className="hover:bg-green-100 px-3 rounded"
                onMouseEnter={() => handleMouseEnter("to")}
                onMouseLeave={handleMouseLeave}
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
            {hoveredField === "to" && <HoverTableItem value={data.to} />}
          </div>
        </TData>
        <TData className="px-6">
          <span
            className={`${
              data?.to?.toLowerCase() === wallet?.toLowerCase()
                ? " text-green-500 bg-[#DCF3DE]"
                : " text-red-500 bg-[rgba(163,10,10,0.2)]"
            } font-semibold text-[14px]  rounded px-5 py-1`}
          >
            {data?.to?.toLowerCase() === wallet?.toLowerCase() ? "in" : "out"}
          </span>
        </TData>
      </tr>
    </>
  )
}

export default TransactionRow
