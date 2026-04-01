import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "PROFACIAL",
    subtitle: "Výsledky, ktoré vás prekvapia.",
    desc: "Jedinečná starostlivosť o vašu pleť.",
    link: "https://www.bsltrade.sk/profacial/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/PRISTROJE-NA-OSETRENIE-TVARE.jpg",
  },
  {
    title: "ROBOLEX PLUS",
    subtitle: "Telové ošetrenie bez kompromisov.",
    desc: "Jednoznačne svetová špička.",
    link: "https://www.bsltrade.sk/robolex/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/PRISTROJE-NA-OSETRENIE-TELA.jpg",
  },
  {
    title: "APOLO LASER",
    subtitle: "IPL-ko, ktoré Vás prekvapí.",
    desc: "Vysoká variabilita a univerzálnosť.",
    link: "https://www.bsltrade.sk/apolo/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/IPL-a-LASERY.jpg",
  },
  {
    title: "SOLÁRIA TECNOSOLE",
    subtitle: "Revolúcia v solárnom opaľovaní.",
    desc: "Najmodernejšie technológie.",
    link: "https://www.bsltrade.sk/xsun23/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/solaria.jpg",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase gradient-sky text-accent-foreground rounded-full mb-4">
                  Nový produkt
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 font-light">
                  {slide.subtitle}
                </p>
                <p className="text-primary-foreground/70 mb-8 text-lg">
                  {slide.desc}
                </p>
                <a
                  href={slide.link}
                  className="inline-flex items-center gap-2 px-8 py-3.5 gradient-sky text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Prejsť na produkt
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-card/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-card/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-accent w-8" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
