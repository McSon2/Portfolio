import { GlitchText } from "@/components/motion/GlitchText";
import { Reveal } from "@/components/motion/Reveal";

type Item = {
  label: string;
  handle: string;
  href: string;
  external?: boolean;
};

const items: Item[] = [
  {
    label: "EMAIL",
    handle: "maximesaltet@gmail.com",
    href: "mailto:maximesaltet@gmail.com",
  },
  {
    label: "GITHUB",
    handle: "github.com/McSon2",
    href: "https://github.com/McSon2",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1600px] px-[30px] py-[58px]"
    >
      <Reveal>
        <h2 className="text-caption uppercase tracking-[0.2em] opacity-60">
          Contact — let&apos;s build something
        </h2>
      </Reveal>

      <ul className="mt-[58px] flex flex-col">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={0.05 + i * 0.1}>
            <li
              className="border-t last:border-b"
              style={{ borderColor: "var(--color-terminal-black)" }}
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-[8px] py-[35px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-[30px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ outlineColor: "var(--color-sky-blue-indicator)" }}
              >
                <h3 className="font-display text-display-sm leading-none">
                  <GlitchText text={item.label} />
                </h3>
                <span className="text-caption uppercase tracking-wider opacity-70 transition-opacity group-hover:opacity-100">
                  {item.handle} ↗
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
