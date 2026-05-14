import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const TITLE = "ASCDash — Privacy Policy";
const DESCRIPTION =
  "Privacy policy for ASCDash, the native App Store Connect dashboard for macOS, iPadOS, and iOS. Your API credentials stay on your device and never reach a third-party server.";
const EFFECTIVE_DATE = "May 14, 2026";
const CONTACT_EMAIL = "maximesaltet@gmail.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ascdash/privacy" },
  robots: { index: true, follow: true },
};

export default function ASCDashPrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          ASCDash · Legal
        </p>
        <h1 className="font-display text-display-sm mb-[58px]">
          Privacy Policy
        </h1>

        <p className="text-caption uppercase tracking-wider mb-[35px]">
          Effective {EFFECTIVE_DATE}
        </p>

        <Section title="01 / Summary">
          <p>
            ASCDash is a client-only iOS, iPadOS, and macOS app. It connects
            directly from your device to Apple's App Store Connect API using
            credentials you provide.{" "}
            <strong>
              No ASCDash server exists. The developer cannot read your apps,
              sales, reviews, or any data flowing through the app.
            </strong>
          </p>
        </Section>

        <Section title="02 / What we don't do">
          <Ul>
            <li>No ASCDash account. No sign-up. No login on our side.</li>
            <li>No analytics SDK, no telemetry, no crash reporting.</li>
            <li>No advertising, no ad-tracking, no third-party trackers.</li>
            <li>
              No remote server: ASCDash talks to{" "}
              <code>api.appstoreconnect.apple.com</code> directly over HTTPS,
              from your device.
            </li>
          </Ul>
        </Section>

        <Section title="03 / Your App Store Connect credentials">
          <p>
            To function, ASCDash needs three values you generate yourself in
            App Store Connect → <em>Users and Access → Integrations</em>:
          </p>
          <Ul>
            <li>An Issuer&nbsp;ID (UUID)</li>
            <li>A Key&nbsp;ID (10 characters)</li>
            <li>
              A private key file (<code>.p8</code>) downloaded from App Store
              Connect
            </li>
          </Ul>
          <p>
            These three values are stored in your device's{" "}
            <strong>Keychain</strong> (Apple's secure system store), with
            <code> kSecAttrSynchronizable = true</code> so they sync between
            your own Apple devices via iCloud Keychain if you have it enabled.
            They are <strong>never</strong> uploaded to any server controlled
            by the developer of ASCDash.
          </p>
          <p>
            You can delete them at any time from <strong>Settings →
            Account</strong> in the app, or by deleting ASCDash entirely.
          </p>
        </Section>

        <Section title="04 / Short-lived JWTs (how API calls are signed)">
          <p>
            Apple requires every App Store Connect API call to be signed with
            an ES256 JSON Web Token. ASCDash generates these tokens locally on
            your device using Apple's CryptoKit framework, signs them with
            your <code>.p8</code> private key (which never leaves the
            Keychain), and includes the token only in the{" "}
            <code>Authorization</code> header of the resulting HTTPS request
            to <code>api.appstoreconnect.apple.com</code>. Tokens expire after
            at most 20 minutes per Apple's specification.
          </p>
        </Section>

        <Section title="05 / Cached reports on your device">
          <p>
            App Store Connect analytics, sales, and finance reports are
            delivered as files by Apple's API. ASCDash caches the parsed
            results locally using Apple's SwiftData framework so the app feels
            instant the next time you open it.
          </p>
          <p>
            If you enable iCloud sync in Settings, this cache is mirrored to{" "}
            <em>your own private iCloud database</em> via CloudKit so your
            iPhone, iPad, and Mac stay in sync. The developer of ASCDash has
            no access to that database.
          </p>
          <p>
            Uninstalling ASCDash removes the local cache. To remove the
            CloudKit copy, sign out of iCloud or use{" "}
            <strong>Settings → Apple Account → iCloud → Apps using
            iCloud → ASCDash → Delete Data from iCloud</strong>.
          </p>
        </Section>

        <Section title="06 / Subscriptions &amp; in-app purchases">
          <p>
            ASCDash Pro is an auto-renewing subscription processed entirely by
            Apple via StoreKit&nbsp;2. ASCDash receives only an anonymous
            entitlement (whether a subscription is active, when it renews or
            expires). ASCDash never sees your name, email, billing address, or
            payment information — those stay with Apple under your Apple ID.
          </p>
        </Section>

        <Section title="07 / Permissions">
          <p>
            ASCDash does not request access to your camera, microphone,
            location, contacts, photos, health data, or speech recognition. It
            may request permission to send local notifications (e.g. when a
            build is approved or a new 1-star review appears) — you can refuse
            without losing any core functionality.
          </p>
          <p>
            ASCDash uses standard network access (
            <code>com.apple.security.network.client</code>) to talk to
            <code> api.appstoreconnect.apple.com</code>. It does not connect
            to any other host.
          </p>
        </Section>

        <Section title="08 / Children">
          <p>
            ASCDash is a professional tool for App Store developers, not aimed
            at children. The app does not knowingly collect data from anyone,
            including children under 13.
          </p>
        </Section>

        <Section title="09 / Changes to this policy">
          <p>
            If material changes are made, the updated policy will be posted at
            this URL with a new effective date. Substantial changes will be
            mentioned in the app's release notes.
          </p>
        </Section>

        <Section title="10 / Contact">
          <p>
            Questions about this policy or about ASCDash? Reach out at{" "}
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
        <CrossAppNav currentSlug="ascdash" />
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
