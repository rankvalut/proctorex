import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ro", "en", "uk", "ru", "es"],
  // Used when no locale matches
  defaultLocale: "ro",
});

export type Locale = (typeof routing.locales)[number];
