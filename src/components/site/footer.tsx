import {
  Leaf,
  Phone,
  Envelope,
  Clock,
  ShieldCheck,
  Package,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PRODUCT_ANCHORS = [
  "#beneficii",
  "#ingrediente",
  "#cum-functioneaza",
  "#preturi",
  "#comanda",
];

const LEGAL_SLUGS = [
  "politica-de-confidentialitate",
  "termeni-si-conditii",
  "nota-medicala",
  "politica-cookie",
  "retur",
];

export async function Footer() {
  const t = await getTranslations("footer");
  const brand = await getTranslations("brand");
  const locale = await getLocale();
  const productLinks = t.raw("productLinks") as string[];
  const legalLinks = t.raw("legalLinks") as string[];

  return (
    <footer
      id="contact"
      className="border-t border-cream-3 bg-cream-2"
    >
      <div className="mx-auto max-w-6xl px-5 pt-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.15fr]">
          {/* Brand */}
          <div>
            <a
              href={`/${locale}#top`}
              className="flex items-center gap-2.5"
              aria-label="PROCTOREX"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                <Leaf weight="fill" size={20} />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-lg font-bold tracking-tight text-forest-900">
                  PROCTOREX
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-600">
                  {brand("tagline")}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-ink-soft">
              {t("brandDesc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-leaf/40 bg-leaf-soft px-3 py-1 text-xs font-bold text-forest-700">
                {t("madeIn")}
              </span>
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold-600">
                {t("iso")}
              </span>
            </div>
          </div>

          {/* Product */}
          <nav aria-label={t("colProduct")}>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest-900">
              {t("colProduct")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {productLinks.map((label, i) => (
                <li key={label}>
                  <a
                    href={`/${locale}${PRODUCT_ANCHORS[i]}`}
                    className="text-sm font-semibold text-ink-soft transition-colors duration-200 hover:text-forest"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label={t("colLegal")}>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest-900">
              {t("colLegal")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((label, i) => (
                <li key={label}>
                  <Link
                    href={`/${LEGAL_SLUGS[i]}`}
                    className="text-sm font-semibold text-ink-soft transition-colors duration-200 hover:text-forest"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest-900">
              {t("colContact")}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <Phone size={16} weight="bold" className="text-forest-600" />
                {t("phone")}
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <Envelope size={16} weight="bold" className="text-forest-600" />
                {t("email")}
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <Clock size={16} weight="bold" className="text-forest-600" />
                {t("schedule")}
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-3 py-1 text-xs font-semibold text-ink-soft">
                <Package size={13} weight="bold" className="text-forest-600" />
                {t("discreet")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-3 py-1 text-xs font-semibold text-ink-soft">
                <ShieldCheck size={13} weight="bold" className="text-forest-600" />
                {t("secure")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-3 py-1 text-xs font-semibold text-ink-soft">
                <Truck size={13} weight="bold" className="text-forest-600" />
                {t("shipping")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-3 py-6 sm:flex-row">
          <p className="text-center text-sm text-ink-soft sm:text-left">
            {t("copyright")}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/60">
            PROCTOREX ®
          </p>
        </div>
      </div>
    </footer>
  );
}
