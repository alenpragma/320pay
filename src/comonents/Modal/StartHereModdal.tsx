import { RxCross1 } from "react-icons/rx"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import axiosInstance from "../../utils/axiosConfig"

type IModal = {
  handleModal: () => void
  modal: boolean
  plan: any
}

interface FormValues {
  items: { name: string }[]
}

const StartHereModal = ({ plan, handleModal, modal }: IModal) => {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      items: [{ name: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  const formSubmit = async (data: FormValues) => {
    console.log(data)

    const domainString = `${data?.items
      .map((item: any) => item.name)
      .join(", ")}`

    const planData = {
      package_id: plan.id,
      domain_name: domainString,
    }

    try {
      const response = await axiosInstance.post(
        "/client/purchase-package",
        planData
      )
      reset({ items: [{ name: "" }] })

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
            ? " opacity-100 fixed bg-[#070707ac] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0-z-50"
        }`}
        onClick={() => {
          reset({ items: [{ name: "" }] })

          handleModal()
        }}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-2/5 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded overflow-y-auto ${
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
          <div className="p-5 overflow-auto max-h-[500px]">
            <div className="w-3/4 mx-auto overflow-auto">
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="my-5">
                  {fields.map((field, index) => (
                    <div key={field.id}>
                      <div className="mb-5 space-y-1">
                        <h4>Domain Name {index + 1} </h4>
                        <div className="flex w-full gap-3 justify-between">
                          <div className="w-full">
                            <input
                              {...register(`items.${index}.name` as const, {
                                required: true,
                              })}
                              className="start-here-input-field"
                              placeholder={`Item ${index + 1}`}
                            />
                          </div>

                          <button
                            disabled={index == 0}
                            type="button"
                            onClick={() => remove(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="bg-primary text-white rounded-lg px-4 py-1 mb-3"
                    onClick={() => append({ name: "" })}
                    disabled={plan.no_of_domains == fields.length}
                  >
                    add new
                  </button>
                  <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full focus:bg-red-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHereModal
