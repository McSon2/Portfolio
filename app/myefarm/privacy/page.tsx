import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "May 9, 2026";
const APP_NAME = "My E-Farm";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "My E-Farm — Privacy Policy",
  description:
    "Privacy policy for My E-Farm, a cosy iOS voxel farm game. We do not collect, store or share personal data.",
  alternates: {
    canonical: "https://maximesaltet.com/myefarm/privacy",
  },
  robots: { index: true, follow: true },
};

export default function MyEFarmPrivacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivacyHeader />

      <main className="flex-1 mx-auto w-full max-w-[900px] px-[30px] py-[58px]">
        <div className="mb-[58px]">
          <p className="text-caption uppercase tracking-wider mb-[15px]">
            {APP_NAME} · Legal
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
              Your farm, your animals, your inventory and your purchase
              history stay on your device.
            </p>
          </Section>

          <Section title="02 — Data we collect">
            <p>
              <strong>None.</strong> {APP_NAME} does not include analytics,
              ad networks, tracking SDKs or remote logging. There is no{" "}
              {APP_NAME} server that receives any information from the app.
              The App Tracking Transparency (ATT) prompt is not shown
              because the app does not track you across other apps or
              websites.
            </p>
          </Section>

          <Section title="03 — Data stored on your device">
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                Your farm: coins, debt remaining, storage level, current
                level, days played, last opened date, tutorial completion
                flag, notifications and sound preferences.
              </li>
              <li>
                Your animals: each chick, hen, rooster, baby rabbit, adult
                rabbit and cow with their age, gender, hunger, thirst and
                health state.
              </li>
              <li>
                Your inventory: eggs, milk, chicken food, rabbit food, hay
                and water, with quantities and (for milk) expiry dates.
              </li>
              <li>
                Your progression: eggs sold, milk sold, adult rabbits raised,
                debt repaid, storage level reached, level-1 completion date.
              </li>
              <li>
                Your transaction history (in-game sales, purchases,
                repayments) for the activity log inside the app.
              </li>
              <li>
                Your in-app coin pack purchase records — productId,
                Apple-issued transaction id, coin amount granted, date.
              </li>
              <li>
                Your preferences: completed onboarding flag, last review
                prompt version, notification &amp; sound toggles.
              </li>
            </ul>
            <p>
              All of this is stored locally using Apple&apos;s SwiftData
              framework, inside the app sandbox. We never see it.
            </p>
          </Section>

          <Section title="04 — Purchases">
            <p>
              {APP_NAME} sells four consumable coin packs (Petite bourse,
              Bourse fermière, Coffre fermier, Grand coffre) processed by
              Apple via StoreKit&nbsp;2. Apple handles your payment
              information; we only receive a confirmation that the purchase
              succeeded so the app can credit the écus to your save. We
              never see your card or Apple Account email.
            </p>
            <p>
              Coin packs are <strong>consumables</strong>: once spent in
              game, they are not restorable. The standard{" "}
              <em>Restore Purchases</em> button is available in the shop for
              compliance, but Apple does not return consumables — this is by
              design across all iOS games and is not a {APP_NAME} choice.
            </p>
          </Section>

          <Section title="05 — Notifications">
            <p>
              {APP_NAME} can schedule a single daily local reminder
              (&ldquo;Ta ferme t&rsquo;attend&rdquo;), only after you grant
              permission during the onboarding flow. The notification is
              scheduled and fired entirely on your device — Apple Push
              Notification Service is not used, and no notification server
              exists. You can disable notifications any time from iOS
              Settings.
            </p>
          </Section>

          <Section title="06 — Required Reason API disclosures">
            <p>
              {APP_NAME} declares the following Required Reason APIs in its{" "}
              <code>PrivacyInfo.xcprivacy</code> manifest, all used for
              local-only purposes:
            </p>
            <ul className="space-y-[8px] list-disc ml-[20px]">
              <li>
                <code>NSPrivacyAccessedAPICategoryUserDefaults</code> —
                reason <code>CA92.1</code>: storing user-facing preferences
                (notifications on/off, sound on/off, onboarding completion,
                review prompt throttling) inside the app sandbox.
              </li>
              <li>
                <code>NSPrivacyAccessedAPICategoryFileTimestamp</code> —
                reason <code>C617.1</code>: reading file timestamps inside
                the app&apos;s container, for SwiftData persistence.
              </li>
              <li>
                <code>NSPrivacyAccessedAPICategorySystemBootTime</code> —
                reason <code>35F9.1</code>: measuring time spent inside the
                app, used implicitly by SwiftUI / system frameworks.
              </li>
              <li>
                <code>NSPrivacyAccessedAPICategoryDiskSpace</code> — reason{" "}
                <code>E174.1</code>: writing only to the app&apos;s own
                container, used by SwiftData.
              </li>
            </ul>
          </Section>

          <Section title="07 — Children">
            <p>
              {APP_NAME} is rated 4+ on the App Store. It contains no
              violence, no chat, no user-to-user communication, no social
              feed, no external links to third-party services, and no
              interactive features that could put a child at risk.
            </p>
            <p>
              Coin pack purchases are gated by the standard iOS
              Ask&nbsp;to&nbsp;Buy and parental-control mechanisms.
            </p>
          </Section>

          <Section title="08 — Your rights (GDPR / CCPA)">
            <p>
              Because we do not collect personal data, there is nothing for
              us to access, correct, export or erase on your behalf. You can
              delete all of your local data at any time by removing the app
              from your device. iOS will purge the entire app sandbox.
            </p>
          </Section>

          <Section title="09 — Changes">
            <p>
              If we change this policy, the updated version will be posted
              at this URL with a new &quot;Last updated&quot; date. Material
              changes will be highlighted in the next app update.
            </p>
          </Section>

          <Section title="10 — Contact">
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
        <CrossAppNav currentSlug="myefarm" />
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
          aria-label="My E-Farm Privacy Policy"
        >
          MY E-FARM / PRIVACY
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
