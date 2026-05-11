import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "May 11, 2026";
const APP_NAME = "DadCoPilot";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";

export const metadata: Metadata = {
  title: "DadCoPilot — Privacy Policy",
  description:
    "Privacy policy for DadCoPilot, an iOS baby tracker for dads. We do not collect, store or share personal data. Co-parent sync runs through your own private iCloud container.",
  alternates: {
    canonical: "https://maximesaltet.com/dadcopilot/privacy",
  },
  robots: { index: true, follow: true },
};

export default function DadCoPilotPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            DadCoPilot · Legal
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
              baby&rsquo;s log (feeds, diapers, sleep, pump, solids, medication,
              profile photo, measurements) stays on your device — and, if you
              opt in, in your own private iCloud account.
            </p>
          </Section>

          <Section title="02 — Data we collect">
            <p>
              <strong>None.</strong> {APP_NAME} contains no analytics, no ad
              networks, no tracking SDKs, no remote logging and no crash
              reporting service. There is no {APP_NAME} server that receives
              data from the app.
            </p>
          </Section>

          <Section title="03 — Data stored on your device">
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                Baby profiles: name, date of birth, optional sex, birth weight,
                growth measurements and an optional photo you provide.
              </li>
              <li>
                Events you log: feed, diaper, sleep, pump, solid, medication —
                with timestamps, optional duration, optional notes and the name
                of the parent who logged the event.
              </li>
              <li>
                Your preferences: 3&nbsp;AM Mode setting (auto&#47;on&#47;off),
                language, haptics and sound toggles, reminder flags.
              </li>
              <li>
                Your in-app purchase status (whether {APP_NAME} Pro is unlocked).
              </li>
            </ul>
            <p>
              All of this is stored locally using Apple&apos;s SwiftData
              framework. We never see it.
            </p>
          </Section>

          <Section title="04 — iCloud &amp; co-parent sync">
            <p>
              {APP_NAME} uses Apple&apos;s CloudKit to keep your data in sync
              across your own Apple devices (private database) and, if you
              choose, with a co-parent you invite (shared database). The shared
              database lives in <em>your</em> iCloud account, not ours.
            </p>
            <p>
              Invitations are issued through Apple&apos;s native CloudKit
              sharing — there is no {APP_NAME} account, no email registration
              and no central server. The developer of {APP_NAME} cannot read
              the data in your private or shared iCloud database.
            </p>
            <p>
              You can revoke a co-parent at any time from{" "}
              <em>{APP_NAME} → Settings → Co-parent</em>, which removes their
              access from the shared CloudKit record.
            </p>
          </Section>

          <Section title="05 — Apple Health (optional)">
            <p>
              If you grant {APP_NAME} permission, the app can <em>read</em>{" "}
              your baby&apos;s weight, height and head circumference from the
              Health app so the growth curves appear in {APP_NAME}. Nothing is
              written back to Health by default. Reads happen on-device through
              HealthKit; we never receive this data.
            </p>
            <p>
              You can revoke this permission at any time from the iOS Settings
              app, under <em>Privacy &amp; Security → Health → {APP_NAME}</em>.
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
              If you enable feeding reminders, the notifications are scheduled
              locally on your device by iOS. {APP_NAME} does not run a push
              server and does not send marketing notifications.
            </p>
          </Section>

          <Section title="08 — Siri, Shortcuts &amp; Live Activities">
            <p>
              Logging by voice (&ldquo;Hey Siri, log a diaper&rdquo;), the
              Lock Screen and Dynamic Island timers, and the Apple Watch
              companion all run on-device through Apple&apos;s App Intents,
              ActivityKit and WidgetKit frameworks. They do not send your
              data anywhere except your own iCloud sync, if you have enabled
              it.
            </p>
          </Section>

          <Section title="09 — Children">
            <p>
              {APP_NAME} is intended for parents and adult co-parents to log
              information about their child. The app is not directed at
              children themselves. We collect no information from any child.
              The app is rated 4+ on the App Store as a general parenting
              utility.
            </p>
          </Section>

          <Section title="10 — Your rights (GDPR / CCPA)">
            <p>
              Because we do not collect personal data, there is nothing for us
              to access, correct, export or erase on your behalf. You can
              delete all of your local data at any time by removing the app
              from your device. iCloud-synced data can be wiped from{" "}
              <em>iOS Settings → Apple Account → iCloud → Manage Storage →
              {" "}{APP_NAME}</em>.
            </p>
            <p>
              You can export your full history as PDF or CSV from{" "}
              <em>{APP_NAME} → Settings → Export</em> (requires Pro).
            </p>
          </Section>

          <Section title="11 — Medical disclaimer">
            <p>
              {APP_NAME} is a lifestyle and parenting utility. It is not a
              medical device, does not diagnose or treat any condition, and is
              not a substitute for professional pediatric advice. The
              &ldquo;next nap&rdquo; estimate, the WHO diaper-count comparison
              and the growth curves are informational only.
            </p>
          </Section>

          <Section title="12 — Changes">
            <p>
              If we change this policy, the updated version will be posted at
              this URL with a new &quot;Last updated&quot; date. Material
              changes will be highlighted in the app.
            </p>
          </Section>

          <Section title="13 — Contact">
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
        <CrossAppNav currentSlug="dadcopilot" />
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
          aria-label="DadCoPilot Privacy Policy"
        >
          DADCOPILOT / PRIVACY
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
