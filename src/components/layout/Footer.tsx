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
    <footer className="border-t border-white/10 bg-cinema-black px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">
              Good Film <span className="text-gold">AI</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">{t("tagline")}</p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialItems.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-gray-400 transition-all hover:border-gold/50 hover:text-gold"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-600">
          &copy; {year} {t("company")}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
