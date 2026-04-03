import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo.png";

interface NavChild {
  label: string;
  href: string;
  image?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "ÚVOD", href: "#" },
  {
    label: "OŠETRENIE TVÁRE",
    href: "#tvare",
    children: [
      { label: "PROFACIAL", href: "https://www.bsltrade.sk/profacial/", image: "https://i.postimg.cc/Yq93XDkz/profacial.png" },
      { label: "HYDRA BEAUTY MULTI", href: "https://www.bsltrade.sk/hydra-beauty-multi/", image: "https://i.postimg.cc/zXBjd253/HYDRO.jpg" },
      { label: "HYDRO MASTER", href: "https://www.bsltrade.sk/hydro-master/", image: "https://i.postimg.cc/Hsx2SvHs/HYDRO-MASTER.jpg" },
      { label: "R.THERMA", href: "https://www.bsltrade.sk/r-therma/", image: "https://i.postimg.cc/ZKRcfsZF/R-Therma.jpg" },
      { label: "THERMA V", href: "https://www.bsltrade.sk/therma-v/", image: "https://i.postimg.cc/YqsxTNqW/thermavb-300x470.png" },
      { label: "EMS-tvár", href: "https://www.bsltrade.sk/ems-tvar/", image: "https://i.postimg.cc/FFGpVXts/ems.png" },
      { label: "HIFU 360 SMART MAX", href: "https://www.bsltrade.sk/hifu-360d-max/", image: "https://i.postimg.cc/MZt5mJkw/360.jpg" },
      { label: "HIFU 8D PRO", href: "https://www.bsltrade.sk/hifu-8d-pro/", image: "https://i.postimg.cc/kX4cjY94/hifu-1.png" },
      { label: "HIFU 10D", href: "https://www.bsltrade.sk/hifu-10d/", image: "https://i.postimg.cc/vHBzP2MG/HIFU-10D.png" },
      { label: "HIFU CONTLEX SENSE", href: "https://www.bsltrade.sk/hifu-contlex-sense/", image: "https://i.postimg.cc/BQ6gh7sS/HIFU-CONTLEX-SENSE.png" },
      { label: "CARE 7", href: "https://www.bsltrade.sk/care-7/", image: "https://i.postimg.cc/c1ThBGq0/04.png" },
      { label: "PLAMINGO /Plazma/", href: "https://www.bsltrade.sk/plamingo-plazma/", image: "https://i.postimg.cc/bNJT6V8k/plamingo.jpg" },
      { label: "PLASMAGUN", href: "https://www.bsltrade.sk/plasmagun/", image: "https://i.postimg.cc/MKTDs3x0/plasmagun.png" },
      { label: "FRAKČNÁ RÁDIOFREKVENCIA", href: "https://www.bsltrade.sk/frakcna-radiofrekvencia/", image: "https://i.postimg.cc/qBQwxHfJ/aa-768x829.png" },
      { label: "AQUA INJECTOR", href: "https://www.bsltrade.sk/aqua-injector/", image: "https://i.postimg.cc/PfKyQnGn/0000005-e1577740712143.jpg" },
    ],
  },
  {
    label: "OŠETRENIE TELA",
    href: "#telo",
    children: [
      { label: "EM MASTER", href: "https://www.bsltrade.sk/em-master/", image: "https://i.postimg.cc/FFGpVXts/ems.png" },
      { label: "EMS-telo", href: "https://www.bsltrade.sk/ems-telo/", image: "https://i.postimg.cc/FFGpVXts/ems.png" },
      { label: "ROBOLEX PLUS", href: "https://www.bsltrade.sk/robolex/", image: "https://i.postimg.cc/BQ6gh7sD/NEO.png" },
      { label: "PROCARE XP", href: "https://www.bsltrade.sk/procare-xp/", image: "https://i.postimg.cc/vHNvC7Hx/sdsdfsd-Photoroom.png" },
      { label: "RIGENERA 3", href: "https://www.bsltrade.sk/top-kombinovane-systemy/", image: "https://i.postimg.cc/zXck4wXb/Rigenera-3-2.png" },
      { label: "ENDO U-SHAPE", href: "https://www.bsltrade.sk/endo-u-shape/", image: "https://i.postimg.cc/h4Ms1RFW/01-1.png" },
      { label: "V-SHAPE PLATINUM", href: "https://www.bsltrade.sk/v-shape-platinum/", image: "https://i.postimg.cc/28Kxgd84/V-SHAPE-PLATINUM.png" },
      { label: "MED SHAPE", href: "https://www.bsltrade.sk/med-shape/", image: "https://i.postimg.cc/gkJDMtdL/MED-SHAPE.png" },
      { label: "VIEWFIX", href: "https://www.bsltrade.sk/viewfix/", image: "https://i.postimg.cc/kXpyLNXN/VIEWFIX.png" },
      { label: "KRYOLIPOLÝZA", href: "https://www.bsltrade.sk/kryolipolyza/", image: "https://i.postimg.cc/yYbT2hYX/X-COOL.jpg" },
      { label: "RÁZOVÁ VLNA", href: "https://www.bsltrade.sk/razova-vlna-2/", image: "https://i.postimg.cc/xjg53Dww/01-2.jpg" },
      { label: "LYMFODRENÁŽ", href: "https://www.bsltrade.sk/lymfodrenaz/", image: "https://i.postimg.cc/wxF2Q8Cn/01-1.jpg" },
    ],
  },
  {
    label: "IPL & LASERY",
    href: "#ipl",
    children: [
      { label: "APOLO", href: "https://www.bsltrade.sk/apolo/", image: "https://i.postimg.cc/44wPQRC4/apolo-Photoroom.png" },
      { label: "IPL BETA", href: "https://www.bsltrade.sk/ipl/", image: "https://i.postimg.cc/zXBjd25b/ipl-beta-1.png" },
      { label: "EPIL EVO", href: "https://www.bsltrade.sk/epil-evo/", image: "https://i.postimg.cc/3JRBLf75/EVO-1.jpg" },
      { label: "EPIL MULTI-WAVE", href: "https://www.bsltrade.sk/epil-multi-wave/", image: "https://i.postimg.cc/Gh2QMgrd/epil-multi-wave.png" },
      { label: "PICOLASER 500", href: "https://www.bsltrade.sk/picolaser-500/", image: "https://i.postimg.cc/dt1BWNvy/Pico-Laser.jpg" },
    ],
  },
  {
    label: "SOLÁRIA",
    href: "#solaria",
    children: [
      { label: "XSUN23", href: "https://www.bsltrade.sk/xsun23/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/xsun23.png" },
      { label: "XSUN23 APERTA", href: "https://www.bsltrade.sk/xsun23-aperta-otvorene/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/xsun23-aperta.png" },
      { label: "RIVIERA", href: "https://www.bsltrade.sk/riviera/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/riviera.png" },
      { label: "ULTRASUN Q6", href: "https://www.bsltrade.sk/ultrasun-q6/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/ultrasun-q6.png" },
      { label: "ULTRASUN Q10", href: "https://www.bsltrade.sk/ultrasun-q10/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/ultrasun-q10.png" },
      { label: "ULTRASUN Q14", href: "https://www.bsltrade.sk/ultrasun-q14/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/ultrasun-q14.png" },
      { label: "TRUBICE", href: "https://www.bsltrade.sk/trubice/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/trubice.png" },
    ],
  },
  {
    label: "REHABILITÁCIA",
    href: "#rehab",
    children: [
      { label: "MO-VIT TL", href: "https://www.bsltrade.sk/rehabilitacia/mo-vit-tl/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/mo-vit.png" },
      { label: "Modulárne systémy", href: "https://www.bsltrade.sk/modularne-systemy/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/modularne.png" },
      { label: "Rázová vlna", href: "https://www.bsltrade.sk/razova-vlna/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/razova-vlna-rehab.png" },
      { label: "TR THERAPY /TECAR/", href: "https://www.bsltrade.sk/tr-therapy-tecar/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/tr-therapy.png" },
      { label: "Vysokovýkonové lasery", href: "https://www.bsltrade.sk/vysokovykonove-lasery/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/vysokovykonove.png" },
      { label: "Laserová terapia", href: "https://www.bsltrade.sk/laserova-terapia/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/laserova-terapia.png" },
      { label: "Magnetoterapia", href: "https://www.bsltrade.sk/magnetoterapia/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/magnetoterapia.png" },
      { label: "Ultrazvuk", href: "https://www.bsltrade.sk/ultrazvuk/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/ultrazvuk.png" },
      { label: "Elektroterapia", href: "https://www.bsltrade.sk/elektroterapia/", image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/elektroterapia.png" },
    ],
  },
  { label: "KONTAKT", href: "#kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImgError = (label: string) => {
    setImgErrors(prev => new Set(prev).add(label));
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-card/90 backdrop-blur-2xl shadow-lg shadow-foreground/[0.03] border-b border-border/50" 
        : "bg-card/60 backdrop-blur-xl border-b border-border/30"
    }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="BSL Trade s.r.o."
            className="h-10 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-[11px] font-semibold tracking-wider rounded-lg transition-all duration-300 ${
                  openDropdown === item.label
                    ? "text-accent bg-accent/5"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-300 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`} />
                )}
              </a>

              {/* Mega dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-card/98 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-foreground/[0.08] border border-border/60 p-4 min-w-[320px] max-w-[560px] animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Category header */}
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="h-px flex-1 bg-border/50" />
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">
                        {item.label}
                      </span>
                      <div className="h-px flex-1 bg-border/50" />
                    </div>

                    <div className={`grid gap-1 ${
                      item.children.length > 6 ? "grid-cols-2" : "grid-cols-1"
                    }`}>
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="group/item flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-accent/5 transition-all duration-200"
                        >
                          {/* Product thumbnail */}
                          <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/40 flex-shrink-0 overflow-hidden flex items-center justify-center group-hover/item:border-accent/30 group-hover/item:bg-accent/5 transition-all duration-200">
                            {child.image && !imgErrors.has(child.label) ? (
                              <img
                                src={child.image}
                                alt={child.label}
                                className="w-8 h-8 object-contain transition-transform duration-300 group-hover/item:scale-110"
                                onError={() => handleImgError(child.label)}
                              />
                            ) : (
                              <span className="text-[10px] font-bold text-muted-foreground/50">
                                {child.label.substring(0, 2)}
                              </span>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className="text-[12px] font-medium text-foreground/70 group-hover/item:text-accent transition-colors duration-200 truncate block">
                              {child.label}
                            </span>
                          </div>

                          <ExternalLink className="w-3 h-3 text-muted-foreground/0 group-hover/item:text-accent/50 transition-all duration-200 flex-shrink-0" />
                        </a>
                      ))}
                    </div>

                    {/* Footer link */}
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <a
                        href={item.href}
                        className="flex items-center justify-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-accent/70 hover:text-accent transition-colors"
                      >
                        Zobraziť všetky
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2.5 text-foreground/70 hover:text-foreground transition-colors rounded-xl hover:bg-muted/50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-2xl border-t border-border/50 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-6 py-3.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 border-b border-border/20 transition-colors"
                onClick={() => {
                  if (!item.children) {
                    setMobileOpen(false);
                    window.location.hash = item.href.replace('#', '');
                  } else {
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }
                }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 opacity-40 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </span>
              </button>
              {item.children && openDropdown === item.label && (
                <div className="bg-muted/20 py-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="flex items-center gap-3 px-6 py-2.5 hover:bg-accent/5 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/30 flex-shrink-0 overflow-hidden flex items-center justify-center">
                        {child.image && !imgErrors.has(child.label) ? (
                          <img
                            src={child.image}
                            alt={child.label}
                            className="w-6 h-6 object-contain"
                            onError={() => handleImgError(child.label)}
                          />
                        ) : (
                          <span className="text-[8px] font-bold text-muted-foreground/40">
                            {child.label.substring(0, 2)}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {child.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
