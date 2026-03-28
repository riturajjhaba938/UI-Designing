export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-8">
      <div
        className="relative w-[375px] h-[812px] bg-[#121212] rounded-[3rem] overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 12px #1a1a1a, 0 0 0 14px #3a3a3a, 0 40px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-[36px] bg-[#3a3a3a] rounded-l-lg" />
        <div className="absolute -left-[3px] top-[188px] w-[3px] h-[64px] bg-[#3a3a3a] rounded-l-lg" />
        <div className="absolute -left-[3px] top-[264px] w-[3px] h-[64px] bg-[#3a3a3a] rounded-l-lg" />
        <div className="absolute -right-[3px] top-[188px] w-[3px] h-[80px] bg-[#3a3a3a] rounded-r-lg" />

        {/* Status Bar */}
        <div className="h-14 flex items-end pb-2 px-8 justify-between">
          <span className="text-white text-[15px] font-semibold">9:41</span>
          <div className="flex items-center gap-1.5">
            {/* Signal bars */}
            <div className="flex items-end gap-[2px] h-4">
              <div className="w-[3px] h-[6px] bg-white rounded-full" />
              <div className="w-[3px] h-[9px] bg-white rounded-full" />
              <div className="w-[3px] h-[12px] bg-white rounded-full" />
              <div className="w-[3px] h-[15px] bg-white rounded-full" />
            </div>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 18 13" fill="white">
              <path d="M9 3.5C11.6 3.5 14 4.5 15.8 6.2L17.2 4.7C15.1 2.7 12.2 1.5 9 1.5C5.8 1.5 2.9 2.7.8 4.7L2.2 6.2C4 4.5 6.4 3.5 9 3.5Z"/>
              <path d="M9 7C10.7 7 12.2 7.7 13.3 8.8L14.7 7.3C13.2 5.9 11.2 5 9 5C6.8 5 4.8 5.9 3.3 7.3L4.7 8.8C5.8 7.7 7.3 7 9 7Z"/>
              <circle cx="9" cy="12" r="1.5"/>
            </svg>
            {/* Battery */}
            <div className="flex items-center">
              <div className="w-[25px] h-[12px] border-2 border-white rounded-[3px] relative">
                <div className="absolute inset-[1px] bg-white rounded-[1px] w-[18px]" />
              </div>
              <div className="w-[2px] h-[5px] bg-white/50 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-full z-50" />

        {/* Screen Content */}
        <div className="absolute inset-0 top-14 overflow-hidden">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/40 rounded-full" />
      </div>
    </div>
  );
}
