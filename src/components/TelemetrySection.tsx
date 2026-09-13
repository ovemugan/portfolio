import React, { useRef, useState } from 'react';

interface TelemetrySectionProps {
  onOpenContact: () => void;
}

const THOUGHT_BUFFERS = [
  'Built a 20MB custom OS for low-spec PCs',
  'Debugging FastAPI routes with double espresso',
  'Local LLMs running on pure curiosity',
  'Taming VLANs and fiber optics at SCCL',
  'Shipping React + Gemini apps end-to-end',
  'Synthesizing computer vision defect inspection pipelines',
  'Optimizing memory footprints down to byte-level',
];

export const TelemetrySection: React.FC<TelemetrySectionProps> = ({ onOpenContact }) => {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const lastCycleRef = useRef(0);

  const cycleThought = () => {
    const now = Date.now();
    if (now - lastCycleRef.current < 260 || isFading) return;
    lastCycleRef.current = now;
    setIsFading(true);
    setTimeout(() => {
      setThoughtIndex((prev) => (prev + 1) % THOUGHT_BUFFERS.length);
      setIsFading(false);
    }, 150);
  };

  return (
    <section
      id="interactive-sketch-stage"
      className="w-full bg-[#f2eee2] py-12 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 my-6 md:my-10 border-y border-black/5"
    >
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Interactive Avatar & Thought Bubble */}
        <div className="lg:col-span-6 flex flex-col items-center sm:items-start relative">
          {/* Interactive Speech Bubble with Tail - ONLY hover/tap here */}
          <div
            className="relative mb-6 w-full max-w-md cursor-pointer select-none group"
            onClick={cycleThought}
            onMouseEnter={cycleThought}
            role="button"
            tabIndex={0}
            aria-label="Cycle engineer thoughts"
          >
            <div className="bg-[#fef9ed] p-4 sm:p-5 shadow-xs group-hover:shadow-md group-hover:border-[#a23e16]/40 transition-all duration-200 min-h-[85px] flex items-center border border-black/10">
              <span className="font-mono-code text-xs text-[#a23e16] mr-3 font-bold shrink-0">
                OMSHAKTHI &gt;
              </span>
              <p
                className={`font-inter text-sm sm:text-base text-black font-medium transition-opacity duration-150 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {THOUGHT_BUFFERS[thoughtIndex]}
              </p>
            </div>
            {/* Speech pointer arrow tip downwards */}
            <div className="w-4 h-4 bg-[#fef9ed] rotate-45 ml-14 -mt-2 shadow-2xs border-r border-b border-black/10"></div>
          </div>

          {/* Hand-drawn vector sketch cartoon of creative engineer - ONLY hover/tap here */}
          <div
            onClick={cycleThought}
            onMouseEnter={cycleThought}
            role="button"
            tabIndex={0}
            aria-label="Interact with engineer avatar"
            className="relative bg-white p-5 sm:p-6 shadow-md w-64 sm:w-72 h-72 sm:h-80 max-w-full flex flex-col items-center justify-center group cursor-pointer border border-black/10 hover:border-[#a23e16] hover:shadow-lg transition-all select-none"
          >
            {/* Sketch Card Background Grid */}
            <div className="absolute inset-0 bg-[#f8f3e7] opacity-40 pointer-events-none"></div>

            {/* Hand-Drawn Style Minimalist Vector Avatar */}
            <svg
              className="w-40 sm:w-48 h-48 sm:h-56 text-black relative z-10 transition-transform duration-300 group-hover:scale-105"
              fill="none"
              viewBox="0 0 200 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cap Brim and Crown */}
              <path
                d="M40 85 C40 45, 160 45, 160 85 Z"
                fill="#f2eee2"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                d="M30 85 Q100 70 185 75 Q150 95 90 92 Z"
                fill="#1c1b1b"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="3.5"
              />
              {/* Cap Pin / Logo */}
              <circle cx="100" cy="62" fill="#ff8255" r="6" />

              {/* Head / Ears */}
              <path
                d="M55 85 Q50 170 100 175 Q150 170 145 85"
                fill="#fef9ed"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                d="M48 115 C40 115 42 135 52 135"
                fill="#fef9ed"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M148 115 C158 115 156 135 146 135"
                fill="#fef9ed"
                stroke="currentColor"
                strokeWidth="3.5"
              />

              {/* Round Glasses Frame */}
              <circle cx="78" cy="120" fill="none" r="18" stroke="currentColor" strokeWidth="4" />
              <circle cx="122" cy="120" fill="none" r="18" stroke="currentColor" strokeWidth="4" />
              <path d="M96 120 L104 120" stroke="currentColor" strokeWidth="4" />
              <path d="M60 118 L48 115" stroke="currentColor" strokeWidth="3.5" />
              <path d="M140 118 L152 115" stroke="currentColor" strokeWidth="3.5" />

              {/* Eyes inside glasses */}
              <circle cx="82" cy="120" fill="currentColor" r="4.5" />
              <circle cx="126" cy="120" fill="currentColor" r="4.5" />

              {/* Nose */}
              <path
                d="M100 126 Q96 138 103 140"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3.5"
              />

              {/* Smirk / Smile */}
              <path
                d="M88 152 Q100 162 116 151"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3.5"
              />

              {/* Neck & Casual Hoodie Collar */}
              <path d="M78 175 L78 200 M122 175 L122 200" stroke="currentColor" strokeWidth="3.5" />
              <path
                d="M40 230 C50 195 75 195 100 205 C125 195 150 195 160 230"
                fill="#dedace"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                d="M88 205 L84 235 M112 205 L116 235"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>

            {/* Label below avatar */}
            <div className="mt-4 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a23e16] animate-pulse"></span>
              OMSHAKTHI // FULLSTACK_AI_ENGINEER.SKT
            </div>
          </div>

          {/* Mouse Interaction Notice */}
          <p className="font-mono-code text-[10px] sm:text-[11px] text-[#444748] mt-3">
            [INTERACTIVE BUFFER: HOVER OR TAP SPECIFICALLY ON AVATAR &amp; THOUGHT BOX]
          </p>
        </div>

        {/* Right Column: Refined Numerical Data Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
          <div className="space-y-1">
            <span className="font-mono-code text-xs text-[#a23e16] tracking-wider uppercase font-bold">
              // TELEMETRY &amp; PROVEN BENCHMARKS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
              Rigorous Engineering. Unbridled Kinetic Form.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Stat 1: Academics */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                8.77
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                B.TECH CGPA — GITAM
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                Computer Science &amp; Engineering, Hyderabad. Consistent high academic standing.
              </p>
            </div>

            {/* Stat 2: Shipped Apps */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                05<span className="text-[#a23e16] font-light">+</span>
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                Featured Shipped Apps
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                Byzlytics, NutriMate, VisionInspect AI, Encephalon OS, Eisenhower Tasks.
              </p>
            </div>

            {/* Stat 3: 20MB OS Footprint */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                20<span className="text-[#a23e16] font-light text-2xl ml-0.5">MB</span>
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                Encephalon OS Footprint
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                Lightweight GUI-less custom TUI operating environment engineered for low-spec hardware.
              </p>
            </div>

            {/* Stat 4: 15+ AI Tools */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                15<span className="text-[#a23e16] font-light">+</span>
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                AI TOOLS &amp; TECHNOLOGIES
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                From React and FastAPI to LLM APIs to local model runners.
              </p>
            </div>

            {/* Stat 5: Industry Internships */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                02
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                INDUSTRY INTERNSHIPS
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                AI/Computer Vision at Infosys Springboard, Networking at SCCL.
              </p>
            </div>

            {/* Stat 6: 36H Hackathon SRM AP */}
            <div className="p-4 sm:p-5 bg-[#fef9ed] shadow-xs border border-black/5 relative overflow-hidden group hover:border-[#a23e16]/40 transition-colors">
              <div className="font-display text-3xl sm:text-4xl leading-none font-bold text-black tracking-tight">
                36<span className="text-[#a23e16] font-light text-2xl ml-0.5">HR</span>
              </div>
              <div className="mt-2 font-mono-code text-[11px] uppercase tracking-wider text-[#444748] font-bold">
                HACKATHON — SRM AP
              </div>
              <p className="mt-1 font-inter text-xs text-[#444748] leading-relaxed">
                Participated in intensive 36-hour sprint building real-time software solutions under deadline.
              </p>
            </div>
          </div>

          {/* Quick Interaction CTA trigger */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-black text-white font-inter text-xs uppercase tracking-wider font-bold hover:bg-[#a23e16] transition-colors shadow-sm flex items-center justify-center gap-3 min-h-[44px]"
            >
              <span>CONNECT WITH OMSHAKTHI</span>
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
