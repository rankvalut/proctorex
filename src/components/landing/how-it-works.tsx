import {
  Flame,
  ShieldStar,
  FlowerTulip,
  DropHalf,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    icon: Flame,
    step: "01",
    title: "Calmează disconfortul",
    text: "Extractele de calendula și mușețel calmează senzația de mâncărime, arsură și disconfort încă de la primele aplicări.",
  },
  {
    icon: ShieldStar,
    step: "02",
    title: "Protejează zona sensibilă",
    text: "Hamamelisul și untul de karité formează o barieră delicată care protejează țesutul iritat de frecare și iritațiile repetate.",
  },
  {
    icon: FlowerTulip,
    step: "03",
    title: "Susține regenerarea",
    text: "Aloe vera și lavanda hidratează în profunzime și sprijină refacerea naturală a țesutului inflamat, pentru confort de durată.",
  },
];

const USAGE = [
  "Aplică o cantitate mică de cremă pe zona curată și uscată.",
  "Folosește de 2–3 ori pe zi sau conform indicațiilor de pe etichetă.",
  "Produs de uz extern — nu se administrează intern.",
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="relative overflow-hidden">
      {/* decorative leaves */}
      <div className="pointer-events-none absolute -left-10 top-10 opacity-30">
        <svg viewBox="0 0 120 120" className="w-36" fill="none" aria-hidden="true">
          <path d="M96 6C84 26 66 58 22 112" stroke="#5f8d70" strokeOpacity="0.5" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M86 24c-14-4-25-12-30-22 15-2 27 5 30 22Z" fill="#84ac90" />
          <path d="M70 44c-15-1-28-7-35-16 14-5 28 0 35 16Z" fill="#84ac90" opacity="0.7" />
          <path d="M54 64c-14 1-27-3-35-11 12-6 27-4 35 11Z" fill="#84ac90" opacity="0.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Cum funcționează</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              Cum acționează PROCTOREX
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              Formulă concepută pentru a răspunde celor trei nevoi principale
              ale zonei sensibile: calmarea imediată, protecția și sprijinirea
              regenerării țesutului inflamat.
            </p>
          </div>
        </Reveal>

        {/* Mechanism steps */}
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* connector line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-linear-to-r from-transparent via-leaf/50 to-transparent md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="flex">
              <div className="relative flex h-full flex-col rounded-blob border border-cream-3 bg-cream p-7 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700">
                    <s.icon size={28} weight="bold" />
                  </span>
                  <span className="font-display text-4xl font-bold text-cream-3">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-forest-900">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Usage + note */}
        <Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-blob border border-cream-3 bg-cream p-7 shadow-soft md:p-8">
              <h3 className="font-display flex items-center gap-2.5 text-xl font-bold text-forest-900">
                <DropHalf size={24} weight="bold" className="text-forest-600" />
                Cum se folosește
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {USAGE.map((u) => (
                  <li
                    key={u}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-forest-700">
                      <Check size={12} weight="bold" />
                    </span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-blob bg-forest p-7 text-cream shadow-card md:p-8">
              <h3 className="font-display text-xl font-bold text-gold">
                De reținut
              </h3>
              <p className="mt-3 leading-relaxed text-cream/85">
                PROCTOREX este un produs cosmetic de uz extern, destinat
                îngrijirii și confortului zonei sensibile. Nu înlocuiește
                consultul medical: dacă disconfortul persistă sau se agravează,
                adresează-te medicului tău.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
