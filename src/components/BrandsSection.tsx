import Reveal from "./Reveal";

const brands = [
  { name: "GENERAL PROJECT", country: "Taliansko" },
  { name: "APOLO", country: "Európa" },
  { name: "CONTLEX", country: "Kórea" },
  { name: "ENDO U-SHAPE", country: "Európa" },
  { name: "RIGENERA", country: "Taliansko" },
  { name: "PICOLASER", country: "Európa" },
  { name: "EM MASTER", country: "Európa" },
];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden border-y border-border/40">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/8 rounded-full mb-4 border border-accent/15">
              Naši partneri
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Zastupujeme <span className="text-gradient">európske značky</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
              Spolupracujeme s overenými výrobcami profesionálnych prístrojov
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group relative rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm px-4 py-6 flex flex-col items-center justify-center text-center hover:border-accent/40 hover:bg-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="font-extrabold tracking-tight text-foreground/80 group-hover:text-accent transition-colors text-sm md:text-base">
                  {b.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">
                  {b.country}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BrandsSection;
