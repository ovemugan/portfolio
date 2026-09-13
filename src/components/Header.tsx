import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  activeSection: string;
}

/**
 * Profile Picture (DP):
 * Set your image link or local path here (e.g. '/profile.jpg' or 'https://...').
 * If left empty or if loading fails, it automatically displays the clean 'OV' monogram badge.
 */
export const PROFILE_IMAGE_URL = ''; 

export const Header: React.FC<HeaderProps> = ({ onOpenContact, activeSection }) => {
  const [imageError, setImageError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hasImage = Boolean(PROFILE_IMAGE_URL && !imageError);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#141414]/95 backdrop-blur-md text-[#fef9ed] border-b border-white/10 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-baseline gap-2 group">
            <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#fef9ed] group-hover:text-[#ff8255] transition-colors">
              OMSHAKTHI
            </span>
            <span className="font-mono-code text-[10px] sm:text-xs text-[#dedace]/70 tracking-wider">
              / FULL-STACK + AI
            </span>
          </a>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-2.5 sm:gap-6 lg:gap-8">
          {/* Availability Badge (Desktop/Tablet) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ff8255] animate-pulse"></span>
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#dedace]">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-semibold tracking-wider uppercase">
            <a
              href="#about-philosophy"
              className={`transition-colors py-1 ${
                activeSection === 'about'
                  ? 'text-white underline underline-offset-4 decoration-2 decoration-[#ff8255]'
                  : 'text-[#dedace]/70 hover:text-[#fef9ed]'
              }`}
            >
              ABOUT
            </a>
            <a
              href="#featured-projects"
              className={`transition-colors py-1 ${
                activeSection === 'projects' || activeSection === 'work'
                  ? 'text-white underline underline-offset-4 decoration-2 decoration-[#ff8255]'
                  : 'text-[#dedace]/70 hover:text-[#fef9ed]'
              }`}
            >
              PROJECTS
            </a>
          </nav>

          {/* Contact Button (Desktop/Tablet) */}
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex px-4 py-2 bg-[#fef9ed] text-[#141414] font-semibold text-xs tracking-wider uppercase hover:bg-[#a23e16] hover:text-white transition-colors font-mono-code"
          >
            CONTACT
          </button>

          {/* Corner Profile Picture / DP */}
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 border-2 border-white/20 p-0.5 overflow-hidden flex items-center justify-center shrink-0 shadow-sm"
            title="Omshakthi Vemuganti"
          >
            {hasImage ? (
              <img
                src={PROFILE_IMAGE_URL}
                alt="Omshakthi Vemuganti"
                className="w-full h-full object-cover rounded-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-[#a23e16] flex items-center justify-center font-mono-code text-[11px] sm:text-xs text-[#fef9ed] font-bold">
                OV
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#fef9ed] hover:text-[#ff8255] hover:bg-white/10 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#141414]/98 backdrop-blur-xl px-5 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about-philosophy"
            onClick={closeMobileMenu}
            className={`py-2.5 px-3 rounded-md font-mono-code text-xs font-semibold tracking-wider flex items-center justify-between ${
              activeSection === 'about'
                ? 'bg-white/10 text-[#ff8255]'
                : 'text-[#dedace] hover:bg-white/5'
            }`}
          >
            <span>// ABOUT</span>
            <span className="text-[10px] text-white/40">01</span>
          </a>

          <a
            href="#featured-projects"
            onClick={closeMobileMenu}
            className={`py-2.5 px-3 rounded-md font-mono-code text-xs font-semibold tracking-wider flex items-center justify-between ${
              activeSection === 'projects' || activeSection === 'work'
                ? 'bg-white/10 text-[#ff8255]'
                : 'text-[#dedace] hover:bg-white/5'
            }`}
          >
            <span>// PROJECTS</span>
            <span className="text-[10px] text-white/40">02</span>
          </a>

          <a
            href="#interactive-sketch-stage"
            onClick={closeMobileMenu}
            className="py-2.5 px-3 rounded-md font-mono-code text-xs font-semibold tracking-wider text-[#dedace] hover:bg-white/5 flex items-center justify-between"
          >
            <span>// TELEMETRY &amp; BENCHMARKS</span>
            <span className="text-[10px] text-white/40">03</span>
          </a>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                onOpenContact();
              }}
              className="w-full py-3 bg-[#a23e16] text-white font-mono-code text-xs uppercase font-bold tracking-wider hover:bg-[#ff8255] hover:text-black transition-colors rounded-none flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
            >
              <span>CONNECT WITH OMSHAKTHI</span>
              <span>→</span>
            </button>
            <div className="flex items-center justify-center gap-2 py-1">
              <span className="w-2 h-2 rounded-full bg-[#ff8255] animate-pulse"></span>
              <span className="font-mono-code text-[10px] text-[#dedace]/70 tracking-wider">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
