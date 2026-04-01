import { Shield, Truck, GraduationCap, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Shield, title: "Kvalita", desc: "Zastupujeme významné európske značky" },
  { icon: Truck, title: "Osobný dovoz", desc: "Prístroj osobne dovezieme a zmontujeme" },
  { icon: GraduationCap, title: "Školenia", desc: "Výuka a vzdelávanie priamo u vás" },
  { icon: HeadphonesIcon, title: "Podpora", desc: "Servis a poradenstvo kedykoľvek" },
];

const AboutSection = () => {
  return (
    <section className="py-20 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prečo <span className="text-gradient">BSL Trade</span>?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Naša spoločnosť ponúka široký sortiment produktov pre zdravie a krásu.
            Zastupujeme na našom trhu niekoľko významných európskych značiek a spoločností.
            Vieme individuálne pristúpiť ku každému zákazníkovi a pripraviť mu ponuku doslova šitú na mieru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-colors">
              <div className="inline-flex items-center justify-center w-14 h-14 gradient-sky rounded-xl mb-5">
                <f.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{f.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
