const BalanceSwiperCard = () => {
  return (
    <div className="bg-red-100 flex p-3 rounded-md justify-between items-center border border-slate-300 gap-2">
      <div className="w-1/5">
        <img
          className="size-10"
          src="https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center w-4/5">
        <div className="">
          <div className="flex items-center gap-1">
            <h5>BNB</h5>
            <span className="bg-yellow-500 text-white text-[8px] px-3 py-[2px] rounded-md h-fit">
              BSC
            </span>
          </div>
          <p className="text-[12px] text-secondary">BNB Coin</p>
        </div>
        <div>
          <h4 className="text-[18px]">312.00</h4>
          <h4 className="text-[14px] text-secondary">$3112</h4>
        </div>
      </div>
    </div>
  );
};

export default BalanceSwiperCard;
