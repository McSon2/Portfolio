import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "May 8, 2026";
const APP_NAME = "PomoStudy";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "PomoStudy — Privacy Policy",
  description:
    "Privacy policy for PomoStudy, an iOS Pomodoro focus timer for students and knowledge workers. We do not collect, store or share personal data.",
  alternates: {
    canonical: "https://maximesaltet.com/pomostudy/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PomoStudyPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            PomoStudy · Legal
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
              any personal data. The app runs locally on your iPhone. Your
              sessions, tags, goals and statistics stay on your device.
            </p>
          </Section>

          <Section title="02 — Data we collect">
            <p>
              <strong>None.</strong> {APP_NAME} does not include analytics, ad
              networks, tracking SDKs or remote logging. We do not have a server
              that receives any information from the app.
            </p>
          </Section>

          <Section title="03 — Data stored on your device">
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                Pomodoro sessions you complete: start time, duration, type
                (focus, short break, long break) and the optional tag you
                attach (subject, project, etc.).
              </li>
              <li>
                Your weekly goals: tag, target hours, current progress.
              </li>
              <li>
                Your preferences: focus / break durations, cycle count,
                ambient sound choice, theme, language, haptic and sound
                toggles.
              </li>
              <li>
                Your in-app purchase status (whether {APP_NAME} Pro is
                unlocked).
              </li>
            </ul>
            <p>
              All of this is stored locally using Apple&apos;s SwiftData
              framework, inside the app&apos;s shared App Group container.
              We never see it.
            </p>
          </Section>

          <Section title="04 — Live Activity & widgets">
            <p>
              When a session is running, {APP_NAME} displays a Live Activity
              in the Dynamic Island and on the Lock Screen, and may render
              data in a Home Screen widget. These views are drawn entirely
              on-device by iOS using your local session data — nothing is
              transmitted off the device.
            </p>
          </Section>

          <Section title="05 — Notifications">
            <p>
              If you enable session-end alerts or goal reminders, those
              notifications are scheduled <em>locally</em> on your device by
              iOS. We do not send push notifications and do not run a
              notification server.
            </p>
          </Section>

          <Section title="06 — Purchases">
            <p>
              {APP_NAME} Pro is a one-time, non-renewing in-app purchase
              processed by Apple via StoreKit. Apple handles your payment
              information; we only receive a confirmation that the purchase
              succeeded so the app can unlock the Pro features. We never see
              your card or Apple Account email.
            </p>
          </Section>

          <Section title="07 — Ambient audio">
            <p>
              Ambient sounds (silence, lo-fi, rain, coffee shop, white
              noise) are bundled inside the app and played locally. No
              streaming, no third-party audio service, no data leaves your
              device when a soundscape is playing.
            </p>
          </Section>

          <Section title="08 — Children">
            <p>
              {APP_NAME} is not directed at children under 13. The app does
              not knowingly collect any data from anyone, regardless of age.
            </p>
          </Section>

          <Section title="09 — Your rights (GDPR / CCPA)">
            <p>
              Because we do not collect personal data, there is nothing for us
              to access, correct, export or erase on your behalf. You can delete
              all of your local data at any time by removing the app from your
              device.
            </p>
          </Section>

          <Section title="10 — Changes">
            <p>
              If we change this policy, the updated version will be posted at
              this URL with a new &quot;Last updated&quot; date. Material
              changes will be highlighted in the app.
            </p>
          </Section>

          <Section title="11 — Contact">
            <p>
              Questions about this policy? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline underline-offset-4 hover:opacity-60"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="opacity-70">
              Data controller: {DEVELOPER}, France.
            </p>
          </Section>
        </div>

        <div className="mt-[58px] pt-[30px] section-divider">
          <Link
            href="/"
            className="text-caption uppercase tracking-wider hover:opacity-60"
          >
            ← Back to maximesaltet.com
          </Link>
        </div>
        <CrossAppNav currentSlug="pomostudy" />
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
          aria-label="PomoStudy Privacy Policy"
        >
          POMOSTUDY / PRIVACY
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
