import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const legalLinks = t.raw("legalLinks") as string[];

  return (
    <footer id="contact" className="border-t border-forest-900 bg-forest px-6 py-4 text-cream">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-2 text-center text-[11px] md:flex-row md:gap-3">
        <Link href="/politica-de-confidentialitate" className="hover:underline">
          {legalLinks[0]}
        </Link>
        <span className="hidden text-cream/60 md:inline" aria-hidden="true">|</span>
        <Link href="/termeni-si-conditii" className="hover:underline">
          {legalLinks[1]}
        </Link>
        <span className="hidden text-cream/60 md:inline" aria-hidden="true">|</span>
        <span>{t("copyright")}</span>
      </div>
    </footer>
  );
}
