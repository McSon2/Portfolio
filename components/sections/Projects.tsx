import Link from "next/link";
import { projects } from "@/lib/projects";
import { iosApps } from "@/lib/apps";
import { ProjectCard } from "./ProjectCard";
import { Separator } from "@/components/layout/Separator";
import { Reveal } from "@/components/motion/Reveal";

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-[1600px] px-[30px] pt-[58px]">
        <Reveal>
          <h2 className="text-caption uppercase tracking-[0.2em] opacity-60">
            Selected work — {projects.length} projects
          </h2>
        </Reveal>
      </div>

      <Separator />

      {projects.map((project, i) => (
        <div key={project.number}>
          <ProjectCard project={project} />
          {i < projects.length - 1 && <Separator />}
        </div>
      ))}

      <Separator />

      <Link href="/apps" className="group block w-full">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-[30px] py-[58px] md:grid-cols-12 md:gap-[58px]">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <div className="font-display text-display leading-none">
                +{iosApps.length}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between gap-[35px]">
            <Reveal delay={0.05}>
              <div>
                <div className="mb-[15px] flex flex-wrap items-baseline justify-between gap-[15px]">
                  <h3 className="font-display text-display-sm">iOS Apps</h3>
                  <span className="text-caption uppercase tracking-wider opacity-60">
                    2026
                  </span>
                </div>
                <p
                  className="text-body"
                  style={{ color: "var(--color-deep-graphite)" }}
                >
                  {iosApps.length} indie iOS apps shipped solo — productivity,
                  family, sports, wellness, coffee, astronomy, gaming and
                  spirits. Built natively with SwiftUI, no subscriptions, no
                  ads.
                </p>
                <p className="mt-[15px] text-caption uppercase tracking-wider opacity-60">
                  {iosApps.map((a) => a.name).join(" · ")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center justify-between text-caption uppercase tracking-wider">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  [ → See all apps ]
                </span>
                <span
                  className="group-hover:opacity-60"
                  style={{ color: "var(--color-sky-blue-indicator)" }}
                >
                  /apps →
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Link>

      <Separator />
    </section>
  );
}
