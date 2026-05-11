import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "RhumArrangé";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/RhumArrange";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

export const metadata: Metadata = {
  title: `${APP_NAME} — Cave & recettes de rhum arrangé pour iOS`,
  description: `${APP_NAME} est l'application iOS pour les passionnés de rhum arrangé. Suivi des macérations, 12 recettes traditionnelles, carnet de dégustation, rappels intelligents. Disponible sur l'App Store.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${APP_NAME} — Cave & recettes de rhum arrangé pour iOS`,
    description: `Application iOS pour les passionnés de rhum arrangé. Suivi de macération, 12 recettes incluses, carnet de dégustation, rappels intelligents.`,
    url: URL,
    type: "website",
  },
};

export default function RhumArrangePage() {
  return (
    <main
      className="mx-auto max-w-[800px] px-[30px] py-[58px]"
      style={{ color: "var(--color-terminal-black)" }}
    >
      <nav className="mb-[35px]">
        <Link
          href="/"
          className="text-caption uppercase tracking-wider hover:opacity-60"
        >
          ← Maxime Saltet
        </Link>
      </nav>

      <header className="mb-[58px]">
        <p className="text-caption uppercase tracking-wider opacity-60 mb-[15px]">
          iOS · App Store · 2026
        </p>
        <h1 className="font-display text-display-sm">{APP_NAME}</h1>
        <p
          className="mt-[15px] text-body"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          Lancez vos arrangés, suivez vos macérations et notez chaque
          dégustation. Pour les passionnés de rhum arrangé qui veulent
          enfin un outil à la hauteur de leur cave maison.
        </p>
      </header>

      <Section title="Pour qui">
        <p>
          {APP_NAME} est pensée pour celles et ceux qui font macérer du rhum
          chez eux : passionnés de la culture créole, métropolitains adeptes
          du fait-maison, amateurs avancés qui en ont assez des notes
          éparpillées dans Notes Apple, des photos de carnets et des
          captures d&apos;écran perdues. Une app dédiée, sérieuse et
          chaleureuse, qui parle votre langue (agricole blanc, traditionnel
          vieux, ambré, vanille Bourbon, ananas Victoria…).
        </p>
      </Section>

      <Section title="Ce qui est inclus">
        <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
          Ma cave, en un coup d&apos;œil
        </h3>
        <p>
          Chaque bouteille en cours de macération apparaît sous forme de
          carte avec sa photo, son nom, son anneau de progression et le
          nombre de jours restants avant maturité. Plus jamais de bouteille
          oubliée au fond du placard.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          12 recettes traditionnelles incluses
        </h3>
        <p>
          Ananas-Vanille, Banane flambée, Café-Cacao, Gingembre-Citron vert,
          Mangue-Passion, Letchi, Combava-Citronnelle, Cannelle-Orange,
          Pruneau-Armagnac, Pomme-Cannelle de Noël, Curcuma-Poivre, Vanille
          pure (signature 12 mois). Chaque recette propose le rhum suggéré,
          le degré, les quantités, la durée recommandée et un conseil de
          macération. Un tap pour lancer la bouteille.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Carnet de dégustation
        </h3>
        <p>
          Notez chaque dégustation : note sur 20, arômes en bouche,
          commentaires libres. Comparez vos essais entre eux et faites
          évoluer vos recettes au fil des saisons.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Rappels intelligents
        </h3>
        <p>
          Notifications locales pour ne plus rien oublier&nbsp;: secouer la
          bouteille toutes les deux semaines, filtrage recommandé, alerte
          J-7 avant maturité, signal final quand l&apos;arrangé est prêt à
          déguster.
        </p>
      </Section>

      <Section title={`${APP_NAME} Pro`}>
        <p>
          Un achat unique de <strong>4,99&nbsp;€</strong>. Pas
          d&apos;abonnement, pas de surprise. Toutes les futures mises à
          jour incluses.
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>Bouteilles illimitées (la version gratuite est limitée à 3 macérations actives)</li>
          <li>Photos multiples par bouteille</li>
          <li>Partage de recettes via QR code et lien profond</li>
          <li>Export PDF de votre cave (idéal cadeau)</li>
          <li>Statistiques avancées</li>
          <li>Synchronisation iCloud (à venir)</li>
        </ul>
        <p className="mt-[15px]">
          La version gratuite vous permet de démarrer sans engagement et de
          tester l&apos;app sur trois macérations.
        </p>
      </Section>

      <Section title="Confidentialité">
        <p>
          {APP_NAME} fonctionne intégralement sur votre appareil. Aucune
          donnée n&apos;est transmise à un serveur tiers. Pas de pub, pas de
          tracking, pas d&apos;analytics. La synchronisation iCloud (à
          venir) utilisera votre compte Apple personnel.
        </p>
        <p className="mt-[15px]">
          Détails dans la{" "}
          <Link
            href="/RhumArrange/privacy"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </Section>

      <Section title="Mentions">
        <p>
          Application destinée à un public majeur (18&nbsp;ans et plus). Un
          gate d&apos;âge est présenté au premier lancement.{" "}
          <strong>
            L&apos;abus d&apos;alcool est dangereux pour la santé, à
            consommer avec modération.
          </strong>{" "}
          {APP_NAME} ne fait pas la promotion de la consommation
          d&apos;alcool et ne vend ni ne recommande de produit commercial.
        </p>
      </Section>

      <Section title="Liens">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          {/*
          <li>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Télécharger sur l&apos;App Store
            </a>
          </li>
          */}
          <li>
            <Link
              href="/RhumArrange/support"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Support et FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/RhumArrange/privacy"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME}`}
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </Section>

      <footer
        className="mt-[58px] pt-[30px]"
        style={{ borderTop: "1px solid var(--color-terminal-black)" }}
      >
        <p className="text-caption uppercase tracking-wider opacity-60">
          © {new Date().getFullYear()} — {PUBLISHER}
        </p>
      </footer>
      <CrossAppNav currentSlug="RhumArrange" heading="Autres apps de Maxime" />
    </main>
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
    <section className="mb-[35px]">
      <h2 className="font-display text-[20px] mb-[15px]">{title}</h2>
      <div className="text-body" style={{ lineHeight: 1.6 }}>
        {children}
      </div>
    </section>
  );
}
