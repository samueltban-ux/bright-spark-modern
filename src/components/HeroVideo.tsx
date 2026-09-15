import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type HeroVideoMode = "portrait" | "fullscreen";

export interface HeroVideoConfig {
  /** YouTube video ID, napr. "dQw4w9WgXcQ" */
  id: string;
  mode: HeroVideoMode;
}

interface HeroVideoProps {
  video: HeroVideoConfig;
  /** Prehráva sa iba na aktívnom slide */
  active: boolean;
  title: string;
  className?: string;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const HeroVideo = ({ video, active, title, className }: HeroVideoProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (active && !prefersReducedMotion()) setMounted(true);
  }, [active]);

  if (!mounted) return null;

  const src =
    `https://www.youtube-nocookie.com/embed/${video.id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&playsinline=1` +
    `&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3`;

  return (
    <iframe
      key={active ? "on" : "off"}
      src={active ? src : undefined}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className={cn("absolute inset-0 h-full w-full border-0", className)}
    />
  );
};

export default HeroVideo;
