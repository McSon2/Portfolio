import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "WhiskyVault";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const LAST_UPDATED = "6 mai 2026";
const URL = "https://maximesaltet.com/WhiskyVault/privacy";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${APP_NAME}`,
  description: `Politique de confidentialité de l'application iOS ${APP_NAME}, carnet de dégustation pour collectionneurs de whisky. Aucune donnée n'est collectée par l'éditeur — toutes les informations restent sur votre appareil.`,
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
          personnelle (bouteilles, dégustations, photos, notes, prix) n&apos;est
          transmise à l&apos;éditeur ni à un serveur tiers. L&apos;application
          ne contient ni publicité, ni outil de mesure d&apos;audience, ni
          tracker. L&apos;achat de la version Pro est traité directement par
          Apple via l&apos;App Store. La synchronisation iCloud (option Pro)
          utilise votre compte Apple personnel ; l&apos;éditeur n&apos;y a
          aucun accès.
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
          <li>
            fiches bouteille (distillerie, embouteillage, région, type, âge,
            degré, embouteilleur, fût, prix d&apos;achat, lieu d&apos;achat,
            valeur estimée, statut, niveau restant, notes personnelles) ;
          </li>
          <li>
            dégustations (date, lieu, accompagnants, notes nez / palais /
            finale, score, arômes sélectionnés, indicateur de dégustation à
            l&apos;aveugle) ;
          </li>
          <li>
            photos que vous ajoutez explicitement à une bouteille ou à une
            dégustation depuis votre photothèque ;
          </li>
          <li>
            préférences d&apos;application (système de notation, devise,
            langue, acceptation du gate 18+).
          </li>
        </ul>
        <p className="mt-[15px]">
          Ces données ne sont jamais transmises à l&apos;éditeur. Elles
          restent contenues dans l&apos;espace de stockage privé de
          l&apos;application, isolé par iOS, ou — si vous activez la
          synchronisation Pro — dans la base privée iCloud de votre compte
          Apple.
        </p>
      </Section>

      <Section title="4. Permissions iOS demandées">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <strong>Photos</strong> — uniquement lorsque vous choisissez
            d&apos;ajouter une image à une bouteille ou à une dégustation. La
            photo est copiée dans la base locale de l&apos;application ; elle
            n&apos;est partagée nulle part. Aucun accès à votre photothèque
            entière n&apos;est requis : seule la photo que vous sélectionnez
            via le sélecteur système (PHPicker) est lue par l&apos;application.
          </li>
        </ul>
        <p className="mt-[15px]">
          {APP_NAME} ne demande aucune autre permission : ni localisation, ni
          microphone, ni contacts, ni calendrier, ni notifications, ni
          identifiant publicitaire (IDFA).
        </p>
      </Section>

      <Section title="5. Achats intégrés (WhiskyVault Pro)">
        <p>
          L&apos;achat de la version Pro est un{" "}
          <strong>achat unique non renouvelable</strong> à 9,99 € traité par
          Apple via le système StoreKit 2. {APP_NAME} ne reçoit ni votre
          identifiant Apple, ni vos informations de paiement. Seul un statut
          technique d&apos;éligibilité (achat validé / non validé) est lu sur
          votre appareil pour débloquer les fonctionnalités Pro.
        </p>
        <p className="mt-[15px]">
          Le traitement des paiements est régi par la politique de
          confidentialité d&apos;Apple Inc. et par les{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            Conditions d&apos;utilisation Apple Media Services
          </a>
          .
        </p>
      </Section>

      <Section title="6. Aucune analytique, aucun tiers">
        <p>
          L&apos;application n&apos;intègre aucun SDK d&apos;analytics, aucun
          outil de mesure d&apos;audience, aucun rapporteur de crash tiers,
          aucun service publicitaire et aucun réseau social. Elle n&apos;effectue
          aucune requête réseau hormis celles strictement nécessaires au
          système (vérification des achats via StoreKit, synchronisation
          iCloud si activée).
        </p>
      </Section>

      <Section title="7. Synchronisation iCloud (option Pro)">
        <p>
          Si vous activez la synchronisation iCloud, vos bouteilles et
          dégustations sont stockées dans la base privée iCloud
          (<strong>CloudKit</strong>) de votre compte Apple. Cette base est
          gérée par Apple et chiffrée selon les standards Apple.
          L&apos;éditeur n&apos;a aucun accès aux données qui y sont stockées
          et ne peut pas les lire. Vous pouvez désactiver la synchronisation à
          tout moment depuis les Réglages iOS &gt; identifiant Apple &gt;
          iCloud &gt; {APP_NAME}.
        </p>
      </Section>

      <Section title="8. Conservation et suppression">
        <p>
          Les données restent sur votre appareil aussi longtemps que vous
          conservez l&apos;application. La désinstallation de {APP_NAME}{" "}
          supprime l&apos;intégralité des données locales. Vous pouvez aussi
          supprimer individuellement chaque bouteille et chaque dégustation
          dans l&apos;application. Les données synchronisées via iCloud
          peuvent être supprimées depuis Réglages iOS &gt; identifiant Apple
          &gt; iCloud &gt; Gérer le stockage.
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
          photos), via l&apos;export PDF (Pro) pour la portabilité, ou en
          désinstallant celle-ci.
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
          {APP_NAME} est destinée à un public majeur (18 ans et plus en France,
          ou âge légal de consommation d&apos;alcool dans votre pays). Un gate
          d&apos;âge est présenté au premier lancement. L&apos;application est
          classée 17+ sur l&apos;App Store et n&apos;est volontairement pas
          commercialisée auprès des mineurs.
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
