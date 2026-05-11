import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "ColdKeeper";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 6, 2026";
const URL = "https://maximesaltet.com/coldkeeper/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS cold-therapy timer. FAQ, restore purchases, protocols, Apple Health, iCloud sync, and contact.`;

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

export default function ColdKeeperSupportPage() {
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
            How do I run my first session?
          </h3>
          <p>
            Open {APP_NAME}, pick a session type (ice bath, cold shower, open
            water, or contrast), optionally enter the water temperature, and
            tap the giant <strong>START</strong> button. The countdown begins
            immediately. Tap <strong>STOP</strong> to end and save.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the streak counter track?
          </h3>
          <p>
            One completed session per calendar day extends your streak. Miss
            a day, and the streak resets to zero on the next session you log.
            The longest streak you've ever held is preserved separately, so
            you always know your record.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why are the haptics so strong?
          </h3>
          <p>
            On purpose. Your hands are numb, your eyes are likely closed, the
            shower or water is loud. Strong haptics + clear audio cues are
            the only way to confirm a transition without breaking your
            breath. You can tone them down in <strong>Settings → Haptics
            &amp; Sound</strong> if you prefer.
          </p>
        </Section>

        <Section title="03 / Protocols">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Which protocol should I start with?
          </h3>
          <p>
            <strong>Beginner Ramp</strong> if you're new — it scales 30 s →
            60 s → 90 s → 2 min over four weeks and prevents the typical
            burnout-then-quit pattern. <strong>Wim Hof</strong> if you have
            an established practice and want guided breath rounds before
            immersion. <strong>Contrast Therapy</strong> if you train and
            want hot/cold alternation timed automatically.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I create my own protocol?
          </h3>
          <p>
            Yes — with {APP_NAME} Pro, the custom protocol builder lets you
            stack any number of cold/breath/rest intervals at any duration
            and save them as named templates.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Wim Hof breathing — is the app a substitute for the official
            method?
          </h3>
          <p>
            No. {APP_NAME} provides a basic timed Wim Hof framing for
            convenience, but the official Wim Hof Method app and certified
            instructors remain the gold standard. Always practice breath
            holds seated or lying down, never in or near water.
          </p>
        </Section>

        <Section title="04 / ColdKeeper Pro">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>Unlimited history (free tier keeps 7 days)</li>
            <li>All advanced protocols and the custom builder</li>
            <li>Apple Health integration (sessions as workouts)</li>
            <li>iCloud sync across your Apple devices</li>
            <li>Home Screen widgets (streak + last session)</li>
            <li>Detailed weekly and monthly stats</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is Pro a subscription?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} Pro is a{" "}
            <strong>one-time, non-renewing purchase of $7.99 / 7,99&nbsp;€</strong>.
            Bought once, kept for life on your Apple ID. All future updates
            included.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my purchase on a new iPhone?
          </h3>
          <p>
            Sign into the same Apple ID used for the original purchase, open{" "}
            {APP_NAME}, and go to <strong>Settings → Restore Purchases</strong>{" "}
            (also accessible from the Pro paywall). Pro reactivates instantly,
            at no extra cost.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn't unlocking — what do I do?
          </h3>
          <p>
            First, confirm you're signed into the original Apple ID. Then tap{" "}
            <strong>Settings → Restore Purchases</strong>. If that fails,
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

        <Section title="05 / Apple Health">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does Health integration work?
          </h3>
          <p>
            With {APP_NAME} Pro and your permission, completed sessions are
            saved to the Health app as workouts of type{" "}
            <em>Cold Water Immersion</em>, with duration and start time. The
            developer never sees this data — it stays on-device through
            HealthKit.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I revoke Health access?
          </h3>
          <p>
            Open the iOS Settings app and go to{" "}
            <strong>Privacy &amp; Security → Health → ColdKeeper</strong>. Toggle
            off the categories you no longer want the app to write. Your
            existing workouts remain in the Health app until you remove them
            manually.
          </p>
        </Section>

        <Section title="06 / iCloud sync">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does sync work?
          </h3>
          <p>
            With {APP_NAME} Pro, your sessions sync across your Apple devices
            via Apple's CloudKit, in <em>your own private iCloud database</em>.
            The developer of {APP_NAME} has no access to it. Sync is automatic
            when you're signed into iCloud and the device is online.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My sessions aren't appearing on my other device — what now?
          </h3>
          <Ul>
            <li>
              Confirm both devices are signed into the <strong>same</strong>{" "}
              iCloud account.
            </li>
            <li>
              Open <strong>Settings → Apple Account → iCloud → Apps using
              iCloud</strong> and confirm {APP_NAME} is enabled.
            </li>
            <li>
              Make sure both devices are online and have iCloud Drive
              enabled.
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
            using iCloud → {APP_NAME}</strong> and turn it off. The app keeps
            working with local-only storage.
          </p>
        </Section>

        <Section title="07 / Safety">
          <p>
            Cold immersion can be dangerous, particularly for people with
            cardiovascular conditions, hypertension, pregnancy, or Raynaud's
            syndrome. <strong>Consult a physician before starting</strong>,
            especially if you fall into any of those categories.
          </p>
          <p>
            <strong>Never plunge in open water alone.</strong> Cold-shock
            response is real and can cause involuntary inhalation in the
            first minute. Always have a buddy on shore or in shallow water.
          </p>
          <p>
            {APP_NAME} is a wellness and lifestyle app. It does not
            diagnose, treat, or prevent any medical condition. The
            information in the app is not medical advice.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a protocol behaves
            oddly, or if there's a feature you wish existed, write to{" "}
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
                href="/coldkeeper"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
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
            href="/coldkeeper"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
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
