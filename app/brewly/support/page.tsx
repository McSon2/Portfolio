import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Brewly";
const CONTACT_EMAIL = "maximesaltet.brewly@gmail.com";
const FALLBACK_EMAIL = "maximesaltet@hotmail.fr";
const LAST_UPDATED = "May 6, 2026";
const URL = "https://maximesaltet.com/brewly/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS pour-over coffee timer. FAQ, restore purchases, brewing tips, and contact.`;

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

export default function BrewlySupportPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          {APP_NAME} · Support
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">Support &amp; FAQ</h1>
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
            How do I brew my first cup?
          </h3>
          <p>
            Open {APP_NAME}, pick a method (V60, Aeropress, Chemex, or French
            Press), adjust the dose with the slider, choose your ratio (1:15
            bold / 1:16 balanced / 1:17 delicate) and grind, then tap{" "}
            <strong>Start Brew</strong>. Follow the timer step by step —
            haptics will tell you when to pour, swirl, and stop.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the live water indicator show?
          </h3>
          <p>
            For each step, {APP_NAME} displays the cumulative water target in
            grams (e.g. <em>"Pour to 60&nbsp;g"</em>). It updates as the step
            progresses, so you know exactly how much should be on your scale
            at any moment — without doing math.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why do I hear short sounds and feel taps?
          </h3>
          <p>
            {APP_NAME} uses Core Haptics + brief system sounds to mark the
            transition between steps. You can adjust both in{" "}
            <strong>Settings</strong>: turn haptics on/off, set sound volume,
            or silence the app entirely for early-morning brews.
          </p>
        </Section>

        <Section title="03 / Brewly Pro">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>
              Four additional methods: Kalita Wave, Origami, Hario Switch,
              Cold Brew
            </li>
            <li>
              Brew history with star ratings and tasting notes
            </li>
            <li>
              iCloud sync of brews across your Apple devices
            </li>
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
            {APP_NAME}, and go to <strong>Settings → Restore Purchases</strong>{" "}
            (also accessible from the Pro screen). Pro reactivates instantly,
            at no extra cost.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn't unlocking — what do I do?
          </h3>
          <p>
            First, confirm you're signed into the original Apple ID. Then tap
            <strong> Settings → Restore Purchases</strong>. If that fails,
            force-quit {APP_NAME} (swipe up from the bottom and flick the app
            card up) and relaunch. Still stuck? Email me with your Apple
            transaction ID (visible in your App Store account history).
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
            , sign in with your Apple ID, and select the {APP_NAME} purchase.
            If Apple declines, email me — I'll find a fair solution.
          </p>
        </Section>

        <Section title="04 / iCloud sync">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does sync work?
          </h3>
          <p>
            With {APP_NAME} Pro, your brew history syncs across your Apple
            devices via Apple's CloudKit, in <em>your own private iCloud
            database</em>. The developer of {APP_NAME} has no access to it.
            Sync is automatic when you're signed into iCloud and the device
            is online.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My brews aren't appearing on my other device — what now?
          </h3>
          <Ul>
            <li>Confirm both devices are signed into the <strong>same</strong> iCloud account.</li>
            <li>
              Open <strong>Settings → Apple Account → iCloud → Apps using
              iCloud</strong> and confirm {APP_NAME} is enabled.
            </li>
            <li>
              Make sure both devices are online and have iCloud Drive enabled.
            </li>
            <li>
              First-sync can take a couple of minutes. If after 10 minutes
              nothing has happened, force-quit and reopen {APP_NAME} on both
              devices.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I disable iCloud sync?
          </h3>
          <p>
            Yes. Go to <strong>iOS Settings → Apple Account → iCloud → Apps
            using iCloud → {APP_NAME}</strong> and turn it off. The app will
            keep working with local-only storage.
          </p>
        </Section>

        <Section title="05 / Brewing &amp; recipes">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Which ratio should I use?
          </h3>
          <p>
            <strong>1:15</strong> — bolder, fuller body. Good for darker
            roasts or when you want strength.
            <br />
            <strong>1:16</strong> — balanced. The default for most lighter
            specialty roasts.
            <br />
            <strong>1:17</strong> — delicate, more clarity. Great for very
            light roasts or single-origin filter coffees.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What grind should I pick?
          </h3>
          <p>
            {APP_NAME} suggests a baseline per method (medium for V60, fine for
            Aeropress standard, medium-coarse for Chemex, coarse for French
            Press). Adjust by feel: if your brew is{" "}
            <strong>sour or fast</strong>, grind finer. If it's{" "}
            <strong>bitter or slow</strong>, grind coarser.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I create my own recipes?
          </h3>
          <p>
            Custom recipes are on the roadmap. For now, you can adjust dose,
            ratio, and grind on every method and save the result as a brew
            entry (Pro). Custom step sequences will arrive in a free update.
          </p>
        </Section>

        <Section title="06 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a method behaves oddly
            on your kettle workflow, or if there's a feature you wish
            existed, write to{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="07 / Useful links">
          <Ul>
            <li>
              <Link
                href="/brewly"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
              </Link>
            </li>
            <li>
              <Link
                href="/brewly/privacy"
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
            href="/brewly"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
        </p>
        <CrossAppNav currentSlug="brewly" />
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
