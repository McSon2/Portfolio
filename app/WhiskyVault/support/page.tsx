import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "WhiskyVault";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@hotmail.fr";
const LAST_UPDATED = "6 mai 2026";
const URL = "https://maximesaltet.com/WhiskyVault/support";

export const metadata: Metadata = {
  title: `Support — ${APP_NAME}`,
  description: `Page d'assistance de l'application iOS ${APP_NAME}, carnet de dégustation pour collectionneurs de whisky. Contact, FAQ, restauration d'achats et synchronisation iCloud.`,
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
          version d&apos;iOS, la version de {APP_NAME} (visible dans Réglages
          iOS &gt; {APP_NAME}) et, si possible, une capture d&apos;écran.
        </p>
      </Section>

      <Section title="2. Questions fréquentes">
        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment restaurer mes achats sur un nouvel iPhone&nbsp;?
        </h3>
        <p>
          Connectez-vous avec le même identifiant Apple que celui utilisé pour
          l&apos;achat initial, ouvrez {APP_NAME}, allez dans{" "}
          <strong>Réglages &gt; Restaurer les achats</strong> (ou directement
          depuis l&apos;écran {APP_NAME}&nbsp;Pro). L&apos;achat unique se
          réactive automatiquement, sans frais supplémentaires.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mon achat ne se débloque pas, que faire&nbsp;?
        </h3>
        <p>
          Vérifiez que vous êtes bien connecté avec l&apos;identifiant Apple
          d&apos;origine. Tapez ensuite{" "}
          <strong>Réglages &gt; Restaurer les achats</strong>. Si le problème
          persiste, fermez complètement l&apos;application (double-tap sur le
          bouton Home ou geste de fermeture) puis relancez-la. Sinon,
          écrivez-moi avec votre numéro de transaction Apple (visible dans
          l&apos;historique de votre compte App&nbsp;Store).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment activer la synchronisation iCloud&nbsp;?
        </h3>
        <p>
          La synchronisation iCloud est incluse dans {APP_NAME}&nbsp;Pro et
          s&apos;active automatiquement après l&apos;achat, à condition que :
        </p>
        <ul className="list-disc pl-[20px] mt-[10px] space-y-[6px]">
          <li>vous soyez connecté à un identifiant Apple sur votre appareil ;</li>
          <li>iCloud Drive soit activé (Réglages iOS &gt; identifiant Apple &gt; iCloud) ;</li>
          <li>{APP_NAME} soit autorisé à utiliser iCloud (même menu).</li>
        </ul>
        <p className="mt-[15px]">
          La première synchronisation peut prendre quelques minutes selon la
          taille de votre cave.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment exporter ma cave en PDF&nbsp;?
        </h3>
        <p>
          Avec {APP_NAME}&nbsp;Pro, allez dans{" "}
          <strong>Réglages &gt; Exporter en PDF</strong>. L&apos;application
          génère un document élégant listant toutes vos bouteilles, vos
          dégustations et la valorisation de votre collection. Vous pouvez
          ensuite l&apos;envoyer par mail, AirDrop, Notes ou n&apos;importe
          quelle app de partage.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Puis-je importer une liste depuis Excel ou un autre app&nbsp;?
        </h3>
        <p>
          Oui : {APP_NAME} accepte l&apos;import de fichiers CSV depuis{" "}
          <strong>Réglages &gt; Importer un CSV</strong>. Le format attendu est
          documenté dans l&apos;app au moment de l&apos;import (en-têtes
          minimum&nbsp;: distillerie, nom, âge, degré, statut). Si vous
          rencontrez un souci, envoyez-moi votre fichier, je vous aide à le
          formater.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mes données sont-elles sauvegardées si je désinstalle l&apos;app&nbsp;?
        </h3>
        <p>
          <strong>Sans synchronisation iCloud&nbsp;:</strong> non, la
          désinstallation supprime toutes les données locales. Pensez à
          exporter votre cave en PDF avant si vous voulez la conserver.
        </p>
        <p className="mt-[10px]">
          <strong>Avec {APP_NAME}&nbsp;Pro et iCloud activé&nbsp;:</strong> vos
          données restent dans votre iCloud privé. En réinstallant
          l&apos;application et en restaurant l&apos;achat, vous récupérez
          intégralement votre cave.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          L&apos;achat est-il un abonnement&nbsp;?
        </h3>
        <p>
          Non. {APP_NAME}&nbsp;Pro est un{" "}
          <strong>achat unique de 9,99&nbsp;€</strong>, débloqué une fois pour
          toutes. Aucun abonnement, aucun renouvellement automatique. Toutes
          les futures mises à jour sont incluses.
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

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          L&apos;app est disponible en quelles langues&nbsp;?
        </h3>
        <p>
          {APP_NAME} est entièrement traduite en français, anglais et allemand.
          Le choix se fait depuis{" "}
          <strong>Réglages &gt; Langue</strong> (ou suit la langue système par
          défaut).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Et les autres devises&nbsp;?
        </h3>
        <p>
          La devise affichée pour la valorisation se règle dans{" "}
          <strong>Réglages &gt; Devise</strong>. EUR, USD, GBP, CHF, CAD, AUD
          et JPY sont disponibles.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Le système de notation peut-il être changé&nbsp;?
        </h3>
        <p>
          Oui. Dans <strong>Réglages &gt; Système de notation</strong>, vous
          pouvez basculer entre une notation sur 100 (style Robert Parker /
          Whisky Advocate) ou sur 5 étoiles. Le changement est rétroactif sur
          l&apos;ensemble de vos dégustations.
        </p>
      </Section>

      <Section title="3. Bug ou suggestion">
        <p>
          {APP_NAME} est développée et maintenue par un développeur
          indépendant. Chaque retour est lu et utile. Si vous trouvez un bug ou
          souhaitez voir une fonctionnalité ajoutée, écrivez-moi à{" "}
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
              href="/WhiskyVault/privacy"
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
