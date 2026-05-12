import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Pawdesk";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const URL = "https://maximesaltet.com/pawdesk";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

export const metadata: Metadata = {
  title: `${APP_NAME} — Carnet pro pour toiletteurs canins indépendants (iOS)`,
  description: `${APP_NAME} est l'application iOS dédiée aux toiletteurs canins indépendants : fiches chiens, RDV récurrents, rappels vaccins, route van optimisée et caisse intégrée. Conçue pour le van mobile et le salon solo.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${APP_NAME} — Carnet pro pour toiletteurs canins indépendants (iOS)`,
    description: `Application iOS pour toiletteurs solo : chiens, RDV, vaccins, route van, caisse. -75 % vs MoeGo, -43 % vs Woof.`,
    url: URL,
    type: "website",
  },
};

export default function PawdeskPage() {
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
          Le carnet pro du toiletteur canin indépendant. Fiches chiens, RDV
          récurrents, rappels vaccins automatiques, route van optimisée et
          caisse intégrée — pensé pour le van mobile comme pour le salon solo,
          au quart du prix des SaaS US.
        </p>
      </header>

      <Section title="Pour qui">
        <p>
          {APP_NAME} est conçue pour les toiletteurs et toiletteuses
          indépendant·es qui gèrent aujourd&apos;hui leur activité au cahier
          papier, via Excel ou en WhatsApp. Van aménagé en tournée ou salon
          solo, 30 à 80 RDV par semaine, formation ACACED, comptabilité
          d&apos;auto-entrepreneur&nbsp;: une app dédiée à votre métier, plutôt
          qu&apos;un outil généraliste mal adapté. Aucun multi-salon, aucun
          gestionnaire d&apos;équipe — la v1 est pensée pour le solo.
        </p>
      </Section>

      <Section title="Ce qui est inclus">
        <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
          Today View
        </h3>
        <p>
          Vue planning du jour à l&apos;ouverture de l&apos;app. Couloir
          horaire avec chaque RDV (nom du chien, race, owner, statut
          <em> à venir / en cours / terminé</em>), stats du jour (nombre de
          chiens, CA cumulé), encaissement direct après statut{" "}
          <em>terminé</em>. La journée tient dans un seul écran.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Fiche chien
        </h3>
        <p>
          Profil complet et durable du chien&nbsp;: photo de couverture,
          galerie avant/après par séance, race, robe, poids, âge, sexe.
          Owner avec coordonnées et consentement RGPD signé (PencilKit).
          Vaccins avec dates d&apos;expiration et alertes 30&nbsp;jours +
          7&nbsp;jours avant échéance, allergies, médicaments, comportement
          (calme / anxieux / mordeur), notes muselière. Historique des séances
          complet&nbsp;: date, prestation, durée, montant, photo après.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Carnet Rebook
        </h3>
        <p>
          La liste des chiens à rebook (toilettage récurrent toutes les
          6-8&nbsp;semaines), basée sur le dernier RDV et l&apos;intervalle
          propre à chaque owner. Un tap pour envoyer un SMS pré-rempli au
          propriétaire, un autre pour créer le RDV proposé. La relance
          devient un geste, pas un projet du dimanche soir.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Rappels vaccins automatiques
        </h3>
        <p>
          Chaque vaccin enregistré déclenche une notification locale 30 jours
          puis 7 jours avant expiration. Le toiletteur prévient l&apos;owner,
          documente la mise à jour, et conserve l&apos;historique sanitaire
          dans la fiche — un gain de confiance client mesurable, sans pile
          de relances à tenir.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Route Van (Premium)
        </h3>
        <p>
          Pour les toiletteurs mobiles&nbsp;: les RDV du jour affichés sur
          MapKit, ordre optimisé par TSP simplifié ou par drag manuel, ouverture
          GPS Apple Maps ou Waze en un tap. Les frais kilométriques sont
          calculés automatiquement (déduction fiscale auto-entrepreneur FR)
          et exportables en PDF mensuel pour le comptable.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Caisse intégrée
        </h3>
        <p>
          Encaissement direct sur RDV terminé&nbsp;: montant pré-rempli depuis
          la prestation, mode de paiement (espèces, virement, chèque, et plus
          tard Tap to Pay une fois l&apos;entitlement Apple obtenu). Génération
          d&apos;un ticket électronique envoyé par SMS ou email au client.
          Stats mensuelles CA / mode de paiement / top clients, export PDF
          mensuel pour la compta.
        </p>
      </Section>

      <Section title={`Pourquoi ${APP_NAME} plutôt que les SaaS du marché`}>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>
            <strong>Native iOS / iPad-first.</strong> Pas un web-wrapper. Une
            app pensée pour le téléphone qui suit le toiletteur dans le van,
            avec l&apos;iPad au salon en miroir.
          </li>
          <li>
            <strong>-75 % vs MoeGo (US, $79+/mo)</strong> et{" "}
            <strong>-43 % vs Woof Gestion (FR, 35&nbsp;€/mo)</strong> — la
            même rigueur outil métier, à un prix accessible aux indépendants.
          </li>
          <li>
            <strong>Premier outil iOS natif francophone</strong> sur le
            créneau&nbsp;: toutes les solutions FR existantes sont web-only ou
            en pré-lancement.
          </li>
          <li>
            <strong>RGPD-natif.</strong> Les données chiens incluent les
            coordonnées owner — donnée personnelle UE. Consentement signé,
            export et suppression intégrés.
          </li>
          <li>
            <strong>Local-first + iCloud privé.</strong> Aucun backend tiers,
            aucune fuite. Sync iPhone ↔ iPad via votre CloudKit perso.
          </li>
          <li>
            <strong>Conformité ACACED suivie.</strong> Module formation +
            rappel renouvellement, parce qu&apos;une obligation pro mérite
            mieux qu&apos;un Post-it.
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
            <strong>Mensuel — 19,99&nbsp;€/mois.</strong> Souplesse maximale.
          </li>
          <li>
            <strong>Annuel — 159,99&nbsp;€/an</strong> (soit 13,33&nbsp;€/mois,
            ≈ -33&nbsp;%, 4 mois offerts). Pour celles et ceux qui ont déjà
            adopté l&apos;outil.
          </li>
        </ul>
        <p className="mt-[15px]">
          Les deux plans débloquent l&apos;intégralité de {APP_NAME}&nbsp;:
          chiens illimités, RDV illimités, Carnet Rebook, rappels vaccins,
          Route Van, caisse, exports PDF. Pas de palier supérieur masqué,
          pas de lifetime — un outil métier qui doit évoluer (Tap to Pay,
          obligations sanitaires, mises à jour iOS) ne peut pas se financer
          en achat unique.
        </p>
      </Section>

      <Section title="Confidentialité">
        <p>
          {APP_NAME} stocke vos données localement (SwiftData) sur votre
          iPhone et votre iPad. La synchronisation passe par votre CloudKit
          privé&nbsp;: l&apos;éditeur n&apos;y a aucun accès. Aucun SDK
          d&apos;analytics, aucune publicité, aucun tracker. Les paiements
          sont traités par Apple via StoreKit&nbsp;2.
        </p>
        <p className="mt-[15px]">
          Détails dans la{" "}
          <Link
            href="/pawdesk/privacy"
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
              href="/pawdesk/support"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Support et FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/pawdesk/privacy"
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
      <CrossAppNav currentSlug="pawdesk" heading="Autres apps de Maxime" />
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
