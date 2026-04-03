import { Shield, Truck, GraduationCap, HeadphonesIcon, ArrowRight } from "lucide-react";

const features = [
  { icon: Shield, title: "Kvalita", desc: "Zastupujeme významné európske značky", num: "01" },
  { icon: Truck, title: "Osobný dovoz", desc: "Prístroj osobne dovezieme a zmontujeme", num: "02" },
  { icon: GraduationCap, title: "Školenia", desc: "Výuka a vzdelávanie priamo u vás", num: "03" },
  { icon: HeadphonesIcon, title: "Podpora", desc: "Servis a poradenstvo kedykoľvek", num: "04" },
];

const stats = [
  { value: "20+", label: "Rokov na trhu" },
  { value: "500+", label: "Spokojných klientov" },
  { value: "50+", label: "Typov prístrojov" },
];

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-dark)/0.9)]" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/6 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--sky-light)/0.04)] rounded-full blur-[150px]" />
      
      {/* Vertical accent lines */}
      <div className="absolute top-16 left-16 w-px h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden xl:block" />
      <div className="absolute bottom-16 right-16 w-px h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden xl:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">{s.value}</div>
              <div className="text-xs text-primary-foreground/40 uppercase tracking-[0.15em] font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/10 rounded-full mb-6 border border-accent/15">
              O nás
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Prečo si vybrať{" "}
              <span className="text-gradient">BSL Trade</span>?
            </h2>
            <p className="text-primary-foreground/50 text-base leading-relaxed mb-8">
              Naša spoločnosť ponúka široký sortiment produktov pre zdravie a krásu.
              Zastupujeme na našom trhu niekoľko významných európskych značiek a spoločností.
              Vieme individuálne pristúpiť ku každému zákazníkovi.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm"
            >
              Kontaktujte nás
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-xl p-6 bg-primary-foreground/[0.03] border border-primary-foreground/[0.06] hover:bg-primary-foreground/[0.06] hover:border-accent/15 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-3 right-4 text-4xl font-bold text-primary-foreground/[0.03] group-hover:text-primary-foreground/[0.06] transition-colors">
                  {f.num}
                </span>

                <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/15 transition-colors">
                  <f.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-primary-foreground mb-1.5">{f.title}</h3>
                <p className="text-primary-foreground/40 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
