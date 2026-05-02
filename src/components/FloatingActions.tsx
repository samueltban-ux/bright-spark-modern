import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "421900000000"; // TODO: real number
const WHATSAPP_MSG = encodeURIComponent("Dobrý deň, mám záujem o informácie o vašich prístrojoch.");

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktujte nás cez WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 animate-fade-in"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="relative w-5 h-5 md:w-6 md:h-6 fill-current" />
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Späť hore"
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:scale-110 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default FloatingActions;
