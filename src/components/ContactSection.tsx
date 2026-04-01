import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-light))]">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full mb-4 border border-accent/20">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Kontaktujte <span className="text-gradient">nás</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">Radi vám poradíme s výberom správneho prístroja</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, label: "Telefón", value: "0903 400 896", href: "tel:0903400896" },
            { icon: Mail, label: "E-mail", value: "info@bsltrade.sk", href: "mailto:info@bsltrade.sk" },
            { icon: MapPin, label: "Adresa", value: "Jastrabinová 39, 82106 Bratislava", href: "#" },
            { icon: Instagram, label: "Instagram", value: "@bsl_trade", href: "https://www.instagram.com/bsl_trade/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass flex flex-col items-center text-center p-8 rounded-2xl hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 gradient-sky rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-primary-foreground font-medium text-sm">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
