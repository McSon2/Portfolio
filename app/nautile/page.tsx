import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "Nautile";
const VERSION = "0.2.2";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maxime@maximesaltet.com";
const URL = "https://maximesaltet.com/nautile";
const REPO_URL = "https://github.com/McSon2/nautile";
const DOWNLOAD_URL = `${REPO_URL}/releases/download/v${VERSION}/Nautile-${VERSION}.dmg`;

const TITLE = `${APP_NAME} — A native macOS workspace for Claude Code`;
const DESCRIPTION = `${APP_NAME} keeps every project one click from a Claude Code session. Projects sorted by category, live status for each session (working, waiting for you), notifications, git status and one-click resume. Native macOS, signed and notarized.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
};

export default function NautilePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px] opacity-60">
          macOS · Built for Claude Code · v{VERSION}
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">{APP_NAME}</h1>
        <p
          className="text-body mb-[35px]"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          When you run Claude Code on a dozen projects at once, the hard part
          is no longer writing code. It is knowing which session is still
          working, which one is waiting for your answer, and where you left
          each conversation. {APP_NAME} is a native macOS workspace built
          around that problem.
        </p>

        <div className="mb-[58px] flex flex-wrap items-center gap-[15px] text-caption uppercase tracking-wider">
          <a
            href={DOWNLOAD_URL}
            className="border border-black px-[20px] py-[12px] hover:bg-black hover:text-[#fffcf0] transition-colors"
          >
            Download for macOS
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-60"
          >
            Release notes on GitHub
          </a>
          <span className="opacity-60">
            Apple silicon · macOS 13+ · Signed &amp; notarized
          </span>
        </div>

        <Shot
          src="/projects/nautile/session.png"
          alt="Nautile with a Claude Code session running in the LocManage project, and live activity indicators in the sidebar"
          priority
        />

        <Section title="01 / What it does">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Every project, one click from Claude
          </h3>
          <p>
            {APP_NAME} scans the folders where your projects live and sorts
            them into categories. Each project opens on a home screen with
            two actions: start a Claude Code session in that folder, or open
            a terminal that is already in the right place.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Live state for every session
          </h3>
          <p>
            Claude sessions start with {APP_NAME}&apos;s own Claude Code hooks.
            Each hook event is relayed to the app, so the sidebar shows the
            exact state of every session across every project: working,
            waiting for your reply, or idle. When Claude finishes or needs
            you, a native notification takes you straight to that tab.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Resume any conversation
          </h3>
          <p>
            Sessions are started with a known id, so a closed tab can be
            reopened exactly where it was. The project home lists recent
            conversations by title.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Git status at a glance
          </h3>
          <p>
            Changed files and commits ahead or behind are shown next to each
            project, read without ever taking git&apos;s index lock away from
            a running Claude session.
          </p>
        </Section>

        <Shot
          src="/projects/nautile/home.png"
          alt="A project home in Nautile: new Claude session, new terminal, and recent conversations to resume"
        />

        <Section title="02 / Built for keyboard work">
          <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
            <li>⌘P jumps to any project; ⌘↩ opens it straight into Claude</li>
            <li>⌘N new Claude session, ⌘T new terminal</li>
            <li>Tabs or a grid of terminals per project</li>
            <li>Open the project in Xcode, Ghostty, Terminal or Finder</li>
          </ul>
        </Section>

        <Shot
          src="/projects/nautile/quick-open.png"
          alt="Nautile quick open: typing a few letters finds a project and opens it in Claude Code"
        />

        <Section title="03 / Technical">
          <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
            <li>Tauri 2 (Rust) and Svelte 5, around 5 MB to download</li>
            <li>
              One real PTY per tab, xterm.js with WebGL rendering and flow
              control, so long Claude outputs never freeze the window
            </li>
            <li>
              Claude Code hooks relayed over a local Unix socket: nothing
              leaves your Mac
            </li>
            <li>Native menus, notifications and dock badge</li>
            <li>Signed with a Developer ID and notarized by Apple</li>
          </ul>
        </Section>

        <Section title="04 / Roadmap">
          <p>
            Next: features built on the Claude API, starting with summaries
            of what each session did while you were away and search across
            the conversations of every project.
          </p>
        </Section>

        <Section title="05 / Contact">
          <p>
            {APP_NAME} is built by {PUBLISHER}, an independent developer in
            France.{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          © {new Date().getFullYear()} — {PUBLISHER}
        </p>
      </main>
      <Footer />
    </>
  );
}

function Shot({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="mb-[58px] border border-black">
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1366}
        priority={priority}
        sizes="(max-width: 860px) 100vw, 800px"
        className="block h-auto w-full"
      />
    </figure>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[35px] border-t border-black pt-[15px]">
      <h2 className="font-display text-caption uppercase tracking-wider mb-[15px]">
        {title}
      </h2>
      <div className="text-body space-y-[15px] leading-relaxed">{children}</div>
    </section>
  );
}
