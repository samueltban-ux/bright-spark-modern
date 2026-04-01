import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Kontaktujte <span className="text-gradient">nás</span>
          </h2>
          <p className="text-primary-foreground/70">Radi vám poradíme s výberom správneho prístroja</p>
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
              className="flex flex-col items-center text-center p-6 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 gradient-sky rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-primary-foreground font-medium text-sm">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
