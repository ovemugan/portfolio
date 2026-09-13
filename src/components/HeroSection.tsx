import React from 'react';
import passportPhoto from '../data/passport_photo.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fef9ed] pt-6 sm:pt-10 pb-12 md:pb-16 flex flex-col border-b border-black/5">
      {/* Top System Architecture Indicator */}
      <div className="w-full flex flex-wrap items-center justify-between pb-6 text-[#444748] font-mono-code text-[11px] sm:text-xs gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a23e16] animate-pulse"></span>
          <span className="font-bold text-[#1d1c15]">PORTFOLIO SPEC // OMSHAKTHI VEMUGANTI</span>
        </div>
        <div className="tracking-widest uppercase font-semibold text-[#1d1c15]">
          ENGINEERING PROFILE / 2026
        </div>
      </div>

      {/* Refined Editorial Hero Wordmark */}
      <div className="w-full overflow-hidden select-none py-3 md:py-6 flex justify-center">
        <h1 className="font-display text-[clamp(2.1rem,6.8vw,5.6rem)] leading-[0.96] tracking-[-0.03em] font-extrabold text-black uppercase text-center block w-full transition-transform">
          VEMUGANTI
          <br />
          OMSHAKTHI
        </h1>
      </div>

      {/* Architectural Two-Column Split */}
      <div className="w-full mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start bg-[#f2eee2] p-5 sm:p-8 md:p-10 shadow-xs border-l-4 border-[#a23e16]">
        {/* Left Column: Profile Photo + Headline */}
        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-5 sm:gap-6 items-start">
          {/* Passport Photo */}
          <div className="shrink-0 relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border-2 border-black shadow-md">
              <img
                src={passportPhoto}
                alt="Omshakthi Vemuganti"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Live indicator badge */}
            <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#a23e16] border-2 border-[#f2eee2] animate-pulse"></span>
          </div>

          {/* Headline */}
          <div className="flex flex-col justify-center gap-2">
            <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-wider text-[#a23e16] font-bold">
              PROFILE
            </span>
            <h2 className="font-display text-lg sm:text-xl md:text-2xl text-black leading-snug font-bold tracking-tight">
              Full-Stack + AI Developer / Building Practical Intelligence &amp; Shipped Products
            </h2>
          </div>
        </div>

        {/* Right Column: Bio & Experience */}
        <div className="md:col-span-7 flex flex-col justify-center h-full space-y-3 sm:space-y-4">
          <p className="font-inter text-sm sm:text-base text-[#2b2a26] leading-relaxed">
            B.Tech CSE at GITAM (Deemed to be University), Hyderabad. Full-stack and AI developer with 5 deployed applications, building with React, FastAPI, and LLM APIs, alongside computer vision work at Infosys Springboard and enterprise networking at SCCL. Interested in local models, AI automations and lightweight systems.
          </p>
        </div>
      </div>
    </section>
  );
};
