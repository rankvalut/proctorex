import { Leaf } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-cream-3 bg-cream-2"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="PROCTOREX">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
            <Leaf weight="fill" size={18} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-forest-900">
            PROCTOREX
          </span>
        </a>

        <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold text-ink-soft">
          <a href="#politica" className="transition-colors duration-200 hover:text-forest">
            Politica de confidențialitate
          </a>
          <span aria-hidden="true" className="text-cream-4">|</span>
          <a href="#termeni" className="transition-colors duration-200 hover:text-forest">
            Termeni și condiții
          </a>
        </nav>

        <p className="text-center text-sm text-ink-soft">
          © 2024 PROCTOREX — Fabricat în România. Certificat ISO 22000:2018.
        </p>
      </div>
    </footer>
  );
}
