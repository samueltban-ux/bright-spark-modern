import { useState, useEffect, useCallback, useRef, MouseEvent } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Zap } from "lucide-react";
import hifuContlexSense from "@/assets/hifu-contlex-sense.png";

const slides = [
  {
    title: "APOLO",
    subtitle: "IPL platforma plná svetla.",
    desc: "10 filtrov, neobmedzené možnosti ošetrení. Fotorejuvenizácia, cievková terapia a trvalé odstránenie chĺpkov.",
    link: "https://www.bsltrade.sk/apolo/",
    image: "https://i.postimg.cc/44wPQRC4/apolo-Photoroom.png",
    badge: "IPL & Lasery",
    gradient: "from-blue-600/30 via-cyan-500/20 to-blue-400/10",
  },
  {
    title: "HIFU CONTLEX SENSE",
    subtitle: "Od širokých línií po jemné detaily.",
    desc: "Vysokointenzívny fokusovaný ultrazvuk MADE IN KOREA. Magnetický systém riadenia pohybu pre presné ošetrenie.",
    link: "https://www.bsltrade.sk/hifu-contlex-sense/",
    image: hifuContlexSense,
    badge: "Novinka",
    gradient: "from-violet-600/30 via-purple-500/20 to-blue-400/10",
  },
  {
    title: "HIFU 360 SMART MAX",
    subtitle: "Inovácie za výnimočnú cenu.",
    desc: "Tri ošetrujúce hlavice, technologické novinky bežné pre drahšie prístroje. Vynikajúci pomer ceny a výkonu.",
    link: "https://www.bsltrade.sk/hifu-360d-max/",
    image: "https://i.postimg.cc/MZt5mJkw/360.jpg",
    badge: "Bestseller",
    gradient: "from-sky-600/30 via-indigo-500/20 to-blue-400/10",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 900);
  }, [isTransitioning]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[620px] md:min-h-[700px] lg:min-h-[780px] overflow-hidden"
    >
      {/* Dark base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-light)/0.8)]" />

      {/* Animated conic gradient — breathing */}
      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen pointer-events-none animate-[heroConic_22s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, hsl(var(--accent)/0.5), transparent 25%, hsl(var(--sky-light)/0.4) 50%, transparent 75%, hsl(var(--accent)/0.5))",
          filter: "blur(80px)",
        }}
      />

      {/* Animated mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[200px] animate-float-slow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[hsl(var(--sky-light)/0.08)] rounded-full blur-[180px] animate-glow" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] animate-float" />
      </div>

      {/* Slide counter — top right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 hidden sm:flex items-baseline gap-1 font-mono">
        <span className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
          {pad(current + 1)}
        </span>
        <span className="text-primary-foreground/30 text-sm">/ {pad(slides.length)}</span>
      </div>

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === current
              ? "opacity-100 translate-x-0"
              : i > current
              ? "opacity-0 translate-x-[5%]"
              : "opacity-0 -translate-x-[5%]"
          }`}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text content */}
                <div className={`transition-all duration-700 delay-200 ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                      <Zap className="w-3 h-3 text-accent" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
                        {slide.badge}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-4 leading-[1.02] tracking-tight">
                    {slide.title.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi === 0 ? (
                          <span className="text-gradient">{word}</span>
                        ) : (
                          <span> {word}</span>
                        )}
                      </span>
                    ))}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-foreground/70 mb-3 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                  <p className="text-primary-foreground/40 mb-10 text-sm md:text-base max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={slide.link}
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transform hover:-translate-y-0.5 text-sm"
                    >
                      Zistiť viac
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-primary-foreground/50 font-medium hover:text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/20 rounded-xl transition-all text-sm"
                    >
                      Kontaktujte nás
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex justify-center items-center transition-all duration-700 delay-300 ${i === current ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}`}>
                  <div
                    className="relative will-change-transform transition-transform duration-300 ease-out"
                    style={{
                      transform: i === current
                        ? `perspective(1200px) rotateY(${tilt.x * 5}deg) rotateX(${-tilt.y * 5}deg) translate3d(${tilt.x * 12}px, ${tilt.y * 12}px, 0)`
                        : undefined,
                    }}
                  >
                    {/* Multi-layer gradient glow */}
                    <div className={`absolute inset-0 -m-16 bg-gradient-to-br ${slide.gradient} rounded-full blur-[120px] scale-125 animate-glow`} />
                    <div className="absolute inset-0 -m-8 bg-accent/10 rounded-full blur-[80px] scale-110" />

                    {/* Outer rotating ring with dashes */}
                    <div className="absolute inset-0 -m-24 rounded-full border border-dashed border-primary-foreground/[0.08] animate-spin hidden lg:block" style={{ animationDuration: '50s' }} />

                    {/* Middle rotating ring */}
                    <div className="absolute inset-0 -m-16 rounded-full border border-primary-foreground/[0.06] animate-spin hidden md:block" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

                    {/* Inner gradient circle */}
                    <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-primary-foreground/[0.04] via-transparent to-accent/[0.03]" />

                    {/* Orbital dots */}
                    <div className="absolute inset-0 -m-24 hidden lg:block animate-spin" style={{ animationDuration: '25s' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_8px_hsl(var(--accent))]" />
                    </div>
                    <div className="absolute inset-0 -m-16 hidden md:block animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/70 shadow-[0_0_10px_hsl(var(--accent))]" />
                    </div>

                    {/* Floating sparkles */}
                    <Sparkles className="absolute -top-4 -right-2 w-5 h-5 text-accent/60 animate-float" style={{ animationDelay: '0.5s' }} />
                    <Sparkles className="absolute bottom-8 -left-6 w-4 h-4 text-accent/40 animate-float-slow" style={{ animationDelay: '1.2s' }} />

                    {/* Reflection plate under product */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-accent/20 rounded-[50%] blur-2xl" />

                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="relative z-10 max-h-[360px] md:max-h-[480px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-primary-foreground/5 backdrop-blur-xl rounded-xl text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all border border-primary-foreground/10"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-primary-foreground/5 backdrop-blur-xl rounded-xl text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all border border-primary-foreground/10"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`group relative flex items-center gap-2 transition-all duration-500 ${
              i === current ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <div className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
              style={{ width: i === current ? '40px' : '12px' }}
            >
              <div className="absolute inset-0 bg-primary-foreground/20 rounded-full" />
              {i === current && (
                <div className="absolute inset-0 bg-accent rounded-full animate-[progress_7s_linear]" />
              )}
            </div>
            {i === current && (
              <span className="text-[9px] font-semibold text-primary-foreground/50 tracking-wider uppercase hidden md:block">
                {slide.badge}
              </span>
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
