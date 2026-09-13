import React, { useEffect, useState } from 'react';

const INITIAL_HEIGHTS = [
  35, 60, 85, 40, 95, 70, 50, 80, 100, 65, 45, 90, 75, 55, 85, 60, 100, 45, 70,
  90, 50, 80, 95, 40, 65, 85, 55, 75,
];

export const EqualizerStrip: React.FC = () => {
  const [heights, setHeights] = useState<number[]>(INITIAL_HEIGHTS);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) => {
        const next = [...prev];
        // randomize 2 to 4 bars on each tick
        for (let i = 0; i < 3; i++) {
          const randIdx = Math.floor(Math.random() * next.length);
          next[randIdx] = Math.floor(Math.random() * 65) + 35;
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="w-full bg-[#fef9ed] relative flex items-end justify-between h-20 overflow-hidden select-none border-t border-black/5"
    >
      {heights.map((h, index) => {
        const isTerracotta = index % 2 === 0;
        return (
          <div
            key={index}
            style={{
              height: `${h}%`,
              transition: 'height 250ms ease-out',
            }}
            className={`w-[3.3%] ${isTerracotta ? 'bg-[#a23e16]' : 'bg-[#e7e2d7]'}`}
          />
        );
      })}
    </div>
  );
};
