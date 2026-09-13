import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleInteractEnter = () => setIsHovered(true);
    const handleInteractLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const checkInteractives = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, label, [data-interactive]'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleInteractEnter);
        el.addEventListener('mouseleave', handleInteractLeave);
      });
    };

    checkInteractives();
    const observer = new MutationObserver(checkInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Exact tip alignment:
  // In the SVG viewBox="0 0 32 32", the arrow tip is at (5, 5).
  // With half-stroke 1.75px, the physical apex is at (3.25, 3.25).
  // Offsetting by (3.25, 3.25) aligns the apex exactly to mouse coordinates (x, y).
  const tipOffsetX = 3.25;
  const tipOffsetY = 3.25;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] overflow-visible"
      style={{
        transform: `translate3d(${position.x - tipOffsetX}px, ${position.y - tipOffsetY}px, 0)`,
        transition: 'transform 0.04s linear',
        transformOrigin: `${tipOffsetX}px ${tipOffsetY}px`,
      }}
    >
      <div
        style={{
          transform: isClicked
            ? 'scale(0.9)'
            : isHovered
            ? 'scale(1.18)'
            : 'scale(1)',
          transformOrigin: `${tipOffsetX}px ${tipOffsetY}px`,
          transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 0 5px rgba(162, 62, 22, 0.55)) drop-shadow(0 0 1px rgba(255, 255, 255, 0.8))'
              : 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.85))',
          }}
        >
          {/* Ambient Cast Shadow Layer (mirrors image.png offset shadow) */}
          <path
            d="M 5 5 L 25 14 L 16 16 L 14 25 Z"
            fill="rgba(0, 0, 0, 0.20)"
            stroke="rgba(0, 0, 0, 0.20)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            transform="translate(-1.5, 3.5)"
          />

          {/* Primary Sleek Pointer Arrow (matching image.png) */}
          <path
            d="M 5 5 L 25 14 L 16 16 L 14 25 Z"
            fill={isHovered ? '#a23e16' : '#111111'}
            stroke={isHovered ? '#a23e16' : '#111111'}
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Subtle Accent Glow Ring on Hover */}
          {isHovered && (
            <circle
              cx="5"
              cy="5"
              r="2.5"
              fill="#ffffff"
              className="animate-ping opacity-75"
            />
          )}
        </svg>
      </div>
    </div>
  );
};
