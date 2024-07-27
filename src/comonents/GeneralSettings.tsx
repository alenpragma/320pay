import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { getTizaraAdminToken } from "../hooks/handelAdminToken"
import Swal from "sweetalert2"
import { baseUrl } from "../utils/api"
import Breadcrumb from "./Breadcrumbs/Breadcrumb"

type Inputs = {
  id?: number | string
  coinPrice: number
  minCoin: number
  maxCoin: number
}

interface IInputs {
  coinPrice: number | string
  minCoin: number | string
  maxCoin: number | string
  // Add more properties if needed
}

const GeneralSettings = () => {
  const [settings, setSettings] = useState<Inputs>()
  const token = getTizaraAdminToken()

  const { register, handleSubmit } = useForm<IInputs>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/general-settings`)
        console.log(response)

        if (response?.data?.data) {
          setSettings(response?.data?.data)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const onSubmit = async (formData: IInputs) => {
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof IInputs] // Access the value using the key and type assertion

      // If the value is not an empty string, convert it to a number
      if (value === "") {
        delete formData[key as keyof IInputs]
      } else {
        // If the value is not empty, convert it to a number
        formData[key as keyof IInputs] = Number(value)
      }
    })

    if (Object.keys(formData).length === 0) {
      console.log("empty")
      return
    }

    try {
      const response = await fetch(
        `${baseUrl}/general-settings/${settings?.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(formData),
        }
      )
      const responseData = await response.json()
      if (responseData.success) {
        Swal.fire({
          title: "success",
          text: "General settings successfully update",
          icon: "success",
        })
      }
    } catch (error) {
      Swal.fire({
        title: "error",
        text: "Something wrong",
        icon: "error",
      })
    }
  }

  return (
    <>
      <Breadcrumb pageName="General Settings" />
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full xl:w-1/2">
            <label className="mt-2.5 mb-0.5 block text-black dark:text-white">
              Token Price
            </label>
            <input
              type="string"
              {...register("coinPrice")}
              placeholder="Tizara Coin Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              defaultValue={settings?.coinPrice}
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mt-2.5 mb-0.5 block text-black dark:text-white">
              Min Buy Token
            </label>
            <input
              type="number"
              {...register("minCoin")}
              placeholder="Tizara Coin Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              defaultValue={settings?.minCoin}
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mt-2.5 mb-0.5 block text-black dark:text-white">
              Max Buy Token
            </label>
            <input
              type="number"
              {...register("maxCoin")}
              placeholder="Tizara Coin Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              defaultValue={settings?.maxCoin}
            />
          </div>
        </form>

        {/* stake level bonsu */}

        {/* stake level bonsu */}
      </div>
    </>
  )
}

export default GeneralSettings
