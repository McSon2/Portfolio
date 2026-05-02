import type { Metadata, Viewport } from "next";
import { neueMontreal, ldd } from "@/lib/fonts";
import { PixelReveal } from "@/components/motion/PixelReveal";
import "./globals.css";

const SITE_URL = "https://maximesaltet.com";
const SITE_NAME = "Maxime Saltet";
const TITLE = "Maxime Saltet — Fullstack Developer · Web · Mobile · Desktop";
const DESCRIPTION =
  "Maxime Saltet, fullstack developer based in France. I ship products end-to-end across web (Next.js, Node), iOS (SwiftUI) and desktop (Electron). Selected work: Anthosaure, LocManage, SSPilot.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffcf0",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Maxime Saltet" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Maxime Saltet", url: SITE_URL }],
  creator: "Maxime Saltet",
  publisher: "Maxime Saltet",
  keywords: [
    "Maxime Saltet",
    "fullstack developer",
    "freelance developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "iOS developer",
    "SwiftUI developer",
    "Electron developer",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "portfolio",
    "développeur fullstack",
    "développeur freelance",
    "développeur web mobile desktop",
    "Anthosaure",
    "LocManage",
    "SSPilot",
  ],
  category: "technology",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-US": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maxime Saltet — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@maximesaltet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: { email: false, address: false, telephone: false },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maxime Saltet",
  givenName: "Maxime",
  familyName: "Saltet",
  jobTitle: "Fullstack Developer",
  description: DESCRIPTION,
  url: SITE_URL,
  email: "mailto:maximesaltet@gmail.com",
  nationality: { "@type": "Country", name: "France" },
  sameAs: ["https://github.com/McSon2"],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "Redis",
    "SwiftUI",
    "iOS development",
    "Electron",
    "Tailwind CSS",
    "Software architecture",
    "Realtime systems",
    "Monorepos",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Fullstack Developer",
    occupationLocation: { "@type": "Country", name: "France" },
    skills: "Web, mobile, and desktop application development",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  author: { "@type": "Person", name: "Maxime Saltet", url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${ldd.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <PixelReveal />
        {children}
      </body>
    </html>
  );
}
