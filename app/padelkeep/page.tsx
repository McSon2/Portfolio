import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "PadelKeep";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/padelkeep";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Padel Live Score Keeper for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS scoreboard for padel matches. 15-30-40, golden point, tie-break, super tie-break, and a giant tap zone for wet hands. Local history, partner stats. No accounts, no subscription, no ads.`;

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

export default function PadelKeepPage() {
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
          The padel scoreboard built for the actual court. Tap your side, get
          a vibration on every game, set and match — even with wet hands and a
          dripping wristband. {APP_NAME} keeps the score so you can keep
          playing.
        </p>

        <Section title="01 / Who it's for">
          <p>
            Padel players who lose count of the score halfway through a match,
            and who&rsquo;d rather not detune a tennis app to handle a
            different sport. Club regulars, weekend doubles, friends-and-beers
            tournaments, league players who want a clean record of every
            session — and the partners who keep showing up.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Real padel scoring, not detuned tennis
          </h3>
          <p>
            15-30-40, automatic deuce or <strong>golden point</strong>,
            tie-break at 6-6, optional <strong>super tie-break</strong> in
            place of the third set, and the <strong>pro set</strong> format
            for short matches. Choose 2 sets winning, 3 sets winning, or pro
            set when you set up the match.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Built for hands you can&rsquo;t feel
          </h3>
          <p>
            Two giant team cards. One tap = one point. Strong haptics on every
            transition (point, game, set, match). The screen stays awake the
            whole match. The serving team is highlighted automatically and
            rotates as it should.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Undo, because fingers slip
          </h3>
          <p>
            Mistapped your opponent&rsquo;s point on your card? One tap on
            <em>Undo</em> rewinds. Up to 200 actions backwards.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            History &amp; stats that actually matter
          </h3>
          <p>
            Every finished match is saved with score, partners, opponents,
            duration and date. Win rate, total sets, most frequent partner,
            and a rolling 30-day activity chart. Free tier keeps the last
            5 matches; Pro keeps everything, forever.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>$4.99 / 4,99&nbsp;€</strong>. No
            subscription. No renewal. All future updates included.
          </p>
          <Ul>
            <li>Unlimited match history</li>
            <li>Detailed stats per partner — who do you actually win with?</li>
            <li>CSV export — your data belongs to you</li>
            <li>Personal ELO ranking based on opponents and results</li>
            <li>
              Multi-format: Americano, Mexicano, friend tournaments
            </li>
          </Ul>
          <p>
            The free tier is fully functional as a scoreboard. Pro is for the
            people who play often and want their record to compound.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts, no servers. Player
            names, match results and stats stay on your iPhone — that&rsquo;s
            it.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/padelkeep/privacy"
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
            <li>SwiftData persistence, fully local</li>
            <li>StoreKit&nbsp;2 for the in-app purchase</li>
            <li>Core Haptics for transitions you feel through wet skin</li>
            <li>Universal — iPhone and iPad, portrait or landscape</li>
            <li>Localized in French and English</li>
            <li>Light and dark interfaces, full Dynamic Type support</li>
          </Ul>
        </Section>

        <Section title="06 / Why padel, why now">
          <p>
            Padel went from 200 clubs in France in 2020 to over 2,600 in
            2026. The sport is growing fast across France, Spain, Italy and
            Scandinavia, but the apps tracking it haven&rsquo;t caught up —
            most are detuned tennis trackers with the wrong rules and a
            terrible UI for actually-playing-padel conditions. {APP_NAME}
            fixes that, one match at a time.
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
                href="/padelkeep/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/padelkeep/privacy"
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
