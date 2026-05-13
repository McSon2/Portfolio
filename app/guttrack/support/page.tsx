import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "GutTrack";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "May 13, 2026";
const URL = "https://maximesaltet.com/guttrack/support";

const TITLE = `Support — ${APP_NAME}`;
const DESCRIPTION = `Support page for ${APP_NAME}, the iOS gut health journal. FAQ, restore purchases, HealthKit and iCloud help, and contact.`;

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

export default function GutTrackSupportPage() {
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
            To speed things up, please include: your iPhone model, iOS
            version, {APP_NAME} version (visible in{" "}
            <strong>Settings → About</strong>), and a screenshot if relevant.
          </p>
        </Section>

        <Section title="02 / About GutTrack">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            Is GutTrack a medical device?
          </h3>
          <p>
            <strong>No.</strong> {APP_NAME} is a personal journal that
            helps you log meals, bowel movements, and symptoms, and see
            patterns in your own data. It does not diagnose, treat, or
            prevent any condition. For any persistent or worrying symptom,
            please consult a qualified healthcare professional.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Who is the app for?
          </h3>
          <p>
            For anyone living with IBS, SIBO, ulcerative colitis, or any
            chronic digestive issue who wants a simple, private way to
            keep a daily journal — and a clean report to share with their
            doctor or dietitian.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Available languages?
          </h3>
          <p>
            English and Français, day one. The interface follows the
            language set on your iPhone.
          </p>
        </Section>

        <Section title="03 / Logging entries">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I log a meal?
          </h3>
          <p>
            From the <strong>Today</strong> screen, tap <em>Log meal</em>.
            Type or pick the food, set a portion, optionally add a photo,
            and save. Meals are timestamped automatically.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is the Bristol Stool Scale?
          </h3>
          <p>
            A clinical reference scale from 1 (separate hard lumps) to 7
            (entirely liquid). When you log a bowel movement, you pick the
            type that matches; the icons are illustrative and contain no
            photographs. The scale is the standard used by gastroenterologists
            worldwide.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How is symptom intensity measured?
          </h3>
          <p>
            On a 0–10 scale, where 0 is "no symptom" and 10 is "the worst
            you can imagine for you". The scale is subjective by design — the
            point is consistency with yourself, not comparison with others.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I edit or delete a past entry?
          </h3>
          <p>
            Yes. Tap any entry in the calendar's day view or in the
            timeline; you can edit any field or delete it entirely.
            Deletions are immediate and sync to your other devices through
            iCloud.
          </p>
        </Section>

        <Section title="04 / Patterns &amp; insights">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How are patterns computed?
          </h3>
          <p>
            On a 14-day rolling window, GutTrack counts how often a given
            food or category appears, and how often a symptom is logged
            within the 24 hours that follow. The result is shown as raw
            counts ("8 times consumed, 7 followed by a symptom"), never
            as a score or a probability. It is descriptive statistics —
            not a diagnosis.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Why no "score" or "trigger" label?
          </h3>
          <p>
            Two reasons. First, observational counts on a personal journal
            do not establish causation; only a healthcare professional with
            full context can. Second, labelling a food as a "trigger"
            would step outside the app's role as a journal. We show you
            the numbers; you and your doctor draw the conclusions.
          </p>
        </Section>

        <Section title="05 / Export PDF">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I export a report?
          </h3>
          <p>
            Open the <strong>Export</strong> screen and tap{" "}
            <em>Generate 30-day report</em>. GutTrack renders a multi-page
            PDF: a timeline, a list of meals and symptoms, and the observed
            patterns. Use the standard iOS share sheet to AirDrop, email,
            print, or save it.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I export to JSON or CSV?
          </h3>
          <p>
            Yes — from Settings, you can export your full database as JSON
            for backup or for use in your own analysis. The format is
            documented inside the export.
          </p>
        </Section>

        <Section title="06 / Subscription &amp; purchase">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            What does the free tier include?
          </h3>
          <p>
            Full daily logging (meals, bowel movements, symptoms), the
            Today screen, and the last 7 days in the calendar. This is
            enough to evaluate whether the app fits you without paying.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What does the subscription unlock?
          </h3>
          <Ul>
            <li>Full calendar history (unlimited days)</li>
            <li>14-day patterns view</li>
            <li>PDF report export</li>
            <li>JSON export</li>
            <li>HealthKit two-way integration</li>
            <li>iCloud sync across all your Apple devices</li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Which plan should I pick?
          </h3>
          <p>
            <strong>Yearly</strong> (€49.99/year, 14-day free trial) is
            the best value and what most users choose.{" "}
            <strong>Monthly</strong> (€6.99/month) is for people who
            prefer to keep commitments short and have no trial.{" "}
            <strong>Lifetime</strong> (€149.99 one-time) is for those who
            know they will use the app for years and want to pay once.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Does the free trial auto-convert?
          </h3>
          <p>
            Yes. If you start the 14-day free trial on the yearly plan
            and do not cancel before it ends, your subscription begins
            and your Apple ID is charged. You can cancel at any time
            during the trial from iOS{" "}
            <strong>Settings → Apple Account → Subscriptions</strong> —
            you will keep access for the remainder of the trial.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I restore my purchase on a new device?
          </h3>
          <p>
            Sign in to the same Apple ID used for the original purchase,
            open GutTrack, and tap{" "}
            <strong>Settings → Restore Purchases</strong>. Your
            subscription or lifetime unlock reactivates instantly, at no
            extra cost.
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
            , sign in with your Apple ID, and select the {APP_NAME}{" "}
            purchase. If Apple declines, email me — I'll find a fair
            solution.
          </p>
        </Section>

        <Section title="07 / HealthKit">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How do I enable HealthKit integration?
          </h3>
          <p>
            From <strong>Settings → HealthKit</strong> in GutTrack, toggle
            the switch. iOS will ask which categories you allow GutTrack to
            read and write. The app works fully without any of these
            permissions.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            What is written to Apple Health?
          </h3>
          <p>
            Only the symptom entries you log: abdominal cramps, bloating,
            diarrhea, constipation, nausea. These appear in the standard
            Symptoms section of the Health app.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            How do I revoke HealthKit access?
          </h3>
          <p>
            iOS{" "}
            <strong>
              Settings → Privacy &amp; Security → Health → GutTrack
            </strong>{" "}
            — toggle off any category you no longer wish to share.
          </p>
        </Section>

        <Section title="08 / iCloud sync">
          <h3 className="font-display text-[18px] mt-[10px] mb-[10px]">
            How does sync work?
          </h3>
          <p>
            GutTrack syncs your entries across your Apple devices using
            Apple's CloudKit, in <em>your own private iCloud database</em>
            . The developer of GutTrack has no access to it. Sync is
            automatic when you are signed in to iCloud and online.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            My entries aren't appearing on my other device — what now?
          </h3>
          <Ul>
            <li>
              Confirm both devices are signed in to the <strong>same</strong>{" "}
              iCloud account.
            </li>
            <li>
              Open{" "}
              <strong>
                Settings → Apple Account → iCloud → Apps using iCloud
              </strong>{" "}
              and confirm GutTrack is enabled.
            </li>
            <li>
              Make sure both devices are online and have iCloud Drive
              enabled.
            </li>
            <li>
              First-sync can take a couple of minutes. If after 10 minutes
              nothing has happened, force-quit and reopen GutTrack on both
              devices.
            </li>
          </Ul>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Can I disable iCloud sync?
          </h3>
          <p>
            Yes. Go to iOS{" "}
            <strong>
              Settings → Apple Account → iCloud → Apps using iCloud →
              GutTrack
            </strong>{" "}
            and turn it off. The app keeps working with local-only
            storage on the current device.
          </p>
        </Section>

        <Section title="09 / Bugs &amp; suggestions">
          <p>
            {APP_NAME} is built and maintained by an indie developer.
            Every email is read. If something is broken, or there's a
            feature you wish existed, write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
              className="underline underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            . For bugs, please describe the steps that reproduce the issue.
          </p>
        </Section>

        <Section title="10 / Useful links">
          <Ul>
            <li>
              <Link
                href="/guttrack"
                className="underline underline-offset-4 hover:opacity-60"
              >
                {APP_NAME} home page
              </Link>
            </li>
            <li>
              <Link
                href="/guttrack/privacy"
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
            href="/guttrack"
            className="underline underline-offset-4 hover:opacity-100"
          >
            {APP_NAME}
          </Link>
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
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
      {children}
    </ul>
  );
}
