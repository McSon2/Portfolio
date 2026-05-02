"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
  showCaret?: boolean;
};

export function TypingText({
  text,
  speedMs = 70,
  startDelayMs = 200,
  className,
  showCaret = true,
}: Props) {
  const [revealed, setRevealed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(text);
      setStarted(true);
      setDone(true);
      return;
    }

    let idx = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = window.setTimeout(() => {
      setStarted(true);
      interval = setInterval(() => {
        idx += 1;
        setRevealed(text.slice(0, idx));
        if (idx >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return (
    <span
      className={cn(
        "inline-block",
        showCaret && started && !done && "blink-caret",
        className,
      )}
      aria-label={text}
    >
      {revealed || " "}
    </span>
  );
}
