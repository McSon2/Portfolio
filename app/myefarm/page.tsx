import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "My E-Farm";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/myefarm";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Cosy Voxel Farm Game for iOS`;
const DESCRIPTION = `${APP_NAME} is a cosy voxel farm game for iPhone. Raise hens, rabbits and cattle, brood your own chicks, sell at the market, repay your debt and grow your little farm one day at a time. No forced ads, no timers, iCloud sync.`;

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

export default function MyEFarmPage() {
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
          A small voxel farm that lives in your pocket. Feed the chicks, milk
          the cow, sell eggs at the market, repay the bank, and watch your
          herd grow one cosy day at a time. {APP_NAME} is solo, offline, and
          nostalgic — built for the 90&nbsp;seconds you spend on the bus and
          the daily check-in that pulls you back. Play it entirely on your
          own, or join a village of farmers when you feel like it.
        </p>

        <Section title="01 / Who it's for">
          <p>
            People who want a calm, satisfying loop on their phone — no PvP,
            no chat, no battle pass. Players nostalgic for the old browser
            farm games but tired of pixel art and pop-ups. Anyone who likes
            the feeling of opening a tiny world for two minutes a day to see
            what grew overnight.
          </p>
        </Section>

        <Section title="02 / What you actually do">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            A real cosy gameplay loop
          </h3>
          <p>
            Each morning your hens lay eggs, your cow gives milk, your chicks
            grow up and your rabbits make more rabbits. Feed and water them,
            collect, sell at the market when the price is right, repay the
            bank, upgrade your storage. Repeat tomorrow.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Animals you actually get to know
          </h3>
          <p>
            You start with a farm that already produces: 3 hens, a rooster,
            two pairs of rabbits, two kits and a milk cow. Feed, water and
            brush them — all four conditions matter — and they lay, milk and
            breed from day one. Each rabbit couple rolls its own litter every
            night, so a hutch you paid to expand actually grows faster. Put a
            hen on a clutch and you raise your own chicks instead of buying
            them.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A simple market, no spreadsheet required
          </h3>
          <p>
            Prices move every day around a median — eggs at 5 écus, milk at
            4, rabbits at 70 — between −40% and +40%, with a badge showing
            the day&rsquo;s variation and a boost on weekends. Two tabs:{" "}
            <em>Acheter</em> for animals and supplies, <em>Vendre</em> for
            your production, your surplus animals and the gear you no longer
            need. Selling on a good day is worth something; you never have to
            optimise a spreadsheet.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A debt that takes a month, not a sprint
          </h3>
          <p>
            Level 1 ends when you&rsquo;ve cleared a 5000-écu debt, sold 80
            eggs and 80 litres of milk, raised 6 adult rabbits, upgraded your
            storage and kept 500 écus aside — around two weeks of cosy
            sessions. Each level after that opens new ground (fields, cattle
            and butter, then the orchard, then the beehive) and a new
            expansion loan to clear. One level at a time, never two.
          </p>
        </Section>

        <Section title="03 / Coin packs (optional)">
          <p>
            {APP_NAME} sells four <strong>consumable coin packs</strong> for
            players who want a small boost. Buying coins is never required —
            level 1 can be completed entirely for free, and several
            objectives <em>cannot</em> be skipped with money (you still have
            to play the days, sell the eggs, raise the rabbits).
          </p>
          <Ul>
            <li>Petite bourse — 250 écus, 0,99&nbsp;€</li>
            <li>Bourse fermière — 700 écus, 2,99&nbsp;€</li>
            <li>Coffre fermier — 1500 écus, 5,99&nbsp;€</li>
            <li>Grand coffre — 3500 écus, 11,99&nbsp;€</li>
          </Ul>
          <p>
            No subscription, no loot box, no random rewards, no banner that
            says &quot;offer expires in 5 minutes&quot;. Coins are credited
            immediately and never expire.
          </p>
        </Section>

        <Section title="04 / Ads you choose, or none at all">
          <p>
            {APP_NAME} has <strong>no forced advertising</strong>: nothing
            ever plays by itself. Rewarded ads exist behind buttons that say
            what you get — doubling a sale, a free ration, re-rolling a daily
            quest — and a one-off purchase removes them for good while still
            granting the same rewards.
          </p>
          <p>
            No analytics, no telemetry, no tracking SDK, no account to
            create. Your farm lives on your iPhone and in your private
            iCloud. The only data that ever leaves it is what you publish
            yourself: your Game Center score if you sign in, and your weekly
            contribution if you join a co-op.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/myefarm/privacy"
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
            <li>SwiftData persistence, mirrored to your private iCloud</li>
            <li>Game Center leaderboards and CloudKit co-ops, both optional</li>
            <li>StoreKit&nbsp;2 for the coin packs and the ad-free purchase</li>
            <li>Local notifications, gentle reminders only — never marketing</li>
            <li>Light haptics on collect, sell and goal reached</li>
            <li>Voxel premium illustrations, hand-composed isometric scene</li>
            <li>Localized in French at launch</li>
          </Ul>
        </Section>

        <Section title="06 / Why a cosy farm, why now">
          <p>
            Mobile gaming is dominated by aggressive monetisation, three-pop-up
            sessions, and engagement loops that tax your attention. {APP_NAME}
            goes the other way: 90&nbsp;seconds in the morning, 90&nbsp;seconds
            in the evening, no urgency, no countdown, no FOMO. Leaderboards
            and co-ops are there if you want them and invisible if you
            don&rsquo;t. Inspired by the old browser farm games of the 2000s,
            rebuilt for 2026 iPhones with proper voxel art and the calm of a
            save that is yours alone.
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
                href="/myefarm/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/myefarm/privacy"
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
        <CrossAppNav currentSlug="myefarm" />
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
