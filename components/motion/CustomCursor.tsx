"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 50, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 600, damping: 50, mass: 0.2 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive =
        target?.closest("a, button, [role='button'], input, textarea") != null;
      setHovering(interactive);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{
          width: hovering ? "20px" : "12px",
          height: hovering ? "20px" : "12px",
          background: "#fffcf0",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}
