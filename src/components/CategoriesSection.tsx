import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Ošetrenie tváre",
    subtitle: "HIFU CONTLEX SENSE",
    image: "https://www.bsltrade.sk/wp-content/uploads/2026/03/01.png",
    href: "https://www.bsltrade.sk/hifu-contlex-sense/",
    count: "15+ prístrojov",
  },
  {
    title: "Ošetrenie tela",
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
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/8 rounded-full mb-5 border border-accent/15">
              Naša ponuka
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Naše <span className="text-gradient">kategórie</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Širokú škálu prístrojov pre estetickú medicínu, rehabilitáciu a wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Dark background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy-dark))]" />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-[65%] w-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
                />
              </div>

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--navy-dark))] via-[hsl(var(--navy-dark)/0.8)] to-transparent" />

              {/* Arrow icon */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-primary-foreground/0 group-hover:bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-primary-foreground/0 group-hover:border-primary-foreground/10">
                <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-semibold text-accent tracking-[0.15em] uppercase">
                  {cat.count}
                </span>
                <h3 className="text-lg font-bold text-primary-foreground mt-1.5 group-hover:text-accent transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-sm text-primary-foreground/50 mt-0.5">{cat.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
