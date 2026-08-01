import type { routing } from "./routing";

type Locale = (typeof routing.locales)[number];
type Messages = typeof import("../../messages/ro.json");

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
