import "server-only";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "no"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  no: () =>
    import("../../dictionaries/no.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
