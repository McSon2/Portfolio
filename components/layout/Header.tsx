"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 80) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "var(--color-cream-vellum)",
        borderBottom: "1px solid var(--color-terminal-black)",
      }}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-[30px] py-[15px]">
        <a
          href="#projects"
          className="text-caption uppercase tracking-wider hover:opacity-60"
        >
          Menu / Work
        </a>
        <a
          href="#hero"
          className="font-display text-caption hidden md:inline-block"
          aria-label="Maxime Saltet — back to top"
        >
          MS
        </a>
        <a
          href="#contact"
          className="text-caption uppercase tracking-wider hover:opacity-60"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
