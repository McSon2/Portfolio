import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "FlashDesk";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/FlashDesk";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

export const metadata: Metadata = {
  title: `${APP_NAME} — Carnet de bord pro pour tatoueurs indépendants (iOS)`,
  description: `${APP_NAME} est l'application iOS dédiée aux tatoueurs indépendants : catalogue de flashs, fiches clients RGPD, agenda RDV, devis et traçabilité des encres conforme ARS. Disponible sur l'App Store.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${APP_NAME} — Carnet de bord pro pour tatoueurs indépendants (iOS)`,
    description: `Application iOS pour tatoueurs solo : flashs, clients, agenda, devis, traçabilité encres ARS. Sans abonnement délirant.`,
    url: URL,
    type: "website",
  },
};

export default function FlashDeskPage() {
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
          iOS · iPad · App Store · 2026
        </p>
        <h1 className="font-display text-display-sm">{APP_NAME}</h1>
        <p
          className="mt-[15px] text-body"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          Le carnet de bord pro pour tatoueurs indépendants. Catalogue de
          flashs, fiches clients, agenda RDV, devis et traçabilité encres
          conforme à l&apos;Art. R.1311-4 du Code de la santé publique. Une app
          iOS native, premium, à moitié prix des SaaS verticaux.
        </p>
      </header>

      <Section title="Pour qui">
        <p>
          {APP_NAME} est pensée pour les tatoueurs et tatoueuses indépendant·es
          qui jonglent aujourd&apos;hui entre Instagram DM, Procreate, stories
          Insta, Google Calendar et cahier papier. Une app dédiée, sérieuse,
          iPad-first, qui parle votre métier : flashs, sessions, acomptes,
          cicatrisation, encres, ARS. Aucun studio multi-artistes, aucune
          réservation client-side — vous gardez la main sur Instagram, on
          s&apos;occupe du back-office.
        </p>
      </Section>

      <Section title="Ce qui est inclus">
        <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
          Flash Board
        </h3>
        <p>
          Grille visuelle façon Pinterest pour vos flashs disponibles. Photo,
          titre, prix, statut <em>dispo / réservé / tatoué</em>, filtre par
          style (traditional, fineline, blackwork, dotwork, color, japonais).
          Import direct depuis Photos Apple, lien partageable à coller en DM
          Instagram en un tap. Grille 6 colonnes sur iPad.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Fiches clients RGPD
        </h3>
        <p>
          Identité, consentement éclairé signé au PencilKit, photos avant/après
          par zone du corps, historique des séances (durée, montant, soin
          appliqué), notes médicales (allergies, peau sensible). Auto-prompts
          de suivi cicatrisation à J+7 et J+30, avec photo upload optionnelle.
          Verrouillage Face&nbsp;ID sur la fiche client.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Agenda RDV
        </h3>
        <p>
          Vue calendrier semaine et mois. Chaque RDV est lié à un client, un
          flash, une zone, une taille, une durée estimée. Tracker
          d&apos;acompte (encaissé / dû / montant), rappel client J-2 via{" "}
          <code>sms://</code> ou email, blocs d&apos;indispo (vacances, jours
          off). Synchronisation iCloud Calendar en lecture seule.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Devis & projets
        </h3>
        <p>
          Pipeline de prospects en attente avec référence visuelle (inspi
          client), zone, taille en cm, style, budget estimé. Statut{" "}
          <em>prospect / confirmé / réalisé / annulé</em>. Conversion en RDV en
          un tap quand le client valide.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Traçabilité encres (ARS / Art. R.1311-4 CSP)
        </h3>
        <p>
          Inventaire complet des flacons : marque, référence, numéro de lot,
          date d&apos;ouverture, date limite d&apos;utilisation. Liaison
          automatique encre ↔ séance directement depuis la fiche client. Export
          PDF du registre prêt à présenter lors d&apos;un contrôle ARS — la
          conformité que personne dans le secteur ne tient à jour, livrée
          gratuitement avec votre abonnement.
        </p>
      </Section>

      <Section title="Pourquoi FlashDesk plutôt que les SaaS du marché">
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>
            <strong>Native iOS / iPad-first.</strong> Pas un web-wrapper. Vos
            gestes Procreate fonctionnent, l&apos;import photo est instantané,
            les performances suivent.
          </li>
          <li>
            <strong>Moitié prix des concurrents FR.</strong> 14,99&nbsp;€/mois
            contre 29&nbsp;€ chez InkFlow et Tat&apos;s It. Quart du prix de
            DaySmart aux US.
          </li>
          <li>
            <strong>Compliance ARS intégrée.</strong> Le registre encres est
            inclus, pas un add-on à 19&nbsp;€/mois.
          </li>
          <li>
            <strong>Local-first + iCloud privé.</strong> Aucun backend tiers,
            aucune fuite de données clients. Sync iPad ↔ iPhone via votre
            CloudKit perso.
          </li>
          <li>
            <strong>Indé qui code pour des indé.</strong> Pas une boîte SaaS
            avec 12 salariés à payer. Roadmap dictée par vous, pas par un fonds
            d&apos;investissement.
          </li>
        </ul>
      </Section>

      <Section title={`${APP_NAME} Pro — Abonnement`}>
        <p>
          {APP_NAME} fonctionne sur abonnement, avec 7 jours d&apos;essai
          gratuit offerts par Apple (intro offer). Annulable à tout moment
          depuis vos Réglages App&nbsp;Store, sans email ni démarche.
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>
            <strong>Mensuel — 14,99&nbsp;€/mois.</strong> Souplesse maximale.
          </li>
          <li>
            <strong>Annuel — 119,99&nbsp;€/an</strong> (soit 9,99&nbsp;€/mois,
            ≈ -33&nbsp;%, 4 mois offerts). Pour celles et ceux qui ont déjà
            adopté l&apos;outil.
          </li>
        </ul>
        <p className="mt-[15px]">
          Toutes les fonctionnalités sont incluses dans les deux plans : flashs
          illimités, clients illimités, agenda complet, devis, traçabilité
          encres, exports PDF. Aucune fonctionnalité retenue pour vendre un
          tier supérieur. Pas de lifetime — décision produit assumée : on
          construit un outil métier durable.
        </p>
      </Section>

      <Section title="Confidentialité">
        <p>
          {APP_NAME} stocke vos données localement (SwiftData) sur votre
          iPhone et votre iPad. La synchronisation passe par votre CloudKit
          privé : l&apos;éditeur n&apos;y a aucun accès. Aucun SDK
          d&apos;analytics, aucune publicité, aucun tracker. Les paiements sont
          traités par Apple via StoreKit&nbsp;2.
        </p>
        <p className="mt-[15px]">
          Détails dans la{" "}
          <Link
            href="/FlashDesk/privacy"
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
              href="/FlashDesk/support"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Support et FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/FlashDesk/privacy"
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
      <CrossAppNav currentSlug="FlashDesk" heading="Autres apps de Maxime" />
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
