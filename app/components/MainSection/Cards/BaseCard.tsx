type BaseCardProps = {
  period: string;
  price: number;
  fullPrice: number;
  text: string;
  isDiscountActive: boolean;
};

function calculateDiscount(price: number, fullPrice: number) {
  if (!fullPrice || fullPrice <= price) return 0;
  return Math.round((1 - price / fullPrice) * 100);
}

export default function BaseCard({
  period,
  price,
  fullPrice,
  text,
  isDiscountActive,
}: BaseCardProps) {
  const discount = calculateDiscount(price, fullPrice);

  return (
    <div
      className="
        relative mb-[14px] flex w-[288px] min-[375px]:w-[343px]
        items-center justify-between rounded-[34px] border-2 bg-[#313637]
        pt-[30px] pr-[19px] pb-[26px] pl-[19px] text-left transition-all

        min-[1216px]:mb-0
        min-[1216px]:h-[335px] min-[1216px]:w-[240px]
        min-[1216px]:flex-col min-[1216px]:items-center min-[1216px]:justify-start
        min-[1216px]:gap-4 min-[1216px]:rounded-[40px]
        min-[1216px]:pt-[70px] min-[1216px]:pr-[21px] min-[1216px]:pl-[21px]
      "
    >
      <div
        className={`
          absolute top-0 right-[70px] flex items-center justify-center
          rounded-b-[10px] rounded-t-none bg-[#FD5656] p-2
          h-[23px] w-[30px] min-[375px]:h-[27px] min-[375px]:w-[40px]
          transition-opacity duration-300
          min-[1216px]:top-[-2px] min-[1216px]:left-[51px] min-[1216px]:right-auto
          min-[1216px]:h-[39px] min-[1216px]:w-[69px] min-[1216px]:rounded-b-[8px]
          min-[1216px]:px-2 min-[1216px]:py-[5px]
          ${isDiscountActive ? "opacity-100" : "opacity-0"}
        `}
      >
        <span className="text-left text-[13px] min-[375px]:text-[16px] min-[1216px]:text-[22px] font-medium leading-[130%] text-white">
          -{discount}%
        </span>
      </div>

      <div
        className="
          mx-auto flex h-[126px] w-full max-w-[546px] items-center justify-center gap-[40px]
          min-[1216px]:h-auto min-[1216px]:w-full min-[1216px]:max-w-none
          min-[1216px]:flex-col min-[1216px]:gap-0
        "
      >
        <div
          className="
            flex min-w-[110px] flex-col items-start
            min-[1216px]:w-[180px] min-[1216px]:items-center
          "
        >
          <span className="w-full text-center text-[16px] min-[375px]:text-[18px] min-[1216px]:h-[31px] min-[1216px]:text-[26px] font-medium leading-[120%] text-white">
            {period}
          </span>

          <span className="mt-4 w-full text-right text-[30px] min-[375px]:text-[34px] min-[1216px]:mt-0 min-[1216px]:h-[50px] min-[1216px]:text-center min-[1216px]:text-[50px] font-semibold leading-[100%] text-white transition-all">
            {isDiscountActive ? price : fullPrice} ₽
          </span>

          <span
            className={`w-full text-right text-[14px] min-[375px]:text-[16px] min-[1216px]:h-[29px] min-[1216px]:w-[180px] min-[1216px]:text-right min-[1216px]:text-[24px] font-normal leading-[120%] text-[#919191] line-through transition-opacity duration-300 ${
              isDiscountActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {fullPrice} ₽
          </span>
        </div>

        <p className="w-[328px] text-left text-[14px] min-[1216px]:mt-auto min-[1216px]:h-[42px] min-[1216px]:w-[204px] min-[1216px]:text-[16px] font-normal leading-[130%] text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
