import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Petra", city: "Martin", text: "Poznám túto firmu už 15 rokov. Máme od nich už štyri prístroje. Zatiaľ vždy absolútna profesionalita a serióznosť." },
  { name: "Ivana", city: "Bratislava", text: "Ďakujem za perfektnú starostlivosť o prístroj PROFACIAL. Je fakt vynikajúci, aj služby poskytované k nemu sú na úrovni." },
  { name: "Zuzana", city: "Spišská Nová Ves", text: "Prístroj osobne dovezený, zmontovaný, zaškolenie priamo v salóne. Ďakujem za komplexnú službu." },
  { name: "Stáňa", city: "Pardubice", text: "Děkuji za promptní vyřízení naší objednávky. Přístroj funguje jak má. Spolupráce je absolutně bez problémů." },
  { name: "Monika", city: "Bratislava", text: "Prístroj bol po dohode prevzatý do servisu v piatok večer. V pondelok ráno už vrátený. Som prekvapená." },
  { name: "Janka", city: "Topoľčany", text: "Potrebovala som poradiť pri ošetrení s IPL-kom. Ďakujem, že dvíhate telefón aj večer o ôsmej." },
];

const ReviewsSection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/8 rounded-full mb-5 border border-accent/15">
            Referencie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Čo hovoria naši <span className="text-gradient">zákazníci</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Reálne skúsenosti od našich klientov</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden hover:-translate-y-1"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/50 to-transparent transition-all duration-500" />

              <Quote className="w-8 h-8 text-accent/10 mb-4 group-hover:text-accent/20 transition-colors" />

              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/75 mb-8 leading-relaxed text-[15px]">
                „{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
