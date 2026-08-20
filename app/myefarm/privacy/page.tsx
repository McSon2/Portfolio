import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const LAST_UPDATED = "August 20, 2026";
const APP_NAME = "My E-Farm";
const DEVELOPER = "Maxime Saltet";
const CONTACT_EMAIL = "hello@maximesaltet.com";

export const metadata: Metadata = {
  title: "My E-Farm — Privacy Policy",
  description:
    "Privacy policy for My E-Farm, a cosy iOS voxel farm game. What stays on your device, what Google AdMob collects for optional rewarded ads, and what iCloud and Game Center hold.",
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
              <strong>{APP_NAME}</strong> has no server, no account and no
              analytics. Your farm, your animals, your inventory and your
              purchase history live on your iPhone and in your own iCloud.
            </p>
            <p>
              Three things do involve someone else, and only when you choose
              them: <strong>Google AdMob</strong> if you watch an optional
              rewarded ad, <strong>Game Center</strong> if you sign in for
              the leaderboards, and a <strong>shared iCloud database</strong>{" "}
              if you join a co-op. Each is detailed below. Refusing all three
              costs you nothing but those features.
            </p>
          </Section>

          <Section title="02 — Rewarded advertising (Google AdMob)">
            <p>
              Since version 1.2.0, {APP_NAME} embeds the Google Mobile Ads
              SDK for <strong>rewarded ads only</strong>. No ad ever plays on
              its own: one plays only when you tap a button that states what
              you get for watching. Buying{" "}
              <em>Ferme sans publicité</em> removes them permanently and
              still grants the same rewards.
            </p>
            <p>
              Before any ad is requested, the app shows Google&apos;s{" "}
              <strong>UMP consent form</strong> and, on iOS, the{" "}
              <strong>App Tracking Transparency</strong> prompt. If you
              refuse either, no personalised ad is served and nothing in the
              game changes — the rewards are identical. A permanent{" "}
              <em>privacy options</em> entry in the app&apos;s settings lets
              you change your mind at any time.
            </p>
            <p>
              When ads are enabled, Google may collect your{" "}
              <strong>device identifier</strong>,{" "}
              <strong>advertising data</strong> and{" "}
              <strong>ad interactions</strong>, as declared in the app&apos;s{" "}
              <code>PrivacyInfo.xcprivacy</code> manifest. Google acts as an
              independent controller for this processing; see the{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Google privacy &amp; terms
              </a>
              . {APP_NAME} itself never receives, stores or reads any of it.
            </p>
          </Section>

          <Section title="03 — iCloud, Game Center and co-ops">
            <p>
              <strong>Your save</strong> is mirrored to your{" "}
              <em>private</em> iCloud database so your farm follows your
              Apple Account across devices. Only you can read it — not the
              developer, not other players. You can switch the sync off in
              the app&apos;s settings.
            </p>
            <p>
              <strong>Game Center</strong> is optional. If you sign in, Apple
              submits three scores under your Game Center identity: farm
              value, debt repaid and longest streak. Apple handles that
              identity; the app never sees your Apple Account email.
            </p>
            <p>
              <strong>Co-ops</strong> use a shared iCloud database. Joining
              one publishes your Game Center display name (or an anonymous
              &ldquo;Ferme #XXXX&rdquo; label if you are not signed in), your
              weekly contribution and your farm score to the other members of
              that co-op — nothing else. Leaving a co-op deletes your
              membership record. There is no chat and no way to send anything
              other than a one-tap helping hand.
            </p>
          </Section>

          <Section title="04 — Data stored on your device">
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
                Your inventory: eggs, milk, feed, hay, water, brushes, med
                kits, seeds and harvested produce, with quantities and (for
                milk) expiry dates.
              </li>
              <li>
                Your fields, your orchard schedule and your daily quests.
              </li>
              <li>
                Your progression: eggs sold, milk sold, adult rabbits raised,
                chicks hatched, debt repaid, storage level reached, level
                completion dates, achievements and daily streak.
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
              All of this is stored using Apple&apos;s SwiftData framework
              inside the app sandbox, and mirrored to your private iCloud
              database unless you turn the sync off. We never see it.
            </p>
          </Section>

          <Section title="05 — Purchases">
            <p>
              {APP_NAME} sells four consumable coin packs (Petite bourse,
              Bourse fermière, Coffre fermier, Grand coffre) and one
              non-consumable ad-removal purchase (Ferme sans publicité),
              processed by Apple via StoreKit&nbsp;2. Apple handles your payment
              information; we only receive a confirmation that the purchase
              succeeded so the app can credit the écus to your save. We
              never see your card or Apple Account email.
            </p>
            <p>
              Coin packs are <strong>consumables</strong>: once spent in
              game, they are not restorable. The ad-removal purchase is a{" "}
              <strong>non-consumable</strong> and does restore, from the{" "}
              <em>Restaurer les achats</em> button in the shop. Apple never
              returns consumables — this is by design across all iOS games
              and is not a {APP_NAME} choice.
            </p>
          </Section>

          <Section title="06 — Notifications">
            <p>
              {APP_NAME} can schedule a single daily local reminder
              (&ldquo;Ta ferme t&rsquo;attend&rdquo;), only after you grant
              permission during the onboarding flow. The notification is
              scheduled and fired entirely on your device — no notification
              server exists. (The app does declare the remote-notification
              background mode: iCloud uses it to tell the device that your
              own save changed on another device. It never carries a message
              from us.) You can disable notifications any time from iOS
              Settings.
            </p>
          </Section>

          <Section title="07 — Required Reason API disclosures">
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

          <Section title="08 — Children">
            <p>
              {APP_NAME} is rated 4+ on the App Store. It contains no
              violence, no chat and no user-to-user messaging: inside a
              co-op, the only thing a player can send another is a one-tap
              helping hand, and the only text shown is a Game Center display
              name. The app does display third-party rewarded ads, which is
              why it is not enrolled in Apple&apos;s Kids Category, and it
              may link out to a community Discord room, which is subject to
              Discord&apos;s own age rules.
            </p>
            <p>
              Coin pack purchases are gated by the standard iOS
              Ask&nbsp;to&nbsp;Buy and parental-control mechanisms.
            </p>
          </Section>

          <Section title="09 — Your rights (GDPR / CCPA)">
            <p>
              We hold no account and no server-side profile, so there is
              nothing on our side to access, correct or export. To erase
              everything, use <em>Réglages → Réinitialiser ta ferme</em>{" "}
              inside the app: it deletes the local save, the iCloud copy and
              your co-op membership. Removing the app also purges the local
              sandbox.
            </p>
            <p>
              For advertising data, Google is the controller: use the
              app&apos;s permanent <em>privacy options</em> entry to withdraw
              your consent, iOS Settings → Privacy &amp; Security → Tracking
              to revoke App Tracking Transparency, and Google&apos;s own
              policy for any request concerning data it holds.
            </p>
          </Section>

          <Section title="10 — Changes">
            <p>
              If we change this policy, the updated version will be posted
              at this URL with a new &quot;Last updated&quot; date. Material
              changes will be highlighted in the next app update.
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
