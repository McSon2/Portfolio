import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "May 9, 2026";
const APP_NAME = "PadelKeep";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "PadelKeep — Privacy Policy",
  description:
    "Privacy policy for PadelKeep, an iOS scoreboard for padel matches. We do not collect, store or share personal data.",
  alternates: {
    canonical: "https://maximesaltet.com/padelkeep/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PadelKeepPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            PadelKeep · Legal
          </p>
          <h1 className="font-display text-display-sm">PRIVACY</h1>
          <p className="text-body mt-[15px] opacity-70">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="space-y-[35px] text-body leading-[1.55]">
          <Section title="01 — In short">
            <p>
              <strong>{APP_NAME}</strong> does not collect, store, sell or
              share any personal data. The app runs locally on your iPhone.
              Match history, player names and preferences stay on your
              device.
            </p>
          </Section>

          <Section title="02 — Data we collect">
            <p>
              <strong>None.</strong> {APP_NAME} does not include analytics,
              ad networks, tracking SDKs or remote logging. There is no
              {APP_NAME} server that receives any information from the app.
            </p>
          </Section>

          <Section title="03 — Data stored on your device">
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                Matches you record: date, duration, format (best of 3, best
                of 5, pro set), golden-point and super-tie-break flags, set
                and game scores, the four player names you typed in.
              </li>
              <li>
                Frequent partners: the names you have used in past matches,
                so they can be reused in one tap when setting up a new
                match.
              </li>
              <li>
                Your preferences: haptics, sound, default golden-point
                toggle, onboarding-completed flag.
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

          <Section title="04 — Player names">
            <p>
              The app asks you to type the names of the four players for
              each match. These names are stored on your iPhone only, are
              never transmitted off-device, and are used solely to display
              your history and partner stats. Use first names, nicknames, or
              whatever your partners are comfortable with.
            </p>
          </Section>

          <Section title="05 — Purchases">
            <p>
              {APP_NAME} Pro is a one-time, non-renewing in-app purchase
              processed by Apple via StoreKit. Apple handles your payment
              information; we only receive a confirmation that the purchase
              succeeded so the app can unlock the Pro features. We never see
              your card or Apple Account email.
            </p>
          </Section>

          <Section title="06 — Notifications">
            <p>
              {APP_NAME} does not request notification permission and does
              not run a notification server.
            </p>
          </Section>

          <Section title="07 — Required Reason API disclosures">
            <p>
              {APP_NAME} accesses Apple&apos;s <em>UserDefaults</em> API
              (reason code <code>CA92.1</code>) to store user-facing
              preferences inside its own app sandbox — haptics on/off,
              default golden-point setting, onboarding completion, review
              prompt throttling. This is declared in the app&apos;s
              <code>PrivacyInfo.xcprivacy</code> manifest. No other
              required-reason API is used.
            </p>
          </Section>

          <Section title="08 — Children">
            <p>
              {APP_NAME} is not directed at children. It is rated 4+ on the
              App Store as a sports utility, but contains no interactive
              communication features that could put a child at risk.
            </p>
          </Section>

          <Section title="09 — Your rights (GDPR / CCPA)">
            <p>
              Because we do not collect personal data, there is nothing for
              us to access, correct, export or erase on your behalf. You can
              delete all of your local data at any time by removing the app
              from your device.
            </p>
          </Section>

          <Section title="10 — Changes">
            <p>
              If we change this policy, the updated version will be posted
              at this URL with a new &quot;Last updated&quot; date. Material
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
        <CrossAppNav currentSlug="padelkeep" />
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
          aria-label="PadelKeep Privacy Policy"
        >
          PADELKEEP / PRIVACY
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
