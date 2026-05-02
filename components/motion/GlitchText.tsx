"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  asLink?: { href: string; external?: boolean };
};

export function GlitchText({ text, className, asLink }: Props) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  const inner = (
    <span
      className={cn("relative inline-block leading-none", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <motion.span
        className="relative z-10 inline-block"
        animate={
          hover && !reduce
            ? { x: [0, -1.5, 1.5, 0], y: [0, 1, -1, 0] }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 0.18, repeat: hover ? Infinity : 0 }}
      >
        {text}
      </motion.span>
      {!reduce && (
        <>
          <motion.span
            aria-hidden
            className="glitch-layer"
            style={{ color: "var(--color-sky-blue-indicator)" }}
            animate={hover ? { x: [-2, 2, -2], opacity: 0.7 } : { x: 0, opacity: 0 }}
            transition={{ duration: 0.16, repeat: hover ? Infinity : 0 }}
          >
            {text}
          </motion.span>
          <motion.span
            aria-hidden
            className="glitch-layer"
            style={{ color: "var(--color-deep-graphite)" }}
            animate={hover ? { x: [2, -2, 2], opacity: 0.5 } : { x: 0, opacity: 0 }}
            transition={{ duration: 0.18, repeat: hover ? Infinity : 0 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </span>
  );

  if (asLink) {
    return (
      <a
        href={asLink.href}
        target={asLink.external ? "_blank" : undefined}
        rel={asLink.external ? "noopener noreferrer" : undefined}
        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: "var(--color-sky-blue-indicator)" }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
