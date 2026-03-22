"use client";

import { useState } from "react";
import Image from "next/image";
import BestCard from "./Cards/BestCard";
import BaseCard from "./Cards/BaseCard";
import { Agreement } from "./Agreement";
import { Tariff } from "@/app/api/getTariffs";

type MainSectionProps = {
  bestTariff: Tariff;
  baseTariffs: Tariff[];
  isDiscountActive: boolean;
};

export default function MainSection({
  bestTariff,
  baseTariffs,
  isDiscountActive,
}: MainSectionProps) {
  const [checked, setChecked] = useState(false);
  const [agreementError, setAgreementError] = useState(false);

  const [selectedTariffId, setSelectedTariffId] = useState(bestTariff.clientId);

  const handleAgreementToggle = () => {
    setChecked((prev) => {
      const nextValue = !prev;

      if (nextValue) {
        setAgreementError(false);
      }

      return nextValue;
    });
  };

  const handleBuyClick = () => {
    if (!checked) {
      setAgreementError(true);
      return;
    }

    setAgreementError(false);

    return;
    // тут по клику ничего не делаем
  };

  return (
    <main className="w-full h-auto flex flex-col l:flex-row l:mt-[110px] mt-[24px] items-center px-[10px]">
      <div className="relative l:mt-[52px] mt-[0] h-[200px] w-[100px] l:w-[381px] l:h-[767px] overflow-hidden max-[1215px]:ml-auto max-[1215px]:mr-auto">
        <Image
          src="/images/sportsman.png"
          alt="Man picture"
          fill
          className="object-contain"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-b from-transparent to-[#232829]" />
      </div>

      <div className="l:w-[748px] m:w-[343px] w-[288px] l:ml-auto flex flex-col items-start">
        <BestCard
          period={bestTariff.period}
          id={bestTariff.clientId}
          price={bestTariff.price}
          fullPrice={bestTariff.fullPrice}
          text={bestTariff.text}
          isDiscountActive={isDiscountActive}
          selected={selectedTariffId === bestTariff.clientId}
          onSelect={setSelectedTariffId}
        />

        <div className="flex flex-col l:flex-row w-full l:h-[335px] h-auto l:gap-[14px] m:gap-[8px] gap-[6px] justify-start">
          {baseTariffs.map((tariff) => (
            <BaseCard
              key={tariff.clientId}
              id={tariff.clientId}
              period={tariff.period}
              price={tariff.price}
              fullPrice={tariff.fullPrice}
              text={tariff.text}
              isDiscountActive={isDiscountActive}
              selected={selectedTariffId === tariff.clientId}
              onSelect={setSelectedTariffId}
            />
          ))}
        </div>

        <div className="l:w-[499px] m:w-[343px] w-[288px] h-auto flex items-start gap-2 px-5 py-[18px] rounded-[20px] bg-[#2D3233] mt-[20px] leading-[130%] text-[12px] l:text-[16px]">
          <Image
            src="/icons/Excl_mark.svg"
            alt="excl mark"
            height={26}
            width={24}
          />
          Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
          результат, чем за 1 месяц
        </div>

        <Agreement
          checked={checked}
          onToggle={handleAgreementToggle}
          error={agreementError}
        />

        <button
          type="button"
          onClick={handleBuyClick}
          className="cursor-pointer buy-button mt-[16px] flex l:w-[352px] m:w-[343px] w-[288px] l:h-[66px] h-[55px] items-center justify-center gap-[10px] px-[60px] py-5 rounded-[20px] bg-[#FDB056] text-[#191E1F] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB056] focus-visible:ring-offset-2 focus-visible:ring-offset-[#232829]"
        >
          Купить
        </button>

        <p className="w-full l:max-w-[748px] m:max-w-[343px] max-w-[288px] text-left l:text-[14px] text-[10px ] font-normal leading-[120%] text-[#9B9B9B] mt-[14px]">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </main>
  );
}
