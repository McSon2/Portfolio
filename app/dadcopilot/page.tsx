import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "DadCoPilot";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/dadcopilot";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Baby Tracker for Dads (iOS)`;
const DESCRIPTION = `${APP_NAME} is the iOS baby tracker built for dads — one-tap feed, diaper, sleep and pump logging, 3 AM Mode, free co-parent sync via CloudKit. No subscription, no pink, no $69/year.`;

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

export default function DadCoPilotPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px] opacity-60">
          iOS · App Store · 2026
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">{APP_NAME}</h1>
        <p
          className="text-body mb-[58px]"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          The baby tracker built by a dad, for dads. Four giant one-tap buttons
          — feed, diaper, sleep, pump — a pitch-black 3&nbsp;AM Mode for the
          night feeds, and free co-parent sync that doesn&rsquo;t hide behind
          a $69&#47;year subscription. Built natively in SwiftUI, runs offline,
          ships with an Apple Watch app and Live Activities out of the box.
        </p>

        <Section title="01 / Who it's for">
          <p>
            New dads in the first two years, co-parents (moms, grandparents)
            who join through sync, and anyone tired of baby apps wallpapered
            in pastel pink with a smiling mom mascot on every screen.
            {" "}{APP_NAME} ships with neutral vocabulary, a dark canvas, large
            one-handed touch targets, and a single 3&nbsp;AM-tested loop: open,
            tap, sleep again.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Six event types, one tap each
          </h3>
          <p>
            Feed, diaper, sleep, pump, solid, medication — each logged with a
            single tap from the home screen. Duration timers for feed, sleep
            and pump run automatically and survive a reboot. Tap to edit, swipe
            to delete, everything is undoable.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            3 AM Mode
          </h3>
          <p>
            Between 22:00 and 06:00 (or manually, or via your iOS Focus mode),
            the UI shifts to a near-pure black canvas with massive tap targets,
            strong haptics and zero animations. Your eyes stay night-adapted,
            your partner stays asleep, the diaper still gets logged.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Free co-parent sync via CloudKit
          </h3>
          <p>
            Invite your partner with a link or a QR code — no account, no
            password, no server. Sessions sync through Apple&rsquo;s CloudKit
            shared database so both phones see the same timeline in seconds.
            &ldquo;Mom logged a feed 12 min ago&rdquo; — the friction is gone.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Timeline, Stats &amp; predictions
          </h3>
          <p>
            Chronological log with filters by type and by who logged it. Sleep
            patterns over 7&#47;14&#47;30 days, feed frequency, diaper count
            against WHO guidance, growth curves imported from Apple Health,
            and a naive &ldquo;next nap around 14:30&rdquo; estimate based on
            your own recent rhythm.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Live Activities, widgets, Apple Watch
          </h3>
          <p>
            Active feed or sleep timers appear on the Lock Screen and in the
            Dynamic Island. Home Screen and Lock Screen widgets show
            &ldquo;Last fed 2h ago&rdquo; at a glance. The standalone Apple
            Watch app logs feeds and diapers from the wrist with a single tap.
            Siri Shortcuts cover the &ldquo;Hey Siri, log a diaper&rdquo; case
            when both your hands are full.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>6,99&nbsp;€ / $7.99</strong>. No
            subscription. No renewal. No $69&#47;year. All future updates
            included.
          </p>
          <Ul>
            <li>Unlimited history (free tier keeps the last 7 days)</li>
            <li>Multi-baby support, twins included</li>
            <li>Free, unlimited co-parent sync via CloudKit</li>
            <li>Full 3&nbsp;AM Mode with haptic-only confirmations</li>
            <li>Advanced stats, predictions, growth curves</li>
            <li>Live Activities, premium widgets, Apple Watch app</li>
            <li>PDF&#47;CSV export for your pediatrician</li>
            <li>&ldquo;Dad Victory&rdquo; sticker pack</li>
            <li>No ads. Ever. Not even on the free tier.</li>
          </Ul>
          <p>
            The free tier is fully functional for a single baby and the last
            week of activity. Pro is for people who want the night feeds to
            compound into a real record.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts. Everything you log stays
            on your iPhone, or — if you enable co-parent sync — in your own
            private CloudKit container, which the developer cannot read.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/dadcopilot/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="05 / Designed for iOS, end to end">
          <Ul>
            <li>SwiftUI, built natively for iOS&nbsp;17+</li>
            <li>SwiftData persistence with CloudKit private &amp; shared sync</li>
            <li>StoreKit&nbsp;2 for the one-time Pro purchase</li>
            <li>ActivityKit for Live Activities &amp; Dynamic Island</li>
            <li>WidgetKit for Home and Lock Screen widgets</li>
            <li>HealthKit import (weight, height, head circumference)</li>
            <li>watchOS&nbsp;10+ standalone Apple Watch app</li>
            <li>Siri Shortcuts via App Intents</li>
            <li>Localized in English and French at launch</li>
            <li>Full Dynamic Type, VoiceOver, and one-handed reach support</li>
          </Ul>
        </Section>

        <Section title="06 / Why another baby tracker">
          <p>
            Almost every baby tracker on the App Store is built mom-first:
            pink palettes, breastfeeding-centric copy, smiling-mom mascots,
            and the co-parent feature locked behind a $69&#47;year subscription.
            {" "}{APP_NAME} flips that. Built by a dad on the third night feed
            of the week, it speaks plain English, runs in a colour scheme that
            doesn&rsquo;t blind you at 3&nbsp;AM, and lets the second parent
            in for free.
          </p>
        </Section>

        <Section title="07 / Links">
          <Ul>
            {/*
            <li>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Download on the App Store
              </a>
            </li>
            */}
            <li>
              <Link
                href="/dadcopilot/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/dadcopilot/privacy"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME}`}
                className="underline underline-offset-4 hover:opacity-60"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </Ul>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          © {new Date().getFullYear()} — {PUBLISHER}
        </p>
        <CrossAppNav currentSlug="dadcopilot" />
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
