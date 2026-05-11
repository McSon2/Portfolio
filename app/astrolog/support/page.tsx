import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const APP_NAME = "AstroLog";
const FALLBACK_EMAIL = "maximesaltet@hotmail.fr";
const LAST_UPDATED = "May 11, 2026";
const URL = "https://maximesaltet.com/astrolog/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS observation logbook for amateur astronomers. FAQ, restore purchases, observing tips, and contact.`;

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

export default function AstroLogSupportPage() {
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
              href={`mailto:${FALLBACK_EMAIL}?subject=Support%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . A real human (the developer) replies — usually within
            48&nbsp;hours.
          </p>
          <p>
            To speed things up, please include: your iPhone or iPad model, iOS
            version, {APP_NAME} version (visible in <strong>Settings →
            About</strong>), and a screenshot if relevant.
          </p>
        </Section>

        <Section title="02 / Getting started">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I log my first session?
          </h3>
          <p>
            Open {APP_NAME}, tap the gold <strong>+</strong> on the Journal tab,
            then fill the date, duration, location and your observing notes.
            Tap <em>Add target</em> to attach what you observed — either pick
            from the Messier / Caldwell / Herschel / NGC catalog, or type a
            custom target. Mark each one as photographed if relevant.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I record sky conditions?
          </h3>
          <p>
            On the session screen, scroll to <strong>Conditions</strong> and
            fill what you know: Bortle class (1 = pristine dark, 9 = inner
            city), seeing (1 = poor, 5 = excellent), transparency, temperature,
            cloud coverage. With Pro, lunar phase and illumination can be
            auto-captured from the date and your saved location.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is Red Light Mode?
          </h3>
          <p>
            A real observatory mode — not a tinted overlay. The whole canvas is
            re-painted in deep red over near-black with attenuated brightness,
            so dark-adapted eyes are preserved at the eyepiece. Toggle it once
            at the start of the night from <strong>Settings</strong>.
          </p>
        </Section>

        <Section title="03 / Catalogs">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Which catalogs are included?
          </h3>
          <p>
            The full <strong>Messier</strong> catalog (110 objects), the{" "}
            <strong>Caldwell</strong> catalog, the <strong>Herschel 400</strong>{" "}
            list, and a curated selection of <strong>NGC</strong> targets. Each
            object lists its magnitude, constellation, right ascension,
            declination, kind, and best viewing month.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I add a catalog object to a session?
          </h3>
          <p>
            Open the <strong>Catalog</strong> tab, filter by kind or
            constellation, tap the target, then tap <em>Add to current session</em>
            {" "}— or attach it to a specific past session from the detail view.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why am I limited to 10 catalog objects?
          </h3>
          <p>
            The free tier shows the first 10 objects so you can try the
            workflow. AstroLog Pro unlocks the entire catalog (Messier,
            Caldwell, Herschel 400, NGC) — one-time purchase, no subscription.
          </p>
        </Section>

        <Section title="04 / Equipment &amp; Setups">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I record my telescope?
          </h3>
          <p>
            Go to the <strong>Equipment</strong> tab, tap <em>+ Add equipment</em>,
            pick a kind (telescope, mount, camera, eyepiece, filter), then enter
            the brand, name, and specs that matter — aperture, focal length,
            f-ratio, sensor dimensions, pixel size.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is a Setup?
          </h3>
          <p>
            A Setup is a named bundle of equipment — e.g. &ldquo;Travel
            grab-and-go&rdquo;, &ldquo;Backyard deep-sky&rdquo;, &ldquo;Lunar
            imaging&rdquo;. Attach a Setup to a session in one tap instead of
            re-entering each piece every time. Multi-setup tracking is part of
            AstroLog Pro.
          </p>
        </Section>

        <Section title="05 / AstroLog Pro">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does Pro unlock?
          </h3>
          <Ul>
            <li>Unlimited sessions (the free tier keeps the first 5)</li>
            <li>The full deep-sky catalog (the free tier shows 10 objects)</li>
            <li>Multi-setup equipment tracking</li>
            <li>Auto-captured sky conditions (Moon phase, illumination)</li>
            <li>Red Light Mode</li>
            <li>iCloud sync across iPhone, iPad and Mac</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Is Pro a subscription?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} Pro is a{" "}
            <strong>one-time, non-renewing purchase of $9.99 / 9,99&nbsp;€</strong>.
            Bought once, kept for life on your Apple ID. All future updates
            included.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my purchase on a new device?
          </h3>
          <p>
            Sign into the same Apple ID used for the original purchase, open{" "}
            {APP_NAME}, and tap <strong>Restore previous purchase</strong> on
            the Pro screen (or from <strong>Settings</strong>). Pro reactivates
            instantly, at no extra cost.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My purchase isn&rsquo;t unlocking — what do I do?
          </h3>
          <p>
            First, confirm you&rsquo;re signed into the original Apple ID.
            Then tap <strong>Restore previous purchase</strong>. If that fails,
            force-quit {APP_NAME} (swipe up from the bottom and flick the app
            card up) and relaunch. Still stuck? Email me with your Apple
            transaction ID (visible in your App Store account history).
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
            , sign in with your Apple ID, and select the {APP_NAME} purchase.
            If Apple declines, email me — I&rsquo;ll find a fair solution.
          </p>
        </Section>

        <Section title="06 / iCloud sync">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does sync work?
          </h3>
          <p>
            With {APP_NAME} Pro, your logbook syncs across your Apple devices
            via Apple&rsquo;s CloudKit, in <em>your own private iCloud
            database</em>. The developer of {APP_NAME} has no access to it.
            Sync is automatic when you&rsquo;re signed into iCloud and the
            device is online.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My sessions aren&rsquo;t appearing on my other device — what now?
          </h3>
          <Ul>
            <li>
              Confirm both devices are signed into the <strong>same</strong>{" "}
              iCloud account.
            </li>
            <li>
              Open <strong>Settings → Apple Account → iCloud → Apps using
              iCloud</strong> and confirm {APP_NAME} is enabled.
            </li>
            <li>
              Make sure both devices are online and have iCloud Drive enabled.
            </li>
            <li>
              First-sync can take a couple of minutes. If after 10 minutes
              nothing has happened, force-quit and reopen {APP_NAME} on both
              devices.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I disable iCloud sync?
          </h3>
          <p>
            Yes. Go to <strong>iOS Settings → Apple Account → iCloud → Apps
            using iCloud → {APP_NAME}</strong> and turn it off. The app will
            keep working with local-only storage.
          </p>
        </Section>

        <Section title="07 / Observing tips">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does the Bortle scale mean?
          </h3>
          <p>
            The Bortle scale ranks night sky darkness from <strong>1</strong>{" "}
            (pristine dark — full Milky Way detail, zodiacal light visible) to{" "}
            <strong>9</strong> (inner-city — only the Moon, planets and
            brightest stars visible). Most suburban skies fall between 5 and 7.
            Use a light-pollution map to get your starting estimate.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What about seeing and transparency?
          </h3>
          <p>
            <strong>Seeing</strong> measures atmospheric stability — how
            steady stars and planets appear at high magnification. Poor
            seeing = boiling planets. <strong>Transparency</strong> measures
            atmospheric clarity — how faint a star you can see at zenith.
            Excellent transparency = pristine Milky Way; poor transparency =
            washed-out background. {APP_NAME} records both on a 1–5 scale.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            When&rsquo;s the best time to chase the Messier list?
          </h3>
          <p>
            Many observers do a <em>Messier marathon</em> on a moonless night
            in mid-to-late March, when all 110 objects are theoretically
            observable in one night from mid-northern latitudes. {APP_NAME}
            shows the best viewing month for each catalog target so you can
            plan year-round.
          </p>
        </Section>

        <Section title="08 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer. Every
            email is read. If something is broken, if a catalog entry has a
            typo, or if there&rsquo;s a feature you wish existed (Caldwell-style
            checklists, AAVOA observing programs, custom catalogs), write to{" "}
            <a
              href={`mailto:${FALLBACK_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {FALLBACK_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="09 / Useful links">
          <Ul>
            <li>
              <Link
                href="/astrolog"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
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
            href="/astrolog"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
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
