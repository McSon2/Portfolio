import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Glimmer";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/glimmer";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — A Liquid Glass virtual pet for iOS`;
const DESCRIPTION = `${APP_NAME} is a minimalist virtual companion built entirely from SwiftUI, SF Symbols, and Liquid Glass materials. Each creature has a unique 8-gene DNA that drives its color, shape, halo, and haptics — and mutates across generations.`;

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

export default function GlimmerPage() {
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
          An abstract companion that lives in your iPhone. Pure Liquid Glass,
          pure SF Symbols, zero sprite art. Feed it, walk it, watch it
          breathe — and let its unique DNA carry through generations.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for design-conscious iPhone owners who want
            a companion that actually feels like part of iOS — not a pixel-art
            relic from 2014. If the idea of a virtual pet rendered entirely
            from Liquid Glass materials, SF Symbols, and a procedural genome
            appeals to you, this is yours.
          </p>
          <p>
            Not for gold-farmers. Not for kids' apps. Not for ad-driven
            attention loops. Three short visits a day are enough to keep
            your creature thriving — and if you skip a day, it quietly
            enters Liquid Glass hibernation rather than dying.
          </p>
        </Section>

        <Section title="02 / What's included (free)">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            One creature, infinite DNA
          </h3>
          <p>
            Each creature is generated from an 8-gene genome (hue,
            saturation, body shape, ornament, halo pattern, pulse rate,
            haptic signature, mood tone). That's roughly{" "}
            <strong>180&nbsp;billion</strong> visually distinct creatures —
            yours will not look like anyone else's.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A 90-second daily loop
          </h3>
          <p>
            Feed, nap, walk (gyroscope-powered). Four stats degrade gently
            over time; three quick interactions a day is enough. No grind,
            no pop-ups, no "rewarded ads every 60 seconds".
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            A real life cycle
          </h3>
          <p>
            Egg → baby → juvenile → adult → elder. Each stage changes the
            silhouette, the pulse rate, and the saturation. Elders can
            bequeath their genome to a successor egg.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Built in iOS, end to end
          </h3>
          <p>
            SwiftUI Canvas, Liquid Glass materials (iOS&nbsp;26+ native,
            <code>.regularMaterial</code> fallback on iOS&nbsp;18–25), SF
            Symbols 6 with variable-color animations, Core Haptics
            patterns tied to each creature's DNA. Nothing leaves your
            device.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pet Pro`}>
          <p>
            A subscription that unlocks the long game.{" "}
            <strong>4,99&nbsp;€ / month</strong> or{" "}
            <strong>29,99&nbsp;€ / year</strong> — with a 7-day free trial.
            Cancel anytime in iOS Settings.
          </p>
          <Ul>
            <li>
              <strong>Up to 4 creatures</strong> simultaneously, instead of 1.
            </li>
            <li>
              <strong>DNA reproduction</strong> — pair two adults and brew a
              hybrid genome, with rare mythic mutations.
            </li>
            <li>
              <strong>Genealogy view</strong> — an interactive tree of your
              past creatures, with their full genomes preserved.
            </li>
            <li>
              <strong>Liquid Glass accessories</strong> — 12 hats, 8 wings,
              6 seasonal auras.
            </li>
            <li>
              <strong>Procedural mood sounds</strong> generated from gene G7
              via AudioKit.
            </li>
            <li>
              <strong>iCloud sync</strong> — continue your pets on iPad or
              a second iPhone, through your own private CloudKit container.
            </li>
            <li>
              <strong>Advanced stats</strong> — 30 / 90-day evolution
              curves rendered with Swift&nbsp;Charts.
            </li>
          </Ul>
        </Section>

        <Section title="04 / Magical kibble — optional one-time packs">
          <p>
            Consumable kibble lets you skip degradation hours and re-roll
            DNA at hatch time. Use them, don't use them — they never
            expire and never pressure you.
          </p>
          <Ul>
            <li>
              <strong>Small pack</strong> — 1,99&nbsp;€ · 10 boosts + 1
              DNA re-roll
            </li>
            <li>
              <strong>Medium pack</strong> — 4,99&nbsp;€ · 30 boosts + 5
              re-rolls
            </li>
            <li>
              <strong>Large pack</strong> — 14,99&nbsp;€ · 100 boosts +
              20 re-rolls
            </li>
          </Ul>
        </Section>

        <Section title="05 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry,
            no crash-reporting SDKs, no ads, no accounts. Your creatures,
            their genomes, and their event log stay on your device — and,
            with Pet&nbsp;Pro, in your own private iCloud container, which
            the developer cannot read.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/glimmer/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="06 / Designed for iOS, end to end">
          <Ul>
            <li>SwiftUI, built natively for iOS&nbsp;18+</li>
            <li>SwiftData persistence with CloudKit sync (Pet Pro)</li>
            <li>StoreKit&nbsp;2 for in-app purchases and subscriptions</li>
            <li>
              Core Haptics + AudioKit (Pet Pro) for DNA-driven feedback
            </li>
            <li>SF Symbols 6 with variable-color animations</li>
            <li>
              Liquid Glass on iOS&nbsp;26+ ·{" "}
              <code>.regularMaterial</code> fallback on iOS&nbsp;18–25
            </li>
            <li>
              Full Dynamic Type support, light &amp; dark interfaces,
              VoiceOver labels on every creature stat
            </li>
          </Ul>
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
                href="/glimmer/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/glimmer/privacy"
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
        <CrossAppNav currentSlug="glimmer" />
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
