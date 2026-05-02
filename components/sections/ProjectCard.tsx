"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/projects";
import { GlitchText } from "@/components/motion/GlitchText";
import { Marquee } from "@/components/motion/Marquee";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const toggle = () => {
    const next = !open;
    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (!reduce && typeof docWithVT.startViewTransition === "function") {
      docWithVT.startViewTransition(() => setOpen(next));
    } else {
      setOpen(next);
    }
  };

  return (
    <article id={`project-${project.number}`} className="w-full">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={`project-${project.number}-content`}
        className="group block w-full text-left"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-[30px] py-[58px] md:grid-cols-12 md:gap-[58px]">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="font-display text-display leading-none">
              <GlitchText text={project.number} />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between gap-[35px]">
            <div>
              <div className="mb-[15px] flex flex-wrap items-baseline justify-between gap-[15px]">
                <h3 className="font-display text-display-sm">
                  {project.title}
                </h3>
                <span className="text-caption uppercase tracking-wider opacity-60">
                  {project.year}
                </span>
              </div>
              <p
                className="text-body"
                style={{ color: "var(--color-deep-graphite)" }}
              >
                {project.tagline}
              </p>
              <p className="mt-[15px] text-caption uppercase tracking-wider opacity-60">
                {project.role}
                {project.badge ? <> · {project.badge}</> : null}
              </p>
            </div>

            <div className="flex items-center justify-between text-caption uppercase tracking-wider">
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {open ? "[ — Close ]" : "[ + Read more ]"}
              </span>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:opacity-60"
                  style={{ color: "var(--color-sky-blue-indicator)" }}
                >
                  Visit →
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`project-${project.number}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="border-t"
              style={{ borderColor: "var(--color-terminal-black)" }}
            >
              <Marquee items={project.stack} />
            </div>

            <div className="mx-auto max-w-[1600px] px-[30px] py-[58px]">
              <div className="grid grid-cols-1 gap-[35px] md:grid-cols-12 md:gap-[58px]">
                <p className="text-caption uppercase tracking-[0.2em] opacity-60 md:col-span-4 lg:col-span-3">
                  What it does
                </p>
                <ul className="md:col-span-8 lg:col-span-9 flex flex-col gap-[30px]">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-[30px] border-b pb-[30px] last:border-b-0 last:pb-0"
                      style={{
                        borderColor: "var(--color-terminal-black)",
                      }}
                    >
                      <span className="font-display text-caption opacity-50 flex-shrink-0 pt-1">
                        0{i + 1}
                      </span>
                      <p
                        className="text-body leading-[1.55]"
                        style={{ color: "var(--color-deep-graphite)" }}
                      >
                        {h}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
