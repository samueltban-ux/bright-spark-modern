import { Phone, Mail, MapPin, Headphones } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[hsl(var(--navy-dark))] border-b border-primary-foreground/5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 text-xs gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="tel:0903400896"
            className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors"
          >
            <Headphones className="w-3 h-3" />
            <span className="font-semibold tracking-wide">Potrebujete poradiť?</span>
            <span className="text-primary-foreground/90 font-bold">0903 400 896</span>
          </a>
          <div className="w-px h-3 bg-primary-foreground/15 hidden sm:block" />
          <a href="mailto:info@bsltrade.sk" className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-accent transition-colors">
            <Mail className="w-3 h-3" />
            <span>info@bsltrade.sk</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-primary-foreground/40">
          <MapPin className="w-3 h-3" />
          <span>Jastrabinová 39, 82106 Bratislava</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
