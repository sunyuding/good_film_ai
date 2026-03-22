"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  function switchLocale(target: "en" | "zh") {
    window.location.pathname = `/${target}`;
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-cinema-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="text-lg font-bold text-white">
          Good Film <span className="text-gold">AI</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-gold"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        {/* Desktop language switcher */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher onSwitch={switchLocale} currentLocale={locale} />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-cinema-black/95 px-6 py-4 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-base font-medium text-gray-300 transition-colors hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              {t(item.label)}
            </a>
          ))}
          <div className="mt-4 border-t border-white/10 pt-4">
            <LanguageSwitcher onSwitch={switchLocale} currentLocale={locale} />
          </div>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitcher({
  onSwitch,
  currentLocale,
}: {
  readonly onSwitch: (locale: "en" | "zh") => void;
  readonly currentLocale: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <Globe size={16} />
      <button
        type="button"
        onClick={() => onSwitch("en")}
        className={`transition-colors hover:text-white ${currentLocale === "en" ? "text-white font-semibold" : ""}`}
      >
        EN
      </button>
      <span>/</span>
      <button
        type="button"
        onClick={() => onSwitch("zh")}
        className={`transition-colors hover:text-white ${currentLocale === "zh" ? "text-white font-semibold" : ""}`}
      >
        中文
      </button>
    </div>
  );
}
