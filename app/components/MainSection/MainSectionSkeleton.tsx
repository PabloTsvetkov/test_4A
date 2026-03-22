export default function MainSectionSkeleton() {
  return (
    <main className="w-full h-auto flex flex-col l:flex-row l:mt-[110px] mt-[24px] animate-pulse items-center">
      <div className="relative l:mt-[52px] mt-[0] h-[200px] w-[100px] l:w-[381px] l:h-[767px] overflow-hidden max-[1215px]:ml-auto max-[1215px]:mr-auto rounded-[24px] bg-[#2D3233] mx-auto" />

      <div className="l:w-[748px] m:w-[343px] w-[288px] l:ml-auto flex flex-col items-start">
        <div className="mb-[25px] flex l:h-[190px] l:w-full w-[288px] m:w-[343px] rounded-[34px] border-0 border-[#484D4E] bg-[#313637]" />

        <div className="flex flex-col l:flex-row w-full l:h-[335px] h-auto gap-[14px] justify-start">
          <div className="h-[335px] l:w-[240px] m:w-[343px] w-[288px] rounded-[40px] border-2 border-[#484D4E] bg-[#313637]" />
          <div className="h-[335px] l:w-[240px] m:w-[343px] w-[288px] rounded-[40px] border-2 border-[#484D4E] bg-[#313637]" />
          <div className="h-[335px] l:w-[240px] m:w-[343px] w-[288px] rounded-[40px] border-2 border-[#484D4E] bg-[#313637]" />
        </div>

        <div className="l:w-[499px] m:w-[343px] w-[288px] h-[78px] rounded-[20px] bg-[#2D3233] mt-[20px]" />

        <div className="l:w-[649px] m:w-[297px] w-[252px] mt-[30px] flex items-start gap-3">
          <div className="w-[32px] h-[32px] rounded-[8px] bg-[#2D3233] shrink-0" />
          <div className="flex-1 h-[44px] rounded-[12px] bg-[#2D3233]" />
        </div>

        <div className="mt-[16px] l:w-[352px] m:w-[343px] w-[288px] l:h-[66px] h-[55px] rounded-[20px] bg-[#4A4F50]" />

        <div className="w-full l:max-w-[748px] m:max-w-[343px] max-w-[288px] h-[52px] rounded-[12px] bg-[#2D3233] mt-[14px]" />
      </div>
    </main>
  );
}