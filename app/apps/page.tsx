import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { iosApps } from "@/lib/apps";

const URL = "https://maximesaltet.com/apps";
const TITLE = "iOS Apps by Maxime Saltet";
const DESCRIPTION = `${iosApps.length} indie iOS apps shipped solo — productivity, family, sports, wellness, coffee, astronomy, gaming and spirits. Built natively with SwiftUI, no subscriptions, no ads.`;

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

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  author: {
    "@type": "Person",
    name: "Maxime Saltet",
    url: "https://maximesaltet.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: iosApps.length,
    itemListElement: iosApps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://maximesaltet.com/${app.slug}`,
      name: app.name,
    })),
  },
};

export default function AppsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1100px] px-[30px] pt-[120px] pb-[80px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <p className="text-caption uppercase tracking-wider mb-[15px] opacity-60">
          iOS · App Store · {iosApps.length} apps
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">iOS Apps</h1>
        <p
          className="text-body mb-[58px] max-w-[720px]"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          Indie iOS apps shipped solo — built natively with SwiftUI, designed
          for one-handed reach, dark canvas, plain language. No subscriptions
          wallpapered over basic features, no ads, no accounts when not needed.
          Each app links to its own marketing page, privacy policy, and support
          page below.
        </p>

        <ul className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {iosApps.map((app) => (
            <li
              key={app.slug}
              className="border border-black p-[20px] flex flex-col"
            >
              <p className="text-caption uppercase tracking-wider opacity-60 mb-[8px]">
                {app.category} · {app.year}
              </p>
              <h2 className="font-display text-[24px] leading-tight mb-[10px]">
                <Link
                  href={`/${app.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  {app.name}
                </Link>
              </h2>
              <p className="text-[14px] leading-snug opacity-80 flex-1 mb-[15px]">
                {app.tagline}
              </p>
              <div className="flex gap-[15px] text-caption uppercase tracking-wider border-t border-black/30 pt-[10px]">
                <Link
                  href={`/${app.slug}`}
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  Overview
                </Link>
                <Link
                  href={`/${app.slug}/privacy`}
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  Privacy
                </Link>
                <Link
                  href={`/${app.slug}/support`}
                  className="underline underline-offset-4 hover:opacity-60"
                >
                  Support
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          <Link
            href="/"
            className="underline underline-offset-4 hover:opacity-60"
          >
            ← Back to portfolio
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
