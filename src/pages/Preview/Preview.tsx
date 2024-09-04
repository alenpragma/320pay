import { Link, useLocation } from "react-router-dom"

const Preview = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const data = queryParams.get("data")
  console.log(data)

  return (
    <div className="md:w-1/2 w-full mx-auto mt-20 rounded-lg px-3">
      <h4 className="text-center text-secondary font-medium text-[18px]">
        Confirm Order
      </h4>
      <div className="text-center mt-4">
        <p className="text-[14px] text-black">Received Amount</p>
        <h4 className="text-[24px] font-semibold  leading-6">99 USDT</h4>
      </div>
      <div className="space-y-6 mt-10">
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Network</h6>
          <h6 className="bg-primary rounded-lg text-[14px] px-2 text-white py-[2px] w-fit">
            BNB Smart Chain(BEP20)
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Address</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            0xa67c70a17d48e1f570796732139a078c8c8d1b73
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Withdrawal Amount</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            $100
          </h6>
        </div>
        <div className="flex items-center justify-between">
          <h6 className="text-secondary text-[14px]">Network Fee</h6>
          <h6 className=" text-[14px] px-2 text-secondary py-[2px] w-fit">
            $0.01
          </h6>
        </div>
      </div>
      <Link to="/dashboard/withdraw/preview/otp">
        <button className="px-5 py-2 mt-5 w-full rounded-lg bg-primary text-white font-semibold">
          Submit
        </button>
      </Link>

      {/* <div className="flex justify-center items-center">
                  {loading ? (
                    <button className="px-5 rounded-xl bg-[#5634dc93] text-white font-semibold w-[90%] flex justify-center items-center cursor-not-allowed">
                      <Loading />
                    </button>
                  ) : (
                    <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-[90%]">
                      Submit
                    </button>
                  )}
                </div> */}
    </div>
  )
}

export default Preview
