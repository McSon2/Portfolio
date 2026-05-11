import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "ColdKeeper";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/coldkeeper";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Cold Plunge & Ice Bath Timer for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS coach for ice baths, cold showers, Wim Hof breathwork and contrast therapy. Guided protocols, streak tracking, Apple Health sync. No subscription, no ads, no accounts.`;

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

export default function ColdKeeperPage() {
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
          The cold-therapy coach that lives in your pocket. Pick a session,
          tap the giant START button, and ColdKeeper handles the timing, the
          haptics, the streak and the history — so all you have to do is
          breathe and stay in.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for people who take cold seriously enough to
            keep doing it past day three. Wim Hof breathers, contrast-therapy
            athletes, open-water swimmers, biohackers raised on Huberman and
            Rogan, and anyone who wants their cold-shower habit to stick.
            Beginners welcome — the Beginner Ramp is designed for the first
            four weeks, no ego, no shame.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Four session types
          </h3>
          <p>
            Ice bath, cold shower, open-water swim, contrast therapy — each
            with optional water temperature logging and the right defaults so
            you're not setting up a session in 4 °C water.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Guided protocols
          </h3>
          <p>
            <strong>Beginner Ramp</strong> — 30 s &rarr; 60 s &rarr; 2 min over
            four weeks. The proven on-ramp.
            <br />
            <strong>Wim Hof</strong> — guided breath rounds plus immersion,
            timed for you. No more YouTube juggling.
            <br />
            <strong>Contrast Therapy</strong> — automatic hot/cold alternation,
            athlete-style recovery.
            <br />
            <strong>Custom (Pro)</strong> — design your own intervals.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Built for hands you can&rsquo;t feel
          </h3>
          <p>
            Giant tap targets. Strong haptics. Audio cues that get through a
            hood and closed eyes. Screen stays awake. No menus, no fiddling,
            no shrinkage-induced typos when you just want to stop the timer.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Deep history & streaks
          </h3>
          <p>
            Every session logged with date, type, duration, optional
            temperature. See your streak, total time under the cold, longest
            plunge, and weekly trend at a glance. The free tier keeps the last
            7 days; Pro keeps everything, forever.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>$7.99 / 7,99&nbsp;€</strong>. No
            subscription. No renewal. All future updates included.
          </p>
          <Ul>
            <li>Unlimited history</li>
            <li>All advanced protocols + custom protocol builder</li>
            <li>
              <strong>Apple Health</strong> integration (sessions logged as
              &ldquo;Cold Water Immersion&rdquo; workouts)
            </li>
            <li>
              <strong>iCloud sync</strong> across all your Apple devices via
              your private CloudKit container
            </li>
            <li>Home Screen widgets (streak + last session)</li>
            <li>Detailed weekly and monthly stats</li>
          </Ul>
          <p>
            The free tier is fully functional. Pro is for people who plunge
            often and want their data to compound.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts. Everything you do
            stays on your iPhone, or — if you enable Pro and iCloud — in
            your own private iCloud container, which the developer cannot
            read.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/coldkeeper/privacy"
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
            <li>SwiftData persistence with CloudKit sync (Pro)</li>
            <li>StoreKit&nbsp;2 for the in-app purchase</li>
            <li>Core Haptics + AVFoundation for transitions</li>
            <li>HealthKit (workouts, opt-in, Pro)</li>
            <li>Localized in English and French</li>
            <li>Light and dark interfaces, full Dynamic Type support</li>
          </Ul>
        </Section>

        <Section title="06 / Safety">
          <p>
            Cold immersion can be dangerous. {APP_NAME} is a wellness and
            lifestyle app, not a medical device. Consult a physician before
            starting, especially if you have cardiovascular conditions. Never
            plunge in open water alone. The app does not diagnose, treat, or
            prevent any condition.
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
                href="/coldkeeper/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/coldkeeper/privacy"
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
        <CrossAppNav currentSlug="coldkeeper" />
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
