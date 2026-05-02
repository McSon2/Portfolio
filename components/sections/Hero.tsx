"use client";

import { TypingText } from "@/components/motion/TypingText";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between"
    >
      <div className="flex flex-1 items-center justify-center px-[15px] pt-[58px]">
        <h1 className="font-display text-display text-center">
          <span className="sr-only">Maxime Saltet — Fullstack Developer</span>
          <span aria-hidden="true">
            <TypingText text="MAXIME" speedMs={90} startDelayMs={1300} />
            <br />
            <TypingText
              text="SALTET"
              speedMs={90}
              startDelayMs={2050}
              showCaret={true}
            />
          </span>
        </h1>
      </div>

      <div className="px-[30px] pb-[30px]">
        <ScrollProgressBar />
        <p className="mt-[15px] text-center text-caption uppercase tracking-wider opacity-70">
          Scroll
        </p>
      </div>
    </section>
  );
}
