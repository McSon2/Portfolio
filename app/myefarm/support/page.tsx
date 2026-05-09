import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "My E-Farm";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 9, 2026";
const URL = "https://maximesaltet.com/myefarm/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the cosy iOS voxel farm game. FAQ, restore purchases, gameplay tips, animal care, market prices, contact.`;

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

export default function MyEFarmSupportPage() {
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
            version, {APP_NAME} version, and a screenshot if relevant.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I start playing?
          </h3>
          <p>
            On first launch you go through a short 8-step tutorial that
            introduces the chicks, the rabbits, the cow, the debt and the
            level-1 goals. After that, you land on the farm hub. Tap any
            building (poulailler, clapier, étable, remise, marché, banque,
            boutique) to enter it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why aren&rsquo;t my hens laying eggs?
          </h3>
          <p>
            A hen only produces if she is <strong>fed</strong>,{" "}
            <strong>watered</strong> and <strong>healthy</strong>. Use the{" "}
            <em>Tout nourrir</em> and <em>Tout abreuver</em> buttons in the
            poulailler each day, and the small bowl/drop badges on each
            animal will tell you who still needs care.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My chicks are still chicks after a few minutes — bug?
          </h3>
          <p>
            No, it&rsquo;s by design. Animals grow on a{" "}
            <strong>real-world day clock</strong>: chicks become hens after
            3 calendar days, baby rabbits become adults after 3 calendar
            days. The 4 starting chicks are predetermined to become 3 hens
            and 1 rooster. The 8 starting baby rabbits become adult rabbits
            with random gender, but the algorithm guarantees at least one
            male and one female so you can always breed.
          </p>
        </Section>

        <Section title="03 / Animal care">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does the daily cycle work?
          </h3>
          <p>
            At midnight (your local time), all animals become hungry and
            thirsty. You then have until tomorrow&rsquo;s midnight to feed
            and water them, otherwise they may fall sick. Animals that are
            both hungry and thirsty can become sick (15% chance per day),
            and a sick animal stops producing and growing until you heal
            it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I heal a sick animal?
          </h3>
          <p>
            Tap the red <em>Soigner</em> button below the sick animal&rsquo;s
            portrait. It costs 50 écus for a chick or baby rabbit, 75 for a
            hen / rooster / adult rabbit, and 150 for the cow. The animal
            instantly recovers and resumes its cycle.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Do animals die?
          </h3>
          <p>
            <strong>No.</strong> Mistreatment causes sickness and stops
            production, but never death. {APP_NAME} is a cosy game.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How does rabbit reproduction work?
          </h3>
          <p>
            If you have at least one adult male and one adult female rabbit,
            both fed and watered, with free space in the hutch (capacity{" "}
            20), they will produce 1-3 baby rabbits per day with 80%
            probability. Babies become adults after 3 days. This is your
            main long-term income source — sell extra rabbits at the
            market.
          </p>
        </Section>

        <Section title="04 / Market & economy">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do market prices work?
          </h3>
          <p>
            Prices are rolled fresh each day inside their range: eggs 4-6
            écus, milk 3-5, hens 80-120, roosters 100-140, rabbits 50-90.
            Each price gets a <em>bas / normal / haut</em> badge so you can
            decide whether to sell now or wait. The badges are advisory —
            you can ignore them and still progress.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why does my milk disappear?
          </h3>
          <p>
            Milk is perishable: it expires <strong>24&nbsp;hours</strong>{" "}
            after production. Sell it the same day, or it&rsquo;s
            automatically removed from the storage. The clock badge in the
            inventory shows perishable items.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I buy more animals?
          </h3>
          <p>
            Yes — the Marché has an &ldquo;Acheter des animaux&rdquo; section
            with fixed prices: <strong>poussin 50 écus, lapereau 35 écus,
            poule adulte 160 écus, coq adulte 200 écus, lapin adulte 120
            écus</strong>. Young animals (poussins, lapereaux) are cheaper
            but take 3 days to mature. Adult animals are immediately
            productive but cost more. Capacity caps: 15 in the poulailler,
            20 in the clapier. The system slightly biases purchased rabbit
            genders to keep your breeding pair balanced.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How long does it take to clear level 1 for free?
          </h3>
          <p>
            About 30-40 days for a casual free player, ~21 days for an
            optimised player who sells animals aggressively and times the
            market. Pacing matches the cosy genre — short daily sessions
            adding up over a real month, not a sprint.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What are the level-1 goals?
          </h3>
          <ul className="list-disc pl-[20px] space-y-[4px] my-[15px]">
            <li>Repay 5000 écus of debt</li>
            <li>Play at least 5 farm days</li>
            <li>Sell 80 eggs total</li>
            <li>Sell 80 litres of milk total</li>
            <li>Have 3 adult hens</li>
            <li>Have 1 adult rooster</li>
            <li>Raise 6 adult rabbits</li>
            <li>Build the level-2 storage</li>
            <li>Keep 500 écus in your wallet at the end</li>
          </ul>
        </Section>

        <Section title="05 / Coin packs">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What do the coin packs unlock?
          </h3>
          <p>
            Nothing exclusive. The four packs (Petite bourse 250 écus /
            0,99&nbsp;€, Bourse fermière 700 / 2,99&nbsp;€, Coffre fermier
            1500 / 5,99&nbsp;€, Grand coffre 3500 / 11,99&nbsp;€) just give
            you écus to spend on resources, storage upgrades or debt
            repayment. Several level-1 goals (selling 80 eggs, raising 6
            rabbits, playing 5 days) <strong>cannot</strong> be skipped
            with money — by design.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Are coin packs a subscription?
          </h3>
          <p>
            <strong>No.</strong> All coin packs are one-time consumable
            purchases. Pay once, écus credited instantly, no renewal, no
            recurring charge.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore purchases on a new iPhone?
          </h3>
          <p>
            Coins are <strong>consumables</strong>, which means Apple does
            not restore them when you reinstall — this is the same across
            all iOS games and is by Apple&rsquo;s design, not a {APP_NAME}{" "}
            choice. The <em>Restaurer les achats</em> button in the shop
            shows a friendly message explaining this. Your already-credited
            coins remain in your save data, which is local to the device. To
            move a save between devices, restore from an iCloud backup
            (iCloud sync of save files is on the roadmap).
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn&rsquo;t credited — what do I do?
          </h3>
          <p>
            Force-quit {APP_NAME} (swipe up from the bottom and flick the
            app card up) and relaunch. StoreKit will retry pending
            transactions. If that fails, email me with your Apple
            transaction ID (visible in your App Store account history at{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60"
            >
              reportaproblem.apple.com
            </a>
            ) and I&rsquo;ll sort it.
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

        <Section title="06 / Save & data">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Where is my farm stored?
          </h3>
          <p>
            Locally on your iPhone, in a SwiftData database inside the app
            sandbox. It is never transmitted to a server. If you delete the
            app, the farm is removed with it. iCloud sync is planned for a
            future update.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I reset my farm?
          </h3>
          <p>
            Yes — uninstall and reinstall the app. iOS purges the sandbox
            and you start fresh. (An in-app reset button is on the
            backlog.)
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What about the &ldquo;Heure désynchronisée&rdquo; warning?
          </h3>
          <p>
            {APP_NAME} runs on a real-world day clock. If the app detects
            that your device&rsquo;s system time has been moved backwards
            by more than 14 days, or jumped forward by more than 60 days,
            it briefly pauses the day cycle and shows that badge. No
            penalty — production resumes the next real day. This is to
            preserve the slow cosy pace, not to punish you.
          </p>
        </Section>

        <Section title="07 / Notifications">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What notifications does the app send?
          </h3>
          <p>
            One single daily reminder at 18:30 local time —{" "}
            &ldquo;Ta ferme t&rsquo;attend&rdquo; — and only if you grant
            permission during the onboarding. No marketing, no urgency, no
            &ldquo;your animals will suffer&rdquo;. You can disable it in
            iOS Settings &gt; Notifications &gt; My E-Farm.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a balance feels off,
            or if there&rsquo;s a feature you wish existed (iCloud sync,
            English/Spanish localisation, level 2 with sheep and crops…),
            write to{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="09 / Useful links">
          <Ul>
            <li>
              <Link
                href="/myefarm"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
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
            href="/myefarm"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
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
