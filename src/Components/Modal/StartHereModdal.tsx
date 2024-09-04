import { RxCross1 } from "react-icons/rx"
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form"
import { toast } from "react-toastify"
import axiosInstance from "../../utils/axiosConfig"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import InputField from "../Forms/InputField"
import Form from "../Forms/Form"
import LoaingAnimation from "../Loading/LoaingAnimation"
import LoadingButton from "../Loading/LoadingButton"
import { useState } from "react"

export const validationSchema = z.object({
  domain: z.string().min(1, "This field is required"),
})

type IModal = {
  handleModal: () => void
  modal: boolean
  plan: any
}

interface FormValues {
  items: { name: string }[]
}

const StartHereModal = ({ plan, handleModal, modal }: IModal) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      items: [{ name: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  // const formSubmit = async (data: FormValues) => {
  //   console.log(data)

  //   const domainString = `${data?.items
  //     .map((item: any) => item.name)
  //     .join(", ")}`

  //   const planData = {
  //     package_id: plan.id,
  //     domain_name: domainString,
  //   }

  //   try {
  //     const response = await axiosInstance.post(
  //       "/client/purchase-package",
  //       planData
  //     )
  //     reset({ items: [{ name: "" }] })

  //     if (response?.data?.error == 400) {
  //       toast.error(response?.data?.messsage)
  //       return
  //     }

  //     if (response?.data?.success == 200) {
  //       toast.success(response?.data?.message)
  //       return
  //     } else {
  //       // Handle any other unexpected cases
  //       toast.error("Unexpected response from the server")
  //     }
  //   } catch (error) {
  //     console.error("Request failed:", error)
  //     toast.error("Something went wrong. Please try again.")
  //   }
  // }

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { domain } = data
    setLoading(true)
    const planData = {
      package_id: plan.id,
      domain_name: domain,
    }

    try {
      const response = await axiosInstance.post(
        "/client/purchase-package",
        planData
      )
      if (response?.data?.error != 200) {
        toast.error(response?.data?.messsage)
        return
      }
      if (response?.data?.success == 200) {
        toast.success(response?.data?.message)
        return
      }
    } catch (error) {
      console.log(error)

      // console.error("Request failed:", error)
      toast.error("Something went wrong. Please try again.")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100   fixed bg-[#07070745] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0 -z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-5/12 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded  ${
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
          <div className="px-5 md:pb-20 pb-8 pt-8">
            <Form
              onSubmit={formSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                domain: "",
              }}
            >
              <div className="md:w-10/12 w-full mx-auto">
                <div className="relative mb-8">
                  <p className="font-semibold text-secondary mb-2">
                    Domain Name
                  </p>
                  <InputField
                    name="domain"
                    type="text"
                    className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-2"
                    placeholder="Enter Your Domain Name"
                  />
                </div>
          
                <div className="w-full mt-6 border border-slate-300 rounded-lg">
                  {loading ? (
                    <LoaingAnimation size={30} color="#36d7b7" />
                  ) : (
                    <LoadingButton className="w-full">Submit</LoadingButton>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHereModal
