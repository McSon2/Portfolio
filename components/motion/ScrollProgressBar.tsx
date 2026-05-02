"use client";

import { motion, useScroll, useSpring } from "motion/react";

type Props = {
  /** When true, shows progress for the whole page; else for the section it's nested in. */
  global?: boolean;
};

export function ScrollProgressBar({ global = true }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div
      className="relative w-full"
      style={{
        height: "2px",
        border: "1px solid var(--color-terminal-black)",
        background: "var(--color-cream-vellum)",
      }}
      aria-hidden
    >
      <motion.div
        className="absolute inset-y-0 left-0 origin-left"
        style={{
          scaleX: global ? scaleX : 0,
          background: "var(--color-terminal-black)",
          width: "100%",
        }}
      />
    </div>
  );
}
