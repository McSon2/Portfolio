import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const TITLE = "GutTrack — Privacy Policy";
const DESCRIPTION =
  "Privacy policy for GutTrack, the iOS gut health journal. We do not collect personal data. Entries stay on your device and in your private iCloud account.";
const EFFECTIVE_DATE = "May 13, 2026";
const CONTACT_EMAIL = "maximesaltet@gmail.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guttrack/privacy" },
  robots: { index: true, follow: true },
};

export default function GutTrackPrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          GutTrack · Legal
        </p>
        <h1 className="font-display text-display-sm mb-[58px]">
          Privacy Policy
        </h1>

        <p className="text-caption uppercase tracking-wider mb-[35px]">
          Effective {EFFECTIVE_DATE}
        </p>

        <Section title="01 / Summary">
          <p>
            GutTrack is a personal journal for gut-health tracking on iOS.{" "}
            <strong>
              It does not collect, store, or transmit any personal data to
              its developer.
            </strong>{" "}
            Everything you log stays on your device — and, if you enable
            iCloud sync, in your own private iCloud database, to which the
            developer has no access.
          </p>
          <p>
            Because gut-health entries are considered <em>health data</em>{" "}
            under the EU GDPR (Article 9) and similar regulations, GutTrack
            is designed from the ground up to minimise data collection: no
            backend, no analytics, no accounts.
          </p>
        </Section>

        <Section title="02 / What we don't do">
          <Ul>
            <li>No accounts. No sign-up. No login. No email to give us.</li>
            <li>
              No analytics SDK, no telemetry, no crash-reporting SDK
              (Apple's standard, opt-in App Store diagnostics may apply at
              the device level — outside GutTrack's control).
            </li>
            <li>No advertising. No ad-tracking. No third-party trackers.</li>
            <li>
              No remote server operated by us. The developer cannot read
              your meals, symptoms, or any other entry.
            </li>
            <li>
              No sharing or sale of your data to any third party — there
              is no data to share.
            </li>
          </Ul>
        </Section>

        <Section title="03 / Data stored on your device">
          <p>
            GutTrack stores the following on your device using Apple's
            SwiftData framework:
          </p>
          <Ul>
            <li>Meals you log (name, time, optional photo, optional notes).</li>
            <li>
              Bowel movement entries (Bristol Stool Scale value 1–7, pain
              level, urgency flag, time).
            </li>
            <li>
              Symptom entries (type and intensity 0–10, time, optional
              notes).
            </li>
            <li>App preferences (units, language, notification settings).</li>
            <li>
              Subscription status (an anonymous receipt confirming whether
              your subscription or lifetime purchase is active).
            </li>
          </Ul>
          <p>Uninstalling GutTrack removes all of this data from your device.</p>
        </Section>

        <Section title="04 / iCloud sync (private database)">
          <p>
            If you are signed in to iCloud and have iCloud Drive enabled,
            GutTrack uses Apple's CloudKit to sync your entries across
            your Apple devices via your{" "}
            <strong>private CloudKit database</strong>. This database
            lives in <em>your</em> iCloud account, is governed by Apple's
            terms and privacy policy, and is encrypted in transit and at
            rest by Apple. If you have enabled Apple's{" "}
            <strong>Advanced Data Protection</strong>, your private
            CloudKit data is also end-to-end encrypted; not even Apple
            can read it.
          </p>
          <p>
            The developer of GutTrack has no access to your private
            CloudKit database and cannot read its contents under any
            circumstance.
          </p>
          <p>
            You can disable iCloud sync at any time from iOS{" "}
            <strong>
              Settings → Apple Account → iCloud → Apps using iCloud →
              GutTrack
            </strong>
            . The app keeps working with local-only storage.
          </p>
        </Section>

        <Section title="05 / HealthKit (optional)">
          <p>
            GutTrack can integrate with Apple Health through HealthKit, if
            you grant permission. With your permission, the app:
          </p>
          <Ul>
            <li>
              <strong>Writes</strong> symptom entries (abdominal cramps,
              bloating, diarrhea, constipation, nausea) to your Apple
              Health database, so they sit alongside your other health
              data.
            </li>
            <li>
              Optionally <strong>reads</strong> body weight and mindful
              session data, only to display context inside the app.
            </li>
          </Ul>
          <p>
            HealthKit data is stored exclusively in your Apple Health
            database on your device (synced through your private iCloud
            HealthKit container if you have enabled it). The developer of
            GutTrack <strong>never</strong> sees or receives this data.
            HealthKit data is never used for advertising or any analytics
            and is never shared with any third party.
          </p>
          <p>
            You can revoke HealthKit permissions at any time from iOS{" "}
            <strong>Settings → Privacy &amp; Security → Health → GutTrack</strong>.
          </p>
        </Section>

        <Section title="06 / Subscriptions and in-app purchases">
          <p>
            GutTrack offers an auto-renewing subscription and a lifetime
            in-app purchase. These are processed entirely by Apple via
            StoreKit. GutTrack receives only an anonymous receipt
            confirming whether a subscription or lifetime purchase is
            active. <strong>GutTrack never sees your name, email,
            address, or payment information.</strong>
          </p>
          <p>
            You can manage or cancel your subscription at any time from
            iOS{" "}
            <strong>Settings → Apple Account → Subscriptions</strong>.
          </p>
        </Section>

        <Section title="07 / Permissions requested">
          <Ul>
            <li>
              <strong>HealthKit</strong> — optional. Used to write symptom
              entries to Apple Health and optionally read weight and
              mindful minutes. You can use the app fully without granting
              this permission.
            </li>
            <li>
              <strong>Notifications</strong> — optional. Used only to
              remind you to log entries, if you opt in.
            </li>
            <li>
              <strong>Photos</strong> — optional. Only requested if you
              attach a photo to a meal entry; the photo is stored locally
              (and in your private iCloud database if sync is enabled).
            </li>
          </Ul>
          <p>
            GutTrack does <strong>not</strong> request access to your
            camera, microphone, location, contacts, calendars, or
            reminders.
          </p>
        </Section>

        <Section title="08 / Legal basis (GDPR)">
          <p>
            For users in the European Union, United Kingdom, or other
            jurisdictions with similar regulations, the legal basis for
            any processing of health-related entries inside GutTrack is{" "}
            <strong>your explicit consent</strong> (Article 9(2)(a) GDPR),
            given when you choose to log an entry or enable a feature.
            You can withdraw consent at any time by deleting the entry,
            disabling the feature, or uninstalling the app.
          </p>
          <p>
            Because no data leaves your devices and Apple's iCloud, the
            developer of GutTrack does not act as a data controller for
            your entries in the sense of Article 4(7) GDPR.
          </p>
        </Section>

        <Section title="09 / Children">
          <p>
            GutTrack is intended for an adult audience. The app does not
            knowingly collect data from anyone, including children under
            13 (or the equivalent minimum age in your jurisdiction). The
            app is not designed for paediatric use.
          </p>
        </Section>

        <Section title="10 / Not a medical device">
          <p>
            GutTrack is a personal journal. It is{" "}
            <strong>not a medical device</strong>, does not provide medical
            advice, and is not a substitute for the assessment, diagnosis,
            or treatment of a qualified healthcare professional. The
            patterns surfaced inside the app are descriptive statistics on
            your own entries — they are not diagnostic. For any persistent
            or worrying symptom, please consult your doctor.
          </p>
        </Section>

        <Section title="11 / Changes to this policy">
          <p>
            If material changes are made, the updated policy will be
            posted at this URL with a new effective date. Continued use
            of the app after a change constitutes acceptance of the
            updated policy.
          </p>
        </Section>

        <Section title="12 / Contact">
          <p>
            Questions about this policy or about GutTrack? Reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=GutTrack%20Privacy`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          ↑ Back to{" "}
          <a href="/guttrack" className="underline underline-offset-4 hover:opacity-100">
            GutTrack
          </a>
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
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black">
      {children}
    </ul>
  );
}
