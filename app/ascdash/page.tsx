import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "ASCDash";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/ascdash";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — App Store Connect Dashboard for Mac, iPad, iPhone`;
const DESCRIPTION = `${APP_NAME} turns your App Store Connect account into a native dashboard on every Apple device. Connect once with your API key — see all your apps, analytics, sales, reviews, and TestFlight builds in a single place. Universal Purchase across macOS, iPadOS, and iOS.`;

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

export default function ASCDashPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px] opacity-60">
          macOS · iPadOS · iOS · App Store · 2026
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">{APP_NAME}</h1>
        <p
          className="text-body mb-[58px]"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          Your App Store Connect account, finally readable. {APP_NAME} is a
          native, single-binary dashboard that runs on your Mac, iPad, and
          iPhone — connect once with your API key, get every app's analytics,
          sales, reviews, and TestFlight builds in one place. No web tab, no
          extra login, no third-party server in between.
        </p>

        <Section title="01 / Who it's for">
          <p>
            {APP_NAME} is built for indie iOS developers, two-person studios,
            and mobile agencies who ship multiple apps and check App Store
            Connect every morning. If you currently keep five browser tabs
            open just to see yesterday's downloads, today's revenue, last
            night's reviews, and your latest TestFlight build — {APP_NAME}{" "}
            replaces all of them with a single native pane.
          </p>
        </Section>

        <Section title="02 / What's included">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Every app at a glance
          </h3>
          <p>
            Connect with your App Store Connect API key (Issuer&nbsp;ID, Key&nbsp;ID,
            and your <code>.p8</code> private key). {APP_NAME} lists every app
            in your account with live state — Ready for Sale, In Review,
            Rejected, Pending Developer Release — at a glance.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Analytics, sales &amp; finance
          </h3>
          <p>
            Daily downloads, sessions, conversion rate, proceeds and revenue,
            broken down by territory. Swift Charts visualisations on every
            device — full-width on Mac, swipe-through on iPhone. Data is
            cached locally so old reports remain instant.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Reviews timeline
          </h3>
          <p>
            A unified review feed across every app in your account. Sort by
            rating, filter by territory, draft a developer response, and ship
            it straight to App Store Connect — no copy-pasting between
            browser tabs.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Builds &amp; TestFlight
          </h3>
          <p>
            See processing state on every new build, current TestFlight groups,
            tester counts, and beta feedback. A Live Activity on iOS keeps a
            freshly-uploaded build's processing visible from the Lock Screen.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Widgets &amp; MenuBarExtra
          </h3>
          <p>
            Configurable WidgetKit widgets for Home Screen, Lock Screen, and
            iPad/Mac desktop: today's revenue, yesterday's downloads, a
            sparkline of the past seven days, a rolling rating, or your last
            three reviews. On macOS, a MenuBarExtra keeps today's number one
            keystroke away.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Universal Purchase
          </h3>
          <p>
            One subscription, three platforms. Buy on iPhone, use on Mac.
            Cancel anytime, refunds via Apple, no proprietary account.
          </p>
        </Section>

        <Section title={`03 / ${APP_NAME} Pro`}>
          <p>
            {APP_NAME} ships freemium. The free tier connects one app and shows
            today's headline numbers. <strong>Pro</strong> unlocks the rest:
          </p>
          <Ul>
            <li>Unlimited apps and unlimited Issuer&nbsp;IDs (handy for agencies)</li>
            <li>Full historical analytics &amp; sales reports</li>
            <li>Reviews timeline with drafted developer responses</li>
            <li>All widgets, every size, every metric</li>
            <li>Lock&nbsp;Screen widgets &amp; iOS Live Activities</li>
            <li>macOS MenuBarExtra</li>
            <li>CSV / PDF export</li>
            <li>Local push alerts: new review, build approved, rating drop</li>
          </Ul>
          <p>
            <strong>9,99&nbsp;€ / month</strong> or{" "}
            <strong>79,99&nbsp;€ / year</strong> (6,67&nbsp;€/month, ~33% off).
            Annual plans include a <strong>7-day free trial</strong>. Cancel
            from your Apple ID at any time.
          </p>
        </Section>

        <Section title="04 / Privacy by construction">
          <p>
            {APP_NAME} is a single-tier client app. There is no {APP_NAME}{" "}
            server. Your App Store Connect API credentials live in your
            device's Keychain (with optional iCloud Keychain sync between your
            own devices) and never leave. Every API call goes directly from
            your device to{" "}
            <code>api.appstoreconnect.apple.com</code> over HTTPS, signed with
            short-lived JWTs the app generates locally with CryptoKit.
          </p>
          <p>
            No analytics SDK. No telemetry. No crash reporter. No ads. No
            third-party trackers.
          </p>
          <p>
            Read the full{" "}
            <Link
              href="/ascdash/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="05 / Built for the Apple ecosystem">
          <Ul>
            <li>SwiftUI, built natively for iOS&nbsp;18+, iPadOS&nbsp;18+, macOS&nbsp;15+</li>
            <li>Liquid Glass on iOS&nbsp;26+ / macOS&nbsp;26+ with graceful fallbacks</li>
            <li>SwiftData persistence with optional CloudKit sync of cached reports</li>
            <li>StoreKit&nbsp;2 native paywall &amp; subscription lifecycle</li>
            <li>WidgetKit, Live Activities, App Intents, MenuBarExtra</li>
            <li>Dynamic Type, dark/light, full Voice Over support</li>
            <li>Universal Purchase — one subscription unlocks all three platforms</li>
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
                href="/ascdash/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Support &amp; FAQ
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
