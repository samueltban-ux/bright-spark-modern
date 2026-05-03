import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import neofrax from "@/assets/neofrax.jpg";

const devices = [
  {
    name: "NEOFRAX",
    category: "IPL a Lasery",
    image: neofrax,
    href: "https://www.bsltrade.sk/",
  },
  {
    name: "ELLYSE SENSE",
    category: "Ošetrenie tváre",
    image: "https://i.postimg.cc/CKSkDQ0g/01-2.png",
    href: "https://www.bsltrade.sk/",
  },
  {
    name: "Q-MASTER",
    category: "IPL a Lasery",
    image: "https://i.postimg.cc/8CNMW0GV/01-3.jpg",
    href: "https://www.bsltrade.sk/",
  },
  {
    name: "BIOXEL",
    category: "IPL a Lasery",
    image: "https://i.postimg.cc/qRYwdHhV/Bioxel.png",
    href: "https://www.bsltrade.sk/",
  },
  {
    name: "SOLRAY",
    category: "IPL a Lasery",
    image: "https://i.postimg.cc/FHmZvZKB/Solray.png",
    href: "https://www.bsltrade.sk/",
  },
];

const DevicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-border/40">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/8 rounded-full mb-4 border border-accent/15">
              Naše prístroje
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Profesionálne <span className="text-gradient">lasery a IPL</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
              Špičková technológia pre estetickú medicínu a ošetrenie tváre
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {devices.map((d) => (
              <a
                key={d.name}
                href={d.href}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] transition-all duration-500 hover:-translate-y-1.5 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.95)] to-[hsl(var(--navy-dark))] border border-border/60 hover:border-accent/40"
              >
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: 'radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />

                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2 py-1 text-[8px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-md border border-accent/20 backdrop-blur-sm">
                    {d.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-accent/0 group-hover:bg-accent/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 pb-14">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="max-h-full w-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-xl"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[hsl(var(--navy-dark))] to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-primary-foreground group-hover:text-accent transition-colors text-center tracking-wide">
                    {d.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DevicesSection;
