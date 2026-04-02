import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    title: "APOLO",
    subtitle: "IPL platforma plná svetla.",
    desc: "10 filtrov, neobmedzené možnosti ošetrení. Fotorejuvenizácia, cievková terapia a trvalé odstránenie chĺpkov.",
    link: "https://www.bsltrade.sk/apolo/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/apolo-Photoroom.png",
    badge: "IPL & Lasery",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "HIFU CONTLEX SENSE",
    subtitle: "Od širokých línií po jemné detaily.",
    desc: "Vysokointenzívny fokusovaný ultrazvuk MADE IN KOREA. Magnetický systém riadenia pohybu pre presné ošetrenie.",
    link: "https://www.bsltrade.sk/hifu-contlex-sense/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2026/03/01.png",
    badge: "Novinka",
    accent: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "HIFU 360 SMART MAX",
    subtitle: "Inovácie za výnimočnú cenu.",
    desc: "Tri ošetrujúce hlavice, technologické novinky bežné pre drahšie prístroje. Vynikajúci pomer ceny a výkonu.",
    link: "https://www.bsltrade.sk/hifu-360d-max/",
    image: "https://www.bsltrade.sk/wp-content/uploads/2025/08/360.jpg",
    badge: "Bestseller",
    accent: "from-sky-500/20 to-indigo-500/20",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[760px] overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-light))]" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] animate-glow" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-sky-light/10 rounded-full blur-[130px] animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] animate-float-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-800 ease-out ${
            i === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.02] pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className={`transition-all duration-700 delay-200 ${i === current ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                      {slide.badge}
                    </span>
                    <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-5 leading-[1.05] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                  <p className="text-primary-foreground/50 mb-10 text-base max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={slide.link}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-2xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 transform hover:-translate-y-0.5"
                    >
                      Zistiť viac
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-2 px-6 py-4 text-primary-foreground/70 font-medium hover:text-primary-foreground transition-colors text-sm"
                    >
                      Kontaktujte nás
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={`hidden lg:flex justify-center transition-all duration-700 delay-400 ${i === current ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}>
                  <div className="relative">
                    {/* Decorative ring */}
                    <div className="absolute inset-0 -m-8 rounded-full border border-primary-foreground/5 animate-spin" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-0 -m-16 rounded-full border border-primary-foreground/[0.03] animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
                    
                    {/* Glow behind image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} rounded-full blur-[80px] scale-110`} />
                    
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="relative z-10 max-h-[460px] w-auto object-contain drop-shadow-2xl animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - minimal style */}
      <button
        onClick={prev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-primary-foreground/5 backdrop-blur-xl rounded-full text-primary-foreground/60 hover:bg-primary-foreground/15 hover:text-primary-foreground transition-all border border-primary-foreground/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-primary-foreground/5 backdrop-blur-xl rounded-full text-primary-foreground/60 hover:bg-primary-foreground/15 hover:text-primary-foreground transition-all border border-primary-foreground/10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
            style={{ width: i === current ? '48px' : '16px' }}
          >
            <div className="absolute inset-0 bg-primary-foreground/20 rounded-full" />
            {i === current && (
              <div className="absolute inset-0 bg-accent rounded-full animate-[progress_7s_linear]" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
