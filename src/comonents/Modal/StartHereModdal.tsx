import { RxCross1 } from "react-icons/rx"
import Form from "../Forms/Form"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import InputField from "../Forms/InputField"
import axiosInstance from "../../utils/axiosConfig"
import { toast } from "react-toastify"

type IModal = {
  handleModal: () => void
  modal: boolean
  planId: string
}
export const validationSchema = z.object({
  domainName: z.string().min(1, "This field is required"),
})
const StartHereModal = ({ planId, handleModal, modal }: IModal) => {
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    const planData = {
      package_id: planId,
      domain_name: data.domainName,
    }
    console.log(planData)

    try {
      const response = await axiosInstance.post(
        "/client/purchase-package",
        planData
      )
      console.log(response)

      if (response?.data?.error == 400) {
        toast.error(response?.data?.messsage)
        return
      }

      if (response?.data?.success == 200) {
        toast.success(response?.data?.message)
        return
      } else {
        // Handle any other unexpected cases
        toast.error("Unexpected response from the server")
      }
    } catch (error) {
      console.error("Request failed:", error)
      toast.error("Something went wrong. Please try again.")
    }
  }
  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100   fixed bg-[#070707ac] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0    -z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-2/5 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded  ${
          modal ? " opacity-100 z-[101]" : "opacity-0 -z-[102]"
        }`}
      >
        <div className="w-full h-full rounded">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4>Domain Details</h4>
            <RxCross1
              onClick={handleModal}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="w-3/4 mx-auto">
              <Form
                onSubmit={formSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  domainName: "",
                }}
              >
                <div className="my-10">
                  <div className="mb-10 space-y-3">
                    <label
                      htmlFor="name"
                      className="text-[#3e3e3e] font-semibold text-[18px]"
                    >
                      Domain Name
                    </label>

                    <InputField
                      name="domainName"
                      type="text"
                      className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-4"
                      placeholder="Enter Your Domain Name"
                    />
                  </div>
                  <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full focus:bg-red-500">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHereModal
