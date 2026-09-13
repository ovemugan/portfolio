import React from 'react';

interface TechItem {
  name: string;
  highlight?: boolean;
}

const FRONTEND_STACK: TechItem[] = [
  { name: 'React.js', highlight: true },
  { name: 'Tailwind CSS', highlight: true },
  { name: 'JavaScript', highlight: true },
  { name: 'Vite', highlight: true },
  { name: 'HTML', highlight: true },
];

const AI_TOOLS: TechItem[] = [
  { name: 'AI APIs (Gemini, Groq)', highlight: true },
  { name: 'PyTorch', highlight: true },
  { name: 'NumPy & Pandas', highlight: true },
  { name: 'Prompt Engineering', highlight: true },
  { name: 'LLMs', highlight: true },
  { name: 'Agentic AI (Claude Code, Antigravity)', highlight: true },
  { name: 'Figma & Google Stitch', highlight: true },
];

const BACKEND_STACK: TechItem[] = [
  { name: 'FastAPI (Python)', highlight: true },
  { name: 'Python', highlight: true },
  { name: 'Java (OOPJ)', highlight: true },
  { name: 'Linux', highlight: true },
  { name: 'REST APIs', highlight: true },
];

const OTHER_TOOLS: TechItem[] = [
  { name: 'MongoDB Atlas', highlight: true },
  { name: 'PostgreSQL', highlight: true },
  { name: 'Redis', highlight: true },
  { name: 'Firebase', highlight: true },
  { name: 'SQLite', highlight: true },
  { name: 'Cisco Switches, VLANs & Packet Tracer', highlight: true },
  { name: 'Docker', highlight: true },
  { name: 'Git, GitHub & GitHub Actions', highlight: true },
];

interface MarqueeRowProps {
  label: string;
  items: TechItem[];
  badgeColor?: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  label,
  items,
  badgeColor = 'bg-[#1d1c15] text-white border-[#1d1c15]',
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 py-1.5 overflow-hidden w-full group">
      {/* Category Classification Label */}
      <div className="shrink-0 z-10 pl-3 sm:pl-6 pr-1">
        <span
          className={`font-mono-code text-[10px] sm:text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider whitespace-nowrap border shadow-2xs ${badgeColor}`}
        >
          {label}
        </span>
      </div>

      {/* Scrolling Stream — all rows flow left, 2 copies = seamless loop */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-2.5">
          {[...items, ...items].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`flex items-center gap-2 px-3 py-1.5 border transition-colors ${
                tech.highlight
                  ? 'bg-[#fef9ed] border-black text-black shadow-2xs'
                  : 'bg-[#f2eee2] border-black/10 text-[#1d1c15]'
              } hover:border-[#a23e16] hover:bg-white`}
            >
              <span className="font-mono-code text-xs font-semibold whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[#a23e16] text-[10px] font-bold ml-1">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TechMarquee: React.FC = () => {
  return (
    <section
      id="skills-toolkit"
      className="w-full bg-[#f8f3e7] border-y border-black/10 py-6 sm:py-8 overflow-hidden select-none my-4"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a23e16] animate-pulse"></span>
          <span className="font-mono-code text-[11px] sm:text-xs text-[#a23e16] font-bold uppercase tracking-wider">
            // TECHNICAL TOOLKIT &amp; PRODUCTION STACK
          </span>
        </div>
        <div className="font-mono-code text-[10px] sm:text-[11px] text-[#444748] tracking-wider flex items-center gap-3">
          <span>PAUSE ON HOVER</span>
          <span>•</span>
          <span>4 CORE DOMAINS</span>
        </div>
      </div>

      {/* Row 1: Frontend */}
      <MarqueeRow
        label="FRONTEND"
        items={FRONTEND_STACK}
        badgeColor="bg-black text-white border-black"
      />

      {/* Row 2: AI & ML */}
      <MarqueeRow
        label="AI & ML"
        items={AI_TOOLS}
        badgeColor="bg-[#a23e16] text-white border-[#a23e16]"
      />

      {/* Row 3: Backend */}
      <MarqueeRow
        label="BACKEND"
        items={BACKEND_STACK}
        badgeColor="bg-black text-white border-black"
      />

      {/* Row 4: Tools & Systems */}
      <MarqueeRow
        label="TOOLS & SYSTEMS"
        items={OTHER_TOOLS}
        badgeColor="bg-[#dedace] text-[#1d1c15] border-black/20"
      />
    </section>
  );
};
