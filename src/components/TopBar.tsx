import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-dark border-b border-primary-foreground/[0.06]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 text-[11px] gap-2 sm:gap-0">
        {/* Left: phone CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0903400896"
            className="group relative flex items-center gap-1.5 pl-1 pr-3 py-1 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 hover:border-accent/60 hover:from-accent/30 hover:to-accent/20 transition-all duration-300 shadow-[0_0_16px_-6px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_24px_-4px_hsl(var(--accent)/0.45)]"
          >
            <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-success/20">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-success opacity-80 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            <Phone className="w-2.5 h-2.5 text-accent/80 -mr-0.5" />
            <span className="font-bold tracking-wide text-accent uppercase text-[10px]">Potrebujete poradiť?</span>
            <span className="text-primary-foreground font-extrabold text-xs tracking-wide">0903 400 896</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-success/90 font-semibold bg-success/10 px-2.5 py-1 rounded-full border border-success/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
            </span>
            Konzultácia zdarma
          </span>
        </div>

        {/* Right: email + address */}
        <div className="flex items-center gap-4 sm:gap-5 text-primary-foreground/45">
          <a
            href="mailto:info@bsltrade.sk"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>info@bsltrade.sk</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>Jastrabinová 39, 82106 Bratislava</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
