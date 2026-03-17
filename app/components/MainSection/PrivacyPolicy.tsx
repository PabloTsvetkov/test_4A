import Image from "next/image";

type AgreementProps = {
  checked: boolean;
  onToggle: () => void;
};

export function Agreement({ checked, onToggle }: AgreementProps) {
  return (
    <label className="flex min-[1216px]:w-[649px] min-[375px]:w-[297px] w-[252px] items-start gap-3 cursor-pointer select-none mt-[30px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="sr-only"
      />

      <span className="mt-[2px] shrink-0">
        <Image
          src={checked ? "/icons/Checkbox_checked.svg" : "/icons/Checkbox_unchecked.svg"}
          alt=""
          width={32}
          height={32}
        />
      </span>

      <span className="text-[16px] text-[#CDCDCD]">
        Я согласен с офертой рекуррентных платежей и Политикой
        конфиденциальности
      </span>
    </label>
  );
}