import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrossAppNav } from "@/components/layout/CrossAppNav";

const APP_NAME = "Reste";
const PUBLISHER = "Maxime Saltet";
const CONTACT_EMAIL = "maximesaltet@gmail.com";
const URL = "https://maximesaltet.com/reste";
// const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

const TITLE = `${APP_NAME} — Dépenses du compte joint et pointage bancaire, sur iOS`;
const DESCRIPTION = `${APP_NAME} est l'app iOS de suivi de dépenses du compte joint : saisie en deux gestes, dépenses récurrentes, solde projeté fin de mois, et un écran de pointage qui rapproche votre relevé bancaire CSV de vos saisies. À deux, en temps réel, sans connexion bancaire.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
};

export default function RestePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-[30px] pt-[120px] pb-[80px]">
        <p className="text-caption uppercase tracking-wider mb-[15px] opacity-60">
          iOS · iPadOS · macOS · App Store · 2026
        </p>
        <h1 className="font-display text-display-sm mb-[30px]">{APP_NAME}</h1>
        <p
          className="text-body mb-[58px]"
          style={{ lineHeight: 1.6, fontSize: "20px" }}
        >
          Une seule question compte à la fin du mois : qu&apos;est-ce qu&apos;il
          reste ? {APP_NAME} y répond en permanence. Vous notez la dépense au
          moment où vous la faites, l&apos;app ajoute vos prélèvements
          récurrents, et une fois par semaine vous pointez votre relevé
          bancaire pour vérifier que rien ne manque.
        </p>

        <Section title="01 / Pour qui">
          <p>
            Pour les foyers qui tiennent un compte joint et veulent savoir, à
            tout instant, ce qui restera une fois tous les prélèvements passés.
            Deux personnes saisissent, les mêmes chiffres apparaissent des deux
            côtés. Pas de tableur partagé, pas de « je te dirai ce soir combien
            j&apos;ai dépensé ».
          </p>
        </Section>

        <Section title="02 / Ce que fait l’app">
          <h3 className="font-display text-[18px] mt-[15px] mb-[10px]">
            Saisie en deux gestes
          </h3>
          <p>
            Le geste le plus répété de l&apos;app est le plus court : pavé
            numérique plein écran, montant, catégorie, c&apos;est enregistré.
            Date du jour par défaut, modifiable d&apos;un tap. Depuis
            l&apos;écran d&apos;accueil, un widget et un raccourci Siri
            permettent de saisir sans ouvrir l&apos;app.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Dépenses récurrentes, posées seules
          </h3>
          <p>
            Loyer, assurances, téléphone, crédit auto, abonnements : vous
            décrivez la règle une fois. Au passage à un nouveau mois,
            l&apos;app pose toutes les échéances du mois à leur date, en
            prévisionnel, et les transforme en dépenses réelles quand elles
            apparaissent sur le relevé — au montant réellement débité.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Solde projeté fin de mois
          </h3>
          <p>
            Trois nombres, toujours visibles : ce qu&apos;il y a maintenant, ce
            qui doit encore passer, et ce qu&apos;il restera. Le solde
            n&apos;est pas une somme depuis janvier : il part du dernier solde
            réel que vous avez constaté, ce qui le rend juste même si une
            écriture ancienne est fausse.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Pointage hebdomadaire, écran dédié
          </h3>
          <p>
            Le moment clé de la semaine a son propre écran. Vous importez le
            relevé CSV de votre banque ; {APP_NAME} rapproche chaque ligne de
            vos saisies, valide seule les correspondances évidentes, et vous
            présente uniquement les cas douteux : montant différent, date
            décalée, dépense oubliée, ligne en trop. L&apos;écart entre le
            solde réel et le solde de l&apos;app est affiché décomposé —
            vous voyez <em>pourquoi</em> il manque quelque chose, pas seulement
            combien.
          </p>

          <h3 className="font-display text-[18px] mt-[20px] mb-[10px]">
            Historique complet, filtres et tris
          </h3>
          <p>
            Dépenses et revenus dans une seule liste, filtrable par période,
            catégorie, personne, état de pointage, et triable comme vous
            l&apos;entendez. Un seul endroit à connaître.
          </p>
        </Section>

        <Section title="03 / À deux, sans compte à créer">
          <p>
            Le partage passe par <strong>iCloud</strong> : vous invitez la
            deuxième personne depuis l&apos;app, elle accepte, et vos deux
            iPhone voient le même compte joint en quelques secondes. Chaque
            écriture indique qui l&apos;a saisie. Aucun serveur de
            l&apos;éditeur n&apos;est impliqué, aucun compte à créer, aucun mot
            de passe à retenir.
          </p>
        </Section>

        <Section title="04 / Aucune connexion à votre banque">
          <p>
            {APP_NAME} ne se connecte <strong>jamais</strong> à votre banque et
            ne demande jamais vos identifiants bancaires. Le rapprochement se
            fait à partir du fichier CSV que vous exportez vous-même depuis
            votre espace client, et ce fichier est lu sur votre appareil. Rien
            n&apos;est transmis à l&apos;éditeur.
          </p>
          <p>
            Lire la{" "}
            <Link
              href="/reste/privacy"
              className="underline underline-offset-4 hover:opacity-60"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </Section>

        <Section title="05 / Technique">
          <Ul>
            <li>SwiftUI natif, iOS&nbsp;26+, design Liquid Glass</li>
            <li>Universelle : iPhone, iPad et Mac, une seule licence</li>
            <li>
              Core&nbsp;Data + CloudKit partagé (CKShare) pour le compte à deux
            </li>
            <li>Montants en centimes entiers — aucune dérive d&apos;arrondi</li>
            <li>
              Import CSV tolérant : encodages Windows/latin-1, séparateurs
              points-virgules, décimales à la virgule, colonnes Débit/Crédit
              séparées
            </li>
            <li>Widget, raccourcis Siri, Dynamic Type, mode sombre</li>
          </Ul>
        </Section>

        <Section title="06 / Liens">
          <Ul>
            {/*
            <li>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Télécharger sur l&apos;App Store
              </a>
            </li>
            */}
            <li>
              <Link
                href="/reste/support"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Assistance &amp; FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/reste/privacy"
                className="underline underline-offset-4 hover:opacity-60"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${APP_NAME}`}
                className="underline underline-offset-4 hover:opacity-60"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </Ul>
        </Section>

        <p className="mt-[58px] text-caption uppercase tracking-wider opacity-60">
          © {new Date().getFullYear()} — {PUBLISHER}
        </p>
        <CrossAppNav currentSlug="reste" heading="Autres apps de Maxime" />
      </main>
      <Footer />
    </>
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

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-[20px] space-y-[8px] marker:text-black my-[15px]">
      {children}
    </ul>
  );
}
