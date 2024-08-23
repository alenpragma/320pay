import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowRight } from "react-icons/go";
import BalanceSwiperCard from "../SwiperCard/BalanceSwiperCard";

const BalanceCard = () => {
  return (
    <div>
      <div className="relative mt-5">
        <h4 className="text-secondary text-[20px] font-semibold">
          Your Balance
        </h4>
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
          <SwiperSlide className="w-full mt-5">
            <BalanceSwiperCard />
          </SwiperSlide>
        </Swiper>
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
