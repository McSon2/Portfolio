import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Reste";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "20 septembre 2026";
const URL = "https://maximesaltet.com/reste/privacy";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${APP_NAME}`,
  description: `Politique de confidentialité de l'application iOS ${APP_NAME}, suivi de dépenses et pointage bancaire. Aucune donnée n'est collectée par l'éditeur, aucune connexion à votre banque : vos écritures restent sur votre appareil et dans votre iCloud privé.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Politique de confidentialité — ${APP_NAME}`,
    description: `Confidentialité de l'application ${APP_NAME}. Aucune collecte, aucune connexion bancaire, stockage local et iCloud privé.`,
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
          {APP_NAME} fonctionne sur votre appareil et dans votre iCloud
          personnel. Aucune donnée financière (montants, catégories, libellés,
          soldes, relevés) n&apos;est transmise à l&apos;éditeur ni à un
          serveur tiers. L&apos;application{" "}
          <strong>ne se connecte à aucune banque</strong> et ne demande jamais
          vos identifiants bancaires : le rapprochement s&apos;effectue à
          partir d&apos;un fichier de relevé que vous exportez vous-même et que
          vous ouvrez dans l&apos;application. Aucune publicité, aucun outil de
          mesure d&apos;audience, aucun traceur, aucun compte à créer.
        </p>
      </Section>

      <Section title="2. Éditeur et responsable du traitement">
        <p>
          Les présentes mentions s&apos;appliquent à l&apos;application mobile{" "}
          <strong>{APP_NAME}</strong> publiée sur l&apos;App Store par{" "}
          <strong>{PUBLISHER}</strong>, développeur indépendant établi en
          France. Pour toute question relative à cette politique ou à
          l&apos;exercice de vos droits :{" "}
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
          {APP_NAME} enregistre uniquement ce que vous y saisissez ou importez :
        </p>
        <ul className="list-disc pl-[20px] mt-[15px] space-y-[8px]">
          <li>
            écritures (montant, date, libellé, catégorie, note, auteur de la
            saisie, état de pointage) ;
          </li>
          <li>
            règles de dépenses récurrentes (libellé, montant, périodicité, jour
            d&apos;échéance) ;
          </li>
          <li>
            soldes réels que vous constatez vous-même et leur date ;
          </li>
          <li>
            lignes de relevé issues des fichiers que vous importez (date,
            montant, libellé, référence, type d&apos;opération, catégorie
            fournie par la banque) ;
          </li>
          <li>
            catégories, membres du compte partagé et préférences
            d&apos;affichage.
          </li>
        </ul>
        <p className="mt-[15px]">
          Ces données ne sont jamais transmises à l&apos;éditeur. Elles restent
          dans l&apos;espace de stockage privé de l&apos;application, isolé par
          iOS, et — pour le compte partagé — dans la base iCloud privée de
          votre compte Apple.
        </p>
      </Section>

      <Section title="4. Import de relevés bancaires">
        <p>
          L&apos;import est <strong>local et manuel</strong>. Vous sélectionnez
          un fichier (CSV ou OFX) via le sélecteur de fichiers du système ;
          l&apos;application le lit sur l&apos;appareil pour en extraire les
          lignes d&apos;opération. Le fichier n&apos;est envoyé nulle part,
          n&apos;est pas conservé en dehors de l&apos;application, et aucune
          requête réseau n&apos;est déclenchée par l&apos;import.
        </p>
        <p className="mt-[15px]">
          {APP_NAME} n&apos;utilise aucun agrégateur bancaire, aucune API
          d&apos;open banking (DSP2), et n&apos;a donc accès à aucun de vos
          comptes.
        </p>
      </Section>

      <Section title="5. Compte partagé et synchronisation iCloud">
        <p>
          La synchronisation et le partage à deux reposent sur{" "}
          <strong>CloudKit</strong>, le service iCloud d&apos;Apple. Vos
          données sont stockées dans la base privée de votre compte Apple ; le
          partage se fait au moyen d&apos;un lien d&apos;invitation Apple que
          vous envoyez à la personne de votre choix, qui accède alors à ce seul
          compte joint. L&apos;éditeur n&apos;a aucun accès à ces données et ne
          peut pas les lire. La personne invitée voit les écritures du compte
          partagé et le nom d&apos;affichage que vous avez renseigné ; vous
          pouvez révoquer son accès à tout moment depuis l&apos;application.
        </p>
        <p className="mt-[15px]">
          La synchronisation peut être désactivée depuis Réglages iOS &gt;
          identifiant Apple &gt; iCloud &gt; {APP_NAME}.
        </p>
      </Section>

      <Section title="6. Aucune analytique, aucun tiers">
        <p>
          L&apos;application n&apos;intègre aucun SDK d&apos;analytics, aucun
          outil de mesure d&apos;audience, aucun rapporteur de crash tiers,
          aucun service publicitaire, aucun réseau social. Aucun identifiant
          publicitaire (IDFA) n&apos;est lu, et aucune autorisation de suivi
          (App Tracking Transparency) n&apos;est demandée, car aucun suivi
          n&apos;a lieu.
        </p>
      </Section>

      <Section title="7. Permissions iOS demandées">
        <p>
          {APP_NAME} ne demande ni localisation, ni microphone, ni caméra, ni
          contacts, ni calendrier, ni photothèque. L&apos;accès à un fichier de
          relevé se fait exclusivement via le sélecteur système, qui
          n&apos;accorde l&apos;accès qu&apos;au fichier que vous désignez.
        </p>
      </Section>

      <Section title="8. Conservation et suppression">
        <p>
          Les données restent disponibles aussi longtemps que vous conservez
          l&apos;application. Chaque écriture, règle récurrente, import et
          catégorie peut être supprimé individuellement depuis
          l&apos;application, et un import peut être annulé en bloc. La
          désinstallation supprime les données locales ; les données
          synchronisées se suppriment depuis Réglages iOS &gt; identifiant
          Apple &gt; iCloud &gt; Gérer le stockage.
        </p>
      </Section>

      <Section title="9. Vos droits (RGPD)">
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
          de rectification, d&apos;effacement, de limitation, de portabilité et
          d&apos;opposition. Comme aucune donnée n&apos;est traitée par
          l&apos;éditeur, l&apos;exercice de ces droits s&apos;effectue
          directement dans l&apos;application (modification, suppression,
          export CSV pour la portabilité) ou en la désinstallant.
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
          {APP_NAME} est un outil de gestion budgétaire familiale sans contenu
          réservé aux adultes. Elle ne cible pas les enfants et ne collecte
          aucune donnée permettant de déterminer l&apos;âge de ses
          utilisateurs.
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
      <CrossAppNav currentSlug="reste" heading="Autres apps de Maxime" />
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
    <section className="mb-[35px] border-t border-black pt-[15px]">
      <h2 className="font-display text-caption uppercase tracking-wider mb-[15px]">
        {title}
      </h2>
      <div className="text-body space-y-[15px] leading-relaxed">{children}</div>
    </section>
  );
}
