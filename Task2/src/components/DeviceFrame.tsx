

export default function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center py-8">
      {/* Outer Phone Body (Titanium) */}
      <div className="relative shadow-2xl shadow-black/60 rounded-[60px] p-[2px] bg-gradient-to-br from-[#E2E4E9] via-[#85858B] to-[#404044]">
        
        {/* Inner Black Bezel */}
        <div className="relative rounded-[58px] bg-black p-[10px] shadow-inner overflow-hidden flex flex-col justify-center items-center">
          
          {/* Hardware Buttons - Left */}
          <div className="absolute -left-[2px] top-[140px] w-1 h-[26px] bg-[#5a5a5e] rounded-l-sm" />
          <div className="absolute -left-[2px] top-[190px] w-1 h-[55px] bg-[#5a5a5e] rounded-l-sm" />
          <div className="absolute -left-[2px] top-[260px] w-1 h-[55px] bg-[#5a5a5e] rounded-l-sm" />
          
          {/* Hardware Button - Right (Power) */}
          <div className="absolute -right-[2px] top-[210px] w-1 h-[80px] bg-[#5a5a5e] rounded-r-sm" />
          
          {/* The Screen Area */}
          <div className="relative rounded-[48px] overflow-hidden bg-white w-[390px] h-[844px] flex flex-col shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]">
            
            {/* Dynamic Island Area Wrapper */}
            <div className="absolute top-0 w-full flex justify-center z-50 pointer-events-none p-3">
              {/* Dynamic Island Pill */}
              <div className="w-[125px] h-[37px] bg-black rounded-full flex justify-between items-center px-2 py-1 shadow-md">
                {/* Camera dot */}
                <div className="w-3 h-3 bg-[#111] rounded-full flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-[#444] rounded-full blur-[0.5px]"></div>
                </div>
                {/* Sensors */}
                <div className="w-12 h-[22px] bg-[#1a1a1a] rounded-full opacity-0" />
              </div>
            </div>

            {/* Application Content container starts here */}
            {/* It requires padding top so content won't be hidden under dynamic island initially, 
                though typically iOS handles this with safe-area spacing */}
            <div className="flex-1 w-full relative pt-14 bg-[#FAFAFA] overflow-y-auto scrollbar-hide">
              {children}
            </div>
            
            {/* Safe Area Bottom Bar Indicator */}
            <div className="absolute bottom-2 w-full flex justify-center pointer-events-none">
              <div className="w-32 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
