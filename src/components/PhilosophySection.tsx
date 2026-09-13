import React, { useEffect, useRef, useState } from 'react';

export const PhilosophySection: React.FC = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  const [headlineProgress, setHeadlineProgress] = useState(0);
  const [para1Progress, setPara1Progress] = useState(0);
  const [para2Progress, setPara2Progress] = useState(0);

  useEffect(() => {
    const calculateProgress = (el: HTMLElement | null): number => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start revealing when top enters lower viewport (85%), finish when near eye level (35%)
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * 0.35;
      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      return Math.min(Math.max(progress, 0), 1);
    };

    const handleScroll = () => {
      setHeadlineProgress(calculateProgress(headlineRef.current));
      setPara1Progress(calculateProgress(para1Ref.current));
      setPara2Progress(calculateProgress(para2Ref.current));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineLines = [
    'WEB APPS.',
    'VISION MODELS.',
    'BARE METAL.',
  ];

  const para1Words =
    "I build full-stack applications by pairing React frontends with FastAPI backends and LLM APIs like Gemini — turning interfaces that used to just display data into ones that generate insights, summarize information, and respond to what people actually need.".split(
      ' '
    );

  const para2Words =
    "That interest in systems goes deeper than the browser. I've built a lightweight 20MB operating environment from scratch, trained computer vision models for manufacturing defect detection at Infosys Springboard, and configured enterprise network infrastructure at SCCL — work that spans from application code down to the wires.".split(
      ' '
    );

  return (
    <section
      id="about-philosophy"
      className="w-full bg-[#fef9ed] py-14 md:py-24 relative overflow-hidden flex flex-col items-center"
    >
      {/* Visual Collision Headline Container */}
      <div
        ref={headlineRef}
        className="w-full relative py-6 md:py-10 flex flex-col items-center justify-center select-none text-center"
      >
        {(() => {
          let globalWordCounter = 0;
          const totalWordsInHeadline = headlineLines.reduce((acc, l) => acc + l.split(' ').length, 0);

          return headlineLines.map((line) => {
            const words = line.split(' ');
            return (
              <div
                key={line}
                className="font-display text-[clamp(1.6rem,4vw,3.6rem)] leading-tight font-bold tracking-tight uppercase z-0 block my-0.5"
              >
                {words.map((word, wordIdx) => {
                  const currentWordIdx = globalWordCounter++;
                  const threshold = currentWordIdx / totalWordsInHeadline;
                  const isLit = headlineProgress >= threshold;
                  return (
                    <span
                      key={`${word}-${wordIdx}`}
                      className={`inline-block transition-colors duration-200 mx-[0.14em] ${
                        isLit ? 'text-[#141414]' : 'text-[#c2beaf]'
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            );
          });
        })()}
      </div>

      {/* Editorial Interactive Scroll-Linked Reveal Body */}
      <div className="w-full max-w-4xl mx-auto mt-6 md:mt-10 space-y-6 sm:space-y-8 px-4 sm:px-8 md:px-0">
        <div className="flex items-center gap-3 text-[#a23e16] font-mono-code text-xs font-bold">
          <span>02 // THE COMPUTATIONAL PHILOSOPHY</span>
          <span className="h-px w-16 bg-[#a23e16] inline-block"></span>
        </div>

        {/* Scroll-Linked Paragraph 1 */}
        <p
          ref={para1Ref}
          className="font-display text-[clamp(1.1rem,1.75vw,1.45rem)] leading-[1.62] font-medium transition-colors select-text"
        >
          {para1Words.map((word, idx) => {
            const threshold = idx / para1Words.length;
            const isLit = para1Progress >= threshold;
            return (
              <span
                key={idx}
                className={`inline-block transition-colors duration-150 mr-[0.24em] ${
                  isLit
                    ? 'text-[#141414] font-semibold'
                    : 'text-[#c2beaf] font-normal'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Scroll-Linked Paragraph 2 */}
        <p
          ref={para2Ref}
          className="font-display text-[clamp(1.1rem,1.75vw,1.45rem)] leading-[1.62] font-medium transition-colors select-text"
        >
          {para2Words.map((word, idx) => {
            const threshold = idx / para2Words.length;
            const isLit = para2Progress >= threshold;
            return (
              <span
                key={idx}
                className={`inline-block transition-colors duration-150 mr-[0.24em] ${
                  isLit
                    ? 'text-[#141414] font-semibold'
                    : 'text-[#c2beaf] font-normal'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
