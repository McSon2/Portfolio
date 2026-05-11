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

      <div className="mx-auto max-w-[1600px] px-[30px] py-[30px]">
        <Reveal>
          <Link
            href="/apps"
            className="group flex flex-wrap items-baseline justify-between gap-[15px]"
          >
            <span className="text-caption uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100">
              Also shipping — {iosApps.length} indie iOS apps
            </span>
            <span className="text-caption uppercase tracking-wider underline underline-offset-4 group-hover:opacity-60">
              See all apps →
            </span>
          </Link>
        </Reveal>
      </div>

      <Separator />
    </section>
  );
}
