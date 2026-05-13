import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "GutTrack";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/guttrack";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Gut Health Journal for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS journal for people living with IBS, SIBO, or chronic digestive issues. Log meals, bowel movements, and symptoms; see your personal patterns; export a clear report to share with your healthcare provider. 100% on device.`;

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

export default function GutTrackPage() {
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
          A quiet, careful journal for your gut. Log meals, bowel movements,
          and symptoms in three taps; see the patterns hiding in your last
          fourteen days; export a clean report you can hand to your doctor.
          On device, encrypted, sync across your Apple devices via your own
          iCloud — never ours.
        </p>

        <p className="text-caption mb-[58px] opacity-60 italic">
          {APP_NAME} is a personal journal, not a medical device. It does
          not diagnose, treat, or prevent any condition. For any persistent
          or worrying symptom, please consult a healthcare professional.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for the four million people in France — and
            the tens of millions across Europe — who live with{" "}
            <strong>Irritable Bowel Syndrome</strong>, SIBO, ulcerative
            colitis, or any chronic digestive issue that demands daily
            attention. If you have ever tried to keep a food diary in a
            Notes app, photographed your meals, scrolled back three weeks
            to find a trigger, and given up — this app is for you.
          </p>
          <p>
            It is also for people working with a gastroenterologist or
            FODMAP-trained dietitian, who have been asked to "keep a
            journal" and would like one that does not feel like homework.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Three-tap logging
          </h3>
          <p>
            Open the app, tap <em>Log meal</em>, <em>Log bowel movement</em>,
            or <em>Log symptom</em>. Each entry takes seconds. Bowel
            movements use the clinical{" "}
            <strong>Bristol Stool Scale (1–7)</strong> with friendly icons
            — no photographs, ever. Symptoms cover the things that
            actually matter: bloating, pain, nausea, fatigue, urgency.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A calendar that tells the truth
          </h3>
          <p>
            A month-at-a-glance grid in the style of a contribution graph:
            green days when you felt fine, yellow for mild symptoms, red
            for severe. Tap any day to see the full timeline of meals and
            entries. Patterns become visible without you having to look
            for them.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Honest, factual patterns
          </h3>
          <p>
            On a rolling fourteen-day window, {APP_NAME} surfaces simple
            observations: <em>"You consumed lactose 8 times. 7 of those
            were followed by a symptom within 24 hours."</em> No black-box
            scoring, no medical claims, no "diagnosis". You see the raw
            counts; you draw your own conclusions; you discuss them with
            a professional.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Export a real report
          </h3>
          <p>
            One tap to generate a clean PDF of the last thirty days — a
            visual timeline, the meal and symptom log, and the observed
            patterns — formatted to share with a healthcare provider.
            AirDrop, email, Messages, or print, exactly like any other
            iOS document.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            HealthKit, on your terms
          </h3>
          <p>
            Optional. If you opt in, {APP_NAME} writes your logged
            symptoms (bloating, cramps, nausea) to Apple Health so they
            sit alongside your other health data, and can read your
            weight and mindful minutes if you want to see them in context.
            Skip it and the app works exactly the same.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Quietly modern interface
          </h3>
          <p>
            Built natively in SwiftUI for iOS&nbsp;17 and later. On
            iPhones running iOS&nbsp;26, {APP_NAME} adopts the new Liquid
            Glass design system; on earlier devices, it falls back to a
            crisp material aesthetic. Full dark mode, full Dynamic Type,
            full VoiceOver. Available in <strong>English</strong> and{" "}
            <strong>Français</strong>.
          </p>
        </Section>

        <Section title="03 / Pricing">
          <p>
            A real free tier — onboard, log, and explore your data
            forever at no cost. Subscribe when you want to unlock the
            full calendar history, advanced patterns, PDF export, and
            cross-device iCloud sync.
          </p>
          <Ul>
            <li>
              <strong>Yearly — €49.99/year</strong> with a{" "}
              <strong>14-day free trial</strong>. Save 40% versus monthly.
              The plan most users pick.
            </li>
            <li>
              <strong>Monthly — €6.99/month</strong>. No trial. For people
              who prefer to keep it short.
            </li>
            <li>
              <strong>Lifetime — €149.99 one-time</strong>. Pay once, keep
              forever, including future updates.
            </li>
          </Ul>
          <p>
            Subscriptions auto-renew unless cancelled in your Apple
            account at least 24 hours before the end of the current
            period. The lifetime option is a one-time non-renewing
            purchase. Cancel at any time from{" "}
            <strong>Settings → Apple Account → Subscriptions</strong>.
          </p>
        </Section>

        <Section title="04 / Privacy, by construction">
          <p>
            {APP_NAME} does not have a backend. There is no GutTrack
            server. Your entries live in a SwiftData database on your
            iPhone and — if you choose — sync through Apple's CloudKit
            to your own private iCloud database, which the developer
            cannot read. No accounts to create, no email to give us, no
            password to forget.
          </p>
          <p>
            No analytics SDK. No telemetry. No advertising. No
            third-party trackers. Health data is never used for tracking
            (per Apple's App Privacy taxonomy).
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/guttrack/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="05 / Designed for iOS, end to end">
          <Ul>
            <li>SwiftUI, native, iOS&nbsp;17+ baseline</li>
            <li>SwiftData persistence with CloudKit private-database sync</li>
            <li>HealthKit integration (opt-in, write + read)</li>
            <li>StoreKit&nbsp;2 for subscriptions and the lifetime purchase</li>
            <li>PDFKit for the personal report export</li>
            <li>Liquid Glass on iOS&nbsp;26+, material fallback below</li>
            <li>Full Dynamic Type, VoiceOver, dark mode</li>
            <li>English &amp; Français localised day one</li>
          </Ul>
        </Section>

        <Section title="06 / Important disclaimer">
          <p>
            {APP_NAME} is a personal journal designed to help you
            <strong> observe</strong> your own habits. It is not a
            medical device, does not provide medical advice, and is not
            a substitute for the assessment, diagnosis, or treatment of
            a qualified healthcare professional. The patterns surfaced
            in the app are descriptive statistics on your own entries
            — they are not diagnostic. For any persistent or worrying
            symptom, please consult your doctor.
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
                href="/guttrack/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/guttrack/privacy"
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
        <CrossAppNav currentSlug="guttrack" />
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
