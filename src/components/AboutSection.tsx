import { Shield, Truck, GraduationCap, HeadphonesIcon, ArrowRight } from "lucide-react";

const features = [
  { icon: Shield, title: "Kvalita", desc: "Zastupujeme významné európske značky", num: "01" },
  { icon: Truck, title: "Osobný dovoz", desc: "Prístroj osobne dovezieme a zmontujeme", num: "02" },
  { icon: GraduationCap, title: "Školenia", desc: "Výuka a vzdelávanie priamo u vás", num: "03" },
  { icon: HeadphonesIcon, title: "Podpora", desc: "Servis a poradenstvo kedykoľvek", num: "04" },
];

const AboutSection = () => {
  return (
    <section className="py-28 relative overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-dark))]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-light/5 rounded-full blur-[150px]" />
      
      {/* Geometric accent */}
      <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full mb-6 border border-accent/15">
              O nás
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Prečo si vybrať{" "}
              <span className="text-gradient">BSL Trade</span>?
            </h2>
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-8">
              Naša spoločnosť ponúka široký sortiment produktov pre zdravie a krásu.
              Zastupujeme na našom trhu niekoľko významných európskych značiek a spoločností.
              Vieme individuálne pristúpiť ku každému zákazníkovi.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Kontaktujte nás
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group glass rounded-2xl p-7 hover:bg-primary-foreground/8 transition-all duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-bold text-primary-foreground/[0.04] group-hover:text-primary-foreground/[0.08] transition-colors">
                  {f.num}
                </span>

                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-5 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-primary-foreground mb-2">{f.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
