'use client';

export default function HeroBanner() {
  return (
    <section
      className="rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-4 bg-white border border-[#e5e7eb]"
      aria-label="Live Now banner"
    >
      <div className="relative flex flex-col lg:flex-row items-stretch min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="flex items-center gap-2 text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#131313] uppercase tracking-tight">
              LIVE NOW
              <span
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#dc2626] shrink-0"
                aria-hidden
              />
            </h1>
            
          </div>
          <p className="text-[14px] sm:text-[16px] text-[#4b5563] mt-3 sm:mt-4 max-w-xl leading-relaxed">
            Discover amazing deals on products that are live right now.
            <br />
            Shop exclusive items from verified sellers.
          </p>
          <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
            <span className="inline-flex items-center gap-2 min-h-[40px] px-4 sm:px-5 rounded-lg text-[14px] font-medium bg-[#E5E5E5] text-[#374151]">
              
              20 PRODUCTS
            </span>
            <span className="inline-flex items-center gap-2 min-h-[40px] px-4 sm:px-5 rounded-lg text-[14px] font-medium bg-[#E5E5E5] text-[#374151]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#374151]">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              28.9K WATCHING
            </span>
          </div>
        </div>
        <div
          className="hidden lg:block absolute -right-[50px] -top-[100px] w-full lg:w-[40%] min-h-[200px] sm:min-h-[240px] lg:min-h-full overflow-hidden bg-[#ffcc00] transform rotate-[25deg]">
          <div className="flex items-center justify-center p-4 sm:p-6 gap-8 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden border-2 border-white shadow-lg bg-white"
                style={{
                  width: 'clamp(80px, 18vw, 170px)',
                  height: 'clamp(80px, 18vw, 300px)',
                }}
              >
                <img
                  src={`/images/cloth${i}.png`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow border border-[#e5e7eb]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#131313] ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
