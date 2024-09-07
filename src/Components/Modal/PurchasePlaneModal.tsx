import { images } from "../.."
import { RxCross1 } from "react-icons/rx"

export type IPurchasPlane = {
  domain_name: string
  date: string
  package_id: string
  package_name: string
  package_price: string
  updated_at: string
}

type IModal = {
  handleModal: (data: any) => void
  modal: boolean
  singleData: any
}

const PurchasePlaneModal = ({ handleModal, modal, singleData }: IModal) => {
  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100 fixed bg-[#07070745] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0 -z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] w-2/5 h-fit m-auto right-0 left-0 top-0  rounded  ${
          modal
            ? "bottom-10 opacity-100  duration-300 z-[110]"
            : "bottom-0 opacity-0 duration-300 pointer-events-none"
        }`}
      >
        <div className="w-full h-full rounded">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4>Plan Datils</h4>
            <RxCross1
              onClick={handleModal}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="px-5 pb-20 pt-8">
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Expiry</span>{" "}
              <span className="text-[16px]">{singleData?.date}</span>
            </div>
            {/* <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Order Id</span>{" "}
              <span className="text-[16px]"></span>
            </div> */}
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Domain Name</span>{" "}
              <span className="text-[16px]">{singleData?.domain_name}</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Plan </span>{" "}
              <span className="text-[16px]">{singleData?.package_name}</span>
            </div>
            <div className="flex justify-between items-center text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">Price </span>{" "}
              <span className="text-[16px]">${singleData?.package_price}</span>
            </div>
            <div className="flex justify-between text-secondary py-3 border-b border-b-[#E2E2E9]">
              <span className="text-[18px] font-semibold">
                Scan Licenses QR
              </span>{" "}
              <span className="text-[16px]">
                <img className="size-24" src={images.qrCode} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchasePlaneModal
