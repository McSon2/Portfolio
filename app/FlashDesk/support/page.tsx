import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "FlashDesk";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "11 mai 2026";
const URL = "https://maximesaltet.com/FlashDesk/support";

export const metadata: Metadata = {
  title: `Support — ${APP_NAME}`,
  description: `Page d'assistance de l'application iOS ${APP_NAME}, carnet de bord pour tatoueurs indépendants. Contact, FAQ, abonnement, restauration d'achats, ARS, iCloud.`,
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
          . Je réponds personnellement, en général sous 48&nbsp;heures
          ouvrées.
        </p>
        <p className="mt-[15px]">
          Pour accélérer le traitement, précisez votre modèle d&apos;iPhone ou
          d&apos;iPad, la version d&apos;iOS / iPadOS, la version de{" "}
          {APP_NAME} (visible dans{" "}
          <strong>Réglages &gt; À propos</strong>) et, si possible, une capture
          d&apos;écran.
        </p>
      </Section>

      <Section title="2. Questions fréquentes">
        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment ajouter mon premier flash&nbsp;?
        </h3>
        <p>
          Depuis l&apos;onglet <strong>Flashs</strong>, tapez le bouton{" "}
          <strong>+</strong> en haut à droite. Importez la photo depuis
          Photos&nbsp;Apple (idéalement exportée à plat depuis Procreate),
          renseignez le titre, le style, le prix et le statut{" "}
          <em>dispo&nbsp;/ réservé&nbsp;/ tatoué</em>. La carte apparaît
          immédiatement dans votre Flash Board. Sur iPad, la grille s&apos;étend
          automatiquement à 6 colonnes.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment partager un flash à un client sur Instagram&nbsp;?
        </h3>
        <p>
          Ouvrez la fiche du flash et tapez <strong>Partager</strong>.
          L&apos;application génère un lien profond qui ouvre une page web
          statique propre, à coller directement en DM Instagram. Le statut du
          flash bascule alors automatiquement sur <em>réservé</em> si vous le
          souhaitez.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment fonctionne le consentement éclairé client&nbsp;?
        </h3>
        <p>
          Sur la fiche client, tapez{" "}
          <strong>Consentement éclairé</strong>. L&apos;app affiche le formulaire
          d&apos;information (zone, soin, contre-indications, allergies, suivi),
          que le client lit puis signe avec son doigt ou un Apple&nbsp;Pencil.
          La signature est stockée comme image dans la fiche, horodatée. Vous
          pouvez la régénérer à chaque nouvelle séance.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment fonctionne le suivi cicatrisation J+7 / J+30&nbsp;?
        </h3>
        <p>
          À la fin d&apos;une séance, l&apos;app planifie automatiquement deux
          notifications locales&nbsp;: une à J+7 et une à J+30. Vous recevez un
          rappel pour contacter le client ; ce dernier peut, s&apos;il le
          souhaite, envoyer une photo que vous attachez à sa fiche pour
          documenter la cicatrisation. Aucune notification n&apos;est envoyée
          au client par l&apos;app&nbsp;: c&apos;est vous qui prenez contact.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Le module Traçabilité encres correspond-il bien à
          l&apos;Art.&nbsp;R.1311-4 CSP&nbsp;?
        </h3>
        <p>
          Oui. Le module permet de tenir le registre exigé par
          l&apos;Art.&nbsp;R.1311-4 du Code de la santé publique pour la mise
          sur le marché et la traçabilité des produits de tatouage&nbsp;:
          marque, référence, numéro de lot, date d&apos;ouverture, séances
          liées (client + date). L&apos;export PDF est conçu pour être présenté
          directement lors d&apos;un contrôle ARS. Vous restez responsable de
          la saisie exacte des lots — l&apos;app est l&apos;outil, pas
          l&apos;auditeur.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment activer la synchronisation iPad ↔ iPhone&nbsp;?
        </h3>
        <p>
          Dans <strong>Réglages &gt; iCloud</strong>, activez la
          synchronisation. {APP_NAME} utilise votre CloudKit privé&nbsp;: vous
          devez être connecté avec le même identifiant Apple sur les deux
          appareils, et iCloud Drive doit être activé dans les Réglages iOS.
          Aucune donnée ne transite par un serveur tiers — la synchronisation
          se fait entièrement dans votre espace iCloud personnel.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment restaurer mon abonnement sur un nouvel iPhone ou iPad&nbsp;?
        </h3>
        <p>
          Connectez-vous avec le même identifiant Apple que celui utilisé pour
          l&apos;abonnement initial, ouvrez {APP_NAME}, puis allez dans{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong> (ou tapez
          <em> Restaurer </em> sur l&apos;écran paywall). L&apos;abonnement
          actif est réactivé automatiquement, sans frais supplémentaires.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mon abonnement ne se débloque pas, que faire&nbsp;?
        </h3>
        <p>
          Vérifiez d&apos;abord que vous êtes connecté avec l&apos;identifiant
          Apple d&apos;origine. Tapez ensuite{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong>. Si le problème
          persiste, fermez complètement l&apos;application (geste vers le haut
          + maintien, puis balayez la carte vers le haut) puis relancez-la.
          Sinon, écrivez-moi avec votre numéro de transaction Apple (visible
          dans l&apos;historique de votre compte App&nbsp;Store).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Quelle est la différence entre le plan mensuel et le plan annuel&nbsp;?
        </h3>
        <p>
          Aucune sur les fonctionnalités&nbsp;: les deux plans débloquent
          l&apos;intégralité de {APP_NAME} (flashs illimités, clients
          illimités, agenda complet, devis, traçabilité encres, exports PDF).
          La seule différence est le prix&nbsp;: <strong>14,99&nbsp;€/mois</strong>{" "}
          en mensuel, <strong>119,99&nbsp;€/an</strong> en annuel (soit
          ≈&nbsp;9,99&nbsp;€/mois, environ <strong>4 mois offerts</strong>).
          Les nouveaux abonnés bénéficient de <strong>7 jours d&apos;essai
          gratuit</strong> offerts par Apple sur les deux plans.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment résilier mon abonnement&nbsp;?
        </h3>
        <p>
          La résiliation s&apos;effectue depuis votre compte Apple, pas depuis
          l&apos;application&nbsp;:{" "}
          <strong>
            Réglages iOS &gt; Apple&nbsp;ID (votre nom) &gt; Abonnements &gt;{" "}
            {APP_NAME}
          </strong>{" "}
          &gt; <em>Annuler l&apos;abonnement</em>. Si vous résiliez pendant
          l&apos;essai gratuit, vous ne serez pas débité. Si vous résiliez
          après, vous conservez l&apos;accès jusqu&apos;à la fin de la période
          déjà payée.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Que se passe-t-il si je résilie&nbsp;: est-ce que je perds mes
          données&nbsp;?
        </h3>
        <p>
          Non. Vos données restent intégralement sur votre appareil et dans
          votre iCloud privé&nbsp;: flashs, fiches clients, RDV, devis,
          registre des encres. Sans abonnement actif, l&apos;app demande
          simplement de réactiver le plan pour rouvrir l&apos;interface. Vous
          pouvez aussi exporter votre registre encres en PDF avant de résilier.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Pourquoi un abonnement plutôt qu&apos;un achat unique&nbsp;?
        </h3>
        <p>
          C&apos;est un choix produit assumé. {APP_NAME} est un outil métier
          qui doit évoluer avec votre activité (nouvelles obligations ARS,
          mises à jour iOS / iPad, nouvelles fonctionnalités demandées par la
          communauté). Un abonnement permet de financer cette maintenance sans
          devoir vendre vos données ni intégrer de la publicité. À
          14,99&nbsp;€/mois, c&apos;est ≈&nbsp;0,1&nbsp;%–0,4&nbsp;% du CA
          mensuel d&apos;un tatoueur indépendant — et la moitié du prix des
          SaaS verticaux concurrents.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment supprimer une fiche client&nbsp;?
        </h3>
        <p>
          Depuis l&apos;écran de détail de la fiche client, faites défiler vers
          le bas et tapez <strong>Supprimer</strong>. Une confirmation
          apparaît. Cette action est <strong>définitive</strong>&nbsp;: les
          photos avant/après, l&apos;historique des séances et la signature de
          consentement sont également supprimés. Conformément au RGPD,
          n&apos;hésitez pas à utiliser cette suppression si un client vous le
          demande.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment ajouter une photo avant/après à un client&nbsp;?
        </h3>
        <p>
          Depuis la fiche client, ouvrez la zone du corps concernée (avant-bras
          gauche, jambe droite, dos…), puis tapez <strong>+ Photo</strong>.
          Choisissez entre la caméra et la galerie. Les photos sont copiées
          dans la base locale de l&apos;application — elles restent sur votre
          appareil et, si la synchro est activée, dans votre CloudKit privé.
          Elles ne sont jamais publiées.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment exporter mon registre des encres pour un contrôle ARS&nbsp;?
        </h3>
        <p>
          Allez dans <strong>Encres &gt; Exporter en PDF</strong>.
          L&apos;application génère un document horodaté listant chaque flacon
          (marque, ref, lot, date d&apos;ouverture, séances liées avec date et
          client). Le PDF est partageable par AirDrop, mail ou imprimable
          directement.
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
          , connectez-vous avec votre identifiant Apple et sélectionnez la
          transaction concernée. Si Apple refuse votre demande,
          écrivez-moi&nbsp;: nous trouverons une solution.
        </p>
      </Section>

      <Section title="3. Bug ou suggestion">
        <p>
          {APP_NAME} est développée et maintenue par un développeur
          indépendant. Chaque retour est lu et utile. Si vous trouvez un bug,
          si une obligation réglementaire spécifique à votre pays manque
          (Belgique, Suisse, Québec…), ou si vous aimeriez voir une
          fonctionnalité ajoutée, écrivez-moi à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          . Pour les bugs, mentionnez les étapes pour reproduire le problème,
          votre modèle d&apos;appareil et la version d&apos;iOS / iPadOS.
        </p>
      </Section>

      <Section title="4. Liens utiles">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <Link
              href="/FlashDesk"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Page principale {APP_NAME}
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
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037822916"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Art. R.1311-4 du Code de la santé publique (traçabilité encres)
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
