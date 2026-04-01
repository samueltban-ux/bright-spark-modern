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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full mb-4">
            Referencie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Čo hovoria naši <span className="text-gradient">zákazníci</span>
          </h2>
          <p className="text-muted-foreground text-lg">Reálne skúsenosti od našich klientov</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-accent/15 absolute top-6 right-6 group-hover:text-accent/25 transition-colors" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-accent-foreground font-bold text-sm shadow-md">
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
