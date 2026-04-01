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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Čo hovoria naši <span className="text-gradient">zákazníci</span>
          </h2>
          <p className="text-muted-foreground">Reálne skúsenosti od našich klientov</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border relative"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-bold text-sm">
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
