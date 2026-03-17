"use client";

import { useEffect, useState } from "react";
import HeaderTimer from "./components/HeaderTimer";
import MainSection from "./components/MainSection/MainSection";
import { Garanty } from "./components/Garanty";
import { useCountdown } from "./hooks/useTimer";
import { getTariffs, splitTariffs, Tariff } from "./api/getTariffs";

export default function Home() {
  const { formattedTime, isExpired, isWarning } = useCountdown({
    initialSeconds: 120,
  });

  const [bestTariff, setBestTariff] = useState<Tariff | null>(null);
  const [baseTariffs, setBaseTariffs] = useState<Tariff[]>([]);
  const [isLoadingTariffs, setIsLoadingTariffs] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadTariffs() {
      try {
        setIsLoadingTariffs(true);

        const tariffs = await getTariffs();
        const { bestTariff, baseTariffs } = splitTariffs(tariffs);

        if (!isMounted) return;

        setBestTariff(bestTariff);
        setBaseTariffs(baseTariffs);
      } catch (error) {
        console.error("Ошибка загрузки тарифов:", error);
      } finally {
        if (isMounted) {
          setIsLoadingTariffs(false);
        }
      }
    }

    loadTariffs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-[99vw] h-auto overflow-y-auto hide-scrollbar bg-[#232829] flex flex-col">
      <HeaderTimer
        time={formattedTime}
        isWarning={isWarning}
        isExpired={isExpired}
      />

      <div className="min-[1216px]:w-[1216px] min-[375px]:w-[375px] w-[325px] h-auto min-h-screen self-center">
        <h1 className="mt-[50px] text-[22px] min-[375px]:text-[24px] min-[1216px]:text-[40px] max-[1215px]:ml-[16px] text-left font-bold">
          Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
        </h1>

        {!isLoadingTariffs && bestTariff ? (
          <MainSection
            bestTariff={bestTariff}
            baseTariffs={baseTariffs}
            isDiscountActive={!isExpired}
          />
        ) : (
          <div className="mt-[24px] text-white">Загрузка тарифов...</div>
        )}

        <Garanty />
      </div>
    </div>
  );
}