import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TITLE = "AstroLog — Privacy Policy";
const DESCRIPTION =
  "Privacy policy for AstroLog, the iOS observation logbook for amateur astronomers. We don't collect personal data.";
const EFFECTIVE_DATE = "May 11, 2026";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/astrolog/privacy" },
  robots: { index: true, follow: true },
};

export default function AstroLogPrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          AstroLog · Legal
        </p>
        <h1 className="font-display text-display-sm mb-[58px]">
          Privacy Policy
        </h1>

        <p className="text-caption uppercase tracking-wider mb-[35px]">
          Effective {EFFECTIVE_DATE}
        </p>

        <Section title="01 / Summary">
          <p>
            AstroLog is an observation logbook for amateur astronomers on iOS.
            <strong>
              {" "}It does not collect, store, or transmit any personal data to
              its developer.
            </strong>{" "}
            Everything you log stays on your device — and, if you enable iCloud
            sync, in your own iCloud account.
          </p>
        </Section>

        <Section title="02 / What we don't do">
          <Ul>
            <li>No accounts. No sign-up. No login.</li>
            <li>No analytics SDK, no telemetry, no crash reporting.</li>
            <li>No advertising, no ad-tracking, no third-party trackers.</li>
            <li>No social feed, no friend list, no leaderboard.</li>
            <li>
              No remote server. The developer cannot read your sessions,
              targets, or notes.
            </li>
          </Ul>
        </Section>

        <Section title="03 / Data stored on your device">
          <p>
            AstroLog stores the following on your device using Apple&rsquo;s
            SwiftData framework:
          </p>
          <Ul>
            <li>Your observation sessions (date, duration, location name, notes).</li>
            <li>
              The sky conditions you record (Bortle class, seeing, transparency,
              temperature, cloud coverage, lunar phase and illumination).
            </li>
            <li>
              Optional latitude and longitude — only when <em>you</em> choose to
              attach them to a session. AstroLog does not query your device&rsquo;s
              GPS in the background.
            </li>
            <li>
              The list of targets you observed, and whether you photographed each one.
            </li>
            <li>
              Your equipment (telescopes, mounts, cameras, eyepieces, filters)
              and saved Setups (Pro feature).
            </li>
            <li>
              App preferences (Red Light Mode, selected tab, units).
            </li>
          </Ul>
          <p>
            Uninstalling AstroLog removes this data from your device.
          </p>
        </Section>

        <Section title="04 / iCloud sync (AstroLog Pro)">
          <p>
            If you unlock AstroLog Pro, the app can use Apple&rsquo;s iCloud /
            CloudKit to sync your logbook across your own Apple devices
            (iPhone, iPad, Mac). The data travels through Apple&rsquo;s
            infrastructure and is stored in <em>your private iCloud database</em>,
            governed by Apple&rsquo;s terms and privacy policy. The developer of
            AstroLog has no access to it and cannot read it.
          </p>
          <p>
            You can disable iCloud sync at any time from iOS Settings →{" "}
            <em>Apple Account → iCloud → Apps using iCloud → AstroLog</em>.
          </p>
        </Section>

        <Section title="05 / In-app purchases">
          <p>
            AstroLog Pro is a one-time, non-renewable purchase processed
            entirely by Apple via StoreKit. AstroLog receives only an anonymous
            receipt confirming whether a purchase is active. AstroLog never
            sees your name, email, address, or payment information.
          </p>
        </Section>

        <Section title="06 / Permissions">
          <p>
            AstroLog does not request access to your camera, microphone,
            contacts, photos, health data, or notifications. Location services
            are <strong>not</strong> required to use the app — coordinates can
            be entered manually. If a future version requests location, it will
            be opt-in and only used to pre-fill session metadata locally on
            your device.
          </p>
        </Section>

        <Section title="07 / Children">
          <p>
            AstroLog is intended for a general audience interested in
            astronomy. The app does not knowingly collect data from anyone,
            including children under 13.
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
            Questions about this policy or about AstroLog? Reach out at{" "}
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
