import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "WhiskyVault";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const URL = "https://maximesaltet.com/WhiskyVault";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

export const metadata: Metadata = {
  title: `${APP_NAME} — Cave & carnet de dégustation iOS`,
  description: `${APP_NAME} est l'application iOS premium pour les amateurs et collectionneurs de whisky. Carnet de dégustation, gestion de cave, valorisation et statistiques. Disponible sur l'App Store.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${APP_NAME} — Cave & carnet de dégustation iOS`,
    description: `Application iOS premium pour amateurs et collectionneurs de whisky. Cave, carnet de dégustation, valorisation, statistiques.`,
    url: URL,
    type: "website",
  },
};

export default function WhiskyVaultPage() {
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
          Une cave digne de votre passion. Carnet de dégustation, gestion de
          collection, valorisation et statistiques — pour les amateurs et
          collectionneurs sérieux.
        </p>
      </header>

      <Section title="Pour qui">
        <p>
          {APP_NAME} est pensée pour les amateurs avancés et les
          collectionneurs de whisky&nbsp;: 10 bouteilles ou 500, dégustations
          en clubs ou en solo, achats opportunistes ou stratégie de
          valorisation. L&apos;app respecte le sérieux d&apos;un hobby qui
          coûte cher et mérite un outil à la hauteur, pas un Excel approximatif
          ni une app freemium gavée de pubs.
        </p>
      </Section>

      <Section title="Ce qui est inclus">
        <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
          Votre cave, organisée
        </h3>
        <p>
          Recensez chaque bouteille — distillerie, embouteilleur, âge, taux
          d&apos;alcool, région, prix d&apos;achat. Suivez le statut (scellée,
          ouverte, terminée) et le niveau restant. Filtrez par origine, âge ou
          score, retrouvez en un instant ce que vous cherchez.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Un vrai carnet de dégustation
        </h3>
        <p>
          Notez chaque dégustation comme un pro&nbsp;: nez, palais, finale,
          score sur 100 ou 5 étoiles. Datez l&apos;occasion, ajoutez le lieu,
          marquez les dégustations à l&apos;aveugle. Historique chronologique
          consultable d&apos;un coup d&apos;œil.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Valorisation de collection
        </h3>
        <p>
          Suivez la valeur estimée de votre cave en temps réel. Comparez prix
          d&apos;achat et estimation actuelle, visualisez vos plus-values.
          Conçu pour les collectionneurs qui prennent leur cave au sérieux.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Statistiques qui ont du sens
        </h3>
        <p>
          Répartition par région, score moyen, cadence de dégustation, top
          distilleries. Comprenez votre palais, vos préférences, vos
          habitudes — joliment visualisés.
        </p>
      </Section>

      <Section title={`${APP_NAME} Pro`}>
        <p>
          Un achat unique de <strong>9,99&nbsp;€</strong>. Pas
          d&apos;abonnement, pas de surprise. Toutes les futures mises à jour
          incluses.
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>Bouteilles et dégustations illimitées</li>
          <li>Photos multiples par bouteille</li>
          <li>Synchronisation iCloud entre tous vos appareils</li>
          <li>Export PDF de votre cave</li>
          <li>Valorisation et plus-values</li>
          <li>Statistiques avancées</li>
        </ul>
        <p className="mt-[15px]">
          La version gratuite vous permet de démarrer sans engagement (10
          bouteilles et 10 dégustations).
        </p>
      </Section>

      <Section title="Disponible en">
        <p>
          Français, English, Deutsch — multi-devise (EUR, USD, GBP, CHF, CAD,
          AUD, JPY).
        </p>
      </Section>

      <Section title="Confidentialité">
        <p>
          {APP_NAME} fonctionne intégralement sur votre appareil. Aucune donnée
          n&apos;est transmise à un serveur tiers. Pas de pub, pas de tracking,
          pas d&apos;analytics. La synchronisation iCloud (Pro) utilise votre
          compte Apple personnel.
        </p>
        <p className="mt-[15px]">
          Détails dans la{" "}
          <Link
            href="/WhiskyVault/privacy"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            politique de confidentialité
          </Link>
          .
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
              href="/WhiskyVault/support"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Support et FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/WhiskyVault/privacy"
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
