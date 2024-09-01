import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowRight } from "react-icons/go";
import BalanceSwiperCard from "../SwiperCard/BalanceSwiperCard";
import axiosInstance from "../../utils/axiosConfig";
import { Key, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const BalanceCard = () => {
  const [wallets, setWallets] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const getWalletData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/client-tokens");
      if (response?.data?.success === 200) {
        setWallets(response?.data?.data);
      }
    } catch (error) {
      // console.error("Failed to fetch wallet data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWalletData();
  }, []);

  return (
    <div>
      <div className="relative mt-5">
        <h4 className="text-secondary text-[20px] font-semibold">
          Your Balance
        </h4>
        {loading === true ? (
          <div className="mt-3 grid grid-cols-3 gap-4">
            <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
            <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
            <Skeleton height={60} count={1} highlightColor="#F4F5F6" />
          </div>
        ) : (
          <>
            {wallets.length === 0 ? (
              <div className="w-1/3 rounded bg-[#b3b2b9] py-4 border border-slate-100 font-medium px-3 text-white mt-2">
                <h6>Opps you don't have any balance card</h6>
              </div>
            ) : (
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  100: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {wallets?.map((wallet: any, i: number) => {
                  return (
                    <SwiperSlide key={i} className=" mt-5">
                      <BalanceSwiperCard
                        className="w-[400px]"
                        wallet={wallet}
                        keys={i}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </>
        )}
        {wallets.length >= 3 ? (
          <div className="button-atrrangment absolute top-0 right-0">
            <div className="button-swiper px-3 flex items-center justify-between w-[100px]">
              <div className="swiper-button-prev  bg-primary rounded-full size-10 balance">
                <GoArrowRight className="rotate-180 size-6" />
              </div>
              <div className="swiper-button-next bg-primary rounded-full balance">
                {" "}
                <GoArrowRight className="" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BalanceCard;

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { GoChevronLeft } from "react-icons/go";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import BalanceSwiperCard from "../SwiperCard/BalanceSwiperCard";

// const BalanceCard = () => {
//   return (
//     <div className="relative">
//       <h4 className="text-secondary text-[20px] font-semibold">Your Balance</h4>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           "@1.50": {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//         <SwiperSlide>
//           <BalanceSwiperCard />
//         </SwiperSlide>
//       </Swiper>
//       <div className="button-atrrangment absolute top-3 right-0">
//         <div className="button-swiper px-3 flex items-center justify-between w-[150px]">
//           <div className="swiper-button-prev  bg-[#2F76DE] rounded-full ">
//             <GoChevronLeft className="cursor-pointer size-5" />
//           </div>
//           <div className="swiper-button-next bg-[#2F76DE] rounded-full ">
//             {" "}
//             <GoChevronLeft className="rotate-180 size-8 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BalanceCard;
