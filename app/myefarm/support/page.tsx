import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "My E-Farm";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "August 20, 2026";
const APP_VERSION = "2.3.0";
const URL = "https://maximesaltet.com/myefarm/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the cosy iOS voxel farm game. FAQ, breeding odds, brooding, sickness, market, co-op, leaderboards, restore purchases, contact.`;

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
          Last updated {LAST_UPDATED} · rules described match app version{" "}
          {APP_VERSION}
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
          <p className="opacity-70">
            Every number on this page is the number the game actually uses.
            The same figures are available offline inside the app, in{" "}
            <em>Réglages → Le guide du fermier</em>.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What do I start with?
          </h3>
          <p>
            A farm that <strong>produces from day one</strong>: 3 hens, 1
            rooster, 2 male and 2 female rabbits, 2 baby rabbits and a cow,
            plus two full rounds of supplies, 6 welcome eggs and 5 litres of
            milk ready to collect. Oncle Léon walks you through the first
            gestures, and each building you visit for the first time pays a
            small discovery bonus.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why aren&rsquo;t my hens laying eggs?
          </h3>
          <p>
            An animal only produces if it is <strong>fed</strong>,{" "}
            <strong>watered</strong>, <strong>clean</strong> and{" "}
            <strong>healthy</strong> — all four. Brushing is not optional: a
            dirty animal produces nothing. A hen sitting on a clutch also
            stops laying until the eggs hatch; that is the cost of brooding.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How much does a day of care cost?
          </h3>
          <p>
            One unit <em>per group</em>, not per animal: feeding the whole
            coop costs 1 wheat, the hutch 1 carrot, the stable 1 hay, plus 1
            water and 1 brush per group. Roughly 59 écus a day for the whole
            farm — and that figure does not grow when your herd does. Only
            building capacity limits your growth.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My chicks are still chicks — bug?
          </h3>
          <p>
            No. Animals grow on a <strong>real-world day clock</strong>:
            chicks become hens or roosters after 3 calendar days, baby
            rabbits after 3 days, calves after 6. A baby whose adult section
            is full simply waits for a free slot instead of disappearing.
          </p>
        </Section>

        <Section title="03 / Animal care &amp; sickness">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does the daily cycle work?
          </h3>
          <p>
            At midnight (your local time) every animal becomes hungry and
            thirsty again, and about half of them get dirty. You have until
            the next midnight to take care of them.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why did an animal fall sick even though I take good care of it?
          </h3>
          <p>There are two separate causes, and they are not the same:</p>
          <Ul>
            <li>
              <strong>Neglect.</strong> After 2 consecutive days without food
              or without water, an animal has a 15% chance per day of falling
              sick. This one is entirely avoidable.
            </li>
            <li>
              <strong>Bad luck.</strong> Even a perfectly cared-for animal
              has a <strong>1% chance per day</strong> of falling sick, with
              a hard cap of <strong>2 animals per day</strong> across the
              whole farm. On a 20-animal farm that&rsquo;s roughly one sick
              animal every five days. It was added in 2.3.0 at a
              player&rsquo;s suggestion: real farms have sick animals, and it
              gives your med kits a purpose.
            </li>
          </Ul>
          <p>
            A sick animal <strong>never dies</strong> and never infects the
            others — it simply stops producing until you heal it. A banner on
            the farm screen tells you as soon as one is sick.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I heal a sick animal?
          </h3>
          <p>
            Healing consumes <strong>1 trousse de soins</strong> (med kit),
            whatever the animal. Med kits are sold at the marché by the pack
            of 3 for 120 écus (40 écus each), and{" "}
            <strong>30% cheaper on Fridays</strong>, when the vet visits the
            village. You also earn them from the 7-day daily streak.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Do animals die?
          </h3>
          <p>
            <strong>No.</strong> Neglect causes sickness and stops
            production, never death. {APP_NAME} is a cosy game.
          </p>
        </Section>

        <Section title="04 / Rabbits — the breeding odds">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How many baby rabbits should I expect per day?
          </h3>
          <p>
            Since 2.3.0 the roll happens <strong>per couple</strong>, every
            night. A couple is one adult male and one adult female, both fed,
            watered, clean and healthy:
          </p>
          <Ul>
            <li>
              <strong>15%</strong> chance of 2 baby rabbits
            </li>
            <li>
              <strong>45%</strong> chance of 1
            </li>
            <li>
              <strong>40%</strong> chance of none
            </li>
          </Ul>
          <p>
            That averages <strong>0.75 baby per couple per night</strong>. Two
            couples ≈ 1.5 per night; six couples ≈ 4.5. Before 2.3.0 the whole
            farm rolled <em>once</em> per day no matter how many rabbits you
            owned, which is why expanding the hutch felt pointless — that is
            fixed.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is the ideal male / female ratio?
          </h3>
          <p>
            <strong>1:1.</strong> A male without a female facing him does
            nothing at all — he just eats a slot in the hutch. Two limits
            apply on top: the hutch has <strong>6 nests</strong> (couples
            beyond the sixth wait their turn), and a baby is only born if the
            nursery has a free slot. A baby that cannot grow up because the
            adult section is full keeps blocking its nursery slot, so sell or
            expand.
          </p>
        </Section>

        <Section title="05 / Chickens — roosters &amp; brooding">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Do I need a rooster to get eggs?
          </h3>
          <p>
            <strong>No.</strong> A farm without a single rooster lays exactly
            as many eggs. Each hen lays 1 egg a day, with a 45% chance of 2
            and a 10% chance of 3.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is the ideal hen / rooster ratio?
          </h3>
          <p>
            One rooster properly fertilises <strong>5 hens</strong>. Beyond
            that, the hatch rate of a clutch drops proportionally — 10 hens
            with a single rooster takes it from 75% down to about 38% per egg
            (it never falls below 35%, and a fully incubated clutch always
            yields at least one chick). So: <strong>no rooster</strong> if
            you never brood, <strong>one rooster per 5 hens</strong> if you
            want chicks. The coop screen shows your current fertility and how
            many roosters you would need.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How does brooding work?
          </h3>
          <p>
            You need a rooster, <strong>3 eggs</strong> in storage, 3 free
            nursery slots, and at least 2 laying hens left outside the nest.
            Incubation lasts <strong>4 nights of care</strong> — a night
            where the hen was not fed, watered and brushed does not count.
            The brooding hen lays nothing during that time. Chicks born from
            a clutch are hens 75% of the time, against 50% for a bought
            chick.
          </p>
          <p>
            <strong>One clutch at a time</strong> on the whole farm — the coop
            has a single nest. That limit is what keeps the economy sane.
          </p>
        </Section>

        <Section title="06 / Market, storage &amp; getting rid of things">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do market prices work?
          </h3>
          <p>
            Prices <strong>change every day</strong> around a median value
            (egg 5, milk 4, apple 15, butter 28, hen 100, rooster 120, rabbit
            70, cow 280, bull 380 écus), between −40% and +40%. The
            green/red badge next to each line shows the day&rsquo;s
            variation. Weekends give a market boost, and selling at +25% or
            more unlocks an achievement. The price of a given day is the same
            for everyone — it is derived from the calendar date, not rolled
            per player.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I sell or get rid of items I don&rsquo;t need — med kits, for
            instance?
          </h3>
          <p>
            Yes, since 2.3.0, and <strong>unit by unit</strong>. Two places:
          </p>
          <Ul>
            <li>
              <strong>Marché → Vendre → «&nbsp;Revendre ton
              matériel&nbsp;»</strong> — the merchant buys back hay, water,
              brushes, med kits and seeds at <strong>half the shop
              price</strong> (a 40-écu med kit sells back for 20). Pick the
              quantity, keep what you still need.
            </li>
            <li>
              <strong>Remise → the «&nbsp;…&nbsp;» button on any line</strong>{" "}
              — same resale, plus the option to simply throw things away when
              storage is full.
            </li>
          </Ul>
          <p>
            Produce (eggs, milk, apples, butter, wheat, carrots) is not bought
            back at a flat rate: it goes through the market at the
            day&rsquo;s price. Buying to resell is always a loss — that is
            deliberate.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why does my milk disappear?
          </h3>
          <p>
            Milk is perishable: it expires <strong>24&nbsp;hours</strong>{" "}
            after production. Sell it the same day, or turn it into butter (5
            litres → 1 jar, max 2 jars a day) from level 2.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How big is my storage?
          </h3>
          <p>
            One item = one slot. Level 1 holds 40, level 2 holds 60 (750
            écus), level 3 holds 120 (1500 écus). When it overflows, the
            oldest perishables are dropped first — so keep an eye on it.
          </p>
        </Section>

        <Section title="07 / Levels &amp; progression">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I move up a level?
          </h3>
          <p>
            You have to meet <strong>all</strong> the conditions of the level
            at once, including having your debt fully repaid. They are listed
            in the Objectifs tab. Level 1 asks for: 5000 écus of debt repaid,
            5 days played, 80 eggs sold, 80 litres of milk sold, 3 adult
            hens, 1 rooster, 6 adult rabbits raised, level-2 storage built,
            and 500 écus left in your pocket.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does each level unlock?
          </h3>
          <Ul>
            <li>
              <strong>Level 2</strong> — fields (one free plot to start),
              cattle, the butter recipe. Expansion loan: +5000 écus of debt.
            </li>
            <li>
              <strong>Level 3</strong> — the orchard: 3 apple trees, 12
              apples every 3 days. Expansion loan: +10&nbsp;000 écus.
            </li>
            <li>
              <strong>Level 4</strong> — the beehive. Expansion loan:
              +20&nbsp;000 écus.
            </li>
          </Ul>
          <p>
            An expansion loan hands you <strong>no cash</strong>: it is a
            target to clear before the next level. You only ever cross{" "}
            <strong>one level at a time</strong> — if you saw the game jump
            from level 1 to level 3 in one go, or announce level 2 without
            giving you a field, that was a bug and it is fixed in 2.3.0.
            Existing farms are repaired automatically on launch.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How long does level 1 take?
          </h3>
          <p>
            Measured on 200 simulated playthroughs: median{" "}
            <strong>day 15</strong> for a daily player, day 21 for a casual
            one (care done 70% of days). Level 4 lands around day 56. Every
            single run reaches level 4 within 120 days, none goes bankrupt.
          </p>
        </Section>

        <Section title="08 / Village, leaderboards &amp; co-op">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            The leaderboard says &ldquo;connect to Game Center&rdquo; and
            nothing happens
          </h3>
          <p>
            Tap <em>Se connecter à Game Center</em> in the Village tab. If
            nothing opens, Game Center is disabled for your Apple Account:
            open iOS <em>Settings → Game Center</em> and sign in, then come
            back. Note that the three leaderboards (farm value, debt repaid,
            longest streak) only went live with version {APP_VERSION} — they
            existed but were never published on Apple&rsquo;s side before
            that, which is why nobody could see them. Your farm works
            identically without any of it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My co-op disappeared and I had to create it again
          </h3>
          <p>
            That was a bug, fixed in 2.3.0: membership was stored per week, so
            every Monday the game could no longer find your co-op even though
            it still existed. Membership is now <strong>permanent</strong>.
            Only the weekly goal bar resets each week.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the co-op give me?
          </h3>
          <p>
            Up to 20 farmers share a weekly goal — every sale and every debt
            repayment feeds it. When the goal is reached,{" "}
            <strong>each farmer gets 250 écus</strong>, once per week. (Before
            2.3.0 the app announced this bonus but never actually paid it.)
            You can also send one helping hand per farmer per day; whoever
            receives it earns 25 écus. Co-ops need an iCloud account and a
            network connection; everything else in the game works offline.
          </p>
        </Section>

        <Section title="09 / Ads &amp; coin packs">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Are there ads?
          </h3>
          <p>
            Only <strong>rewarded ones you choose to watch</strong>. No
            banner, no interstitial, nothing that starts by itself: an ad only
            plays when you tap a button that says what you get for it
            (doubling a sale, a free ration, re-rolling a daily quest). The
            one-off <em>Ferme sans publicité</em> purchase removes them for
            good and grants the same rewards without watching anything —
            it&rsquo;s a non-consumable, so it restores on a new iPhone.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What do the coin packs unlock?
          </h3>
          <p>
            Nothing exclusive. The four packs (Petite bourse 250 écus, Bourse
            fermière 700, Coffre fermier 1500, Grand coffre 3500) only give
            écus. Several level goals — selling eggs, raising rabbits, playing
            days — <strong>cannot</strong> be skipped with money, by design.
            They are one-time consumables: no subscription, no renewal, no
            loot box.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore purchases on a new iPhone?
          </h3>
          <p>
            <em>Restaurer les achats</em> in the shop brings back the
            ad-removal purchase. Coins are <strong>consumables</strong>, which
            Apple never restores — that is Apple&rsquo;s design, not a{" "}
            {APP_NAME} choice. Your credited coins travel with your save,
            which syncs through iCloud (see below).
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn&rsquo;t credited — what do I do?
          </h3>
          <p>
            Force-quit {APP_NAME} and relaunch; StoreKit retries pending
            transactions. If that fails, email me with your Apple transaction
            ID (from{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60"
            >
              reportaproblem.apple.com
            </a>
            ) and I&rsquo;ll sort it. Refunds are handled directly by Apple at
            the same address; if Apple declines, email me and I&rsquo;ll find
            a fair solution.
          </p>
        </Section>

        <Section title="10 / Save &amp; data">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Where is my farm stored?
          </h3>
          <p>
            In a SwiftData database on your iPhone, mirrored to{" "}
            <strong>your private iCloud</strong> so your farm follows you
            across devices signed into the same Apple Account. You can turn
            the sync off in <em>Réglages → Sauvegarde iCloud</em> (the app
            must be relaunched afterwards). Co-op membership and helping hands
            use a separate, public iCloud database — that one only ever holds
            your Game Center display name and your weekly contribution.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I reset my farm?
          </h3>
          <p>
            Yes — <em>Réglages → Réinitialiser ta ferme</em>, with a typed
            confirmation. It erases everything, including the iCloud copy and
            your other devices. There is no undo.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What about the &ldquo;Heure désynchronisée&rdquo; warning?
          </h3>
          <p>
            {APP_NAME} runs on a real-world day clock. If your device clock
            jumps backwards or far forwards, the app pauses the day cycle and
            shows that badge. No penalty — production resumes on the next real
            day. It preserves the slow cosy pace; it is not there to punish
            you.
          </p>
        </Section>

        <Section title="11 / Notifications">
          <p>
            Gentle local reminders only, and only if you grant permission —
            no marketing, no urgency, no &ldquo;your animals will
            suffer&rdquo;. You can disable them in{" "}
            <em>Réglages</em> inside the app or in iOS Settings &gt;
            Notifications &gt; My E-Farm.
          </p>
        </Section>

        <Section title="12 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by one indie developer, and
            player reports genuinely drive the updates: the per-couple
            breeding odds, the accidental sickness, the item resale and the
            in-app farmer&rsquo;s guide in 2.3.0 all came from a single
            player&rsquo;s message. If something is broken, if the balance
            feels off, or if you wish a feature existed, write to{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="13 / Useful links">
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
