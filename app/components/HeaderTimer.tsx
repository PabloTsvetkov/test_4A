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
  const colorClass = isWarning ? "text-[#FF4E4E] fill-[#FF4E4E]" : isExpired ? "text-[#FFFFFF] fill-[#FFFFFF]" : "text-[#FFBB00] fill-[#FFBB00]";

  return (
    <header className="w-screen h-[74px] m:h-[85px] l:h-[103px] bg-[#1D5B43] flex flex-col pt-[8px] justify-start fixed z-2">
      <h3 className="font-semibold text-[14px] m:text-[18px] l:text-[24px] text-center leading-tight mb-[4px]">
        Успейте открыть пробную неделю
      </h3>
      <div className={`flex items-center justify-center gap-2 duration-500 transition-colors ${colorClass} ${isWarning && !isExpired ? "animate-pulse" : ""}`}>
        <div
          className="w-[14px] h-[14px] bg-current"
          style={{
            mask: "url('/icons/Star.svg') no-repeat center / contain",
            WebkitMask: "url('/icons/Star.svg') no-repeat center / contain",
          }}
        />

        <span className={`l:text-[40px] text-[28px] m:text-[32px] font-bold tabular-nums leading-none $`}>
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
