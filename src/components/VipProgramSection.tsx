import { Gift, Users, ArrowRight, Star, Repeat, BadgeEuro } from "lucide-react";

const benefits = [
  {
    icon: BadgeEuro,
    title: "1 100 € v hotovosti",
    description: "Získajte priamu finančnú odmenu 1 100 € — reálne peniaze na váš účet.",
  },
  {
    icon: Gift,
    title: "1 800 € kredit",
    description: "Získajte kredit 1 800 € na ďalší prístroj alebo čokoľvek z našej ponuky.",
  },
  {
    icon: Repeat,
    title: "Bez obmedzení",
    description: "Odmeny môžete získavať opakovane — žiadne limity, žiadne stropy.",
  },
  {
    icon: Users,
    title: "Jednoduchý vstup",
    description: "Kontaktujte nás a my vám osobne vysvetlíme, ako sa zapojiť.",
  },
];

const VipProgramSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-background to-primary/[0.04]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
              VIP Program
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-heading">
            Staňte sa súčasťou{" "}
            <span className="text-accent">nášho VIP Programu</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Ste naším dlhodobým klientom a máte od nás viacero prístrojov? Máme pre vás
            exkluzívny program s atraktívnymi odmenami, ktoré môžete získavať{" "}
            <strong className="text-foreground">opakovane a bez akýchkoľvek limitov</strong>.
            Kontaktujte nás a radi vám predstavíme všetky detaily osobne.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-accent/[0.06] hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-2xl border border-border/40 p-8 md:p-10">
          <h3 className="text-lg font-bold text-foreground mb-3">Máte záujem?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Kontaktujte nás a my vám radi vysvetlíme všetky podmienky a výhody VIP Programu osobne.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Kontaktujte nás
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VipProgramSection;
