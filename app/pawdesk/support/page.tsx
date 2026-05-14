import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Pawdesk";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "12 mai 2026";
const URL = "https://maximesaltet.com/pawdesk/support";

export const metadata: Metadata = {
  title: `Support — ${APP_NAME}`,
  description: `Page d'assistance de l'application iOS ${APP_NAME}, carnet pro pour toiletteurs canins indépendants. Contact, FAQ, abonnement, restauration d'achats, vaccins, route van, iCloud.`,
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
          Pour accélérer le traitement, précisez votre modèle d&apos;iPhone
          ou d&apos;iPad, la version d&apos;iOS / iPadOS, la version de{" "}
          {APP_NAME} (visible dans <strong>Réglages &gt; À propos</strong>)
          et, si possible, une capture d&apos;écran.
        </p>
      </Section>

      <Section title="2. Questions fréquentes">
        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment créer ma première fiche chien&nbsp;?
        </h3>
        <p>
          Depuis l&apos;onglet <strong>Chiens</strong>, tapez le bouton{" "}
          <strong>+</strong>. Renseignez la photo de couverture (importée
          depuis Photos&nbsp;Apple ou prise à la caméra), le nom, la race, la
          robe, le poids, l&apos;âge, le sexe. Ajoutez ensuite
          l&apos;owner&nbsp;: nom, téléphone, email, adresse, et faites
          signer le consentement RGPD au doigt ou à l&apos;Apple&nbsp;Pencil.
          La fiche est immédiatement disponible dans toute l&apos;app.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment fonctionnent les rappels vaccins&nbsp;?
        </h3>
        <p>
          Dans la fiche chien, ajoutez chaque vaccin avec sa date
          d&apos;injection&nbsp;: {APP_NAME} en déduit la date
          d&apos;expiration. L&apos;app planifie automatiquement deux
          notifications locales&nbsp;: une à J-30 et une à J-7 avant
          échéance. Vous pouvez alors prévenir l&apos;owner, mettre à jour le
          carnet sanitaire et conserver l&apos;historique dans la fiche.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment marche le Carnet Rebook&nbsp;?
        </h3>
        <p>
          Pour chaque chien, vous définissez un intervalle de rebook
          (6&nbsp;semaines par défaut, ajustable par owner). Le Carnet Rebook
          liste les chiens dont la dernière séance dépasse l&apos;intervalle.
          Un tap sur un chien&nbsp;: SMS pré-rempli{" "}
          <em>« Bonjour [Owner], il est temps de prendre RDV pour [Chien]
          🐕✂️ »</em> prêt à envoyer. Un second tap crée le RDV proposé
          directement dans l&apos;agenda.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment utiliser la Route Van&nbsp;?
        </h3>
        <p>
          Depuis l&apos;onglet <strong>Route</strong>, l&apos;app affiche les
          RDV du jour sur MapKit et propose un ordre optimisé (TSP simplifié).
          Vous pouvez réorganiser manuellement par drag. Un tap sur un RDV
          ouvre Apple Maps ou Waze (au choix dans les Réglages). Les
          kilomètres parcourus sont cumulés et exportables en PDF mensuel
          pour la comptabilité (déduction frais kilométriques
          auto-entrepreneur FR).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment encaisser une prestation&nbsp;?
        </h3>
        <p>
          À la fin du RDV, passez le statut sur <em>terminé</em> dans la
          Today&nbsp;View. Le bouton <strong>Encaisser</strong> apparaît
          immédiatement avec le montant pré-rempli depuis la prestation
          choisie. Sélectionnez le mode (espèces, virement, chèque), et
          générez un ticket PDF envoyé par SMS ou email à l&apos;owner. Tap
          to Pay sur iPhone sera ajouté dans une mise à jour ultérieure, une
          fois l&apos;entitlement Apple obtenu.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment activer la synchronisation iPhone ↔ iPad&nbsp;?
        </h3>
        <p>
          Dans <strong>Réglages &gt; iCloud</strong>, activez la
          synchronisation. {APP_NAME} utilise votre CloudKit privé&nbsp;:
          vous devez être connecté avec le même identifiant Apple sur les
          deux appareils, et iCloud Drive doit être activé dans les Réglages
          iOS. Aucune donnée ne transite par un serveur tiers — la
          synchronisation se fait entièrement dans votre espace iCloud
          personnel.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment restaurer mon abonnement sur un nouvel iPhone ou iPad&nbsp;?
        </h3>
        <p>
          Connectez-vous avec le même identifiant Apple que celui utilisé
          pour l&apos;abonnement initial, ouvrez {APP_NAME}, puis allez dans{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong> (ou tapez
          <em> Restaurer </em> sur l&apos;écran paywall).
          L&apos;abonnement actif est réactivé automatiquement, sans frais
          supplémentaires.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Mon abonnement ne se débloque pas, que faire&nbsp;?
        </h3>
        <p>
          Vérifiez d&apos;abord que vous êtes connecté avec
          l&apos;identifiant Apple d&apos;origine. Tapez ensuite{" "}
          <strong>Réglages &gt; Restaurer mes achats</strong>. Si le problème
          persiste, fermez complètement l&apos;application (geste vers le
          haut + maintien, puis balayez la carte vers le haut) puis
          relancez-la. Sinon, écrivez-moi avec votre numéro de transaction
          Apple (visible dans l&apos;historique de votre compte
          App&nbsp;Store).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Quelle est la différence entre le plan mensuel et le plan
          annuel&nbsp;?
        </h3>
        <p>
          Aucune sur les fonctionnalités&nbsp;: les deux plans débloquent
          l&apos;intégralité de {APP_NAME} (chiens illimités, RDV illimités,
          Carnet Rebook, rappels vaccins, Route Van, caisse, exports PDF).
          La seule différence est le prix&nbsp;:{" "}
          <strong>19,99&nbsp;€/mois</strong> en mensuel,{" "}
          <strong>159,99&nbsp;€/an</strong> en annuel (soit
          ≈&nbsp;13,33&nbsp;€/mois, environ{" "}
          <strong>4 mois offerts</strong>). Les nouveaux abonnés bénéficient
          de <strong>7 jours d&apos;essai gratuit</strong> offerts par Apple
          sur les deux plans.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment résilier mon abonnement&nbsp;?
        </h3>
        <p>
          La résiliation s&apos;effectue depuis votre compte Apple, pas
          depuis l&apos;application&nbsp;:{" "}
          <strong>
            Réglages iOS &gt; Apple&nbsp;ID (votre nom) &gt; Abonnements
            &gt; {APP_NAME}
          </strong>{" "}
          &gt; <em>Annuler l&apos;abonnement</em>. Si vous résiliez pendant
          l&apos;essai gratuit, vous ne serez pas débité. Si vous résiliez
          après, vous conservez l&apos;accès jusqu&apos;à la fin de la
          période déjà payée.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Si je résilie, est-ce que je perds mes données&nbsp;?
        </h3>
        <p>
          Non. Vos données restent intégralement sur votre appareil et dans
          votre iCloud privé&nbsp;: fiches chiens, owners, RDV, vaccins,
          transactions. Sans abonnement actif, l&apos;app demande simplement
          de réactiver le plan pour rouvrir l&apos;interface. Vous pouvez
          aussi exporter vos données en PDF avant de résilier.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Pourquoi un abonnement plutôt qu&apos;un achat unique&nbsp;?
        </h3>
        <p>
          C&apos;est un choix produit assumé. {APP_NAME} est un outil métier
          qui doit évoluer avec votre activité (intégration future Tap to
          Pay, obligations sanitaires, formations comme ACACED, mises à jour
          iOS / iPad). Un abonnement permet de financer cette maintenance
          sans devoir vendre vos données ni intégrer de la publicité. À
          19,99&nbsp;€/mois, c&apos;est environ{" "}
          <strong>0,1&nbsp;%–0,4&nbsp;% du CA mensuel</strong> d&apos;un
          toiletteur indépendant — et un quart du prix des SaaS US (MoeGo
          $79+, DaySmart $79-159).
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment supprimer une fiche chien ou un owner&nbsp;?
        </h3>
        <p>
          Depuis l&apos;écran de détail, faites défiler vers le bas et tapez{" "}
          <strong>Supprimer</strong>. Une confirmation apparaît. Cette
          action est <strong>définitive</strong>&nbsp;: les photos
          avant/après, les vaccins, l&apos;historique des séances et la
          signature de consentement sont également supprimés. Conformément
          au RGPD, n&apos;hésitez pas à utiliser cette suppression si un
          owner vous le demande.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment ajouter une photo avant/après à un chien&nbsp;?
        </h3>
        <p>
          Depuis la fiche chien, ouvrez la séance concernée, puis tapez{" "}
          <strong>+ Photo</strong>. Choisissez entre la caméra et la galerie.
          Les photos sont copiées dans la base locale de l&apos;application —
          elles restent sur votre appareil et, si la synchro est activée,
          dans votre CloudKit privé. Elles ne sont jamais publiées.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment exporter mes frais kilométriques pour la compta&nbsp;?
        </h3>
        <p>
          Allez dans <strong>Route Van &gt; Exporter PDF mensuel</strong>.
          L&apos;application génère un document horodaté listant chaque
          tournée du mois (date, RDV, kilomètres parcourus, total).
          L&apos;export est compatible avec le barème fiscal forfaitaire
          auto-entrepreneur FR. Le PDF est partageable par AirDrop, mail ou
          imprimable.
        </p>

        <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
          Comment demander un remboursement&nbsp;?
        </h3>
        <p>
          Les remboursements sont gérés directement par Apple. Rendez-vous
          sur{" "}
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
          indépendant. Chaque retour est lu et utile. Si vous trouvez un
          bug, si une obligation réglementaire spécifique à votre pays
          manque (Belgique, Suisse, Québec…), ou si vous aimeriez voir une
          fonctionnalité ajoutée, écrivez-moi à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Suggestion%20${APP_NAME}`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          . Pour les bugs, mentionnez les étapes pour reproduire le
          problème, votre modèle d&apos;appareil et la version d&apos;iOS /
          iPadOS.
        </p>
      </Section>

      <Section title="4. Liens utiles">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <Link
              href="/pawdesk"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Page principale {APP_NAME}
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
