import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "DadCoPilot";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 11, 2026";
const URL = "https://maximesaltet.com/dadcopilot/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS baby tracker for dads. FAQ on co-parent sync, 3 AM Mode, Pro purchase, Apple Watch, Live Activities and more.`;

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

export default function DadCoPilotSupportPage() {
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
            . A real human (the developer, also a dad) replies — usually
            within 48&nbsp;hours.
          </p>
          <p>
            To speed things up, please include: your iPhone model, iOS
            version, {APP_NAME} version (visible in <strong>Settings →
            About</strong>), and a screenshot if relevant.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I log my first event?
          </h3>
          <p>
            Open {APP_NAME}, tap any of the four big buttons on the Today
            screen — <strong>Feed</strong>, <strong>Diaper</strong>,{" "}
            <strong>Sleep</strong>, <strong>Pump</strong>. That&rsquo;s it.
            Duration timers start automatically for feed, sleep and pump; tap
            again to stop. Solid and medication events are one tap from the
            &quot;More&quot; sheet.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I edit or delete an event?
          </h3>
          <p>
            Open the Timeline, tap any event to edit time, duration, or notes.
            Swipe left to delete. Deletes are undoable for a few seconds via
            the toast that appears at the bottom of the screen.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I track twins?
          </h3>
          <p>
            Yes. With {APP_NAME} Pro you can add as many babies as you need,
            twins included. Each baby has its own profile, timeline and stats;
            switch between them with the segmented control at the top of the
            Today screen.
          </p>
        </Section>

        <Section title="03 / 3 AM Mode">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What is 3 AM Mode?
          </h3>
          <p>
            A near-pure black UI with massive tap targets, strong haptic
            confirmations and zero animations. Designed so you can log a feed
            in a dark bedroom without waking anyone up and without losing your
            night vision.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            When does it turn on?
          </h3>
          <p>
            By default, between 22:00 and 06:00 (your local time). You can set
            it to <strong>Always on</strong>, <strong>Off</strong>, or wire it
            to your iOS Focus mode from <strong>Settings → 3&nbsp;AM
            Mode</strong>. Free users get the auto schedule; Pro adds the Focus
            integration and the full haptic-only mode.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My screen is still too bright at night
          </h3>
          <p>
            Combine 3&nbsp;AM Mode with iOS&apos;s system-wide{" "}
            <em>Reduce White Point</em> (Settings → Accessibility → Display
            &amp; Text Size → Reduce White Point). On supported iPhones, also
            enable <em>Auto-Brightness</em> so the OLED panel drops to its
            minimum in a dark room.
          </p>
        </Section>

        <Section title="04 / Co-parent sync">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I invite a co-parent?
          </h3>
          <p>
            Open <strong>Settings → Co-parent → Invite</strong>. {APP_NAME}
            generates a CloudKit share link and a QR code; send the link or
            scan the QR with your partner&rsquo;s iPhone. They tap{" "}
            <strong>Accept</strong> and the timeline starts syncing. No
            account, no password, no email needed.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is co-parent sync really free?
          </h3>
          <p>
            Yes. CloudKit is provided by Apple at no cost in your own iCloud
            account; we charge nothing on top. The only requirement is that
            both parents are signed into iCloud on their iPhone.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My partner&apos;s events aren&apos;t showing up
          </h3>
          <Ul>
            <li>
              Confirm both phones are <strong>online</strong> and signed into
              iCloud.
            </li>
            <li>
              Open <strong>iOS Settings → Apple Account → iCloud → Apps using
              iCloud</strong> on both phones and confirm {APP_NAME} is enabled.
            </li>
            <li>
              First sync after acceptance can take a couple of minutes.
              Background sync resumes when the app is reopened.
            </li>
            <li>
              Force-quit and reopen {APP_NAME} on both phones if it has been
              more than 10 minutes.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I remove a co-parent?
          </h3>
          <p>
            <strong>Settings → Co-parent → Manage</strong> and tap{" "}
            <strong>Revoke access</strong> next to the parent you want to
            remove. CloudKit removes their access from the shared record
            immediately; their local copy of past events stays on their phone
            but no new updates flow through.
          </p>
        </Section>

        <Section title="05 / DadCoPilot Pro">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>Unlimited history (free tier keeps 7 days)</li>
            <li>Multi-baby support, twins included</li>
            <li>Full 3&nbsp;AM Mode with haptic-only confirmations</li>
            <li>Advanced stats, predictions, growth curves</li>
            <li>Live Activities, premium widgets, Apple Watch app</li>
            <li>PDF&#47;CSV export for your pediatrician</li>
            <li>&ldquo;Dad Victory&rdquo; sticker pack</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is Pro a subscription?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} Pro is a{" "}
            <strong>one-time, non-renewing purchase of 6,99&nbsp;€ / $7.99</strong>.
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
            My purchase isn&apos;t unlocking — what do I do?
          </h3>
          <p>
            First, confirm you&apos;re signed into the original Apple ID. Then
            tap <strong>Settings → Restore Purchases</strong>. If that fails,
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
            If Apple declines, email me — I&apos;ll find a fair solution.
          </p>
        </Section>

        <Section title="06 / Apple Watch, Live Activities, Siri">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Does the Watch app work without my iPhone?
          </h3>
          <p>
            Yes. The {APP_NAME} Watch app is standalone on watchOS&nbsp;10+:
            it stores events on-watch and syncs back to your iPhone (and your
            co-parent, if enabled) when both are in range or via cellular if
            your Watch has it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do Live Activities work?
          </h3>
          <p>
            When you start a feed, sleep or pump timer, a Live Activity appears
            on your Lock Screen and in the Dynamic Island showing the elapsed
            duration. Tap to open {APP_NAME} directly to the running event.
            Live Activities require Pro.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Which Siri Shortcuts are supported?
          </h3>
          <Ul>
            <li>&ldquo;Log a diaper&rdquo;</li>
            <li>&ldquo;Log a feed&rdquo; / &ldquo;Stop the feed&rdquo;</li>
            <li>&ldquo;Start sleep&rdquo; / &ldquo;Stop sleep&rdquo;</li>
            <li>&ldquo;What&apos;s the next nap?&rdquo;</li>
          </Ul>
          <p>
            Customise wake words in <strong>iOS Settings → Siri &amp;
            Search → {APP_NAME}</strong>.
          </p>
        </Section>

        <Section title="07 / Apple Health &amp; pediatrician export">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does Health integration work?
          </h3>
          <p>
            With your permission, {APP_NAME} reads weight, height and head
            circumference from the Health app so the growth curves appear in
            Stats. Nothing is written back to Health by default. The developer
            never sees this data — it stays on-device through HealthKit.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I send a clean report to my pediatrician?
          </h3>
          <p>
            Yes — with Pro, go to <strong>Settings → Export</strong> to
            generate a 1-page PDF or a CSV covering any date range. Includes
            feed/diaper/sleep totals, daily counts and growth data. Email it,
            AirDrop it, or print it.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer who is
            himself a dad. Every email is read. If something is broken, if a
            timer behaves oddly, or if there&apos;s a feature you wish existed,
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
                href="/dadcopilot"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
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
            href="/dadcopilot"
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
