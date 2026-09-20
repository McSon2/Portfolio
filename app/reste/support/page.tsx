import type { Metadata } from "next";
import Link from "next/link";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Reste";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const LAST_UPDATED = "20 septembre 2026";
const URL = "https://maximesaltet.com/reste/support";

export const metadata: Metadata = {
  title: `Assistance & FAQ — ${APP_NAME}`,
  description: `Assistance de l'application iOS ${APP_NAME} : import du relevé bancaire CSV, pointage hebdomadaire, dépenses récurrentes, solde projeté, partage du compte à deux via iCloud.`,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Assistance & FAQ — ${APP_NAME}`,
    description: `Aide, FAQ et contact pour l'application ${APP_NAME}.`,
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
        <h1 className="font-display text-display-sm">Assistance</h1>
        <p className="text-caption uppercase tracking-wider opacity-60 mt-[15px]">
          Dernière mise à jour : {LAST_UPDATED}
        </p>
      </header>

      <Section title="1. Contact">
        <p>
          Une question, un bug, une banque dont le relevé ne s&apos;importe pas
          correctement ? Écrivez à{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME} — assistance`}
            className="underline decoration-1 underline-offset-4 hover:opacity-60"
          >
            {CONTACT_EMAIL}
          </a>
          . Réponse sous 48 heures ouvrées. Pour un problème d&apos;import,
          joignez le fichier en ayant remplacé les montants par des valeurs
          fictives — seule la <em>structure</em> du fichier est utile au
          diagnostic.
        </p>
      </Section>

      <Section title="2. Questions fréquentes">
        <Q q="Est-ce que l’app se connecte à ma banque ?">
          <p>
            Non, jamais. {APP_NAME} ne demande aucun identifiant bancaire et
            n&apos;utilise aucun agrégateur. Vous exportez vous-même le relevé
            depuis votre espace client, puis vous l&apos;ouvrez dans
            l&apos;application. C&apos;est volontaire : vos accès bancaires ne
            passent par aucun intermédiaire.
          </p>
        </Q>

        <Q q="Comment récupérer le fichier de relevé ?">
          <p>
            Depuis le site web de votre banque, rubrique historique des
            opérations, bouton d&apos;export ou de téléchargement, format CSV
            (ou OFX). Enregistrez-le dans Fichiers ou iCloud Drive, puis dans
            l&apos;app : onglet <strong>Pointage</strong> →{" "}
            <strong>Importer un relevé</strong>.
          </p>
        </Q>

        <Q q="Mon fichier CSV s’importe mal — accents cassés, montants à zéro.">
          <p>
            {APP_NAME} détecte automatiquement l&apos;encodage (UTF-8,
            Windows-1252, latin-1), le séparateur (point-virgule, virgule,
            tabulation), le format de date et les décimales à la virgule, ainsi
            que les fichiers à colonnes <em>Débit</em> et <em>Crédit</em>{" "}
            séparées. Si votre banque produit un format encore inconnu,
            l&apos;écran d&apos;import affiche un aperçu des colonnes
            détectées : vous pouvez les réassigner à la main avant de valider.
            Envoyez-moi le fichier anonymisé, le format sera ajouté.
          </p>
        </Q>

        <Q q="Que se passe-t-il si j’importe deux fois le même relevé ?">
          <p>
            Rien de fâcheux : chaque ligne déjà connue est reconnue et ignorée,
            et l&apos;app vous indique combien de lignes étaient nouvelles. Les
            opérations réellement identiques du même jour (deux achats du même
            montant chez le même commerçant) sont correctement comptées deux
            fois — c&apos;est un cas volontairement traité.
          </p>
        </Q>

        <Q q="À quoi sert exactement l’écran Pointage ?">
          <p>
            À répondre à la question « est-ce que rien ne manque ? ».
            L&apos;app compare les lignes du relevé à vos saisies : elle valide
            seule les correspondances évidentes (même montant, date proche),
            vous soumet les cas douteux, et liste ce qui ne matche pas du tout
            dans les deux sens — présent en banque mais pas saisi (dépense
            oubliée), saisi mais absent du relevé (pas encore débité, ou
            doublon). Vous terminez en saisissant le solde réel affiché par
            votre banque : l&apos;écart tombe alors à zéro, et tout ce qui
            suivra est calculé à partir de ce point d&apos;ancrage.
          </p>
        </Q>

        <Q q="Comment fonctionne le solde projeté ?">
          <p>
            Il part du dernier solde réel que vous avez constaté, y ajoute les
            écritures enregistrées depuis, puis les échéances récurrentes du
            mois encore à venir. Une erreur dans un mois ancien ne fausse donc
            pas le mois en cours.
          </p>
        </Q>

        <Q q="Comment déclarer une dépense récurrente ?">
          <p>
            Onglet <strong>Récurrences</strong> → <strong>Nouvelle règle</strong>{" "}
            : libellé, montant, périodicité et jour d&apos;échéance (jour fixe,
            fin de mois, ou dernier jour ouvré). Si le montant varie d&apos;un
            mois sur l&apos;autre (électricité, gaz), cochez{" "}
            <em>montant variable</em> : l&apos;app utilisera votre estimation
            pour la projection et la remplacera par le montant réel au moment
            du pointage.
          </p>
        </Q>

        <Q q="Comment partager le compte avec mon conjoint ?">
          <p>
            Onglet <strong>Réglages</strong> → <strong>Partage</strong> →{" "}
            <strong>Inviter</strong>. Un lien d&apos;invitation iCloud est
            généré, à envoyer par message. Une fois accepté, vos deux appareils
            voient le même compte joint, et chaque écriture indique qui
            l&apos;a saisie. L&apos;accès est révocable à tout moment depuis le
            même écran. Les deux personnes doivent être connectées à iCloud.
          </p>
        </Q>

        <Q q="Les données sont-elles synchronisées entre iPhone, iPad et Mac ?">
          <p>
            Oui, via iCloud, avec le même compte Apple. La synchronisation est
            automatique ; en cas de coupure réseau, les saisies sont conservées
            localement et remontent à la reconnexion.
          </p>
        </Q>

        <Q q="Puis-je récupérer mes données ailleurs ?">
          <p>
            Oui. Onglet <strong>Réglages</strong> →{" "}
            <strong>Exporter en CSV</strong> produit un fichier contenant
            toutes vos écritures, ouvrable dans Numbers ou Excel.
          </p>
        </Q>

        <Q q="J’ai supprimé une dépense par erreur.">
          <p>
            Une suppression peut être annulée immédiatement depuis la bannière
            qui apparaît. Un import complet peut être annulé depuis{" "}
            <strong>Réglages</strong> → <strong>Historique des imports</strong>.
          </p>
        </Q>
      </Section>

      <Section title="3. Bug ou suggestion">
        <p>
          Les rapports de bug précis font les bonnes mises à jour. Indiquez
          votre modèle d&apos;appareil, la version d&apos;iOS, la version de
          l&apos;application (visible en bas de l&apos;écran Réglages), et ce
          que vous faisiez juste avant. Les suggestions de fonctionnalités sont
          lues et priorisées.
        </p>
      </Section>

      <Section title="4. Liens utiles">
        <ul className="list-disc pl-[20px] space-y-[8px]">
          <li>
            <Link
              href="/reste"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Présentation de {APP_NAME}
            </Link>
          </li>
          <li>
            <Link
              href="/reste/privacy"
              className="underline decoration-1 underline-offset-4 hover:opacity-60"
            >
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME} — assistance`}
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

function Q({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mt-[20px]">
      <h3 className="font-display text-[18px] mb-[10px]">{q}</h3>
      <div className="space-y-[15px]">{children}</div>
    </div>
  );
}
