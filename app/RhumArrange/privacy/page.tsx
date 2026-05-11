import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "RhumArrangé";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "6 mai 2026";
const URL = "https://maximesaltet.com/RhumArrange/privacy";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${APP_NAME}`,
  description: `Politique de confidentialité de l'application iOS ${APP_NAME}. Aucune donnée n'est collectée par l'éditeur — toutes les informations restent sur votre appareil.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Politique de confidentialité — ${APP_NAME}`,
    description: `Confidentialité de l'application ${APP_NAME}. Stockage 100% local, aucune collecte de données.`,
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
          {APP_NAME} fonctionne intégralement sur votre appareil. Aucune donnée
          personnelle (recettes, photos, dégustations, dates) n&apos;est
          transmise à l&apos;éditeur ni à un serveur tiers. L&apos;application
          ne contient ni publicité, ni outil de mesure d&apos;audience, ni
          tracker. L&apos;achat de la version Pro est traité directement par
          Apple via l&apos;App Store.
        </p>
      </Section>

      <Section title="2. Éditeur et responsable du traitement">
        <p>
          Les présentes mentions s&apos;appliquent à l&apos;application mobile{" "}
          <strong>{APP_NAME}</strong> publiée sur l&apos;App Store par{" "}
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
      </Section>

      <Section title="3. Données traitées par l’application">
        <p>
          {APP_NAME} stocke localement, sur votre appareil uniquement, les
          informations que vous saisissez :
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>recettes de rhum arrangé (nom, ingrédients, type de rhum, degré, durée de macération, notes) ;</li>
          <li>dates de mise en macération, de filtrage, d&apos;embouteillage ;</li>
          <li>dégustations (note, arômes, commentaires) ;</li>
          <li>photos que vous ajoutez explicitement à une bouteille ;</li>
          <li>préférences d&apos;application (acceptation du gate 18+, état des notifications).</li>
        </ul>
        <p className="mt-[15px]">
          Ces données ne sont jamais transmises à l&apos;éditeur. Elles restent
          contenues dans l&apos;espace de stockage privé de l&apos;application,
          isolé par iOS.
        </p>
      </Section>

      <Section title="4. Permissions iOS demandées">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <strong>Photos / Caméra</strong> — uniquement lorsque vous choisissez
            d&apos;ajouter une image à une bouteille. La photo est copiée dans
            la base locale de l&apos;application ; elle n&apos;est partagée nulle
            part.
          </li>
          <li>
            <strong>Notifications</strong> — uniquement si vous activez les
            rappels (secouage, alerte J-7, maturité atteinte). Les notifications
            sont planifiées localement par iOS.
          </li>
        </ul>
      </Section>

      <Section title="5. Achats intégrés (RhumArrangé Pro)">
        <p>
          L&apos;achat de la version Pro est un{" "}
          <strong>achat unique non renouvelable</strong> traité par Apple via
          le système StoreKit. {APP_NAME} ne reçoit ni votre identifiant Apple,
          ni vos informations de paiement. Seul un statut technique
          d&apos;éligibilité (achat validé / non validé) est lu sur votre
          appareil pour débloquer les fonctionnalités Pro.
        </p>
        <p className="mt-[15px]">
          Le traitement des paiements est régi par la politique de
          confidentialité d&apos;Apple Inc.
        </p>
      </Section>

      <Section title="6. Aucune analytique, aucun tiers">
        <p>
          L&apos;application n&apos;intègre aucun SDK d&apos;analytics, aucun
          outil de mesure d&apos;audience, aucun service publicitaire et aucun
          réseau social. Elle n&apos;effectue aucune requête réseau hormis
          celles strictement nécessaires au système (vérification d&apos;achats
          via StoreKit).
        </p>
      </Section>

      <Section title="7. Synchronisation iCloud (à venir)">
        <p>
          Une future version de {APP_NAME} Pro pourra proposer une
          synchronisation entre vos appareils Apple via{" "}
          <strong>CloudKit</strong>. Si vous activez cette option, vos données
          seront stockées dans la base privée iCloud de votre compte Apple.
          L&apos;éditeur n&apos;y a aucun accès. Vous pouvez désactiver la
          synchronisation à tout moment depuis les Réglages iOS.
        </p>
      </Section>

      <Section title="8. Conservation et suppression">
        <p>
          Les données restent sur votre appareil aussi longtemps que vous
          conservez l&apos;application. La désinstallation de {APP_NAME}{" "}
          supprime l&apos;intégralité des données locales. Vous pouvez aussi
          supprimer individuellement chaque bouteille et chaque dégustation
          dans l&apos;application.
        </p>
      </Section>

      <Section title="9. Vos droits (RGPD)">
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement, de limitation, de
          portabilité et d&apos;opposition concernant vos données. Comme
          aucune donnée n&apos;est traitée par l&apos;éditeur, l&apos;exercice
          de ces droits s&apos;effectue directement depuis l&apos;application
          (modification ou suppression des bouteilles, des dégustations, des
          photos) ou en désinstallant celle-ci.
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

      <Section title="10. Mineurs">
        <p>
          {APP_NAME} est destinée à un public majeur (18 ans et plus). Un gate
          d&apos;âge est présenté au premier lancement. L&apos;application
          n&apos;est volontairement pas commercialisée auprès des mineurs.
        </p>
      </Section>

      <Section title="11. Modifications">
        <p>
          La présente politique peut être mise à jour pour refléter des
          évolutions de l&apos;application ou de la réglementation. La date de
          dernière mise à jour figure en tête de page. Les modifications
          significatives seront annoncées dans les notes de version sur
          l&apos;App Store.
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
      <CrossAppNav currentSlug="RhumArrange" heading="Autres apps de Maxime" />
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
