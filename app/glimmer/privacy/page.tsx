import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const TITLE = "Glimmer — Privacy Policy";
const DESCRIPTION =
  "Privacy policy for Glimmer, the iOS Liquid Glass virtual pet. We don't collect personal data.";
const EFFECTIVE_DATE = "May 14, 2026";
const CONTACT_EMAIL = "maximesaltet@gmail.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glimmer/privacy" },
  robots: { index: true, follow: true },
};

export default function GlimmerPrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          Glimmer · Legal
        </p>
        <h1 className="font-display text-display-sm mb-[58px]">
          Privacy Policy
        </h1>

        <p className="text-caption uppercase tracking-wider mb-[35px]">
          Effective {EFFECTIVE_DATE}
        </p>

        <Section title="01 / Summary">
          <p>
            Glimmer is a virtual-pet game for iOS.{" "}
            <strong>
              It does not collect, store, or transmit any personal data to
              its developer.
            </strong>{" "}
            Your creatures, their genomes, and your interactions stay on
            your device — and, if you enable Pet&nbsp;Pro iCloud sync, in
            your own private iCloud account.
          </p>
        </Section>

        <Section title="02 / What we don't do">
          <Ul>
            <li>No accounts. No sign-up. No login.</li>
            <li>No analytics SDK, no telemetry, no crash reporting.</li>
            <li>No advertising, no ad-tracking, no third-party trackers.</li>
            <li>
              No remote server. The developer cannot read your creatures,
              their DNA, or your play history.
            </li>
          </Ul>
        </Section>

        <Section title="03 / Data stored on your device">
          <p>
            Glimmer stores the following on your device using Apple's
            SwiftData framework:
          </p>
          <Ul>
            <li>
              Your active creature(s), their 8-gene genome, and current
              stats (hunger, energy, happiness, growth).
            </li>
            <li>
              An event log of your interactions (feed, nap, walk),
              capped at the most recent entries used by the in-app
              evolution timeline.
            </li>
            <li>
              Past creatures and their genomes — for the genealogy view
              (Pet&nbsp;Pro).
            </li>
            <li>
              Your app preferences (haptics intensity, mood sounds,
              accessibility options).
            </li>
            <li>
              Your remaining magical-kibble balance and consumed-pack
              receipts.
            </li>
          </Ul>
          <p>
            Uninstalling Glimmer removes this data from your device.
          </p>
        </Section>

        <Section title="04 / Motion sensor (gyroscope walks)">
          <p>
            When you start a walk, Glimmer reads the device's motion
            sensor for the 30-second duration of the activity, locally,
            to detect movement. The data is processed in memory and is{" "}
            <strong>never stored, transmitted, or retained</strong> after
            the walk ends. Glimmer does not request location, only motion.
          </p>
        </Section>

        <Section title="05 / iCloud sync (Pet Pro)">
          <p>
            If you subscribe to Pet&nbsp;Pro, the app uses Apple's iCloud
            / CloudKit to sync your creatures and their genomes across
            your own Apple devices. The data travels through Apple's
            infrastructure and is stored in{" "}
            <em>your private iCloud database</em>, governed by Apple's
            terms and privacy policy. The developer of Glimmer has no
            access to it and cannot read it.
          </p>
          <p>
            You can disable iCloud sync at any time from iOS Settings →{" "}
            <em>Apple Account → iCloud → Apps using iCloud → Glimmer</em>.
          </p>
        </Section>

        <Section title="06 / In-app purchases & subscriptions">
          <p>
            Glimmer offers two kinds of optional purchases, both processed
            entirely by Apple via StoreKit:
          </p>
          <Ul>
            <li>
              <strong>Magical kibble</strong> — non-renewing consumable
              packs (1,99&nbsp;€ / 4,99&nbsp;€ / 14,99&nbsp;€).
            </li>
            <li>
              <strong>Pet Pro</strong> — auto-renewing monthly or yearly
              subscription (4,99&nbsp;€ / 29,99&nbsp;€), with a 7-day free
              trial. Manageable and cancellable from iOS Settings →{" "}
              <em>Apple Account → Subscriptions</em>.
            </li>
          </Ul>
          <p>
            Glimmer receives only an anonymous receipt from Apple
            confirming whether a purchase or active subscription exists.
            Glimmer never sees your name, email, address, or payment
            information.
          </p>
        </Section>

        <Section title="07 / Permissions">
          <p>
            Glimmer does not request access to your camera, microphone,
            location, contacts, photos, health data, or notifications.
            The app uses the motion sensor only during a walk (see
            section&nbsp;04). Haptic feedback and short procedural mood
            sounds (Pet Pro) are generated on-device — no audio is
            recorded or transmitted.
          </p>
        </Section>

        <Section title="08 / Children">
          <p>
            Glimmer is intended for a general audience. The app does not
            knowingly collect data from anyone, including children
            under&nbsp;13.
          </p>
        </Section>

        <Section title="09 / Changes to this policy">
          <p>
            If material changes are made — for example, if Glimmer ever
            integrates third-party SDKs that collect data — the updated
            policy will be posted at this URL with a new effective date,
            and prominently noted in the app's release notes.
          </p>
        </Section>

        <Section title="10 / Contact">
          <p>
            Questions about this policy or about Glimmer? Reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20Glimmer`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          ↑ Back to{" "}
          <a href="/" className="underline underline-offset-4 hover:opacity-100">
            maximesaltet.com
          </a>
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
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black">
      {children}
    </ul>
  );
}
