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
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left md:text-center mb-8 md:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/8 rounded-full mb-5 border border-accent/15">
            Referencie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Čo hovoria naši <span className="text-gradient">zákazníci</span>
          </h2>
           <p className="text-muted-foreground text-sm max-w-md md:mx-auto">Reálne skúsenosti od našich klientov</p>
        </div>

         <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((r, i) => (
            <div
              key={i}
               className="group min-w-[86%] snap-center bg-card rounded-lg p-5 sm:p-7 hover:shadow-lg transition-all duration-500 border border-border/40 relative overflow-hidden hover:-translate-y-1 md:min-w-0"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/40 to-transparent transition-all duration-500" />

              <Quote className="w-7 h-7 text-accent/8 mb-3 group-hover:text-accent/15 transition-colors" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/70 mb-7 leading-relaxed text-sm">
                „{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-[11px] text-muted-foreground">{r.city}</p>
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
