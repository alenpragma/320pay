import { FaCopy } from "react-icons/fa"
import { images } from "../.."
import { useEffect, useState } from "react"
import { copyToClipboard } from "../../utils/Actions"
import Form from "../../comonents/Forms/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import SelectField from "../../comonents/Forms/SelecetField"
import { currency } from "../../comonents/Modal/PaymentModal"
import axiosInstance from "../../utils/axiosConfig"

export const validationSchema = z.object({
  currency: z.string().min(1, "This field is required"),
})

const Deposit = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [textToCopy, setTextToCopy] = useState<string>("")
  const [wallet, setWallet] = useState<any>()
  const handleCopy = (copy: string) => {
    copyToClipboard(textToCopy)
    setTextToCopy(copy)
  }
  const copy = "0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA"

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  const getWallet = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get("/client-wallets")
      if (response?.data?.success === 200) {
        setWallet(response?.data?.data)
      }
    } catch (error) {
      console.error("Failed to fetch wallet data:", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getWallet()
  }, [])

  return (
    <div className="md:p-8 pt-5">
      <div className="md:w-2/5 w-11/12 mx-auto ">
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            currency: "",
          }}
        >
          <SelectField
            name="currency"
            className=""
            options={currency}
            placeholder="Please select an option"
          />
        </Form>
        <div className="mt-5 border border-[#E2E2E9] rounded-2xl">
          <div className="py-2 bg-primary w-full rounded-t-2xl px-5">
            <span className="font-semibold text-white ">
              Pay BNB/ETH/USDT [BEP20/ERC20]
            </span>
          </div>
          <div className="p-8 ">
            <div className="flex justify-center items-center">
              <img src={images.qrCode} alt="" />
            </div>
            <div className="w-full  rounded-lg bg-[#91919131] flex justify-end items-center text-end">
              <span className=" w-full text-[14px]  text-start pl-3 font-semibold">
                0x625336E4A6.....0852A668ad3a3fA
              </span>
              <span
                onClick={() => handleCopy(copy)}
                className="px-3 py-3 text-white bg-primary rounded-r-lg cursor-pointer"
              >
                <FaCopy />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit
