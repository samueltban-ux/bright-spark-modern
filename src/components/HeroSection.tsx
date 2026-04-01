import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "APOLO",
    subtitle: "IPL platforma plná svetla.",
    desc: "10 filtrov, neobmedzené možnosti ošetrení. Fotorejuvenizácia, cievková terapia a trvalé odstránenie chĺpkov.",
    link: "https://www.bsltrade.sk/apolo/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/apolo-Photoroom.png",
    badge: "IPL & Lasery",
  },
  {
    title: "HIFU CONTLEX SENSE",
    subtitle: "Od širokých línií po jemné detaily.",
    desc: "Vysokointenzívny fokusovaný ultrazvuk MADE IN KOREA. Magnetický systém riadenia pohybu pre presné ošetrenie.",
    link: "https://www.bsltrade.sk/hifu-contlex-sense/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2026/03/01.png",
    badge: "Novinka",
  },
  {
    title: "HIFU 360 SMART MAX",
    subtitle: "Inovácie za výnimočnú cenu.",
    desc: "Tri ošetrujúce hlavice, technologické novinky bežné pre drahšie prístroje. Vynikajúci pomer ceny a výkonu.",
    link: "https://www.bsltrade.sk/hifu-360d-max/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2025/08/360.jpg",
    badge: "Bestseller",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative h-[560px] md:h-[640px] lg:h-[720px] overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-light))]">
      {/* Animated background mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-light/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === current 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div className={`transition-all duration-700 delay-200 ${i === current ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-accent/20 text-accent-foreground backdrop-blur-sm rounded-full mb-6 border border-accent/30">
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3 font-light">
                    {slide.subtitle}
                  </p>
                  <p className="text-primary-foreground/60 mb-8 text-base max-w-md leading-relaxed">
                    {slide.desc}
                  </p>
                  <a
                    href={slide.link}
                    className="group inline-flex items-center gap-3 px-8 py-4 gradient-sky text-accent-foreground font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transform hover:-translate-y-0.5"
                  >
                    Zistiť viac
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Image */}
                <div className={`hidden lg:flex justify-center transition-all duration-700 delay-300 ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <div className="relative">
                    <div className="absolute inset-0 gradient-sky rounded-full blur-[80px] opacity-20 scale-75" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="relative z-10 max-h-[420px] w-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-md rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-all border border-primary-foreground/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-md rounded-full text-primary-foreground hover:bg-primary-foreground/20 transition-all border border-primary-foreground/10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current 
                ? "bg-accent w-10" 
                : "bg-primary-foreground/30 w-4 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
