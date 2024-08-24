import { Key, useEffect, useState } from "react"
import { tableData } from "../.."
import TData from "../../comonents/Table/TData"
import Modal from "../../comonents/Modal/Modal"
import Pagination from "../../comonents/Pagination/Pagination"
import Renew from "../../comonents/Modal/Renew"
import axiosInstance from "../../utils/axiosConfig"

const Licenses = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [renewModal, setRenewModal] = useState<boolean>(false)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(tableData.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem)
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleModal = () => {
    setModal(!modal)
  }
  const handleRenewModal = () => {
    setRenewModal(!renewModal)
  }

  const [licenses, setLicenses] = useState<any>([])

  const getLicenses = async () => {
    const response = await axiosInstance.get("/client/packages")
    if (response?.data?.success == 200) {
      setLicenses(response?.data?.data)
    }
  }
  useEffect(() => {
    getLicenses()
  }, [])

  return (
    <>
      <Modal handleModal={handleModal} modal={modal} />
      <Renew handleRenewModal={handleRenewModal} renewModal={renewModal} />
      <div className="md:p-6 px-3 pt-4">
        <div className="flex justify-end">
          <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold">
            Add New Licenses
          </button>
        </div>
        <div className=" rounded-xl border-2 border-[#E2E2E9] pb-4 mt-4">
          <div className="overflow-x-auto w-full">
            <table className=" border-collapse md:w-full w-fit">
              <thead>
                <tr className="bg-[#FAFAFA] text-secondary">
                  <th className="py-2 px-6 text-start">SL</th>
                  <th className="py-2 px-6 text-start">Server</th>
                  <th className="py-2 px-6 text-start">Start</th>
                  <th className="py-2 px-6 text-start">Expiry</th>
                  <th className="py-2 px-6 text-start">Status</th>
                  <th className="py-2 px-6 text-start">More</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {licenses?.map((item: any, i: Key) => (
                  <tr key={i} className="border-b border-[#E2E2E9]">
                    {/* <TData
                      children={` ${i <= 8 ? "0" : ""}${i + 1}`}
                      className="w-2/12 px-6"
                    /> */}
                    <TData children={Number(i) + 1} className="w-2/12 px-6" />
                    <TData data="BitCoin_Web30" className="w-2/12  px-6" />
                    <TData data="12 Jun 2024" className="w-2/12 px-6" />
                    <TData data="12 Jun 2025" className="w-2/12 px-6" />
                    <TData className="md:w-2/12 w-full px-6">
                      <div className="md:w-7/12 w-full">
                        {item.status === true ? (
                          <button className="font-semibold text-[14px] text-green-500 bg-[#DCF3DE] rounded py-1 w-full   md:px-0 px-3">
                            Active
                          </button>
                        ) : (
                          <button className="font-semibold text-[14px] text-[#FF9F43] bg-[#FFECD9] rounded py-1 w-full   md:px-0 px-3">
                            Expired
                          </button>
                        )}
                      </div>
                    </TData>
                    <TData className="md:w-2/12 w-full px-6">
                      <div className="md:w-7/12 w-full">
                        {item.status === true ? (
                          <button
                            onClick={handleModal}
                            className="font-semibold text-[14px] text-white bg-[#000000ae] rounded w-full py-1  md:px-0 px-3"
                          >
                            Details
                          </button>
                        ) : (
                          <button
                            onClick={handleRenewModal}
                            className="font-semibold text-[14px] text-white bg-primary rounded w-full  py-1   md:px-0 px-3"
                          >
                            Renew
                          </button>
                        )}
                      </div>
                    </TData>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Licenses
