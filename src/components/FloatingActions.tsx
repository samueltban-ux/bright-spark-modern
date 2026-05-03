import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Späť hore"
      className={`fixed left-4 md:left-6 bottom-4 md:bottom-6 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:scale-110 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 ${
        showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default FloatingActions;
