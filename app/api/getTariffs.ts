const TARIFFS_URL = "https://t-core.fit-hub.pro/Test/GetTariffs";

export type TariffDto = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};

export type Tariff = {
  id: string;
  period: string;
  price: number;
  fullPrice: number;
  isBest: boolean;
  text: string;
};

const MOCK_TARIFFS: Tariff[] = [
  {
    id: "mock-1",
    period: "Навсегда",
    price: 5990,
    fullPrice: 18990,
    isBest: true,
    text: "Для тех, кто хочет всегда быть в форме и поддерживать здоровье",
  },
  {
    id: "mock-2",
    period: "3 месяца",
    price: 1990,
    fullPrice: 3990,
    isBest: false,
    text: "Привести тело в порядок",
  },
  {
    id: "mock-3",
    period: "1 месяц",
    price: 990,
    fullPrice: 1990,
    isBest: false,
    text: "Чтобы начать и попробовать формат",
  },
  {
    id: "mock-4",
    period: "6 месяцев",
    price: 2990,
    fullPrice: 5990,
    isBest: false,
    text: "Для стабильного результата и привычки",
  },
];

function isTariffDtoArray(data: unknown): data is TariffDto[] {
  return (
    Array.isArray(data) &&
    data.every((item) => {
      if (!item || typeof item !== "object") return false;

      const tariff = item as Record<string, unknown>;

      return (
        typeof tariff.id === "string" &&
        typeof tariff.period === "string" &&
        typeof tariff.price === "number" &&
        typeof tariff.full_price === "number" &&
        typeof tariff.is_best === "boolean" &&
        typeof tariff.text === "string"
      );
    })
  );
}

function mapTariff(dto: TariffDto): Tariff {
  return {
    id: dto.id,
    period: dto.period,
    price: dto.price,
    fullPrice: dto.full_price,
    isBest: dto.is_best,
    text: dto.text,
  };
}

export async function getTariffs(): Promise<Tariff[]> {
  try {
    const response = await fetch(TARIFFS_URL, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return MOCK_TARIFFS;
    }

    const data: unknown = await response.json();

    if (!isTariffDtoArray(data)) {
      return MOCK_TARIFFS;
    }

    const tariffs = data.map(mapTariff);

    if (!tariffs.length) {
      return MOCK_TARIFFS;
    }

    return tariffs;
  } catch (error) {
    return MOCK_TARIFFS;
  }
}

export function splitTariffs(tariffs: Tariff[]) {
  if (!tariffs.length) {
    return {
      bestTariff: null,
      baseTariffs: [],
    };
  }

  const bestIndex = tariffs.findIndex((tariff) => tariff.isBest);
  const resolvedBestIndex = bestIndex >= 0 ? bestIndex : 0;

  const bestTariff = tariffs[resolvedBestIndex];
  const baseTariffs = tariffs.filter((_, index) => index !== resolvedBestIndex);

  return {
    bestTariff,
    baseTariffs,
  };
}

export function calculateDiscount(price: number, fullPrice: number): number {
  if (!fullPrice || fullPrice <= price) return 0;
  return Math.round((1 - price / fullPrice) * 100);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value);
}
