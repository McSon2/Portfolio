import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "ASCDash";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 14, 2026";
const URL = "https://maximesaltet.com/ascdash/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the native App Store Connect dashboard. FAQ, onboarding help, subscription troubleshooting, contact.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
  },
};

export default function ASCDashSupportPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px]">
          {APP_NAME} · Support
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">Support &amp; FAQ</h1>
        <p className="text-caption uppercase tracking-wider opacity-60 mb-[58px]">
          Last updated {LAST_UPDATED}
        </p>

        <Section title="01 / Contact">
          <p>
            Questions, bug reports, refund requests, or feature suggestions
            for {APP_NAME}? Reach out at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Support%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            . A real human (the developer) replies — usually within
            48&nbsp;hours.
          </p>
          <p>
            To speed things up, please include: your device model, OS version,
            {" "}{APP_NAME} version (visible in <strong>Settings → About</strong>),
            and a screenshot or short description of what you saw.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What do I need before opening {APP_NAME}?
          </h3>
          <p>
            An App Store Connect account that owns at least one app, and an
            App&nbsp;Store&nbsp;Connect API key (generated in{" "}
            <strong>App Store Connect → Users and Access → Integrations →
            App Store Connect API</strong>). Generating a key requires the
            Admin role on the team.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I generate the API key?
          </h3>
          <Ul>
            <li>
              Open{" "}
              <a
                href="https://appstoreconnect.apple.com/access/integrations/api"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                App Store Connect → Integrations → App Store Connect API
              </a>
            </li>
            <li>
              Click <strong>Generate API Key</strong> (or the <strong>+</strong>{" "}
              button)
            </li>
            <li>
              Give it a name (e.g. <em>ASCDash</em>), pick the{" "}
              <strong>Admin</strong> role, click <strong>Generate</strong>
            </li>
            <li>
              <strong>Download the <code>.p8</code> file immediately</strong> —
              Apple shows it only once
            </li>
            <li>
              Note the <strong>Issuer&nbsp;ID</strong> (UUID at the top of the
              page) and the <strong>Key&nbsp;ID</strong> (10 characters next to
              the key name)
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I import the .p8 into {APP_NAME}?
          </h3>
          <p>
            On the onboarding screen, paste your Issuer&nbsp;ID and Key&nbsp;ID,
            then tap <strong>Import .p8 file</strong>. {APP_NAME} opens the
            system file picker: pick the <code>AuthKey_XXXXXXXXXX.p8</code>{" "}
            you downloaded from App Store Connect. The contents go straight
            into your device Keychain — the file itself is not copied.
          </p>
          <p>
            If iCloud Keychain is enabled on your device, the credentials sync
            to your other Apple devices automatically (typically within a few
            minutes).
          </p>
        </Section>

        <Section title="03 / Subscription">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>Unlimited apps and multiple Issuer&nbsp;IDs (agencies)</li>
            <li>Full analytics, sales &amp; finance history</li>
            <li>Reviews timeline with drafted developer responses</li>
            <li>All widgets, every size and metric</li>
            <li>Lock&nbsp;Screen widgets, iOS Live Activities</li>
            <li>macOS MenuBarExtra</li>
            <li>CSV / PDF export</li>
            <li>Local push alerts (new review, approved build, rating drop)</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is the subscription Universal?
          </h3>
          <p>
            Yes. One Pro subscription unlocks {APP_NAME} on{" "}
            <strong>macOS, iPadOS, and iOS</strong> under the same Apple ID
            (Universal Purchase). You only pay once.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I cancel?
          </h3>
          <p>
            Cancellations are handled by Apple. Open{" "}
            <strong>Settings → [your name] → Subscriptions → {APP_NAME}</strong>{" "}
            on any of your devices, and tap <strong>Cancel Subscription</strong>.
            You keep Pro access until the end of the current period.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my subscription on a new device?
          </h3>
          <p>
            Sign into the same Apple ID used for the purchase, open {APP_NAME},
            and go to <strong>Settings → Restore Purchases</strong> (also
            available from the paywall). Pro reactivates instantly at no extra
            cost.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I get a refund?
          </h3>
          <p>
            Refunds are handled directly by Apple. Visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60"
            >
              reportaproblem.apple.com
            </a>
            , sign in, and select the {APP_NAME} subscription. If Apple
            declines, email me — I'll find a fair solution.
          </p>
        </Section>

        <Section title="04 / Analytics: why is yesterday missing?">
          <p>
            Apple's analytics pipeline is asynchronous by design. After you
            first connect a key, {APP_NAME} registers an{" "}
            <em>ongoing analytics report request</em> with App Store Connect
            on your behalf. Apple then starts collecting data, and the first
            usable report typically arrives <strong>24 to 72 hours</strong>{" "}
            later. From that point onwards, new daily reports drop once a day
            (around 24&nbsp;h delay).
          </p>
          <p>
            Sales and finance reports follow a different schedule — daily
            sales generally arrive about a day late; finance reports arrive
            monthly.
          </p>
          <p>
            If a report request gets paused by Apple due to inactivity,{" "}
            {APP_NAME} will recreate it the next time you open the app. No
            action needed on your side.
          </p>
        </Section>

        <Section title="05 / Common errors">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            "Unauthorized" or 401 errors after working fine
          </h3>
          <p>
            Your JWT may have expired, or the underlying API key was revoked
            in App Store Connect. {APP_NAME} regenerates tokens automatically;
            if errors persist, go to <strong>Settings → Account →
            Re-test connection</strong>. If that fails, regenerate the key in
            App Store Connect and re-import the new <code>.p8</code>.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            "Rate limited" or 429 errors
          </h3>
          <p>
            Apple limits each API key to roughly 50 requests per second and
            ~3500 requests per hour. {APP_NAME} throttles requests internally,
            but if you tap aggressively across many apps in a short window,
            you may hit the ceiling. Wait a minute and reopen the app.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            "Forbidden" or 403 on a specific app
          </h3>
          <p>
            The API key role may not allow access to that app. Re-create the
            key in App Store Connect with the <strong>Admin</strong> role and
            re-import the new <code>.p8</code> in {APP_NAME}.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            iCloud Keychain not syncing between my devices
          </h3>
          <p>
            iCloud Keychain sync can take a few minutes. Confirm that iCloud
            Keychain is enabled on both devices (
            <strong>Settings → [your name] → iCloud → Passwords and Keychain</strong>
            ), that both are signed into the same Apple ID, and that you have
            an active internet connection on both sides.
          </p>
        </Section>

        <Section title="06 / Privacy &amp; security">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Does my .p8 leave my device?
          </h3>
          <p>
            <strong>No.</strong> The <code>.p8</code> private key lives in your
            device's Keychain and is used locally to sign short-lived JWTs that
            get attached to HTTPS requests aimed at{" "}
            <code>api.appstoreconnect.apple.com</code>. Read the full{" "}
            <Link
              href="/ascdash/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>{" "}
            for details.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What if my .p8 is compromised?
          </h3>
          <p>
            Go to{" "}
            <a
              href="https://appstoreconnect.apple.com/access/integrations/api"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-60"
            >
              App Store Connect → Integrations → App Store Connect API
            </a>{" "}
            and <strong>Revoke</strong> the key. Generate a new one and
            re-import it in {APP_NAME}. The old key stops working immediately.
          </p>
        </Section>

        <Section title="07 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a metric doesn't match
            what you see in App Store Connect's web UI, or if there's a
            feature you wish existed, write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue
            and attach a screenshot if you can.
          </p>
        </Section>

        <Section title="08 / Useful links">
          <Ul>
            <li>
              <Link
                href="/ascdash"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
              </Link>
            </li>
            <li>
              <Link
                href="/ascdash/privacy"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <a
                href="https://appstoreconnect.apple.com/access/integrations/api"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                App Store Connect — API key management
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Apple Media Services Terms (EULA)
              </a>
            </li>
            <li>
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Apple — Report a Problem (refunds)
              </a>
            </li>
          </Ul>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          ↑ Back to{" "}
          <Link
            href="/ascdash"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
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
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
      {children}
    </ul>
  );
}
