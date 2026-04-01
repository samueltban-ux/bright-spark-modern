import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Prístroje na ošetrenie tváre",
    subtitle: "HIFU CONTLEX SENSE",
    image: "https://www.bsltrade.sk/wp-content/uploads/2026/03/01.png",
    href: "https://www.bsltrade.sk/hifu-contlex-sense/",
    count: "15+ prístrojov",
  },
  {
    title: "Prístroje na ošetrenie tela",
    subtitle: "ENDO U-SHAPE",
    image: "https://www.bsltrade.sk/wp-content/uploads/2025/08/01-1.png",
    href: "https://www.bsltrade.sk/endo-u-shape/",
    count: "12+ prístrojov",
  },
  {
    title: "IPL a Lasery",
    subtitle: "APOLO",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/apolo-Photoroom.png",
    href: "https://www.bsltrade.sk/apolo/",
    count: "5+ prístrojov",
  },
  {
    title: "Solária",
    subtitle: "TECNOSOLE",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/solaria.jpg",
    href: "https://www.bsltrade.sk/tecnosole/",
    count: "10+ modelov",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full mb-4">
            Naša ponuka
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Naše <span className="text-gradient">kategórie</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ponúkame širokú škálu prístrojov pre estetickú medicínu, rehabilitáciu a wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] to-[hsl(var(--navy))]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-[70%] w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-dark))] via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-primary-foreground/20">
                <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-accent tracking-wider uppercase">
                  {cat.count}
                </span>
                <h3 className="text-lg font-bold text-primary-foreground mt-1 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 mt-0.5">{cat.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
