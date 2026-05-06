import { ArrowUpRight, ArrowRight } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import contlexSenseFull from "@/assets/contlex-sense-full.png";

const categories = [
  {
    title: "Ošetrenie tváre",
    subtitle: "HIFU CONTLEX SENSE",
    image: contlexSenseFull,
    href: "https://www.bsltrade.sk/hifu-contlex-sense/",
    count: "15+",
    label: "prístrojov",
  },
  {
    title: "Ošetrenie tela",
    subtitle: "ENDO U-SHAPE",
    image: "https://i.postimg.cc/h4Ms1RFW/01-1.png",
    href: "https://www.bsltrade.sk/endo-u-shape/",
    count: "12+",
    label: "prístrojov",
  },
  {
    title: "IPL a Lasery",
    subtitle: "APOLO",
    image: "https://i.postimg.cc/44wPQRC4/apolo-Photoroom.png",
    href: "https://www.bsltrade.sk/apolo/",
    count: "5+",
    label: "prístrojov",
  },
  {
    title: "Solária",
    subtitle: "TECNOSOLE",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/solaria.jpg",
    href: "https://www.bsltrade.sk/tecnosole/",
    count: "10+",
    label: "modelov",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/8 rounded-full mb-5 border border-accent/15">
              Naša ponuka
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Naše <span className="text-gradient">kategórie</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Široká škála prístrojov pre estetickú medicínu, rehabilitáciu a wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] transition-all duration-500 transform hover:-translate-y-1.5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.95)] to-[hsl(var(--navy-dark))]" />

              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-transparent transition-all duration-700" />

              {/* Counter badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="flex items-baseline gap-1 px-3 py-1.5 bg-primary-foreground/5 backdrop-blur-xl rounded-lg border border-primary-foreground/10">
                  <span className="text-lg font-bold text-accent">{cat.count}</span>
                  <span className="text-[9px] text-primary-foreground/40 uppercase tracking-wider">{cat.label}</span>
                </div>
              </div>

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pt-14">
                <SmartImage
                  src={cat.image}
                  alt={cat.title}
                  wrapperClassName={`${cat.subtitle === "HIFU CONTLEX SENSE" ? "max-h-[12%]" : "max-h-[60%]"} w-auto flex items-center justify-center`}
                  className="max-h-full w-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
                />
              </div>

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[hsl(var(--navy-dark))] via-[hsl(var(--navy-dark)/0.9)] to-transparent" />

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-primary-foreground/0 group-hover:bg-accent/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300 mb-0.5">
                  {cat.title}
                </h3>
                <p className="text-xs text-primary-foreground/40">{cat.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.bsltrade.sk"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            Zobraziť celý katalóg
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
