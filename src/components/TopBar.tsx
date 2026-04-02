import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[hsl(var(--navy-dark))] text-primary-foreground/70">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2.5 px-4 text-xs gap-2">
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a href="tel:0903400896" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" />
            <span>0903 400 896</span>
          </a>
          <div className="w-px h-3 bg-primary-foreground/15 hidden sm:block" />
          <a href="mailto:info@bsltrade.sk" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-3 h-3" />
            <span>info@bsltrade.sk</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-primary-foreground/50">
          <MapPin className="w-3 h-3" />
          <span>Jastrabinová 39, 82106 Bratislava</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
