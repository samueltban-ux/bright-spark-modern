import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [stage, setStage] = useState<"in" | "out">("in");
  const [content, setContent] = useState(children);
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === key) {
      setContent(children);
      return;
    }
    setStage("out");
    const t = setTimeout(() => {
      setContent(children);
      setKey(location.pathname);
      setStage("in");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 220);
    return () => clearTimeout(t);
  }, [location.pathname, children, key]);

  return (
    <div
      className={`transition-opacity duration-300 ease-out ${
        stage === "in" ? "opacity-100" : "opacity-0"
      }`}
    >
      {content}
    </div>
  );
};

export default PageTransition;
