import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="gradient-navy text-primary-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4 text-sm gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href="tel:0903400896" className="flex items-center gap-1.5 hover:text-sky transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>0903 400 896</span>
          </a>
          <a href="mailto:info@bsltrade.sk" className="flex items-center gap-1.5 hover:text-sky transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@bsltrade.sk</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>Jastrabinová 39, 82106 Bratislava</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
