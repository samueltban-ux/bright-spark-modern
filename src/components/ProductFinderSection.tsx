import { useState } from "react";
import { ArrowRight, ArrowLeft, RefreshCw, Sparkles, CheckCircle2, Target } from "lucide-react";

type Goal = "tvar" | "telo" | "depilacia" | "rehab";
type Budget = "low" | "mid" | "high" | "premium";
type Size = "salon" | "klinika" | "wellness";
type Volume = "low" | "mid" | "high";

interface Answers {
  goal?: Goal;
  budget?: Budget;
  size?: Size;
  volume?: Volume;
}

interface Device {
  name: string;
  tagline: string;
  desc: string;
  link: string;
  image: string;
  badge?: string;
  match: (a: Answers) => number;
}

const devices: Device[] = [
  {
    name: "HIFU CONTLEX SENSE",
    tagline: "Prémiový lifting tváre",
    desc: "Vysokointenzívny fokusovaný ultrazvuk z Kórey, magnetický riadiaci systém pre presné ošetrenie.",
    link: "https://www.bsltrade.sk/hifu-contlex-sense/",
    image: "https://i.postimg.cc/BQ6gh7sS/HIFU-CONTLEX-SENSE.png",
    badge: "Prémium",
    match: (a) =>
      (a.goal === "tvar" ? 60 : 0) +
      (a.budget === "high" || a.budget === "premium" ? 30 : 0) +
      (a.size === "klinika" ? 15 : 0) +
      (a.volume === "high" ? 10 : 0),
  },
  {
    name: "HIFU 360 SMART MAX",
    tagline: "Najlepší pomer cena/výkon",
    desc: "Tri ošetrujúce hlavice, technologické novinky bežné pre drahšie prístroje. Vhodné aj pre menšie prevádzky.",
    link: "https://www.bsltrade.sk/hifu-360d-max/",
    image: "https://i.postimg.cc/MZt5mJkw/360.jpg",
    badge: "Bestseller",
    match: (a) =>
      (a.goal === "tvar" ? 50 : 0) +
      (a.budget === "mid" ? 30 : a.budget === "low" ? 20 : 5) +
      (a.size === "salon" ? 15 : 10) +
      (a.volume === "mid" ? 10 : 5),
  },
  {
    name: "APOLO IPL",
    tagline: "Univerzálna IPL platforma",
    desc: "10 filtrov pre fotorejuvenizáciu, cievkovú terapiu aj trvalú depiláciu. Jeden prístroj, neobmedzené možnosti.",
    link: "https://www.bsltrade.sk/apolo/",
    image: "https://i.postimg.cc/44wPQRC4/apolo-Photoroom.png",
    match: (a) =>
      (a.goal === "depilacia" ? 60 : 0) +
      (a.goal === "tvar" ? 20 : 0) +
      (a.budget === "mid" || a.budget === "high" ? 25 : 10) +
      (a.volume === "high" ? 15 : 5),
  },
  {
    name: "ENDO U-SHAPE",
    tagline: "Tvarovanie a redukcia tela",
    desc: "Endermológia v kombinácii s rádiofrekvenciou pre efektívnu redukciu celulitídy a tvarovanie postavy.",
    link: "https://www.bsltrade.sk/endo-u-shape/",
    image: "https://i.postimg.cc/h4Ms1RFW/01-1.png",
    match: (a) =>
      (a.goal === "telo" ? 65 : 0) +
      (a.budget === "mid" || a.budget === "high" ? 25 : 10) +
      (a.size !== "wellness" ? 10 : 5),
  },
];

const steps = [
  {
    key: "goal" as const,
    title: "Čo chcete robiť?",
    subtitle: "Zvoľte hlavnú oblasť ošetrenia",
    options: [
      { value: "tvar", label: "Ošetrenie tváre", emoji: "✨" },
      { value: "telo", label: "Ošetrenie tela", emoji: "💪" },
      { value: "depilacia", label: "Depilácia / IPL", emoji: "⚡" },
      { value: "rehab", label: "Rehabilitácia / Wellness", emoji: "🌿" },
    ],
  },
  {
    key: "budget" as const,
    title: "Aký je váš rozpočet?",
    subtitle: "Orientačná investícia do prístroja",
    options: [
      { value: "low", label: "Do 5 000 €", emoji: "💶" },
      { value: "mid", label: "5 000 – 15 000 €", emoji: "💶" },
      { value: "high", label: "15 000 – 25 000 €", emoji: "💎" },
      { value: "premium", label: "25 000 € a viac", emoji: "💎" },
    ],
  },
  {
    key: "size" as const,
    title: "Veľkosť prevádzky?",
    subtitle: "Kde bude prístroj využívaný",
    options: [
      { value: "salon", label: "Kozmetický salón", emoji: "💅" },
      { value: "klinika", label: "Estetická klinika", emoji: "🏥" },
      { value: "wellness", label: "Wellness / SPA", emoji: "🧖" },
    ],
  },
  {
    key: "volume" as const,
    title: "Koľko klientov týždenne?",
    subtitle: "Predpokladané vyťaženie prístroja",
    options: [
      { value: "low", label: "Do 20 klientov", emoji: "🟢" },
      { value: "mid", label: "20 – 50 klientov", emoji: "🟡" },
      { value: "high", label: "50+ klientov", emoji: "🔴" },
    ],
  },
];

const ProductFinderSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const current = steps[step];
  const progress = done ? 100 : ((step + (answers[current.key] ? 1 : 0)) / steps.length) * 100;

  const select = (value: string) => {
    const next = { ...answers, [current.key]: value as never };
    setAnswers(next);
    setTimeout(() => {
      if (step < steps.length - 1) setStep(step + 1);
      else setDone(true);
    }, 250);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const recommendations = [...devices]
    .map((d) => ({ d, score: d.match(answers) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.d);

  return (
    <section id="poradca" className="py-24 md:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-dark))]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--sky-light)/0.06)] rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/10 rounded-full mb-5 border border-accent/15">
            <Target className="w-3 h-3" /> Poradca výberu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 leading-tight">
            Nájdite svoj <span className="text-gradient">ideálny prístroj</span>
          </h2>
          <p className="text-primary-foreground/50 text-sm max-w-lg mx-auto">
            Odpovedzte na 4 krátke otázky a my vám odporučíme najvhodnejšie riešenie pre vašu prevádzku.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] mb-2.5">
              <span>{done ? "Výsledky" : `Krok ${step + 1} z ${steps.length}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-primary-foreground/[0.08] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-[hsl(var(--sky-light))] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div
              key={step}
              className="rounded-2xl bg-primary-foreground/[0.03] border border-primary-foreground/[0.08] p-6 md:p-10 backdrop-blur-sm animate-[fadeIn_0.4s_ease-out]"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1.5">
                {current.title}
              </h3>
              <p className="text-primary-foreground/40 text-sm mb-8">{current.subtitle}</p>

              <div className={`grid gap-3 ${current.options.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                {current.options.map((opt) => {
                  const selected = answers[current.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => select(opt.value)}
                      className={`group relative text-left rounded-xl p-5 border transition-all duration-300 hover:-translate-y-0.5 ${
                        selected
                          ? "bg-accent/15 border-accent/40"
                          : "bg-primary-foreground/[0.02] border-primary-foreground/[0.08] hover:bg-primary-foreground/[0.05] hover:border-accent/20"
                      }`}
                    >
                      <div className="text-2xl mb-2">{opt.emoji}</div>
                      <div className="text-primary-foreground font-semibold text-sm">{opt.label}</div>
                      {selected && (
                        <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-accent" />
                      )}
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <div className="mt-8 flex justify-between items-center">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent text-sm font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Späť
                  </button>
                  <span className="text-[10px] text-primary-foreground/30 uppercase tracking-wider">
                    Klikni pre pokračovanie
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl bg-primary-foreground/[0.03] border border-primary-foreground/[0.08] p-6 md:p-10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Odporúčanie pre vás
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
                Tieto prístroje sa hodia <span className="text-gradient">najviac</span>
              </h3>

              <div className="space-y-4">
                {recommendations.map((d, i) => (
                  <a
                    key={d.name}
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl bg-primary-foreground/[0.03] border border-primary-foreground/[0.08] hover:border-accent/30 hover:bg-primary-foreground/[0.06] transition-all p-5 md:p-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                      <div className="relative w-full sm:w-32 h-32 shrink-0 rounded-lg bg-gradient-to-br from-primary-foreground/[0.04] to-transparent flex items-center justify-center overflow-hidden">
                        <img
                          src={d.image}
                          alt={d.name}
                          loading="lazy"
                          className="max-h-[110px] w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-accent/15 text-accent text-xs font-bold">
                            {i + 1}
                          </span>
                          {d.badge && (
                            <span className="text-[9px] font-bold tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                              {d.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-primary-foreground font-bold text-lg mb-0.5">{d.name}</h4>
                        <p className="text-primary-foreground/60 text-xs mb-2 font-medium">{d.tagline}</p>
                        <p className="text-primary-foreground/40 text-sm leading-relaxed line-clamp-2">{d.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all hidden sm:block" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-primary-foreground/[0.06] pt-6">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-medium transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Spustiť znova
                </button>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/20"
                >
                  Chcem osobnú konzultáciu <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ProductFinderSection;
