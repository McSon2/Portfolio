import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Pawdesk";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const LAST_UPDATED = "12 mai 2026";
const URL = "https://maximesaltet.com/pawdesk/privacy";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${APP_NAME}`,
  description: `Politique de confidentialité de l'application iOS ${APP_NAME}, carnet pro pour toiletteurs canins indépendants. Stockage local + iCloud privé, aucune donnée transmise à l'éditeur.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Politique de confidentialité — ${APP_NAME}`,
    description: `Confidentialité de l'application ${APP_NAME}. Local-first + iCloud privé, aucun analytics, aucune publicité, aucun tracker.`,
    url: URL,
    type: "article",
  },
};

export default function PrivacyPage() {
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

      <header className="mb-[35px]">
        <p className="text-caption uppercase tracking-wider opacity-60 mb-[15px]">
          {APP_NAME} · iOS · App Store
        </p>
        <h1 className="font-display text-display-sm">
          Politique de confidentialité
        </h1>
        <p className="text-caption uppercase tracking-wider opacity-60 mt-[15px]">
          Dernière mise à jour : {LAST_UPDATED}
        </p>
      </header>

      <Section title="1. En résumé">
        <p>
          {APP_NAME} fonctionne intégralement sur votre appareil. Les données
          que vous saisissez (fiches chiens, owners, RDV, vaccins, prestations,
          photos, signatures, transactions) restent sur votre iPhone et votre
          iPad, et — si vous l&apos;activez — dans votre base CloudKit privée.
          Aucune donnée n&apos;est transmise à l&apos;éditeur ni à un serveur
          tiers. L&apos;application ne contient ni publicité, ni outil de
          mesure d&apos;audience, ni tracker. L&apos;abonnement Pro est traité
          directement par Apple via l&apos;App&nbsp;Store.
        </p>
      </Section>

      <Section title="2. Éditeur et responsable du traitement">
        <p>
          Les présentes mentions s&apos;appliquent à l&apos;application mobile{" "}
          <strong>{APP_NAME}</strong> publiée sur l&apos;App&nbsp;Store par{" "}
          <strong>{PUBLISHER}</strong>, développeur indépendant établi en
          France. Pour toute question relative à cette politique ou à
          l&apos;exercice de vos droits, vous pouvez écrire à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p className="mt-[15px]">
          Pour rappel&nbsp;: comme {APP_NAME} est un outil professionnel
          utilisé par un toiletteur dans le cadre de son activité,
          c&apos;est <strong>le toiletteur utilisateur</strong> qui est
          responsable de traitement vis-à-vis de ses clients-propriétaires
          (au sens du RGPD). L&apos;éditeur n&apos;est qu&apos;un fournisseur
          d&apos;outil — il n&apos;accède à aucune donnée client.
        </p>
      </Section>

      <Section title="3. Données traitées par l’application">
        <p>
          {APP_NAME} stocke localement, sur votre appareil uniquement, les
          informations que vous saisissez dans le cadre de votre activité&nbsp;:
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>
            <strong>Fiches chiens</strong>&nbsp;: photo de couverture, photos
            avant/après, race, robe, poids, âge, sexe, comportement, notes
            muselière, allergies, médicaments.
          </li>
          <li>
            <strong>Owners</strong>&nbsp;: nom, téléphone, email, adresse,
            signature de consentement RGPD (PencilKit).
          </li>
          <li>
            <strong>Vaccins</strong>&nbsp;: type, date d&apos;injection, date
            d&apos;expiration. Notifications locales planifiées 30 et
            7&nbsp;jours avant échéance.
          </li>
          <li>
            <strong>Rendez-vous & prestations</strong>&nbsp;: date, heure,
            durée, type de prestation, prix, statut, notes de séance, photo
            après.
          </li>
          <li>
            <strong>Carnet Rebook</strong>&nbsp;: intervalles personnalisés par
            owner, historique des relances.
          </li>
          <li>
            <strong>Route Van</strong>&nbsp;: adresses des RDV du jour
            (utilisées localement par MapKit), ordre optimisé, distance et
            frais kilométriques calculés.
          </li>
          <li>
            <strong>Caisse</strong>&nbsp;: transactions enregistrées (mode de
            paiement, montant, RDV lié), tickets PDF générés localement.
          </li>
          <li>
            <strong>Préférences d&apos;application</strong>&nbsp;: apparence,
            notifications, onboarding, statut d&apos;abonnement technique.
          </li>
        </ul>
        <p className="mt-[15px]">
          Ces données ne sont jamais transmises à l&apos;éditeur. Elles restent
          contenues dans l&apos;espace de stockage privé de l&apos;application,
          isolé par iOS (sandbox), et — le cas échéant — dans votre base
          CloudKit privée.
        </p>
      </Section>

      <Section title="4. Permissions iOS demandées">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <strong>Photos / Caméra</strong> — uniquement lorsque vous
            choisissez d&apos;ajouter une image (couverture chien, photo
            avant/après, photo de séance). La photo est copiée dans la base
            locale de l&apos;application&nbsp;; elle n&apos;est partagée nulle
            part.
          </li>
          <li>
            <strong>Notifications</strong> — uniquement si vous activez les
            rappels (vaccins J-30 / J-7, RDV J-1, suggestion de rebook).
            Les notifications sont planifiées localement par iOS.
          </li>
          <li>
            <strong>Localisation</strong> — uniquement lorsque vous utilisez
            le module Route&nbsp;Van, pour optimiser la tournée du jour via
            MapKit et CoreLocation. La position n&apos;est pas enregistrée ni
            transmise.
          </li>
          <li>
            <strong>Face&nbsp;ID / Touch&nbsp;ID</strong> — uniquement si vous
            activez le verrouillage biométrique sur les fiches chiens (via
            LocalAuthentication). La donnée biométrique reste dans le Secure
            Enclave d&apos;Apple&nbsp;; l&apos;application reçoit uniquement
            un booléen succès / échec.
          </li>
          <li>
            <strong>Apple&nbsp;Pencil / écran tactile</strong> — utilisé
            localement pour faire signer le consentement RGPD owner
            (PencilKit). La signature est stockée comme image dans la fiche
            owner.
          </li>
        </ul>
      </Section>

      <Section title={`5. Abonnement (${APP_NAME} Pro)`}>
        <p>
          {APP_NAME} est une application sur abonnement. Deux plans sont
          proposés (mensuel à 19,99&nbsp;€, annuel à 159,99&nbsp;€) avec un{" "}
          <strong>essai gratuit de 7 jours</strong> offert par Apple
          (introductory offer). Les abonnements sont gérés par Apple via
          StoreKit&nbsp;2.
        </p>
        <p className="mt-[15px]">
          {APP_NAME} ne reçoit ni votre identifiant Apple, ni vos informations
          de paiement. Seul un statut technique d&apos;éligibilité (abonnement
          actif&nbsp;: oui / non) est lu sur votre appareil pour débloquer
          l&apos;application. Le traitement des paiements et le renouvellement
          automatique sont régis par la politique de confidentialité
          d&apos;Apple&nbsp;Inc. et les{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            Conditions d&apos;utilisation Apple Media Services (EULA)
          </a>
          . Vous pouvez résilier à tout moment depuis{" "}
          <strong>Réglages iOS &gt; Apple&nbsp;ID &gt; Abonnements</strong>.
        </p>
      </Section>

      <Section title="6. Aucune analytique, aucun tiers">
        <p>
          L&apos;application n&apos;intègre aucun SDK d&apos;analytics, aucun
          outil de mesure d&apos;audience, aucun service publicitaire et aucun
          réseau social. Elle n&apos;effectue aucune requête réseau hormis
          celles strictement nécessaires au système (vérification
          d&apos;abonnement via StoreKit, synchronisation iCloud via les API
          Apple, tuiles MapKit pour la Route&nbsp;Van).
        </p>
      </Section>

      <Section title="7. Synchronisation iCloud (CloudKit privé)">
        <p>
          Si vous activez la synchronisation entre vos appareils Apple, vos
          données sont stockées dans votre <strong>base CloudKit privée</strong>,
          c&apos;est-à-dire dans l&apos;espace iCloud rattaché à votre
          identifiant Apple. Cette base est chiffrée et accessible uniquement
          par vous — l&apos;éditeur n&apos;y a aucun accès, Apple non plus en
          clair.
        </p>
        <p className="mt-[15px]">
          Vous pouvez désactiver la synchronisation à tout moment depuis les
          Réglages iOS &gt; iCloud &gt; {APP_NAME}. La désactivation
          n&apos;efface pas les données déjà présentes sur l&apos;appareil.
        </p>
      </Section>

      <Section title="8. Consentement RGPD owner">
        <p>
          Pour vos clients propriétaires d&apos;animaux, {APP_NAME} fournit un
          module de consentement signé (PencilKit) couvrant la collecte
          d&apos;informations sanitaires sur le chien et de coordonnées
          owner. En tant qu&apos;utilisateur professionnel, vous êtes
          responsable de la conformité RGPD vis-à-vis de vos clients&nbsp;:
          information claire avant signature, finalité du traitement, droits
          d&apos;accès et de suppression, durée de conservation.
          L&apos;application met l&apos;outil à disposition&nbsp;; son usage
          conforme reste de votre responsabilité.
        </p>
      </Section>

      <Section title="9. Données sanitaires et obligations professionnelles">
        <p>
          Les vaccins et notes médicales saisies ne sont pas transmises à un
          tiers. Elles restent dans votre base locale et — si vous
          l&apos;activez — dans votre CloudKit privé. {APP_NAME} fournit un
          module de suivi des formations obligatoires (ex.&nbsp;: ACACED en
          France)&nbsp;: les dates et rappels sont stockés localement, sans
          envoi à un organisme tiers.
        </p>
      </Section>

      <Section title="10. Conservation et suppression">
        <p>
          Les données restent sur votre appareil aussi longtemps que vous
          conservez l&apos;application. La désinstallation de {APP_NAME}{" "}
          supprime l&apos;intégralité des données locales sur l&apos;appareil
          concerné. Si la synchronisation iCloud est activée, les données
          subsistent dans votre CloudKit privé&nbsp;: vous pouvez les
          supprimer intégralement depuis <strong>Réglages iOS &gt;
          Apple&nbsp;ID &gt; iCloud &gt; Gérer le stockage du compte &gt;{" "}
          {APP_NAME}</strong>.
        </p>
        <p className="mt-[15px]">
          Au sein de l&apos;application, vous pouvez supprimer
          individuellement chaque chien, owner, RDV, vaccin ou transaction.
          La suppression d&apos;une fiche chien supprime également ses photos,
          vaccins et historique de séances.
        </p>
      </Section>

      <Section title="11. Vos droits (RGPD)">
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement, de limitation, de
          portabilité et d&apos;opposition concernant vos données. Comme
          aucune donnée n&apos;est traitée par l&apos;éditeur, l&apos;exercice
          de ces droits s&apos;effectue directement depuis l&apos;application
          (modification ou suppression) ou en désinstallant celle-ci.
        </p>
        <p className="mt-[15px]">
          Pour toute question ou réclamation, vous pouvez écrire à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          ou saisir la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            cnil.fr
          </a>
          ).
        </p>
      </Section>

      <Section title="12. Mineurs">
        <p>
          {APP_NAME} est un outil professionnel destiné aux toiletteurs
          majeurs. L&apos;application n&apos;est volontairement pas
          commercialisée auprès des mineurs. Les fiches chiens et owners que
          vous renseignez concernent vos clients adultes, dans le respect du
          cadre légal applicable à votre activité.
        </p>
      </Section>

      <Section title="13. Modifications">
        <p>
          La présente politique peut être mise à jour pour refléter des
          évolutions de l&apos;application ou de la réglementation. La date de
          dernière mise à jour figure en tête de page. Les modifications
          significatives seront annoncées dans les notes de version sur
          l&apos;App&nbsp;Store.
        </p>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-[35px]">
      <h2 className="font-display text-[20px] mb-[15px]">{title}</h2>
      <div className="text-body" style={{ lineHeight: 1.6 }}>
        {children}
      </div>
    </section>
  );
}
