export type Project = {
  number: string;
  title: string;
  url: string | null;
  badge?: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "ANTHOSAURE",
    url: "https://anthosaure.com",
    tagline: "Plateforme de social-gaming — économie virtuelle temps réel",
    year: "2024 — 2026",
    role: "Fullstack · Architecture",
    stack: [
      "Next.js 15",
      "React 19",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Pusher",
      "Strapi",
      "Turborepo",
      "TypeScript",
      "Tailwind",
      "Discord OAuth",
    ],
    highlights: [
      "Plateforme multi-jeux complète : casino, blackjack, paris sportifs, jackpot progressif et bonus hunts, le tout adossé à une économie de crédits virtuels.",
      "Catalogue de plus de 1000 slots agrégés depuis une cinquantaine de providers (Nolimit City, AvatarUX…) accessibles via une API maison unifiée.",
      "Sessions joueurs synchronisées en temps réel sur tous les onglets et appareils — solde, événements de jeu et notifications poussés instantanément.",
      "Architecture monorepo de 6 services indépendants (front, API jeux, bot Discord, workers async, extension Chrome, CMS) déployés et versionnés ensemble.",
    ],
  },
  {
    number: "02",
    title: "LOCMANAGE",
    url: "https://apps.apple.com/fr/app/locmanage-gestion-locative/id6748564235",
    badge: "iOS · Live on App Store",
    tagline: "App iOS native pour la gestion locative — pensée pour les bailleurs",
    year: "2025 — 2026",
    role: "Solo · Conception · Dev",
    stack: [
      "SwiftUI iOS 26",
      "Supabase",
      "Edge Functions Deno",
      "Tuist",
      "RevenueCat",
      "Core Data",
      "CloudKit",
      "PencilKit",
      "PDFKit",
      "StoreKit 2",
    ],
    highlights: [
      "Suivi complet du cycle locatif depuis le téléphone : biens, baux, loyers, dépôts de garantie, états des lieux et candidatures.",
      "Signature électronique manuscrite et génération automatique des baux et états des lieux en PDF prêts à l'usage légal.",
      "Messagerie temps réel intégrée entre propriétaire et locataire, avec partage de documents et notifications push natives.",
      "Modèle freemium en production : 1 bien gratuit, Premium illimité à 4,99 €/mois, paiements gérés via StoreKit 2 et RevenueCat.",
    ],
  },
  {
    number: "03",
    title: "SSPILOT",
    url: "https://sspilot.cc",
    tagline: "App desktop multi-OS — automation casino haut de gamme",
    year: "2023 — 2026",
    role: "Solo · Architecture · Dev",
    stack: [
      "Electron 33",
      "React 19",
      "TypeScript",
      "SQLite",
      "Zustand",
      "WebSockets",
      "Telegram Bot API",
      "Vite 6",
      "Tailwind",
    ],
    highlights: [
      "Application desktop livrée sur Windows, macOS et Linux avec auto-update, distribuée publiquement à la communauté Stake.",
      "Spins instantanés sans rechargement d'interface sur 55+ jeux : 20 originaux Stake et 35 providers tiers (Pragmatic, Hacksaw, BGaming…).",
      "Bonus hunting et stop-loss entièrement automatisés selon des règles configurables — protection des gains et limites de perte gérées seules.",
      "Notifications Telegram instantanées sur gains, pertes et événements de session via un bot intégré au workflow utilisateur.",
    ],
  },
];
