type BaseCardProps = {
  id: string;
  period: string;
  price: number;
  fullPrice: number;
  text: string;
  isDiscountActive: boolean;
  selected: boolean;
  onSelect: (id: string) => void;
};

function calculateDiscount(price: number, fullPrice: number) {
  if (!fullPrice || fullPrice <= price) return 0;
  return Math.round((1 - price / fullPrice) * 100);
}

export default function BaseCard({
  id,
  period,
  price,
  fullPrice,
  text,
  isDiscountActive,
  selected,
  onSelect,
}: BaseCardProps) {
  const discount = calculateDiscount(price, fullPrice);

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={`
        relative flex w-[288px] m:w-[343px]
        items-center justify-between rounded-[34px] border-2 bg-[#313637]
        pt-[30px] pr-[19px] pb-[26px] pl-[19px] text-left cursor-pointer
        transition-all duration-300 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB056] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232829]
        active:scale-[0.99]

        l:mb-0
        l:h-[335px] l:w-[240px]
        l:flex-col l:items-center l:justify-start
        l:gap-4 l:rounded-[40px]
        l:pt-[70px] l:pr-[21px] l:pl-[21px]

        ${
          selected
            ? "border-[#FDB056] bg-[#393F40] shadow-[0_0_0_1px_rgba(253,176,86,0.28),0_18px_40px_rgba(253,176,86,0.18)] ring-2 ring-[#FDB056]/25 ring-offset-2 ring-offset-[#232829]"
            : "border-[#484D4E] hover:border-[#6A7071] hover:-translate-y-[2px]"
        }
      `}
    >
      <div
        className={`absolute top-0 l:left-[50px] right-[70px] flex l:h-[39px] l:w-[66px] m:h-[27px] m:w-[48px] h-[23px] w-[42px] m:text-[16px] text-[13px] items-center justify-center rounded-b-[10px] rounded-t-none bg-[#FD5656] p-2 transition-opacity duration-300 ${
          isDiscountActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-left text-[13px] m:text-[16px] l:text-[22px] font-medium leading-[130%] text-white">
          -{discount}%
        </span>
      </div>

      <div
        className="
          mx-auto flex h-[126px] w-full max-w-[546px] items-center justify-center l:gap-[40px] gap-[30px]
          l:h-auto l:w-full l:max-w-none
          l:flex-col l:gap-0
        "
      >
        <div
          className="
            flex min-w-[110px] flex-col items-start
            l:w-[180px] m:w-[150px] m:min-w-[130px] l:items-center w-fit
          "
        >
          <span className="w-full text-center text-[16px] m:text-[18px] l:h-[31px] l:text-[26px] font-medium leading-[120%] text-white">
            {period}
          </span>

          <span className="mt-4 w-fit text-right text-[30px] m:text-[34px] l:mt-0 l:h-[50px] l:text-center l:text-[50px] font-semibold leading-[100%] text-white transition-all ml-auto">
            {isDiscountActive ? price : fullPrice} ₽
          </span>

          <span
            className={`w-full text-right text-[14px] m:text-[16px] l:h-[29px] l:w-[180px] l:text-right l:text-[24px] font-normal leading-[120%] text-[#919191] line-through transition-opacity duration-300 ${
              isDiscountActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {fullPrice} ₽
          </span>
        </div>

        <p className="w-[328px] text-left text-[14px] l:mt-auto l:h-[42px] l:w-[204px] l:text-[16px] font-normal leading-[130%] text-white">
          {text}
        </p>
      </div>
    </button>
  );
}
