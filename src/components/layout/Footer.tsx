import { useTranslations } from "next-intl";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const socialItems = [
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-cinema-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold">
                <span className="text-xs font-black text-cinema-black">GF</span>
              </div>
              <p className="text-lg font-bold tracking-tight text-white">
                Good Film <span className="text-gold">AI</span>
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t("tagline")}</p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {socialItems.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-500 transition-all duration-300 hover:border-gold/30 hover:bg-gold/5 hover:text-gold"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center text-sm text-gray-700">
          &copy; {year} {t("company")}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
