import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "August 11, 2026";
const APP_NAME = "Sofafin";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "Sofafin — Privacy Policy",
  description:
    "Privacy policy for Sofafin, a native Jellyfin client for Apple TV. The app talks only to the media server you choose. No analytics, no tracking, no third-party services.",
  alternates: {
    canonical: "https://maximesaltet.com/sofafin/privacy",
  },
  robots: { index: true, follow: true },
};

export default function SofafinPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            Sofafin · Legal
          </p>
          <h1 className="font-display text-display-sm">PRIVACY</h1>
          <p className="text-body mt-[15px] opacity-70">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="space-y-[35px] text-body leading-[1.55]">
          <Section title="01 — In short">
            <p>
              <strong>{APP_NAME}</strong> does not collect, store, sell or share
              any personal data. It is a client for{" "}
              <strong>your own Jellyfin media server</strong> — a server you run
              and control. The app talks to that server and to nothing else.
              There is no {APP_NAME} back end, and no data ever reaches us.
            </p>
          </Section>

          <Section title="02 — Data we collect">
            <p>
              <strong>None.</strong> {APP_NAME} contains no analytics, no ad
              networks, no tracking SDKs, no crash reporters and no remote
              logging. We operate no server that could receive information from
              the app.
            </p>
          </Section>

          <Section title="03 — Your server, your data">
            <p>
              Everything you see in {APP_NAME} — your libraries, artwork, watch
              history, favourites and playback positions — lives on the Jellyfin
              server you connect to. {APP_NAME} reads from it and writes your
              viewing progress back to it, exactly as any Jellyfin client does.
            </p>
            <p>
              That server is yours. Its own privacy practices are governed by
              whoever administers it, which in most cases is you. {APP_NAME} is
              not affiliated with the Jellyfin project.
            </p>
          </Section>

          <Section title="04 — Data stored on your Apple TV">
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                <strong>Your session:</strong> the server address, your user
                identifier and an access token issued by your server. This token
                is not your password, and you can revoke it at any time from
                Jellyfin.
              </li>
              <li>
                <strong>Your preferences:</strong> the last tab you used and your
                recent search terms, kept so the app reopens where you left it.
              </li>
              <li>
                <strong>A cache of artwork</strong>, so posters do not need to be
                downloaded again on every visit.
              </li>
            </ul>
            <p>
              All of it stays on the device, in the app&apos;s private container.
              Signing out erases the session. Deleting the app erases everything.
            </p>
          </Section>

          <Section title="05 — Network connections">
            <p>
              {APP_NAME} connects to one address only: the server you type on the
              connection screen. It makes no other network request — no update
              check, no telemetry, no content delivery network.
            </p>
            <p>
              Because home media servers are commonly reached over plain HTTP on
              a local network, the app permits unencrypted connections. Nothing
              leaves your network unless your own server is published to the
              internet, which is your decision to make.
            </p>
          </Section>

          <Section title="06 — Children">
            <p>
              {APP_NAME} is not directed at children and collects no data from
              anyone, regardless of age.
            </p>
          </Section>

          <Section title="07 — Changes">
            <p>
              Should this policy ever change, the date at the top of this page
              changes with it. As the app collects nothing, we expect such
              changes to be rare.
            </p>
          </Section>

          <Section title="08 — Contact">
            <p>
              Questions about this policy:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline hover:opacity-60"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </div>

        <CrossAppNav currentSlug="sofafin" />
      </main>

      <footer
        className="mt-[58px]"
        style={{ borderTop: "1px solid var(--color-terminal-black)" }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-center px-[30px] py-[30px]">
          <p className="text-caption uppercase tracking-wider">
            © {new Date().getFullYear()} — {DEVELOPER}
          </p>
        </div>
      </footer>
    </div>
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
    <section>
      <h2 className="font-display text-caption uppercase tracking-wider mb-[15px]">
        {title}
      </h2>
      <div className="space-y-[12px]">{children}</div>
    </section>
  );
}

function PrivacyHeader() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "var(--color-cream-vellum)",
        borderBottom: "1px solid var(--color-terminal-black)",
      }}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-[30px] py-[15px]">
        <Link
          href="/"
          className="text-caption uppercase tracking-wider hover:opacity-60"
        >
          ← Maxime Saltet
        </Link>
        <span
          className="font-display text-caption hidden md:inline-block"
          aria-label="Sofafin Privacy Policy"
        >
          SOFAFIN / PRIVACY
        </span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-caption uppercase tracking-wider hover:opacity-60"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
