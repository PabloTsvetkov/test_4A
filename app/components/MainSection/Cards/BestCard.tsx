type BestCardProps = {
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

export default function BestCard({
  period,
  price,
  fullPrice,
  text,
  isDiscountActive,
}: BestCardProps) {
  const discount = calculateDiscount(price, fullPrice);

  return (
    <div
      className={
        "relative mb-[14px] flex min-[1216px]:h-[190px] min-[1216px]:w-full w-[288px] min-[375px]:w-[343px] items-center justify-between rounded-[34px] border-2 bg-[#313637] border-[#FDB056] pt-[30px] pr-[19px] pb-[26px] pl-[19px] text-left transition-all"
      }
    >
      {discount !== 0 ? (
        <div
          className={`absolute top-0 min-[1216px]:left-[50px] right-[70px] flex min-[1216px]:h-[39px] min-w-[50px] min-[375px]:h-[27px] h-[23px] min-[375px]:text-[16px] w-[30px] text-[13px] items-center justify-center rounded-b-[10px] rounded-t-none bg-[#FD5656] p-2 transition-opacity duration-300 ${
            isDiscountActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-left font-medium leading-[130%] text-white min-[1216px]:text-[22px] min-[375px]:text-[16px] text-[13px]">
            -{discount}%
          </span>
        </div>
      ) : (
        <></>
      )}

      <span className="absolute top-[10px] right-[20px] text-left min-[1216px]:text-[22px] min-[375px]:text-[16px] text-[13px] font-medium uppercase leading-[130%] tracking-[0.03em] text-[#FDB056]">
        хит!
      </span>

      <div className="mx-auto flex h-[126px] w-full max-w-[546px] items-center justify-center gap-[40px]">
        <div className="flex min-w-[110px] min-[1216px]:min-w-[190px] flex-col items-start">
          <span className="min-[1216px]:h-[31px] w-full text-center min-[1216px]:text-[26px] min-[375px]:tetxt-[18px] text-[16px] font-medium leading-[120%] text-white">
            {period}
          </span>

          <span className="min-[1216px]:h-[50px] w-full text-right min-[1216px]:text-[50px] min-[375px]:tetxt-[34px] text-[30px] font-semibold leading-[100%] text-[#FDB056] mt-4">
            {isDiscountActive ? price : fullPrice} ₽
          </span>

          <span
            className={`h-[29px] w-full text-right min-[1216px]:text-[24px] min-[375px]:tetxt-[16px] text-[14px] font-normal leading-[120%] text-[#919191] line-through transition-opacity duration-300 ${
              isDiscountActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {fullPrice} ₽
          </span>
        </div>

        <p className="w-[328px] text-left min-[1216px]:text-[16px] text-[14px] font-normal leading-[130%] text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
