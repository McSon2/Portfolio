import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Glimmer";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 14, 2026";
const URL = "https://maximesaltet.com/glimmer/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS Liquid Glass virtual pet. FAQ, restore purchases, DNA explanations, subscription management, and contact.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
  },
};

export default function GlimmerSupportPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          {APP_NAME} · Support
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">
          Support &amp; FAQ
        </h1>
        <p className="text-caption uppercase tracking-wider opacity-60 mb-[58px]">
          Last updated {LAST_UPDATED}
        </p>

        <Section title="01 / Contact">
          <p>
            Questions, bug reports, refund issues, or feature suggestions
            for {APP_NAME}? Reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Support%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            . A real human (the developer) replies — usually within
            48&nbsp;hours.
          </p>
          <p>
            To speed things up, please include: your iPhone model, iOS
            version, {APP_NAME} version (visible in <strong>Settings →
            About</strong>), and a screenshot if relevant.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I hatch my first creature?
          </h3>
          <p>
            On first launch, {APP_NAME} guides you through 3 short cards,
            then hands you an egg. Tap to warm it — after roughly 24 real
            hours, the egg hatches and the creature's full DNA is revealed.
            (You can fast-forward the timer once on the first creature.)
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What are the four stats?
          </h3>
          <p>
            <strong>Hunger</strong> (food), <strong>Energy</strong>{" "}
            (rest), <strong>Happiness</strong> (walks), and{" "}
            <strong>Growth</strong>. Each degrades 1–2 points per hour.
            Three quick interactions a day are enough to keep the
            creature thriving.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What happens if I don't open the app for a day?
          </h3>
          <p>
            Your creature enters <em>Liquid Glass hibernation</em> — pulse
            slows, halo dims, but it doesn't die. Come back any time;
            stats resume from where they paused.
          </p>
        </Section>

        <Section title="03 / DNA & genome">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What are the 8 genes?
          </h3>
          <p>
            Each creature has 8 genes stored as a 64-bit genome: primary
            hue, saturation, body shape, ornament symbol, halo pattern,
            pulse frequency, haptic signature, and mood tone. Combined,
            that's roughly 180 billion visually distinct creatures.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I see my creature's full genome?
          </h3>
          <p>
            Yes — open the <strong>Stats</strong> sheet on the home
            screen. The 8 genes are displayed in hex with a visual
            preview of each, plus the corresponding parameter range.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How does reproduction (Pet Pro) work?
          </h3>
          <p>
            With Pet&nbsp;Pro, you can pair two adult creatures. The
            offspring egg inherits an averaged genome with a small
            per-gene mutation chance (0.5–5%). There's a 5% chance of a{" "}
            <em>mythic</em> gene — values outside the normal range, such
            as fluorescent P3 hues. Cooldown is 7 real days per pair.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What happens when a creature dies?
          </h3>
          <p>
            Elder creatures (after roughly day&nbsp;30) can{" "}
            <strong>bequeath</strong> their genome to a successor egg.
            The original creature is preserved in the genealogy view
            with its full DNA — nothing is ever truly lost.
          </p>
        </Section>

        <Section title="04 / Pet Pro subscription">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pet Pro unlock?
          </h3>
          <Ul>
            <li>Up to 4 simultaneous creatures (vs 1 in free)</li>
            <li>DNA reproduction system with mythic gene mutations</li>
            <li>
              Genealogy view — interactive tree of past creatures and
              their genomes
            </li>
            <li>
              Liquid Glass accessories — 12 hats, 8 wings, 6 seasonal
              auras
            </li>
            <li>Procedural mood sounds via AudioKit (gene G7)</li>
            <li>iCloud sync through your private CloudKit container</li>
            <li>
              Advanced stats — 30 / 90-day evolution curves rendered
              with Swift Charts
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How much does Pet Pro cost?
          </h3>
          <p>
            <strong>4,99&nbsp;€ / month</strong> or{" "}
            <strong>29,99&nbsp;€ / year</strong> (≈50% off vs monthly).
            Both come with a <strong>7-day free trial</strong>. Cancel
            anytime in iOS Settings before the trial ends to avoid any
            charge.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I cancel Pet Pro?
          </h3>
          <p>
            Open <strong>iOS Settings → Apple Account → Subscriptions →
            {" "}Glimmer Pet Pro</strong> and tap <strong>Cancel
            Subscription</strong>. Your subscription remains active
            until the end of the current billing period. The free tier
            (1 creature, full DNA system) is permanent.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my purchases on a new iPhone?
          </h3>
          <p>
            Sign into the same Apple ID used for the original purchase,
            open {APP_NAME}, and go to <strong>Settings → Restore
            Purchases</strong>. Both Pet&nbsp;Pro and any consumed
            magical-kibble entitlements re-attach instantly.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My subscription isn't unlocking — what do I do?
          </h3>
          <p>
            First, confirm you're signed into the original Apple ID.
            Then tap <strong>Settings → Restore Purchases</strong>. If
            that fails, force-quit {APP_NAME} (swipe up and flick the
            app card up) and relaunch. Still stuck? Email me with your
            Apple transaction ID (visible in your App Store account
            history).
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I get a refund?
          </h3>
          <p>
            Refunds are handled directly by Apple. Visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60"
            >
              reportaproblem.apple.com
            </a>
            , sign in with your Apple ID, and select the {APP_NAME}{" "}
            purchase. If Apple declines, email me — I'll find a fair
            solution.
          </p>
        </Section>

        <Section title="05 / Magical kibble (consumables)">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does magical kibble do?
          </h3>
          <p>
            Each kibble item lets you{" "}
            <strong>skip 1 hour of stat degradation</strong>, and each
            re-roll lets you regenerate a hatching egg's DNA before it
            opens. They never expire and never pressure you.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Are kibble packs subscriptions?
          </h3>
          <p>
            No. They are{" "}
            <strong>one-time, non-renewing consumables</strong>. Buy as
            many as you want, never get auto-charged.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What if my balance disappeared?
          </h3>
          <p>
            Open <strong>Settings → Restore Purchases</strong>. If your
            balance still doesn't return, email me with the transaction
            IDs from Apple — I'll re-credit you manually.
          </p>
        </Section>

        <Section title="06 / iCloud sync (Pet Pro)">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does sync work?
          </h3>
          <p>
            With Pet&nbsp;Pro, your creatures and their genomes sync
            across your Apple devices via Apple's CloudKit, in{" "}
            <em>your own private iCloud database</em>. The developer of{" "}
            {APP_NAME} has no access to it. Sync is automatic when
            you're signed into iCloud and the device is online.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My creature isn't appearing on my other device — what now?
          </h3>
          <Ul>
            <li>
              Confirm both devices are signed into the{" "}
              <strong>same</strong> iCloud account.
            </li>
            <li>
              Open{" "}
              <strong>
                Settings → Apple Account → iCloud → Apps using iCloud
              </strong>{" "}
              and confirm {APP_NAME} is enabled.
            </li>
            <li>
              Make sure both devices are online and have iCloud Drive
              enabled.
            </li>
            <li>
              First-sync can take a couple of minutes. If after 10
              minutes nothing has happened, force-quit and reopen{" "}
              {APP_NAME} on both devices.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I disable iCloud sync?
          </h3>
          <p>
            Yes. Go to{" "}
            <strong>
              iOS Settings → Apple Account → iCloud → Apps using iCloud
              → {APP_NAME}
            </strong>{" "}
            and turn it off. The app will keep working with local-only
            storage.
          </p>
        </Section>

        <Section title="07 / Accessibility">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Is {APP_NAME} accessible?
          </h3>
          <p>
            {APP_NAME} supports full <strong>Dynamic Type</strong>,{" "}
            <strong>VoiceOver</strong> labels on every creature stat,{" "}
            <strong>Reduce Motion</strong> (pulse animations fall back
            to gentle opacity changes), and{" "}
            <strong>Reduce Transparency</strong> (Liquid Glass falls
            back to opaque materials). Haptics intensity is adjustable
            in Settings — including a complete off-switch for quiet
            environments.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer.
            Every email is read. If something is broken, if a creature
            behaves oddly, or if there's a feature you wish existed,
            write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the
            issue.
          </p>
        </Section>

        <Section title="09 / Useful links">
          <Ul>
            <li>
              <Link
                href="/glimmer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
              </Link>
            </li>
            <li>
              <Link
                href="/glimmer/privacy"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Apple Media Services Terms (EULA)
              </a>
            </li>
            <li>
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Apple — Report a Problem (refunds)
              </a>
            </li>
          </Ul>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          ↑ Back to{" "}
          <Link
            href="/glimmer"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
        </p>
        <CrossAppNav currentSlug="glimmer" />
      </main>
      <Footer />
    </>
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

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
      {children}
    </ul>
  );
}
