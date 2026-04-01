import { Shield, Truck, GraduationCap, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Shield, title: "Kvalita", desc: "Zastupujeme významné európske značky" },
  { icon: Truck, title: "Osobný dovoz", desc: "Prístroj osobne dovezieme a zmontujeme" },
  { icon: GraduationCap, title: "Školenia", desc: "Výuka a vzdelávanie priamo u vás" },
  { icon: HeadphonesIcon, title: "Podpora", desc: "Servis a poradenstvo kedykoľvek" },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-light))]">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-light/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full mb-4 border border-accent/20">
            O nás
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prečo <span className="text-gradient">BSL Trade</span>?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Naša spoločnosť ponúka široký sortiment produktov pre zdravie a krásu.
            Zastupujeme na našom trhu niekoľko významných európskych značiek a spoločností.
            Vieme individuálne pristúpiť ku každému zákazníkovi a pripraviť mu ponuku doslova šitú na mieru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-sky rounded-2xl mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{f.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
