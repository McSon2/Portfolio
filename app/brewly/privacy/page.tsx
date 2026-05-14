import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const TITLE = "Brewly — Privacy Policy";
const DESCRIPTION =
  "Privacy policy for Brewly, the iOS pour-over coffee timer. We don't collect personal data.";
const EFFECTIVE_DATE = "May 6, 2026";
const CONTACT_EMAIL = "maximesaltet@gmail.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/brewly/privacy" },
  robots: { index: true, follow: true },
};

export default function BrewlyPrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          Brewly · Legal
        </p>
        <h1 className="font-display text-display-sm mb-[58px]">
          Privacy Policy
        </h1>

        <p className="text-caption uppercase tracking-wider mb-[35px]">
          Effective {EFFECTIVE_DATE}
        </p>

        <Section title="01 / Summary">
          <p>
            Brewly is a coffee brewing timer for iOS. <strong>It does not
            collect, store, or transmit any personal data to its developer.</strong>
            Everything you do in the app stays on your device — and, if you
            enable iCloud sync, in your own iCloud account.
          </p>
        </Section>

        <Section title="02 / What we don't do">
          <Ul>
            <li>No accounts. No sign-up. No login.</li>
            <li>No analytics SDK, no telemetry, no crash reporting.</li>
            <li>No advertising, no ad-tracking, no third-party trackers.</li>
            <li>
              No remote server. The developer cannot read your brews, ratings,
              or notes.
            </li>
          </Ul>
        </Section>

        <Section title="03 / Data stored on your device">
          <p>
            Brewly stores the following on your device using Apple's SwiftData
            framework:
          </p>
          <Ul>
            <li>Your brewing preferences (units, haptics, sounds).</li>
            <li>
              Your brew history, including ratings and tasting notes you
              choose to enter (Brewly Pro feature).
            </li>
          </Ul>
          <p>
            Uninstalling Brewly removes this data from your device.
          </p>
        </Section>

        <Section title="04 / iCloud sync (Brewly Pro)">
          <p>
            If you unlock Brewly Pro, the app uses Apple's iCloud / CloudKit to
            sync your brew history across your own Apple devices. The data
            travels through Apple's infrastructure and is stored in
            <em> your private iCloud database</em>, governed by Apple's terms
            and privacy policy. The developer of Brewly has no access to it
            and cannot read it.
          </p>
          <p>
            You can disable iCloud sync at any time from iOS Settings →{" "}
            <em>Apple Account → iCloud → Apps using iCloud → Brewly</em>.
          </p>
        </Section>

        <Section title="05 / In-app purchases">
          <p>
            Brewly Pro is a one-time, non-renewable purchase processed entirely
            by Apple via StoreKit. Brewly receives only an anonymous receipt
            confirming whether a purchase is active. Brewly never sees your
            name, email, address, or payment information.
          </p>
        </Section>

        <Section title="06 / Permissions">
          <p>
            Brewly does not request access to your camera, microphone,
            location, contacts, photos, health data, or notifications. The
            app uses haptic feedback and short system sounds during brewing —
            no audio is recorded or transmitted.
          </p>
        </Section>

        <Section title="07 / Children">
          <p>
            Brewly is intended for a general adult audience interested in
            coffee brewing. The app does not knowingly collect data from
            anyone, including children under 13.
          </p>
        </Section>

        <Section title="08 / Changes to this policy">
          <p>
            If material changes are made, the updated policy will be posted at
            this URL with a new effective date.
          </p>
        </Section>

        <Section title="09 / Contact">
          <p>
            Questions about this policy or about Brewly? Reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
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
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black">
      {children}
    </ul>
  );
}
