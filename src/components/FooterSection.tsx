import React, { useEffect, useState } from 'react';
import { EqualizerStrip } from './EqualizerStrip';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(Math.random() * 7) + 9);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-16 md:mt-24 flex flex-col">
      {/* Equalizer Seam Boundary */}
      <EqualizerStrip />

      {/* Primary Rich Footer Container */}
      <footer className="w-full bg-black text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col">
        {/* Massive Call-to-Action Headline */}
        <div className="w-full pb-8 md:pb-14">
          <span className="font-mono-code text-xs text-[#ff8255] tracking-wider uppercase block mb-3 font-bold">
            // INVITATION TO EXPLORE &amp; ASSEMBLE
          </span>
          <h2 className="font-display text-[clamp(1.9rem,6vw,5.5rem)] leading-[0.98] font-bold text-[#fef9ed] tracking-tight uppercase max-w-5xl">
            LET'S BUILD SOMETHING INTELLIGENT.
          </h2>
        </div>

        {/* Three-Column Editorial Footer Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 pt-6 md:pt-10 bg-[#1c1b1b] p-5 sm:p-8 md:p-10 border border-white/10">
          {/* Column 1: Contact / Direct Inquiries (5 cols) */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="font-mono-code text-xs uppercase text-[#858383] tracking-wider font-bold">
              CONTACT &amp; COLLABORATION
            </div>
            <p className="font-inter text-sm sm:text-base text-[#868381] max-w-sm leading-relaxed">
              Reach out for full-stack engineering roles, generative AI projects, or system
              collaborations.
            </p>
            <div>
              <a
                href="mailto:v.omshakthisharma@gmail.com"
                className="font-display text-sm sm:text-base md:text-lg lg:text-xl text-[#fef9ed] hover:text-[#ff8255] transition-colors inline-block font-bold whitespace-nowrap"
              >
                v.omshakthisharma@gmail.com
              </a>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3 bg-[#a23e16] text-white font-inter text-xs uppercase tracking-wider hover:bg-[#ff8255] hover:text-black font-bold transition-colors shadow-sm min-h-[44px]"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Column 2: Social & Code Networks (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono-code text-xs uppercase text-[#858383] tracking-wider font-bold">
              CONNECT &amp; SOCIAL
            </div>
            <ul className="space-y-3 font-mono-code text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/ovemugan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#dedace]/80 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#ff8255] group-hover:translate-x-0.5 transition-transform">
                    •
                  </span>{' '}
                  GitHub // @ovemugan
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/omshakthi-vemuganti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#dedace]/80 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#ff8255] group-hover:translate-x-0.5 transition-transform">
                    •
                  </span>{' '}
                  LinkedIn // omshakthi-vemuganti
                </a>
              </li>
              <li>
                <a
                  href="mailto:v.omshakthisharma@gmail.com"
                  className="text-[#dedace]/80 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#ff8255] group-hover:translate-x-0.5 transition-transform">
                    •
                  </span>{' '}
                  Email // v.omshakthisharma
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Colophon / Copyright / System Metadata (4 cols) */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-mono-code text-xs uppercase text-[#858383] tracking-wider font-bold">
                ABOUT THIS PORTFOLIO
              </div>
              <p className="font-inter text-xs text-[#868381] leading-relaxed">
                Personal portfolio of Omshakthi Vemuganti • B.Tech CSE at GITAM University. Built with React, Tailwind CSS, and FastAPI.
              </p>
            </div>
            <div className="pt-4 font-mono-code text-xs text-[#868381] space-y-1.5 border-t border-white/5">
              <div>OMSHAKTHI VEMUGANTI © 2026 // ALL RIGHTS RESERVED</div>
              <div className="flex items-center gap-2 text-[#ff8255] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#ff8255] inline-block animate-pulse"></span>
                OPEN TO NEW OPPORTUNITIES
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Architectural Colophon Footer */}
      <div className="w-full bg-[#f8f3e7] border-t border-black/10 py-10 px-4 sm:px-8 md:px-12 lg:px-16 text-[#1d1c15]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-8">
            <div className="sm:col-span-2 space-y-2">
              <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-black uppercase">
                OMSHAKTHI VEMUGANTI
              </div>
              <p className="font-inter text-sm text-[#444748] max-w-md leading-relaxed">
                Full-Stack &amp; AI Developer. Engineering high-throughput web architectures, local
                intelligence systems, and computer vision pipelines.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono-code text-xs font-bold uppercase text-[#444748]">INDEX</div>
              <ul className="space-y-1.5 font-inter text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-mono-code text-xs text-[#a23e16]">01</span>
                  <a href="#featured-projects" className="text-[#444748] hover:text-[#a23e16] transition-colors">
                    Projects
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono-code text-xs text-[#a23e16]">02</span>
                  <a href="#about-philosophy" className="text-[#444748] hover:text-[#a23e16] transition-colors">
                    About
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono-code text-xs text-[#a23e16]">03</span>
                  <a href="#interactive-sketch-stage" className="text-[#444748] hover:text-[#a23e16] transition-colors">
                    Telemetry &amp; Benchmarks
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-mono-code text-xs font-bold uppercase text-[#444748]">CONNECT</div>
              <ul className="space-y-1.5 font-inter text-sm">
                <li>
                  <a
                    href="https://github.com/ovemugan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#444748] hover:text-[#a23e16] transition-colors"
                  >
                    GitHub / ovemugan
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/omshakthi-vemuganti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#444748] hover:text-[#a23e16] transition-colors"
                  >
                    LinkedIn / omshakthi-vemuganti
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:v.omshakthisharma@gmail.com"
                    className="text-[#444748] hover:text-[#a23e16] transition-colors"
                  >
                    Email / Direct Transmission
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#444748]">
            <div>© 2026 OMSHAKTHI VEMUGANTI. ALL RIGHTS RESERVED.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a23e16] inline-block animate-pulse"></span>
              LATENCY: {latency}MS • SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
