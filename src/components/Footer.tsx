import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--navy-dark))] border-t border-primary-foreground/5">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://www.bsltrade.sk/wp-content/uploads/2024/09/log90.png"
              alt="BSL Trade s.r.o."
              className="h-10 brightness-200"
            />
            <div className="w-px h-8 bg-primary-foreground/10 hidden md:block" />
            <p className="text-primary-foreground/40 text-sm">
              Profesionálne prístroje pre estetickú medicínu
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/bsl_trade/" className="group flex items-center gap-1.5 text-primary-foreground/40 hover:text-accent transition-colors text-sm">
              Instagram
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="mailto:info@bsltrade.sk" className="group flex items-center gap-1.5 text-primary-foreground/40 hover:text-accent transition-colors text-sm">
              E-mail
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/5 text-center">
          <p className="text-primary-foreground/30 text-xs tracking-wider">
            © {new Date().getFullYear()} BSL Trade s.r.o. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
