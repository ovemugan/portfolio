import React, { useEffect, useState } from 'react';
import { Mail, X, Check, Copy, ExternalLink, ArrowRight, Download, FileText, Eye } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'contact' | 'resume';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialTab = 'contact' }) => {
  const [activeCard, setActiveCard] = useState<'contact' | 'resume'>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveCard(initialTab);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText('v.omshakthisharma@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResume = () => {
    // Generates a structured markdown/text CV document for download
    const resumeContent = `OMSHAKTHI VEMUGANTI
Full-Stack & AI Systems Developer
Email: v.omshakthisharma@gmail.com
GitHub: https://github.com/ovemugan
LinkedIn: https://linkedin.com/in/omshakthi-vemuganti
Location: Hyderabad, India

EDUCATION
B.Tech in Computer Science and Engineering (CGPA: 8.77)
GITAM (Deemed to be University), Hyderabad (2022 – 2026)

CORE COMPETENCIES & TECHNICAL STACK
- Frontend & Interfaces: React.js, Tailwind CSS, JavaScript, Vite, HTML
- AI, Machine Learning & Computer Vision: AI APIs (Gemini, Groq), PyTorch, NumPy & Pandas, Prompt Engineering, LLMs, Agentic AI (Claude Code, Antigravity), Figma & Google Stitch
- Backend & Core Systems: FastAPI (Python), Python, Java (OOPJ), Linux, REST APIs
- Databases, Networks & Cloud: MongoDB Atlas, PostgreSQL, Redis, Firebase, SQLite, Cisco Switches, VLANs & Packet Tracer, Docker, Git, GitHub & GitHub Actions

EXPERIENCE & INDUSTRY INTERNSHIPS
1. Infosys Springboard - AI & Computer Vision Intern
   - Architected automated defect detection pipeline for industrial manufacturing quality inspection.
2. SCCL (Singareni Collieries Company Limited) - Network Engineering Intern
   - Configured multi-subnet enterprise LAN/WAN topology, 802.1Q trunking, and Cisco routing.

HACKATHONS & COMPETITIVE ENGINEERING
- 36-Hour Hackathon at SRM University-AP: Built real-time end-to-end software under tight deadlines.

FEATURED PROJECTS
- Byzlytics: Full-stack business analytics platform with Gemini API + Groq integration. (https://byzlytics.vercel.app)
- VisionInspect AI: Defect detection system using computer vision. (GitHub: GKSJ-Deepvision/VisionInspectAI)
- Encephalon OS: 20MB custom Linux operating environment built from scratch. (https://ovemugan.github.io/Encephalon/)
- Nutrimate: Health and nutritional guidance web application. (https://ovemugan.github.io/nutrimate/)
- Eisenhower Task Matrix: Task priority organizer with local persistence. (https://eisenhower-tasks-wine.vercel.app)
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Omshakthi_Vemuganti_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Layered Card Deck Selector Tabs */}
        <div className="flex items-center justify-between mb-2 px-2 select-none">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCard('contact')}
              className={`font-mono-code text-xs px-3 py-1.5 uppercase font-bold tracking-wider transition-all duration-200 border ${
                activeCard === 'contact'
                  ? 'bg-[#1c1b1b] text-[#ff8255] border-white/20 shadow-md translate-y-0.5'
                  : 'bg-black/40 text-[#dedace] hover:text-white border-transparent'
              }`}
            >
              01 // TRANSMIT DIRECT
            </button>
            <button
              type="button"
              onClick={() => setActiveCard('resume')}
              className={`font-mono-code text-xs px-3 py-1.5 uppercase font-bold tracking-wider transition-all duration-200 border ${
                activeCard === 'resume'
                  ? 'bg-[#fef9ed] text-[#a23e16] border-black/20 shadow-md translate-y-0.5'
                  : 'bg-black/40 text-[#dedace] hover:text-white border-transparent'
              }`}
            >
              02 // RESUME &amp; CV
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a23e16] text-white flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Physical 3D Card Stack Container */}
        <div className="relative w-full min-h-[460px] sm:min-h-[440px]">
          {/* CARD 1: Direct Contact Transmitter (Dark Obsidian) */}
          <div
            onClick={() => activeCard === 'resume' && setActiveCard('contact')}
            className={`w-full rounded-2xl p-5 sm:p-8 md:p-9 transition-all duration-300 border ${
              activeCard === 'contact'
                ? 'relative z-20 bg-[#1c1b1b] text-white shadow-2xl border-white/15 scale-100 opacity-100'
                : 'absolute inset-0 z-10 bg-[#161515] text-white/60 shadow-lg border-white/5 scale-[0.97] translate-y-3 -rotate-1 opacity-75 cursor-pointer hover:opacity-90'
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-white/10">
              <div>
                <span className="font-mono-code text-xs text-[#ff8255] tracking-wider uppercase block mb-1 font-bold">
                  // SECURE TRANSMISSION CHANNEL
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Say Hi
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff8255] animate-ping"></span>
                <span className="font-mono-code text-[11px] text-[#ff8255] font-semibold">
                  CH: DIRECT
                </span>
              </div>
            </div>

            {/* Content Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 py-4">
              <div className="space-y-4">
                <div>
                  <div className="font-mono-code text-[11px] uppercase text-[#858383] tracking-wider font-semibold">
                    ELECTRONIC MAIL
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href="mailto:v.omshakthisharma@gmail.com"
                      className="font-display text-xs sm:text-sm md:text-base text-white hover:text-[#ff8255] transition-colors font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      v.omshakthisharma@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      title="Copy email address"
                      className="p-1.5 bg-white/10 hover:bg-white/20 rounded text-white transition-colors shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-[11px] uppercase text-[#858383] tracking-wider font-semibold">
                    BASE COORDINATES
                  </div>
                  <div className="font-inter text-sm text-white mt-1">
                    Hyderabad, India • GITAM University
                  </div>
                </div>

                <div>
                  <div className="font-mono-code text-[11px] uppercase text-[#858383] tracking-wider font-semibold">
                    AVAILABILITY STATUS
                  </div>
                  <div className="font-mono-code text-xs text-[#ff8255] mt-1 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8255]"></span>
                    OPEN FOR FULL-STACK &amp; AI ROLES / INTERNSHIPS (2026)
                  </div>
                </div>
              </div>

              {/* Dev Channels Grid */}
              <div className="space-y-3 flex flex-col justify-between">
                <div>
                  <div className="font-mono-code text-[11px] uppercase text-[#858383] tracking-wider font-semibold">
                    DEV NETWORKS
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 font-mono-code text-xs">
                    <a
                      href="https://github.com/ovemugan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-[#a23e16] rounded text-white transition-colors flex items-center justify-between"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/omshakthi-vemuganti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-[#a23e16] rounded text-white transition-colors flex items-center justify-between"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:v.omshakthisharma@gmail.com"
                      className="p-2.5 bg-white/5 hover:bg-[#a23e16] rounded text-white transition-colors flex items-center justify-between"
                    >
                      <span>Email</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveCard('resume')}
                      className="p-2.5 bg-white/5 hover:bg-white/15 rounded text-[#ff8255] transition-colors flex items-center justify-between text-left"
                    >
                      <span>Resume</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <a
                    href="mailto:v.omshakthisharma@gmail.com"
                    className="w-full py-3 px-4 bg-[#a23e16] text-white font-inter text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#ff8255] hover:text-black font-bold transition-colors shadow-sm min-h-[44px]"
                  >
                    <Mail className="w-4 h-4" />
                    DISPATCH EMAIL MESSAGE
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Status Footprint */}
            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[#858383] font-mono-code text-[11px]">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
              <span className="text-[#ff8255]">DIRECT ENCRYPTED INBOX</span>
            </div>
          </div>

          {/* CARD 2: Resume / CV (Warm Architectural Paper) */}
          <div
            onClick={() => activeCard === 'contact' && setActiveCard('resume')}
            className={`w-full rounded-2xl p-5 sm:p-8 md:p-9 transition-all duration-300 border ${
              activeCard === 'resume'
                ? 'relative z-20 bg-[#fef9ed] text-[#1d1c15] shadow-2xl border-black/15 scale-100 opacity-100'
                : 'absolute inset-0 z-10 bg-[#f5efe0] text-[#1d1c15]/60 shadow-lg border-black/10 scale-[0.97] translate-y-3 rotate-1 opacity-75 cursor-pointer hover:opacity-90'
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-black/10">
              <div>
                <span className="font-mono-code text-xs text-[#a23e16] font-bold tracking-wider uppercase block mb-1">
                  // CURRICULUM VITAE &amp; RESUME
                </span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Omshakthi Vemuganti
                </h3>
              </div>
              <span className="font-mono-code text-xs text-[#444748] px-3 py-1.5 bg-black/5 rounded font-bold">
                B.TECH CSE • CGPA 8.77
              </span>
            </div>

            {/* Info Summary */}
            <div className="py-5 space-y-3">
              <div className="font-mono-code text-xs text-[#a23e16] uppercase font-bold tracking-wider">
                Full-Stack &amp; AI Systems Developer • GITAM Deemed University (2022 – 2026)
              </div>
              <p className="font-inter text-sm sm:text-base text-[#444748] leading-relaxed max-w-xl">
                Specialized in pairing React frontends with FastAPI backends, integrating frontier LLM APIs (Gemini &amp; Groq), developing automated computer vision defect inspection pipelines at Infosys Springboard, and enterprise network engineering at SCCL.
              </p>
            </div>

            {/* Resume & CV Direct Action Options: Download & View */}
            <div className="pt-5 border-t border-black/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {/* Download CV/Resume */}
                <button
                  type="button"
                  onClick={downloadResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#a23e16] hover:bg-[#ff8255] hover:text-black text-white font-mono-code text-xs font-bold uppercase tracking-wider transition-colors shadow-sm min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME / CV</span>
                </button>

                {/* View / Print CV Option */}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-black/5 hover:bg-black/10 text-[#1d1c15] font-mono-code text-xs font-bold uppercase tracking-wider transition-colors border border-black/10 min-h-[44px]"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW / PRINT CV</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveCard('contact')}
                className="font-mono-code text-xs text-[#a23e16] hover:underline font-bold flex items-center justify-end gap-1 shrink-0 py-2"
              >
                <span>OPEN CONTACT</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
