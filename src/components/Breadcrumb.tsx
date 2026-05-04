import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string;
}

const Breadcrumb = ({ items }: { items: Crumb[] }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 pt-6"
    >
      <ol className="flex items-center gap-1.5 text-xs text-primary-foreground/50 flex-wrap">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Domov</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-primary-foreground/30" />
            {item.href ? (
              <Link to={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary-foreground/80 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
