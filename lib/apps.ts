export type IosApp = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  language: "en" | "fr";
  year: string;
};

export const iosApps: IosApp[] = [
  {
    slug: "dadcopilot",
    name: "DadCoPilot",
    tagline:
      "Baby tracker built for dads — one-tap logging, 3 AM Mode, free co-parent sync.",
    category: "Family",
    language: "en",
    year: "2026",
  },
  {
    slug: "astrolog",
    name: "AstroLog",
    tagline:
      "Observation logbook for amateur astronomers — sessions, catalogs, Red Light Mode.",
    category: "Astronomy",
    language: "en",
    year: "2026",
  },
  {
    slug: "myefarm",
    name: "My E-Farm",
    tagline:
      "Cosy voxel farm game — raise chicks, milk the cow, grow your little farm.",
    category: "Game",
    language: "en",
    year: "2026",
  },
  {
    slug: "pomostudy",
    name: "PomoStudy",
    tagline:
      "iOS-native Pomodoro for students — focus timer, heatmap, Live Activity.",
    category: "Productivity",
    language: "en",
    year: "2026",
  },
  {
    slug: "padelkeep",
    name: "PadelKeep",
    tagline:
      "Padel scoreboard — 15-30-40, golden point, tie-breaks, giant tap zone.",
    category: "Sports",
    language: "en",
    year: "2026",
  },
  {
    slug: "brewly",
    name: "Brewly",
    tagline:
      "Pour-over coach for V60, Aeropress, Chemex, French Press — guided timer, ratio math.",
    category: "Coffee",
    language: "en",
    year: "2026",
  },
  {
    slug: "coldkeeper",
    name: "ColdKeeper",
    tagline:
      "Coach for ice baths, cold showers, Wim Hof breathwork — protocols, streaks, Health sync.",
    category: "Wellness",
    language: "en",
    year: "2026",
  },
  {
    slug: "WhiskyVault",
    name: "WhiskyVault",
    tagline:
      "Cave & carnet de dégustation premium pour amateurs et collectionneurs de whisky.",
    category: "Spiritueux",
    language: "fr",
    year: "2026",
  },
  {
    slug: "RhumArrange",
    name: "RhumArrangé",
    tagline:
      "Suivi de macérations, 12 recettes, carnet de dégustation pour passionnés de rhum arrangé.",
    category: "Spiritueux",
    language: "fr",
    year: "2026",
  },
  {
    slug: "FlashDesk",
    name: "FlashDesk",
    tagline:
      "Carnet de bord pour tatoueurs indépendants — flashs, clients, agenda, devis et traçabilité encres ARS.",
    category: "Business",
    language: "fr",
    year: "2026",
  },
];

export function getOtherApps(currentSlug: string): IosApp[] {
  return iosApps.filter((app) => app.slug !== currentSlug);
}
