import { Athiti } from "next/font/google";

type BestCardProps = {
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
  const discount = (1 - price / fullPrice) * 100;
  return Math.round(discount / 10) * 10;
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

export default function BestCard({
  id,
  period,
  price,
  fullPrice,
  text,
  isDiscountActive,
  selected,
  onSelect,
}: BestCardProps) {
  const discount = calculateDiscount(price, fullPrice);

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={`
        relative mb-[6px] m:mb-[8px] l:mb-[14px] flex l:h-[190px] l:w-full w-[288px] m:w-[343px]
        items-center justify-between rounded-[34px] border-2 bg-[#313637]
        border-[#FDB056] pt-[30px] pr-[19px] pb-[26px] pl-[19px] text-left
        cursor-pointer transition-all duration-700 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB056] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232829]
        active:scale-[0.99]
        ${
          selected
            ? "bg-[#393F40] shadow-[0_0_0_1px_rgba(253,176,86,0.3),0_20px_44px_rgba(253,176,86,0.20)] ring-2 ring-[#FDB056]/30 ring-offset-2 ring-offset-[#232829]"
            : "hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(253,176,86,0.10)]"
        }
      `}
    >
      {discount !== 0 ? (
        <div
          className={`absolute top-0 l:left-[50px] right-[70px] flex l:h-[39px] l:w-[66px] m:h-[27px] m:w-[48px] h-[23px] w-[42px] items-center justify-center rounded-b-[10px] rounded-t-none bg-[#FD5656] p-2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDiscountActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="text-left font-medium leading-[130%] text-white l:text-[22px] m:text-[16px] text-[13px]">
            -{discount}%
          </span>
        </div>
      ) : null}

      <span className="absolute top-[10px] right-[20px] text-left l:text-[22px] m:text-[16px] text-[13px] font-medium uppercase leading-[130%] tracking-[0.03em] text-[#FDB056]">
        хит!
      </span>

      <div className="mx-auto l:ml-[103px] flex h-[126px] w-full max-w-[546px] items-center justify-center l:gap-[40px] gap-[30px]">
        <div className="flex min-w-[110px] l:min-w-[190px] w-fit flex-col items-start">
          <span className="l:h-[31px] w-full text-center l:text-[26px] m:text-[18px] text-[16px] font-medium leading-[120%] text-white">
            {period}
          </span>

          <div className="relative mt-4 h-[84px] w-full l:min-w-[190px] min-w-[110px]">
            <span
              className={`
                absolute right-0 top-0 w-full text-right text-nowrap font-semibold leading-[100%]
                l:text-[50px] m:text-[34px] text-[30px] text-[#FDB056]
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isDiscountActive
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-3 scale-[0.96]"
                }
              `}
            >
              {formatPrice(price)} ₽
            </span>

            <span
              className={`
                absolute right-0 w-full text-right text-nowrap origin-right
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isDiscountActive
                    ? "top-[42px] m:top-[44px] l:top-[48px] l:text-[24px] m:text-[16px] text-[14px] font-normal leading-[120%] text-[#919191]"
                    : "top-0 l:text-[50px] m:text-[34px] text-[30px] font-semibold leading-[100%] text-[#FDB056]"
                }
              `}
            >
              <span className="relative inline-block">
                {formatPrice(fullPrice)} ₽

                <span
                  className={`
                    pointer-events-none absolute left-0 right-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-[#919191]
                    transition-opacity duration-700 ease-out
                    ${isDiscountActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </span>
            </span>
          </div>
        </div>

        <p className="l:w-[328px] w-[120px] text-left l:text-[16px] text-[14px] font-normal leading-[130%] text-white m:ml-[20px]">
          {text}
        </p>
      </div>
    </button>
  );
}