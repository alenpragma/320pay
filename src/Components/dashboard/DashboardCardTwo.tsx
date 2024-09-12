import { useEffect, useState } from "react"
import { images } from "../.."
import axiosInstance from "../../utils/axiosConfig"

const DashboardCardTwo = () => {
  const [cliendData, setClientData] = useState<any>([])
  const { domains, logins, orders, tickets } = cliendData
  const [loading, setLoading] = useState(false)
  const getWalletData = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.get("/client/dashboard-data")
      if (response?.data?.success === 200) {
        setClientData(response?.data?.data)
        setLoading(false)
      }
    } catch (error) {
      console.error("Failed to fetch wallet data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getWalletData()
  }, [])

  return (
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
            {orders}
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
            {domains}
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
            {tickets}
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
          <h4 className="font-medium text-[16px] text-[#868B8F]">
            Your Logins
          </h4>
          <h4 className="text-[24px] text-[#313436] font-semibold mt-5">
            {logins}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default DashboardCardTwo
