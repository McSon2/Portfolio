import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "AstroLog";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/astrolog";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Astronomy Observation Logbook for iOS`;
const DESCRIPTION = `${APP_NAME} is the iOS observation logbook for amateur astronomers. Track sessions, sky conditions, Messier / Caldwell / Herschel 400 / NGC catalogs, multi-setup equipment, and a proper Red Light Mode. One-time purchase, no subscription, no ads, iCloud sync.`;

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

export default function AstroLogPage() {
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
          The observation logbook for amateur astronomers. A handcrafted
          parchment-and-ink journal in your pocket — sessions, conditions,
          deep-sky catalogs, multi-setup equipment, and a proper observatory
          Red Light Mode. No subscription, no social feed, no ads — ever.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for amateur astronomers who take the night
            seriously: visual observers chasing the Messier list, astrophotographers
            cataloging their captures, dark-sky travelers logging Bortle 1 nights,
            and club members who want a personal record instead of a social
            feed. If you own a Dobsonian, a refractor, an SCT or a tracker mount —
            you&rsquo;ll feel at home.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            A real observation journal
          </h3>
          <p>
            Each session captures date, duration, location, free-form notes, and
            a list of observed targets — galaxies, nebulae, clusters, planets,
            lunar, comets — with a flag for what you photographed. Built on
            SwiftData, so the journal stays fast even after thousands of entries.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Sky conditions, captured properly
          </h3>
          <p>
            Bortle class (1 to 9), seeing and transparency (1 to 5), temperature,
            cloud coverage, lunar phase and illumination — the data you actually
            wish you&rsquo;d written down six months later. Lunar phase and
            illumination can be auto-captured from your date and coordinates so
            you don&rsquo;t have to think about it at the eyepiece.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Deep-sky catalogs
          </h3>
          <p>
            The full <strong>Messier</strong> catalog, plus{" "}
            <strong>Caldwell</strong>, <strong>Herschel 400</strong> and curated{" "}
            <strong>NGC</strong> targets — each with magnitude, constellation,
            right ascension, declination, and best viewing month. Tap an object,
            tap <em>Add to session</em>, done.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Multi-setup equipment
          </h3>
          <p>
            Keep a record of every telescope, mount, camera, eyepiece and filter,
            with the specs that matter (aperture, focal length, f-ratio, sensor,
            pixel size). Combine them into named <em>Setups</em> — &ldquo;Travel
            grab-and-go&rdquo;, &ldquo;Backyard deep-sky&rdquo;, &ldquo;Lunar
            imaging&rdquo; — and attach a setup to any session in one tap.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Red Light Mode, the real one
          </h3>
          <p>
            Not a tinted overlay. A complete re-paint of the canvas in deep red
            over near-black, with attenuated UI brightness so dark-adapted eyes
            aren&rsquo;t burned. Tap once at the start of the night; your eyes
            keep their adaptation, your charts stay readable.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Almanac &amp; stats
          </h3>
          <p>
            Total nights under the sky, total hours, targets observed,
            photographs taken, sessions this year, current streak. A quiet
            running tally of your time at the eyepiece — the kind of memory
            most observers wish they&rsquo;d kept from the start.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            One-time purchase: <strong>$9.99 / 9,99&nbsp;€</strong>. No
            subscription. No renewal. All future updates included.
          </p>
          <Ul>
            <li>
              <strong>Unlimited sessions</strong> (free tier keeps the first 5)
            </li>
            <li>
              <strong>Full catalog</strong> — Messier, Caldwell, Herschel 400,
              NGC (free tier shows the first 10 objects)
            </li>
            <li>
              <strong>Multi-setup equipment</strong> — every scope, mount,
              camera, eyepiece, filter, in named combos
            </li>
            <li>
              <strong>Auto conditions</strong> — Moon phase, illumination,
              Bortle approximation pre-filled from location
            </li>
            <li>
              <strong>Red Light Mode</strong> — proper observatory mode, not a
              colour filter
            </li>
            <li>
              <strong>iCloud sync</strong> across iPhone, iPad and Mac via your
              private CloudKit container
            </li>
          </Ul>
          <p>
            The free tier is fully functional for trying the workflow. Pro is
            for observers who want to keep an actual lifetime logbook.
          </p>
        </Section>

        <Section title="04 / Privacy first, by construction">
          <p>
            {APP_NAME} does not collect data. No analytics, no telemetry, no
            crash-reporting SDKs, no ads, no accounts, no social feed.
            Everything you log stays on your device — and, if you enable Pro
            with iCloud, in your own private CloudKit container, which the
            developer cannot read.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/astrolog/privacy"
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
            <li>StoreKit&nbsp;2 for the one-time Pro purchase</li>
            <li>Custom &ldquo;logbook&rdquo; typography — parchment, ink, gold accents</li>
            <li>Observatory-grade Red Light Mode</li>
            <li>Full Dynamic Type, Dark Mode, and VoiceOver support</li>
          </Ul>
        </Section>

        <Section title="06 / Why another astronomy app">
          <p>
            Most astronomy apps optimise for the planetarium experience: a
            black screen, a star map, a social leaderboard. {APP_NAME} does the
            opposite — it is a <em>logbook</em>, not a planetarium. It assumes
            you already know what you&rsquo;re pointing at, and helps you
            remember the night long after the dew has lifted.
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
                href="/astrolog/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/astrolog/privacy"
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
