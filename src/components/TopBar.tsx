import { Phone, Mail, MapPin, Headphones } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-dark border-b border-primary-foreground/[0.06]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-1.5 px-4 text-[11px] gap-2 sm:gap-0">
        {/* Left: phone CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0903400896"
            className="group flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-success/15">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-success opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            <span className="font-semibold tracking-wide text-accent">Potrebujete poradiť?</span>
            <span className="text-primary-foreground font-bold">0903 400 896</span>
          </a>
          <span className="hidden sm:inline-flex items-center text-success/80 font-medium">
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
