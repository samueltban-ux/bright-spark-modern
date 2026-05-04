import { useRef, ReactNode, MouseEvent, ElementType } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  strength?: number;
  type?: "button" | "submit";
  disabled?: boolean;
}

const MagneticButton = ({
  as,
  href,
  children,
  className,
  strength = 0.35,
  ...rest
}: MagneticProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const Component: ElementType = as ?? (href ? "a" : "button");

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-flex transition-transform duration-200 ease-out will-change-transform", className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
