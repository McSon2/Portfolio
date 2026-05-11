import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "RhumArrangé";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "6 mai 2026";
const URL = "https://maximesaltet.com/RhumArrange/support";

export const metadata: Metadata = {
  title: `Support — ${APP_NAME}`,
  description: `Page d'assistance de l'application iOS ${APP_NAME}, carnet de macération pour passionnés de rhum arrangé. Contact, FAQ, restauration d'achats, notifications, IAP.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Support — ${APP_NAME}`,
    description: `Assistance et FAQ de l'application ${APP_NAME}.`,
    url: URL,
    type: "article",
  },
};

export default function SupportPage() {
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
        <h1 className="font-display text-display-sm">Support</h1>
        <p className="text-caption uppercase tracking-wider opacity-60 mt-[15px]">
          Dernière mise à jour : {LAST_UPDATED}
        </p>
      </header>

      <Section title="1. Contact">
        <p>
          Pour toute question, suggestion, demande de remboursement ou rapport
          de bug concernant {APP_NAME}, écrivez à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Support%20${APP_NAME}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          . Je réponds personnellement, en général sous 48&nbsp;heures.
        </p>
        <p className="mt-[15px]">
          Pour accélérer le traitement, précisez votre modèle d&apos;iPhone, la
          version d&apos;iOS, la version de {APP_NAME} (visible dans{" "}
          <strong>Réglages &gt; À propos</strong>) et, si possible, une capture
          d&apos;écran.
        </p>
      </Section>

      <Section title="2. Questions fréquentes">
        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment lancer ma première bouteille&nbsp;?
        </h3>
        <p>
          Depuis l&apos;onglet <strong>Ma cave</strong>, tapez le bouton{" "}
          <strong>+</strong> en haut à droite. Vous pouvez partir de zéro
          (recette personnelle) ou choisir une des 12 recettes
          traditionnelles depuis l&apos;onglet <strong>Recettes</strong>.
          Renseignez le nom, le rhum de base, les ingrédients, la date de
          mise en macération et la durée recommandée. La carte apparaît
          immédiatement dans votre cave avec son anneau de progression.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Les rappels (notifications) ne fonctionnent pas, que faire&nbsp;?
        </h3>
        <p>
          Vérifiez d&apos;abord que vous avez accepté les notifications dans
          <strong> Réglages &gt; Notifications &gt; Activer les rappels</strong>.
          Si l&apos;option apparaît grisée, ouvrez les Réglages iOS &gt; {APP_NAME}{" "}
          &gt; <strong>Notifications</strong> et activez « Autoriser les
          notifications ». Les rappels sont planifiés localement par iOS&nbsp;:
          ils restent actifs même si l&apos;app est fermée, à condition que vos
          notifications iPhone ne soient pas globalement désactivées (mode
          Concentration, Ne pas déranger, mode Avion).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment restaurer mes achats sur un nouvel iPhone&nbsp;?
        </h3>
        <p>
          Connectez-vous avec le même identifiant Apple que celui utilisé pour
          l&apos;achat initial, ouvrez {APP_NAME}, allez dans{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong> (ou directement
          depuis l&apos;écran {APP_NAME}&nbsp;Pro). L&apos;achat unique se
          réactive automatiquement, sans frais supplémentaires.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mon achat ne se débloque pas, que faire&nbsp;?
        </h3>
        <p>
          Vérifiez que vous êtes bien connecté avec l&apos;identifiant Apple
          d&apos;origine. Tapez ensuite{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong>. Si le problème
          persiste, fermez complètement l&apos;application (geste vers le haut
          + maintien, puis balayez la carte vers le haut) puis relancez-la.
          Sinon, écrivez-moi avec votre numéro de transaction Apple (visible
          dans l&apos;historique de votre compte App&nbsp;Store).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          L&apos;achat est-il un abonnement&nbsp;?
        </h3>
        <p>
          Non. {APP_NAME}&nbsp;Pro est un{" "}
          <strong>achat unique non renouvelable de 4,99&nbsp;€</strong>,
          débloqué une fois pour toutes. Aucun abonnement, aucun
          renouvellement automatique. Toutes les futures mises à jour sont
          incluses.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Quelle est la différence entre la version gratuite et Pro&nbsp;?
        </h3>
        <p>
          La version gratuite vous permet de gérer jusqu&apos;à{" "}
          <strong>3 macérations actives</strong> et donne accès aux 12
          recettes traditionnelles incluses. {APP_NAME}&nbsp;Pro débloque les
          bouteilles illimitées, les photos multiples par bouteille, le
          partage de recettes par QR code, l&apos;export PDF de la cave et
          les statistiques avancées.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment supprimer une bouteille&nbsp;?
        </h3>
        <p>
          Depuis l&apos;écran de détail de la bouteille, faites défiler vers
          le bas et tapez <strong>Supprimer</strong>. Une confirmation
          apparaît. Cette action est définitive&nbsp;: l&apos;historique des
          dégustations associées est également supprimé.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment ajouter une photo à ma bouteille&nbsp;?
        </h3>
        <p>
          Lors de la création ou de l&apos;édition d&apos;une bouteille,
          tapez la zone photo en haut. Choisissez entre la caméra (prendre
          une photo) ou la galerie (sélectionner une image). La photo est
          copiée dans la base locale de l&apos;application — elle reste sur
          votre iPhone et n&apos;est jamais transmise. Avec {APP_NAME}
          &nbsp;Pro, vous pouvez ajouter plusieurs photos par bouteille.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mes données sont-elles sauvegardées si je désinstalle l&apos;app&nbsp;?
        </h3>
        <p>
          <strong>Sans synchronisation iCloud&nbsp;:</strong> non, la
          désinstallation supprime toutes les données locales (bouteilles,
          dégustations, photos). Si vous voulez les conserver, exportez votre
          cave en PDF avant de désinstaller (fonctionnalité Pro).
        </p>
        <p className="mt-[10px]">
          <strong>Avec {APP_NAME}&nbsp;Pro et iCloud activé (à venir)&nbsp;:</strong>{" "}
          vos données resteront dans votre iCloud privé. En réinstallant
          l&apos;application et en restaurant l&apos;achat, vous récupérerez
          intégralement votre cave.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment exporter ma cave en PDF&nbsp;?
        </h3>
        <p>
          Avec {APP_NAME}&nbsp;Pro, allez dans{" "}
          <strong>Réglages &gt; Exporter en PDF</strong>. L&apos;application
          génère un document élégant listant toutes vos bouteilles, vos
          dégustations et les conseils associés. Idéal à offrir avec une
          bouteille ou à archiver pour vos recettes maison.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Pourquoi un gate d&apos;âge au premier lancement&nbsp;?
        </h3>
        <p>
          {APP_NAME} est destinée à un public majeur (18&nbsp;ans et plus).
          Conformément aux exigences Apple et à la réglementation française
          sur les contenus relatifs à l&apos;alcool, un gate d&apos;âge
          confirme votre majorité avant tout accès au contenu. Aucune donnée
          d&apos;identification n&apos;est collectée — il s&apos;agit
          uniquement d&apos;une confirmation locale stockée sur votre
          appareil.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment demander un remboursement&nbsp;?
        </h3>
        <p>
          Les remboursements sont gérés directement par Apple. Rendez-vous sur{" "}
          <a
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            reportaproblem.apple.com
          </a>
          , connectez-vous avec votre identifiant Apple et sélectionnez
          l&apos;achat concerné. Si Apple refuse votre demande,
          écrivez-moi&nbsp;: nous trouverons une solution.
        </p>
      </Section>

      <Section title="3. Bug ou suggestion">
        <p>
          {APP_NAME} est développée et maintenue par un développeur
          indépendant. Chaque retour est lu et utile. Si vous trouvez un bug,
          si une recette manque à votre culture régionale, ou si vous
          aimeriez voir une fonctionnalité ajoutée, écrivez-moi à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          . Pour les bugs, mentionnez les étapes pour reproduire le problème.
        </p>
      </Section>

      <Section title="4. Liens utiles">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <Link
              href="/RhumArrange"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Page principale {APP_NAME}
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
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Conditions d&apos;utilisation Apple Media Services (EULA)
            </a>
          </li>
          <li>
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Apple — Signaler un problème (remboursement)
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
