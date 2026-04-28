import type { NavItem, ServiceItem, PortfolioItem } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "about", href: "#about" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
] as const;

export const NAV_DROPDOWN = {
  labelKey: "projects",
  items: [
    { labelKey: "ai_agent", href: "/trae", sublabel: "trae_solo" },
    { labelKey: "robotics", href: "/tether", sublabel: "tether" },
    { labelKey: "river_of_life", href: "/river-of-life" },
    { labelKey: "kah_bay_area", href: "/kah" },
  ],
} as const;

export const SERVICES: readonly ServiceItem[] = [
  { key: "corporate", icon: "Film" },
  { key: "event", icon: "Camera" },
  { key: "commercial", icon: "Megaphone" },
  { key: "ai", icon: "Sparkles" },
] as const;

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    key: "trae",
    image: "/images/portfolio-trae.jpg",
    videoUrl: "https://www.youtube.com/watch?v=fCAt50gHtLo",
    videoId: "fCAt50gHtLo",
  },
  {
    key: "tether",
    image: "/images/portfolio-robotics.jpg",
    videoUrl: "https://www.youtube.com/watch?v=w1GwRfy01Ag",
    videoId: "w1GwRfy01Ag",
  },
] as const;

export const TRAE_VIDEOS = [
  {
    key: "launch",
    videoId: "unwAa326n9M",
    url: "https://www.youtube.com/watch?v=unwAa326n9M",
  },
  {
    key: "vision",
    videoId: "fCAt50gHtLo",
    url: "https://www.youtube.com/watch?v=fCAt50gHtLo",
  },
  {
    key: "community",
    videoId: "mG8ey_PZ1Tc",
    url: "https://www.youtube.com/watch?v=mG8ey_PZ1Tc",
  },
] as const;

export const TETHER_VIDEO = {
  videoId: "w1GwRfy01Ag",
  url: "https://www.youtube.com/watch?v=w1GwRfy01Ag",
} as const;

export const CALENDLY_URL = "https://calendly.com/goodfilmai";

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@goodfilmai",
  instagram: "https://www.instagram.com/goodfilmai",
  linkedin: "https://www.linkedin.com/company/goodfilmai",
} as const;
