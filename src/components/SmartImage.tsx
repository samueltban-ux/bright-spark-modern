import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const SmartImage = ({ className, wrapperClassName, onLoad, ...props }: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("relative", wrapperClassName)}>
      {!loaded && (
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-foreground/[0.04] via-primary-foreground/[0.08] to-primary-foreground/[0.04] animate-pulse"
          aria-hidden
        />
      )}
      <img
        loading="lazy"
        decoding="async"
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
};

export default SmartImage;
