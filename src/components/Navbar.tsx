import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "ÚVOD", href: "#" },
  {
    label: "OŠETRENIE TVÁRE",
    href: "#tvare",
    children: [
      { label: "PROFACIAL", href: "https://www.bsltrade.sk/profacial/" },
      { label: "HYDRA BEAUTY MULTI", href: "https://www.bsltrade.sk/hydra-beauty-multi/" },
      { label: "HYDRO MASTER", href: "https://www.bsltrade.sk/hydro-master/" },
      { label: "R.THERMA", href: "https://www.bsltrade.sk/r-therma/" },
      { label: "THERMA V", href: "https://www.bsltrade.sk/therma-v/" },
      { label: "EMS-tvár", href: "https://www.bsltrade.sk/ems-tvar/" },
      { label: "HIFU 360 SMART MAX", href: "https://www.bsltrade.sk/hifu-360d-max/" },
      { label: "HIFU 8D PRO", href: "https://www.bsltrade.sk/hifu-8d-pro/" },
      { label: "HIFU 10D", href: "https://www.bsltrade.sk/hifu-10d/" },
      { label: "HIFU CONTLEX SENSE", href: "https://www.bsltrade.sk/hifu-contlex-sense/" },
      { label: "CARE 7", href: "https://www.bsltrade.sk/care-7/" },
      { label: "PLAMINGO /Plazma/", href: "https://www.bsltrade.sk/plamingo-plazma/" },
      { label: "PLASMAGUN", href: "https://www.bsltrade.sk/plasmagun/" },
      { label: "FRAKČNÁ RÁDIOFREKVENCIA", href: "https://www.bsltrade.sk/frakcna-radiofrekvencia/" },
      { label: "AQUA INJECTOR", href: "https://www.bsltrade.sk/aqua-injector/" },
    ],
  },
  {
    label: "OŠETRENIE TELA",
    href: "#telo",
    children: [
      { label: "EM MASTER", href: "https://www.bsltrade.sk/em-master/" },
      { label: "EMS-telo", href: "https://www.bsltrade.sk/ems-telo/" },
      { label: "ROBOLEX PLUS", href: "https://www.bsltrade.sk/robolex/" },
      { label: "PROCARE XP", href: "https://www.bsltrade.sk/procare-xp/" },
      { label: "RIGENERA 3", href: "https://www.bsltrade.sk/top-kombinovane-systemy/" },
      { label: "ENDO U-SHAPE", href: "https://www.bsltrade.sk/endo-u-shape/" },
      { label: "V-SHAPE PLATINUM", href: "https://www.bsltrade.sk/v-shape-platinum/" },
      { label: "MED SHAPE", href: "https://www.bsltrade.sk/med-shape/" },
      { label: "VIEWFIX", href: "https://www.bsltrade.sk/viewfix/" },
      { label: "KRYOLIPOLÝZA", href: "https://www.bsltrade.sk/kryolipolyza/" },
      { label: "RÁZOVÁ VLNA", href: "https://www.bsltrade.sk/razova-vlna-2/" },
      { label: "LYMFODRENÁŽ", href: "https://www.bsltrade.sk/lymfodrenaz/" },
    ],
  },
  {
    label: "IPL & LASERY",
    href: "#ipl",
    children: [
      { label: "APOLO", href: "https://www.bsltrade.sk/apolo/" },
      { label: "IPL BETA", href: "https://www.bsltrade.sk/ipl/" },
      { label: "EPIL EVO", href: "https://www.bsltrade.sk/epil-evo/" },
      { label: "EPIL MULTI-WAVE", href: "https://www.bsltrade.sk/epil-multi-wave/" },
      { label: "PICOLASER 500", href: "https://www.bsltrade.sk/picolaser-500/" },
    ],
  },
  {
    label: "SOLÁRIA",
    href: "#solaria",
    children: [
      { label: "XSUN23", href: "https://www.bsltrade.sk/xsun23/" },
      { label: "XSUN23 APERTA", href: "https://www.bsltrade.sk/xsun23-aperta-otvorene/" },
      { label: "RIVIERA", href: "https://www.bsltrade.sk/riviera/" },
      { label: "ULTRASUN Q6", href: "https://www.bsltrade.sk/ultrasun-q6/" },
      { label: "ULTRASUN Q10", href: "https://www.bsltrade.sk/ultrasun-q10/" },
      { label: "ULTRASUN Q14", href: "https://www.bsltrade.sk/ultrasun-q14/" },
      { label: "TRUBICE", href: "https://www.bsltrade.sk/trubice/" },
    ],
  },
  {
    label: "REHABILITÁCIA",
    href: "#rehab",
    children: [
      { label: "MO-VIT TL", href: "https://www.bsltrade.sk/rehabilitacia/mo-vit-tl/" },
      { label: "Modulárne systémy", href: "https://www.bsltrade.sk/modularne-systemy/" },
      { label: "Rázová vlna", href: "https://www.bsltrade.sk/razova-vlna/" },
      { label: "TR THERAPY /TECAR/", href: "https://www.bsltrade.sk/tr-therapy-tecar/" },
      { label: "Vysokovýkonové lasery", href: "https://www.bsltrade.sk/vysokovykonove-lasery/" },
      { label: "Laserová terapia", href: "https://www.bsltrade.sk/laserova-terapia/" },
      { label: "Magnetoterapia", href: "https://www.bsltrade.sk/magnetoterapia/" },
      { label: "Ultrazvuk", href: "https://www.bsltrade.sk/ultrazvuk/" },
      { label: "Elektroterapia", href: "https://www.bsltrade.sk/elektroterapia/" },
    ],
  },
  { label: "KONTAKT", href: "#kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-2xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://www.bsltrade.sk/wp-content/uploads/2024/09/log90.png"
            alt="BSL Trade s.r.o."
            className="h-11"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-[11px] font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors rounded-lg"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3 opacity-50" />}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl border border-border/50 py-2 min-w-[220px] animate-in fade-in slide-in-from-top-1 duration-200">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-accent hover:bg-accent/5 transition-all"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block px-6 py-3.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 border-b border-border/30 transition-colors"
                onClick={() => {
                  if (!item.children) setMobileOpen(false);
                  else setOpenDropdown(openDropdown === item.label ? null : item.label);
                }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 opacity-40 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </span>
              </a>
              {item.children && openDropdown === item.label && (
                <div className="bg-muted/30">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
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
