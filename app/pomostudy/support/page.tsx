import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "PomoStudy";
const FALLBACK_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 8, 2026";
const URL = "https://maximesaltet.com/pomostudy/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS Pomodoro focus timer for students and knowledge workers. FAQ, restore purchases, Live Activity, widgets, ambient sounds, and contact.`;

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

export default function PomoStudySupportPage() {
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
            How do I run my first Pomodoro?
          </h3>
          <p>
            Open {APP_NAME}, optionally pick a tag (Math, Thesis, etc.), and
            tap the giant <strong>START</strong> button. The 25-minute focus
            countdown begins. When it ends, the app auto-transitions to a
            5-minute short break, and after four cycles to a 15-minute long
            break. You can tap <strong>PAUSE</strong> or{" "}
            <strong>RESET</strong> at any moment.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I customize the durations?
          </h3>
          <p>
            Yes. In <strong>Settings → Timer</strong>, set focus length,
            short-break length, long-break length, and the number of focus
            cycles before a long break. The classic 25/5/15 × 4 is the
            default — adjust it to your own attention span.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the streak counter track?
          </h3>
          <p>
            One completed focus session per calendar day extends your
            streak. Miss a day, and the streak resets to zero on the next
            session you log. The longest streak you&rsquo;ve ever held is
            preserved separately, so you always know your record.
          </p>
        </Section>

        <Section title="03 / Tags & stats">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What are tags for?
          </h3>
          <p>
            A tag is a label you attach to a session — Math, Thesis, Side
            Project, Reading. {APP_NAME} aggregates time per tag so you
            can see where your focus actually goes, not just how many
            tomatoes you ticked.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How does the heatmap work?
          </h3>
          <p>
            Each square is a calendar day. The darker the square, the more
            focus time you logged that day. Free shows the last 4 weeks;
            Pro shows the last 12. Tap a square to see the breakdown by tag
            for that day.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do weekly goals work?
          </h3>
          <p>
            Set a target per tag (e.g. &ldquo;Math: 8h this week&rdquo;).
            Progress fills as completed focus sessions land in that tag.
            The week resets every Monday at 00:00 in your local time. Free
            allows one active goal at a time; Pro lifts the cap.
          </p>
        </Section>

        <Section title="04 / Live Activity & widgets">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Why is the timer showing in my Dynamic Island?
          </h3>
          <p>
            That&rsquo;s a Live Activity. While a session is running,{" "}
            {APP_NAME} keeps the timer visible in the Dynamic Island
            (iPhone&nbsp;14 Pro and newer) and on the Lock Screen. Lock the
            phone, switch apps — the countdown stays accurate.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            The Live Activity isn&rsquo;t showing up
          </h3>
          <Ul>
            <li>
              Open <strong>Settings → Face ID &amp; Passcode</strong> (or
              Touch ID) and confirm Live Activities are allowed on the Lock
              Screen.
            </li>
            <li>
              Open <strong>Settings → {APP_NAME}</strong> and confirm Live
              Activities are toggled on.
            </li>
            <li>
              Live Activities require iOS&nbsp;16.1+. {APP_NAME} requires
              iOS&nbsp;26+ overall, so if the app installs at all, you
              already meet the minimum.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I add the Home Screen widget?
          </h3>
          <p>
            Long-press the Home Screen, tap <strong>Edit → Add Widget</strong>,
            search for {APP_NAME}, and pick the size you want. The widget
            shows your streak and last completed session at a glance.
          </p>
        </Section>

        <Section title="05 / PomoStudy Pro">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>12 weeks of stats history (free keeps 4 weeks)</li>
            <li>Unlimited weekly goals (free is limited to 1)</li>
            <li>Rain, coffee shop and white-noise ambiences</li>
            <li>
              Study Buddy — synchronize your breaks with a friend{" "}
              <em>(rolling out post-launch)</em>
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is Pro a subscription?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} Pro is a{" "}
            <strong>one-time, non-renewing purchase of 4,99&nbsp;€</strong>.
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

        <Section title="06 / Ambient sounds">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Why won&rsquo;t the ambient sound play?
          </h3>
          <Ul>
            <li>Confirm your phone isn&rsquo;t muted via the side switch.</li>
            <li>
              Check that the volume isn&rsquo;t set to zero in Control
              Center.
            </li>
            <li>
              Pro ambiences (rain, coffee shop, white noise) require{" "}
              {APP_NAME} Pro. Free includes silence and lo-fi.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Does the audio drain my battery?
          </h3>
          <p>
            Ambient sounds are bundled and played locally — no streaming,
            no network calls. Battery usage is comparable to listening to a
            local music file.
          </p>
        </Section>

        <Section title="07 / Notifications">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            I&rsquo;m not getting session-end alerts
          </h3>
          <p>
            Open <strong>iOS Settings → Notifications → {APP_NAME}</strong>{" "}
            and confirm Allow Notifications is on, with banners and sounds
            enabled. {APP_NAME} schedules these locally on your device — no
            push servers are involved.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Does Focus mode interfere with my session?
          </h3>
          <p>
            Focus mode can suppress notifications. The timer itself keeps
            running and the Live Activity stays visible, but session-end
            alerts may be silenced. Add {APP_NAME} to your Focus filter if
            you want its alerts to come through.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if the timer drifts, or
            if there&rsquo;s a feature you wish existed, write to{" "}
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
                href="/pomostudy"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
              </Link>
            </li>
            <li>
              <Link
                href="/pomostudy/privacy"
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
            href="/pomostudy"
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
