import Image from "next/image";

interface HeaderTimerProps {
  time: string;
  isWarning: boolean;
  isExpired: boolean;
}

export default function HeaderTimer({
  time,
  isWarning,
  isExpired,
}: HeaderTimerProps) {
  const color = isWarning ? "[#FF4E4E]" : isExpired ? "[#FFFFFF]" : "[#FFBB00]";
  const starsColor = `fill-${color}`;
  const textColor = `text-${color}`;

  return (
    <header className="w-screen h-[74px] min-[375px]:h-[85px] min-[1216px]:h-[103px] bg-[#1D5B43] flex flex-col pt-[8px] justify-start">
      <h3 className="font-semibold text-[14px] min-[375px]:text-[18px] min-[1216px]:text-[24px] text-center leading-tight mb-[4px]">
        Успейте открыть пробную неделю
      </h3>
      <div className={`flex items-center justify-center gap-2 ${textColor}`}>
        <div
          className="w-[14px] h-[14px] bg-current"
          style={{
            mask: "url('/icons/Star.svg') no-repeat center / contain",
            WebkitMask: "url('/icons/Star.svg') no-repeat center / contain",
          }}
        />

        <span className="min-[1216px]:text-[40px] text-[28px] min-[375px]:text-[32px] font-bold tabular-nums leading-none">
          {time}
        </span>

        <div
          className="w-[14px] h-[14px] bg-current"
          style={{
            mask: "url('/icons/Star.svg') no-repeat center / contain",
            WebkitMask: "url('/icons/Star.svg') no-repeat center / contain",
          }}
        />
      </div>
    </header>
  );
}
