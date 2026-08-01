import {
  Sparkle,
  ShieldCheck,
  FlowerLotus,
  Leaf,
  Drop,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";

const BENEFITS = [
  {
    icon: Sparkle,
    title: "Calmare rapidă",
    text: "Reduce senzația de disconfort, mâncărime și arsură în zona sensibilă.",
  },
  {
    icon: ShieldCheck,
    title: "Protecție zilnică",
    text: "Formează un strat protector delicat peste țesutul iritat.",
  },
  {
    icon: FlowerLotus,
    title: "Regenerare",
    text: "Sprijină refacerea naturală a țesutului inflamat.",
  },
  {
    icon: Leaf,
    title: "100% plante",
    text: "Extracte naturale din calendula, lavandă și hamamelis.",
  },
  {
    icon: Drop,
    title: "Blând cu pielea",
    text: "Formulă ușoară, fără parfum artificial, pentru piele sensibilă.",
  },
  {
    icon: Timer,
    title: "Efect discret",
    text: "Textură cremoasă care se absoarbe rapid, fără reziduuri.",
  },
];

export function Benefits() {
  return (
    <section id="beneficii" className="relative bg-cream-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-leaf-600">
              Beneficii
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-forest-900 sm:text-4xl md:text-5xl">
              Disconfortul nu ar trebui să îți controleze viața.
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              PROCTOREX aduce alinare discretă și constantă, astfel încât să-ți
              poți relua rutina fără griji. O formulă simplă, pe bază de plante,
              creată pentru calmarea și protecția țesutului inflamat.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const featured = i === 2;
            return (
              <Reveal key={benefit.title} delay={i * 0.06}>
                <article
                  className={
                    featured
                      ? "flex h-full flex-col rounded-blob bg-forest p-7 text-cream shadow-card"
                      : "flex h-full flex-col rounded-blob border border-cream-3 bg-cream p-7 shadow-soft"
                  }
                >
                  <span
                    className={
                      featured
                        ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15 text-gold"
                        : "flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-soft text-forest-700"
                    }
                  >
                    <benefit.icon size={24} weight="bold" />
                  </span>
                  <h3
                    className={
                      featured
                        ? "font-display mt-5 text-xl font-bold text-cream"
                        : "font-display mt-5 text-xl font-bold text-forest-900"
                    }
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? "mt-2 leading-relaxed text-cream/80"
                        : "mt-2 leading-relaxed text-ink-soft"
                    }
                  >
                    {benefit.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
