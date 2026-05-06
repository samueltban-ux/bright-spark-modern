import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo.png";
import hifuContlexSense from "@/assets/hifu-contlex-sense.png";

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
      { label: "ELLYSE SENSE", href: "https://www.bsltrade.sk/", image: "https://i.postimg.cc/CKSkDQ0g/01-2.png" },
      { label: "PROFACIAL", href: "https://www.bsltrade.sk/profacial/", image: "https://i.postimg.cc/Yq93XDkz/profacial.png" },
      { label: "HYDRA BEAUTY MULTI", href: "https://www.bsltrade.sk/hydra-beauty-multi/", image: "https://i.postimg.cc/zXBjd253/HYDRO.jpg" },
      { label: "HYDRO MASTER", href: "https://www.bsltrade.sk/hydro-master/", image: "https://i.postimg.cc/Hsx2SvHs/HYDRO-MASTER.jpg" },
      { label: "R.THERMA", href: "https://www.bsltrade.sk/r-therma/", image: "https://i.postimg.cc/ZKRcfsZF/R-Therma.jpg" },
      { label: "THERMA V", href: "https://www.bsltrade.sk/therma-v/", image: "https://i.postimg.cc/YqsxTNqW/thermavb-300x470.png" },
      { label: "EMS-tvár", href: "https://www.bsltrade.sk/ems-tvar/", image: "https://i.postimg.cc/FFGpVXts/ems.png" },
      { label: "HIFU 360 SMART MAX", href: "https://www.bsltrade.sk/hifu-360d-max/", image: "https://i.postimg.cc/MZt5mJkw/360.jpg" },
      { label: "HIFU 8D PRO", href: "https://www.bsltrade.sk/hifu-8d-pro/", image: "https://i.postimg.cc/kX4cjY94/hifu-1.png" },
      { label: "HIFU 10D", href: "https://www.bsltrade.sk/hifu-10d/", image: "https://i.postimg.cc/vHBzP2MG/HIFU-10D.png" },
      { label: "HIFU CONTLEX SENSE", href: "https://www.bsltrade.sk/hifu-contlex-sense/", image: hifuContlexSense },
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
      { label: "NEOFRAX", href: "https://www.bsltrade.sk/", image: "https://i.postimg.cc/xjg53Dww/01-2.jpg" },
      { label: "Q-MASTER", href: "https://www.bsltrade.sk/", image: "https://i.postimg.cc/8CNMW0GV/01-3.jpg" },
      { label: "BIOXEL", href: "https://www.bsltrade.sk/", image: "https://i.postimg.cc/qRYwdHhV/Bioxel.png" },
      { label: "SOLRAY", href: "https://www.bsltrade.sk/", image: "https://i.postimg.cc/FHmZvZKB/Solray.png" },
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
  { label: "VIP PROGRAM", href: "/vip-program" },
  { label: "KONTAKT", href: "#kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImgError = (label: string) => {
    setImgErrors(prev => new Set(prev).add(label));
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const getGridCols = (count: number) => {
    if (count <= 5) return "grid-cols-3";
    if (count <= 9) return "grid-cols-4";
    return "grid-cols-5";
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-card/95 backdrop-blur-2xl shadow-xl shadow-foreground/[0.04] border-b border-border/40" 
        : "bg-card/70 backdrop-blur-xl border-b border-border/20"
    }`}>
      <div className="container mx-auto flex items-center justify-between py-2.5 px-4">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="BSL Trade s.r.o."
            className="h-9 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-lg transition-all duration-300 ${
                  openDropdown === item.label
                    ? "text-accent"
                    : "text-foreground/55 hover:text-foreground/90"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-3 h-3 opacity-40 transition-transform duration-300 ${
                    openDropdown === item.label ? "rotate-180 opacity-80" : ""
                  }`} />
                )}
                {openDropdown === item.label && item.children && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </a>

              {/* Full-width mega dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-card/[0.98] backdrop-blur-3xl rounded-2xl border border-border/40 shadow-2xl shadow-foreground/[0.06] max-w-[680px] w-[680px]">
                    {/* Accent line */}
                    <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    
                    <div className="px-5 py-5">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-5 bg-accent rounded-full" />
                          <h3 className="text-sm font-bold text-foreground/90 tracking-wide">
                            {item.label}
                          </h3>
                          <span className="text-[10px] font-medium text-muted-foreground/50 bg-muted/40 px-2 py-0.5 rounded-full">
                            {item.children.length} produktov
                          </span>
                        </div>
                        <a
                          href={item.href}
                          className="group/all flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-accent/60 hover:text-accent transition-colors"
                        >
                          Zobraziť všetky
                          <ArrowRight className="w-3 h-3 transition-transform group-hover/all:translate-x-0.5" />
                        </a>
                      </div>

                      {/* Product grid */}
                      <div className={`grid gap-3 ${getGridCols(item.children.length)}`}>
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="group/card relative flex flex-col items-center p-4 rounded-2xl border border-border/30 bg-background/40 hover:bg-accent/[0.04] hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/[0.04] hover:-translate-y-0.5"
                          >
                            {/* Image container */}
                            <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center mb-3 overflow-hidden">
                              {child.image && !imgErrors.has(child.label) ? (
                                <img
                                  src={child.image}
                                  alt={child.label}
                                  className="w-[110%] h-[110%] object-contain transition-all duration-500 group-hover/card:scale-110"
                                  onError={() => handleImgError(child.label)}
                                />
                              ) : (
                                <span className="text-lg font-black text-muted-foreground/20">
                                  {child.label.substring(0, 2)}
                                </span>
                              )}
                              {/* Hover glow */}
                              <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
                            </div>

                            {/* Label */}
                            <span className="text-[11px] font-semibold text-foreground/70 group-hover/card:text-accent text-center leading-tight transition-colors duration-200 line-clamp-2">
                              {child.label}
                            </span>

                            {/* External icon */}
                            <ExternalLink className="absolute top-2.5 right-2.5 w-3 h-3 text-muted-foreground/0 group-hover/card:text-accent/40 transition-all duration-300" />
                          </a>
                        ))}
                      </div>
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
        <div className="lg:hidden bg-card/[0.98] backdrop-blur-2xl border-t border-border/40 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-5 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-muted/30 border-b border-border/15 transition-colors flex items-center justify-between"
                onClick={() => {
                  if (!item.children) {
                    setMobileOpen(false);
                    window.location.hash = item.href.replace('#', '');
                  } else {
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }
                }}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-4 h-4 opacity-40 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                )}
              </button>
              {item.children && openDropdown === item.label && (
                <div className="bg-muted/10 p-3">
                  <div className="grid grid-cols-3 gap-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="group/mcard flex flex-col items-center p-2.5 rounded-xl border border-border/20 hover:border-accent/20 hover:bg-accent/[0.03] transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-full aspect-square rounded-lg bg-muted/20 flex items-center justify-center mb-1.5 overflow-hidden">
                          {child.image && !imgErrors.has(child.label) ? (
                            <img
                              src={child.image}
                              alt={child.label}
                              className="w-[70%] h-[70%] object-contain"
                              onError={() => handleImgError(child.label)}
                            />
                          ) : (
                            <span className="text-[8px] font-bold text-muted-foreground/30">
                              {child.label.substring(0, 2)}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] font-semibold text-muted-foreground group-hover/mcard:text-accent text-center leading-tight line-clamp-2 transition-colors">
                          {child.label}
                        </span>
                      </a>
                    ))}
                  </div>
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
