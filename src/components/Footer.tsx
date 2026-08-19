import { ArrowUpRight, Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--navy-dark))] border-t border-primary-foreground/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://www.bsltrade.sk/wp-content/uploads/2024/09/log90.png"
              alt="BSL Trade s.r.o."
              className="h-10 brightness-200 mb-5"
            />
            <p className="text-primary-foreground/40 text-sm leading-relaxed mb-5">
              Profesionálne prístroje pre estetickú medicínu, rehabilitáciu a wellness. Viac ako 20 rokov na trhu.
            </p>
            <a
              href="https://www.instagram.com/bsl_trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/50 hover:text-accent hover:border-accent/30 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-5">Navigácia</h4>
            <ul className="space-y-3">
              {[
                { label: "Domov", href: "/" },
                { label: "VIP Program", href: "/vip-program" },
                { label: "FAQ", href: "/#faq" },
                { label: "Kontakt", href: "/#kontakt" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-primary-foreground/40 hover:text-accent transition-colors text-sm inline-flex items-center gap-1.5 group">
                    {l.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-5">Kategórie</h4>
            <ul className="space-y-3">
              {[
                { label: "Ošetrenie tváre", href: "https://www.bsltrade.sk/hifu-contlex-sense/" },
                { label: "Ošetrenie tela", href: "https://www.bsltrade.sk/endo-u-shape/" },
                { label: "IPL a Lasery", href: "https://www.bsltrade.sk/apolo/" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-primary-foreground/40 hover:text-accent transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-5">Kontakt</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+421000000000" className="flex items-start gap-2.5 text-primary-foreground/40 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                  <span>+421 000 000 000</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bsltrade.sk" className="flex items-start gap-2.5 text-primary-foreground/40 hover:text-accent transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                  <span>info@bsltrade.sk</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-foreground/40 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                <span>Slovenská republika</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/30 text-xs tracking-wider">
            © {year} BSL Trade s.r.o. Všetky práva vyhradené.
          </p>
          <p className="text-primary-foreground/25 text-xs">
            Profesionálne prístroje pre estetickú medicínu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
