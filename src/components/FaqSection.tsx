import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Aká je záruka na prístroje?",
    answer:
      "Na všetky prístroje poskytujeme štandardnú záruku 24 mesiacov. Pri vybraných prístrojoch ponúkame možnosť rozšírenej záruky. Presné podmienky záruky vám radi upresníme pri konkrétnom prístroji.",
  },
  {
    question: "Poskytujete školenie k prístrojom?",
    answer:
      "Áno, ku každému prístroju poskytujeme kompletné školenie obsluhy a aplikačných protokolov. Školenie prebieha u vás v prevádzke alebo v našom showroome v Bratislave.",
  },
  {
    question: "Ako prebieha dodanie a inštalácia?",
    answer:
      "Prístroj vám doručíme priamo do prevádzky po celom Slovensku. Súčasťou dodania je kompletná inštalácia, nastavenie a zaškolenie personálu.",
  },
  {
    question: "Ponúkate možnosť financovania alebo leasingu?",
    answer:
      "Áno, spolupracujeme s viacerými leasingovými spoločnosťami a ponúkame flexibilné možnosti financovania. Radi vám pripravíme individuálnu cenovú ponuku.",
  },
  {
    question: "Zabezpečujete servis a náhradné diely?",
    answer:
      "Samozrejme. Poskytujeme kompletný pozáručný servis, pravidelnú údržbu a dodávku originálnych náhradných dielov a spotrebného materiálu.",
  },
  {
    question: "Môžem si prístroj pred kúpou vyskúšať?",
    answer:
      "Áno, v našom showroome v Bratislave si môžete dohodnúť nezáväznú prezentáciu a vyskúšať si prístroj na vlastnej koži. Stačí nás kontaktovať.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy))] via-[hsl(var(--navy-dark))] to-[hsl(var(--navy))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-accent bg-accent/10 rounded-full mb-5 border border-accent/15">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
            Často kladené <span className="text-gradient">otázky</span>
          </h2>
          <p className="text-primary-foreground/40 text-sm max-w-lg mx-auto">
            Odpovede na najčastejšie otázky o našich prístrojoch a službách
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl bg-primary-foreground/[0.03] border border-primary-foreground/[0.06] px-6 overflow-hidden data-[state=open]:border-accent/15 transition-colors"
              >
                <AccordionTrigger className="text-primary-foreground text-sm md:text-base font-medium hover:no-underline hover:text-accent transition-colors py-5 [&>svg]:text-accent/50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/50 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
