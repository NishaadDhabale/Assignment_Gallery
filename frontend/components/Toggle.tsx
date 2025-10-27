'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const options = [
  { id: 'left', label: 'About Me' },
  { id: 'center', label: 'Experiences' },
  { id: 'right', label: 'Recommended' },
];

export default function Toggle() {
  const [selected, setSelected] = useState(options[0].id);
  const selectedIndex = options.findIndex((opt) => opt.id === selected);

  return (
    <div className="relative h-[62px] w-[611px]">
      {/* The Glow Element */}
      <motion.div
        className="absolute left-0 top-0 h-full w-[195px]"
        initial={false}
        animate={{ x: `${selectedIndex * 100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          boxShadow:
            '0px 80px 120px -30px rgba(150, 190, 231, 0.4), 0px -80px 120px -30px rgba(150, 190, 231, 0.4)',
        }}
      />

      {/* The Main Component */}
      <div className="absolute inset-0 h-[62px] w-[611px] rounded-[23px] bg-[#171717] p-1.5 shadow-[0_20px_25px_-10px_rgba(23,23,23)]">
        <div className="relative flex h-full w-full items-center">
          {/* The visible sliding tab */}
          <motion.div
            className="absolute left-0 top-0 h-full w-[195px] rounded-2xl bg-[#28292f] shadow-lg shadow-black"
            initial={false}
            animate={{ x: `${selectedIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />

          {/* The Text Labels with Gradient Hover */}
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`
                relative flex h-full w-[195px] cursor-pointer items-center
                justify-center overflow-hidden font-semibold transition-colors



                /* THE FIX: Replaced the single background color with a gradient */
              {
                before:absolute before:inset-0 before:z-0 rounded-2xl
                before:bg-gradient-to-r before:from-[#96BEE7]/0 before:to-[#96BEE7]/10
                before:scale-x-0 before:origin-left
                before:transition-transform before:duration-300 before:ease-in-out

                hover:before:scale-x-100

              `}
            >
              <span className="relative z-10">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}