import { Award, Users, Wrench, Crown } from "lucide-react";

const items = [
  {
    icon: Award,
    value: "21+",
    label: "rokov na trhu",
  },
  {
    icon: Users,
    value: "800+",
    label: "spokojných kliník a salónov po Česku a Slovensku",
  },
  {
    icon: Wrench,
    value: "Servis",
    label: "a školenia",
  },
  {
    icon: Crown,
    value: "VIP",
    label: "program",
  },
];

const TrustBar = () => {
  return (
    <section className="relative z-10 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 p-3 rounded-xl border border-border/30 bg-card/50 hover:bg-card hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base md:text-lg font-bold text-foreground leading-tight">
                  {item.value}
                </div>
                <div className="text-[11px] md:text-xs text-muted-foreground leading-tight">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
