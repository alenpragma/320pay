import { CiSettings } from "react-icons/ci"
import { useEffect, useState } from "react"
import { removePaymentaToken } from "../../hooks/handelAuthToken"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosConfig"

const UserOne =
  "https://media.licdn.com/dms/image/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/0/1715645354619?e=2147483647&v=beta&t=_WBVcQpyigwPLI-efv18uQQ3eV_hhzU5DcUlIHl77HA"

const DropdownUser = () => {
  const [modal, setModal] = useState<boolean>(false)
  const handleModal = () => {
    setModal(!modal)
  }

  const navigate = useNavigate()
  const handelLogOut = () => {
    removePaymentaToken()
    navigate("/login")
  }

  const [clientProfile, setClientProfile] = useState<any>()

  const getData = async () => {
    const response = await axiosInstance.get("/client-profile")
    if (response?.data?.success == 200) {
      setClientProfile(response?.data?.profile)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="relative flex items-center gap-3">
      <CiSettings className="text-[20px] cursor-pointer" />
      <span className="size-10 rounded-full">
        <img
          onClick={handleModal}
          src={UserOne}
          alt="user"
          className=" rounded-full cursor-pointer"
        />
      </span>
      {modal && (
        <div className="w-[170px] h-[250px] bg-[#E2E2E9] absolute top-14 right-0 flex flex-col justify-center items-center gap-5 rounded-md shadow-lg">
          <img src={UserOne} alt="user" className=" rounded-full size-16" />
          <div>
            <h4 className="font-semibold text-[20px] text-[#616365]">
              {clientProfile.name}
            </h4>
            <p className="text-[#616365]">
              User Id : {clientProfile?.client_secret_id.slice(0, 6)}...{" "}
              {clientProfile?.client_secret_id.slice(-3)}
            </p>
          </div>
          <button
            onClick={handelLogOut}
            className="px-5 py-2 rounded-lg bg-primary text-white font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default DropdownUser
