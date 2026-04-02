import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Telefón", value: "0903 400 896", href: "tel:0903400896" },
  { icon: Mail, label: "E-mail", value: "info@bsltrade.sk", href: "mailto:info@bsltrade.sk" },
  { icon: MapPin, label: "Adresa", value: "Jastrabinová 39, 82106 Bratislava", href: "#" },
  { icon: Instagram, label: "Instagram", value: "@bsl_trade", href: "https://www.instagram.com/bsl_trade/" },
];

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-28 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-dark))]" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-sky-light/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full mb-5 border border-accent/15">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Kontaktujte <span className="text-gradient">nás</span>
          </h2>
          <p className="text-primary-foreground/50 text-lg max-w-lg mx-auto">
            Radi vám poradíme s výberom správneho prístroja
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group glass rounded-2xl p-7 hover:bg-primary-foreground/8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/40 to-transparent transition-all duration-500" />

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-primary-foreground/20 group-hover:text-accent transition-colors" />
              </div>

              <p className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.15em] font-medium mb-1.5">{item.label}</p>
              <p className="text-primary-foreground font-medium text-sm leading-snug">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
