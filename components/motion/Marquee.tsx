"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  durationSec?: number;
  className?: string;
};

export function Marquee({ items, durationSec = 28, className }: Props) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-terminal-black",
        className,
      )}
      style={{ borderColor: "var(--color-terminal-black)" }}
    >
      <motion.div
        className="flex w-max items-center gap-[35px] py-[15px] whitespace-nowrap"
        animate={
          reduce
            ? undefined
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={{
          duration: durationSec,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="text-caption uppercase tracking-wider"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {label}
            <span className="ml-[35px] inline-block opacity-40">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
