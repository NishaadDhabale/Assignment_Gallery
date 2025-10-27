"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const options = [
  { id: "left", label: "About Me" },
  { id: "center", label: "Experiences" },
  { id: "right", label: "Recommended" },
];

export default function Toggle() {
  const [selected, setSelected] = useState(options[0].id);

  return (
    <div className="h-[62px] w-[611px] rounded-[23px] bg-[#171717] p-1.5">
      <div className="relative flex h-full w-full items-center">
        <motion.div
          className="absolute left-0 top-0 h-full w-[195px] rounded-2xl bg-[#28292f]"
          animate={{
            x: `${options.findIndex((opt) => opt.id === selected) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {options.map((option) => (
          <div
            key={option.id}
            className="relative z-10 flex h-full w-[195px] cursor-pointer items-center justify-center text-white"
            onClick={() => setSelected(option.id)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}