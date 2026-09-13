import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Zadajte platný e-mail" })
    .max(255, { message: "E-mail je príliš dlhý" }),
});

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast({ title: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xpwzgkdl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data.email, source: "newsletter" }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      setEmail("");
      toast({ title: "Ďakujeme!", description: "Pridali sme vás do newslettera." });
    } catch {
      toast({ title: "Chyba pri odoslaní", description: "Skúste to prosím znova.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-3xl mx-auto rounded-lg md:rounded-2xl gradient-navy p-6 md:p-12 relative overflow-hidden border border-primary-foreground/5">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/15 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[hsl(var(--sky-light)/0.1)] rounded-full blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <Mail className="w-3 h-3 text-accent" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Newsletter</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2 leading-tight">
                Buďte prví o <span className="text-gradient">novinkách</span> v estetike
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                Tipy, novinky o prístrojoch a exkluzívne akcie priamo do vašej schránky.
              </p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/30" />
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  disabled={done}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vas@email.sk"
                   className="w-full min-h-12 rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/[0.1] text-primary-foreground text-base md:text-sm pl-11 pr-4 py-3 placeholder:text-primary-foreground/25 focus:outline-none focus:border-accent/40 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading || done}
                 className="inline-flex min-h-12 items-center justify-center gap-2 bg-success hover:bg-success/90 text-success-foreground font-semibold text-sm rounded-lg px-6 py-3 transition-all disabled:opacity-50 hover:-translate-y-0.5"
              >
                {done ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Odoberané
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Odosiela sa...
                  </>
                ) : (
                  <>
                    Prihlásiť sa <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-primary-foreground/30 text-center">
                Bez spamu. Odhlásiť sa môžete kedykoľvek.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
