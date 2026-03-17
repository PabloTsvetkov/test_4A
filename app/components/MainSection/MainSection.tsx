"use client";

import { useState } from "react";
import Image from "next/image";
import BestCard from "./Cards/BestCard";
import BaseCard from "./Cards/BaseCard";
import { Agreement } from "./PrivacyPolicy";
import { Tariff } from "@/app/api/getTariffs";

type MainSectionProps = {
  bestTariff: Tariff;
  baseTariffs: Tariff[];
  isDiscountActive: boolean;
};

// Правда много чего не успел сделать, чтобы это было хорошее тестовое "на совесть", но время поджимало

export default function MainSection({
  bestTariff,
  baseTariffs,
  isDiscountActive,
}: MainSectionProps) {
  const [checked, setChecked] = useState(false);

  const [selectedTariffId, setSelectedTariffId] = useState(bestTariff.id);

  return (
    <main className="w-full h-auto flex flex-col min-[1216px]:flex-row min-[1216px]:mt-[110px] mt-[24px]">
      <div className="relative min-[1216px]:mt-[52px] mt-[0] h-[200px] w-[100px] min-[1216px]:w-[381px] min-[1216px]:h-[767px] overflow-hidden max-[1215px]:ml-auto max-[1215px]:mr-auto">
        <Image
          src="/images/sportsman.png"
          alt="Man picture"
          fill
          className="object-contain"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-b from-transparent to-[#232829]" />
      </div>

      <div className="min-[1216px]:w-[748px] min-[375px]:w-[343px] w-[288px] min-[1216px]:ml-auto flex flex-col items-start">
        <BestCard
          period={bestTariff.period}
          price={bestTariff.price}
          fullPrice={bestTariff.fullPrice}
          text={bestTariff.text}
          isDiscountActive={isDiscountActive}
          
        />

        <div className="flex flex-col min-[1216px]:flex-row w-full min-[1216px]:h-[335px] h-auto gap-[14px] justify-start">
          {baseTariffs.map((tariff) => (
            <BaseCard
              key={tariff.id}
              period={tariff.period}
              price={tariff.price}
              fullPrice={tariff.fullPrice}
              text={tariff.text}
              isDiscountActive={isDiscountActive}
            />
          ))}
        </div>

        <div className="min-[1216px]:w-[499px] min-[375px]:w-[343px] w-[288px] h-auto flex items-start gap-2 px-5 py-[18px] rounded-[20px] bg-[#2D3233] mt-[20px]">
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
          onToggle={() => setChecked((prev) => !prev)}
        />

        <button className="buy-button flex min-[1216px]:w-[352px] min-[375px]:w-[343px] w-[288px] min-[1216px]:h-[66px] h-[55px] items-center justify-center gap-[10px] px-[60px] py-5 rounded-[20px] bg-[#FDB056] text-[#191E1F] mt-[16px]">
          Купить
        </button>

        <p className="w-full min-[1216px]:max-w-[748px] min-[375px]:max-w-[343px] max-w-[288px] text-left text-[14px] font-normal leading-[120%] text-[#9B9B9B] mt-[14px]">
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
