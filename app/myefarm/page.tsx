import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "My E-Farm";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/myefarm";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Cosy Voxel Farm Game for iOS`;
const DESCRIPTION = `${APP_NAME} is a cosy voxel farm game for iPhone. Raise chicks, rabbits and a milk cow, sell at the market, repay your debt and grow your little farm one day at a time. Solo, offline, no ads.`;

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
          the daily check-in that pulls you back.
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

        <Section title="02 / What's in level 1">
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
            You start with 4 chicks, 8 baby rabbits and 1 cow. After three
            days, the chicks become 3 hens and 1 rooster. The babies become
            adult rabbits — at least one male and one female, guaranteed —
            and start breeding. Your farm grows by itself if you take care of
            it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A daily decision, not a calculation
          </h3>
          <p>
            Market prices wiggle every day — eggs at 4-6 écus, milk at 3-5,
            adult animals at 50-140. A small badge tells you{" "}
            <em>bas / normal / haut</em>. You can ignore it and still
            progress, or time your sales for an extra coin or two.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A debt that takes a month, not a sprint
          </h3>
          <p>
            Level 1 ends when you&rsquo;ve cleared a 5000-écu debt, sold 80
            eggs, sold 80 litres of milk, raised 6 adult rabbits, upgraded
            your storage and kept 500 écus aside. It takes about 30 cosy
            sessions for a free player. Long enough to feel earned, short
            enough to stay engaging.
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

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDK, no advertising, no account, no server. Your
            farm, your animals and your transactions stay on your iPhone —
            that&rsquo;s it.
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
            <li>SwiftData persistence, fully local</li>
            <li>StoreKit&nbsp;2 for the in-app coin packs</li>
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
            in the evening, no urgency, no leaderboard, no FOMO. Inspired by
            the old browser farm games of the 2000s, rebuilt for 2026 iPhones
            with proper voxel art and the calm of a single-player save.
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
