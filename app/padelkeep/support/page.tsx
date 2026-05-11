import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "PadelKeep";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 9, 2026";
const URL = "https://maximesaltet.com/padelkeep/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS padel scoreboard. FAQ, restore purchases, scoring rules, partner stats, and contact.`;

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

export default function PadelKeepSupportPage() {
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
            Questions, bug reports, refund requests, or feature suggestions
            for {APP_NAME}? Reach out at{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Support%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
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
            How do I start a match?
          </h3>
          <p>
            Open {APP_NAME}, type the names of the four players (Team A on
            top, Team B below), pick your format (2 sets winning, 3 sets
            winning, or pro set), toggle <strong>Golden Point</strong> and{" "}
            <strong>Super Tie-Break</strong> if you use them, and tap{" "}
            <strong>Démarrer</strong>. From the live screen, tap a team card
            to add a point.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the yellow dot next to a player mean?
          </h3>
          <p>
            That team is currently serving. The serving team rotates
            automatically every game (and every two points during a
            tie-break), so you don&rsquo;t have to track it yourself.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            I tapped the wrong card — how do I undo?
          </h3>
          <p>
            Tap the curved arrow in the top-right corner of the live screen.
            {APP_NAME} keeps up to 200 steps of history, so even multiple
            mistakes can be rolled back.
          </p>
        </Section>

        <Section title="03 / Padel scoring rules">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What is &ldquo;golden point&rdquo;?
          </h3>
          <p>
            At 40-40, the next point wins the game — no advantage. Common in
            club tournaments and the FIP/Premier Padel circuit. Toggle it
            off if your league plays classic deuce/advantage.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            When does the tie-break trigger?
          </h3>
          <p>
            At 6-6 in a regular set. First side to 7 points with at least 2
            ahead wins it. Not used in pro-set format — pro set runs to 9
            games straight, with no tie-break.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is the super tie-break?
          </h3>
          <p>
            An optional alternative to a deciding third set. When both teams
            have won the same number of sets and only one is left to play,
            instead of a full third set you play a single &ldquo;super
            tie-break&rdquo; to <strong>10 points</strong> with at least
            2&nbsp;ahead. Toggle it on in the match setup.
          </p>
        </Section>

        <Section title={`04 / ${APP_NAME} Pro`}>
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>Unlimited match history (free tier keeps 5 matches)</li>
            <li>Detailed stats per partner</li>
            <li>CSV export of all your matches</li>
            <li>Personal ELO ranking</li>
            <li>Multi-format: Americano, Mexicano, friend tournaments</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is Pro a subscription?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} Pro is a{" "}
            <strong>one-time, non-renewing purchase of $4.99 / 4,99&nbsp;€</strong>.
            Bought once, kept for life on your Apple ID. All future updates
            included.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my purchase on a new iPhone?
          </h3>
          <p>
            Sign into the same Apple ID used for the original purchase, open{" "}
            {APP_NAME}, and go to{" "}
            <strong>Settings → Restore Purchases</strong> (also accessible
            from the Pro paywall). Pro reactivates instantly, at no extra
            cost.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn&rsquo;t unlocking — what do I do?
          </h3>
          <p>
            First, confirm you&rsquo;re signed into the original Apple ID.
            Then tap <strong>Settings → Restore Purchases</strong>. If that
            fails, force-quit {APP_NAME} (swipe up from the bottom and flick
            the app card up) and relaunch. Still stuck? Email me with your
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
            purchase. If Apple declines, email me — I&rsquo;ll find a fair
            solution.
          </p>
        </Section>

        <Section title="05 / Match history">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Where is my history stored?
          </h3>
          <p>
            Locally on your iPhone, in a SwiftData database inside the app
            sandbox. It is never transmitted to a server. If you delete the
            app, the history is removed with it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I delete a single match?
          </h3>
          <p>
            On the <strong>Historique</strong> tab, swipe left on the match
            row and tap <em>Delete</em>.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I export my matches?
          </h3>
          <p>
            Yes — with {APP_NAME} Pro, the export function produces a CSV
            file with every match (date, format, players, set scores,
            duration, winner). Open it in Numbers, Excel, or any
            spreadsheet.
          </p>
        </Section>

        <Section title="06 / Display & accessibility">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Why does the screen stay on during a match?
          </h3>
          <p>
            On purpose. Your phone sits courtside, you don&rsquo;t want the
            screen sleeping mid-rally. The auto-lock is disabled only on
            the live score screen and re-enables itself the moment you
            close the match.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why is the live screen forced into dark mode?
          </h3>
          <p>
            Outdoor courts have glare. Two giant pure-color cards on a black
            background read instantly even in bright sun. The rest of the
            app follows your system Light/Dark setting.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Does {APP_NAME} support Dynamic Type?
          </h3>
          <p>
            Yes — labels, lists and form text scale with your iOS Text Size
            setting. The score itself uses a fixed display font for legibility
            from across the court.
          </p>
        </Section>

        <Section title="07 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a scoring case behaves
            oddly, or if there&rsquo;s a feature you wish existed, write to{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="08 / Useful links">
          <Ul>
            <li>
              <Link
                href="/padelkeep"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
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
            href="/padelkeep"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
        </p>
        <CrossAppNav currentSlug="padelkeep" />
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
