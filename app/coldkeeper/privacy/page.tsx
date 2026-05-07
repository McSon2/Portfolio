import type { Metadata } from "next";
import Link from "next/link";

const LAST_UPDATED = "May 6, 2026";
const APP_NAME = "ColdKeeper";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "ColdKeeper — Privacy Policy",
  description:
    "Privacy policy for ColdKeeper, an iOS app for tracking ice baths, cold showers and cold therapy sessions. We do not collect, store or share personal data.",
  alternates: {
    canonical: "https://maximesaltet.com/coldkeeper/privacy",
  },
  robots: { index: true, follow: true },
};

export default function ColdKeeperPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            ColdKeeper · Legal
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
              session history stays on your device (and, if you opt in to{" "}
              {APP_NAME} Pro, in your private iCloud account).
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
                Cold-therapy sessions you record: start time, duration, type
                (ice bath, cold shower, open water, contrast therapy) and the
                optional water temperature you enter.
              </li>
              <li>
                Your preferences: temperature unit, theme, language, haptic and
                sound toggles, daily reminder flag.
              </li>
              <li>
                Your in-app purchase status (whether {APP_NAME} Pro is
                unlocked).
              </li>
            </ul>
            <p>
              All of this is stored locally using Apple&apos;s SwiftData
              framework. We never see it.
            </p>
          </Section>

          <Section title="04 — iCloud (Pro)">
            <p>
              If you unlock {APP_NAME} Pro and enable iCloud sync, your sessions
              are synced through your private iCloud account so they appear on
              your other Apple devices. This data is end-to-end protected by
              Apple and is not visible to us.
            </p>
          </Section>

          <Section title="05 — Apple Health (optional)">
            <p>
              If you grant {APP_NAME} permission to write to the Health app,
              completed sessions are saved as workouts in your Health database.
              Reads/writes happen on-device through HealthKit; we never receive
              this data.
            </p>
            <p>
              You can revoke this permission at any time from the iOS Settings
              app, under <em>Privacy &amp; Security → Health → ColdKeeper</em>.
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

          <Section title="07 — Notifications">
            <p>
              If you enable the daily reminder, the notification is scheduled
              locally on your device by iOS. We do not send push notifications
              and do not run a notification server.
            </p>
          </Section>

          <Section title="08 — Children">
            <p>
              {APP_NAME} is not directed at children under 13. The cold-therapy
              practices it documents can be unsafe without adult supervision.
              The app is rated 17+ on the App Store and frames cold exposure as
              wellness, not medical advice.
            </p>
          </Section>

          <Section title="09 — Your rights (GDPR / CCPA)">
            <p>
              Because we do not collect personal data, there is nothing for us
              to access, correct, export or erase on your behalf. You can delete
              all of your local data at any time by removing the app from your
              device. iCloud-synced data can be wiped from{" "}
              <em>Settings → Apple Account → iCloud → Manage Storage</em>.
            </p>
          </Section>

          <Section title="10 — Medical disclaimer">
            <p>
              {APP_NAME} is a wellness and lifestyle app. It is not a medical
              device, does not diagnose or treat any condition, and is not a
              substitute for professional medical advice. Cold immersion can be
              dangerous — consult a physician before starting and never practice
              open-water cold exposure alone.
            </p>
          </Section>

          <Section title="11 — Changes">
            <p>
              If we change this policy, the updated version will be posted at
              this URL with a new &quot;Last updated&quot; date. Material
              changes will be highlighted in the app.
            </p>
          </Section>

          <Section title="12 — Contact">
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
          aria-label="ColdKeeper Privacy Policy"
        >
          COLDKEEPER / PRIVACY
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
