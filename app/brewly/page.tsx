import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Brewly";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const URL = "https://maximesaltet.com/brewly";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Pour-Over Coffee Timer for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS pour-over coach for V60, Aeropress, Chemex, and French Press. Guided timer, live water indicator, haptic transitions, auto ratio math. No subscription, no ads, no accounts.`;

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

export default function BrewlyPage() {
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
          The pour-over coach that lives in your pocket. Pick a method, set
          your dose, and brew along to a guided timer with live water targets,
          rich haptics, and the kind of quiet confidence your morning
          deserves.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for people who take coffee seriously enough to
            own a Hario, an Aeropress, or a Chemex — and want the brewing
            experience to feel as considered as the gear. Home brewers,
            week-end baristas, café professionals tired of juggling YouTube
            videos, a phone timer, and a calculator at 7 a.m.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Four free methods, dialed in
          </h3>
          <p>
            Hario V60, Aeropress (inverted), Chemex, and French Press — each
            with researched ratios, staged pours, and timing curated by
            home-brew best practices. Tap one, and you're brewing.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Live water indicator
          </h3>
          <p>
            Most timers tell you <em>when</em>. Brewly tells you <em>when</em>{" "}
            <strong>and how much</strong>. The water target updates step by
            step so you always know exactly how many grams to pour next, in
            real time, without taking your eyes off the kettle.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Haptics that feel like a metronome
          </h3>
          <p>
            Core Haptics transitions on every step — bloom, first pour, swirl,
            drawdown. Subtle but unmistakable. You can keep your eyes on the
            scale; your wrist already knows.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Auto ratio math
          </h3>
          <p>
            Slide the dose; Brewly does the math. Switch between 1:15 (bold),
            1:16 (balanced), and 1:17 (delicate) — water target updates
            instantly. No mental gymnastics at sunrise.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Designed for early mornings
          </h3>
          <p>
            A deep, soft dark interface tuned for the hour you actually brew
            in. Generous typography. Big tap targets. Screen stays awake.
            Sounds and haptics you can dial down if your household is still
            asleep.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>$4.99 / 4,99&nbsp;€</strong>. No
            subscription. No renewal. All future updates included.
          </p>
          <Ul>
            <li>
              Four extra methods: <strong>Kalita Wave</strong>,{" "}
              <strong>Origami</strong>, <strong>Hario Switch</strong>,{" "}
              <strong>Cold Brew</strong>
            </li>
            <li>
              Brew history with star ratings and tasting notes — so you can
              actually remember which V60 was the great one
            </li>
            <li>
              <strong>iCloud sync</strong> across all your Apple devices via
              your private CloudKit container
            </li>
          </Ul>
          <p>
            The free tier is fully functional. Pro is for people who brew
            often and want to track and refine.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            Brewly does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts. Everything you do
            stays on your device, or — if you enable Pro and iCloud — in
            your own private iCloud container, which the developer cannot
            read.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/brewly/privacy"
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
            <li>SwiftData persistence with CloudKit sync (Pro)</li>
            <li>StoreKit&nbsp;2 for the in-app purchase</li>
            <li>Core Haptics + AVFoundation for transitions</li>
            <li>Dark and light interfaces, full Dynamic Type support</li>
          </Ul>
        </Section>

        <Section title="06 / Links">
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
                href="/brewly/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
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
