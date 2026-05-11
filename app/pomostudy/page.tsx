import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "PomoStudy";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/pomostudy";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Pomodoro Focus Timer for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS-native Pomodoro app for students and knowledge workers. Focus timer, GitHub-style heatmap, weekly goals, Live Activity in the Dynamic Island. No subscription, no ads, no accounts.`;

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

export default function PomoStudyPage() {
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
          The Pomodoro timer that respects your time. Pick a subject, tap the
          giant START button, and {APP_NAME} handles the focus cycles, the
          haptics, the streak and the heatmap — so all you have to do is
          actually do the work.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for students cramming for exams, developers in
            deep-work sprints, knowledge workers structuring their day, and
            anyone who has tried Forest, Be&nbsp;Focused or a browser timer
            and wished it felt like a real iOS app instead of a port. If you
            already know the 25/5 cadence works but you want stats that don&rsquo;t
            disappear behind a paywall every week, this one is for you.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            A timer designed for the Dynamic Island
          </h3>
          <p>
            A clean focus ring with smooth progression, customizable focus,
            short-break and long-break durations, and a configurable cycle
            count before the long break. The timer keeps running in a{" "}
            <strong>Live Activity</strong> visible from the Dynamic Island
            and the Lock Screen, so you can lock the phone and trust the
            cadence.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Tag every session
          </h3>
          <p>
            Before you start, optionally pick a subject or project — Math,
            Thesis, Side&nbsp;Project, Reading. {APP_NAME} aggregates time per
            tag so you actually know where your hours go, not just how many
            tomatoes you ticked.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Ambient soundscapes
          </h3>
          <p>
            Silence and lo-fi included. Pro adds rain, coffee shop and white
            noise. All loaded locally — no streaming, no buffering, no data
            usage.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Stats that compound
          </h3>
          <p>
            A 12-week heatmap in the GitHub contribution-graph style, top
            tags of the week, total focus this week / month / all-time, and
            a streak counter for consecutive days with at least one
            completed session. The free tier keeps 4 weeks of stats; Pro
            keeps 12.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Weekly goals
          </h3>
          <p>
            Set targets per tag — &ldquo;Math: 8h this week&rdquo;, &ldquo;Thesis:
            12h&rdquo; — and watch progress fill up as sessions land. Free is
            limited to one active goal; Pro lifts the cap.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>4,99&nbsp;€</strong>. No subscription.
            No renewal. All future updates included.
          </p>
          <Ul>
            <li>12 weeks of stats history (free keeps 4)</li>
            <li>Unlimited weekly goals</li>
            <li>Rain, coffee shop and white-noise ambiences</li>
            <li>
              Study Buddy — synchronize your breaks with a friend
              <em> (rolling out post-launch)</em>
            </li>
          </Ul>
          <p>
            The free tier is fully functional for daily Pomodoro practice.
            Pro is for people who want their study time to actually
            accumulate into something visible.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts. Everything you do
            stays on your iPhone — your sessions, tags, goals and stats
            never leave the device.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/pomostudy/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="05 / Designed for iOS, end to end">
          <Ul>
            <li>SwiftUI, built natively for iOS&nbsp;26 with Liquid Glass</li>
            <li>SwiftData persistence in a shared App Group</li>
            <li>StoreKit&nbsp;2 for the in-app purchase</li>
            <li>ActivityKit Live Activity (Dynamic Island + Lock Screen)</li>
            <li>WidgetKit Home Screen widget</li>
            <li>Swift Charts for the heatmap and weekly trends</li>
            <li>Localized in English and French</li>
            <li>Light and dark interfaces, full Dynamic Type support</li>
          </Ul>
        </Section>

        <Section title="06 / Honest about what it is">
          <p>
            {APP_NAME} is a focus timer, not a productivity religion. The
            Pomodoro Technique is a tool, not a cure for procrastination. If
            you struggle with attention or focus in a way that disrupts
            daily life, please consult a healthcare professional — a timer
            app is not a substitute for that.
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
                href="/pomostudy/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
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
        <CrossAppNav currentSlug="pomostudy" />
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
