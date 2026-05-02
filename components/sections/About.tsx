import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[820px] px-[30px] py-[58px] text-center"
    >
      <Reveal>
        <h2
          className="text-caption uppercase tracking-[0.2em] opacity-60"
          style={{ color: "var(--color-deep-graphite)" }}
        >
          About
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p
          className="mt-[35px] text-body leading-[1.6]"
          style={{ color: "var(--color-deep-graphite)" }}
        >
          Hello. I&apos;m Maxime. Fullstack developer based in France. I build
          things across the entire stack — web, mobile, desktop. Currently
          shipping a social-gaming platform, an iOS rental-management app, and
          a desktop automation tool. I care about details, performance, and
          shipping software people actually use.
        </p>
      </Reveal>
    </section>
  );
}
