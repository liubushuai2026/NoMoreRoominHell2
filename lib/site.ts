import { keywordGuideItems, keywordPages } from "./keyword-pages";

export type Locale = "en" | "ru" | "pt-br" | "es";

export type GuideItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  group: "Release" | "Gameplay" | "Guides";
};

export type GenericPage = {
  slug: string;
  keyword?: string;
  eyebrow: string;
  title: string;
  metaDescription?: string;
  intro: string;
  answer?: string;
  facts: string[];
  sections: Array<{ title: string; body: string | string[] }>;
};

export type HomeCard = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export const locales: Array<{ code: Locale; label: string; short: string }> = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "pt-br", label: "Português do Brasil", short: "PT" },
  { code: "es", label: "Español - España", short: "ES" }
];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "No More Room in Hell 2 Wiki",
  ru: "No More Room in Hell 2 Вики",
  "pt-br": "No More Room in Hell 2 Wiki",
  es: "No More Room in Hell 2 Wiki"
};

export const officialLinks = {
  site: "https://www.nmrih2.com/",
  steam: "https://store.steampowered.com/app/292000/No_More_Room_In_Hell_2/",
  discord: "https://discord.com/invite/nmrih",
  reddit: "https://www.reddit.com/r/nmrih/",
  youtube: "https://www.youtube.com/channel/UCygSSHjXjhLdPeDf1SDXqHw",
  trailer: "待确认"
};

export const seoMetadata = {
  title: "No More Room in Hell 2 Wiki — Guides, Maps & Survival",
  description:
    "No More Room in Hell 2 Wiki with beginner guides, maps, Survival and Scenario tips, infection help, weapons, progression, achievements, and updates.",
  keywords:
    "No More Room in Hell 2, NMRiH2, Steam, guides, maps, Survival, Scenario, weapons, infection"
};

export const themeTokens = {
  lightNavTheme: "4 72% 46%",
  lightNavThemeLight: "4 72% 57%",
  darkNavTheme: "4 78% 50%",
  darkNavThemeLight: "14 82% 60%"
};

export const homeContent = {
  meta: seoMetadata,
  hero: {
    eyebrow: "Fan-Made Survival Guide & Community Wiki",
    title: "No More Room in Hell 2",
    description:
      "Survive a brutal zombie apocalypse where eight Responders must find each other, share scarce supplies, and complete objectives together. Learn the maps, master infection and permadeath, build stronger Responders, and survive with your team.",
    stats: ["8 Player Co-op", "Survival Horror", "Permadeath", "Infection System", "Persistent Progression"],
    primaryCta: "Start Beginner Guide",
    secondaryCta: "Explore Maps",
    tertiaryCta: "View Weapons & Gear",
    videoLabel: "Official Media"
  },
  start: {
    eyebrow: "Start Here",
    title: "Your No More Room in Hell 2 Journey",
    cards: [
      {
        number: "1",
        title: "Beginner Guide",
        description:
          "Learn the essential controls, objectives, inventory system, resource management, teamwork rules, extraction mechanics, and the mistakes new Responders should avoid.",
        href: "/guide/"
      },
      {
        number: "2",
        title: "Maps & Objectives",
        description:
          "Learn map layouts, important objectives, extraction routes, supply locations, dangerous areas, and how to regroup with your squad.",
        href: "/map/"
      },
      {
        number: "3",
        title: "Infection & Permadeath",
        description:
          "Understand infection, survival options, character loss, and how to protect valuable Responder progression.",
        href: "/how-to-cure-infected/"
      },
      {
        number: "4",
        title: "Weapons, Skills & Builds",
        description:
          "Compare firearms, melee weapons, attachments, equipment, Responder perks, and loadout strategies for difficult missions.",
        href: "/weapons/"
      }
    ] satisfies HomeCard[]
  },
  aboutGame: {
    title: "What is No More Room in Hell 2?",
    paragraphs: [
      "No More Room in Hell 2 is an eight-player cooperative zombie survival horror FPS developed by Torn Banner Studios. Responders deploy into zombie-infested locations, gather supplies, find teammates, complete objectives, and attempt to survive.",
      "Combat is deliberately dangerous: ammunition is scarce, zombies are lethal, infection can threaten your Responder, and character death can erase progression. Teamwork, resource management, map knowledge, weapons, perks, and communication are central to survival."
    ],
    stats: [
      { label: "Developer", value: "Torn Banner Studios" },
      { label: "Platform", value: "Steam" },
      { label: "Genre", value: "Co-op Survival Horror FPS" },
      { label: "Players", value: "Up to 8" },
      { label: "Core Mechanic", value: "Infection" },
      { label: "Character System", value: "Permadeath" },
      { label: "Progression", value: "Responder Skills & Loadouts" }
    ],
    cta: "Explore All Guides"
  },
  finalCta: {
    title: "Ready to Survive No More Room in Hell 2?",
    description:
      "From your first deployment and infection scare to difficult objectives and chaotic zombie encounters, our community wiki gives you the maps, weapons, mechanics, builds, and strategies you need to keep your Responder alive.",
    primary: "Read the Beginner Guide",
    secondary: "Play on Steam"
  }
};

export const sidebarCodes = ["暂无", "暂无"];

export const footerContent = {
  aboutTitle: "No More Room in Hell 2 Wiki",
  about:
    "No More Room in Hell 2 Wiki is an independent fan-made guide site for Torn Banner Studios' co-op zombie survival horror game. We cover beginner tips, maps, objectives, weapons, infection, permadeath, progression, achievements, and major game updates. This site is not affiliated with Torn Banner Studios.",
  description:
    "8-player co-op zombie survival horror with infection, permadeath, scarce resources, dangerous objectives, and persistent progression.",
  playGame: "Play No More Room in Hell 2 on Steam",
  officialDiscord: "Official Discord",
  officialYoutube: "Official YouTube",
  communityTool: "暂无",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service"
};

export const steamImages = {
  hero: "/img/shot-4.webp",
  axe: "/img/shot-0.webp",
  fire: "/img/shot-1.webp",
  gym: "/img/shot-2.webp",
  corridor: "/img/shot-3.webp",
  extract: "/img/shot-4.webp",
  station: "/img/shot-6.webp",
  morgue: "/img/shot-8.webp"
};

export const navGroups = [
  {
    title: "Release",
    href: "/release-date/",
    links: [
      { label: "Player Count", href: "/player-count/" },
      { label: "Release Date", href: "/release-date/" },
      { label: "1.0 Release Date", href: "/1-0-release-date/" },
      { label: "Steam", href: "/steam/" },
      { label: "Reviews", href: "/review/" },
      { label: "Crossplay", href: "/crossplay/" }
    ]
  },
  {
    title: "Gameplay",
    href: "/guide/",
    links: [
      { label: "Guide", href: "/guide/" },
      { label: "How to Extract", href: "/how-to-extract/" },
      { label: "Cure Infected", href: "/how-to-cure-infected/" },
      { label: "Weapons", href: "/weapons/" },
      { label: "Map", href: "/map/" }
    ]
  },
  {
    title: "Guides",
    href: "/guides/",
    links: [
      { label: "Guide Index", href: "/guides/" },
      { label: "Best Skills", href: "/best-skills/" },
      { label: "Best Melee Weapon", href: "/best-melee-weapon/" },
      { label: "Solo", href: "/solo/" },
      { label: "Failed to Join Squad", href: "/failed-to-join-squad/" },
      { label: "Stuttering", href: "/stuttering/" }
    ]
  }
];

export const dictionary: Record<
  Locale,
  {
    eyebrow: string;
    homeTitle: string;
    intro: string;
    browseTitle: string;
    browseCopy: string;
    factsTitle: string;
    factsCopy: string;
    startCta: string;
    playCta: string;
    guideIndexTitle: string;
    guideIndexIntro: string;
    footerKicker: string;
    footerTitle: string;
    footerCopy: string;
  }
> = {
  en: {
    eyebrow: homeContent.hero.eyebrow,
    homeTitle: homeContent.hero.title,
    intro: homeContent.hero.description,
    browseTitle: "Browse the database by intent",
    browseCopy:
      "Open beginner guides, maps, weapons, infection, permadeath, Survival, achievements, updates, and Steam status without mixing confirmed facts with guesses.",
    factsTitle: "NMRiH2 at a glance",
    factsCopy: "Every fact below comes from the researched homepage information.",
    startCta: homeContent.hero.primaryCta,
    playCta: footerContent.playGame,
    guideIndexTitle: "No More Room in Hell 2 Guides",
    guideIndexIntro:
      "A compact navigation page for Beginner Guide, Maps, Weapons, Infection, Permadeath, Survival, Achievements, and Updates.",
    footerKicker: "Independent survival wiki",
    footerTitle: "Survive with your team.",
    footerCopy: footerContent.about
  },
  ru: {
    eyebrow: "Fan-Made Survival Guide & Community Wiki",
    homeTitle: "No More Room in Hell 2",
    intro:
      "Неофициальная вики по No More Room in Hell 2: Beginner Guide, карты, оружие, заражение, перманентная смерть, Survival и обновления.",
    browseTitle: "Навигация по вики",
    browseCopy:
      "Открывайте гайды по картам, оружию, заражению, Survival, достижениям и обновлениям без неподтвержденных данных.",
    factsTitle: "NMRiH2 кратко",
    factsCopy: "Факты ниже взяты из проверенной информации главной страницы.",
    startCta: "Beginner Guide",
    playCta: footerContent.playGame,
    guideIndexTitle: "No More Room in Hell 2 гайды",
    guideIndexIntro: "Навигация по ключевым разделам: карты, оружие, заражение, Survival и обновления.",
    footerKicker: "Independent survival wiki",
    footerTitle: "Survive with your team.",
    footerCopy: footerContent.about
  },
  "pt-br": {
    eyebrow: "Fan-Made Survival Guide & Community Wiki",
    homeTitle: "No More Room in Hell 2",
    intro:
      "Wiki independente de No More Room in Hell 2 com Beginner Guide, mapas, armas, infeccao, permadeath, Survival e atualizacoes.",
    browseTitle: "Navegue pela wiki",
    browseCopy:
      "Abra guias de mapas, armas, infeccao, Survival, conquistas e atualizacoes sem dados inventados.",
    factsTitle: "NMRiH2 em resumo",
    factsCopy: "Os dados abaixo vêm da pesquisa usada na pagina inicial.",
    startCta: "Beginner Guide",
    playCta: footerContent.playGame,
    guideIndexTitle: "Guias de No More Room in Hell 2",
    guideIndexIntro: "Navegacao para mapas, armas, infeccao, Survival, conquistas e atualizacoes.",
    footerKicker: "Independent survival wiki",
    footerTitle: "Survive with your team.",
    footerCopy: footerContent.about
  },
  es: {
    eyebrow: "Fan-Made Survival Guide & Community Wiki",
    homeTitle: "No More Room in Hell 2",
    intro:
      "Wiki independiente de No More Room in Hell 2 con Beginner Guide, mapas, armas, infeccion, permadeath, Survival y actualizaciones.",
    browseTitle: "Explora la wiki",
    browseCopy:
      "Abre guias de mapas, armas, infeccion, Survival, logros y actualizaciones sin datos inventados.",
    factsTitle: "NMRiH2 en breve",
    factsCopy: "Los datos de abajo vienen de la investigacion usada para la pagina inicial.",
    startCta: "Beginner Guide",
    playCta: footerContent.playGame,
    guideIndexTitle: "Guias de No More Room in Hell 2",
    guideIndexIntro: "Navegacion para mapas, armas, infeccion, Survival, logros y actualizaciones.",
    footerKicker: "Independent survival wiki",
    footerTitle: "Survive with your team.",
    footerCopy: footerContent.about
  }
};

export const heroStats = homeContent.hero.stats.map((value, index) => ({
  value,
  label: ["Team Play", "Genre", "Stakes", "Core System", "Progression"][index],
  href: ["/guide/", "/review/", "/how-to-extract/", "/how-to-cure-infected/", "/best-skills/"][index]
}));

export const guideItems: GuideItem[] = keywordGuideItems;

export const quickFacts = homeContent.aboutGame.stats.map((item) => ({
  ...item,
  note: item.label === "Developer" ? "Official research" : "Homepage research",
  href: item.label === "Developer" ? officialLinks.site : item.label === "Platform" ? officialLinks.steam : "/guides/"
}));

export const mediaCards = [
  {
    tag: "Beginner Guide",
    title: "Learn the first deployment",
    summary: "Controls, objectives, inventory, resource management, teamwork, extraction, and new Responder mistakes.",
    image: steamImages.corridor,
    href: "/guide/"
  },
  {
    tag: "Maps",
    title: "Maps & objectives",
    summary: "Map layouts, objectives, extraction routes, supply locations, dangerous areas, and regrouping.",
    image: steamImages.extract,
    href: "/map/"
  },
  {
    tag: "Infection",
    title: "Infection & permadeath",
    summary: "Infection, survival options, character loss, and protecting valuable Responder progression.",
    image: steamImages.fire,
    href: "/how-to-cure-infected/"
  },
  {
    tag: "Weapons",
    title: "Weapons, skills & builds",
    summary: "Firearms, melee weapons, attachments, equipment, Responder perks, and loadout strategy.",
    image: steamImages.axe,
    href: "/weapons/"
  }
];

export const faqItems = [
  {
    question: "Does No More Room in Hell 2 have codes?",
    answer: "No researched active codes were confirmed. The site lists codes as 暂无 rather than inventing them.",
    href: "/codes/"
  },
  {
    question: "What platform is confirmed in the research?",
    answer: "The homepage research lists Steam as the platform and links to the official Steam page.",
    href: "/steam/"
  },
  {
    question: "Should Players Online be hardcoded?",
    answer: "No. Players Online, Peak CCU, and Recent Reviews are dynamic and should be refreshed before publication.",
    href: "/player-count/"
  },
  {
    question: "What should beginners read first?",
    answer: "Start with Beginner Guide, then Maps & Objectives, Infection & Permadeath, and Weapons, Skills & Builds.",
    href: "/guide/"
  }
];

export const genericPages: Record<string, GenericPage> = {
  "beginner-guide": {
    slug: "beginner-guide",
    eyebrow: "Beginner Guide",
    title: "No More Room in Hell 2 Beginner Guide",
    intro: homeContent.start.cards[0].description,
    facts: ["Controls", "Objectives", "Extraction"],
    sections: [
      {
        title: "What this guide covers",
        body: "This page should teach essential controls, objectives, inventory, resource management, teamwork rules, extraction mechanics, and mistakes new Responders should avoid."
      },
      {
        title: "Data boundary",
        body: "Anything not confirmed by the homepage research should be checked in-game or marked 待确认 before publication."
      }
    ]
  },
  maps: {
    slug: "maps",
    eyebrow: "Maps & Objectives",
    title: "No More Room in Hell 2 Maps & Objectives",
    intro: homeContent.start.cards[1].description,
    facts: ["Layouts", "Objectives", "Extraction routes"],
    sections: [
      {
        title: "Map intent",
        body: "Map content should help players learn layouts, important objectives, extraction routes, supply locations, dangerous areas, and how to regroup with the squad."
      },
      {
        title: "Unconfirmed numbers",
        body: "Map counts, objective counts, and supply-route specifics are marked 待确认 until refreshed from reliable sources."
      }
    ]
  },
  weapons: {
    slug: "weapons",
    eyebrow: "Weapons, Skills & Builds",
    title: "No More Room in Hell 2 Weapons, Skills & Builds",
    intro: homeContent.start.cards[3].description,
    facts: ["Firearms", "Melee weapons", "Responder perks"],
    sections: [
      {
        title: "Weapon intent",
        body: "Compare firearms, melee weapons, attachments, equipment, Responder perks, and loadout strategies for difficult missions."
      },
      {
        title: "Unconfirmed counts",
        body: "Specific weapon counts, skill counts, and build rankings are 待确认 unless refreshed from current game data."
      }
    ]
  },
  infection: {
    slug: "infection",
    eyebrow: "Infection",
    title: "No More Room in Hell 2 Infection",
    intro: "Understand infection, survival options, and how infection can threaten your Responder.",
    facts: ["Core Mechanic", "Survival options", "待确认 details"],
    sections: [
      {
        title: "Confirmed homepage angle",
        body: "The homepage research identifies Infection as a core mechanic and a major guide topic for players."
      },
      {
        title: "What needs verification",
        body: "Exact timers, cure items, and edge cases should be marked 待确认 until refreshed from reliable current sources."
      }
    ]
  },
  permadeath: {
    slug: "permadeath",
    eyebrow: "Permadeath",
    title: "No More Room in Hell 2 Permadeath",
    intro: "Character death can erase progression, so survival and teamwork matter.",
    facts: ["Character System", "Progression risk", "Teamwork"],
    sections: [
      {
        title: "Confirmed homepage angle",
        body: "The homepage research lists Permadeath as the Character System and says character death can erase progression."
      },
      {
        title: "Player value",
        body: "This page should explain how to protect valuable Responder progression without inventing unverified mechanics."
      }
    ]
  },
  survival: {
    slug: "survival",
    eyebrow: "Survival",
    title: "No More Room in Hell 2 Survival",
    intro: "Survival depends on teamwork, resource management, map knowledge, weapons, perks, and communication.",
    facts: ["Teamwork", "Scarce resources", "Communication"],
    sections: [
      {
        title: "Survival foundation",
        body: "Combat is deliberately dangerous: ammunition is scarce, zombies are lethal, and infection can threaten your Responder."
      },
      {
        title: "Guide scope",
        body: "Use this page as the central survival hub for Beginner Guide, Maps, Infection, Permadeath, and Weapons."
      }
    ]
  },
  achievements: {
    slug: "achievements",
    eyebrow: "Achievements",
    title: "No More Room in Hell 2 Achievements",
    intro: "Achievements are part of the researched SEO cluster, but individual achievement data is 待确认.",
    facts: ["SEO cluster", "待确认", "Steam"],
    sections: [
      {
        title: "Confirmed homepage angle",
        body: "The homepage research recommends Achievements as a priority content cluster."
      },
      {
        title: "Data boundary",
        body: "Achievement names, counts, and unlock conditions should be refreshed from Steam or in-game data before publication."
      }
    ]
  },
  updates: {
    slug: "updates",
    eyebrow: "Updates",
    title: "No More Room in Hell 2 Updates / Patch Notes",
    intro: "Release and major update information should be refreshed before hardcoding dynamic data.",
    facts: ["Major Update", "Dynamic data", "待确认"],
    sections: [
      {
        title: "Update intent",
        body: "Use this page for release and major update status, while avoiding stale hardcoded player counts or review values."
      },
      {
        title: "Data boundary",
        body: "Players Online, Peak CCU, Recent Reviews, and update dates should be dynamically fetched or manually refreshed."
      }
    ]
  },
  steam: {
    slug: "steam",
    eyebrow: "Steam",
    title: "No More Room in Hell 2 Steam",
    intro: "The homepage research confirms Steam as the platform for this site.",
    facts: ["Steam", "Official store", "Dynamic reviews"],
    sections: [
      {
        title: "Steam page",
        body: "Use the official Steam link from the research as the primary play and platform destination."
      },
      {
        title: "Dynamic data",
        body: "Players Online, Peak CCU, and Recent Reviews should not be hardcoded long-term."
      }
    ]
  },
  "player-count": {
    slug: "player-count",
    eyebrow: "Player Count",
    title: "No More Room in Hell 2 Player Count",
    intro: "Players Online and Peak CCU are dynamic data; the research says not to hardcode them long-term.",
    facts: ["Players Online", "Peak CCU", "Dynamic"],
    sections: [
      {
        title: "Current value",
        body: "待确认. This page should fetch or refresh Players Online and Peak CCU before publication."
      },
      {
        title: "SEO boundary",
        body: "The homepage may mention the data type, but stale numbers should not be displayed as permanent facts."
      }
    ]
  },
  review: {
    slug: "review",
    eyebrow: "Reviews",
    title: "No More Room in Hell 2 Reviews",
    intro: "Recent Reviews are dynamic Steam data and should be refreshed before publication.",
    facts: ["Recent Reviews", "Dynamic", "待确认"],
    sections: [
      {
        title: "Current value",
        body: "待确认. Recent Reviews should be checked from Steam before showing a percentage or verdict."
      },
      {
        title: "Buying-decision role",
        body: "Use this page to explain review sentiment only after current values are verified."
      }
    ]
  },
  "release-date": {
    slug: "release-date",
    eyebrow: "Release / Major Update",
    title: "No More Room in Hell 2 Release / Major Update",
    intro: "Release and major update content is important, but exact dynamic status should be refreshed before publication.",
    facts: ["Release", "Major Update", "待确认 date"],
    sections: [
      {
        title: "Confirmed homepage angle",
        body: "The homepage research says Release / Major Update should be a key homepage data area."
      },
      {
        title: "Data boundary",
        body: "Exact dates and version labels should be refreshed from reliable current sources before publication."
      }
    ]
  },
  controls: {
    slug: "controls",
    eyebrow: "Controls",
    title: "No More Room in Hell 2 Controls",
    intro: "Controls are part of the Beginner Guide path and should be verified in-game.",
    facts: ["Beginner Guide", "待确认", "In-game"],
    sections: [
      {
        title: "Controls scope",
        body: "The Beginner Guide should cover essential controls, but exact keybinds should be checked in-game before publication."
      }
    ]
  },
  codes: {
    slug: "codes",
    eyebrow: "Codes",
    title: "No More Room in Hell 2 Codes",
    intro: "No More Room in Hell 2 is not a code-driven Steam game; no researched active codes are confirmed.",
    facts: ["暂无", "暂无", "Do not invent"],
    sections: [
      {
        title: "Active codes",
        body: "暂无. The research explicitly says not to invent Active Codes for this game."
      },
      {
        title: "Sidebar rule",
        body: "The sidebar keeps two entries as 暂无 / 暂无."
      }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "Privacy information for the independent No More Room in Hell 2 Wiki.",
    facts: ["Fan-made site", "No affiliation", "No codes invented"],
    sections: [
      {
        title: "Site identity",
        body: footerContent.about
      },
      {
        title: "Game data",
        body: "Dynamic game data such as Players Online, Peak CCU, and Recent Reviews should be refreshed before publication and is not stored here as permanent personal data."
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    eyebrow: "Legal",
    title: "Terms of Service",
    intro: "Terms for using the independent No More Room in Hell 2 Wiki.",
    facts: ["Independent wiki", "Fan-made", "Not affiliated"],
    sections: [
      {
        title: "Independent fan site",
        body: footerContent.about
      },
      {
        title: "Accuracy boundary",
        body: "Uncertain or dynamic values are marked 待确认, and codes are shown as 暂无 when no researched active codes are confirmed."
      }
    ]
  },
  ...keywordPages
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ru" || value === "pt-br" || value === "es";
}

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : defaultLocale;
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http")) return href;
  if (locale === defaultLocale) return href;
  return `/${locale}${href}`;
}

export function normalizeSlug(segments: string[] = []): { locale: Locale; slug: string } {
  const [first, ...rest] = segments;
  if (isLocale(first)) {
    return { locale: first, slug: rest.join("/") };
  }
  return { locale: defaultLocale, slug: segments.join("/") };
}

export function pageBySlug(slug: string): GenericPage {
  const normalized = slug.replace(/^\/|\/$/g, "") || "guides";
  return (
    genericPages[normalized] ?? {
      slug: normalized,
      eyebrow: "Guide",
      title: `No More Room in Hell 2 ${titleCase(normalized)}`,
      intro: "This page is marked 待确认 until reliable No More Room in Hell 2 research is added.",
      facts: ["待确认", "No invented data", "Internal guide"],
      sections: [
        {
          title: "Purpose",
          body: "This fallback avoids dead internal links while clearly marking unresearched details as 待确认."
        }
      ]
    }
  );
}

function titleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
