import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Telefón", value: "0903 400 896", href: "tel:0903400896" },
  { icon: Mail, label: "E-mail", value: "info@bsltrade.sk", href: "mailto:info@bsltrade.sk" },
  { icon: MapPin, label: "Adresa", value: "Jastrabinová 39, 82106 Bratislava", href: "#" },
  { icon: Instagram, label: "Instagram", value: "@bsl_trade", href: "https://www.instagram.com/bsl_trade/" },
];

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark))] via-[hsl(var(--navy))] to-[hsl(var(--navy-dark)/0.9)]" />

      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[hsl(var(--sky-light)/0.04)] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/10 rounded-full mb-5 border border-accent/15">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
            Kontaktujte <span className="text-gradient">nás</span>
          </h2>
          <p className="text-primary-foreground/40 text-sm max-w-lg mx-auto">
            Radi vám poradíme s výberom správneho prístroja
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded-xl p-6 bg-primary-foreground/[0.03] border border-primary-foreground/[0.06] hover:bg-primary-foreground/[0.06] hover:border-accent/15 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 group-hover:via-accent/30 to-transparent transition-all duration-500" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground/15 group-hover:text-accent transition-colors" />
              </div>

              <p className="text-[9px] text-primary-foreground/35 uppercase tracking-[0.2em] font-medium mb-1">{item.label}</p>
              <p className="text-primary-foreground text-sm font-medium leading-snug">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
