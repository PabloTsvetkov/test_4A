type AgreementProps = {
  checked: boolean;
  onToggle: () => void;
  error?: boolean;
};

function CheckboxUncheckedIcon({ error = false }: { error?: boolean }) {
  const borderFill = error ? "#E53E3E" : "#606566";

  return (
    <svg
      viewBox="0 0 32.0001 32"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M29.0909 0L2.90911 0C1.30541 0 0 1.30466 0 2.90911L0 29.0909C0 30.6953 1.30541 32.0001 2.90911 32.0001L29.0909 32.0001C30.6946 32.0001 32.0001 30.6954 32.0001 29.0909L32.0001 2.90911C32 1.30466 30.6946 0 29.0909 0ZM30.5455 29.0909C30.5455 29.8928 29.8934 30.5455 29.0909 30.5455L2.90911 30.5455C2.10655 30.5455 1.45459 29.8928 1.45459 29.0909L1.45459 2.90911C1.45459 2.1073 2.10661 1.45459 2.90911 1.45459L29.0909 1.45459C29.8935 1.45459 30.5455 2.1073 30.5455 2.90911L30.5455 29.0909Z"
        fill={borderFill}
        fillRule="nonzero"
        style={{ transition: "fill 240ms ease" }}
      />
    </svg>
  );
}

function CheckboxCheckedIcon() {
  return (
    <svg
      viewBox="0 0 32.0001 32"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        id="check_box"
        width="32.000053"
        height="32.000053"
        x="0.000000"
        y="0.000000"
      />
      <path
        d="M29.0909 0L2.90911 0C1.30541 0 0 1.30466 0 2.90911L0 29.0909C0 30.6953 1.30541 32.0001 2.90911 32.0001L29.0909 32.0001C30.6946 32.0001 32.0001 30.6954 32.0001 29.0909L32.0001 2.90911C32 1.30466 30.6946 0 29.0909 0ZM30.5455 29.0909C30.5455 29.8928 29.8934 30.5455 29.0909 30.5455L2.90911 30.5455C2.10655 30.5455 1.45459 29.8928 1.45459 29.0909L1.45459 2.90911C1.45459 2.1073 2.10661 1.45459 2.90911 1.45459L29.0909 1.45459C29.8935 1.45459 30.5455 2.1073 30.5455 2.90911L30.5455 29.0909Z"
        fill="rgb(96,101,102)"
        fillRule="nonzero"
      />
      <path
        d="M24.9209 8.9545L13.0985 21.4715L7.08142 14.7855C6.81012 14.4865 6.35133 14.463 6.05303 14.7315C5.75474 14.9999 5.7306 15.4602 5.99903 15.7585L12.5445 23.0313C12.6809 23.1826 12.874 23.2692 13.0772 23.272L13.0857 23.272C13.286 23.272 13.4763 23.1896 13.6141 23.044L25.9777 9.95309C26.2533 9.66121 26.2405 9.20098 25.9493 8.92539C25.6582 8.64912 25.1951 8.66255 24.9209 8.9545Z"
        fill="rgb(66,71,72)"
        fillRule="evenodd"
      />
      <path
        d="M13.7874 20.7421L13.0985 21.4715L12.4273 20.7258L7.08142 14.7855C6.81012 14.4865 6.35133 14.463 6.05303 14.7315C5.75474 14.9999 5.7306 15.4602 5.99903 15.7585L12.5445 23.0313C12.6809 23.1826 12.874 23.2692 13.0772 23.272L13.0857 23.272C13.286 23.272 13.4763 23.1896 13.6141 23.044L25.9777 9.95309C26.2533 9.66121 26.2405 9.20098 25.9493 8.92539C25.6582 8.64912 25.1951 8.66255 24.9209 8.9545L13.7874 20.7421Z"
        fill="rgb(253,176.18,86)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Agreement({
  checked,
  onToggle,
  error = false,
}: AgreementProps) {
  const showError = error && !checked;

  return (
    <label className="mt-[30px] flex l:w-[649px] m:w-[339px] w-[292px] items-start gap-3 cursor-pointer     select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="sr-only"
        aria-invalid={showError}
      />

      <span className="mt-[2px] shrink-0 transition-transform duration-200">
        {checked ? (
          <CheckboxCheckedIcon />
        ) : (
          <CheckboxUncheckedIcon error={showError} />
        )}
      </span>

      <span
        className={`l:text-[16px] text-[12px] leading-[130%] transition-colors duration-300 ease-out ${
          showError ? "text-[#E53E3E]" : "text-[#CDCDCD]"
        }`}
      >
        Я согласен с офертой рекуррентных платежей и Политикой
        конфиденциальности
      </span>
    </label>
  );
}